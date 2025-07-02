 import React, { useState } from 'react'
import ServiceCard from './service-card'
 
 const Services = () => {

    const [services, setServices] = useState({
        title: '',
        
    })

   return (
     <section className="grid grid-cols-1 md:grid-cols-3 gap-16 items-center py-12 lg:pt-24 lg:pb-28 w-full">
        <ServiceCard handleClick={() => console.log('hola')} service={{name: 'P&C', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'}} />
        <ServiceCard handleClick={() => console.log('hola')} service={{name: 'P&C', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'}} />
        <ServiceCard handleClick={() => console.log('hola')} service={{name: 'P&C', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'}} />
    </section>
   )
 }
 
 export default Services