import React from 'react'
import { connect } from 'react-redux'
import Axios from 'axios';
import Router from 'next/router'

import Examples from '../components/examples'
import { actionTypes } from '../config/types';

class Index extends React.Component {
  static getInitialProps ({ reduxStore, req }) {
    const isServer = !!req
    //reduxStore.dispatch(serverRenderClock(isServer))

    return {}
  }

  componentDidMount () {
    Axios.post(`${actionTypes.URL}validateToken`, { token: localStorage.getItem("authToken")})
    .then(res => {
      if(!res.data){
        localStorage.removeItem("authToken");
        Axios.defaults.headers.common["Authorization"] = ``; 
        Router.push("/Login");
      }
      console.log("validate Token", res)
    })
    .catch(erro => {

    })
  }

  componentWillUnmount () {
    //clearInterval(this.timer)
  }

  render () {
    return <Examples />
  }
}

export default connect()(Index)
