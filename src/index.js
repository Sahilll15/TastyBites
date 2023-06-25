import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { FirebaseProvider } from './Context/Firebase';
import { RecipeProvider } from './Context/Recipe';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <FirebaseProvider>
      <RecipeProvider>
        <App />
      </RecipeProvider>
    </FirebaseProvider>
  </React.StrictMode>
);


reportWebVitals();
