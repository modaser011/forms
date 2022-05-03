import React from "react";
import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './signUp.css';
import './App.css';
import { Container,Form,Button,Col,Row} from "react-bootstrap";
import { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import PRequisite from "./PRequisite";
import Card from 'react-bootstrap/Card'

export function SignUp()
{
  const[Password,setPassword]=useState("");
  const[confirmPassword,setConfirmPassword]=useState("");
  const[error,seterror]=useState("");
  const[vari,setVari]=useState(false);
  const[pow,setPow]=useState("");

const onChange1=(value)=> {
    console.log("Captcha value:", value);
setVari(true);
  };
  
  const confirm = (e) => {
    const confpass=e.target.value;
    setConfirmPassword(confpass);
    if(Password!= confpass)
{
seterror("confirm password isn't match password");
}
else 
{
  seterror("");

}
 };

 const [pRequisite, setPRequisite] = useState(false);
  const [checks, setChecks] = useState({
    capsLetterCheck: false,
    numberCheck: false,
    pwdLengthCheck: false,
    specialCharCheck: false,
  });

  const handleOnChange = (e) => {
    setPassword(e.target.value);
  };

  const handleOnFocus = () => {
    setPRequisite(true);
  };

  const handleOnBlur = () => {
    setPRequisite(false);
  };

  const handleOnKeyUp = (e) => {
    const { value } = e.target;
    const capsLetterCheck = /[A-Z]/.test(value);
    const numberCheck = /[0-9]/.test(value);
    const pwdLengthCheck = value.length >= 8;
    const specialCharCheck = /[!@#$%^&*]/.test(value);
    setChecks({
      capsLetterCheck,
      numberCheck,
      pwdLengthCheck,
      specialCharCheck,
    });
  };

  return (
      <>
      <Container className="cont">
         <h1 className="shadow-sm   p-3 text-center">Sign Up</h1>
                <Row className="mt-2">
           <Col  lg={5} md={6} sm={12}  className='frm p-5 m-auto shadow-sm rounded-lg'>
           <Form className="mb" >
            <Form.Group className="mb-3" controlId="formBasicText">
    <Form.Label >username</Form.Label>
    <Form.Control type="text" className="username" placeholder="username" required />
  </Form.Group>
  <br/>

  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" className="email" required/>
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>  
  </Form.Group>

  <br/>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Phone number</Form.Label>
    <Form.Control type="tel" placeholder="Enter your Phone number" className="number" min="11" max="11" pattern="[0-9]{11}" required/>
  </Form.Group>
  <br/>
  <Form.Group className="mb-3" >
    <Form.Label>Gender</Form.Label>
    <Form.Select className="gender">
      <option>male</option>
      <option>female</option>
    </Form.Select>
  </Form.Group>
  <br/>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" 
    value={Password}
    onChange={handleOnChange}
            onFocus={handleOnFocus}
            onBlur={handleOnBlur}
            onKeyUp={handleOnKeyUp}
     className="Password"
      placeholder="Password" 
       required />
  </Form.Group>
 <div> {pRequisite ? (
          <PRequisite
            capsLetterFlag={checks.capsLetterCheck ? "valid" : "invalid"}
            numberFlag={checks.numberCheck ? "valid" : "invalid"}
            pwdLengthFlag={checks.pwdLengthCheck ? "valid" : "invalid"}
            specialCharFlag={checks.specialCharCheck ? "valid" : "invalid"}
          />
        ) : null}</div>
  <br/>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Confirm Password</Form.Label>
    <Form.Control type="password"
     value={confirmPassword}
     className="Password"
      placeholder="Confirm Password" 
      onChange={(e)=>confirm(e)}
       required />
  </Form.Group>
 <br/>
 <p>{error}</p>
   <br/>
  <ReCAPTCHA
sitekey="6LfbxJUfAAAAABnMrIAkuAbw1tYCEfRpRe1nkIlS"
onChange={onChange1}
/>
<br/>
<p className="x">hint: Fill all fields and captcha to signUp</p>

  <Button variant="primary btn-block" className="c"  type="submit" disabled={!vari} >
    SignUp
  </Button>
</Form>
           </Col>
         </Row>
      </Container>
      </>
    );
}