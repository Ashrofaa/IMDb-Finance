import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';

document.querySelector("body").classList.remove("hidden");      // This is added just to ease-in the website upon loading
const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(<App />);

