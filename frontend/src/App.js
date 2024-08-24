import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "./component/Navbar";
import Hero from "./component/Hero";
import FeatureSEction from "./component/FeatureSEction";
import ToAction from "./component/ToAction";
import Testomoni from "./component/Testomoni";
import Footer from "./component/Footer";
import Login from "./component/Login";
import Register from "./component/Register";
import ChatUi from "./component/ChatUi";

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			staleTime: 1000 * 60,
		},
	},
});
function App() {
	return (
		<QueryClientProvider client={queryClient}>
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
					<Route path="dashboard" element={<ChatUi />}></Route>
					<Route path="register" element={<Register />}></Route>
				</Routes>
			</BrowserRouter>
			<ToastContainer />
		</QueryClientProvider>
	);
}

export default App;
