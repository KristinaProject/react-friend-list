import React from 'react';
import ReactDOM from 'react-dom/client';
import { Container } from './Friends';
import './index.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  <h1 className='text-center'>Friends</h1>
  <Container />
  </>
);

