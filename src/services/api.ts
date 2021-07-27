import axios, {AxiosPromise} from "axios";
import { User, Todo, Post } from "../interface/domain";

export const fetchData = async (userId:number) => {
  const userPromise:AxiosPromise<User> = axios.get(
    `https://jsonplaceholder.typicode.com/users/${userId}`
  );
  const todos:AxiosPromise<Todo[]> = axios.get(
    `https://jsonplaceholder.typicode.com/users/${userId}/todos`
  );
  const posts: AxiosPromise<Post[]> = axios.get(
    `https://jsonplaceholder.typicode.com/users/${userId}/posts`
  );

  const result = await Promise.all([userPromise, todos, posts]);

  return {
    user: result[0].data,
    todos: result[1].data,
    posts: result[2].data
  }
}

