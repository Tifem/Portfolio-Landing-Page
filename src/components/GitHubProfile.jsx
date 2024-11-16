import React, { useEffect, useState } from 'react'
import { FaGithub, FaUsers } from 'react-icons/fa';
import AOS from "aos";
import "aos/dist/aos.css";


const GitHubProfile = () => {

  useEffect(() => {
    AOS.init({
      once: true,
    });
    AOS.refresh();
  }, []);

  const [user, setUser] = useState([]);
  useEffect(() => {
    fetch("https://api.github.com/users")
    .then((response) => response.json())
    .then((data) => setUser(data))
  }, []);
  return (
    <div className="github">
      <h1 data-aos="fade-left" data-aos-duration="1000" data-aos-offset="200">
        Github Profiles
      </h1>
      <ul className="git-card">
        {user.slice(0, 5).map((item) => {
          return (
            <li key={item.id} className="card-profile">
              <img src={item.avatar_url} alt={item.login} className="users" />
              <p className="username">{item.login}</p>
                <a href={item.followers_url} className='followers'>
                  <FaUsers />
                </a>
                <a href={item.html_url} className='github-link'>
                  <FaGithub />
                </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default GitHubProfile