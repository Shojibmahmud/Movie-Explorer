import { Outlet } from "react-router";
import Navbar from "../components/Navbar";

export default function MainLayout() {
	return (
		<div>
			<div>
				<Navbar></Navbar>
			</div>
			<div>
				<Outlet></Outlet>
			</div>
			<div>The Footer</div>
		</div>
	);
}
