import React from 'react';
import "../../../static/css/index.css";
import { Modal, Button } from 'react-bootstrap';
import Link from 'next/link'

export default class ModalFollowers extends React.Component {


    render() {
        return <Modal show={this.props.showModalFollowers} onHide={this.props.handleCloseFollowers}>
            <Modal.Body style={{ background: "rgb(26, 26, 27)" }}  >
                {this.renderList()}
            </Modal.Body>
        </Modal>
    }

    renderList() {
        const { followers } = this.props;
        let i = 0;
       const e = followers.map(element => {
           i++
            return <div className="post-div-autor" style={{ margin: 10, alignItems: "flex-start" }} key={i}>
                <Link href={`page?id=${element.id}&type=profile`}>
                    <div className="post-div-circle" style={{ backgroundImage: `url(${element.foto})`, minWidth: "50px" }}></div>
                </Link>
                <Link href={`page?id=${element.id}&type=profile`}  >
                    <p className="post-nick" style={{ color: "white", alignSelf: "center" }}>{element.nick}</p>
                </Link>
            </div>
        });
        return e;
    }
}