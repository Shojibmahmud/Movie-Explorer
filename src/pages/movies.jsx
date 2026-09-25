import { useState } from "react";

export default function Movies() {
	const [searchText, setSearchText] = useState("");

	const movies = [
		{ id: 1, title: "Inception", genre: "Sci-Fi" },
		{ id: 2, title: "Interstellar", genre: "Sci-Fi" },
		{ id: 3, title: "The Dark Knight", genre: "Action" },
		{ id: 4, title: "Avatar", genre: "Adventure" },
	];

	const filteredMovies = movies.filter((movie) =>
		movie.title.toLowerCase().includes(searchText.toLowerCase()),
	);

	return (
		<div
			className="px-4 md:px-16 lg:px-28 py-10 
        bg-gradient-to-r from-slate-900 via-blue-900 to-slate-800 
        min-h-screen">
			{/* Search Bar */}
			<div className="mb-8 text-gray-300">
				<input
					type="text"
					placeholder="Search movies by title..."
					value={searchText}
					onChange={(e) => setSearchText(e.target.value)}
					className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
				/>
			</div>

			{/* Movie Grid */}
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-gray-300">
				{filteredMovies.map((movie) => (
					<div
						key={movie.id}
						className="border rounded-lg p-4 shadow hover:shadow-lg">
						<h2 className="text-xl font-semibold">{movie.title}</h2>
						<p className="text-gray-600">{movie.genre}</p>
					</div>
				))}
			</div>
		</div>
	);
}
