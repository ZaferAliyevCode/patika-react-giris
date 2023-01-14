import axios from "axios";
const getData = async (id) => {
  const { data:userId } = await axios(`https://jsonplaceholder.typicode.com/users/${id}`);
  const{data:post}=await axios(`https://jsonplaceholder.typicode.com/posts?userId=${id}`);
  console.log("User ID",userId);
  console.log("User Post",post);

};

export default getData;
