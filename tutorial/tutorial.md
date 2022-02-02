# Tutorial


# Src Links
- https://cloudinary.com/documentation/react_quick_start#landingpage
- https://snipcart.com/blog/react-ecommerce-tutorial
- https://github.com/basir/amazona
- https://dev.to/basir/react-ecommerce-project-2021-in-9-hours-21n7
- https://blog.logrocket.com/react-stripe-payment-system-tutorial/

---

```
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
```