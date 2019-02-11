import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Link from "next/link";
import Router from "next/router";
import {
  temApelido,
  mudaNickName,
  cadastrarApelido
} from "../config/actions/UserActions";
import Template from "./../components/Template";

class Apelido extends React.Component {
  static getInitialProps({ reduxStore, req }) {
    const isServer = !!req;

    return {};
  }

  _cadastrarApelido() {
    this.props.cadastrarApelido(this.props.nick);
  }

  jatemapelido() {
    if (this.props.result != "Apelido já está sendo usado") {
      return (
        <div>
          <p style={{ textAlign: "center", color: "green" }}>
            {this.props.result}
          </p>

          <button
            
            className="btn btn-info"
            onClick={() => this._cadastrarApelido()}
          >
            Confirmar
          </button>
        </div>
      );
    } else {
      return (
        <div>
          <p style={{ textAlign: "center", color: "red" }}>
            {this.props.result}
          </p>

          <button
            disabled
            className="btn btn-info"
            onClick={() => this._cadastrarApelido()}
          >
            Confirmar
          </button>
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
              <h2>Escolha seu apelido!</h2>
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
              </div>

              {this.jatemapelido()}
            </div>
          </div>
        </div>
      </Template>
    );
  }
}

const mapStateToProps = state => {
  return {
    nick: state.UserReducer.nick,
    result: state.UserReducer.result
  };
};

export default connect(
  mapStateToProps,
  { mudaNickName, cadastrarApelido }
)(Apelido);
