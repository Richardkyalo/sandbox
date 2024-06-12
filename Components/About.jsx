// pages/about.tsx
import Image from 'next/image';

const About = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h1 className="text-2xl font-semibold">About Us</h1>
        <p className="text-xl mt-4">Learn more about our journey, mission, and the team behind the magic.</p>
      </div>

      <section className="my-16">
        <h2 className="text-3xl font-semibold text-center mb-8">Our Mission</h2>
        <p className="text-center text-lg max-w-3xl mx-auto">
          At S-NDBOX, our mission is to empower businesses and individuals with cutting-edge software solutions that drive innovation and efficiency. We strive to create products that are not only functional but also intuitive and enjoyable to use.
        </p>
      </section>

      <section className="my-16">
        <h2 className="text-3xl font-semibold text-center mb-8">Our Story</h2>
        <div className="flex flex-col md:flex-row items-center">
          <Image src="/images/software.png" alt="Our Story" width={500} height={300} className="rounded-lg mb-4 md:mb-0 md:mr-8" />
          <p className="text-lg max-w-2xl">
            S-NDBOX was founded in 2023 with the vision of transforming the software industry. Our journey began with a small team of passionate developers and has grown into a thriving company known for its innovation and customer-centric approach. From our humble beginnings, we have expanded our product line and continuously strive to improve and adapt to the ever-changing tech landscape.
          </p>
        </div>
      </section>

      <section className="my-16">
        <h2 className="text-3xl font-semibold text-center mb-8">Our Team</h2>
        <div className="flex flex-wrap justify-center">
          {[
            { name: 'John Doe', role: 'CEO', image: '/images/team1.jpeg' },
            { name: 'John Smith', role: 'CTO', image: '/images/team2.jpeg' },
            { name: 'Alice Johnson', role: 'Lead Developer', image: '/images/team4.jpeg' },
            { name: 'Bob Brown', role: 'Product Manager', image: '/images/team3.jpeg' },
          ].map((member) => (
            <div key={member.name} className="max-w-xs rounded overflow-hidden shadow-lg m-4 text-center">
              <Image src={member.image} alt={member.name} width={300} height={300} className="w-full" />
              <div className="px-6 py-4">
                <div className="font-semibold text-xl mb-2">{member.name}</div>
                <p className="text-gray-700 text-base">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="my-16 text-center">
        <h2 className="text-3xl font-semibold mb-8">Contact Us</h2>
        <p className="text-lg max-w-3xl mx-auto mb-8">
          Have questions or want to learn more about our products? Reach out to us!
        </p>
        <a href="mailto:contact@yourcompany.com" className="inline-block bg-green-500 text-white font-semibold py-2 px-4 rounded hover:bg-green-700">
          Email Us
        </a>
      </section>
    </div>
  );
};

export default About;
