import React, { useState, useEffect } from "react";

// Card component for displaying technology cards
function TechnologyCard({ image, title, description }) {
  return (
    <div className="px-8">
      <div className="px-6 text-center rounded-2xl">
        <img src={image} alt="" className="text-center w-12 h-12 mx-auto" />
        <h3 className="text-lg leading-normal mb-2 font-semibold text-black">{title}</h3>
        <p className="text-gray-500">{description}</p>
      </div>
    </div>
  );
}

export default function Technologies() {
  // State to track the currently selected technology type
  const [selectedTechnology, setSelectedTechnology] = useState(null);

  // Card data for each technology type
  const technologyCards = {
    Mobile: [
      { image: "./images/flutter.png", title: "Flutter", description: "Mobile User Interfaces framework" },
      { image: "./images/react.png", title: "React Native", description: "Cross-platform mobile development" },
      { image: "./images/ionic.png", title: "Ionic", description: "Hybrid mobile app development" }
    ],
    Frontend: [
      { image: "./images/react.png", title: "React", description: "JavaScript library for building user interfaces" },
      { image: "./images/angular.png", title: "Angular", description: "JavaScript framework for building web apps" },
      { image: "./images/vue.png", title: "Vue.js", description: "Progressive JavaScript framework" }
    ],
    Database: [
      { image: "./images/mysql.png", title: "MySQL", description: "Relational database management system" },
      { image: "./images/mongo.png", title: "MongoDB", description: "NoSQL document-oriented database" },
      { image: "./images/postgresql.png", title: "PostgreSQL", description: "Object-relational database system" }
    ],
    Backend: [
      { image: "./images/nodejs.png", title: "Node.js", description: "JavaScript runtime environment" },
      { image: "./images/typescript.png", title: "Typescript.js", description: "Web application framework for Node.js" },
      { image: "./images/django.png", title: "Django", description: "Web framework for Python" }
    ],
    "Artificial Intelligence": [
      { image: "./images/tensorflow.png", title: "TensorFlow", description: "Open-source machine learning framework" },
      { image: "./images/pytorch.png", title: "PyTorch", description: "Open-source machine learning library" },
      { image: "./images/scikit-learn.png", title: "scikit-learn", description: "Machine learning library in Python" }
    ]
  };

  // Function to handle click on technology link
  const handleTechnologyClick = (technology) => {
    setSelectedTechnology(technology);
  };

  // Set the initial selected technology to the first technology type
  useEffect(() => {
    const initialTechnology = Object.keys(technologyCards)[0];
    setSelectedTechnology(initialTechnology);
  }, []);

  return (
    <>
      <div className="min-h-screen flex flex-col justify-center items-center">
        <div className="text-black text-2xl text-center font-mono">
          <h2 className="">Technologies We Work With</h2>
        </div>
        <div className="flex justify-center mt-4">
          <nav className="flex flex-wrap justify-center items-center w-full max-w-4xl">
            {Object.keys(technologyCards).map((technology) => (
              <button
                key={technology}
                className="text-lg mr-4 mb-4 underline underline-offset-1 hover:text-green-500"
                onClick={() => handleTechnologyClick(technology)}
              >
                {technology}
              </button>
            ))}
          </nav>
        </div>
        {/* Conditional rendering of cards based on selected technology */}
        <div className="flex justify-center mt-8 flex-wrap">
          {selectedTechnology && technologyCards[selectedTechnology].map((card, index) => (
            <TechnologyCard
              key={index}
              image={card.image}
              title={card.title}
              description={card.description}
            />
          ))}
        </div>
      </div>
    </>
  );
}
