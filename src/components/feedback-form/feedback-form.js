import React, {Component} from 'react'
import {Form, HelpBlock, FormGroup, ControlLabel, FormControl, Button} from 'react-bootstrap'
import FeedbackModal from '../modal/modal'

export default class FeedbackForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pushForm: false,
            validEmail: false,
            validName: false,
            validMessage: false,

            helpBlockEmail: ' ',
            helpBlockName: '',
            helpBlockMessage: '',

            showModal: false,
        };
        this.emailChangeHandler = this.emailChangeHandler.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.nameChangeHandler = this.nameChangeHandler.bind(this);
        this.messageChangeHandler = this.messageChangeHandler.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }

    handleFormSubmit(event) {
        event.preventDefault();
        this.setState({pushForm: true});
        const {validEmail, validName, validMessage} = this.state;
        if (!validEmail) {
            this.setState({helpBlockEmail: 'Not vaild email.'});
        }
        if (!validName) {
            this.setState({helpBlockName: 'Name should be length more than 3 characters.'});
        }

        if (!validMessage) {
            this.setState({helpBlockMessage: 'Message should be length more than 3 characters.'});
        }
        if (validEmail && validName && validMessage) {
            this.setState({showModal: true});
        }
    }

    emailChangeHandler() {
        const {pushForm} = this.state;
        let emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (pushForm && emailRegex.test(this.email.value)) {
            this.setState({validEmail: true, helpBlockEmail: ''})
        } else if (pushForm) {
            this.setState({validEmail: false, helpBlockEmail: 'Not vaild email.'});
        } else if(emailRegex.test(this.email.value)){
            this.setState({validEmail: true, helpBlockEmail: ''})
        }
    }

    nameChangeHandler() {
        const {pushForm} = this.state;
        if (pushForm && this.name.value.length > 3) {
            this.setState({validName: true, helpBlockName: ''})
        } else if (pushForm) {
            this.setState({validName: false, helpBlockName: 'Name should be length more than 3 characters.'});
        } else if(this.name.value.length > 3){
            this.setState({validName: true, helpBlockName: ''})
        }
    }

    messageChangeHandler() {
        const {pushForm} = this.state;
        if (pushForm && this.message.value.length > 3) {
            this.setState({validMessage: true, helpBlockMessage: ''})
        } else if (pushForm) {
            this.setState({validMessage: false, helpBlockMessage: 'Message should be length more than 3 characters.'});
        } else  if (this.message.value.length > 3) {
            this.setState({validMessage: true, helpBlockMessage: ''})
        }
    }

    validationState(type) {
        const {pushForm, validEmail, validName, validMessage} = this.state;

        if (type === 'email') {
            if (!pushForm && !validEmail) {
                return ''
            } else if (pushForm && validEmail) {
                return 'success'
            } else {
                return 'error'
            }
        }
        if (type === 'name') {
            if (!pushForm && !validName) {
                return null
            } else if (pushForm && validName) {
                return 'success'
            } else {
                return 'error'
            }
        }

        if (type === 'message') {
            if (!pushForm && !validMessage) {
                return null
            } else if (pushForm && validMessage) {
                return 'success'
            } else {
                return 'error'
            }
        }
    }

    closeModal(){
        this.setState({
            pushForm: false,
            validEmail: false,
            validName: false,
            validMessage: false,

            helpBlockEmail: ' ',
            helpBlockName: '',
            helpBlockMessage: '',

            showModal: false,
        });
        this.email.value = '';
        this.name.value = '';
        this.message.value = '';
    }

    render() {
        return (
            <div>
                <h2>Feedback form:</h2>
                <Form
                    onSubmit={this.handleFormSubmit}
                >
                    <FormGroup controlId="formValidationEmail" validationState={this.validationState('email')}>
                        <ControlLabel>Enter email*</ControlLabel>
                        <FormControl
                            type="text"
                            onChange={this.emailChangeHandler}
                            inputRef={ref => {
                                this.email = ref;
                            }}
                        />
                        <HelpBlock>{this.state.helpBlockEmail}</HelpBlock>

                    </FormGroup>

                    <FormGroup controlId="formValidationName" validationState={this.validationState('name')}>
                        <ControlLabel>Enter name*</ControlLabel>
                        <FormControl
                            type="text"
                            onChange={this.nameChangeHandler}
                            inputRef={ref => {
                                this.name = ref;
                            }}
                        />
                        <HelpBlock>{this.state.helpBlockName}</HelpBlock>
                    </FormGroup>

                    <FormGroup controlId="formControlsMessage" validationState={this.validationState('message')}>
                        <ControlLabel>Message: </ControlLabel>
                        <FormControl
                            componentClass="textarea"
                            onChange={this.messageChangeHandler}
                            inputRef={ref => {
                                this.message = ref
                            }}
                        />
                        <HelpBlock>{this.state.helpBlockMessage}</HelpBlock>
                    </FormGroup>
                    <Button
                        type="submit"
                        bsStyle="success"
                        className="pull-right"
                        style={{
                            marginTop: '20px',
                        }}
                    >
                        Submit
                    </Button>
                </Form>
                <FeedbackModal
                    showModal={this.state.showModal}
                    close={this.closeModal}
                />
            </div>
        )
    }
}

