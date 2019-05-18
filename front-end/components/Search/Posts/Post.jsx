import React from 'react'
import { Image, Row, Col, Container } from "react-bootstrap";
import ModalPost from "./ModalPost";
import Link from "next/link"

import "../../../static/css/index.css";
import "../../../static/css/post.css";


export default class Post extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nick: "",
      formComments: false,
      comment: "",
      post: {},
      posts: []
    }
  }

  handleClose(v) {
    this.setState({
      formComments: v
    })
  }

  componentDidMount() {
    this.setState({
      nick: localStorage.getItem("nick")
    });
  }
  renderPageAutorOrOnlyAutor(element) {
    if (element.type == 'u') {
      return (
        <div className="post-div-autor">
          <Link href={`page?id=${element.id}&type=profile`} >
            <div className="post-div-circle" style={{ backgroundImage: `url(${element.foto})` }}></div>
          </Link>


          <Link href={`page?id=${element.id}&type=profile`} >
            <p className="post-nick">{element.nick}</p>
          </Link>
        </div>
      )
    } else {
      return (
        <div className="post-div-page-autor">

          <div className="post-div-autor">
            <Link href={`page?id=${element.id}&type=profile`} >
              <div className="post-div-circle" style={{ backgroundImage: `url(${element.foto})` }}></div>
            </Link>


            <Link href={`page?id=${element.id}&type=profile`} >
              <p className="post-nick">{element.nick}</p>
            </Link>
          </div>

          <div className="post-div-page">
            <Link href={`page?id=${element.page_id}&type=up`} >
              <div className="post-div-circle" style={{ backgroundImage: `url(${element.page_midia})` }}></div>
            </Link>


            <Link href={`page?id=${element.page_id}&type=up`} >
              <p className="post-nick">{element.page_name}</p>
            </Link>
          </div>
        </div>
      )
    }
  }

  renderCountComments(post) {
    if (Object.keys(this.props.comments).length == 0) {
      return post.comments
    } else {
      if (post.id == this.props.comments.id_post) {
        return this.props.comments.totalComments
      } else {
        return post.comments
      }
    }

  }
  renderFormComments(post) {

    if (this.state.formComments)
      return <div style={{ display: "flex", flexDirection: "column" }}><div style={{ display: "flex", flexDirection: "row" }}>
        <input onChange={e => this.setState({ comment: e.target.value })} placeholder="Comente algo..." className="form-control input-comment" />
        <button onClick={() => this.props.comment({ option: 'i', id_post: post.id, comment: this.state.comment, type: post.type, id_comment: null })} className="btn btn-default btn-comments-send"><i className="far fa-paper-plane"></i></button>

      </div>
        <div>
          {this.renderPostComments()}
        </div>
      </div>
  }

  renderPostComments() {
    if (this.props.comments) {
      let list = []
      for (let index = 0; index < this.props.comments.length; index++) {
        list.push(<p>{this.props.comments[index].comment}</p>)
      }
      return list;
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if(prevProps != this.props) {
      this.setState({
        posts: this.props.posts
      })
    }
  }
  _organizeVotes(post, vote, i) {
    let { posts } = this.state;
    switch(vote) {
      case 'up':
        if(post.up_on) {
          posts[i].up_on = null;
        } else {
          posts[i].up_on = post.id;
          posts[i].down_on = null;
        }
      break;
      case 'u': 
        if(post.down_on) {
          posts[i].down_on = null;
        } else {
          posts[i].down_on = post.id;
          posts[i].up_on = null;
        }
      break;
    }
  }
  render() {
    const { posts } = this.props
    return <div>
      <Col style={{ border: "1px solid lightgrey" }}>
        <h4 style={{ fontWeight: "bold", color: "white" }}>
          Posts e Variações:
            </h4>
      </Col>
      {posts.map((post, index) => (
        <div className="post" key={post.id} >
        <div className="post-header" style={{ borderBottom: "1px solid orange" }}>
            <Container>
              <Row >
                <Col md={12} style={{ display: "flex", flexDirection: "row", alignItems: "center", paddingLeft: 0 }}>
                  <div className="post-div-updownvote">
                    <button
                      className="btn-upvote"
                      onClick={async () => {
                        this.props.upOrDownVote(
                          {
                            id_post: post.id,
                            type: post.type,
                            vote: 'up'
                          }
                        )
                        this._organizeVotes(post, 'up', index)
                      }
                      }
                      style={{ color: post.up_on ? "orange" : "white" }}
                    >
                      <i className="fas fa-long-arrow-alt-up" />
                    </button>
                    <p>{post.upvote}</p>
                    <button
                      className="btn-downvote"
                      onClick={async () => {
                        this.props.upOrDownVote(
                          {
                            id_post: post.id,
                            type: post.type,
                            vote: 'u'
                          }
                        )
                        this._organizeVotes(post, 'u', index)
                  }
                  }
                >
                      <i
                      style={{ color: post.down_on ? "orange" : "white" }} className="fas fa-long-arrow-alt-down"
                    />
                    </button>
                  </div>
                {this.renderPageAutorOrOnlyAutor(post)}
                </Col>
              </Row>
            </Container>
        </div>
        <div className="post-body" onClick={() => {
          this.props.fetchPostComments({
            option: post.type,
            id: post.id
          });
          this.props.changeIndexForModal(index)
          if (this.state.formComments) {
            this.setState({ formComments: false, post: {} })
          } else {
            this.setState({ formComments: true, post })
          }
        }}>
          <div className="container">

            <p style={{ marginTop: "15px" }}>{post.titulo}</p>
            <p>{post.descricao}</p>

            <div className="row">
              <div style={{ width: "75%", margin: "auto" }}>
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
            <button onClick={() => {
              this.props.fetchPostComments({
                option: post.type,
                id: post.id
              });
              this.props.changeIndexForModal(index)
              if (this.state.formComments) {
                this.setState({ formComments: false, post: {} })
              } else {
                this.setState({ formComments: true, post })
              }
            }}>
              <i className="fas fa-comment-alt" /> <span>{this.renderCountComments(post)} Comments</span>
            </button>
          </div>

        </div>
        </div>))}

      <ModalPost
        show={this.state.formComments}
        post={this.state.post}
        indexForModal={this.props.indexForModal}
        handleClose={() => this.handleClose.bind(this)}
        comments={this.props.comments}
        comment={this.props.comment}
        upOrDownVote={this.props.upOrDownVote}
      />
    </div>;
  }
}
