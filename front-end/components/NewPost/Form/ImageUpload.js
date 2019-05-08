import { Button, Image } from "react-bootstrap";
export default class ImageUpload extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      imagePreview: null,
      mediaForUpload: null
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
            <Image src={this.state.imagePreview} style={{ height: "350px" }} />
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

  onChangeFile = e => {
    this.setState({
      imagePreview: URL.createObjectURL(e.target.files[0]),
      mediaForUpload: e.target.files[0]
    });
    this.props.changeNewPostMediaUpload(e.target.files[0])
  };
}
