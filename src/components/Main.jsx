
import fondo1 from '../images/fondo1.jpeg'
import { TypeAnimation } from 'react-type-animation';
import {CV,} from "./slider/SliderComponent.elements";
import CV_Anonimo from "../assets/HV_Cristian_O_Rojas_Rios.pdf";
import { FaGithub  ,  FaLinkedinIn} from 'react-icons/fa'
import { FaSheetPlastic } from "react-icons/fa6";
const Main = () => {
  return (
    <div id='main'>
      <img className='w-full h-screen object-cover object-left scale-x-[-1]' src={fondo1} alt='/'/>
      <div className='w-full h-screen absolute top-0 left-0 bg-white/50'>
      <div className='max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:items-start items-center'>
            <h1 className='sm:text-5xl text-4xl font-bold text-gray-800'>Hola, soy Cristian 👋</h1>
            <h2 className='flex sm:text-3xl text-2xl pt-4 text-gray-800'>Soy 
            <TypeAnimation
                sequence={[
                    // Same substring at the start will only be typed out once, initially
                    'Desarrollador Frontend',
                    2000, // wait 1s before replacing "Mice" with "Hamsters"
                    'Desarrollador Frontend',
                    2000,
                    'Desarrollador FullStack',
                    2000,

                ]}
                wrapper="span"
                speed={50}
                style={{ fontSize: '1em',paddingLeft: '5px'}}
                repeat={Infinity}
            />
            </h2>
            <div className='flex justify-between pt-6 max-w-[200px] w-full'>
                <CV href={CV_Anonimo} target="_blank">
                  Curriculum <FaSheetPlastic className="sheetPlastic" />
                </CV>
            </div>
            <div className='flex justify-between pt-6 max-w-[50px] w-full'>
              <a href='https://github.com/cristianrojas350' target="_blank" rel="noopener noreferrer" className='cursor-pointer'>
                <FaGithub size={20} />
              </a>
              <a href='https://www.linkedin.com/in/cristianrojasrios10/' target="_blank" rel="noopener noreferrer" className='cursor-pointer'>
                <FaLinkedinIn size={20} />
              </a>
            </div>

      </div>
      </div>
    </div>
  )
}

export default Main


