import React from 'react';
import { useSelector } from 'react-redux';
import {
  dataState,
} from './photosSlice';

export default function Photos() {
  const data = useSelector(dataState);


  return (
    <div style={{display:"flex",flexWrap:"wrap"}}>
      {data?.counter?.data?.slice(0,20).map((item,index)=>{
        return(
            <div key={index} style={{padding:"20px"}}>
            <img src={item.url} style={{width:"400px"}}/>

            </div>
          )
      })}
    </div>
  );
}
