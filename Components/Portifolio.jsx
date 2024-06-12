import React from 'react';

function PortfolioItem({ image, title, title2, message, alignLeft }) {
  return (
    <div className={`flex flex-col md:flex-row ${alignLeft ? 'md:flex-row-reverse' : ''} justify-center py-8`}>
      <div className="md:w-1/2 md:order-3">
        <img src={image} alt="Portfolio Item" className="w-full h-auto rounded-2xl" />
      </div>
      <div className="md:w-1/2 md:text-left px-8 md:px-12 md:order-1">
        <img src={image} alt="logo" className='w-24 h-24 mb-4 rounded-2xl'/>
        <p className="text-1xl text-green-500 font-semibold mb-4">{title}</p>
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
    <div className="flex flex-col justify-center items-center">
      <div className="text-black text-2xl text-center font-mono">
        <h2 className="mt-16">We love transforming product ideas <br /> to digital realities.</h2>
      </div>
      <div className="max-w-7xl w-full mt-8">
        <PortfolioItem
          image="/images/Screenshot.png"
          title="Project 1"
          title2="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          message="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fermentum mauris nec turpis consectetur, eget consequat tortor placerat."
          alignLeft={true}
        />
        <PortfolioItem
          image="/images/portfolio2.jpeg"
          title="Project 2"
          title2="Donec interdum, dolor auctor vehicula aliquet, risus libero."
          message="Donec interdum, dolor auctor vehicula aliquet, risus libero ultrices quam, sit amet lacinia felis lorem sed nisl."
          alignLeft={false}
        />
        <PortfolioItem
          image="/images/portfolio3.webp"
          title="Project 3"
          title2="Proin non metus sed lacus sodales efficitur. Suspendisse quis."
          message="Proin non metus sed lacus sodales efficitur. Suspendisse quis ante a metus pharetra commodo."
          alignLeft={true}
        />
        {/* Add more PortfolioItems as needed */}
      </div>
    </div>
  );
}
