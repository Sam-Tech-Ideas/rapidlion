import React from "react";
import Layout from "../components/Layout";

const About = () => {
  return (
    <Layout>
     
      <div className="px-4 py-32 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 :py-20">
        <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
          <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto py-8">
            <span className="relative inline-block">
              <svg
                viewBox="0 0 52 24"
                fill="currentColor"
                className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
              >
                <defs>
                  <pattern
                    id="db164e35-2a0e-4c0f-ab05-f14edc6d4d30"
                    x="0"
                    y="0"
                    width=".135"
                    height=".30"
                  >
                    <circle cx="1" cy="1" r=".7" />
                  </pattern>
                </defs>
                <rect
                  fill="url(#db164e35-2a0e-4c0f-ab05-f14edc6d4d30)"
                  width="52"
                  height="24"
                />
              </svg>
              <span className="relative">About Us</span>
            </span>{" "}
          </h2>
          <p className="text-base text-gray-700 md:text-lg">
          Our  company is a company that deals in the hiring of
                scaffolds, vehicle maintenance and also a dealer in adhesives. We
                are located at the heart of Kumasi, Ghana. We are the best in what

          </p>
        </div>

        <section class="text-gray-600 body-font">
          <div class="container mx-auto flex px-5  md:flex-row flex-col items-center">
            <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
              <img
                class="object-cover object-center rounded"
                alt="hero"
                src="https://www.autotrainingcentre.com/wp-content/uploads/2016/12/Pros-in-Auto-Painting-Careers-Know-That-HVLP-Guns-Have-Less-Overspray.jpg"
              />
            </div>
            <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
              <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
                We have been in service for over 10 years
              </h1>
              <p class="mt-6 text-gray-600">
                RapidLion Ghana Limited is a company that provides vehicle
                maintenance, scaffold rental, adhesives and sealants supply. We
                have been in service for over 10 years and we are proud to say
                that we have a team of highly skilled professionals who are
                dedicated to providing you with the best service possible.
              </p>
              <p class="mt-4 text-gray-600">
                We have a proven track record of providing quality services to
                our clients.Our products are sourced from reputable
                manufacturers and suppliers.
              </p>{" "}
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default About;
