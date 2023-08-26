import "./sort.css";
import { Document } from "../../components";
import { kuppilogo } from "../../assets";
import { sortSubjects, YearLinks, Semesters } from "../../constants";

import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";




const SortArea = () => {
  const [selectSubject, setSelectSubject] = useState([])
  const [subjectClick, setSubjectClick] = useState('')
  const navigate = useNavigate();

        //   const handleCheckboxChange = (event) => {
        //     setIsChecked(event.target.checked);

        //     useEffect(() => {
        //       if (isChecked) {
        //         navigate(`/videos?semester=First Semester&search=${subjectClick}`)
        //       }
        //     }, [isChecked])
        //   };

        function handleClick(event, subject) {
            const isChecked = event.target.checked
            if (isChecked) {
                setSelectSubject([...selectSubject, subject])
                navigate(`/videos?semester=First Semester&search=${[subject]}`)
            } else {

            }
        }

  return (
    <div class="w-full h-full mt-10 -mb-3">
      <dh-component>
        <div class="flex flex-no-wrap">
          <div class="w-64 pb-6 absolute sm:relative bg-[#0a0a23] shadow md:h-full flex-col justify-between hidden sm:flex">
            <div class="px-8">
              <div class="h-16 w-full flex items-center"></div>
              <ul class="mt-12">
                <li class=" w-full justify-between text-white cursor-pointer items-center mb-7">
                  <div class=" font-montserrat font-bold text-[1.1rem] ml-2 mb-5">
                    YEAR
                  </div>

                  <ul class="mt-1">
                    {YearLinks.map((year) => (
                      <li class="flex w-full text-white cursor-pointer items-center mb-4">
                        <input
                          type="checkbox"
                          className="ml-2 accent-[#e72a4f] scale-125"
                        />
                        <p class=" font-montserrat font-semibold text-[0.75rem] ml-3">
                          {year.yearName}
                        </p>
                      </li>
                    ))}
                  </ul>
                </li>
                <li class=" w-full justify-between text-white cursor-pointer items-center mb-7">
                  <div class=" font-montserrat font-bold text-[1.1rem] ml-2 mb-5">
                    SEMESTER
                  </div>

                  <ul class="mt-1">
                    {Semesters.map((sem) => (
                      <li class="flex w-full text-white cursor-pointer items-center mb-4">
                        <input
                          type="checkbox"
                          className="ml-2 accent-[#e72a4f] scale-125"
                        />
                        <p class=" font-montserrat font-semibold text-[0.75rem] ml-3 hover:translate-x-2 transition-transform duration-300 transform">
                          {sem.title}
                        </p>
                      </li>
                    ))}
                  </ul>
                </li>
                <li class=" w-full justify-between text-white cursor-pointer items-center mb-7">
                  <div class=" font-montserrat font-bold text-[1.1rem] ml-2 mb-5">
                    SUBJECT
                  </div>

                  <ul class="mt-1">
                    {sortSubjects.map((subject) => (
                      <li class="flex w-full text-white cursor-pointer items-center mb-4">
                        <input
                          type="checkbox"
                          value={subject.input}
                          className="ml-2 accent-[#e72a4f] scale-125"
                          onClick={(e) => handleClick(e, subject.input)}
                        />
                        <p class=" font-montserrat font-semibold text-[0.75rem] ml-3 hover:translate-x-2 transition-transform duration-300 transform">
                          {subject.title}
                        </p>
                      </li>
                    ))}
                  </ul>
                </li>
              </ul>
            </div>
          </div>

          <div
            class="w-64 z-40 absolute bg-[#0a0a23] shadow md:h-full flex-col justify-between sm:hidden transition duration-150 ease-in-out"
            id="mobile-nav"
          >
            <button
              aria-label="toggle sidebar"
              id="openSideBar"
              class="h-10 w-10 bg-[#0a0a23] absolute right-0 mt-16 -mr-10 flex items-center shadow rounded-tr rounded-br justify-center cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 rounded focus:ring-gray-800"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="icon icon-tabler icon-tabler-adjustments"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="#FFFFFF"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
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
            <button
              aria-label="Close sidebar"
              id="closeSideBar"
              class="hidden h-10 w-10 bg-[#0a0a23] absolute right-0 mt-16 -mr-10  items-center shadow rounded-tr rounded-br justify-center cursor-pointer text-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="icon icon-tabler icon-tabler-x"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" />
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>

            <div class="px-8">
              <div className="flex justify-center items-center ">
                <img
                  src={kuppilogo}
                  alt="site-logo"
                  className="w-20 h-20 logo object-contain mt-12 "
                />
              </div>
              <div class="relative mt-5" data-te-input-wrapper-init>
                <input
                  type="search"
                  class="peer block min-h-[auto] w-full rounded border-0  bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-white data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none  [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                  id="exampleSearch2"
                  placeholder="Type query"
                />
                <label
                  for="exampleSearch2"
                  class="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-white transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-white peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none  "
                >
                  Search
                </label>
              </div>
              <ul class="mt-12">
                <li class=" w-full justify-between text-white cursor-pointer items-center mb-7">
                  <div class=" font-montserrat font-bold text-[1rem] ml-2 mb-5">
                    YEAR
                  </div>

                  <ul class="mt-1">
                    {YearLinks.map((year) => (
                      <li class="flex w-full text-white cursor-pointer items-center mb-4">
                        <input
                          type="checkbox"
                          className="ml-2 accent-[#e72a4f] scale-125"
                        />
                        <p class=" font-montserrat font-semibold text-[0.7rem] ml-3">
                          {year.yearName}
                        </p>
                      </li>
                    ))}
                  </ul>
                </li>
                <li class=" w-full justify-between text-white cursor-pointer items-center mb-7">
                  <div class=" font-montserrat font-bold text-[1rem] ml-2 mb-5">
                    SEMESTER
                  </div>

                    <ul class="mt-1">
                      {Semesters.map((sem) => (
                        <li class="flex w-full text-white cursor-pointer items-center mb-4">
                          <input
                            type="checkbox"
                            className="ml-2 accent-[#e72a4f] scale-125"
                          />
                          <p class=" font-montserrat font-semibold text-[0.75rem] ml-3 hover:translate-x-2 transition-transform duration-300 transform">
                            {sem.title}
                          </p>
                        </li>
                      ))}
                    </ul>

                </li>
                <li class=" w-full justify-between text-white cursor-pointer items-center mb-7">
                  <div class=" font-montserrat font-bold text-[1rem] ml-2 mb-5">
                    SUBJECT
                  </div>
                  
                    <ul class="mt-1">
                      {sortSubjects.map((subject) => (
                        <li class="flex w-full text-white cursor-pointer items-center mb-4">
                          <label
                            htmlFor=""
                            class="font-montserrat font-semibold text-[0.75rem] ml-3 hover:translate-x-2 transition-transform duration-300 transform"
                          >
                            <input
                              type="checkbox"
                              className="ml-2 accent-[#e72a4f] scale-125"
                              // onChange={() => handleSubjectClick("Statistics")}
                            />
                            {subject.title}
                          </label>
                        </li>
                      ))}
                    </ul>

                </li>
              </ul>
            </div>
          </div>

          <div class="container mx-auto pb-6 md:w-4/5 w-11/12 px-6 h-screen scrollbar-hidden scroll-smooth overflow-y-auto">
            <div class="w-full h-full ">
              <Document />
            </div>
          </div>

        </div>
      </dh-component>
    </div>
  );
};

export default SortArea;
