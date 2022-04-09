import useFetch from "../../hooks/useFetch";

export const Home = () => {
  const { response, error, loading } = useFetch("https://randomuser.me/api/");
  console.log(response);
  if (loading) return <div>loading...</div>;
  if (error) return <div>error</div>;
  return <div>Home</div>;
};
