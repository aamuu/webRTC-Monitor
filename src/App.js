import React, {Component} from "react";
import Connectivity from "./components/resources/Connectivity";
import SymmetricNAT from "./components/resources/SymmetricNAT";
//import Spinner from "./components/common/spinner";
import "./App.css";
import Audio from "./components/resources/Audio";
import Video from "./components/resources/Video";


class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            audioResource: {},
            videoResource: {},
            videoLog: {packetLoss: "", RTTAvg: "", sendAvg: "", message: ""},
            audioLog: {packetLoss: "", RTTAvg: "", sendAvg: "", message: ""},
            networkResource: {},
            connectionResource: {},
            loading: false,
            audioTestActive: false,
            videoTestActive: false,
            networkTestActive: false,
            connectionTestActive: false,
            count: 0
        };
    }

    componentDidMount() {
        //TODO: Fetch resources
    }

    componentDidUpdate(prevProps, prevState) {
        // Typical usage (don't forget to compare props):
        if (prevState.count === 3 && this.state.count === 4) {
            // consider it's the end of all tests and do the things
            this.setState({
                loading: false
            })
        }
    }

    // onClick = () => {
    //     //TODO: TCP/IP check
    //     //TODO: STUN/TURN check
    //     this.test();
    // };

    test() {
        this.setState({
            loading: true,
            audioTestActive: true,
            videoTestActive: true,
            networkTestActive: true,
            connectionTestActive: true
        });

        /* global WebrtcTroubleshooter */
        // let {WebrtcTroubleshooter} = window;
        let video = true;
        let audio = true;

        let iceServers = [];
        const audioSuite = new WebrtcTroubleshooter.TestSuite();
        const videoSuite = new WebrtcTroubleshooter.TestSuite();
        const connectivitySuite = new WebrtcTroubleshooter.TestSuite();
        const natSuite = new WebrtcTroubleshooter.TestSuite();

        const testCompleted = (test, success, res) => {
            const result = `${test.name} ${success ? "success" : "failure"}`;
            console.log(result);
            //console.log(res);
            //console.log("=========================================>>>>>", result);
            //const p = document.createElement("p");
            //p.innerText = result;
            //document.body.appendChild(p);

            if (result === "audioBandwidthTest success") {
                let absLogger = JSON.stringify(res["log"].map(oneLog => oneLog.substr(6, oneLog.length - 1)));
                absLogger = JSON.parse(absLogger);
                let audStatus = [];
                let audStats = [];
                absLogger.forEach((q) => (q.substr(0, 1) === "{") ? audStatus.push(JSON.parse(q)) : audStats.push(q));

                this.setState({
                    audioLog: {packetLoss: audStats[0], RTTAvg: audStats[2], sendAvg: audStats[5]}
                });
                // console.log("===============================", audStats);
                //
                // // const p = document.createElement("p");
                // // p.innerText = audStatus.map(one => one.status);
                // // p.innerText = p.innerText + ". AUDIO STATUS: " + audStats.map(one => one);
                // // document.body.appendChild(p);
            }

            if (result === "audioBandwidthTest failure") {
                // let vbfLogger = JSON.stringify(res["log"].map(oneLog => oneLog.substr(6, oneLog.length - 1)));
                this.setState({
                    audioLog: {message: res.message}
                });
                //console.log("=========================================>>>>>", res.message);
                // const p = document.createElement("p");
                // p.innerText = res.message;
                // document.body.appendChild(p);
            }

            if (result === "videoBandwidthTest success") {
                let vbsLogger = JSON.stringify(res["log"].map(oneLog => oneLog.substr(6, oneLog.length - 1)));
                vbsLogger = JSON.parse(vbsLogger);
                let vidStatus = [];
                let vidStats = [];
                vbsLogger.forEach((q) => (q.substr(0, 1) === "{") ? vidStatus.push(JSON.parse(q)) : vidStats.push(q));


                this.setState({
                    videoLog: {packetLoss: vidStats[1], RTTAvg: vidStats[4], sendAvg: vidStats[6]}
                });
                // console.log("===============================", vidStats);
                //
                // const p = document.createElement("p");
                // p.innerText = vidStatus.map(one => one.status);
                // p.innerText = p.innerText + ". VIDEO STATUS: " + vidStats.map(one => one);
                // document.body.appendChild(p);
            }

            if (result === "videoBandwidthTest failure") {
                // let vbfLogger = JSON.stringify(res["log"].map(oneLog => oneLog.substr(6, oneLog.length - 1)));

                this.setState({
                    videoLog: {message: res.message}
                });
                // console.log("=========================================>>>>>", res.message);
                // const p = document.createElement("p");
                // p.innerText = res.message;
                // document.body.appendChild(p);
            }
        };

        if (!navigator.mediaDevices) {
            video = false;
            audio = false;
        }

        const servers = [
            {
                urls: [
                    "turn:turn.huddldev.com:443?transport=tcp",
                    "turn:turn.huddldev.com:443?transport=udp"
                ],
                username: "huddlvideo",
                credential: "huddlvideo@123"
            }
        ];
        if (servers) {
            iceServers = [
                {
                    urls: [
                        "turn:turn.huddldev.com:443?transport=tcp",
                        "turn:turn.huddldev.com:443?transport=udp"
                    ],
                    username: "huddlvideo",
                    credential: "huddlvideo@123"
                }
            ];
            window.localStorage.setItem("iceServers", servers);
        }
        const iceConfig = {
            iceServers: iceServers,
            iceTransports: "relay"
        };

        // const stunconfig = {
        //     iceServers: iceServers
        // };

        const mediaOptions = {audio: true, video: true};

        if (audio) {
            const audioTest = new WebrtcTroubleshooter.AudioTest(mediaOptions);
            audioTest.promise.then(
                testCompleted.bind(null, audioTest, true),
                testCompleted.bind(null, audioTest, false)
            );
            audioSuite.addTest(audioTest);

            const audioBandwidthTest = new WebrtcTroubleshooter.AudioBandwidthTest({
                iceConfig: iceConfig,
                mediaOptions: mediaOptions
            });
            audioBandwidthTest.promise.then(
                testCompleted.bind(null, audioBandwidthTest, true),
                testCompleted.bind(null, audioBandwidthTest, false)
            );
            audioSuite.addTest(audioBandwidthTest);
        }

        if (video) {
            const videoTest = new WebrtcTroubleshooter.VideoTest(mediaOptions);
            videoTest.promise.then(
                testCompleted.bind(null, videoTest, true),
                testCompleted.bind(null, videoTest, false)
            );
            const bandwidthTest = new WebrtcTroubleshooter.VideoBandwidthTest({
                iceConfig: iceConfig,
                mediaOptions: mediaOptions
            });

            bandwidthTest.promise.then(
                testCompleted.bind(null, bandwidthTest, true),
                testCompleted.bind(null, bandwidthTest, false)
            );

            videoSuite.addTest(videoTest);
            videoSuite.addTest(bandwidthTest);

        }

        if (window.RTCPeerConnection) {
            const connectivityTest = new WebrtcTroubleshooter.ConnectivityTest(
                iceConfig
            );
            connectivityTest.promise.then(
                testCompleted.bind(null, connectivityTest, true),
                testCompleted.bind(null, connectivityTest, false)
            );


            const symmetricNatTest = new WebrtcTroubleshooter.SymmetricNatTest();
            symmetricNatTest.promise.then(
                testCompleted.bind(null, symmetricNatTest, true),
                testCompleted.bind(null, symmetricNatTest, false)
            );

            connectivitySuite.addTest(connectivityTest);
            natSuite.addTest(symmetricNatTest);
        }

        // if (window.RTCPeerConnection) {
        //     const stunConnectivityTest = new WebrtcTroubleshooter.ConnectivityTest(
        //         stunconfig
        //     );
        //     stunConnectivityTest.promise.then(
        //         testCompleted.bind(null, stunConnectivityTest, true),
        //         testCompleted.bind(null, stunConnectivityTest, false)
        //     );
        //
        //
        //     const symmetricNatTest = new WebrtcTroubleshooter.SymmetricNatTest();
        //     symmetricNatTest.promise.then(
        //         testCompleted.bind(null, symmetricNatTest, true),
        //         testCompleted.bind(null, symmetricNatTest, false)
        //     );
        //
        //     connectivitySuite.addTest(stunConnectivityTest);
        //     natSuite.addTest(symmetricNatTest);
        // }

        //const p = document.createElement("p");
        audioSuite
            .start()
            .then(
                (results) => {
                    const result = "Finished the tests";
                    let resobject = {};
                    results.map((eresult) => resobject[eresult.name] = eresult.status);
                    console.log(resobject);

                    this.setState({
                        audioResource: resobject,
                        count: this.state.count + 1,
                        audioTestActive: false
                    });

                    console.log(result, results);
                    // p.innerText = result;
                },
                (err) => {
                    const result = "test failure";
                    let resobject = {};
                    err.details.map((eresult) => resobject[eresult.name] = eresult.status);
                    console.log(resobject);

                    this.setState({
                        audioResource: resobject,
                        count: this.state.count + 1,
                        audioTestActive: false
                    });


                    console.warn(result, err, err.details);
                    //p.innerText = result;
                }
            );

        videoSuite
            .start()
            .then(
                (results) => {
                    const result = "Finished the tests";
                    let resobject = {};
                    results.map((eresult) => resobject[eresult.name] = eresult.status);
                    console.log(resobject);

                    this.setState({
                        videoResource: resobject,
                        count: this.state.count + 1,
                        videoTestActive: false
                    });
                    console.log(result, results);
                    // p.innerText = result;
                },
                (err) => {
                    const result = "test failure";
                    let resobject = {};
                    err.details.map((eresult) => resobject[eresult.name] = eresult.status);
                    console.log(resobject);

                    this.setState({
                        videoResource: resobject,
                        count: this.state.count + 1,
                        videoTestActive: false
                    });


                    console.warn(result, err, err.details);
                    //p.innerText = result;
                }
            );

        connectivitySuite
            .start()
            .then(
                (results) => {
                    const result = "Finished the tests";
                    let resobject = {};
                    results.map((eresult) => resobject[eresult.name] = eresult.status);
                    console.log(resobject);

                    this.setState({
                        networkResource: resobject,
                        count: this.state.count + 1,
                        networkTestActive: false
                    });
                    console.log(result, results);
                    // p.innerText = result;
                },
                (err) => {
                    const result = "test failure";
                    let resobject = {};
                    err.details.map((eresult) => resobject[eresult.name] = eresult.status);
                    console.log(resobject);

                    this.setState({
                        networkResource: resobject,
                        count: this.state.count + 1,
                        networkTestActive: false
                    });
                    console.warn(result, err, err.details);
                    //p.innerText = result;
                }
            );


        natSuite
            .start()
            .then(
                (results) => {
                    const result = "Finished the tests";
                    let resobject = {};
                    results.map((eresult) => resobject[eresult.name] = eresult.status);
                    console.log(resobject);

                    this.setState({
                        connectionResource: resobject,
                        count: this.state.count + 1,
                        connectionTestActive: false
                    });

                    console.log(result, results);
                    // p.innerText = result;
                },
                (err) => {
                    const result = "test failure";
                    let resobject = {};
                    err.details.map((eresult) => resobject[eresult.name] = eresult.status);
                    console.log(resobject);

                    this.setState({
                        connectionResource: resobject,
                        count: this.state.count + 1,
                        connectionTestActive: false
                    });


                    console.warn(result, err, err.details);
                    //p.innerText = result;
                }
            );

        // .then(function () {
        //     document.body.appendChild(p);
        // });


        // const savedIceServers = window.localStorage.getItem("iceServers");
        // if (iceServers) {
        //     iceServersEntry.value = savedIceServers;
        // }

    };

    render() {
        //const {audioBandwidthTest, audiotest, connectivityTest, symmetricNatTest, videoBandwidthTest, videoTest} = this.state;
        const {audioResource, videoResource, connectionResource, networkResource, audioLog, videoLog} = this.state;
        const {audioTestActive, videoTestActive, networkTestActive, connectionTestActive} = this.state;
        //let loading = <Spinner/>;
        //console.log("-----------------------------------", this.state);
        const {audiotest, audioBandwidthTest} = audioResource;
        const {videoTest, videoBandwidthTest} = videoResource;
        const {connectivityTest} = networkResource;
        const {symmetricNatTest} = connectionResource;
        return (
            <div className="container">
                <nav className="navbar navbar-light mx-auto bg-light mb-5">
          <span
              style={{
                  fontFamily: "Robot",
                  //   color: "#F7F7F7",
                  fontSize: 28,
                  fontWeight: "bold"
              }}
          >
            <span style={{color: "purple"}}>Huddl</span> WebRTC Troubleshooter
          </span>

                    {this.state.loading ? (<i className="fas fa-cog fa-spin"/>) : (<button
                        onClick={this.test.bind(this)}
                        type="button"
                        className="btn btn-success">
                        Start
                    </button>)}
                </nav>
                <Audio name="Audio" status={audiotest} band={audioBandwidthTest} test={audioTestActive} log={audioLog}/>
                <Video name="Video" status={videoTest} band={videoBandwidthTest} test={videoTestActive} log={videoLog}/>
                <Connectivity name="Connectivity" status={connectivityTest} test={networkTestActive}/>
                <SymmetricNAT name="Symmetric NAT" status={symmetricNatTest} test={connectionTestActive}/>

            </div>
        );
    }
}

export default App;
