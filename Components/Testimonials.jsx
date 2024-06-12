import React, { useState, useEffect } from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      message: "I've been using this product for several months now, and I must say, it has truly changed my life. The results have been beyond my expectations, and I couldn't be happier with my decision to try it out.",
      author: "John Doe",
      photo: "./images/john.jpg"
    },
    {
      message: "I cannot express enough how much I recommend this service. From start to finish, everything was seamless. The customer support was top-notch, and the final result exceeded all my expectations. 10/10 would use again!",
      author: "Jane Smith",
      photo: "./images/jane.jpg"
    },
    {
      message: "Working with the team behind this product has been an absolute pleasure. Their professionalism, dedication, and attention to detail are unmatched. I am incredibly grateful for their hard work and would highly recommend them to anyone.",
      author: "Alice Johnson",
      photo: "./images/alice.jpg"
    }
  ];

  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentTestimonialIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonialIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(nextTestimonial, 5000); // Change testimonial every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-screen flex flex-col justify-center items-center mb-24 relative">
      <h1 className="text-4xl text-center font-mono font-bold mb-8">We develop enterprise-grade software solutions <br /> for businesses.</h1>
      <div className="text-center relative">
        <div className="max-w-lg mx-auto">
          <blockquote className="text-2xl font-bold font-mono testimonial transition-opacity duration-1000">
            &quot;{testimonials[currentTestimonialIndex].message}&quot;
          </blockquote>
        </div>
        <div className="flex items-center mt-2 justify-center">
          <div className="line h-8 bg-green mr-4"></div>
          <div className="flex items-center">
            <div className="profile-photo">
              <img
                src={testimonials[currentTestimonialIndex].photo}
                alt={`${testimonials[currentTestimonialIndex].author}'s Profile`}
                className="w-12 h-12 rounded-full"
              />
            </div>
            <div className='mx-2 h-6 border-l border-black border-solid border-2'></div>
            <div className="ml-1">
              <p className="text-black font-mono">{testimonials[currentTestimonialIndex].author}</p>
            </div>
          </div>
        </div>
      </div>
      
      <button
        className="absolute left-56 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md "
        onClick={prevTestimonial}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-gray-700"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>
      <button
        className="absolute md:right-56 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md "
        onClick={nextTestimonial}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-gray-700"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>
    </div>
  );
};

export default Testimonials;
