import React from "react";
import { connect } from "react-redux";
import Axios from "axios";
import Router from "next/router";

import Examples from "../components/examples";
import { actionTypes } from "../config/types";
import { temApelido } from "../config/actions/UserActions";
import Template from "../components/Template";

import "../static/css/index.css";

class Index extends React.Component {
  static getInitialProps({ reduxStore, req }) {
    const isServer = !!req;
    //reduxStore.dispatch(serverRenderClock(isServer))

    return {};
  }

  componentDidMount() {
    // if (localStorage.getItem("authToken")) {
    //   this.props.temApelido();
    // }
    Axios.post(`${actionTypes.URL}validateToken`, {
      token: localStorage.getItem("authToken")
    })
      .then(res => {
        console.log("cdi", res);
        if (!res.data) {
          localStorage.removeItem("authToken");
          Axios.defaults.headers.common["Authorization"] = ``;
          Router.push("/Login");
        } else {
          this.props.temApelido();
        }
        console.log("validate Token", res);
      })
      .catch(erro => {});
  }

  componentWillUnmount() {
    //clearInterval(this.timer)
  }

  render() {
    return (
      <Template>
        <div className="container" style={{ marginTop: "15%" }}>
          <div className="row">
            <div className="col-sm-6" style={{ margin: "0 auto" }}>
              <button
                onClick={() =>
                  Router.push("/NewMemePage")
                }
                className="index-test-buttons"
                id="create-meme-page"
              >
                <img src="../static/images/new-window.png" alt="nova janela" />
                <p>New Meme Page</p>
              </button>
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
