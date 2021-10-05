import React, { Component } from 'react';
import { Modal,Form,Button,Image, } from 'react-bootstrap';

export class FormModels extends Component {
    render() {
        return (
            <div>
 

      <Modal show={this.props.showModal} onHide={()=>{this.props.handleClose()}}>
        <Modal.Header closeButton>
          <Modal.Title>{this.props.title}</Modal.Title>
        </Modal.Header>
         <Modal.Body>
          {this.props.description}<br/>
        <p> {this.props.toUSD}USD</p>
          <Image src={this.props.image_url} style={{width:'200px',height:'200px'}}roundedCircle />
          < Form onSubmit={(e)=>{this.props.handleUpdatform(e)}}>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Control type="text" placeholder="title" onChange={(e)=>{this.props.handletitle(e)}}/>
          <Form.Control type="text" placeholder="price" onChange={(e)=>{this.props.handletoUSD(e)}}/>
          <Form.Control type="text" placeholder="Image Link" onChange={(e)=>{this.props.handleImage(e)}}/>
          <Form.Control type="text" placeholder=" description"  onChange={(e)=>{this.props.handleDes(e)}}/>
          </Form.Group>
          <Button variant="primary" type="submit">Submit  </Button>
 </Form>




        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={()=>{this.props.handleClose()}}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>




                
            </div>
        )
    }
}

export default FormModels
