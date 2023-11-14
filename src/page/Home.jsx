import styled from "styled-components";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import MovieItem from "../components/MovieItem";
import { useEffect, useState } from "react";
import { config } from "../data/constant";

function Home() {
	const [movies, setMovies] = useState([])

	
	useEffect(() => {
		// api 호출
		// 내가 필요한 데이터를 가공해서 movies 변수에 담는다
		fetch(`https://api.themoviedb.org/3/movie/popular?language=ko-KR&api_key=${config.API_KEY}`)
		.then((res) => res.json())
			.then((data) => {
				setMovies(data.results)
		})
	}, [])	// 최초 만들어질 때, 딱 한번 실행됨(빈 배열)

	return (
		<Container>
			<MoviePoster>
				<Carousel
					showThumbs
					autoPlay
					infiniteLoop
					showStatus={false}
					transitionTime={3}
				>
					{movies.map((movie) => (
						<MovieItem key={movie.id} movie={movie} />						
					))}
				</Carousel>
			</MoviePoster>
		</Container>
	);
}

const Container = styled.div``
const MoviePoster = styled.div`
	display: flex;
	align-items: center;
`

export default Home