import React from 'react'
import {AdvancedImage} from '@cloudinary/react';
import {Cloudinary} from "@cloudinary/url-gen";

// Import any actions required for transformations.
import {fill} from "@cloudinary/url-gen/actions/resize";

import './App.css';

function App() {

  const cld = new Cloudinary({
    cloud: {
      cloudName: 'demo'
    }
  });

  const myImage = cld.image('docs/models'); 

  myImage.resize(fill().width(250).height(250));

  return (
    <div className="App">
        
      <header className="App-header">
        <h1>My App</h1>
      </header>
      <main>
      <AdvancedImage cldImg={myImage} />
      </main>
    </div>
  );
}

export default App;
