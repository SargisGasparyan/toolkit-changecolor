import React from 'react';
import { useSelector } from 'react-redux';
import { dataState } from '../data/photosSlice';

export default function ColorPage() {
  const data = useSelector(dataState);


  return (
    <div style={{backgroundColor:data.color.color,height:"100vh"}}>
      <h1 style={{fontSize:"50px"}}>This is my color page</h1>
    </div>
  );
}
