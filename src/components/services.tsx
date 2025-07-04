 import React, { useState } from 'react'
import ServiceCard from './service-card'
 
 const Services = () => {

    const [services, setServices] = useState({
        title: 'hola',
        description: 'hola mundo',
    })

    const [showModal, setShowModal] = useState(false)
    const [counter , setCounter] = useState(0)

    const increment = () => {
        setCounter(counter + 1)
    }


   return (
     <section className="grid grid-cols-1 md:grid-cols-3 gap-16 items-center py-12 lg:pt-24 lg:pb-28 w-full relative">
        <ServiceCard handleClick={() => setShowModal(true)} service={{name: 'P&C', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'}} />
        <ServiceCard handleClick={() => setShowModal(true)} service={{name: 'P&C', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'}} />
        <ServiceCard handleClick={() => setShowModal(true)} service={{name: 'P&C', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'}} />
          {
            showModal &&
            <div className='fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white'>
              <button onClick={() => setShowModal(false)} className="bg-primary py-2 px-4 rounded-full p-4 transition-all duration-500 hover:bg-slate-800 hover:text-white">
                x
              </button>
              <h1 className='text-center text-2xl font-bold'>{services.title}</h1>
              <p className='text-center text-lg'>{services.description}</p>
            </div>
          }
    </section>
   )
 }
 
 export default Services