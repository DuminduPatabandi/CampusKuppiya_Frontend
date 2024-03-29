import { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import { sortSubjects } from '../constants';


const Semester2 = ({ year }) => {

  const [input, setInput] = useState("")
  const navigate = useNavigate()


  const pathname = window.location.pathname;
  const pathArray = pathname.split("/");
  const inputYear = pathArray[2]; 

  const handleSubjectClick = (inputValue) => {
    setInput(inputValue);
    navigate(`/docs?year=${inputYear}&semester=Second Semester&search=${inputValue}`);
  };


  return (
    <section id='work'>
      <div className="bg-white">
        <div className="mx-auto max-w-2xl py-8 px-4 sm:py-16 sm:px-6 lg:max-w-7xl lg:px-8 ">
          <h3 className='font-montserrat font-bold text-[1.2rem] text-[#002ead]  pb-[5rem]'>{year} : Semester 2</h3>
      <div className="grid grid-cols-1 text-center gap-y-10  gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
      {sortSubjects.map((product) => (
              <span to ="/docs" 
              key={product.id}
              onClick={() => handleSubjectClick(product.input)}
              className="group text-[#0a0a23] bg-[#f9f9f9] drop-shadow-lg hover:bg-slate-100 duration-700 py-20 px-4  mx-4  rounded-lg">
                <div className={`aspect-w-1 font-montserrat text-[2rem] font-bold aspect-h-1 w-full overflow-hidden  xl:aspect-w-7 xl:aspect-h-8`}>
                  <p  className="h-full w-full object-cover object-center ">
                  {product.input}
                  </p>
                </div>
              </span>
            ))}

      </div>
    </div>
    </div>
    </section>
  )
}

export default Semester2