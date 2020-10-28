import React from 'react';
import logo from './logo.svg';
import './App.css';
import Button, { ButtonType, ButtonSize } from './components/Button/button'

function App() {
  return (
    <div className="App">
      <Button disabled> Hello Basic Button </Button>
      <Button btnType={ButtonType.Primary} size={ButtonSize.Large}> Hello Large Button </Button>
      <Button btnType={ButtonType.Link} href="http://www.baidu.com/"> Hello Link Button </Button>
    </div>
  );
}

export default App;
