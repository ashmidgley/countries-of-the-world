import React from 'react';
import './completed-modal.css';
import $ from 'jquery';
import Modal from 'react-modal';
import { customStyles } from './custom-modal';
import { Formik } from 'formik';
import { getTimeString } from '../../helpers/time';

class CompletedModal extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            time: null
        }
    }

    componentDidUpdate(prevProps) {
        if(!prevProps.modalIsOpen && this.props.modalIsOpen) {
            this.setState({
                time: getTimeString(this.props.stopWatch)
            });
        }
    }

    handleSubmit = (values) => {
        var data = {
            name: values.name,
            country: values.country,
            countries: this.props.submissions,
            time: this.props.stopWatch
        };

        fetch(`${process.env.REACT_APP_API_URL}/leaderboard`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
        .then(response => response.json())
        .then(data => {
            this.props.closeModal();
            this.spinTrophy();
        })
        .catch(error => {
            console.error(error);
        });
    }

    spinTrophy = () => {
        setTimeout(function() {
            $("#trophy-icon").css("animation", "spin 1.5s")
            setTimeout(function() {
                $("#trophy-icon").css("animation", "")
            }, 1500);
        }, 500);
    }

    render() {
        return (
            <div>
                <Modal isOpen={this.props.modalIsOpen} onRequestClose={this.props.closeModal} style={customStyles}>
                    <div className="text-center">
                        <h1>Congratulations!</h1>
                        <div id="modal-results">
                            <div className="modal-result">
                                <ion-icon name="earth-outline"></ion-icon> {this.props.submissions} 
                            </div>
                            <div className="modal-result">
                                <ion-icon name="stopwatch-outline"></ion-icon> {this.state.time} 
                            </div>
                        </div>
                        <p>Complete the below form to add your score to the leaderboard:</p>
                    </div>
                    <Formik
                        initialValues=
                        {
                            {
                                name: '',
                                country: '',
                            }
                        }
                        validate={values => {
                            let errors = {};
                            if (!values.name)
                                errors.name = 'Required';
                            if(!values.country)
                                errors.country = 'Required';
                            return errors;
                        }}
                        onSubmit={(values, { setSubmitting }) => {
                            this.handleSubmit(values);
                            setSubmitting(false);
                        }}>{({ values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting, setFieldValue }) => (
                            <form className="form" onSubmit={handleSubmit}>
                                <div className="form-group">
                                    <label>Name</label>
                                    <input
                                        className={touched.name && errors.name ? "form-control is-invalid" : "form-control"}
                                        type="text"
                                        name="name"
                                        value={values.title}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        placeholder="Enter name..."
                                    />
                                    {
                                        touched.name && errors.name &&
                                        <div className="invalid-feedback">
                                            {errors.name} 
                                        </div>
                                    }
                                </div>
                                <div className="form-group">
                                    <label>Country</label>
                                    <select
                                        className={touched.country && errors.country ? "form-control is-invalid" : "form-control"}
                                        name="country"
                                        value={values.country}
                                        onChange={handleChange}
                                        onBlur={handleBlur}>
                                        <option
                                            value=""
                                            disabled
                                            defaultValue>
                                            Select country...
                                        </option>
                                        {
                                            this.props.countries.map(country =>
                                                <option>{country}</option>
                                            )
                                        }
                                    </select>
                                    {
                                        touched.country && errors.country &&
                                        <div className="invalid-feedback">
                                            {errors.country}
                                        </div>
                                    }
                                </div>
                                <hr />
                                <div className="modal-actions">
                                    {
                                        isSubmitting ?
                                        <button className="btn btn-success" disabled>
                                            <span className="spinner-border spinner-border-sm"></span>
                                        </button>
                                        :
                                        <button className="btn btn-success" type="submit">
                                            Submit
                                        </button>
                                    }
                                    <button
                                        id="cancel"
                                        className="btn btn-light"
                                        onClick={this.props.closeModal}>
                                        Cancel
                                    </button>
                                </div>
                            </form>
                        )}
                    </Formik>
                </Modal>
            </div>
        );
    }
}

export default CompletedModal;
