import React from 'react';
import Photos from './reducers/data/photos'
import './App.css';
import Navbar from './navbar/navbar';
import Select from './reducers/select/select';
import { useSelector } from 'react-redux';
import ColorPage from './reducers/colorPage/colorPage';
// import { contentState } from './reducers/contentReducer';
import { dataState } from './reducers/data/photosSlice';


function App() {
  const content= useSelector(dataState)
  return (
    <div className="App">
      <header className="App-header">
      <Navbar/>
      {console.log(content.content.content,'cccccccccoooooooooooo')}
        {content.content.content==="page"?<Photos/>:
        content.content.content==="colorpage"?<ColorPage/>:
        content.content.content==="changepage"?<Select/>:null}
      </header>
    </div>
  );
}

export default App;
