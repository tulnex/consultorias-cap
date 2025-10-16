 import React, { useState } from 'react'
import ServiceCard from './service-card'
 
 const Services = () => {

    const [selectedService, setSelectedService] = useState({
        title: '',
        description: '',
        image: '',
        details: '',
        benefits: []
    })

    const [showModal, setShowModal] = useState(false)

    const services = [
        {
            name: 'Optimización de Procesos',
            description: 'Revolucionamos sus procesos operativos mediante análisis avanzado y automatización inteligente.',
            image: '/documentos sin humanos.jpg',
            title: 'Optimización de Procesos',
            details: 'Transformamos sus operaciones mediante análisis exhaustivo de procesos actuales, identificación de cuellos de botella y diseño de flujos optimizados.',
            benefits: [
                'Reducción de costos operativos hasta 40%',
                'Aumento de eficiencia en 60%',
                'Mejora en calidad de productos',
                'Reducción de errores humanos',
                'ROI garantizado en 6 meses'
            ]
        },
        {
            name: 'Transformación Digital',
            description: 'Modernizamos su empresa con tecnologías de vanguardia y sistemas integrados.',
            image: '/zoom manos y teclado.jpg',
            title: 'Transformación Digital',
            details: 'Implementamos soluciones tecnológicas avanzadas que conectan todos sus departamentos y optimizan la toma de decisiones empresariales.',
            benefits: [
                'Acceso a datos en tiempo real',
                'Mejora en la toma de decisiones',
                'Reducción de costos operativos',
                'Mayor competitividad',
                'Escalabilidad empresarial'
            ]
        },
        {
            name: 'Gestión de Talento',
            description: 'Desarrollamos estrategias integrales para atraer, retener y desarrollar el mejor talento.',
            image: '/reunion completa.jpg',
            title: 'Gestión de Talento',
            details: 'Creamos culturas organizacionales que impulsan el rendimiento y la satisfacción laboral mediante programas personalizados de desarrollo.',
            benefits: [
                'Aumento en satisfacción laboral',
                'Reducción de rotación de personal',
                'Mejora en productividad del equipo',
                'Desarrollo de líderes internos',
                'Cultura de innovación y crecimiento'
            ]
        }
    ]

    const handleServiceClick = (service: any) => {
        setSelectedService(service)
        setShowModal(true)
    }

   return (
     <section className="grid grid-cols-1 md:grid-cols-3 gap-16 items-center py-12 lg:pt-24 lg:pb-28 w-full relative">
        {services.map((service, index) => (
            <ServiceCard 
                key={index}
                handleClick={() => handleServiceClick(service)} 
                service={service} 
            />
        ))}
          {
            showModal &&
            <div className='fixed top-[76px] left-0 w-screen h-[calc(100vh-76px)] bg-black/50 flex justify-center items-center fadein z-50'>
              <div className='relative w-[80vw] h-[calc(80vh-76px)] bg-white rounded-xl p-8 shadow-2xl overflow-y-auto'>
                <div className='flex justify-end mb-6'>
                  <button onClick={() => setShowModal(false)} className="bg-[#7d4a6b] text-white py-2 px-4 rounded-full transition-all duration-500 hover:bg-slate-800 hover:text-white">
                    ×
                  </button>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
                    <div>
                        <img src={selectedService.image} alt={selectedService.title} className="w-full h-64 object-cover rounded-xl mb-6" />
                        <h1 className='text-3xl font-bold text-gray-900 mb-4'>{selectedService.title}</h1>
                        <p className='text-lg text-gray-600 mb-6'>{selectedService.details}</p>
                        
                        {/* Sección adicional de características */}
                        <div className='bg-gray-50 p-6 rounded-xl mb-6'>
                            <h3 className='text-xl font-bold text-gray-800 mb-4'>¿Qué Incluye?</h3>
                            <ul className='space-y-2 text-gray-600'>
                                <li className='flex items-start'>
                                    <span className='text-blue-500 mr-2'>•</span>
                                    Análisis completo de procesos actuales
                                </li>
                                <li className='flex items-start'>
                                    <span className='text-blue-500 mr-2'>•</span>
                                    Identificación de oportunidades de mejora
                                </li>
                                <li className='flex items-start'>
                                    <span className='text-blue-500 mr-2'>•</span>
                                    Implementación de soluciones personalizadas
                                </li>
                                <li className='flex items-start'>
                                    <span className='text-blue-500 mr-2'>•</span>
                                    Capacitación y seguimiento continuo
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div>
                        <h2 className='text-2xl font-bold text-gray-800 mb-4'>Beneficios Principales</h2>
                        <ul className='space-y-3 mb-8'>
                            {selectedService.benefits.map((benefit, index) => (
                                <li key={index} className='flex items-start'>
                                    <span className='text-green-500 mr-2'>✓</span>
                                    <span className='text-gray-600'>{benefit}</span>
                                </li>
                            ))}
                        </ul>
                        
                        {/* Caso de éxito */}
                        <div className='bg-blue-50 p-6 rounded-xl mb-6'>
                            <h3 className='text-xl font-bold text-blue-800 mb-2'>Caso de Éxito</h3>
                            <p className='text-blue-700 text-sm'>
                                "Implementamos esta solución en una empresa manufacturera que logró reducir 
                                su tiempo de producción en 45% y aumentar la satisfacción del cliente en 30% en solo 4 meses."
                            </p>
                        </div>
                        
                        {/* Botones de acción */}
                        <div className='flex flex-col gap-4'>
                            <a href="/contacto" className='bg-[#7d4a6b] text-white px-6 py-3 rounded-xl font-semibold hover:bg-[#6a3f5a] transition-colors text-center'>
                                Solicitar Consulta
                            </a>
                            <button onClick={() => setShowModal(false)} className='px-6 py-3 border border-gray-300 rounded-xl font-semibold hover:bg-gray-50 transition-colors'>
                                Cerrar
                            </button>
                        </div>
                    </div>
                </div>
              </div>
            </div>
          }
    </section>
   )
 }
 
 export default Services