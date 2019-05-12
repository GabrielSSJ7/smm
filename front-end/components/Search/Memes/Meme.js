import { Container, Row, Col, Image, Button } from "react-bootstrap";
import Link from "next/link";
import Router from "next/router"

import "../../../static/css/meme.css";

export default class Meme extends React.Component {
  render() {
    return (
      <Container style={{ marginBottom: "25px", background:"rgb(26, 26, 27)" }}>
        <Row style={{ background: "black"}}>
          <Col style={{ border: "1px solid lightgrey" }}>
            <h4 style={{ fontWeight: "bold", color: "white" }}>
              Memes:
            </h4>
          </Col>
        </Row>
        <Row
          style={{ display: "flex", flexDirection: "column", padding: "25px" }}
        >
          {this.renderPages()}
        </Row>
      </Container>
    );
  }

  renderPages() {
    let component = [];
    this.props.memes.forEach((element, index) => {
      component.push(
        <div className="page-search-item" key={index}>
          <div className="page-img-and-name">
            <Link href={`page?id=${element.id}&type=m`}>
              <div
                className="page-div-circle hover"
                style={{ backgroundImage: `url(${element.midia})` }}
              />
            </Link>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <Link href={`page?id=${element.id}&type=m`}>
                <p className="page-name">{element.nome}</p>
              </Link>
            </div>
          </div>
        
        </div>
      );
    });

    return component;
  }
}
