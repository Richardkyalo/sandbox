import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function ServicesCard() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      }
    ]
  };

  return (
    <div>
      

      <div className="section relative pt-20 pb-8 md:pt-16 md:pb-0 bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%" >
      <div className="text-center  min-h-32 w-2/3 md:rounded-full  mx-auto mb-12 lg:px-20">
            <h2 className="text-3xl leading-normal mb-4 font-semibold text-black font-mono">What We Do</h2>
            <p className="text-black text-lg mx-auto pb-4 font-sans">Here at SandBox Softwares, we specialize in crafting tailored software solutions that meet the unique needs of each client.</p>
          </div>
        <div className="container xl:max-w-6xl mx-auto px-4">
          <div className="flex flex-wrap flex-row -mx-4 text-center">
            <div className="flex-shrink px-4 max-w-full w-full sm:w-1/2 lg:w-1/3 lg:px-6 wow fadeOut" data-wow-duration="1s" style={{ visibility: 'visible', animationDuration: '1s', animationName: 'fadeOut' }}>
              <div className="py-8 px-12 mb-12 bg-white hover:bg-gray-100 shadow-2xl rounded-2xl transform transition duration-300 ease-in-out hover:bg-gray-100 hover:scale-105 shadow-2xl">
                <div className="inline-block text-gray-900 mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="2rem" height="2rem" fill="currentColor" className="bi bi-searc fill-green-500 text-green-500h" viewBox="0 0 16 16">
                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"></path>
                  </svg>
                </div>
                <h3 className="text-lg leading-normal mb-2 font-semibold text-black">SEO Services</h3>
                <p className="text-gray-500">This is a wider card with supporting text below as a natural content.</p>
              </div>
            </div>
            <div className="flex-shrink px-4 max-w-full w-full sm:w-1/2 lg:w-1/3 lg:px-6 wow fadeOut" data-wow-duration="1s" data-wow-delay=".1s" style={{ visibility: 'visible', animationDuration: '1s', animationDelay: '0.1s', animationName: 'fadeOut' }}>
              <div className="py-8 px-12 mb-12 bg-white hover:bg-gray-100 shadow-2xl rounded-2xl transform transition duration-300 ease-in-out hover:bg-gray-100 hover:scale-105 shadow-2xl">
                <div className="inline-block text-gray-900 mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="2rem" height="2rem" fill="currentColor" className="bi bi-chat- fill-green-500 text-green-500square-dots" viewBox="0 0 16 16">
                    <path d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1h-2.5a2 2 0 0 0-1.6.8L8 14.333 6.1 11.8a2 2 0 0 0-1.6-.8H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h1.5a1 1 0 0 1 .8.4l2.6 3.533a1 1 0 0 0 1.6 0L10.7 12.4a1 1 0 0 1 .8-.4H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"></path>
                    <path d="M4 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm0 3a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm3-3a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm0 3a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm3-3a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm0 3a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"></path>
                  </svg>
                </div>
                <h3 className="text-lg leading-normal mb-2 font-semibold text-black">Consultancy</h3>
                <p className="text-gray-500">This is a wider card with supporting text below as a natural content.</p>
              </div>
            </div>
            <div className="flex-shrink px-4 max-w-full w-full sm:w-1/2 lg:w-1/3 lg:px-6 wow fadeOut" data-wow-duration="1s" data-wow-delay=".2s" style={{ visibility: 'visible', animationDuration: '1s', animationDelay: '0.2s', animationName: 'fadeOut' }}>
              <div className="py-8 px-12 mb-12 bg-white hover:bg-gray-100 shadow-2xl rounded-2xl transform transition duration-300 ease-in-out hover:bg-gray-100 hover:scale-105 shadow-2xl">
                <div className="inline-block text-gray-900 mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="2rem" height="2rem" fill="currentColor" className="bi bi-alarm fill-green-500 text-green-500" viewBox="0 0 16 16">
                    <path d="M8 2a6 6 0 0 0-6 6v4a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1V8a4 4 0 1 1 0-8zm0 1a4 4 0 0 1 4 4v3a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1V8a6 6 0 0 0-6-6z"></path>
                    <path d="M7.473 14.182a.5.5 0 0 0 .473.5h.054a.5.5 0 0 0 .473-.5L9.07 9.07a5 5 0 1 0-2.637 5.112l1.04 2.344z"></path>
                  </svg>
                </div>
                <h3 className="text-lg leading-normal mb-2 font-semibold text-black">24/7 Supports</h3>
                <p className="text-gray-500">This is a wider card with supporting text below as a natural content.</p>
              </div>
            </div>
            <div className="flex-shrink px-4 max-w-full w-full sm:w-1/2 lg:w-1/3 lg:px-6 wow fadeInUp" data-wow-duration="1s" style={{ visibility: 'visible', animationDuration: '1s', animationName: 'fadeInUp', transition: 'transform 0.3s' }}>
              {/* service block */}
              <div className="py-8 px-12 mb-12 bg-white rounded-2xl transform transition duration-300 ease-in-out hover:bg-gray-100 hover:scale-105 shadow-2xl">
                <div className="inline-block text-gray-900 mb-4">
                  {/* icon */}
                  <svg xmlns="http://www.w3.org/2000/svg" width="2rem" height="2rem" fill="currentColor" className="bi bi-card-fill-green-500 text-green-500 checklist" viewBox="0 0 16 16">
                    <path d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h13zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13z"></path>
                    <path d="M7 5.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm-1.496-.854a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 1 1 .708-.708l.146.147 1.146-1.147a.5.5 0 0 1 .708 0zM7 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm-1.496-.854a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 0 1 .708-.708l.146.147 1.146-1.147a.5.5 0 0 1 .708 0z"></path>
                  </svg>
                </div>
                <h3 className="text-lg leading-normal mb-2 font-semibold text-black">Brand Identity</h3>
                <p className="text-gray-500">This is a wider card with supporting text below as a natural content.</p>
              </div>
            </div>


            <div className="flex-shrink px-4 max-w-full w-full sm:w-1/2 lg:w-1/3 lg:px-6 wow fadeOut" data-wow-duration="1s" data-wow-delay=".1s" style={{ visibility: 'visible', animationDuration: '1s', animationDelay: '0.1s', animationName: 'fadeOut' }}>
              {/* service block */}
              <div className="py-8 px-12 mb-12 bg-white hover:bg-gray-100 shadow-2xl rounded-2xl transform transition duration-300 ease-in-out hover:bg-gray-100 hover:scale-105 shadow-2xl">
                <div className="inline-block text-gray-900 mb-4">
                  {/* icon */}
                  <svg xmlns="http://www.w3.org/2000/svg" width="2rem" height="2rem" fill="currentColor" className="bi bi-chat- fill-green-500 text-green-500square-dots" viewBox="0 0 16 16">
                    <path d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1h-2.5a2 2 0 0 0-1.6.8L8 14.333 6.1 11.8a2 2 0 0 0-1.6-.8H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2.5a1 1 0 0 1 .8.4l1.9 2.533a1 1 0 0 0 1.6 0l1.9-2.533a1 1 0 0 1 .8-.4H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"></path>
                    <path d="M5 6a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"></path>
                  </svg>
                </div>
                <h3 className="text-lg leading-normal mb-2 font-semibold text-black">Social Content</h3>
                <p className="text-gray-500">This is a wider card with supporting text below as a natural content.</p>
              </div>
              {/* end service block */}
            </div>

            <div className="flex-shrink px-4 max-w-full w-full sm:w-1/2 lg:w-1/3 lg:px-6 wow fadeOut" data-wow-duration="1s" data-wow-delay=".3s" style={{ visibility: 'visible', animationDuration: '1s', animationDelay: '0.3s', animationName: 'fadeOut' }}>
              {/* service block */}
              <div className="py-8 px-12 mb-12 bg-white hover:bg-gray-100 shadow-2xl rounded-2xl transform transition duration-300 ease-in-out hover:bg-gray-100 hover:scale-105 shadow-2xl">
                <div className="inline-block text-gray-900 mb-4">
                  {/* icon */}
                  <svg xmlns="http://www.w3.org/2000/svg" width="2rem" height="2rem" fill="currentColor" className="bi bi-badge fill-green-500 text-green-500-ad" viewBox="0 0 16 16">
                    <path d="M3.7 11l.47-1.542h2.004L6.644 11h1.261L5.901 5.001H4.513L2.5 11h1.2zm1.503-4.852l.734 2.426H4.416l.734-2.426h.053zm4.759.128c-1.059 0-1.753.765-1.753 2.043v.695c0 1.279.685 2.043 1.74 2.043.677 0 1.222-.33 1.367-.804h.057V11h1.138V4.685h-1.16v2.36h-.053c-.18-.475-.68-.77-1.336-.77zm.387.923c.58 0 1.002.44 1.002 1.138v.602c0 .76-.396 1.2-.984 1.2-.598 0-.972-.449-.972-1.248v-.453c0-.795.37-1.24.954-1.24z"></path>
                    <path d="M14 3a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h12zM2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H2z"></path>
                  </svg>
                </div>
                <h3 className="text-lg leading-normal mb-2 font-semibold text-black">Creative ads</h3>
                <p className="text-gray-500">This is a wider card with supporting text below as a natural content.</p>
              </div>
              {/* end service block */}
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default ServicesCard;
