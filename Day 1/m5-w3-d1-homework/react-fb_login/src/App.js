import React, { useState } from 'react';
import FacebookLogin from 'react-facebook-login';
import { Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  const [login, setLogin] = useState(false);  // set up login
  const [data, setData] = useState({});   // set up fb data 
  const [picture, setPicture] = useState('');   // set up fb profile image 

  return (
    <div className="container">
      
    </div>
  )
}