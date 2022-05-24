import React from "react";
import InputMask from "react-input-mask";
import 'bootstrap/dist/css/bootstrap.min.css';
import './signUp.css';
import './App.css';
import { Container,Form,Button,Col,Row} from "react-bootstrap";
import { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import PRequisite from "./PRequisite";
import PRequisiteuser from "./PRequisiteuser";

export function SignUp()
{  const[username,setusername]=useState(""); 
 const[error1,seterror1]=useState("");
const [value, setValue] = useState()
  const[Password,setPassword]=useState("");
  const[confirmPassword,setConfirmPassword]=useState("");
  const[error,seterror]=useState("");
  const[vari,setVari]=useState(false);
  const[pow,setPow]=useState("");
  const[error2,seterror2]=useState("");
  const [phone, setPhone] = React.useState("");

const onChange1=(value)=> {
    console.log("Captcha value:", value);
setVari(true);
  };
  
  const [pRequisite2, setPRequisite2] = useState(false);
  const [check2, setCheck2] = useState({
    letter: false,
    range2: false,
  });

  const handleOnChang = (e) => {
    setusername(e.target.value);
  };

  const handleOnFocu = () => {
    setPRequisite2(true);
  };

  const handleOnBlu = () => {
    setPRequisite2(false);
  };

  const handleOnKeyUp2 = (e) => {
    const { value } = e.target; 
     const range2 = (value.length >= 5 &&value.length <= 15);
    const letter = /^[a-zA-Z0-9]+([a-zA-Z0-9](_|-| )[a-zA-Z0-9])*[a-zA-Z0-9]+$/.test(value);
    setCheck2({
      letter,
      range2,
    });
  };



const phonee = (e) => {
    
  const phone1 = e.target.value;
setphone(phone1);
  if(phone1.length!=11)
{
seterror2("phone number must 11 numbers");
}
else 
{
seterror2("");
}
  }
  
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
    const pwdLengthCheck = value.length >= 8 && value.length <= 15;
    const specialCharCheck = /[!@#$%^&*]/.test(value);
    setChecks({
      capsLetterCheck,
      numberCheck,
      pwdLengthCheck,
      specialCharCheck,
    });
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



  return (
      <>
         <Container className="cont">
         <h1 className="shadow-sm p-3 text-center">Sign Up</h1>
                <Row className="mt-2">
           <Col  lg={5} md={6} sm={12}  
           className='frm p-5 m-auto shadow-sm rounded-lg'>
           <Form className="mb" >
            <Form.Group className="mb-3" controlId="formBasicText">
    <Form.Label >username</Form.Label>
    <Form.Control type="text" value={username} 
     className="username"
      placeholder="username" 
     onChange={handleOnChang}
            onFocus={handleOnFocu}
            onBlur={handleOnBlu}
            onKeyUp={handleOnKeyUp2}  
            required />
  </Form.Group>
  <div> {pRequisite2 ? (
          <PRequisiteuser
            letter={check2.letter ? "valid" : "invalid"}
            range2={check2.range2 ? "valid" : "invalid"}
          />
        ) : null}</div><br/>




  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control 
    type="email"
     placeholder="Enter email" 
     className="email"
      required/>
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>  
  </Form.Group>

  <br/>



    <Form.Label className="mb-3">Phone Number</Form.Label>
    <br/>
  <InputMask
        className="number" 
        value={phone}
        onChange={e => setPhone(e.target.value)}
        mask="+1\(999) 999-9999"
        maskChar=" "
        required
      />
    <br/>
    <br/>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" 
    value={Password}
     required
    onChange={handleOnChange}
            onFocus={handleOnFocus}
            onBlur={handleOnBlur}
            onKeyUp={handleOnKeyUp}
     className="Password"
      placeholder="Password" />
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

  <Button 
  variant="primary btn-block" 
  className="c" 
   type="submit" 
   disabled={!vari} >
    SignUp
  </Button>



</Form>
           </Col>
         </Row>
      </Container>
      </>
    );
}