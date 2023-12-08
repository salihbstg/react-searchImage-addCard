import React, { useState } from "react";
import "./GitForm.css";
import Git from "../Github/Git";
import axios from "axios";
const getData = async (userName) => {
  const data = await axios.get(
    `https://api.github.com/users/${userName}/repos`
  );
  return data.data;
};
const GitForm = () => {
  const [data, setData] = useState([]);
  return (
    <>
      <form
        className="git-form"
        onSubmit={(event) => {
          event.preventDefault();
          getData(document.querySelector("#git-text").value).then((data) =>
            setData(data)
          );
        }}
      >
        <input
          type="text"
          id="git-text"
          placeholder="Github kullanıcı adı girin"
        />
      </form>
      <div className="links">
          {data.map((data, index) => {
            return <Git name={data.name} url={data.html_url} key={index}></Git>;
          })}
      </div>
    </>
  );
};

export default GitForm;
