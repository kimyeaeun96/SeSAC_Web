import {useParams, useLocation, useSearchParams, useNavigate} from 'react-router-dom';

function Product() {
    const { id } = useParams();
    const location = useLocation();
    const [searchParams, setSearchParams] = useSearchParams(); // state와 비슷함 
    // const id2 = useParams().id;

    const navigate = useNavigate(); 
        return (
            <div>
                <h1>{id}번 Product</h1>

                <ul>
                    <li>hash: {location.hash}</li>
                    <li>pathname: {location.pathname}</li>
                    <li>search: {location.search}</li>
                    <li>state: {location.state}</li>
                    <li>key: {location.key}</li>
                </ul>

                <ul>
                    <li>keywords: {searchParams}</li> 
                    <li>keyword: {searchParams.get("search")}</li>
                </ul>

                <ul>
                    <li><button onClick={() => navigate(-2)}>Go 2 pages back</button></li> 
                    <li><button onClick={() => navigate(-1)}>Go 1 pages back</button></li>
                    <li><button onClick={() => navigate(1)}>Go forward</button></li>
                    <li><button onClick={() => navigate(2)}>Go 2 pages forward</button></li>
                    <li><button onClick={() => navigate('/')}>Go Root</button></li>
                    <li><button onClick={() => navigate('/', {state: 'ohhhhhhh'})}>Go Root2</button></li>
                </ul>
            </div>
        );
}

export default Product;

// hash: #값
// pathname: 접속경로
// search: ?뒤 스트링값
// state: 상태값
// key: 페이지 고유값 
// searchParams: search=모든값
// searchParams.get("search"): search=값 ~ & 앞까지
// useNavigate: 함수형태로 사용 가능. 장점: 경로이동, state 값 전달 가능.