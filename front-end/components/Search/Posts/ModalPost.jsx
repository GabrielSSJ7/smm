import React from "react";
import { connect } from "react-redux";
import { withRouter } from "next/router";
import Link from 'next/link';
import { temApelido, mudaNickName, cadastrarApelido } from "../../../config/actions/UserActions";
import { Image, Row, Col, Container, Modal } from "react-bootstrap";

import "../../../static/css/index.css";

class ModalPost extends React.Component {
    constructor(props) {
        super(props);
        this.state = { nick: '', show: false, comment: "", inputBorder: "1px solid lightgrey" }
    }
    _comment(post) {
        if (this.state.comment != "") {
            this.setState({
                comment: "",
                inputBorder: "1px solid lightgrey"
            })
            this.props.comment(
                {
                    option: 'i',
                    id_post: post.id,
                    comment: this.state.comment,
                    type: post.type, id_comment: null
                });
            this.setState({ comment: "" });
        } else {
            this.setState({
                inputBorder: "1px solid red"
            })
        }
    }
    render() {
        const { post, comments, indexForModal } = this.props
        return (
            <Modal show={this.props.show} onHide={this.props.handleClose(false)}>
                <Modal.Body style={{ background: "rgb(26, 26, 27)" }}>
                    <div className="post">
                        {/* HEADER */}
                        <div className="post-header" style={{ borderBottom: "1px solid orange" }}>
                            <Container>
                                <Row >
                                    <Col md={12} style={{ display: "flex", flexDirection: "row", alignItems: "center", paddingLeft: 0 }}>
                                        <div className="post-div-updownvote">
                                            <button
                                                className="btn-upvote"
                                                onClick={async () => this.props.upOrDownVote(
                                                    {
                                                        id_post: post.id,
                                                        type: post.type,
                                                        vote: 'up'
                                                    }
                                                )}
                                                style={{ color: post.up_on ? "orange" : "white" }}
                                            >
                                                <i className="fas fa-long-arrow-alt-up" />
                                            </button>
                                            <p>{post.upvote}</p>
                                            <button
                                                className="btn-downvote"
                                                onClick={async () => this.props.upOrDownVote(
                                                    {
                                                        id_post: post.id,
                                                        type: post.type,
                                                        vote: 'u'
                                                    }
                                                )}
                                            >
                                                <i
                                                    style={{ color: post.down_on ? "orange" : "white" }} className="fas fa-long-arrow-alt-down"
                                                />
                                            </button>
                                        </div>
                                        {
                                            post.type == 'u' ?
                                                <div className="post-div-autor">
                                                    <Link href={`page?id=${post.id}&type=profile`} >
                                                        <div className="post-div-circle" style={{ backgroundImage: `url(${post.foto})` }}></div>
                                                    </Link>
                                                    <Link href={`page?id=${post.id}&type=profile`} >
                                                        <p className="post-nick">{post.nick}</p>
                                                    </Link>
                                                </div>
                                                :
                                                <div className="post-div-page-autor">
                                                    <div className="post-div-autor">
                                                        <Link href={`page?id=${post.id}&type=profile`} >
                                                            <div className="post-div-circle" style={{ backgroundImage: `url(${post.foto})` }}></div>
                                                        </Link>
                                                        <Link href={`page?id=${post.id}&type=profile`} >
                                                            <p className="post-nick">{post.nick}</p>
                                                        </Link>
                                                    </div>
                                                    <div className="post-div-page">
                                                        <Link href={`page?id=${post.page_id}&type=profile`} >
                                                            <div className="post-div-circle" style={{ backgroundImage: `url(${post.page_midia})` }}></div>
                                                        </Link>
                                                        <Link href={`page?id=${post.page_id}&type=profile`} >
                                                            <p className="post-nick">{post.page_name}</p>
                                                        </Link>
                                                    </div>
                                                </div>
                                        }
                                    </Col>
                                </Row>
                            </Container>
                        </div>
                        {/* BODY */}
                        <div className="post-body">
                            <div className="container">
                                <p style={{ marginTop: "15px" }}>{post.titulo}</p>
                                <p>{post.descricao}</p>
                                <div className="row">
                                    <div style={{ width: "75%", margin: "auto" }}>
                                        <Image style={{
                                            width: "100%",
                                            maxWidth: "100%",
                                            maxHeight: "100%"
                                        }} fluid src={post.midia} />
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* FOOTER */}
                        <div className="post-footer" style={{ marginTop: 15 }}>
                            <div style={{ zIndex: "9999999" }}>
                                <button onClick={() => { }}>
                                    <i className="fas fa-comment-alt" /> <span>{comments.totalComments} Comments</span>
                                </button>
                            </div>
                            <div style={{ display: "flex", flexDirection: "column" }}><div style={{ display: "flex", flexDirection: "row" }}>
                                <input
                                    style={{ border: this.state.inputBorder, outline: "none" }}
                                    value={this.state.comment}
                                    onChange={e => this.setState({ comment: e.target.value })}
                                    placeholder="Comente algo..."
                                    className="form-control input-comment"
                                    onKeyDown={e => {
                                        if (e.key == "Enter") this._comment(post);
                                    }
                                    }
                                />
                                <button
                                    onClick={() => this._comment(post)}
                                    className="btn btn-default btn-comments-send"
                                >
                                    <i className="far fa-paper-plane"></i>
                                </button>
                            </div>
                                <div style={{ height: "350px", overflow: "auto" }}>
                                    {
                                        Object.keys(this.props.comments).length > 0 ?
                                            this.props.comments.dataComments.map((cl, index) => (
                                                <div key={index} className="post-div-autor" style={{ margin: 10, alignItems: "flex-start" }}>
                                                    <Link href={`page?id=${cl.id}&type=profile`} >
                                                        <div className="post-div-circle" style={{ backgroundImage: `url(${cl.foto})`, minWidth: "50px" }}></div>
                                                    </Link>

                                                    <Link href={`page?id=${cl.id}&type=profile`} >
                                                        <p className="post-nick" style={{ color: "white", alignSelf: "flex-start" }}>{cl.nick}</p>
                                                    </Link>
                                                    <p style={{ marginLeft: "2%", marginTop: 0, color: "lightgrey", wordBreak: "break-all" }} > {cl.comment}</p>
                                                </div>
                                            )) : null
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        );
    }
}
export default withRouter(
    connect(
        null,
        { temApelido, mudaNickName, cadastrarApelido }
    )(ModalPost)
);