import React from 'react';

function PortfolioItem({ image, image2, title, title2, message, alignLeft }) {
  return (
  <div className={`flex flex-col md:flex-row ${alignLeft ? 'md:flex-row-reverse' : ''} justify-center py-8`}>
      <div className="md:w-1/2 md:order-3">
        <img src={image} alt="Portfolio Item" className="w-full h-auto rounded-2xl" />
      </div>
      <div className=" justify-center md:w-1/2  px-8 md:px-12 md:order-1">
       <div className='flex flex-row items-center'>
       <img src={image2} alt="logo" className='w-6 h-6 mb-4 rounded m-2'/>
        <p className="text-1xl  font-semibold mb-4">{title}</p>
        </div>
        <h3 className="text-2xl text-black font-mono mb-4">{title2}</h3>
        <p className="text-lg text-black font-thick mb-6">{message}</p>
        <button className="bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 focus:outline-none focus:bg-green-600">
          Demo
        </button>
      </div>
    </div>
  );
}

export default function Portfolio() {
  return (
    <div className="flex flex-col items-center">
      <div className="text-black text-2xl text-center font-mono">
        <h2 className="mt-16">We love transforming product ideas <br /> to digital realities.</h2>
      </div>
      <div className="max-w-7xl w-8/12 mt-8">
        <PortfolioItem
          image="/images/businessplan.png"
          image2="/images/logo2.png"
          title="Collectives"
          message="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fermentum mauris nec turpis consectetur, eget consequat tortor placerat."
          alignLeft={true}
        />
        <PortfolioItem
          image="/images/mobilepayments.png"
          image2="/images/logo2.png"
          title="Project 2"
          message="Donec interdum, dolor auctor vehicula aliquet, risus libero ultrices quam, sit amet lacinia felis lorem sed nisl."
          alignLeft={false}
        />
        <PortfolioItem
          image="/images/money.png"
          image2="/images/logo2.png"
          title="Project 3"
          message="Proin non metus sed lacus sodales efficitur. Suspendisse quis ante a metus pharetra commodo."
          alignLeft={true}
        />
        {/* Add more PortfolioItems as needed */}
      </div>
    </div>
  );
}
