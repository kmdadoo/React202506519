import { Link } from "react-router-dom";

function NotFound() {
  return(
    <div>
      <h2>Nor Found</h2>
      <p>
        페이지를 찾을수 없습니다. TT <br/>
        <Link to="/list">Home</Link>
      </p>
    </div>
  );
}

export default NotFound;