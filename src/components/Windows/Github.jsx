import React from "react";
import MacWindow from "./MacWindow";
import githubData from "../../assets/github.json";
import "./github.scss"
const Github = () => {
  const Gitcard = ({
    data = {
      id: 1,
      image: "",
      title: "",
      description: "",
      tags: [],
      repoLink: "",
      demoLink: "",
    },
  }) => {
    return (
      <div className="card">
        <img src={data.image} alt={data.title} />
        <h1>{data.title}</h1>
        <p className="description">{data.description}</p>

        <div className="tags">
          {data.tags.map((tag) => (
            <p className="tag">{tag}</p>
          ))}
        </div>
        <div className="urls">
            <a href={data.repoLink} target="_blank">Repository</a>
          { data.demoLink && <a href="{data.demoLink}">Demo link</a>}
        </div>
      </div>
    );
  };
  return (
    <MacWindow>
      <div className="cards">
        {githubData.map((project) => {
          return <Gitcard data={project} />;
        })}
      </div>
    </MacWindow>
  );
};

export default Github;
