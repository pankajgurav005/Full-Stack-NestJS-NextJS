import Link from "next/link";
import Header from "@/app/components/Header";

export default function About() {
  return (
    <>
    <div className="flex items-center mt-20">
      <div className="bg-white p-8 rounded-lg shadow-md max-w-md">
        <h1 className="text-3xl font-bold mb-4">About Our Project</h1>
        <p className="text-gray-600">
          Our project focuses on authentication using Next.js with Redux for state management and Nest.js as the backend. We strive to provide a secure and efficient authentication system for your applications.
        </p>
        <p className="text-gray-600 mt-4">
          Feel free to explore and use our project to enhance the authentication experience in your applications.
        </p>
      </div>
    </div>
    </>
  )
}