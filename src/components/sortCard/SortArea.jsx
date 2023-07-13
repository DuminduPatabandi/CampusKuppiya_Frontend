const SortArea = () => {
    return (

<div class="w-full h-full mt-10">
            <dh-component>
                <div class="flex flex-no-wrap">

                    <div class="w-64 absolute sm:relative bg-[#0a0a23] shadow md:h-full flex-col justify-between hidden sm:flex">
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

                    <div class="w-64 z-40 absolute bg-gray-800 shadow md:h-full flex-col justify-between sm:hidden transition duration-150 ease-in-out" id="mobile-nav">
                        <button aria-label="toggle sidebar" id="openSideBar" class="h-10 w-10 bg-gray-800 absolute right-0 mt-16 -mr-10 flex items-center shadow rounded-tr rounded-br justify-center cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 rounded focus:ring-gray-800" onclick="sidebarHandler(true)">
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
                        <button aria-label="Close sidebar" id="closeSideBar" class="hidden h-10 w-10 bg-gray-800 absolute right-0 mt-16 -mr-10  items-center shadow rounded-tr rounded-br justify-center cursor-pointer text-white" onclick="sidebarHandler(false)">
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

                    <div class="container mx-auto py-10 h-64 md:w-4/5 w-11/12 px-6">

                        <div class="w-full h-full rounded border-dashed border-2 border-gray-300">
                            {/* <!-- Place your content here --> */}
                        </div>
                    </div>
                </div>
                {/* <script>
                    var sideBar = document.getElementById("mobile-nav");
                    var openSidebar = document.getElementById("openSideBar");
                    var closeSidebar = document.getElementById("closeSideBar");
                    sideBar.style.transform = "translateX(-260px)";

                    function sidebarHandler(flag) {
                        if (flag) {
                            sideBar.style.transform = "translateX(0px)";
                            openSidebar.classList.add("hidden");
                            closeSidebar.classList.remove("hidden");
                        } else {
                            sideBar.style.transform = "translateX(-260px)";
                            closeSidebar.classList.add("hidden");
                            openSidebar.classList.remove("hidden");
                        }
                    }
                </script> */}
                
            </dh-component>
        </div>
)
}

export default SortArea