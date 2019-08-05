// components/Header.js

import React from 'react';
import Title from './Title.js';
import Content from './Content.js';
import Button from './Button';


const header = () => {
  return (
    <header className="App-header">
      <Title />
      <Content />
      <Button />

    </header>
  );
}

export default header;