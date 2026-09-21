export default function Navbar() {
	return (
		<div className="w-full h-16 bg-gray-900 flex justify-between items-center px-6">
			{/* --------Application logo or brand name----------- */}
			<div className="flex items-center gap-2">
				<img
					src="src/assets/movie-logo.png"
					alt="movie explorer icon"
					className="size-6"
				/>
				<h1 className="text-2xl text-white">Movie Explorer</h1>
			</div>
			{/* -----Navigation links------ */}
			<div className="text-sm text-white flex space-x-6">
				<a href="/" className="hover:text-red-500 transition-colors">
					Home
				</a>
				<a href="/about" className="hover:text-red-500 transition-colors">
					About Us
				</a>
				<a href="/movies" className="hover:text-red-500 transition-colors">
					Movies
				</a>
			</div>
		</div>
	);
}
