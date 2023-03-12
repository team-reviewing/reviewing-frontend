import React from 'react';
import Template from '../components/LogIn/Template';
import Header from '../components/Header';

function login() {
  return (
    <>
      <Header />
      <div className="w-full flex justify-center items-center">
        <Template />
      </div>
    </>
  );
}

export default login;
