import React from "react";
import { connect } from "react-redux";
import Router from "next/router";

import { temApelido } from "../config/actions/UserActions";
import { fetchPostsBySearchBar, upOrDownVote, comment, fetchPostComments } from '../config/actions/PostsActions';
import Template from "../components/Template";
import NavBar from "../components/NavBar";

import Post from '../components/Post';
import "../static/css/index.css";
import "../static/css/post.css";

class Posts extends React.Component {
  static getInitialProps({ reduxStore, req }) {
    const isServer = !!req;
    //reduxStore.dispatch(serverRenderClock(isServer))

    return {};
  }

  constructor(props) {
    super(props);
    this.state = {
      nick: ""
    };
  }

  componentDidMount() {
    const urlParams = new URL(location);
    const key = urlParams.searchParams.get("key");
    this.props.fetchPostsBySearchBar(key)
    this.props.temApelido();
    this.setState({
      nick: localStorage.getItem("nick"),
      show: this.props.show
    });
  }

  render() {
    return (
      <div>
        <NavBar show={this.props.show} />
        <Template>
          <div className="container" style={{ marginTop: "2%" }}>
            <div className="row">
              <div className="col-sm-6">
                <Post 
                  posts={this.props.posts} 
                  upOrDownVote={this.props.upOrDownVote.bind(this)} 
                  vote={this.props.vote}
                  comment={this.props.comment.bind(this)}
                  fetchPostComments={this.props.fetchPostComments.bind(this)}
                  comments={this.props.comments}
                />
              </div>
            </div>            
          </div>
        </Template>
      </div>
    );
  }
}

const mapStateToProps = state => {
  
  return {
    show: state.UserReducer.show,
    resultNick: state.UserReducer.resultNick,
    posts: state.PostsReducer.posts,
    vote: state.PostsReducer.vote,
    comments: state.PostsReducer.comments
  };
};

export default connect(
  mapStateToProps,
  { temApelido, fetchPostsBySearchBar, upOrDownVote, comment, fetchPostComments }
)(Posts);
