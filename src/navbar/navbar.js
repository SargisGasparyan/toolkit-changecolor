import React from 'react';
import {  useDispatch } from 'react-redux';
import {
    incrementAsync,

  } from '../reducers/data/photosSlice';
import {  fetchData } from '../reducers/data/photosAPI';
import './navbar.css'
import { setContent } from '../reducers/contentReducer';
const Navbar = () => {
    const dispatch=useDispatch()
  return <div>
      <div className='navbar'>
          <button onClick={() => {
              dispatch(setContent("page"))
              fetchData().then(res=>dispatch(incrementAsync(res)))
          }}


>Photos Page</button>
          <button onClick={() => dispatch(setContent("changepage"))}>Change Color</button>
          <button onClick={() => dispatch(setContent("colorpage"))}>Color Page</button>
      </div>
      <hr/>
  </div>;
};

export default Navbar;
