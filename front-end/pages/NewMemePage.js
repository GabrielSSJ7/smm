import React from "react";
import { connect } from "react-redux";
import Router from "next/router";

import { temApelido } from "../config/actions/UserActions";
import Template from "../components/Template";

import "../static/css/index.css";

class Index extends React.Component {
  static getInitialProps({ reduxStore, req }) {
    const isServer = !!req;
    //reduxStore.dispatch(serverRenderClock(isServer))

    return {};
  }

  render() {
    return (
      <Template>
        <div className="container" style={{ marginTop: "15%" }}>
          <div className="row">
            <div className="col-sm-4">

                
            
            </div>
          </div>
        </div>
      </Template>
    );
  }
}

export default connect(
  null,
  { temApelido }
)(Index);
