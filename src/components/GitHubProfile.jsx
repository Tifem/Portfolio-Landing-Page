import React, { useEffect, useRef, useState } from "react";
import { FaGithub, FaUsers } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const GitHubProfile = () => {
  useEffect(() => {
    AOS.init({
      once: true,
    });
    AOS.refresh();
  }, []);

  const mockUsers = [
    {
      id: 1,
      login: "freed",
      avatar_url: "John Doe",
      followers_url: 1000,
      html_url: "https://example.com",
    },
    {
      id: 2,
      login: "janedoe",
      avatar_url: "Jane Doe",
      followers_url: 500,
      html_url: "https://example.com",
    },
    {
      id: 3,
      login: "daviddoe2",
      avatar_url: "John Doe 2",
      followers_url: 2000,
      html_url: "https://example.com",
    },
    {
      id: 4,
      login: "uche",
      avatar_url: "Jane Doe 2",
      followers_url: 1500,
      html_url: "https://example.com",

    },
    {
      id: 5,
      login: "iyke",
      avatar_url: "John Doe 3",
      followers_url: 2500,
      html_url: "https://example.com",
    
    }
  ];
  const [user, setUser] = useState([]);
  const [filterData, setFilterData] = useState([]);
  const searchRef = useRef();

  // useEffect(() => {
  //   fetch("https://api.github.com/users")
  //   .then((response) => response.json())
  //   .then((data) => setUser(data))
  // }, []);

  useEffect(() => {
    const fetchData = async () => {
       await fetch("https://api.github.com/users", {mode:"cors"}).then((response) => {
        if(response.status == 403){
          setUser(mockUsers)
          setFilterData(mockUsers)
          throw new Error('api not working');
        }
        
        console.log(response.status)
        return response.json();
       }).then((data) =>{
        setUser(data);
        setFilterData(data);
        // console.log(data)
       }).catch((err) =>{
        console.log(err)
       })
       
    };
    fetchData();
  }, []);

  const handleSearch = () => {
    const searchValue = searchRef.current.value.toLowerCase();
    const filtered = user.filter((item) =>
      item.login.toLowerCase().includes(searchValue)
    );
    if(searchValue !== ""){
      setUser(filtered)
    }else{
      setUser(filterData)
    }
  };

  return (
    <div className="github">
      <h1 data-aos="fade-left" data-aos-duration="1000" data-aos-offset="200">
        Github Profiles
      </h1>
      <input
        type="search"
        placeholder="Search by name"
        className="search"
        ref={searchRef}
        onChange={handleSearch}
      />
      <ul className="git-card">
        {user.length > 0 &&
          user.slice(0, 5).map((item) => (
            <li key={item.id} className="card-profile">
              <img src={item.avatar_url} alt={item.login} className="users" />
              <p className="username">{item.login}</p>
              <a href={item.followers_url} className="followers">
                <FaUsers />
              </a>
              <a href={item.html_url} className="github-link">
                <FaGithub />
              </a>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default GitHubProfile;
