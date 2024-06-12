// components/Footer.tsx
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className=" py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h2 className="text-2xl text-green-500 font-bold">S-NDBOX</h2>
            <p className="text-sm mt-2">Innovative software solutions for modern businesses.</p>
          </div>
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8">
            <Link href="/" className="hover:underline">Terms And Conditions
            </Link>
            <Link href="/about" className="hover:underline">Privacy Policy
            </Link>
            <Link href="/services" className="hover:underline">Carreers
            </Link>
            <Link href="/blog" className="hover:underline">Upcoming Releases
            </Link>
            <Link href="/contact" className="hover:underline">Contact
            </Link>
          </div>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-green-500">
              <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M23.954 4.569c-.885.39-1.83.654-2.825.775a4.93 4.93 0 002.163-2.724 9.864 9.864 0 01-3.127 1.195 4.92 4.92 0 00-8.38 4.482A13.944 13.944 0 011.671 3.149a4.917 4.917 0 001.523 6.573 4.904 4.904 0 01-2.23-.616c-.053 2.045 1.438 3.965 3.548 4.39a4.935 4.935 0 01-2.224.084 4.924 4.924 0 004.604 3.417A9.867 9.867 0 010 21.54 13.94 13.94 0 007.548 24c9.142 0 14.307-7.721 13.995-14.646a9.935 9.935 0 002.457-2.549z"/></svg>
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-green-500">
              <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M22.675 0h-21.35C.597 0 0 .597 0 1.325v21.351C0 23.403.597 24 1.325 24H12.81v-9.294H9.692v-3.622h3.118v-2.671c0-3.1 1.893-4.787 4.658-4.787 1.325 0 2.463.099 2.796.143v3.24h-1.92c-1.505 0-1.796.716-1.796 1.764v2.311h3.59l-.467 3.622h-3.123V24h6.116c.729 0 1.325-.597 1.325-1.324V1.325C24 .597 23.403 0 22.675 0z"/></svg>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-green-500">
              <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.025-3.037-1.854-3.037-1.855 0-2.14 1.446-2.14 2.939v5.667H9.343V9h3.414v1.561h.048c.476-.9 1.637-1.854 3.369-1.854 3.602 0 4.268 2.369 4.268 5.455v6.29zM5.337 7.433c-1.144 0-2.07-.926-2.07-2.07s.926-2.07 2.07-2.07c1.145 0 2.07.926 2.07 2.07 0 1.144-.926 2.07-2.07 2.07zm1.775 13.019H3.563V9h3.549v11.452zM22.225 0H1.771C.792 0 0 .792 0 1.771v20.457C0 23.208.792 24 1.771 24h20.457C23.208 24 24 23.208 24 22.229V1.771C24 .792 23.208 0 22.225 0z"/></svg>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-green-500">
              <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.849.07 1.366.062 2.633.34 3.608 1.315.975.975 1.254 2.242 1.316 3.608.058 1.265.07 1.645.07 4.849s-.012 3.584-.07 4.849c-.062 1.366-.34 2.633-1.315 3.608-.975.975-2.242 1.254-3.608 1.316-1.265.058-1.645.07-4.849.07s-3.584-.012-4.849-.07c-1.366-.062-2.633-.34-3.608-1.315-.975-.975-1.254-2.242-1.316-3.608-.058-1.265-.07-1.645-.07-4.849s.012-3.584.07-4.849c.062-1.366.34-2.633 1.315-3.608.975-.975 2.242-1.254 3.608-1.316C8.416 2.175 8.796 2.163 12 2.163m0-2.163C8.741 0 8.332.015 7.052.072 5.772.127 4.614.31 3.584 1.34 2.553 2.37 2.37 3.528 2.315 4.808 2.258 6.088 2.243 6.497 2.243 9.756s.015 3.669.072 4.949c.055 1.28.238 2.438 1.269 3.468 1.031 1.031 2.189 1.214 3.468 1.269 1.28.057 1.689.072 4.949.072s3.669-.015 4.949-.072c1.28-.055 2.438-.238 3.468-1.269 1.031-1.031 1.214-2.189 1.269-3.468.057-1.28.072-1.689.072-4.949s-.015-3.669-.072-4.949c-.055-1.28-.238-2.438-1.269-3.468-1.031-1.031-2.189-1.214-3.468-1.269-1.28-.057-1.689-.072-4.949-.072zM12 5.838c-3.402 0-6.162 2.76-6.162 6.162s2.76 6.162 6.162 6.162 6.162-2.76 6.162-6.162S15.402 5.838 12 5.838zm0 10.162c-2.209 0-4-1.791-4-4s1.791-4 4-4 4 1.791 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441-.646-1.441-1.441s.646-1.441 1.441-1.441 1.441.646 1.441 1.441-.646 1.441-1.441 1.441z"/></svg>
            </a>
          </div>
        </div>
        <div className="mt-8 text-center text-sm text-gray-500">
          &copy; {new Date().getFullYear()} S-NDBOX. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
