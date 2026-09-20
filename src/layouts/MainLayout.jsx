import { Outlet } from "react-router";

export default function MainLayout() {
	return (
		<>
			<div>The Navigation Bar</div>
			<div>
				<Outlet></Outlet>
			</div>
			<div>The Footer</div>
		</>
	);
}
