import { Image } from "react-bootstrap";
import ModalPost from "../components/ModalPost";

import "../static/css/index.css";
import "../static/css/post.css";

export default class Post extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nick: "",
      formComments: false,
      comment: "",
      post: {}
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

  insertComment(type, id_post, comment) {
    const data = {
      option: 'i',
      id_post,
      comment,
      type,
      id_comment: null
    }
    this.props.comment(data);
  }

  upOrDownVote(index, vote) {

    const post = this.props.posts[index];
    let data = {}
    switch (this.props.posts[index].type) {
      case 'm':
        data = {
          id_post: post.id,
          type: post.type,
          vote
        }
        this.props.upOrDownVote(data);
        break;

      case 'up':
        data = {
          id_post: post.id,
          type: post.type,
          vote
        }
        this.props.upOrDownVote(data);
        break;

      case 'u':
        data = {
          id_post: post.id,
          type: post.type,
          vote
        }
        this.props.upOrDownVote(data);
        break;
    }
  }



  renderPost() {
    const posts = [];
    const postsArray = this.props.posts

    if (Object.keys(this.props.vote).length > 0) {

      postsArray.filter(item => {
        if (item.id == this.props.vote.id) {
          item.up_on = this.props.vote.up_on;
          item.down_on = this.props.vote.down_on
          item.upvote = this.props.vote.upvote
        }
      })
      //console.log("new", newArray)
    }


    for (let index = 0; index < postsArray.length; index++) {

      posts.push(
        <div className="post" key={index}>
          <div className="post-header" style={{ borderBottom: "1px solid" }}>
            <div className="container">
              <div className="row">
                <div
                  className="col-md-2"
                  id="post-div-updownvote"
                  style={{ display: "flex", flexDirection: "column", paddingRight: 0 }}
                >
                  <button className="btn-upvote" onClick={async () => this.upOrDownVote(index, 'up')} style={{ color: postsArray[index].up_on ? "orange" : "black" }}>
                    <i className="fas fa-long-arrow-alt-up" />
                  </button>
                  <p>{postsArray[index].upvote}</p>
                  <button className="btn-downvote" onClick={async () => this.upOrDownVote(index, 'u')} >
                    <i style={{ color: postsArray[index].down_on ? "orange" : "black" }} className="fas fa-long-arrow-alt-down" />
                  </button>
                </div>
                <div className="col-md-10" style={{ display: "flex", flexDirection: "row", alignItems: "center", paddingLeft: 0 }}>
                  <div className="post-div-circle" style={{ borderRadius: "100%" }}>
                    <Image
                      src={postsArray[index].foto}
                    />
                  </div>

                  <p style={{ marginLeft: "2%", marginTop: 16 }}>{postsArray[index].nick}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="post-body">
            <div className="container">

              <p style={{ marginTop: "15px" }}>{postsArray[index].titulo}</p>
              <p>{postsArray[index].descricao}</p>

              <div className="row">
                <div style={{ height: "500" }}>
                  <Image
                    style={{
                      width: "100%",
                      maxWidth: "100%",
                      maxHeight: "100%"
                    }}
                    fluid
                    src={postsArray[index].midia}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="post-footer" style={{ marginTop: 15 }}>
            <div style={{ zIndex: "9999999" }}>
              <button onClick={() => {
                this.props.fetchPostComments({
                  option: postsArray[index].type,
                  id: postsArray[index].id
                });
                if (this.state.formComments) {
                  this.setState({ formComments: false, post: {} })
                } else {
                  this.setState({ formComments: true, post: postsArray[index] })
                }
              }}>
                <i className="fas fa-comment-alt" /> <span>{this.renderCountComments(postsArray[index])} Comments</span>
              </button>
            </div>

          </div>
        </div>
      );
    }
    return posts;
  }

  renderCountComments(post){
    if( Object.keys(this.props.comments).length == 0){
      return post.comments
    } else {
      if(post.id == this.props.comments.id_post){
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
        <button onClick={() => this.insertComment(post.type, post.id)} className="btn btn-default btn-comments-send"><i className="far fa-paper-plane"></i></button>

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

  render() {

    return <div>{this.renderPost()} <ModalPost show={this.state.formComments} post={this.state.post} handleClose={()=>this.handleClose.bind(this)} comments={this.props.comments} insertComment={this.insertComment.bind(this)} /> </div>;
  }
}
