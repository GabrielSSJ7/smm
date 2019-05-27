import React from 'react';
import { connect } from "react-redux";
import { Modal, Button, Col, Row } from 'react-bootstrap';
import { ResponsiveLine } from '@nivo/line';
import moment from 'moment';

import {changeDetailsPeriod} from '../../../config/actions/PostsActions';import "../../../static/css/post.css";
class PostStatistic extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            post: {},
            postDetails: [],
            period: "week"
        }
    }
    componentDidUpdate(prevProps, prevState) {
        if (this.props != prevProps) {
            this.setState({
                post: this.props.post
                //  postDetails: this.props.postDetails
            })
        }
    }

    getChartData(postDetails) {
        //console.log("PostStatistic || line:27 ", postDetails)
        let data = new Array();
        let insideData = [];
        if (Object.keys(postDetails).length > 0) {
            if (postDetails.postDetailsForChart.length > 0) {
                const chart = postDetails.postDetailsForChart;

                for (let i = 0; i < 2; i++) {
                    data.push({
                        id: i > 0 ? "downvotes" : "upvotes"
                    });
                    chart.map((item, index) => {
                        let initialDate = null;
                        let finalDate = null;
                        switch (this.state.period) {
                            case 'week':
                                initialDate = moment(item.week);
                                finalDate = moment(item.week).add(7, 'days');
                                break;
                            case 'month':
                                initialDate = moment(item.week);
                                finalDate = moment(item.week).add(30, 'days');
                                break;
                            case 'day':
                                initialDate = moment(item.week);
                                break;
                        }

                        initialDate = initialDate.format('DD/MM/YYYY');
                        finalDate = finalDate ? finalDate.format('DD/MM/YYYY') : null

                        insideData.push({ x: finalDate ? `${initialDate} - ${finalDate}` : `${initialDate}`, y: i == 0 ? parseInt(item.upvotes) : parseInt(item.downvotes) })
                    });
                    data[i] = { ...data[i], data: insideData }
                    insideData = [];
                }
            }
        }
        return data;
    }

    render() {
        const { show, handleClose, postDetails } = this.props;
        const charData = this.getChartData(postDetails)
        return (
            <Modal show={show} onHide={handleClose(false)}>
                <Modal.Header closeButton style={{ background: "rgb(26, 26, 27)", color: "white" }}>
                    {/* <Modal.Title>{post.titulo}</Modal.Title> */}

                </Modal.Header>
                <Modal.Body style={{ background: "rgb(26, 26, 27)" }}>
                    <Row  >
                        <Col md={8} style={{ height: 450, padding: 0}}>
                            <ResponsiveLine
                                data={charData}
                                margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
                                axisTop={null}
                                axisRight={null}
                                curve="monotoneX"
                                axisBottom={{
                                    orient: 'bottom',
                                    tickSize: 5,
                                    tickPadding: 5,
                                    tickRotation: 0,
                                    legend: 'Período',
                                    legendOffset: 36,
                                    legendPosition: 'middle'
                                }}
                                axisLeft={{
                                    orient: 'left',
                                    tickSize: 5,
                                    tickPadding: 5,
                                    tickRotation: 0,
                                    legend: 'votes',
                                    legendOffset: -40,
                                    legendPosition: 'middle'
                                }}
                                colors={{ scheme: 'dark2' }}
                                pointSize={10}
                                pointColor="black"
                                enablePointLabel
                                pointBorderWidth={2}
                                pointBorderColor="white"
                                pointLabel="y"
                                enableArea={true}
                                legends={[
                                    {
                                        anchor: 'bottom-right',
                                        direction: 'column',
                                        justify: false,
                                        translateX: 100,
                                        translateY: 0,
                                        itemsSpacing: 0,
                                        itemDirection: 'left-to-right',
                                        itemWidth: 80,
                                        itemHeight: 20,
                                        itemOpacity: 0.75,
                                        symbolSize: 12,
                                        symbolShape: 'circle',
                                        symbolBorderColor: 'rgba(0, 0, 0, .5)',
                                        effects: [
                                            {
                                                on: 'hover',
                                                style: {
                                                    itemBackground: 'rgba(0, 0, 0, 0.3)',
                                                    itemOpacity: 1
                                                }
                                            }
                                        ]
                                    }
                                ]}
                            />
                        </Col>
                        <Col md={4} style={{ color: "white" }}>
                            <p>Criado em: {postDetails.postDetails ? moment(postDetails.postDetails.created_at).format('DD/MM/YYYY') : null}</p>
                            <p>downvotes: {postDetails.postDetails ? postDetails.postDetails.downvote : null}</p>
                            <p>upvotes: {postDetails.postDetails ? postDetails.postDetails.upvotes : null}</p>
                            <p>Título: {postDetails.postDetails ? postDetails.postDetails.titulo : null}</p>
                            <p>Descrição: {postDetails.postDetails ? postDetails.postDetails.descricao : null}</p>
                            <p>Categoria: {postDetails.postDetails ? postDetails.postDetails.categoria : null}</p>
                            <p>Visualizações: {postDetails.postDetails ? postDetails.postDetails.views : null}</p>

                            <div className="div-details-order">
                                <span onClick={()=> this.changePeriod("day")} className={`span-detail-order-option ${this.state.period == 'day' ? "span-detail-active": ""}`}>Dia</span>
                                <span onClick={()=> this.changePeriod("week")} className={`span-detail-order-option ${this.state.period == 'week' ? "span-detail-active": ""}`}>Semana</span>
                                <span onClick={()=> this.changePeriod("month")} className={`span-detail-order-option ${this.state.period == 'month' ? "span-detail-active": ""}`}>Mês</span>
                            </div>
                        </Col>
                    </Row>
                </Modal.Body>
            </Modal>
        );
    }

    changePeriod(period){
        this.setState({ period });
        this.props.fetchStatistics(this.state.post.id, this.state.post.type, period)
    }
}

const mapStateToProps = ({ PostsReducer } = state) => {

    return {
        postDetails: PostsReducer.postDetails,
        error: PostsReducer.error
    };
};

export default connect(mapStateToProps, {changeDetailsPeriod})(PostStatistic)