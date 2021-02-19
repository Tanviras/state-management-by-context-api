import {  createContext, useState } from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Shipment from './Components/Shipment/Shipment';

//context-api-creation
export const MyContext = createContext();
//context-api-creation-end

function App() {
  var [count,setCount]=useState(0);//"one step higher"- jekhane siblings guloke call kora hoyeche,sekhane declare korte hobe,karon eki jinish siblings der moddhe dite hole parent er moddhe declare kora uchit,jake bole "one step higher". Tarpor sibling ra props diye niye nibe parent theke

  const handleIncrementButton=()=>{//way-1 er khetre use korechi
        count=count+1; 
        setCount(count);
  }

 
  return (
    //use-of-context
      <MyContext.Provider value={[count,setCount]}> 
        {/* value can be anything,a string value, any number, array, object etc. */}

      <Header></Header>
      {/* jodi props diye kortam,tobe props hishebe ei line gulo ditam */}
      {/* count={count} setCount={setCount} */}
      <Home ></Home>
      <Shipment ></Shipment>

      </MyContext.Provider>
  );
};

export default App;
