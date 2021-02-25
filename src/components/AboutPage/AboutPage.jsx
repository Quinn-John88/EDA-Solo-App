import React from 'react';

// This is one of our simplest components
// It doesn't have local state,
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is'

function AboutPage() {
  return (
    <div className="container">
      <div>
        <p>
          Home Cooker Helper is a great application that will help you decide what you are going to cook for you, your kids, your husband/wife, ANYONE!
          This application streamlines the ease of accessing recipes that you can cook with the ingredients in your pantry/fridge.
          Simply Add the ingredients that you have in you pantry(from a selection of ingredients) and click over to the recipes page to see a total list of the recipes you can cook!
          With each recipe you can click on it and you will be transfered to a new page where there will be instructions on cooking the dish and an ingredients list of what you will exactly need!
          Enjoy finding tonight's meal faster with Home Cooker Helper.
            </p>
      </div>
    </div>
  );
}

export default AboutPage;
