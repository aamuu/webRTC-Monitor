import React, {Component} from "react";
import Active from "../common/active";


class Video extends Component {
    constructor(props) {
        super(props);

        this.state = {
            showResourceInfo: false
        };
    }

    render() {
        const {name, status, band, test, log} = this.props;
        //console.log("***********************", log);
        const {showResourceInfo} = this.state;
        let componentStyle;
        let accorText;
        let accorTest = "[testing] Please wait...";
        let active = <Active/>;

        if (status === undefined) {
            accorText = "[INFO] Test not run yet";
        } else if (status === "passed") {
            accorText = "Audio settings are successfully tested";
        } else {
            accorText = "Please check audio requirements";
        }
        if (status === "passed") {
            componentStyle = "card mx-auto bg-success mt-2";
        } else if (status === "failed") {
            componentStyle = "card mx-auto bg-danger mt-2";
        } else {
            componentStyle = "card mx-auto mt-2";
        }

        return (
            <div
                className={componentStyle}
                style={{width: "22rem"}}>
                <div
                    className="card-header mb-auto"
                    style={{cursor: "pointer", width: "22rem"}}
                    onClick={() =>
                        this.setState({showResourceInfo: !this.state.showResourceInfo})
                    }>
                    <div style={{float: "right", color: "green"}}>{test ? (active) : null}</div>
                    <h4 className="text-center">{name}</h4>
                </div>
                <div className="card-text">
                    {showResourceInfo ? (
                        <div>
                            <div className="accordion" id="v-accordionExample">
                                <div className="card">
                                    <div className="card-body" id="n-headingOne">
                                        <h5 className="mb-0">
                                            <button
                                                className="btn btn-link"
                                                type="button"
                                                data-toggle="collapse"
                                                data-target="#v-collapseOne"
                                                aria-expanded="false"
                                                aria-controls="v-collapseOne">
                                                Video Settings
                                            </button>
                                        </h5>
                                    </div>
                                    <div id="v-collapseOne"
                                         className={(status === "failed") ? "collapse show" : "collapse"}
                                         aria-labelledby="n-headingOne"
                                         data-parent="#v-accordionExample">
                                        <div className="card-body ml-5">
                                            {test ? accorTest : accorText}
                                            {(status === "failed") || (status === undefined) ? (
                                                <i className="fa fa-times ml-2" style={{color: "red"}}/>) : (
                                                <i
                                                    className="fa fa-check ml-2"
                                                    style={{color: "green"}}
                                                />)}

                                            {(status === "passed") ?
                                                (<div className="alert-success badge-success mr-4"
                                                      style={{fontSize: "14px"}}>
                                                    <strong>[SUCCESS]</strong> <br/>
                                                    {log.packetLoss} <br/>
                                                    {log.RTTAvg} <br/>
                                                    {log.sendAvg}
                                                </div>) : null}

                                            {(status === "failed") ?
                                                (<div className="alert alert-danger mr-4" style={{fontSize: "14px"}}>
                                                    <strong>[ERROR]</strong> <br/>
                                                    {log.message}
                                                </div>) : null}
                                        </div>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="card-body" id="v-headingTwo">
                                        <h5 className="mb-0">
                                            <button
                                                className="btn btn-link"
                                                type="button"
                                                data-toggle="collapse"
                                                data-target="#v-collapseTwo"
                                                aria-expanded="false"
                                                aria-controls="v-collapseTwo">
                                                Video Bandwidth
                                            </button>
                                        </h5>
                                    </div>
                                    <div id="v-collapseTwo"
                                         className={(band === "failed") ? "collapse show" : "collapse"}
                                         aria-labelledby="v-headingTwo"
                                         data-parent="#v-accordionExample">
                                        <div className="card-body ml-5">
                                            {test ? accorTest : accorText}
                                            {(band === "failed") || (band === undefined) ? (
                                                <i className="fa fa-times ml-2" style={{color: "red"}}/>) : (
                                                <i
                                                    className="fa fa-check ml-2"
                                                    style={{color: "green"}}
                                                />)}

                                            {(band === "passed") ?
                                                (<div className="alert-success badge-success mr-4"
                                                      style={{fontSize: "14px"}}>
                                                    <strong>[SUCCESS]</strong> <br/>
                                                    {log.packetLoss} <br/>
                                                    {log.RTTAvg} <br/>
                                                    {log.sendAvg}
                                                </div>) : null}

                                            {(band === "failed") ?
                                                (<div className="alert alert-danger mr-4" style={{fontSize: "14px"}}>
                                                    <strong>[ERROR]</strong> <br/>
                                                    {log.message}
                                                </div>) : null}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ) : null}
                </div>
            </div>
        );
    }
}

export default Video;
