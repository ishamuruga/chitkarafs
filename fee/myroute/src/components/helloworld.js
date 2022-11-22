import axios from 'axios';
import React,{useEffect,useState} from 'react'

export default function Helloworld(props) {

    const [counter,setCounter] = useState(0);
    const [value,setValue]= useState([]);
    const doSendData = ()=>{
        let data = Math.random().toString();
        props.raisedata(data);
    }

    useEffect(()=>{
        axios.get("http://localhost:5000/users").then(x=>{
            console.log(x.data);
            setValue(x.data);
            setCounter(pre=>{
                return (
                    pre+1
                )
            })
        })  
    },[])

    useEffect(()=>{
        console.log("Counter Changed");

    },[counter])

  return (
    <>
        <div>{counter}</div>
        <div>helloworld - {props.name}</div>
        <button className="btn btn-success" onClick={doSendData}>Send Data Back</button>
        <select>
            {
                value.map(x=>{
                    return <option key={x.id} value={x.fname} >{x.fname}-{x.lname}</option>
                })
            }
        </select>
    </>
  )
}
