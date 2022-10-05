import {useParams, useSearchParams, useNavigate} from 'react-router-dom'

const Student = () => {
    const { name } = useParams();
    const [searchParams, setSearchParams] = useSearchParams();
    const navigate = useNavigate();
    const keyWord = searchParams.get("name")

    return (
      <div>
        <h5>학생의 이름은 <span style={{color: 'green'}}> {name} 입니다. </span></h5>
        { keyWord != null && <span style={{color: 'yellow'}}><h5>실제 이름은 {keyWord}</h5></span>}
        {/* { searchParams.get("name") && (<h5>실제 이름은 {searchParams.get("name")}</h5>) } */}
        <br />
        <button onClick={() => navigate(-1)}>Go 1 pages back</button>
      </div>
    )
  };

export default Student;