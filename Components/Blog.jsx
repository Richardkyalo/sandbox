
import React from 'react';

const BlogSection = () => {
  // Example blog data
  const blogs = [
    {
      id: 1,
      title: "The Importance of Test-Driven Development in Software Engineering",
      author: "John Doe",
      date: "April 25, 2024",
      excerpt: "Test-driven development (TDD) is a software development process that relies on the repetition of a very short development cycle..."
    },
    {
      id: 2,
      title: "Best Practices for Frontend Performance Optimization",
      author: "Jane Smith",
      date: "April 20, 2024",
      excerpt: "Optimizing frontend performance is crucial for providing a fast and smooth user experience. Here are some best practices to follow..."
    },
    {
      id: 3,
      title: "Best Practices for Frontend Performance Optimization",
      author: "Jane Smith",
      date: "April 20, 2024",
      excerpt: "Optimizing frontend performance is crucial for providing a fast and smooth user experience. Here are some best practices to follow..."
    },
    // Add more blog data as needed
  ];

  return (
    <section className="py-12">
      <div className="container mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-8">Latest Blog Posts</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map(blog => (
            <div key={blog.id} className="bg-white shadow-md p-6 rounded-md">
              <h3 className="text-xl font-semibold mb-2">{blog.title}</h3>
              <p className="text-gray-600 mb-2">By {blog.author} | {blog.date}</p>
              <p className="text-gray-800">{blog.excerpt}</p>
              <a href={`blog/${blog.id}`} className="text-blue-600 hover:underline mt-4 block">Read more</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
