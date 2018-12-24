import React, {Component} from "react";
import Active from "../common/active";


class Connectivity extends Component {
    constructor(props) {
        super(props);

        this.state = {
            showResourceInfo: false
        };
    }

    render() {
        const {name, status, test} = this.props;
        //const { showResourceInfo } = this.state;
        //console.log("=====================", status);

        let componentStyle;
        let active = <Active/>;

        let accorText;
        let accorTest = "[testing] Please wait...";

        if (status === undefined) {
            accorText = "[INFO] Test not run yet";
        } else if (status === "passed") {
            accorText = "Audio settings are successfully tested";
        } else {
            accorText = "Please check audio requirements";
        }

        const {showResourceInfo} = this.state;
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
                            <div className="accordion" id="n-accordionExample">
                                <div className="card">
                                    <div className="card-body" id="n-headingOne">
                                        <h5 className="mb-0">
                                            <button
                                                className="btn btn-link"
                                                type="button"
                                                data-toggle="collapse"
                                                data-target="#n-collapseOne"
                                                aria-expanded="false"
                                                aria-controls="n-collapseOne">
                                                TCP Enabled
                                            </button>
                                        </h5>
                                    </div>

                                    <div
                                        id="n-collapseOne"
                                        className={
                                            status === "passed"
                                                ? "collapse show"
                                                : "collapse"
                                        }
                                        aria-labelledby="n-headingOne"
                                        data-parent="#n-accordionExample">
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
                                                    Data successfully transmitted between peers.
                                                </div>) : null}

                                            {(status === "failed") ?
                                                (<div className="alert alert-danger mr-4" style={{fontSize: "14px"}}>
                                                    <strong>[ERROR]</strong> <br/>
                                                    Failed to transfer data between peers.
                                                </div>) : null}
                                        </div>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="card-body" id="n-headingTwo">
                                        <h5 className="mb-0">
                                            <button
                                                className="btn btn-link collapsed"
                                                type="button"
                                                data-toggle="collapse"
                                                data-target="#n-collapseTwo"
                                                aria-expanded="false"
                                                aria-controls="n-collapseTwo">
                                                UDP Enabled
                                            </button>
                                        </h5>
                                    </div>
                                    <div
                                        id="n-collapseTwo"
                                        className={
                                            status === "passed"
                                                ? "collapse show"
                                                : "collapse"
                                        }
                                        aria-labelledby="n-headingTwo"
                                        data-parent="#n-accordionExample">
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
                                                    Data successfully transmitted between peers.
                                                </div>) : null}

                                            {(status === "failed") ?
                                                (<div className="alert alert-danger mr-4" style={{fontSize: "14px"}}>
                                                    <strong>[ERROR]</strong> <br/>
                                                    Failed to transfer data between peers.
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

export default Connectivity;
