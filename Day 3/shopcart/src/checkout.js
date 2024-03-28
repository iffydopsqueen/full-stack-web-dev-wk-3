import React, { useState } from 'react';
import FacebookLogin from 'react-facebook-login';
import { Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function Checkout() {
  const [login, setLogin] = useState(false);  // set up login
  const [data, setData] = useState({});   // set up fb data 
  const [picture, setPicture] = useState('');   // set up fb profile image 

  return (
    <div className="container">
      <Card>
        <Card.Header>
          <h1>Sign In</h1>
        </Card.Header>
        <Card.Body>
          <Card.Text>
            <h3>Please login using one of the following:</h3>
            {/* SignIn Form  */}
            <SignInForm />
            {/* FB Login Button */}
            <FacebookLogin 
              appId=""
              autoLoad={false}
              fields="name,email,picture"
              scope="public_profile,user_friends"
              callback={responseFacebook}
              icon="fa-facebook"
            />
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  )
}

// Login Form component
function SignInForm() {
  return (
    <form className="border mt-3 mb-5 p-3 bg-white">
      <label className="m-2">Name:</label>
      <input type="text" name="name" placeholder="Your name" />
      <label className="m-2">Email:</label>
      <input type="email" name="email" placeholder="Your Email" />
      <input type="submit" value="Login" className="btn bg-success text-white my-3" />
    </form>
  )
}