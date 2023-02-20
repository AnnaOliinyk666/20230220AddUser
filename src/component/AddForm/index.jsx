import React from 'react'
import s from './style.module.css'


export default function AddForm({submit}) {
    
   
  return (
    <div>
        <form className={s.form} onSubmit={submit}>
            <select name="gender" >
                <option value="">gender</option>
                <option value="FEMAIL">Femail</option>
                <option value="MAIL">Male</option>
                <option value="EITHER">Either</option>  
            </select>
            <input type="text" name='firstName' placeholder='First Name'/>
            <input type="text" name='lastName' placeholder='Last Name'/>
            <input type="number"  name='age' placeholder='Age'/>
            <button>Add</button>
        </form>
    </div>
  )
}
