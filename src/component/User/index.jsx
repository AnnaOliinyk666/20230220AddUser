import React from 'react'
import s from './style.module.css'

export default function User({firstName,lastName,age,gender}) {
  return (
    <div className={s.card}>
        <p>name: <b>{firstName}</b></p>
        <p>last name: <b>{lastName}</b></p>
        <p>age: {age}</p>
        <p>gender: {gender}</p>
    </div>
  )
}
