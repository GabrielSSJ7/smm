import React from "react";

import "../../../static/css/new-post.css";

export default class Uploading extends React.Component {
  render() {
    return (
      <>
        <div style={{ height: "50vh", width: "100%", position: "relative" }}>
          <div style={{
              top: "50%",
              bottom: "50%",
              position: "absolute",
              width:"100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center"
     
          }}>
            <div
              style={{
                width: "100%",
                height: "40px",
                border: "1px solid lightgrey",
                background: "white"
              }}
            >
              <div
                style={{
                  height: "38px",
                  width: `${this.props.uploadProgress}%`,
                  background: "rgb(26, 26, 27)"
                }}
              />
            </div>
            <p style={{ color: "white"}}>{this.props.uploadProgress.toFixed(2)}% concluído</p>
          </div>
        </div>
      </>
    );
  }
}
