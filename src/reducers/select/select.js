import React from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { changeColor } from './selectSlice';
import {
  dataState,
} from './selectSlice';

export default function Select() {
  const data = useSelector(dataState);
  const dispatch=useDispatch()


  return (
    <div>
      <select onChange={(e)=>dispatch(changeColor(e.target.value))} style={{width:"300px",height:"80px",fontSize:"30px"}}>
        {["Choose color","red","green","blue","gray","yellow"].map((color,index)=>{
          return(
              <option value={color} key={index}>{color}</option>
          )
        })}
        {console.log(data,"]-=-=-=-=-")}
      </select>
    </div>
  );
}
