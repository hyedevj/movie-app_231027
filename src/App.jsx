import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./page/Home";
import MovieList from "./page/MovieList";
import Header from "./components/Header";
import MovieDetail from "./page/MovieDetail";

function App() {

  return (
		<BrowserRouter>
			<Header />
			<Routes>
				<Route index element={<Home />} />
				<Route path="movies/:type" element={<MovieList />} />
				<Route path="movie/:id" element={<MovieDetail />} />
			</Routes>
		</BrowserRouter>
	);  // 뒤에 오는 라우팅 처리를 type이란 이름으로 받을 수 있음
}

export default App