import React, {Component} from 'react'
import {Modal, Button} from 'react-bootstrap'

export default class FeedbackModal extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
           <div>
               <Modal show={this.props.showModal} onHide={this.props.close}>
                   <Modal.Body
                       style={{
                           textAlign: 'center'
                       }}
                   >
                       <h1>Your feedback has been sent!</h1>
                       <h2>Thank you!</h2>
                   </Modal.Body>
                   <Modal.Footer
                       style={{
                           textAlign: 'center'
                       }}
                   >
                       <Button onClick={this.props.close}>Close</Button>
                   </Modal.Footer>
               </Modal>
           </div>
        )
    }

}