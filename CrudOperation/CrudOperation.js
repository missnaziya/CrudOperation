import React, {useState} from 'react'

const CrudOperation = () => {

const [data,setData] = useState("");
const [input,setInput]= useState("");

const display =() => {
   setInput([...input,data]);
}

const edit = ()=>{
     setInput()
}


  return (
    <div>CrudOperation

     <h1>Enter your data</h1>

      <input type='text' value={data} onChange={(e) =>{setData(e.target.value)}} ></input>

<button onClick={display}>Save</button>
<button onClick={edit}> {!edit ? "Save" : "Update"}</button>
<button onClick={Delete}>Save</button>




<div>{input}</div>



    </div>
  )
}

export default CrudOperation