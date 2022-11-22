import axios from "axios";
import React,{useState,useEffect} from "react";
import './newuser.css';

export default function Newuserreg() {
    const [form,setForm] = useState({
        lname:"",
        fname:"",
        dob:""
    })
    const [err,setErr] = useState([]);
    const [counter,setCounter]=useState(0);
    const handleUserCreation = (e) => {
        e.preventDefault();
        let error = validate(form);
        
        setErr(error);
        if (error.length==0) {
            setCounter(prev=>prev+1);
            if (counter===10){
                throw new Error("Invalid Data");
            }
            console.log(form);
            axios.post("http://localhost:5000/users",form).then(x=>{
                console.log(x);
            })
        }
    }

    const validate = (form)=> {
        let message = [];
        if (form.fname=="") {
            message.push("Invalid First Name");
        }
        if (form.lname=="") {
            message.push("Invalid Last Name");
        }

        if (form.dob=="") {
            message.push("Invalid DOB");
        }

        return message;
    }

    const handleOnChange = (e) => {
        const {value,name} = e.target;
        console.log(value + "," + name);

        setForm(prev=>{
            return {
                ...prev,
                [name]:value
            }
        })
    }

    useEffect(()=>{
        console.log("==========Test");
        
        return(()=>console.log("Clean-up"));
    },[])

    return (
    <>
    <div>{counter}</div>
    <div className="error">
        {
            err && err.map(x=>{
                return <h4>{x}</h4>
            })
        }
    </div>
      <form onSubmit={handleUserCreation}>
        <div>
          <label>Firstname</label>
          <input type="text" value={form.fname} onChange={handleOnChange} name="fname" placeholder="enter first name" />
        </div>
        <div>
          <label>LastName</label>
          <input type="text" value={form.lname} onChange={handleOnChange} name="lname" placeholder="enter last name" />
        </div>
        <div>
          <label>DOB</label>
          <input type="date" value={form.dob} onChange={handleOnChange} name="dob" placeholder="enter your dob" />
        </div>
        <button type="submit">Create User</button>
      </form>
    </>
  );
}
