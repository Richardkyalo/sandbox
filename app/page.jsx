"use client";
import { useState, useEffect } from 'react';
import NavBar from "../Components/Navbar";
import Blog from "../Components/Blog";
import Technologies from "../Components/Technologies"
import Footer from "../Components/Footer";
import Homehero from "../Components/Homehero";
import Portifolio from "../Components/Portifolio"
import ServiceCard from '../Components/ServicesCard'
import Testimonials from "../Components/Testimonials"
import { ThemeProvider } from "next-themes";
// import About from "../Components/About";
import "../app/globals.css"

export default function Home() {

  return (
    <ThemeProvider defaultTheme="light" attribute="class">
      <main >
        <NavBar />
        <section id="home" className='h-screen' >
          <Homehero />
        </section>
        <section id="services">
         <ServiceCard />
        </section>
        <section id="portfolio">
          <Portifolio />
        </section>
        <section id="testimonials">
          <Testimonials />
        </section>        
        <section id="technology" className='bg-gradient-to-t from-white via-gray-100 to-gray-200'>
          <Technologies />
        </section>
        <section id="blog">
          <Blog />
        </section>
        <section id="about" className="text-center rounded-t-full" >
       {/* <About /> */}
          {/* <ServicesCarousel services={services} /> */}
        </section>
        <section id="contact" className="h-screen text-center flex">
          <h1 className="m-auto">Welcome to our Software Company</h1>
          {/* <ServicesCarousel services={services} /> */}
        </section>
        <Footer />
      </main>
    </ThemeProvider>

  );
}
