import App, { Container } from "next/app";
import React from "react";
import withReduxStore from "../lib/with-redux-store";
import { Provider } from "react-redux";
import {withRouter} from 'next/router';

//import "../static/css/index.css";

class MyApp extends App {

  
  componentDidMount() {
    window.fbAsyncInit = function() {
      FB.init({
        appId: "275585769781580",
        cookie: true,
        xfbml: true,
        version: "v3.1"
      });

      FB.AppEvents.logPageView();
    };

    (function(d, s, id) {
      var js,
        fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) {
        return;
      }
      js = d.createElement(s);
      js.id = id;
      js.src = "https://connect.facebook.net/en_US/sdk.js";
      fjs.parentNode.insertBefore(js, fjs);
    })(document, "script", "facebook-jssdk");
  }

  render() {
    const { Component, pageProps, reduxStore } = this.props;
    return (
      <Container>
        <Provider store={reduxStore}>
          <Component {...pageProps} />
        </Provider>
      </Container>
    );
  }
}

export default withRouter(withReduxStore(MyApp));
