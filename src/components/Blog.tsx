import { useParams } from "react-router-dom";

function Blog() {
  const { userid } = useParams();
  return <div>Blog :{userid}</div>;
}

export default Blog;
