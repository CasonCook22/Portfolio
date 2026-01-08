import Link from "next/link";
import { FaGithub, FaLinkedin, FaFileArrowDown } from "react-icons/fa6";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4 bg-white">
      <div className="text-center space-y-6">
        
        {/* Header Section */}
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tight text-black sm:text-4xl">
            Cason Cook
          </h1>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col space-y-2 text-base font-medium">
          <Link 
            href="mailto:cook6083@mylaurier.ca" 
            className="text-black no-underline hover:text-gray-500 transition-colors"
          >
            cook6083@mylaurier.ca
          </Link>
          <a 
            href="tel:+15198682665" 
            className="text-black no-underline hover:text-gray-500 transition-colors"
          >
            519-868-2665
          </a>
        </div>

        {/* Divider Line - FIXED WIDTH */}
        {/* border-t creates a top border, w-full makes it wider */}
        <div className="w-full border-t-1 border-gray-400 mx-auto"></div>

        {/* Links Section */}
        <div className="flex flex-col space-y-3 text-sm font-medium">
          <Link 
            href="https://github.com/CasonCook22" 
            target="_blank"
            className="flex items-center justify-center gap-2 text-black no-underline hover:text-gray-500 transition-colors"
          >
            <FaGithub size={15} color="black" />
            GitHub
          </Link>
          <Link 
            href="https://linkedin.com/in/Cason-Cook" 
            target="_blank"
            className="flex items-center justify-center gap-2 text-black no-underline hover:text-gray-500 transition-colors"
          >
            <FaLinkedin size={15} color="black" />
            LinkedIn
          </Link>
          <Link 
            href="/resume.pdf" 
            target="_blank"
            className="flex items-center justify-center gap-2 text-black no-underline hover:text-gray-500 transition-colors"
          >
            <FaFileArrowDown size={15} color="black" />
            Resume
          </Link>
        </div>

      </div>
    </main>
  );
}