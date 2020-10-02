import React from 'react';
import './home.css';
import 'react-svg-map/lib/index.css';
import $ from 'jquery';
import Helmet from 'react-helmet';
import Spinner from '../spinner/spinner';
import CompletedModal from '../completed-modal/completed-modal';
import SubmissionBox from '../submission-box/submission-box';
import Tooltip from '../tooltip/tooltip';
import { SVGMap } from "react-svg-map";
import { getWorld } from '../../helpers/map.js'; 

class Home extends React.Component {

    constructor(props) {
        super(props);
        this.customWorld = getWorld(); 

        this.state = {
            countries: null,
            alternativeNamings: null,
            countriesMap: null, 
            dropdownOptions: null,
            submissions: [],
            started: false,
            stopWatch: 0,
            max: 15 * 60,
            clockString: "15:00",
            modalIsOpen: false,
            alreadyDone: false,
            tooltipText: null,
            tooltipStyle: { "display": "none" },
            dangerZone: false,
            loading: true
        };
    }

    componentDidMount() {
        fetch(`${process.env.REACT_APP_API_URL}/countries`)
            .then(response => response.json())
            .then(data => {
                this.setState({
                    countries: data
                });
            });

        fetch(`${process.env.REACT_APP_API_URL}/countries/alternatives`)
            .then(response => response.json())
            .then(data => {
                this.setState({
                    alternativeNamings: data
                });
            });
        
        fetch(`${process.env.REACT_APP_API_URL}/countries/map`)
            .then(response => response.json())
            .then(data => {
                var values = Array.from(Object.values(data));
                this.setState({
                    countriesMap: data,
                    dropdownOptions: [...new Set(values)]
                });
            });
    }

    componentDidUpdate() {
        if(this.state.loading && this.state.countries
            && this.state.alternativeNamings && this.state.countriesMap) {
            this.setState({
                loading: false
            });
        }
    }

    startTimer = () => {
        this.setState({
            started: true
        });

        let self = this;
        var countdown = setInterval(function () {
            if(self.state.finished) {
                clearInterval(countdown)
                return;
            }

            var temp = self.state.stopWatch + 1;
            var clockString = self.getClockString(temp);
            self.setState({
                stopWatch: temp,
                clockString: clockString
            });

            if(!self.state.dangerZone && self.state.stopWatch > (self.state.max - 60)) {
                self.setState({
                    dangerZone: true
                });
            }

            if (self.state.stopWatch >= self.state.max) {
                self.finish();
                clearInterval(countdown);
            }
        }, 1000);
    }

    getClockString = (expired) => {
        expired = this.state.max - expired;
        var minutes = Math.floor(expired / 60);
        var seconds = expired % 60;
        minutes = minutes < 10 ? '0' + minutes : minutes;
        seconds = seconds < 10 ? '0' + seconds : seconds;
        return `${minutes}:${seconds}`;
    }
  
    finish = () => {
        this.setState({
            finished: true,
            modalIsOpen: true
        });

        for (const [key, value] of Object.entries(this.state.countriesMap)) {
            if(!this.state.submissions.includes(value))
                $(`[name="${value}"]`).css({ fill: "#f4bc44" });
        } 
    }

    retry = () => {
        this.setState({
            finished: false,
            submissions: [],
            stopWatch: 0,
            clockString: '15:00',
            dangerZone: false
        });

        for (const [key, value] of Object.entries(this.state.countriesMap)) {
            $(`[name="${value}"]`).css({ fill: "lightgrey" });
        } 

        this.startTimer(); 
    }

    handleSubmission = (event) => {
        var submission = event.target.value.toLowerCase().trim();
        if(!this.state.countries.includes(submission) &&
            !this.state.alternativeNamings.includes(submission))
            return;

        var name = this.state.countriesMap[submission];
        if(name && this.state.submissions.includes(name)) {
            this.flashAlreadyDone();
            return;
        }

        $(`[name="${name}"]`).css({ fill: "#a1d99b" });

        var update = this.state.submissions;
        update.push(name);
        this.setState({
            submissions: update 
        });

        event.target.value = "";

        if(this.state.submissions.length === this.state.countries.length) {
            this.finish();
        }
    }

    flashAlreadyDone = () => {
        this.setState({
            alreadyDone: true
        });

        let self = this;
        setTimeout(function() {
            self.setState({
                alreadyDone: false
            });
        }, 2000);
    }

    mouseOver = (event) => {
        if(!this.state.finished)
            return;

        this.setState({
            tooltipText: event.target.getAttribute('name')
        });
    }

    mouseMove = (event) => {
        if(!this.state.finished || !this.state.tooltipText)
            return;

        var style = {
            "display": "block",
            "top": event.clientY + 10,
            "left": event.clientX - 100
        };

        this.setState({
            tooltipStyle: style
        });
    }

    mouseOut = (event) => {
        if(!this.state.finished)
            return;

        this.setState({
            tooltipText: null,
            tooltipStyle: { "display": "none" }
        });
    }

    closeModal = (e = null) => {
        if(e)
            e.preventDefault();

        this.setState({
            modalIsOpen: false
        });
    }

    render() {
        if(this.state.loading) {
            return (
                <Spinner></Spinner>
            );
        }

        return (
            <div className="home-container">
                <Helmet>
                    <title>Countries of the World Map Quiz</title>
                    <meta
                        name="description"
                        content="Countries of the World Map Quiz. Can you name all 197? Test your geography skills and see where you land on the leaderboard."
                    />
                </Helmet>
                <CompletedModal
                    modalIsOpen={this.state.modalIsOpen}
                    submissions={this.state.submissions.length}
                    countries={this.state.dropdownOptions}
                    stopWatch={this.state.stopWatch}
                    closeModal={this.closeModal}>
                </CompletedModal>
                <div className="map-container">
                    <SVGMap
                        map={this.customWorld}
                        onLocationMouseOver={this.mouseOver}
                        onLocationMouseMove={this.mouseMove}
                        onLocationMouseOut={this.mouseOut}
                    />
                </div>
                <Tooltip
                    value={this.state.tooltipText}
                    style={this.state.tooltipStyle}>
                </Tooltip>
                <SubmissionBox
                    submissions={this.state.submissions}
                    countries={this.state.countries}
                    alreadyDone={this.state.alreadyDone}
                    started={this.state.started}
                    finished={this.state.finished}
                    timer={this.state.clockString}
                    dangerZone={this.state.dangerZone}
                    startTimer={this.startTimer}
                    handleSubmission={this.handleSubmission}
                    finish={this.finish}
                    retry={this.retry}>
                </SubmissionBox>
            </div>
        );
    }
}

export default Home;

