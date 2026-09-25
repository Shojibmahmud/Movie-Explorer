import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import MainLayout from "./layouts/MainLayout";
import Landing from "./pages/landing";
import About from "./pages/about";
import Movies from "./pages/movies";

const router = createBrowserRouter([
	{
		path: "/",
		Component: MainLayout,
		children: [
			{
				index: true,
				element: <Landing></Landing>,
			},
		],
	},
	{
		path: "/about",
		Component: MainLayout,
		children: [
			{
				index: true,
				element: <About></About>,
			},
		],
	},
	{
		path: "/movies",
		Component: MainLayout,
		children: [
			{
				index: true,
				element: <Movies></Movies>,
			},
		],
	},
]);

function Router() {
	return (
		<>
			<RouterProvider router={router} />{" "}
		</>
	);
}

export default Router;
