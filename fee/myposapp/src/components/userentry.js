import React,{useState} from 'react'
import './userentry.css';

class User {
    constructor(_id,_name){
        this.id = _id;
        this.name = _name;
    }
}

export default function Userentry() {
    const [flag,setFlag] =useState(true);
    const myUsers = [
        new User(1,"Rajinikanth"),
        new User(2,"SuperStar"),
        new User(3,"Manicbasha")
    ];
    
    const handleToggle = ()=>{
        let flg = flag;
        setFlag(!flg);
        
    }
  
    return (
        <div>
            <button onClick={handleToggle}>Toggle</button>
            {
                flag && <h4>Hi from React</h4>
            }
            <div>
                {
                    flag && myUsers.map(usr=>{
                        return <p className="bluepara" key={usr.id}>{usr.id}=={usr.name}</p>
                    })
                }
            </div>
        </div>
        
    )
}
