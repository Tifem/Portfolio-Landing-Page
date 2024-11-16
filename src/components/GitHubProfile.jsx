import React, { useEffect, useState } from 'react'
import { FaGithub, FaUsers } from 'react-icons/fa';

const GitHubProfile = () => {
  const [user, setUser] = useState([]);
  useEffect(() => {
    fetch("https://api.github.com/users")
    .then((response) => response.json())
    .then((data) => setUser(data))
  }, []);
  return (
    <div className='github'>
        <h1>Github Profiles</h1>
        <ul className='git-card'>
          {user.slice(0,5).map((item) =>{
            return (
              <li key={item.id} className="card-profile">
                <img src={item.avatar_url} alt={item.login} className='users'/>
                <p className="username">{item.login}</p>
                <a href={item.followers_url}>
                  <FaUsers />
                </a>
                <a href={item.html_url}>
                  <FaGithub/>
                </a>
              </li>
            );
          } )}
        </ul>
    </div>
  )
}

export default GitHubProfile