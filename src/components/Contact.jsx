import React from 'react'

const Contact = () => {
  return (
    <div id='contact' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
        <h1 className='py-4 text-4xl font-bold text-center text-[#001b5e]'> Contacto</h1>
        <form action="https://getform.io/f/qalozndb" method='POST' encType='multipart/form-data'>
            <div className='grid md:grid-cols-2 gap-4 w-full py-2'>
                <div className='flex flex-col'>
                <label className='uppercase text-sm py-2' >Nombre</label>
                    <input className='border-2 rounded-lg p-3 flex border-gray-300' type="text" name='name' placeholder='Nombre'  />
                </div>
                <div className='flex flex-col'>
                <label className='uppercase text-sm py-2'>Numero de celular</label>
                    <input className='border-2 rounded-lg p-3 flex border-gray-300' type="text"  name='phone' placeholder='Numero de contacto' />
                </div>
            </div>
            <div className='flex flex-col py-2'>
                <label className='uppercase text-sm py-2'>Email</label>
                <input className='border-2 rounded-lg p-3 flex border-gray-300' type='email' name='email' placeholder='Email'/>
            </div>
            <div className='flex flex-col py-2'>
                <label className='uppercase text-sm py-2'>Asunto</label>
                <input className='border-2 rounded-lg p-3 flex border-gray-300' type='text' name='subject' placeholder='Asunto'/>
            </div>
            <div className='flex flex-col py-2'>
                <label className='uppercase text-sm py-2'>Mensaje</label>
                <textarea className='border-2 rounded-lg p-3 border-gray-300' rows='10' name='message' placeholder='Mensaje'></textarea>
            </div>
            <button className=' bg-[#001b5e] text-gray-100 mt-4 w-full p-4 rounded-lg'>Enviar</button>
        </form>
    </div>
  )
}

export default Contact
