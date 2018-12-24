import React, {Component} from "react";
import Active from "../common/active";

class SymmetricNAT extends Component {
    constructor(props) {
        super(props);

        this.state = {
            showResourceInfo: false
        };
    }

    render() {
        const {name, status, test} = this.props;
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
                    <div style={{float: "right", position: "relative"}}>{test ? (active) : null}</div>
                    <h4 className="text-center">{name}</h4>
                </div>
                <div className="card-text">
                    {showResourceInfo ? (
                        <div>
                            <div className="accordion" id="c-accordionExample">
                                <div className="card">
                                    <div className="card-body" id="c-headingOne">
                                        <h5 className="mb-0">
                                            <button
                                                className="btn btn-link"
                                                type="button"
                                                data-toggle="collapse"
                                                data-target="#c-collapseOne"
                                                aria-expanded="false"
                                                aria-controls="c-collapseOne">
                                                Relay Connectivity
                                            </button>
                                        </h5>
                                    </div>

                                    <div
                                        id="c-collapseOne"
                                        className={
                                            status === "passed"
                                                ? "collapse show"
                                                : "collapse"
                                        }
                                        aria-labelledby="c-headingOne"
                                        data-parent="#c-accordionExample">
                                        <div className="card-body ml-5">
                                            {test ? accorTest : accorText}
                                            {(status === "failed") || (status === undefined) ? (
                                                <i className="fa fa-times ml-2" style={{color: "red"}}/>) : (
                                                <i
                                                    className="fa fa-check ml-2"
                                                    style={{color: "green"}}
                                                />)}
                                        </div>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="card-body" id="c-headingTwo">
                                        <h5 className="mb-0">
                                            <button
                                                className="btn btn-link collapsed"
                                                type="button"
                                                data-toggle="collapse"
                                                data-target="#c-collapseTwo"
                                                aria-expanded="false"
                                                aria-controls="c-collapseTwo">
                                                Reflexive Connectivity
                                            </button>
                                        </h5>
                                    </div>
                                    <div
                                        id="c-collapseTwo"
                                        className={
                                            status === "passed"
                                                ? "collapse show"
                                                : "collapse"
                                        }
                                        aria-labelledby="c-headingTwo"
                                        data-parent="#c-accordionExample">
                                        <div className="card-body ml-5">
                                            {test ? accorTest : accorText}
                                            {(status === "failed") || (status === undefined) ? (
                                                <i className="fa fa-times ml-2" style={{color: "red"}}/>) : (
                                                <i
                                                    className="fa fa-check ml-2"
                                                    style={{color: "green"}}
                                                />)}
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

export default SymmetricNAT;
