import React from 'react';
import ReactDom from 'react-dom';
import './index.css';

const jsx = (
  <div className="border">
    <h1>全栈</h1>
    <a href="https://www.kaikeba.com">kkb</a>
  </div>
);

ReactDom.render(jsx, document.getElementById('root'));
