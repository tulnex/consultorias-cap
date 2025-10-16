const ServiceCard = ({ handleClick, service }: { handleClick: any, service: any }) => {

  return (
    <button onClick={handleClick} className="flex flex-col md:flex-row w-full rounded-xl overflow-hidden border-slate-200 border-[.5px] cursor-pointer transition-all duration-500 hover:scale-110">
        <div className="relative w-2/5">
            <img src={service.image} alt={service.name} className="w-full h-[250px] object-cover" />
            <span className="absolute top-4 left-4 text-white text-lg bg-[#7d4a6b] rounded-lg px-4 py-2 font-semibold">
                {service.name}
            </span>
        </div>
        <p className="p-8 w-3/5 font-bold text-xl flex items-center text-gray-700">
            {service.description}
        </p>
    </button>
  )
}

export default ServiceCard