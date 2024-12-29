
import React, { useState } from "react";
import './../styles/App.css';

const App = () => {

  const [countarr, setCountArr]=useState([{name: "",age: ""}]);


  function addOne(e)
  {
    e.preventDefault();
    let newcountarr=[];
    countarr.map((ele)=> newcountarr.push(ele));
    newcountarr.push({name: "",age: ""});
    setCountArr(newcountarr);
  }

  function nameChange(e,eindex)
  {
     let newcountarr=countarr.map((ele,index)=> {if(index===eindex){return{...ele, name: e.target.value}} else{return ele}});
     setCountArr(newcountarr);
  }

  function ageChange(e,eindex)
  {
    let newcountarr=countarr.map((ele,index)=> {if(index===eindex){return{...ele, age: e.target.value}} else{return ele}});
    setCountArr(newcountarr);
  }
  
  function removeRow(e,eindex)
  {
    e.preventDefault();
    let newcountarr=countarr.filter((ele,index)=> index!==eindex);
    setCountArr(newcountarr);
  }

  function submitFunc(e)
  {
    e.preventDefault();

    console.log(countarr);
  }

  return (
    <div>
        <form style={{margin: 'auto'}} onSubmit={(e)=> submitFunc(e)}> 
            {
              countarr.map((ele,index)=> { return(
                <div id={`div-${index}`} style={{display: 'flex'}}>
                 <input type="text" name="name" placeholder="Name" value={ele.name} onChange={(e)=> nameChange(e,index)}/>
                 <input type="text" name="age" placeholder="Age" value={ele.age} onChange={(e)=> ageChange(e,index)}/>
                 <button onClick={(e)=> removeRow(e,index)}>Remove</button>
                </div>)
              })
              
            }
            <button onClick={(e)=> addOne(e)}>Add More..</button>
            <button type="submit">Submit</button>
        </form>
    </div>
  )
}

export default App;
