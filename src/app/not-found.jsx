import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-[70vh] bg-gradient-to-r from-blue-900 to-black text-gray-200">
      <h1 className="text-9xl font-bold text-white-300">404</h1>
      <p className="text-lg mt-4">
        Oops! The page you are looking for does not exist.
      </p>
      <Link
        href="/"
        className="mt-6 bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg transition duration-300"
      >
        Go Back Home
      </Link>
    </div>
  );
}
