// components/BlogCard.tsx
import Image from 'next/image';
import Link from 'next/link';

interface BlogCardProps {
  title: string;
  description: string;
  image: string;
  author: string;
  date: string;
  slug: string;
}

const BlogCard: React.FC<BlogCardProps> = ({ title, description, image, author, date, slug }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg m-4">
      <Image className="w-full" src={image} alt={title} width={400} height={250} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">
          <Link href={`/blog/${slug}`}>
            {title}
          </Link>
        </div>
        <p className="text-gray-700 text-base">{description}</p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{author}</span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{date}</span>
      </div>
    </div>
  );
};

export default BlogCard;
