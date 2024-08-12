import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./component/Navbar";
import Hero from "./component/Hero";
import FeatureSEction from "./component/FeatureSEction";
import ToAction from "./component/ToAction";
import Testomoni from "./component/Testomoni";
import Footer from "./component/Footer";
import Login from "./component/Login";
function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route
					path="/"
					element={
						<div>
							<Navbar />
							<Hero />
							<FeatureSEction />
							<ToAction />
							<Testomoni />
							<Footer />
						</div>
					}></Route>
				<Route path="login" element={<Login />}></Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
