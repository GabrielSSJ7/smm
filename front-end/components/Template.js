import Head from "next/head";
import Axios from "axios";
import { actionTypes } from "../config/types";
import NavBar from "./NavBar";
import Router from 'next/router';
import {Modal, Button} from 'react-bootstrap';

let nick = null;

import '../static/css/index.css';
class Template extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nick: ""
    };
  }
  componentDidMount() {
    if (localStorage.getItem("nick")) {
      nick = localStorage.getItem("nick");
      Axios.post(`${actionTypes.URL}validateToken`, {
        token: localStorage.getItem("authToken")
      })
        .then(res => {
          if (!res.data) {
            localStorage.removeItem("authToken");
            Axios.defaults.headers.common["Authorization"] = ``;
          } else {
            this.props.temApelido();
          }
        })
        .catch(erro => { });
    }
  }


  render() {
    return (
      <div>
        <Head>
          <title>Sauce Web</title>
          <link
            rel="stylesheet"
            href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
          />
          <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css" integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossOrigin="anonymous" />      
        </Head>

        

        <div className="container-fluid">{this.props.children}</div>

        <Modal show={this.props.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={this.handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>

        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js" />

        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" />

        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" />
      </div>
    );
  }
}

export default Template;
