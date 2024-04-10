import React from 'react'
import { Technologies } from './About.elements'
import SliderComponent from "./slider/SliderComponent";


const Resumen = () => {
  return (
    
        <div id='resumen' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
            <h1 className='py-4 text-4xl font-bold text-center text-[#001b5e]'> Resumen</h1>
            <p>
                Ingeniero de sistemas, con experiencia en desarrollo, soporte e implementación de aplicación, con habilidades de desempeñarme en nuevos retos profesionales y de aprendizaje, con disposición de trabajar en equipo para hacer un óptimo trabajo final, partiendo de unos principios fundamentales tales como responsabilidad, respeto, compromiso y tolerancia en cualquier eventualidad del día a día, Experiencia bajo metodología Scrum y Agility.            </p>
            <h2 className='py-4 text-4xl font-bold text-center text-[#001b5e]'>Tecnologías usadas</h2>
            <Technologies>
            <h3>Tecnologías: </h3>
            <SliderComponent />
          </Technologies>

        </div>
      
  )
}

export default Resumen
