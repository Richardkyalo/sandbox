// components/BlogList.tsx
import Link from 'next/link';
import BlogCard from './BlogCard';

const BlogList = () => {
    const blogs = [
        {
            title: "Revolutionizing Business Management with Collectives App",
            description: "Discover how Collectives App is transforming the way teams manage tasks and collaborate efficiently.",
            image: "/images/blog2.jpg",
            author: "Jane Doe",
            date: "June 1, 2024",
            slug: "revolutionizing-task-management",
        },
        {
            title: "Top 10 Features of 'CHAMA' App",
            description: "Explore the top 10 features of our chama app that make it a must-have tool for Chamas.",
            image: "/images/chama.jpg",
            author: "John Smith",
            date: "June 2, 2024",
            slug: "top-10-features-abc-code-editor",
        },
        {
            title: "Enhancing Flexible Agriculture",
            description: "A deep dive into Agriflexpay and how it has changed many lifes of Farmers",
            image: "/images/blog4.jpg",
            author: "Alice Johnson",
            date: "June 3, 2024",
            slug: "enhancing-security-with-def-antivirus",
        },
    ];

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="text-center mb-8">
                    <h1 className="text-4xl font-bold">Our Latest Blogs</h1>
                    <p className="text-xl mt-2">Latest updates and in-depth reviews on cutting-edge software tools</p>
                </div>
            <div className="flex flex-wrap justify-center">
                
                {blogs.map((blog) => (
                    <BlogCard key={blog.slug} {...blog} />
                ))}
            </div>
            <div className="text-center mt-8">
        <Link href="/more-blogs"
          className="bg-transparent font-mono py-2 px-4 rounded hover:bg-green-500">
            See More
          
        </Link>
      </div>
        </div>
    );
};

export default BlogList;
