import React, { useState } from 'react'
import User from '../User'
import AddForm from "../AddForm";
import s from './style.module.css'


export default function UserContainer() {
    
    const [mail, setMail] = useState([]);
    const [femail, setFemail] = useState([]);
    const [either, setEither] = useState([]);
    
    const submit = (e) => {
        e.preventDefault();
        const {firstName,lastName,age,gender} = e.target ;
        const id = Date.now();
        const name = firstName.value;
        const lastN = lastName.value;
        const ageN = age.value;
        const sex = gender.value;
        const newUser = {id,
            firstName: name, 
            lastName:lastN,
            age:ageN,
            gender:sex };
        console.log(newUser)
        if (newUser.gender === "FEMAIL") {
            setFemail([...femail, newUser])
        } else if (newUser.gender === "MAIL") {
            setMail([...mail, newUser])
        } else {
            setEither([...either,newUser])
        }
        firstName.value = '';
        lastName.value = '';
        age.value = '';
        gender.value= '';
       }
  return (
    <div className={s.wrapper}>
        <AddForm submit={submit}/>
        <h4>MAIL</h4>
        <div className={s.container}>
            
        {
            mail.map((user)=> <User 
            key={user.id} 
            firstName = {user.firstName} 
            lastName = {user.lastName} 
            age={user.age } 
            gender = {user.gender}/>)
        }
        </div>
        <h4>FEMAIL</h4>
        <div className={s.container}>
            
        {
            femail.map((user)=> <User key={user.id} firstName = {user.firstName} lastName = {user.lastName} age={user.age } gender = {user.gender}/>)
        }
        </div>
        <h4>EITHER</h4>
        <div className={s.container}>
            
        {
            either.map((user)=> <User key={user.id} firstName = {user.firstName} lastName = {user.lastName} age={user.age } gender = {user.gender}/>)
        }
        </div>
    </div>
  )
}
