import React from "react";
import Link from "next/link";
import Router from "next/router";
import { NavDropdown } from 'react-bootstrap'

import '../static/css/index.css';
import '../static/css/navbar.css';
class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { nick: null, key: "", data: {} }
  }
  componentDidMount() {

    if (localStorage.getItem("data")) {
      this.setState({ nick: true, data: JSON.parse(localStorage.getItem("data")) })
    }
  }

  logOut() {
    localStorage.removeItem("data");
    location.reload();
  }

  hasNickName() {
    if (this.state.nick) {
      return <div style={{ display: "flex", float: "right" }}><Link href="#" >
        <a className="btn btn-default">{this.state.data.nick}</a></Link>  
        <NavDropdown title="" id="nav-dropdown">
          <NavDropdown.Item href="/NewMemePage" eventKey="4.1" className="nav-dropdown-item">Criar Meme</NavDropdown.Item>
        </NavDropdown>
        <button className="btn btn-default" onClick={() => this.logOut()}>Sair</button>
        
      </div >
    } else {
      return <button id="btn-login" onClick={() => { window.location = '/Login' }} className="btn btn-default">Fazer Login</button>
    }
  }
  render() {
    return (

      <div className="container-fluid" id="container-navbar">
        <div className="row" id="row-i-container-navbar">
          <div className="col-md-2">
            <Link href="/" ><a id="navbar-brand">Sauce</a></Link>
          </div>
          <div className="col-md-6">
            <div className="row">
              <div className="col-md-11" style={{ paddingRight: 0 }}>
                <input onChange={texto => {this.setState({ key: texto.target.value})}} id="search-input" className="form-control" placeholder="Pesquisar" />
              </div>
              <div className="col-md-1" style={{ marginLeft: -1, paddingLeft: 0 }}>
                <button id="search-btn" onClick={() => {window.location = `/Posts?key=${this.state.key}`}} className="btn btn-default"><i className="fas fa-search"></i></button>
              </div>

            </div>
          </div>
          <div className="col-md-4">
            {this.hasNickName()}
          </div>
        </div>
      </div>
    );
  }
}

export default NavBar;
