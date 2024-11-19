import React from 'react'
import { projects } from '../../../utils/data'
import { Link } from 'react-router-dom'
import { FaGithub } from 'react-icons/fa'
import { GoLinkExternal } from 'react-icons/go'

const Projects = () => {
  return (
    <>
      <h1 className='title'>Projects</h1>
      <div className="project">
        {projects.map((item,index) => {
          return (
            <div className="card" key={index}>
              <h2>{item.name}</h2>
              <p>{item.description}</p>

              <ul className="tool">
                {item.tools.map((tool,indexTool) => {
                  return <li key={indexTool}>{tool}</li>;
                })}
              </ul>

              <div className="links">
                <Link to={item.githubLink}>
                  <FaGithub />
                </Link>

                <Link to={item.liveUrl}>
                  <GoLinkExternal />
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Projects