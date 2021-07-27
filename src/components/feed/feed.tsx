import React, { useState, useEffect } from "react";
import { User, Todo, Post } from "../../interface/domain";
import { useParams } from "react-router-dom";
import {fetchData} from "../../services/api"

type FeedPrams = {
  id: string;
};

const Feed: React.FC = () => {
  let { id } = useParams<FeedPrams>();
  const [userId, setUserId] = useState(() => {
    return !id ? 1 : Number(id);
  });
  const [user, setUser] = useState<User | null>();
  const [posts, setPosts] = useState<Post[]>([]);
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    const userId = !id ? 1 : Number(id);
    setUserId(userId);
  }, [id]);

  useEffect(() => {
    async function getData() {
      const data = await fetchData(userId);
      setUser({
        id: data.user.id,
        name: data.user.name,
        email: data.user.email,
      });
      setTodos(data.todos);
      setPosts(data.posts);
    }

    getData()
  }, [userId])

  return (
    <div className="feed">
      <div>
        <div className="user-container">
          <h2>User Info</h2>
          {user && (
            <div>
              <span>{user.id}</span> &nbsp;
              <span>{user.name}</span> &nbsp;
              <span>{user.email}</span>
            </div>
          )}
        </div>
        <div className="post-container">
          <h2>Posts</h2>
          {posts &&
            posts.map((post) => {
              return (
                <div className="post" key={post.id}>
                  <h3>{post.title}</h3>
                  <p>{post.body}</p>
                </div>
              );
            })}
        </div>
        <div className="todo-container">
          <h2>Todos</h2>
          {todos && (
            <ul>
              {todos.map((todo) => {
                return (
                  <li className="todo" key={todo.id}>
                    <div>
                      <span>{todo.title}</span>
                      <input type="checkbox" defaultChecked={todo.completed} />
                    </div>
                  </li>
                );
              })}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default Feed;
