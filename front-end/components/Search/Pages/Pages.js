import React from 'react'
import { Container, Row, Col, Image, Button } from "react-bootstrap";
import Link from "next/link";
import Router from "next/router";
import ModalFollowers from "../Pages/ModalFollowers";

import "../../../static/css/pages.css";

export default class Pages extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      sub: [],
      showModalFollowers: false
    };
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps != this.props) {
      let sub = [];
      this.props.pages.forEach((e, i) => {
        sub.push(e.sub);
      });

      this.setState({
        sub
      });
    }
  }

  handleCloseFollowers(v) {
    this.setState({
      showModalFollowers: v
    });
  }

  render() {
    return (
      <Container
        style={{ marginBottom: "25px", background: "rgb(26, 26, 27)" }}
      >
        <Row style={{ background: "black" }}>
          <Col style={{ border: "1px solid lightgrey" }}>
            <h4 style={{ fontWeight: "bold", color: "white" }}>
              Páginas encontradas:
            </h4>
          </Col>
        </Row>
        <Row
          style={{ display: "flex", flexDirection: "column", padding: "25px" }}
        >
          {this.renderPages()}
        </Row>

        <ModalFollowers
          showModalFollowers={this.state.showModalFollowers}
          handleCloseFollowers={this.handleCloseFollowers.bind(this)}
          followers={this.props.followers}
        />
      </Container>
    );
  }

  renderPages() {
    let component = [];
    this.props.pages.forEach((element, index) => {

      component.push(
        <div className="page-search-item" key={index}>
          <div className="page-img-and-name">
            <Link href={`page?id=${element.id}&type=up`}>
              <div
                className="page-div-circle hover"
                style={{ backgroundImage: `url(${element.midia})` }}
              />
            </Link>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <Link href={`page?id=${element.id}&type=up`}>
                <p className="page-name">{element.nome}</p>
              </Link>
              
              <p onClick={() => { 
                this.setState({ showModalFollowers: true })
                this.props.fetchListOfSubscribed(this.props.type, element.id)
              }} className="page-subs" style={{ cursor: "pointer"}}>{element.qtde_subs} followers</p>

            </div>
          </div>
          {this.renderButtonSub(element, index)}
        </div>
      );
    });

    return component;
  }

  subscribePage(id, index) {
    if (JSON.parse(localStorage.getItem("data"))) {
      if (JSON.parse(localStorage.getItem("data")).token) {
        let pagesSub = this.state.sub;
        pagesSub[index] = this.state.sub[index] ? false : true;
        this.setState({
          sub: pagesSub
        });

        this.props.subscribeUserPage(id);
      } else {
        Router.push("/Login");
      }
    } else {
      Router.push("/Login");
    }
  }

  renderButtonSub(element, index) {
    return (
      <Button
        onClick={() => this.subscribePage(element.id, index)}
        className="page-sub-button"
        variant="dark"
      >
        {this.state.sub[index] ? "Unfollow" : "Follow"}
      </Button>
    );
  }
}
