// import React from 'react'
// import car from '../assets/car.jpg'
// import scaff2 from '../assets/scaff2.jpg'
// import pro from '../assets/ro.jpg'
// const About = () => {

//   return (
//     <div>
//        <section class="text-gray-600 body-font">
//   <div class=" mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
//     <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
//       <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Rapidlion gives the best service on vehicle maintenance</h1>
//       <p class="mb-8 leading-relaxed">Chillwave portland ugh, knausgaard fam polaroid iPhone. Man braid swag typewriter affogato, hella selvage wolf narwhal dreamcatcher.</p>
      
//       <p class="text-sm mt-2 text-gray-500 mb-8 w-full">Neutra shabby chic ramps, viral fixie.</p>
//       <div class="flex lg:flex-row md:flex-col">
//       </div>
//     </div>
//     <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
//       <img class="object-cover object-center rounded" alt="hero" src={car}/>
//     </div>
//   </div>
// </section>
// <section class="text-gray-600 body-font">
//   <div class="container px-5 py-24 mx-auto">
//     <div class="flex flex-col">
      
//       <div class="flex flex-wrap sm:flex-row flex-col py-6 mb-12">
//         <h1 class="sm:w-2/5 text-gray-900 font-medium sm:4xl title-font text-3xl mb-2 sm:mb-0">What we do</h1>
//         <p class="sm:w-3/5 leading-relaxed text-lg sm:pl-10 pl-0">Offering varieties of services from a wide range of products, hiring scaffolds and ehicle maintenance.</p>
//       </div>
//     </div>
//     <div class="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
//       <div class="p-4 md:w-1/3 sm:mb-0 mb-6">
//         <div class="rounded-lg h-64 overflow-hidden">
//           <img alt="content" class="object-cover object-center h-full w-full" src={car}/>
//         </div>
//         <h2 class="text-xl font-medium title-font text-gray-900 mt-5">Vehicle maintenance</h2>
//         <p class="text-base leading-relaxed mt-2">Swag shoivdigoitch literally meditation subway tile tumblr cold-pressed. Gastropub street art beard dreamcatcher neutra, ethical XOXO lumbersexual.</p>
//         <a class="text-indigo-500 inline-flex items-center mt-3">Learn More
//           <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
//             <path d="M5 12h14M12 5l7 7-7 7"></path>
//           </svg>
//         </a>
//       </div>
//       <div class="p-4 md:w-1/3 sm:mb-0 mb-6">
//         <div class="rounded-lg h-64 overflow-hidden">
//           <img alt="content" class="object-cover object-center h-full w-full" src={pro}/>
//         </div>
//         <h2 class="text-xl font-medium title-font text-gray-900 mt-5">Dealer in Adhesives</h2>
//         <p class="text-base leading-relaxed mt-2">Swag shoivdigoitch literally meditation subway tile tumblr cold-pressed. Gastropub street art beard dreamcatcher neutra, ethical XOXO lumbersexual.</p>
//         <a class="text-indigo-500 inline-flex items-center mt-3">Learn More
//           <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
//             <path d="M5 12h14M12 5l7 7-7 7"></path>
//           </svg>
//         </a>
//       </div>
//       <div class="p-4 md:w-1/3 sm:mb-0 mb-6">
//         <div class="rounded-lg h-64 overflow-hidden">
//           <img alt="content" class="object-cover object-center h-full w-full" src={scaff2}/>
//         </div>
//         <h2 class="text-xl font-medium title-font text-gray-900 mt-5">Scaffold Hiring</h2>
//         <p class="text-base leading-relaxed mt-2">Swag shoivdigoitch literally meditation subway tile tumblr cold-pressed. Gastropub street art beard dreamcatcher neutra, ethical XOXO lumbersexual.</p>
//         <a class="text-indigo-500 inline-flex items-center mt-3">Learn More
//           <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
//             <path d="M5 12h14M12 5l7 7-7 7"></path>
//           </svg>
//         </a>
//       </div>
//     </div>
//   </div>
// </section>
//     </div>
//   )
// }

// export default About

import React from 'react'
import car from '../assets/car.jpg'
import { FaHandHolding, FaRegHandshake } from 'react-icons/fa';
import {AiOutlineCheck} from 'react-icons/ai'

const About = () => {
  return (
    <div>
      <section class="text-gray-600 body-font">
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-wrap w-full mb-20">
            <div class="lg:w-1/2 w-full mb-6 lg:mb-0">
              <h1 class="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
                Why Rapidlion Ghana is the best
              </h1>
              <div class="h-1 w-20 bg-yellow-300 rounded"></div>
            </div>
            <p class="lg:w-1/2 w-full leading-relaxed text-gray-500">
              Rapidlion Ghana is a company that deals in the hiring of
              scaffolds, vehicle maintenance and also a dealer in adhesives. We
              are located at the heart of Kumasi, Ghana. We are the best in what
              we do and we are always ready to serve you.
            </p>
          </div>
          <section class="text-gray-600 body-font">
            <div class="container px-5  mx-auto">
              <div class="flex flex-wrap -m-4">
                <div class="p-4 lg:w-1/3 ">
                  <div class="h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative border hover:border-yellow-400 duration-200">
                    <div className="text-center flex justify-center items-center py-2">
                      <FaHandHolding size={50} className="text-yellow-400" />
                    </div>
                    <h1 class="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">
                      Quality Services
                    </h1>
                    <p class="leading-relaxed mb-3">
                      We offer the best services in Ghana. We have the best
                      mechanics who are always ready to serve you.
                    </p>
                  </div>
                </div>
                <div class="p-4 lg:w-1/3">
                  <div class="h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative border hover:border-yellow-400 duration-300">
                    <div className="text-center flex justify-center items-center py-2">
                      <AiOutlineCheck size={50} className="text-yellow-400" />
                    </div>
                    <h1 class="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">
                      Trusted Services
                    </h1>
                    <p class="leading-relaxed mb-3">
                      Our services are trusted by many people in Ghana. Trust us
                      and we will never disappoint you.
                    </p>
                  </div>
                </div>
                <div class="p-4 lg:w-1/3">
                  <div class="h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative border hover:border-yellow-400 duration-300">
                    <div className="text-center flex justify-center items-center py-2">
                      <FaRegHandshake size={50} className="text-yellow-400" />
                    </div>
                    <h1 class="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">
                      Affordable 
                    </h1>
                    <p class="leading-relaxed mb-3">
                      We offer the best services at an affordable price. We are ready to serve you with your 
                      budget.
     </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
         
        </div>
      </section>
    </div>
  );
}

export default About