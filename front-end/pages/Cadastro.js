import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Router from "next/router";

import {
  mudaNome,
  mudaEmail,
  mudaSenha,
  cadastrar,
  mudaNickName
} from "../config/actions/UserActions";
import Template from "./../components/Template";

class Cadastro extends React.Component {
  static getInitialProps({ reduxStore, req }) {
    const isServer = !!req;

    return {};
  }

  constructor(props) {
    super(props);

    this.state = {
      error: ""
    };
  }

  componentDidMount() {
    if (this.props.result) {
      console.log(this.props.result);
      Router.push(`/Login`);
    }
    if (localStorage.getItem("authToken")) {
      Router.push("/");
    }
  }

  componentWillUnmount() {}

  _cadastrar() {
    const data = {
      nome: this.props.nome,
      email: this.props.email,
      password: this.props.password,
      nick: this.props.nick
    };

    this.props.cadastrar(data);
  }

  jatemapelido() {
    console.log("result Apelido",this.props.resultNick)
    if (this.props.resultNick != "Apelido já está sendo usado") {
      return (
        <div>
          <p style={{ textAlign: "center", color: "green" }}>
            {this.props.resultNick}
          </p>
        </div>
      );
    } else {
      return (
        <div>
          <p style={{ textAlign: "center", color: "red" }}>
            {this.props.resultNick}
          </p>

    
        </div>
      );
    }
  }

  render() {
    return (
      <Template>
        <div className="container">
          <div className="row">
            <div className="col-sm-6" style={{ margin: "10% auto" }}>
              <div className="form-group">
                <label>Nome</label>
                <input
                  id="nome"
                  className="form-control"
                  type="text"
                  onChange={e => this.props.mudaNome(e.target.value)}
                />
              </div>
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
                <label>Nickname</label>
                <input
                  id="email"
                  className="form-control"
                  type="text"
                  onChange={e => this.props.mudaNickName(e.target.value)}
                  value={this.props.nick}
                  autoComplete="off"
                />
                  {this.jatemapelido()}
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

            

              <button
                className="btn btn-info"
                onClick={() => this._cadastrar()}
              >
                Cadastrar
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
    mudaNome: bindActionCreators(mudaNome, dispatch),
    mudaEmail: bindActionCreators(mudaEmail, dispatch),
    mudaSenha: bindActionCreators(mudaSenha, dispatch),
    cadastrar: bindActionCreators(cadastrar, dispatch),
    mudaNickName: bindActionCreators(mudaNickName, dispatch)
  };
};

const mapStateToProps = state => {
  console.log("state.main", state);
  return {
    nome: state.UserReducer.nome,
    email: state.UserReducer.email,
    password: state.UserReducer.password,
    result: state.UserReducer.result,
    resultNick: state.UserReducer.resultNick,
    nick: state.UserReducer.nick
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cadastro);
