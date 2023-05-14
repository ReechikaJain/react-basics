import React from 'react'

export default function Header({name , age , isworking , family}) {
  return (
    <div>
      <h1>About me</h1>
      <p>name = {name} ,age = {age}, isWorking = {(isworking ? "Yes" : "No")}, family = {JSON.stringify(family)} </p>
    </div>
  )
}