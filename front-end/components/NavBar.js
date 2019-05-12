import React from "react";
import Link from "next/link";
import Router from "next/router";
import { NavDropdown, Navbar, Nav } from "react-bootstrap";

import "../static/css/index.css";
import "../static/css/navbar.css";
class navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { nick: null, key: "", data: {} };
  }
  componentDidMount() {
    if (localStorage.getItem("data")) {
      this.setState({
        nick: true,
        data: JSON.parse(localStorage.getItem("data"))
      });
    }
  }

  logOut() {
    localStorage.removeItem("data");
    location.reload();
  }

  hasNickName() {
    if (this.state.nick) {
      return (
        <>
          <Nav.Link href="#deets">{this.state.data.nick}</Nav.Link>
          <NavDropdown title="Opções" id="collasible-nav-dropdown">
            <NavDropdown.Item
              href="/NewMemePage"
              eventKey="4.1"
              className="nav-dropdown-item"
            >
              Criar Meme
            </NavDropdown.Item>
          </NavDropdown>
          <Nav.Link
            onClick={() =>
              Router.push("/NewPostUser", "new-post", { shallow: true })
            }
          >
            <i className="fas fa-plus" />
          </Nav.Link>
          <Nav.Link onClick={() => this.logOut()}>Sair</Nav.Link>
        </>
      );
    } else {
      return (
        <Nav.Link
          id="btn-login"
          onClick={() => {
            window.location = "/Login";
          }}
        >
          Fazer Login
        </Nav.Link>
      );
    }
  }

  _handleKeyDown(e) {
    if (e.key === "Enter") {
      if (this.state.key != "") {
        window.location = `/Search?key=${this.state.key}`;
      }
    }
  }


  render() {
    return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="#home">Sauce Web</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto" style={{ width: "70%", margin: "0 auto" }}>
              <input
                onChange={texto => {
                  this.setState({ key: texto.target.value });
                }}
                id="search-input"
                className="form-control"
                placeholder="Pesquisar"
                onKeyDown={this._handleKeyDown.bind(this)}
              />
              <button
                id="search-btn"
                onClick={() => {
                  window.location = `/Search?key=${this.state.key}`;
                }}
                style={{ backgroundColor: "white" }}
                className="btn btn-default"
              >
                <i className="fas fa-search" />
              </button>
          </Nav>
          <Nav>{this.hasNickName()}</Nav>
        </Navbar.Collapse>
      </Navbar>
      // <div className="container-fluid" id="container-navbar">
      //   <div className="row" id="row-i-container-navbar">
      //     <div className="col-md-2">
      //       <Link href="/" ><a id="navbar-brand">Sauce</a></Link>
      //     </div>
      //     <div className="col-md-6">
      //       <div className="row">
      //         <div className="col-md-11" style={{ paddingRight: 0 }}>
      //           <input onChange={texto => {this.setState({ key: texto.target.value})}} id="search-input" className="form-control" placeholder="Pesquisar" />
      //         </div>
      //         <div className="col-md-1" style={{ marginLeft: -1, paddingLeft: 0 }}>
      //           <button id="search-btn" onClick={() => {window.location = `/Search?key=${this.state.key}`}} className="btn btn-default"><i className="fas fa-search"></i></button>
      //         </div>
      //       </div>
      //     </div>
      //     <div className="col-md-4">
      //       {this.hasNickName()}
      //     </div>
      //   </div>
      // </div>
    );
  }
}

export default navbar;
