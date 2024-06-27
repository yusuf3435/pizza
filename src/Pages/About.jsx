import React from 'react';
import MultiplePizzas from '../Assets/multiplePizzas.jpeg';
import '../Styles/About.css'


function About() {
  return (
    <div className='about'>
        <div className='aboutTop' style={{backgroundImage: `url(${MultiplePizzas})`}}></div>
        <div className='aboutBottom'>
            <h1> ABOUT US</h1>
            <p>This is the best resteraunt built in the 1900s and was the home pizzeria for the Manchester city
                 academy and was where the first pizza was Made. We hosted multiple legendary people like Ronaldo, 
                 Aguero, Foden, Di Caprio and Iron Man. We have many different Pizzas including the famous Marghaerita
            </p>
        </div>
    </div>
  )
}

export default About