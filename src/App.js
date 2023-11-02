// import React , { useEffect , useState} from 'react';
import useForm from "./useForm.js"
// import Test from './Test'
import './App.css';
import { useEffect } from "react";

const App = () =>{

// const [showTest,setShowTest] =useState(true)
// const [name,setName]=useState("")
// const [email,setEmail]=useState("")
const [value,handleChange] = useForm({
  name:"",
  email:""
})

useEffect(() => {
  console.log("running");

  return () => {
    console.log("unmount");
  }
},[value.name,value.email])

// console.log(name);
// console.log(email);
  return (

        <div>
          <form action="" autoComplete="off">
          <input type="text" name='name' value={value.name} onChange={ handleChange} />
          <input type="text" name="email" value={value.email} onChange={ handleChange} />
          </form>

                {/* {showTest?<Test/>:null}
                <button onClick={ () => setShowTest(!showTest)}>click</button> */}
              {/* <Test/> */}

              <useForm />
        </div>
  );
}

export default App;
