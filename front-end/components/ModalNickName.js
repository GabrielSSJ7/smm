import React from "react";
import { connect } from "react-redux";
import { withRouter } from "next/router";
import { temApelido, mudaNickName, cadastrarApelido } from "../config/actions/UserActions";
import { Modal, Button } from 'react-bootstrap';


import "../static/css/index.css";

class ModalNickName extends React.Component {
    constructor(props) {
        super(props);
        this.state = { nick: '', show: false }
    }


    componentDidMount() {
        if(this.props.result){
         
        }
        console.log("ModalNickName:componentDidMount => ",this.props.show)
        this.setState({
            nick: localStorage.getItem("nick"),
            show: this.props.show
        })
    }

    handleClose() {
        this.setState({
            show: true
        })
    }

    registerNickName() {
        this.props.cadastrarApelido(this.props.nick);
    }

    hasNickName() {
        if (this.props.resultNick != "Apelido já está sendo usado") {
            return (
                <div>
                    <p style={{ textAlign: "center", color: "green" }}>
                        {this.props.resultNick}
                    </p>
                </div>
            );
        } else {
            return (
                <div>
                    <p style={{ textAlign: "center", color: "red" }}>
                        {this.props.resultNick}
                    </p>

                </div>
            );
        }
    }

    render() {
        return (
            <Modal show={this.props.show} onHide={this.handleClose.bind(this)}>
                <Modal.Header closeButton>
                    <Modal.Title>Sauce</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>Woohoo, você precisa de um apelido cara!</p>
                    <input id="nick"
                        className="form-control"
                        type="text"
                        onChange={e => this.props.mudaNickName(e.target.value)}
                        value={this.props.nick}
                        autoComplete="off" />
                    {this.hasNickName()}
                </Modal.Body>
                <Modal.Footer>

                    <Button style={{ fontSize: 14 }} variant="primary" onClick={this.registerNickName.bind(this)}>
                        CADASTRAR APELIDOS
              </Button>

                    <Button style={{ fontSize: 14 }} variant="secondary" onClick={this.handleClose.bind(this)}>
                        AINDA NÃO QUERO UM APELIDO
              </Button>
                </Modal.Footer>
            </Modal>
        );
    }
}


const mapStateToProps = state => {

    return {
        show: state.UserReducer.show,
        resultNick: state.UserReducer.resultNick,
        result: state.UserReducer.result,
        nick: state.UserReducer.nick
    };
};


export default withRouter(
    connect(
        mapStateToProps,
        { temApelido, mudaNickName, cadastrarApelido }
    )(ModalNickName)
);
