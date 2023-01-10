import React from 'react'
import Navbar from './components/navbar'
import data from "../data.js"
import Card from './components/card'

export default function App() {
  const cards = data.map(item => {
    return (
        <Card 
            key={item.id}
            {...item}
        />
      )
    })
  return (
      <div>
          <Navbar />
          <section className="cards-list">
            {cards}
          </section>
      </div>
  )
}