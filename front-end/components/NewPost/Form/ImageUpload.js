import { Button, Image } from "react-bootstrap";
import { Player, ControlBar, BigPlayButton } from "video-react";

export default class ImageUpload extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      imagePreview: null,
      mediaForUpload: null,
      mediaType: "",
      mediaError: ""
    };
  }

  render() {
    return (
      <div className="row" id="row-media">
        <div
          id="element-media"
          className={this.state.imagePreview ? "" : "heightMedia"}
        >
          <span
            id="span-media"
            className={this.state.imagePreview ? "imageUp" : ""}
          >
            Faça upload de uma imagem ou vídeo{" "}
          </span>{" "}
          <div
            id="input-file"
            className={this.state.imagePreview ? "imageUp" : ""}
          >
            <label htmlFor="midia">
              <span className="btn btn-success">Upload</span>
            </label>
            <input
              type="file"
              hidden
              name="midia"
              id="midia"
              onChange={e => this.onChangeFile(e)}
            />
          </div>
          <div className={this.state.imagePreview ? "" : "imageUp"}>
            {this.renderMedia()}
            <i
              style={{
                cursor: "pointer",
                position: "absolute",
                bottom: 20,
                right: 20
              }}
              onClick={() => this.setState({ imagePreview: null })}
              className="fas fa-trash-alt fa-2x"
            />
          </div>
        </div>
      </div>
    );
  }

  renderMedia() {
    if (this.state.mediaType == "image") {
      return (
        <Image src={this.state.imagePreview} style={{ height: "350px" }} />
      );
    } else if (this.state.mediaType == "video") {
      return (
        <>
          <video style={{ width: "100%"}} src={this.state.imagePreview} controls />
        </>
      );
    } else {
      return this.state.mediaError;
    }
  }
  onChangeFile = e => {
    if (e) {
      const { name, type } = e.target.files[0];
      console.log(type)
      let allowedExtensions = /(\.jpg|\.jpeg|\.png|\.gif)$/i;
      const indexType = type.indexOf("/");
      const fileType = type.substring(0, indexType);

      switch (fileType) {
        case "image":
          this.setState({
            imagePreview: URL.createObjectURL(e.target.files[0]),
            mediaForUpload: e.target.files[0],
            mediaType: fileType
          });
          this.props.changeNewPostMediaUpload(e.target.files[0]);
          break;

        case "video":
          this.setState({
            imagePreview: URL.createObjectURL(e.target.files[0]),
            mediaForUpload: e.target.files[0],
            mediaType: fileType
          });
          this.props.changeNewPostMediaUpload(e.target.files[0]);
          break;

        default:
          this.setState({ mediaError: "Formato de arquivo inválido" });
          break;
      }
    }
  };
}
