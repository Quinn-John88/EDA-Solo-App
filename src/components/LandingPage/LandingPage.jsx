import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './LandingPage.css';

// CUSTOM COMPONENTS
import RegisterForm from '../RegisterForm/RegisterForm';

function LandingPage() {
  const [heading, setHeading] = useState('Welcome');
  const history = useHistory();

  const onLogin = (event) => {
    history.push('/login');
  };

  return (
    <div className="container">
      <h2>{heading}</h2>

      <div className="grid">
        <div className="grid-col grid-col_8">
            <h1>Home Cooker Helper</h1>
            <p>
              Home Cooker Helper is a great application that will help you decide what you are going to cook for you, your kids, your husband/wife, ANYONE! 
              This application streamlines the ease of accessing recipes that you can cook with the ingredients in your pantry/fridge. 
              Simply Add the ingredients that you have in you pantry(from a selection of ingredients) and click over to the recipes page to see a total list of the recipes you can cook!
              With each recipe you can click on it and you will be transfered to a new page where there will be instructions on cooking the dish and an ingredients list of what you will exactly need!
              Enjoy finding tonight's meal faster with Home Cooker Helper.
            </p>
        </div>
        <div className="grid-col grid-col_4">
          <RegisterForm />
          <center>
            <h4>Already a Member?</h4>
            <button className="btn btn_sizeSm" onClick={onLogin}>
              Login
            </button>
          </center>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
