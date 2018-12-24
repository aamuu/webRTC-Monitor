import React, {Component} from "react";

class DataThroughput extends Component {
    constructor(props) {
        super(props);

        this.state = {
            showResourceInfo: false
        };
    }

    render() {
        const {name, status} = this.props;
        //const {showResourceInfo} = this.state;
        let componentStyle;
        //const {showResourceInfo} = this.state;
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
                    <h4 className="text-center">{name}</h4>
                </div>
                {/*<div className="card-text">*/}
                    {/*{showResourceInfo ? (*/}
                        {/*<div>*/}
                            {/*<div className="accordion" id="n-accordionExample">*/}
                                {/*<div className="card">*/}
                                    {/*<div className="card-body" id="n-headingOne">*/}
                                        {/*<h5 className="mb-0">*/}
                                            {/*<button*/}
                                                {/*className="btn btn-link"*/}
                                                {/*type="button"*/}
                                                {/*data-toggle="collapse"*/}
                                                {/*data-target="#n-collapseOne"*/}
                                                {/*aria-expanded="false"*/}
                                                {/*aria-controls="n-collapseOne"*/}
                                            {/*>*/}
                                                {/*TCP Enabled*/}
                                            {/*</button>*/}
                                        {/*</h5>*/}
                                    {/*</div>*/}

                                    {/*<div*/}
                                        {/*id="n-collapseOne"*/}
                                        {/*className={*/}
                                            {/*dataThroughputTest === "passed"*/}
                                                {/*? "collapse"*/}
                                                {/*: "collapse show"*/}
                                        {/*}*/}
                                        {/*aria-labelledby="n-headingOne"*/}
                                        {/*data-parent="#n-accordionExample"*/}
                                    {/*>*/}
                                        {/*<div className="card-body ml-5">*/}
                                            {/*[ INFO ] Test not implemented yet.*/}
                                            {/*{dataThroughputTest === "passed" ? (*/}
                                                {/*<i*/}
                                                    {/*className="fa fa-times ml-2"*/}
                                                    {/*style={{color: "red"}}*/}
                                                {/*/>*/}
                                            {/*) : (*/}
                                                {/*<i*/}
                                                    {/*className="fa fa-check ml-2"*/}
                                                    {/*style={{color: "green"}}*/}
                                                {/*/>*/}
                                            {/*)}*/}
                                        {/*</div>*/}
                                    {/*</div>*/}
                                {/*</div>*/}
                                {/*<div className="card">*/}
                                    {/*<div className="card-body" id="n-headingTwo">*/}
                                        {/*<h5 className="mb-0">*/}
                                            {/*<button*/}
                                                {/*className="btn btn-link collapsed"*/}
                                                {/*type="button"*/}
                                                {/*data-toggle="collapse"*/}
                                                {/*data-target="#n-collapseTwo"*/}
                                                {/*aria-expanded="false"*/}
                                                {/*aria-controls="n-collapseTwo"*/}
                                            {/*>*/}
                                                {/*UDP Enabled*/}
                                            {/*</button>*/}
                                        {/*</h5>*/}
                                    {/*</div>*/}
                                    {/*<div*/}
                                        {/*id="n-collapseTwo"*/}
                                        {/*className={*/}
                                            {/*dataThroughputTest === "passed"*/}
                                                {/*? "collapse"*/}
                                                {/*: "collapse show"*/}
                                        {/*}*/}
                                        {/*aria-labelledby="n-headingTwo"*/}
                                        {/*data-parent="#n-accordionExample"*/}
                                    {/*>*/}
                                        {/*<div className="card-body ml-5">*/}
                                            {/*[ INFO ] Test not implemented yet.*/}
                                            {/*{dataThroughputTest === "passed" ? (*/}
                                                {/*<i*/}
                                                    {/*className="fa fa-times ml-2"*/}
                                                    {/*style={{color: "red"}}*/}
                                                {/*/>*/}
                                            {/*) : (*/}
                                                {/*<i*/}
                                                    {/*className="fa fa-check ml-2"*/}
                                                    {/*style={{color: "green"}}*/}
                                                {/*/>*/}
                                            {/*)}*/}
                                        {/*</div>*/}
                                    {/*</div>*/}
                                {/*</div>*/}
                                {/*<div className="card">*/}
                                    {/*<div className="card-body" id="n-headingThree">*/}
                                        {/*<h5 className="mb-0">*/}
                                            {/*<button*/}
                                                {/*className="btn btn-link collapsed"*/}
                                                {/*type="button"*/}
                                                {/*data-toggle="collapse"*/}
                                                {/*data-target="#n-collapseThree"*/}
                                                {/*aria-expanded="false"*/}
                                                {/*aria-controls="n-collapseThree"*/}
                                            {/*>*/}
                                                {/*IPV6 Enabled*/}
                                            {/*</button>*/}
                                        {/*</h5>*/}
                                    {/*</div>*/}
                                    {/*<div*/}
                                        {/*id="n-collapseThree"*/}
                                        {/*className={*/}
                                            {/*dataThroughputTest === "passed"*/}
                                                {/*? "collapse"*/}
                                                {/*: "collapse show"*/}
                                        {/*}*/}
                                        {/*aria-labelledby="n-headingThree"*/}
                                        {/*data-parent="#n-accordionExample"*/}
                                    {/*>*/}
                                        {/*<div className="card-body ml-5">*/}
                                            {/*[ INFO ] Test not implemented yet.*/}
                                            {/*{dataThroughputTest === "passed" ? (*/}
                                                {/*<i*/}
                                                    {/*className="fa fa-times ml-2"*/}
                                                    {/*style={{color: "red"}}*/}
                                                {/*/>*/}
                                            {/*) : (*/}
                                                {/*<i*/}
                                                    {/*className="fa fa-check ml-2"*/}
                                                    {/*style={{color: "green"}}*/}
                                                {/*/>*/}
                                            {/*)}*/}
                                        {/*</div>*/}
                                    {/*</div>*/}
                                {/*</div>*/}
                            {/*</div>*/}
                        {/*</div>*/}
                    {/*) : null}*/}
                {/*</div>*/}
            </div>
        );
    }
}

export default DataThroughput;
