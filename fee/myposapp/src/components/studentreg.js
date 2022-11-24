import axios from 'axios';
import React,{useState} from 'react';
import './studentreg.css';

export default function StudentReg() {
    const [message,setMessage] = useState([]);
    const [form,setForm] = useState({
        fname:"",
        lname:"",
        dob:""
    })

    const handleOnChange = (e)=>{
        //console.log(e.target.name + "," +e.target.value);
        //let name = e.target.name;
        //let value = e.target.value;
        const {name,value}=e.target;

        setForm(prev=> {
            return {
                ...prev,
                [name]:value
            }
        })
        
    }

    const validate = (form)=>{
        let message = [];

        if (form.fname==="") {
            message.push("First Name is mandatory")
        }

        if (form.lname==="") {
            message.push("Lanst Name is mandatory")
        }

        if (form.dob==="") {
            message.push("Date of Birth is mandatory")
        }

        return message;
    }

    const handleNewStudentSubmission = (event)=>{
        event.preventDefault();
        console.log("submit button clicked");
        let error = validate(form);
        setMessage(error);
        if (error.length===0){
            console.log("Correct Data");
            //let res = await axios.post("http://localhost:5000/users",form); 
            //console.log(res);
            axios.post("http://localhost:8080/api/save",form).then(res=>{
                console.log(res);
            }).catch(err=>{
                console.log("Error has Occured");
                console.error(err);
            });
        }
    }

    const handlefetchStudents = ()=> {
        axios.get("http://localhost:8080/api/save").then(x=>{
           x.data.map(y=>{
            console.log(JSON.stringify(y));
           })
        }).catch(err=>{
            console.log("Error has Occured");
            console.error(err);
        });
    }
  return (
    <div>
        <div>
            {
                (message.length>0) && message.map((x,i)=>{
                    return <p className="error" key={i}>{x}</p>
                })
            }
        </div>
        <form onSubmit={handleNewStudentSubmission}>
        <div>
            <label>First Name</label>
            <input type="text" value={form.fname} onChange={handleOnChange}  name="fname" placeholder='enter your first name'/>
        </div>
        <div>
            <label>Last Name</label>
            <input type="text" value={form.lname} onChange={handleOnChange} name="lname" placeholder='enter your laste name'/>
        </div>
        <div>
            <label>Date of Birth</label>
            <input type="date" value={form.dob} onChange={handleOnChange} name="dob" placeholder='enter your dob'/>
        </div>
        <div>
            <button type='submit'>Create Student</button>
            <button type='button'  onClick={handlefetchStudents}>Fetch Student</button>
        </div>
        </form>
    </div>

   )
}
