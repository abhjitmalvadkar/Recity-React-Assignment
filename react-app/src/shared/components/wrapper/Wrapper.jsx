import './Wrapper.css';
import Header from '../header/Header';
import Sidenav from '../sidenav/Sidenav';
import React from 'react';
import {Outlet} from 'react-router-dom';


export default function Wrapper() {
  return (
    <div className="wrapper-container">
      <Header />
      <div
        className="content"
      >
        <Sidenav />
        <div className="outlet">
          <Outlet />
        </div>
      </div>
    </div>
  )
}
