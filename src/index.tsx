import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as Spaces from "react-spaces"
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Spaces.ViewPort>
      {/* Title bar */}
      <Spaces.Top size="5%" order={1} resizable={false}>
        <Spaces.Left size="5%">
          <div>bvf logo place</div>
        </Spaces.Left>
        <Spaces.Fill>
          <div>Title bar</div>
        </Spaces.Fill>
      </Spaces.Top>
      
        
      {/* Left nav bar */}
      <Spaces.LeftResizable size="15%">
        <Spaces.Fill>
          <div>Left nav bar fill.</div>
        </Spaces.Fill>
      </Spaces.LeftResizable>
      
      {/* Center content */}
      <Spaces.Fill>
        <div>Center content</div>
        <App />
      </Spaces.Fill>
    </Spaces.ViewPort>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
