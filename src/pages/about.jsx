export default function About() {
	return (
		<>
			<section className="min-h-[70vh] flex items-center justify-center bg-gradient-to-r from-slate-900 via-blue-900 to-slate-800">
				<div className="text-center text-white px-4">
					<h1 className="text-4xl font-bold mb-6">About Us</h1>

					<p className=" text-gray-300 mb-4">
						Movie Explorer is a modern web application designed for movie
						enthusiasts. Our platform helps users discover popular movies,
						explore detailed information, and stay updated with the latest
						releases from the world of cinema.
					</p>

					<p className=" text-gray-300 mb-4">
						Whether you're searching for your next favorite film, browsing movie
						ratings, or learning more about a specific title, Movie Explorer
						provides an intuitive and enjoyable experience. Our goal is to make
						movie discovery simple, engaging, and accessible for everyone.
					</p>

					<p className=" text-gray-300 mb-4">
						Built with React and Tailwind CSS, Movie Explorer combines modern
						web technologies with a clean and responsive design to deliver a
						seamless experience across all devices.
					</p>
				</div>
			</section>
		</>
	);
}
