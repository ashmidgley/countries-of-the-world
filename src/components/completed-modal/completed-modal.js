import React from 'react';
import './completed-modal.css';
import { customStyles } from './custom-modal';
import Modal from 'react-modal';

class CompletedModal extends React.Component {

  render() {
    return (
      <div>
          <Modal isOpen={this.props.modalIsOpen} onRequestClose={this.props.closeModal} style={customStyles}>
              <form onSubmit={this.props.handleSubmit}>
                  <div className="text-center">
                      <h1>Congratulations!</h1>
                      <div id="modal-results">
                          <div className="modal-result">
                              <ion-icon name="earth-outline"></ion-icon> {this.props.submissions} 
                          </div>
                          <div className="modal-result">
                            <ion-icon name="stopwatch-outline"></ion-icon> {this.props.time} 
                          </div>
                      </div>
                      <p>Complete the below form to add your score to the leaderboard.</p>
                  </div>
                  <div className="form-group">
                      <label>Name</label>
                      <input
                          className={this.props.nameInvalid ? "form-control is-invalid" : "form-control"}
                          type="text"
                          value={this.props.name}
                          onChange={this.props.handleNameChange}
                          placeholder="Enter name..."
                      />
                      {
                          this.props.nameInvalid &&
                          <div className="invalid-feedback">
                              Name is required. 
                          </div>
                      }
                  </div>
                  <div className="form-group">
                      <label>Country</label>
                      <select
                          className={this.props.countryInvalid ? "form-control is-invalid" : "form-control"}
                          value={this.props.country}
                          onChange={this.props.handleCountryChange}>
                              <option value="" disabled defaultValue>Select country...</option>
                              {
                                  Object.entries(this.props.countries).map(([key, value]) =>
                                      <option key={key}>{value}</option>
                                  )
                              }
                      </select>
                      {
                          this.props.countryInvalid &&
                          <div className="invalid-feedback">
                              Country is required. 
                          </div>
                      }
                  </div>
                  <hr />
                  <div className="modal-actions">
                      {
                          this.props.submitting ?
                          <button className="btn btn-success" disabled>
                              <span className="spinner-border spinner-border-sm"></span>
                          </button>
                          :
                          <button className="btn btn-success" type="submit">
                              Submit
                          </button>
                      }
                      <button id="cancel" className="btn btn-light" onClick={this.props.closeModal}>
                          Cancel
                      </button>
                  </div>
              </form>
          </Modal>
      </div>
    );
  }
}

export default CompletedModal;
