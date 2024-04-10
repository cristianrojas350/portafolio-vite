import React from 'react'
import ProjectItem from './ProjectItem'
import Proyecto1 from '../images/Chat.jpg'
import Proyecto2 from '../images/RickAndMorty.png'

import Proyecto3 from '../images/SpotyDeveloper.jpg'
import Proyecto4 from '../images/Ecommerce.jpg'

const Projects = () => {
  return (
    <div id='projects' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
        <h1 className='text-4xl font-bold text-center text-[#001b5e]'>Proyectos</h1>
        <p className='text-center py-8'>
        He participado en diversos proyectos enfocados en el desarrollo web, abarcando desde HTML5 y SASS hasta JavaScript, React, Angular, Node.js y Express. Estos proyectos han sido fundamentales para nutrir mi conocimiento y experiencia profesional en el campo del desarrollo fullstack. A través de la práctica constante, he tenido la oportunidad de mejorar mis habilidades como desarrollador, permitiéndome avanzar y perfeccionarme continuamente en este ámbito.        </p>
        <div className='grid sm:grid-cols-2 gap-12'>
            <ProjectItem img={Proyecto1} title='Chat' Description='React, NodeJS, Socket.IO' link='https://github.com/cristianrojas350/ChatCORR' />
            <ProjectItem img={Proyecto2} title='Rick and morty' Description='React, Hooks, MaterialUI' link='https://github.com/cristianrojas350/rick-and-morty-corr' />
            <ProjectItem img={Proyecto3} title='Spotify developer' Description='JavasCript, ' link='' />
            <ProjectItem img={Proyecto4} title='Ecomerce' Description='React, ' link='' />
        </div>
    </div>
  )
}

export default Projects
