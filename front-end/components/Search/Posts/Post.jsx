import React from 'react'
import { Image, Row, Col, Container } from "react-bootstrap";
import ModalPost from "./ModalPost";
import ModalStatistic  from '../../Post/Modals/PostStatistic';
import Link from "next/link"

import "../../../static/css/index.css";
import "../../../static/css/post.css";


export default class Post extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nick: "",
      formComments: false,
      statisticModal: false,
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

  handleCloseStatistic(v){
    this.setState({
      statisticModal: v
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
    if (prevProps != this.props) {
      this.setState({
        posts: this.props.posts
      })
    }
  }
  async videoClick(e, post) {
    const myVideo = this.refs[`v${post.id}${post.type}`]
    if (myVideo.paused) {
     console.log(myVideo.paused);
     myVideo.play();
    }
  }
  renderMedia(post) {
    const { mediaType } = post;
    if (mediaType == "image") {
      return (
        <div style={{ width: "75%", margin: "auto" }}>
          <Image style={{ width: "100%", maxWidth: "100%", maxHeight: "100%" }} fluid src={post.midia} />
        </div>
      );
    } else if (mediaType == "video") {
      return (
        <div style={{ width: "100%", margin: "auto" }}>
          <video onClick={e => this.videoClick(e, post)} ref={`v${post.id}${post.type}`} style={{ width: "100%" }} src={post.midia} controls />
        </div>
      );
    } else {
      return this.state.mediaError;
    }
  }

  render() {
    const { posts, vote } = this.props
    
    if (Object.keys(this.props.vote).length > 0) {
      this.props.posts.filter(e => {
        if (e.id == vote.id) {
          e.up_on = vote.up_on;
          e.down_on = vote.down_on;
          e.upvote = vote.upvote
        }
      })
    }
    return <div>
      <Col style={{ border: "1px solid lightgrey" }}>
        <h4 style={{ fontWeight: "bold", color: "white" }}>
          Posts e Variações:
            </h4>
      </Col>
      {posts.map((post, index) => (
        <div className="post" key={index} >
          <div className="post-header" style={{ borderBottom: "1px solid orange" }}>
            <Container>
              <Row >
                <Col md={12} style={{ display: "flex", flexDirection: "row", alignItems: "center", paddingLeft: 0 }}>
                  <div className="post-div-updownvote">
                    <button
                      className="btn-upvote"
                      onClick={async () => {
                        this.props.upOrDownVote({ id_post: post.id, type: post.type, vote: 'up' })
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
                        this.props.upOrDownVote({ id_post: post.id, type: post.type, vote: 'u' })
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
            this.props.viewPost(post.id, post.type);
          }}>
            <div className="container">
            
              <p style={{ marginTop: "15px" }}>{post.titulo}</p>
              <p>{post.descricao}</p>

              <div className="row">
                {this.renderMedia(post)}
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
                  //this.refs[`v${post.id}${post.type}`].pause()
                }
              }}>
                <i className="fas fa-comment-alt" /> <span>{this.renderCountComments(post)} Comments</span>
              </button>
              <p  className="statistic-icon" onClick={() => { this.setState({ statisticModal: true, post }); this.props.postDetails(post.id, post.type, this.props.detailsPeriod)}}><i className="fas fa-chart-bar"></i></p>
              <p style={{ float: "right", color: "white"}}>{post.view}<i className="fas fa-eye"></i></p>
              
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

      <ModalStatistic
        fetchStatistics={this.props.postDetails}
        show={this.state.statisticModal}
        handleClose={() => this.handleCloseStatistic.bind(this)}
        post={this.state.post}
      />
    </div>;
  }
}
