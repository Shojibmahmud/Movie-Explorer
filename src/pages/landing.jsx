export default function Landing() {
	return (
		<section className="min-h-[70vh] flex items-center justify-center bg-gradient-to-r from-slate-900 via-blue-900 to-slate-800">
			<div className="text-center text-white px-4">
				<h1 className="text-4xl md:text-6xl font-bold mb-6">
					Discover Your Next Favorite Movie
				</h1>
				 
				<p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-300 mb-8">
					Explore a world of blockbuster hits, timeless classics, and hidden
					gems. Browse movie details, ratings, genres, and more to find the
					perfect film for your next watch.
				</p>
				 
				<a
					href="/movies"
					className="inline-block bg-red-600 hover:bg-red-700 px-8 py-3 rounded-lg font-semibold transition">
					Explore Movies
				</a>
			</div>
		</section>
	);
}
