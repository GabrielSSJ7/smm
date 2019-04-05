import React from "react";
import { connect } from "react-redux";
import Router from "next/router";

import { temApelido } from "../config/actions/UserActions";
import Template from "../components/Template";
import NavBar from "../components/NavBar";

//import "../static/css/index.css";

class NewMemePage extends React.Component {
  static getInitialProps({ reduxStore, req }) {
    const isServer = !!req;
    //reduxStore.dispatch(serverRenderClock(isServer))

    return {};
  }

  componentDidMount() {
    this.props.temApelido()
  }

  render() {
    return (
      <div>
        <NavBar show={this.props.show} />
        <Template>
          <div className="container" style={{ marginTop: "15%" }}>
            <div className="row">
              <div className="col-sm-4">

              </div>
            </div>
          </div>
        </Template>
      </div>
    );
  }
}


const mapStateToProps = state => {
  console.log("index:mapStateToProps => ", state.UserReducer.show)
  return {
    show: state.UserReducer.show,
    resultNick: state.UserReducer.resultNick
  };
};

export default connect(
  mapStateToProps,
  { temApelido }
)(NewMemePage);
