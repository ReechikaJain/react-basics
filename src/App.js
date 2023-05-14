import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Component1 from './Component1'
import Compoonent2 from './Component2'

export default function App() {
  return (
    <div>
      <Header name = {"Reechika Jain"} age = {24} isworking = {false} family={["Anita", "Deepanshu", "Santosh", "Sanjay"]} />
      <h1>Reechika App</h1>
      <Component1/>
      <Compoonent2/>
      <Footer/>
      
    </div>
  )
}