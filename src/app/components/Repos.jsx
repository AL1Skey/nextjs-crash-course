import React from "react";
import { FaStar, FaCodeBranch, FaEye } from "react-icons/fa";
import { resolve } from "styled-jsx/css";
import { Suspense } from "react";
async function reposAll() {
  const data = await fetch(
    "https://api.github.com/users/newrivaladam/repos"
  ).then((data) => data.json());

  return data;
}
async function reposFetch(param) {
  const repo = await fetch(
    `https://api.github.com/repos/newrivaladam/${param}`,
    {
      next: {
        revalidate: 60,
      },
    }
  ).then((data) => data.json());
  await new Promise((resolve) => setTimeout(resolve, 3000));
  return repo;
}
const Repos = async ({ name }) => {
  const data = await reposFetch(name);
  return (
    <>
      <div className="singular">
        <h1 className="title">{data.name}</h1>
        <p className="desc">
          {data.description
            ? data.description
            : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut quos ratione sapiente, ipsa quia voluptatum accusantium, nisi, assumenda officia ex cum quidem atque dolores rem a libero veniam corporis deleniti. Tempore expedita aliquid quod reprehenderit soluta, est autem illum corrupti ipsam rem cupiditate! Mollitia quae aliquid error? Voluptate, expedita quae? Dolorum laborum nostrum aspernatur enim, non iusto. Eaque, sunt reprehenderit."}
        </p>
        <div className="icon-list">
          <div className="icon-content">
            <FaStar />
            <p>{data.stargazers_count}</p>
          </div>
          <div className="icon-content">
            <FaCodeBranch />
            <p>{data.forks}</p>
          </div>
          <div className="icon-content">
            <FaEye />
            <p>{data.watchers}</p>
          </div>
          <div className="button-link">
            <a href={data.html_url}>Go to Repositories</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Repos;
