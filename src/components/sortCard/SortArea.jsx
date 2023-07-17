import { Document } from "../../components"
import './sort.css'

import { useState, useEffect } from 'react'
import { Router, useLocation, useNavigate } from 'react-router-dom';

const SortArea = () => {

    const [input, setInput] = useState("")
    const navigate = useNavigate()


    const handleSubjectClick = (inputValue) => {

        var checkboxes = document.querySelectorAll("input[type=checkbox]");
        checkboxes.forEach(function(checkbox) {
            if (checkbox.checked) {
                setInput(inputValue);
                navigate(`/videos?semester=First Semester&search=${inputValue}`);
            } else {
                console.log("Checkbox is unchecked!");

            }
        })
    };




    // The mobile Version

    // End.


    return (

        <div class="w-full h-full mt-10 -mb-3">
            <dh-component>
                <div class="flex flex-no-wrap">

                    <div class="w-64 pb-6 absolute sm:relative bg-[#0a0a23] shadow md:h-full flex-col justify-between hidden sm:flex">
                        <div class="px-8">
                            <div class="h-16 w-full flex items-center">
                                  
                            </div>
                            <ul class="mt-12">

                                <li class=" w-full justify-between text-white cursor-pointer items-center mb-7">
                                    <div class=" font-montserrat font-bold text-[1.1rem] ml-2 mb-5">YEAR</div>   
                                    <>
                                        <ul class="mt-1">
                                            <li class="flex w-full text-white cursor-pointer items-center mb-4 ">
                                                <input 
                                                    onChange={() => handleSubjectClick(input)} 
                                                    type="checkbox" 
                                                    className="ml-2 accent-[#e72a4f] scale-125" 
                                                />
                                                <p class=" font-montserrat font-semibold text-[0.75rem] ml-3 hover:translate-x-2 transition-transform duration-300 transform  ">FIRST YEAR</p>
                                            </li>
                                            <li class="flex w-full text-white cursor-pointer items-center mb-4">
                                                <input 
                                                    type="checkbox" 
                                                    className="ml-2 accent-[#e72a4f] scale-125" 
                                                />
                                                <p class="font-montserrat font-semibold text-[0.75rem] ml-3 hover:translate-x-2 transition-transform duration-300 transform">SECOND YEAR</p>
                                            </li>
                                            <li class="flex w-full text-white cursor-pointer items-center mb-4">
                                                <input 
                                                    type="checkbox" 
                                                    className="ml-2 accent-[#e72a4f] scale-125" 
                                                />
                                                <p class=" font-montserrat font-semibold text-[0.75rem] ml-3 hover:translate-x-2 transition-transform duration-300 transform">THIRD YEAR</p>
                                            </li>
                                            <li class="flex w-full text-white cursor-pointer items-center mb-4">
                                                <input 
                                                    type="checkbox" 
                                                    className="ml-2 accent-[#e72a4f] scale-125" 
                                                />
                                                <p class=" font-montserrat font-semibold text-[0.75rem] ml-3 hover:translate-x-2 transition-transform duration-300 transform">FOURTH YEAR</p>
                                            </li>
                                        </ul>
                                    </>
                                </li>                              
                                <li class=" w-full justify-between text-white cursor-pointer items-center mb-7">
                                    <div class=" font-montserrat font-bold text-[1.1rem] ml-2 mb-5">SEMESTER</div>   
                                    <>
                                        <ul class="mt-1">
                                            <li class="flex w-full text-white cursor-pointer items-center mb-4">
                                                <input 
                                                    type="checkbox" 
                                                    className="ml-2 accent-[#e72a4f] scale-125" 
                                                />
                                                <p class=" font-montserrat font-semibold text-[0.75rem] ml-3 hover:translate-x-2 transition-transform duration-300 transform">FIRST SEMESTER</p>
                                            </li>
                                            <li class="flex w-full text-white cursor-pointer items-center mb-4">
                                                <input 
                                                    type="checkbox" 
                                                    className="ml-2 accent-[#e72a4f] scale-125" 
                                                />
                                                <p class="font-montserrat font-semibold text-[0.75rem] ml-3 hover:translate-x-2 transition-transform duration-300 transform">SECOND SEMESTER</p>
                                            </li>

                                        </ul>
                                    </>
                                </li>                              
                                <li class=" w-full justify-between text-white cursor-pointer items-center mb-7">
                                    <div class=" font-montserrat font-bold text-[1.1rem] ml-2 mb-5">SUBJECT</div>   
                                    <>
                                        <ul class="mt-1">
                                            <li class="flex w-full text-white cursor-pointer items-center mb-4">
                                                <input 
                                                    type="checkbox" 
                                                    className="ml-2 accent-[#e72a4f] scale-125"
                                                    onChange={() => handleSubjectClick("Computer Science")} 
                                                />
                                                <p class=" font-montserrat font-semibold text-[0.75rem] ml-3 hover:translate-x-2 transition-transform duration-300 transform">COMPUTER SCIENCE</p>
                                            </li>
                                            <li class="flex w-full text-white cursor-pointer items-center mb-4">
                                                <input 
                                                    type="checkbox" 
                                                    className="ml-2 accent-[#e72a4f] scale-125"
                                                    onChange={() => handleSubjectClick("Computer Studies")} 
                                                />
                                                <p class="font-montserrat font-semibold text-[0.75rem] ml-3 hover:translate-x-2 transition-transform duration-300 transform">COMPUTER STUDIES</p>
                                            </li>
                                            <li class="flex w-full text-white cursor-pointer items-center mb-4">
                                                <input 
                                                    type="checkbox" 
                                                    className="ml-2 accent-[#e72a4f] scale-125" 
                                                    onChange={() => handleSubjectClick("Statistics")}  
                                                />
                                                <p class=" font-montserrat font-semibold text-[0.75rem] ml-3 hover:translate-x-2 transition-transform duration-300 transform">STATISTICS</p>
                                            </li>
                                            <li class="flex w-full text-white cursor-pointer items-center mb-4">
                                                <input 
                                                    type="checkbox" 
                                                    className="ml-2 accent-[#e72a4f] scale-125"
                                                    onChange={() => handleSubjectClick("Pure Maths")}  
                                                />
                                                <p class="font-montserrat font-semibold text-[0.75rem] ml-3 hover:translate-x-2 transition-transform duration-300 transform">PURE MATHS</p>
                                            </li>
                                            <li class="flex w-full text-white cursor-pointer items-center mb-4">
                                                <input 
                                                    type="checkbox" 
                                                    className="ml-2 accent-[#e72a4f] scale-125" 
                                                />
                                                <p class=" font-montserrat font-semibold text-[0.75rem] ml-3 hover:translate-x-2 transition-transform duration-300 transform">APPLIED MATHS</p>
                                            </li>
                                            <li class="flex w-full text-white cursor-pointer items-center mb-4">
                                                <input 
                                                    type="checkbox" 
                                                    className="ml-2 accent-[#e72a4f] scale-125" 
                                                />
                                                <p class="font-montserrat font-semibold text-[0.75rem] ml-3 hover:translate-x-2 transition-transform duration-300 transform">PHYSICS</p>
                                            </li>
                                            <li class="flex w-full text-white cursor-pointer items-center mb-4">
                                                <input 
                                                    type="checkbox" 
                                                    className="ml-2 accent-[#e72a4f] scale-125"
                                                    onClick={() => handleSubjectClick("Physics")}  
                                                />
                                                <p class=" font-montserrat font-semibold text-[0.75rem] ml-3 hover:translate-x-2 transition-transform duration-300 transform">CHEMISTRY</p>
                                            </li>
                                            <li class="flex w-full text-white cursor-pointer items-center mb-4">
                                                <input 
                                                    type="checkbox" 
                                                    className="ml-2 accent-[#e72a4f] scale-125" 
                                                />
                                                <p class="font-montserrat font-semibold text-[0.75rem] ml-3 hover:translate-x-2 transition-transform duration-300 transform">STUDY MUSIC</p>
                                            </li>
                                            <li class="flex w-full text-white cursor-pointer items-center mb-4">
                                                <input 
                                                    type="checkbox" 
                                                    className="ml-2 accent-[#e72a4f] scale-125" 
                                                />
                                                <p class="font-montserrat font-semibold text-[0.75rem] ml-3 hover:translate-x-2 transition-transform duration-300 transform">OTHERS</p>
                                            </li>

                                        </ul>
                                    </>
                                </li>                                                           
                                
                            </ul>
                        </div>

                    </div>

                    <div class="w-64 z-40 absolute bg-[#0a0a23] shadow md:h-full flex-col justify-between sm:hidden transition duration-150 ease-in-out" id="mobile-nav">
                        <button aria-label="toggle sidebar" id="openSideBar" class="h-10 w-10 bg-[#0a0a23] absolute right-0 mt-16 -mr-10 flex items-center shadow rounded-tr rounded-br justify-center cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 rounded focus:ring-gray-800">
                            <svg  xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-adjustments" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="#FFFFFF" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" />
                                <circle cx="6" cy="10" r="2" />
                                <line x1="6" y1="4" x2="6" y2="8" />
                                <line x1="6" y1="12" x2="6" y2="20" />
                                <circle cx="12" cy="16" r="2" />
                                <line x1="12" y1="4" x2="12" y2="14" />
                                <line x1="12" y1="18" x2="12" y2="20" />
                                <circle cx="18" cy="7" r="2" />
                                <line x1="18" y1="4" x2="18" y2="5" />
                                <line x1="18" y1="9" x2="18" y2="20" />
                            </svg>
                        </button>
                        <button aria-label="Close sidebar" id="closeSideBar" class="hidden h-10 w-10 bg-[#0a0a23] absolute right-0 mt-16 -mr-10  items-center shadow rounded-tr rounded-br justify-center cursor-pointer text-white" >
                            <svg  xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-x" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" />
                                <line x1="18" y1="6" x2="6" y2="18" />
                                <line x1="6" y1="6" x2="18" y2="18" />
                            </svg>
                        </button>

                        <div class="px-8">
                            <div class="h-16 w-full flex items-center">

                            </div>
                            <ul class="mt-12">

                                <li class=" w-full justify-between text-white cursor-pointer items-center mb-7">
                                    <div class=" font-montserrat font-bold text-[1rem] ml-2 mb-5">YEAR</div>   
                                    <>
                                        <ul class="mt-1">
                                            <li class="flex w-full text-white cursor-pointer items-center mb-4">
                                                <input type="checkbox" className="ml-2" />
                                                <p class=" font-montserrat font-semibold text-[0.7rem] ml-3">FIRST YEAR</p>
                                            </li>
                                            <li class="flex w-full text-white cursor-pointer items-center mb-4">
                                                <input type="checkbox" className="ml-2" />
                                                <p class="font-montserrat font-semibold text-[0.7rem] ml-3">SECOND YEAR</p>
                                            </li>
                                            <li class="flex w-full text-white cursor-pointer items-center mb-4">
                                                <input type="checkbox" className="ml-2" />
                                                <p class=" font-montserrat font-semibold text-[0.7rem] ml-3">THIRD YEAR</p>
                                            </li>
                                            <li class="flex w-full text-white cursor-pointer items-center mb-4">
                                                <input type="checkbox" className="ml-2" />
                                                <p class=" font-montserrat font-semibold text-[0.7rem] ml-3">FOURTH YEAR</p>
                                            </li>
                                        </ul>
                                    </>
                                </li>                              
                                <li class=" w-full justify-between text-white cursor-pointer items-center mb-7">
                                    <div class=" font-montserrat font-bold text-[1rem] ml-2 mb-5">SEMESTER</div>   
                                    <>
                                        <ul class="mt-1">
                                            <li class="flex w-full text-white cursor-pointer items-center mb-4">
                                                <input type="checkbox" className="ml-2" />
                                                <p class=" font-montserrat font-semibold text-[0.7rem] ml-3">FIRST SEMESTER</p>
                                            </li>
                                            <li class="flex w-full text-white cursor-pointer items-center mb-4">
                                                <input type="checkbox" className="ml-2" />
                                                <p class="font-montserrat font-semibold text-[0.7rem] ml-3">SECOND SEMESTER</p>
                                            </li>

                                        </ul>
                                    </>
                                </li>                              
                                <li class=" w-full justify-between text-white cursor-pointer items-center mb-7">
                                    <div class=" font-montserrat font-bold text-[1rem] ml-2 mb-5">SUBJECT</div>   
                                    <>
                                        <ul class="mt-1">
                                            <li class="flex w-full text-white cursor-pointer items-center mb-4">
                                                <input type="checkbox" className="ml-2" />
                                                <p class=" font-montserrat font-semibold text-[0.7rem] ml-3">COMPUTER SCIENCE</p>
                                            </li>
                                            <li class="flex w-full text-white cursor-pointer items-center mb-4">
                                                <input type="checkbox" className="ml-2" />
                                                <p class="font-montserrat font-semibold text-[0.7rem] ml-3">COMPUTER STUDIES</p>
                                            </li>
                                            <li class="flex w-full text-white cursor-pointer items-center mb-4">
                                                <input type="checkbox" className="ml-2" />
                                                <p class=" font-montserrat font-semibold text-[0.7rem] ml-3">STATISTICS</p>
                                            </li>
                                            <li class="flex w-full text-white cursor-pointer items-center mb-4">
                                                <input type="checkbox" className="ml-2" />
                                                <p class="font-montserrat font-semibold text-[0.7rem] ml-3">PURE MATHEMATICS</p>
                                            </li>
                                            <li class="flex w-full text-white cursor-pointer items-center mb-4">
                                                <input type="checkbox" className="ml-2" />
                                                <p class=" font-montserrat font-semibold text-[0.7rem] ml-3">APPLIED MATHEMATICS</p>
                                            </li>
                                            <li class="flex w-full text-white cursor-pointer items-center mb-4">
                                                <input type="checkbox" className="ml-2" />
                                                <p class="font-montserrat font-semibold text-[0.7rem] ml-3">PHYSICS</p>
                                            </li>
                                            <li class="flex w-full text-white cursor-pointer items-center mb-4">
                                                <input type="checkbox" className="ml-2" />
                                                <p class=" font-montserrat font-semibold text-[0.7rem] ml-3">CHEMISTRY</p>
                                            </li>
                                            <li class="flex w-full text-white cursor-pointer items-center mb-4">
                                                <input type="checkbox" className="ml-2" />
                                                <p class="font-montserrat font-semibold text-[0.7rem] ml-3">STUDY MUSIC</p>
                                            </li>
                                            <li class="flex w-full text-white cursor-pointer items-center mb-4">
                                                <input type="checkbox" className="ml-2" />
                                                <p class="font-montserrat font-semibold text-[0.7rem] ml-3">OTHERS</p>
                                            </li>

                                        </ul>
                                    </>
                                </li>                                                           
                                
                            </ul>

                        </div>
                    </div>

                    <div class="container mx-auto pb-6 md:w-4/5 w-11/12 px-6 h-screen scrollbar-hidden scroll-smooth overflow-y-auto">

                        <div class="w-full h-full ">
                            < Document />
                        </div>
                    </div>
                </div>
                

                
                
            </dh-component>
        </div>
    )
}

export default SortArea