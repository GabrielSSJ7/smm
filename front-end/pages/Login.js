import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Link from "next/link";
import Router from "next/router";
import {
  mudaNome,
  mudaEmail,
  mudaSenha,
  entrar,
  loginWithFacebook,
  mudaNickName,
  temApelido
} from "../config/actions/UserActions";
import Template from "./../components/Template";
import { Modal, Button } from "react-bootstrap";
import Axios from "axios";
import { actionTypes } from "../config/types";

class Login extends React.Component {
  static getInitialProps({ reduxStore, req }) {
    const isServer = !!req;

    return {};
  }

  constructor(props) {
    super(props);

    this.state = {
      show: false
    };
  }

  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }

  componentDidMount()  {
    
    if (localStorage.getItem("authToken")) {
      Router.push("/")
      this.props.temApelido();
    }
  }

  componentWillUnmount() {}

  _entrar() {
    const data = {
      nome: this.props.nome,
      email: this.props.email,
      password: this.props.password
    };

    this.props.entrar(data);
  }

  render() {
    if (this.props.show) {
      //Router.push("/");

      return (
        <Template>
          <div className="container">
            <div className="row">
              <div className="col-sm-6" style={{ margin: "10% auto" }}>
                <h2>Escolha seu apelido!</h2>
                <div className="form-group">
                  <label>Nickname</label>
                  <input
                    id="email"
                    className="form-control"
                    type="text"
                    onChange={e => this.props.mudaNickName(e.target.value)}
                  />
                </div>

                <p style={{ textAlign: "center", color: "red" }}>
                  {this.props.result}
                </p>

                <button className="btn btn-info" onClick={() => this._entrar()}>
                  Confirmar
                </button>
              </div>
            </div>
          </div>
        </Template>
      );
    }
    return (
      <Template>
        <div className="container">
          <div className="row">
            <div className="col-sm-6" style={{ margin: "10% auto" }}>
              <div className="form-group">
                <label>E-mail</label>
                <input
                  id="email"
                  className="form-control"
                  type="text"
                  onChange={e => this.props.mudaEmail(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label>Senha</label>
                <input
                  id="senha"
                  className="form-control"
                  type="password"
                  onChange={e => this.props.mudaSenha(e.target.value)}
                />
              </div>

              <p style={{ textAlign: "center", color: "red" }}>
                {this.props.result}
              </p>

              <div className="login100-form-social flex-c-m">
                <a
                  style={{
                    padding: "2%",
                    backgroundColor: "#3b5998",
                    cursor: "pointer"
                  }}
                  onClick={() => this.props.loginWithFacebook()}
                  className="login100-form-social-item flex-c-m bg1 m-r-5"
                >
                  <i
                    style={{ color: "white" }}
                    className="fa fa-facebook-f"
                    aria-hidden="true"
                  />
                </a>
              </div>

              <div className="row">
                <Link href="/Cadastro">
                  <a style={{ textAlign: "center" }}>
                    ainda não possui um cadastro?
                  </a>
                </Link>
              </div>

              <button onClick={this.handleShow.bind(this)}>Abrir</button>

              <button className="btn btn-info" onClick={() => this._entrar()}>
                Entrar
              </button>
            </div>
          </div>
        </div>
      </Template>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    mudaEmail: bindActionCreators(mudaEmail, dispatch),
    mudaSenha: bindActionCreators(mudaSenha, dispatch),
    entrar: bindActionCreators(entrar, dispatch),
    loginWithFacebook: bindActionCreators(loginWithFacebook, dispatch),
    mudaNickName: bindActionCreators(mudaNickName, dispatch),
    temApelido: bindActionCreators(temApelido, dispatch),
  };
};

const mapStateToProps = state => {
  console.log("state.main", state.UserReducer.show);
  return {
    email: state.UserReducer.email,
    password: state.UserReducer.password,
    result: state.UserReducer.result,
    show: state.UserReducer.show
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
