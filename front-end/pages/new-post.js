import React from "react";
import { connect } from "react-redux";
import { withRouter } from "next/router";
import {
  fetchSubscribedPages,
  fetchPagesForPost,
  toPost,
  //changes
  changeNewPostCategories,
  changeNewPostIdUserPage,
  changeNewPostIsYourProfile,
  changeNewPostTitle,
  changeNewPostKeywords,
  changeNewPostDescription,
  changeNewPostMediaUpload,
  changeNewPostTrigger,
  changeUploadProgress
} from "../config/actions/PostsActions";
import Template from "../components/Template";
import { Button, Alert } from "react-bootstrap";

import "../static/css/index.css";
import "../static/css/new-post.css";

import PagePost from "../components/NewPost/Form/PagePost";
import NavBar from "../components/NavBar";
import Inputs from "../components/NewPost/Form/Inputs";
import ImageUpload from "../components/NewPost/Form/ImageUpload";
import Uploading from "../components/NewPost/Form/Uploading";

class NewPostUser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      localStorage: {},
      alert: false,
      alertMsg: "",
      idPageSelected: null
    };
  }

  componentDidMount() {
    this.props.fetchSubscribedPages();
    this.setState({
      localStorage: JSON.parse(localStorage.getItem("data"))
    });
  }

  _toPost() {
     if (!this.props.titulo) {
      this.setState({ alert: true, alertMsg: "Precisa de título, man" })
    } else if(this.props.keywords.length == 0) {
      this.setState({ alert: true, alertMsg: "Precisa de umas keywords e pá" })
    } else  if(this.props.categorias.length == 0) {
      this.setState({ alert: true, alertMsg: "Escolhe uma categoria parça" })
    } else  if (!this.props.mediaForUpload){
      this.setState({ alert: true, alertMsg: "E a mídia???" })
    } else {
      this.props.changeNewPostTrigger(true);
      const data = {
        titulo: this.props.titulo,
        descricao: this.props.descricao,
        id_user_page:
          this.props.idPageSelected == 0 ? null : this.props.idPageSelected,
        keywords: this.props.keywords,
        categorias: this.props.categorias,
        isYourProfile: this.props.isYourProfile
      };
     this.props.toPost(this.props.mediaForUpload, data);
    }
  }

  render() {
    return (
      <Template>
        <NavBar />
        {this.props.postTrigger ? (
          <Uploading uploadProgress={this.props.uploadProgress} />
        ) : (
          <div
            id="form-new-post"
            className="container"
            style={{ marginTop: 45 }}
          >
            {this.props.result ? (
              <Alert variant="success">
                Conteúdo postado com sucesso
              </Alert>
            ) : (
              ""
            )}
            
            {/* CHOOSE PAGE  */}
            <PagePost
              changeNewPostIdUserPage={this.props.changeNewPostIdUserPage}
              changeNewPostIsYourProfile={this.props.changeNewPostIsYourProfile}
              fetchPagesForPost={this.props.fetchPagesForPost}
              pagesSubscribed={this.props.pagesSubscribed}
              localStorage={this.state.localStorage}
              pagesForPost={this.props.pagesForPost}
            />
            {/* --- */}

            {/* INPUTS */}
            <Inputs
              changeNewPostTitle={this.props.changeNewPostTitle}
              changeNewPostDescription={this.props.changeNewPostDescription}
              changeNewPostKeywords={this.props.changeNewPostKeywords}
              changeNewPostCategories={this.props.changeNewPostCategories}
            />
            {/* ---  */}
            <div className="row" />

            {/* UPLOAD IMAGE  */}
            <ImageUpload
              changeNewPostMediaUpload={this.props.changeNewPostMediaUpload}
            />
            {/* --- */}
            {
              this.state.alert ? (<Alert variant="danger">{this.state.alertMsg}</Alert>) : ""
            }
            {/* BOTÕES  */}
            <div className="row" id="row-btns-options">
              <div id="btns-options-options-group">
                <Button>+Spoiler</Button>
              </div>

              <div id="btns-options-btn-group">
                <Button>Cancelar</Button>
                <Button onClick={() => this._toPost()}>Post</Button>
              </div>
            </div>
            {/* --- */}
           
          </div>
        )}
      </Template>
    );
  }
}

const mapStateToProps = state => {
  console.log("====================================");
  console.log("new-post => ", state.PostsReducer.uploadProgress);
  console.log("====================================");
  return {
    pagesSubscribed: state.PostsReducer.pagesSubscribed,
    pagesForPost: state.PostsReducer.pagesForPost,
    idPageSelected: state.PostsReducer.idPageSelected,
    titulo: state.PostsReducer.titulo,
    descricao: state.PostsReducer.descricao,
    keywords: state.PostsReducer.keywords,
    categorias: state.PostsReducer.categorias,
    isYourProfile: state.PostsReducer.isYourProfile,
    mediaForUpload: state.PostsReducer.mediaForUpload,
    postTrigger: state.PostsReducer.postTrigger,
    uploadProgress: state.PostsReducer.uploadProgress,
    result: state.PostsReducer.result
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    {
      fetchSubscribedPages,
      fetchPagesForPost,
      toPost,
      changeNewPostCategories,
      changeNewPostIdUserPage,
      changeNewPostIsYourProfile,
      changeNewPostTitle,
      changeNewPostKeywords,
      changeNewPostDescription,
      changeNewPostMediaUpload,
      changeNewPostTrigger,
      changeUploadProgress
    }
  )(NewPostUser)
);
