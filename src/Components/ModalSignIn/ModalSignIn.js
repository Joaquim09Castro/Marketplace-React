import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


function ModalSignIn(props) {
  const [show, setShow] = React.useState(false);

  const [ email , setEmail ] = React.useState('');
  const [ pwrd , setPwrd ] = React.useState('');
  const [ user , setUser ] = React.useState('');

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  const submit = (event) => {

    event.preventDefault();

    const body = {
      email,
      pwrd
    }
    console.log(body)

    fetch('https://resilia-marketplace.herokuapp.com/session/login' , {
      method: "POST",
      body: JSON.stringify(body),
      headers: { "Content-Type": "application/json"}
    })
      .then( resp => setUser(resp.token))
  }

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Enter
      </Button>

      <Modal
        size="sm"
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={submit} id="modal-form">
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>

              <Form.Control 
                type="email" 
                placeholder="Enter email" 
                onChange={ event => setEmail(event.target.value)}
              />

              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              
              <Form.Control
                type="password" 
                placeholder="Password"
                onChange={ event => setPwrd(event.target.value)}
              />

            </Form.Group>
            
            <input
              type="submit"
              className="bg-primary text-light"
              value="Log in"
              onClick={
                console.log("teste")
              }
            />
          </form>
        </Modal.Body>        
      </Modal>
    </>
  );
}

export default ModalSignIn;
