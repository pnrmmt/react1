
import axios from "axios";

async function getData(number){
    const {data: users} = await axios(`https://jsonplaceholder.typicode.com/users/${number}`);
    const {data: posts} = await axios(`https://jsonplaceholder.typicode.com/posts/${number}`);
    try {
        console.log(users, posts)
       } catch (error) {
       console.log(error)
       }
}
export default getData;