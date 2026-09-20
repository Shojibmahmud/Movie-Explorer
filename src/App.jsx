import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import MainLayout from "./layouts/MainLayout";
import Landing from "./pages/landing";

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
]);

function Router() {
	return (
		<>
			<RouterProvider router={router} />{" "}
		</>
	);
}

export default Router;
