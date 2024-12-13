import '@/app/styles/globals.css';
import Link from 'next/link';

const NotFound = () => {
	return (
		<div className="flex flex-col items-center justify-center h-screen bg-gradient-to-br from-red-500 via-indigo-600 to-orange-700 text-white">
			<div className="text-center">
				<h1 className="text-6xl font-bold mb-4 animate-pulse">404</h1>
				<p className="text-2xl mb-6">Oops! The page you're looking for doesn't exist.</p>
				<Link className="px-6 py-3 bg-white text-indigo-600 font-semibold rounded-lg shadow-lg hover:bg-indigo-100 transition" href="/">
						Go Back Home
				</Link>
			</div>
			<div className="absolute bottom-5 text-sm opacity-80">
				<p>© {new Date().getFullYear()} Your Company. All rights reserved.</p>
			</div>
		</div>
	);
};

export default NotFound;
