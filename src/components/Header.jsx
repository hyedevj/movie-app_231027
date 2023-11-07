import { Link } from "react-router-dom";
import styled from "styled-components";

function Header() {
  return (
		<Container>
			<Cell className="left">
				<Link to="/">
					<Img
						src="https://upload.wikimedia.org/wikipedia/commons/6/69/IMDB_Logo_2016.svg"
						alt="로고"
					/>
				</Link>
				<Link to="/movie">서브1</Link>
				<Link to="/movie">서브2</Link>
				<Link to="/movie">서브3</Link>
			</Cell>
		</Container>
	);
}

export default Header;

const Container = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin: 0 2.5rem; // rem은 루트기준. px보다 많이 쓰는 이유는 모바일 반응형 때문
	padding: 0.5rem 0;
`

const Cell = styled.div`
	display: flex;
	align-items: center;
	&.left {		// Cell 안의 컴포넌트 내부의 .클래스 안에만 적용
		gap: 3rem;
		font-size: 1.3rem;
		cursor: pointer;
	}
`

const Img = styled.img`
	width: 80px;
	cursor: pointer;
	display: block;
`