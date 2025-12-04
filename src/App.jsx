import { Home } from "./pages/Home"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { NotFound } from "./pages/NotFound"
import { Servicos } from "./pages/Servicos"
import { ScrollToHash } from "./components/ScrollToHash"

function App() {
	return (
		<>
			<BrowserRouter>
				<ScrollToHash />
				<Routes>
					<Route index element={<Home />}/>
					<Route path="*" element={<NotFound />}/>
					<Route path="/servicos" element={<Servicos />}/>
				</Routes>
			</BrowserRouter>
		</>
	)
}

export default App