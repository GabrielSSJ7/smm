import React from "react";
import { connect } from "react-redux";

import { temApelido } from "../config/actions/UserActions";
import {
  fetchPostsBySearchBar,
  upOrDownVote,
  comment,
  changeIndexForModal,
  fetchPostComments
} from "../config/actions/PostsActions";
import {  fetchPagesBySearchBar, fetchMemeBySearchBar,subscribeUserPage, fetchListOfSubscribed } from '../config/actions/PagesActions'
import Template from "../components/Template";
import NavBar from "../components/NavBar";

import Post from "../components/Search/Posts/Post";
import "../static/css/index.css";
import "../static/css/post.css";
import Pages from "../components/Search/Pages/Pages";
import Meme from "../components/Search/Memes/Meme";

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
    this.props.fetchPostsBySearchBar(key);
    this.props.fetchPagesBySearchBar(key);
    this.props.fetchMemeBySearchBar(key);
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
          <div className="container-fluid" style={{ marginTop: "2%" }}>
            <div className="row">
              <div className="col-sm-8">
                
                <Post
                  posts={this.props.posts}
                  upOrDownVote={this.props.upOrDownVote.bind(this)}
                  vote={this.props.vote}
                  comment={this.props.comment.bind(this)}
                  fetchPostComments={this.props.fetchPostComments.bind(this)}
                  changeIndexForModal={this.props.changeIndexForModal}
                  indexForModal={this.props.indexForModal}
                  comments={this.props.comments}
                />
              </div>
              <div className="col">
              <Meme memes={this.props.memes}  />
                <Pages 
                  pages={this.props.pages}
                  subscribeUserPage={this.props.subscribeUserPage}
                  followers={this.props.followers}
                  fetchListOfSubscribed={this.props.fetchListOfSubscribed}
                  type="up"
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
    pages: state.PagesReducer.pages,
    memes: state.PagesReducer.memes,
    vote: state.PostsReducer.vote,
    comments: state.PostsReducer.comments,
    followers: state.PagesReducer.followers,
    indexForModal: state.PostsReducer.indexForModal
  };
};

export default connect(
  mapStateToProps,
  {
    temApelido,
    fetchPostsBySearchBar,
    fetchPagesBySearchBar,
    subscribeUserPage,
    upOrDownVote,
    comment,
    fetchPostComments,
    fetchMemeBySearchBar,
    fetchListOfSubscribed,
    changeIndexForModal
  }
)(Posts);
