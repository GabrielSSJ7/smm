import React from "react";
import { connect } from "react-redux";
import Router from "next/router";
import { Image } from 'react-bootstrap'
import { temApelido } from "../config/actions/UserActions";
import Template from "../components/Template";
import NavBar from "../components/NavBar";

import "../static/css/index.css";

class Posts extends React.Component {
    static getInitialProps({ reduxStore, req }) {
        const isServer = !!req;
        //reduxStore.dispatch(serverRenderClock(isServer))

        return {};
    }

    constructor(props) {
        super(props)
        this.state = {
            nick: ""
        }
    }

    componentDidMount() {
        this.props.temApelido()
        this.setState({
            nick: localStorage.getItem("nick"),
            show: this.props.show
        })
    }

    render() {
        return (
            <div>
                <NavBar show={this.props.show} />
                <Template>
                    <div className="container" style={{ marginTop: "2%" }}>
                        <div className="row">
                            <div className="col-sm-6">
                                <div className="post-header" style={{ borderBottom: "1px solid" }}>
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-md-1">
                                                <button>
                                                    <i class="fas fa-long-arrow-alt-up"></i>
                                                </button>
                                            </div>
                                            <div className="col-md-2" >
                                                <div style={{ borderRadius: "100%" }}>
                                                    <Image style={{ display: "block", width: "100%", maxWidth: "100%" }} src="https://scontent-gru2-2.xx.fbcdn.net/v/t1.0-9/50217209_2042992762454258_5296328677565399040_n.jpg?_nc_cat=106&_nc_ht=scontent-gru2-2.xx&oh=4817d1350a42ca45a4c9d2fb277a0918&oe=5D3A1AA8"
                                                        roundedCircle />
                                                </div>
                                            </div>
                                            <div className="col-md-9" style={{ display: "flex", alignContent: "center" }}>
                                                <p style={{ alignSelf: "center" }}>{this.state.nick}</p>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                                <div className="post-body">
                                    <div className="container">
                                        <div className="row">
                                            <p style={{ marginTop: "15px" }}>Mijando silenciosamente</p>
                                        </div>
                                        <div className="row">
                                            <div style={{ height: "500" }}>
                                                <Image style={{ width: "100%", maxWidth: "100%", maxHeight: "100%" }} fluid
                                                    src="https://scontent-gru2-2.xx.fbcdn.net/v/t1.0-9/56589696_2028849923878830_8753512231104151552_n.jpg?_nc_cat=110&_nc_ht=scontent-gru2-2.xx&oh=91bf89bef6c78053462b865b33fec9bc&oe=5D079013" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="post-footer">

                                </div>

                            </div>
                        </div>
                    </div>
                </Template>
            </div>
        );
    }
}


const mapStateToProps = state => {
    console.log("index:mapStateToProps => ", state.UserReducer.show)
    return {
        show: state.UserReducer.show,
        resultNick: state.UserReducer.resultNick
    };
};

export default connect(
    mapStateToProps,
    { temApelido }
)(Posts);
