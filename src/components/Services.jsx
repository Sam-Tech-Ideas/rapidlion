import React from 'react'
import Layout from './Layout'

const Services = () => {
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
              <span className="relative">Our Services</span>
            </span>{" "}
          </h2>
          <p className="text-base text-gray-700 md:text-lg">
            We offer the best services in Ghana. We have the best mechanics who
            are always ready to serve you.
          </p>
        </div>
        <div className="grid max-w-sm gap-5 mb-8 lg:grid-cols-3 sm:mx-auto lg:max-w-full">
          <div className="px-10 py-20 text-center border rounded lg:px-5 lg:py-10 xl:py-20">
            <a
              href="/"
              className="inline-block max-w-xs mx-auto mb-3 text-2xl font-extrabold leading-7 transition-colors duration-200 hover:text-deep-purple-accent-400"
              aria-label="Read article"
              title="Nori grape silver beet broccoli kombu beet"
            >
              Car Maintenance
            </a>
            <p className="max-w-xs mx-auto mb-2 text-gray-700">
              We offer maintenance services for all types of cars. We have the
              best mechanics who are always ready to serve you.
            </p>
          </div>
          <div className="px-10 py-20 text-center border rounded lg:px-5 lg:py-10 xl:py-20">
            <a
              href="/"
              className="inline-block max-w-xs mx-auto mb-3 text-2xl font-extrabold leading-7 transition-colors duration-200 hover:text-deep-purple-accent-400"
              aria-label="Read article"
              title="Well, the way they make shows is, they make one"
            >
              Scaffold Rental
            </a>
            <p className="max-w-xs mx-auto mb-2 text-gray-700">
              We offer the best scaffolds for rent. We have the best scaffolds
              in Ghana.
            </p>
          </div>
          <div className="px-10 py-20 text-center border rounded lg:px-5 lg:py-10 xl:py-20">
            <a
              href="/"
              className="inline-block max-w-xs mx-auto mb-3 text-2xl font-extrabold leading-7 transition-colors duration-200 hover:text-deep-purple-accent-400"
              aria-label="Read article"
              title="Adhesive and Sealants Supply"
            >
              Adhesive and Sealants Supply
            </a>
            <p className="max-w-xs mx-auto mb-2 text-gray-700">
              We supply the best adhesives and sealants in Ghana. We have the
              best adhesives and sealants in Ghana.
                </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Services