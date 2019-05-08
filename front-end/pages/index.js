import React from "react";
import { connect } from "react-redux";
import { withRouter } from "next/router";
import { temApelido, mudaNickName } from "../config/actions/UserActions";
import Template from "../components/Template";
import { Modal, Button } from "react-bootstrap";
import ModalNickName from "../components/ModalNickName";
import firebase from 'firebase/app';

import "../static/css/index.css";
import NavBar from "../components/NavBar";

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = { nick: "", show: false };
  }

  componentDidMount() {
   
    this.props.temApelido();
    this.setState({
      nick: localStorage.getItem("nick"),
      show: this.props.show
    });
  }

  handleClose() {
    this.setState({
      show: true
    });
  }

  hasNickName() {
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
    console.log("index:render", this.props.show);
    return (
      <div>
        <NavBar />
        <Template>
          <div className="container" style={{ marginTop: "15%" }}>
            <div className="row" />
          </div>

          <ModalNickName show={this.props.show} />
        </Template>
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log("index:mapStateToProps => ", state.UserReducer.show);
  return {
    show: state.UserReducer.show,
    resultNick: state.UserReducer.resultNick
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    { temApelido, mudaNickName }
  )(Index)
);
