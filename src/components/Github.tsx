// import { useState, useEffect } from "react";
import { useLoaderData, useParams } from "react-router-dom";

function Github() {
  const data = useLoaderData();

  //using react router loader is more efficient as it will fetch data when clicked on the link
  // const { username } = useParams();
  // const [data, setData] = useState<any>([]);
  // useEffect(() => {
  //   fetch(`https://api.github.com/users/${username}`)
  //     .then((res) => res.json())
  //     .then((res) => setData(res));
  // }, []);

  return (
    <div>
      <h1>Github</h1>
      <p>Usename:{data ? data.login : "no data available"}</p>
      <img src={data?.avatar_url} alt="" />
      <p>{data?.bio}</p>
    </div>
  );
}

export default Github;

export async function loadApiData(username: string) {
  const response = await fetch(`https://api.github.com/users/${username}`);
  return response.json();
}
