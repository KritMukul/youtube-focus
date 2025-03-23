import React from "react";

const HeroSection = () => {
  return (
    <>
      <div className="w-full">
        <div className="absolute bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_60%,transparent_100%)] w-full h-[400px] -z-10"></div>
        <div className="bg-black w-full pt-20 flex flex-col sm:px-10 bg-opacity-60 justify-start">
          <div className="lg:text-7xl text-4xl font-semibold lg:mb-10 mb-1 flex flex-col lg:justify-start">
            <span className="font-bold text-red-600 mx-4">YouTube</span>
            <p className="lg:mx-4 sm:mx-0 mx-4">Without Distraction</p>
          </div>
        </div>

        <div className="bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_60%,transparent_100%)] absolute w-full h-full -z-10 ">
          
        </div>
        <div className="w-full h-full bg-black bg-opacity-60">
          {/* <img alt="Gradient" class="w-full h-full absolute z-[-1] object-fit object-center opacity-[25%]" src="https://t2fkwfyzv1d0gw7a.public.blob.vercel-storage.com/backgrounds/gradient.webp"></img> */}
          <div className=" w-full flex flex-col justify-center items-center">
            <div className="lg:w-1/2 p-[2px] mb-20 mt-20 w-11/12">
              <div className="flex  rounded-md bg-neutral-800 p-2">
                <input
                  type="text"
                  className="bg-neutral-700 w-full h-full p-2 rounded-md focus:border-red-500 focus:border-2 outline-none outline-2 "
                  placeholder="Enter URL"
                />
                <div className="flex justify-center items-center">
                  <button className="bg-red-600  border-none outline-none">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="#FFFFFF"
                      height="40px"
                      width="40px"
                      version="1.1"
                      id="Layer_1"
                      viewBox="0 0 502 502"
                      className="p-2"
                    >
                      <g>
                        <g>
                          <g>
                            <path d="M467.35,190.176l-70.468-70.468c-1.876-1.875-4.419-2.929-7.071-2.929h-23.089V49c0-5.523-4.478-10-10-10h-115v-2.41     c0-20.176-16.414-36.59-36.59-36.59h-11.819c-20.176,0-36.591,16.415-36.591,36.59V39h-115c-5.522,0-10,4.477-10,10v386     c0,5.523,4.478,10,10,10h146.386v47c0,5.523,4.478,10,10,10h262.171c5.522,0,10-4.477,10-10V197.247     C470.279,194.595,469.225,192.051,467.35,190.176z M399.811,150.921l36.326,36.326h-36.326V150.921z M144.721,59h47     c5.522,0,10-4.477,10-10s-4.478-10-10-10h-15v-2.41c0-9.148,7.442-16.59,16.591-16.59h11.819c9.147,0,16.59,7.442,16.59,16.59V49     c0,5.523,4.478,10,10,10h22v20h-109V59z M198.107,116.779c-5.522,0-10,4.477-10,10V425H51.721V59h73v30c0,5.523,4.478,10,10,10     h129c5.522,0,10-4.477,10-10V59h73v57.779H198.107z M450.278,482H208.107V136.779H379.81v60.468c0,5.523,4.478,10,10,10h60.468     V482z" />
                            <path d="M243.949,253.468h125.402c5.522,0,10-4.477,10-10c0-5.523-4.478-10-10-10H243.949c-5.522,0-10,4.477-10,10     C233.949,248.991,238.427,253.468,243.949,253.468z" />
                            <path d="M414.437,283.478H243.949c-5.522,0-10,4.477-10,10s4.478,10,10,10h170.487c5.522,0,10-4.477,10-10     S419.959,283.478,414.437,283.478z" />
                            <path d="M414.437,333.487H243.949c-5.522,0-10,4.477-10,10s4.478,10,10,10h170.487c5.522,0,10-4.477,10-10     S419.959,333.487,414.437,333.487z" />
                            <path d="M414.437,383.497H243.949c-5.522,0-10,4.477-10,10s4.478,10,10,10h170.487c5.522,0,10-4.477,10-10     S419.959,383.497,414.437,383.497z" />
                            <path d="M397.767,253.468h16.67c5.522,0,10-4.477,10-10c0-5.523-4.478-10-10-10h-16.67c-5.522,0-10,4.477-10,10     C387.767,248.991,392.245,253.468,397.767,253.468z" />
                          </g>
                        </g>
                      </g>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className=" justify-center ">
            <div className="flex flex-col gap-10 lg:gap-0 lg:flex-row lg:justify-evenly lg:mx-20 mx-10 justify-center items-center lg:items-start">
              <div className="bg-neutral-800 aspect-video  w-full lg:w-8/12 mb-4 lg:mb-0 p-4 rounded-2xl max-w-[1200px]">
                <div className=" w-full h-full bg-neutral-900 flex justify-center items-center">
                  <div className="rounded-full w-12 h-12 bg-black opacity-20 flex">
                    <button className="w-full h-full flex">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                        fill="#FFFFFF"
                        height="48px"
                        width="48px"
                        version="1.1"
                        id="Capa_1"
                        viewBox="0 0 60 60"
                        xml:space="preserve"
                      >
                        <g>
                          <path d="M45.563,29.174l-22-15c-0.307-0.208-0.703-0.231-1.031-0.058C22.205,14.289,22,14.629,22,15v30   c0,0.371,0.205,0.711,0.533,0.884C22.679,45.962,22.84,46,23,46c0.197,0,0.394-0.059,0.563-0.174l22-15   C45.836,30.64,46,30.331,46,30S45.836,29.36,45.563,29.174z M24,43.107V16.893L43.225,30L24,43.107z" />
                          <path d="M30,0C13.458,0,0,13.458,0,30s13.458,30,30,30s30-13.458,30-30S46.542,0,30,0z M30,58C14.561,58,2,45.439,2,30   S14.561,2,30,2s28,12.561,28,28S45.439,58,30,58z" />
                        </g>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
              <div className="lg:w-1/3 h-full flex justify-end w-2/3">
                <div className="flex items-start w-full lg:w-3/4">
                  <div className="bg-neutral-800 h-min w-full p-4 rounded-xl">
                    <div className="pb-4">Video 1/10</div>
                    <div className="flex w-full aspect-video bg-neutral-900 mb-4">
                      <div className="bg-black aspect-video w-full"></div>
                      <p className="absolute p-2">Vid1</p>
                    </div>
                    <div className="flex w-full aspect-video bg-neutral-900 mb-4">
                      <div className="bg-black aspect-video w-full"></div>
                      <p className="absolute p-2">Vid2</p>
                    </div>
                    <div className="flex w-full aspect-video bg-neutral-900 mb-4">
                      <div className="bg-black aspect-video w-full"></div>
                      <p className="absolute p-2">Vid3</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full h-7 bg-green-200 mt-4">HELLOO!!</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
