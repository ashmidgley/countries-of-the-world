import React from 'react';
import './submission-box.css';

class SubmissionBox extends React.Component {

    render() {
        return (
            <div id="score-container">
                {
                    this.props.alreadyDone && 
                    <div id="submission-validation">
                        Already done! :/
                    </div>
                }
                <input 
                    className={this.props.alreadyDone ? "form-control invalid-field" : "form-control"} 
                    type="text" 
                    placeholder="Enter country..."
                    onChange={this.props.handleSubmission}
                    disabled={!this.props.started || this.props.finished}
                    autoFocus
                />
                <p id="submission-count" className="card-text text-center">
                    {this.props.submissions.length} of {this.props.countries.length}
                </p>
                <h1 className="text-center">{this.props.timer}</h1>
                {
                    !this.props.started && !this.props.finished &&
                    <div className="text-center">
                        <button className="btn btn-success" onClick={this.props.startTimer}>Start</button>
                    </div>
                }
                {
                    this.props.started && !this.props.finished &&
                    <div className="text-center">
                        <button className="btn btn-warning" onClick={this.props.finish}>Give Up</button>
                    </div>
                }
                {
                    this.props.finished &&
                    <div className="text-center">
                        <button className="btn btn-info" onClick={this.props.retry}>Retry?</button>
                    </div>
                }
            </div>
        );
    }
}

export default SubmissionBox;
