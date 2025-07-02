const ServiceCard = ({ handleClick, service }: { handleClick: any, service: any }) => {

  return (
    <button onClick={handleClick} className="flex flex-col md:flex-row w-full rounded-xl overflow-hidden border-slate-200 border-[.5px]  cursor-pointer transition-all duration-500 hover:scale-110">
        <div className="relative w-2/5">
            <img src="" alt="" className="w-full h-[250px] bg-black" />
            <span className="absolute top-1 left-1 text-white text-xl bg-slate-400 rounded-lg px-4">
                {service.name}
            </span>
        </div>
        <p className="p-8 w-3/5 font-bold text-2xl flex items-center">
            {service.description}
        </p>
    </button>
  )
}

export default ServiceCard