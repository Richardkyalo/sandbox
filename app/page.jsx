"use client";
import { useState, useEffect } from 'react';
import NavBar from "../Components/Navbar";
import BlogList from '@/Components/BlogList';
import Technologies from "../Components/Technologies"
import Footer from "../Components/Footer";
import Homehero from "../Components/Homehero";
import Portifolio from "../Components/Portifolio"
import ServiceCard from '../Components/ServicesCard'
import Testimonials from "../Components/Testimonials"
import ConversationButton from "../Components/ConversationButton"
import About from "../Components/About"
import { ThemeProvider } from "next-themes";
import "../app/globals.css"

export default function Home() {
  return (
    <ThemeProvider defaultTheme="light" attribute="class">
      <main>
        <NavBar />
        <section id="home" className='h-screen animate-fadeIn'>
          <Homehero />
        </section>
        <section id="services" className='animate-fadeIn'>
          <ServiceCard />
        </section>
        <section id="portfolio" className='animate-fadeIn'>
          <Portifolio />
        </section>
        <ConversationButton />
        <section id="testimonials" className='animate-fadeIn'>
          <Testimonials />
        </section>        
        <section id="technology" className='bg-gradient-to-t from-white via-gray-100 to-gray-200 animate-fadeIn'>
          <Technologies />
        </section>
        <section id="blog" className='animate-fadeIn'>
        <BlogList />
        </section>
        <section id="about" className="text-center rounded-t-full animate-fadeIn">
           <About />
          {/* <ServicesCarousel services={services} /> */}
        </section>
        <Footer />
      </main>
    </ThemeProvider>
  );
}
