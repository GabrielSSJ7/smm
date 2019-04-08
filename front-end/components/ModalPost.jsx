import React from "react";
import { connect } from "react-redux";
import { withRouter } from "next/router";
import { temApelido, mudaNickName, cadastrarApelido } from "../config/actions/UserActions";
import { Modal, Image } from 'react-bootstrap';


import "../static/css/index.css";

class ModalPost extends React.Component {
    constructor(props) {
        super(props);
        this.state = { nick: '', show: false, comment: "" }
    }
    componentDidMount() {
    }
    insertComment(type, id, comment){
        this.props.insertComment(type, id, comment)
    }

    // handleClose() {
    //     this.setState({
    //         show: false
    //     })

    // }
    render() {
        console.log(this.props)
        const { post } = this.props
        return (
            <Modal show={this.props.show} onHide={this.props.handleClose(false)}>                <Modal.Header closeButton>
                <Modal.Title>Sauce</Modal.Title>
            </Modal.Header>
                <Modal.Body>
                    <div className="post" >
                        <div className="post-header" style={{ borderBottom: "1px solid" }}>
                            <div className="container">
                                <div className="row">
                                    <div
                                        className="col-md-2"
                                        id="post-div-updownvote"
                                        style={{ display: "flex", flexDirection: "column", paddingRight: 0 }}
                                    >
                                        <button className="btn-upvote" onClick={async () => this.upOrDownVote(index, 'up')} style={{ color: post.up_on ? "orange" : "black" }}>
                                            <i className="fas fa-long-arrow-alt-up" />
                                        </button>
                                        <p>{post.upvote}</p>
                                        <button className="btn-downvote" onClick={async () => this.upOrDownVote(index, 'u')} >
                                            <i style={{ color: post.down_on ? "orange" : "black" }} className="fas fa-long-arrow-alt-down" />
                                        </button>
                                    </div>
                                    <div className="col-md-10" style={{ display: "flex", flexDirection: "row", alignItems: "center", paddingLeft: 0 }}>
                                        <div className="post-div-circle" style={{ borderRadius: "100%" }}>
                                            <Image
                                                src={post.foto}
                                            />
                                        </div>

                                        <p style={{ marginLeft: "2%", marginTop: 16 }}>{post.nick}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="post-body">
                            <div className="container">

                                <p style={{ marginTop: "15px" }}>{post.titulo}</p>
                                <p>{post.descricao}</p>

                                <div className="row">
                                    <div style={{ height: "500" }}>
                                        <Image
                                            style={{
                                                width: "100%",
                                                maxWidth: "100%",
                                                maxHeight: "100%"
                                            }}
                                            fluid
                                            src={post.midia}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="post-footer" style={{ marginTop: 15 }}>
                            <div style={{ zIndex: "9999999" }}>
                                <button onClick={() => { }}>
                                    <i className="fas fa-comment-alt" /> <span>{post.comments} Comments</span>
                                </button>
                            </div>
                            <div style={{ display: "flex", flexDirection: "column" }}><div style={{ display: "flex", flexDirection: "row" }}>
                                <input onChange={e => this.setState({ comment: e.target.value })} placeholder="Comente algo..." className="form-control input-comment" />
                                <button onClick={() => this.insertComment(post.type, post.id, this.state.comment)} className="btn btn-default btn-comments-send"><i className="far fa-paper-plane"></i></button>

                            </div>
                                <div>
                                    {this.renderPostComments()}
                                </div>
                            </div>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        );
    }

    renderPostComments() {
        if (this.props.comments) {
            let list = []
            for (let index = 0; index < this.props.comments.length; index++) {
                list.push(
                    <div style={{ display: "flex", flexDirection: "column", margin: 10 }} key={index}>
                        <div style={{ display: "flex", flexDirection: "row" }}>
                            <div className="post-div-circle" style={{ borderRadius: "100%" }}>
                                <Image
                                    src={this.props.comments[index].foto}
                                />
                            </div>
                            <p style={{ marginLeft: "2%", marginTop: 16 }} ><strong>{this.props.comments[index].nick}</strong>  {this.props.comments[index].comment}</p>
                        </div>
                        
                    </div>
                )
            }
            return list;
        }
    }
}




export default withRouter(
    connect(
        null,
        { temApelido, mudaNickName, cadastrarApelido }
    )(ModalPost)
);
