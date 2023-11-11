import React, { useState } from "react";
import "./SearchForm.css";
import axios from "axios";
import styled from "styled-components";
import Search from "../Search/Search";
const SearchForm = () => {
  const MyForm1 = styled.form`
    display: flex;
    justify-content: center;
    width: 100%;
    & input {
      width: 100%;
      padding: 5px 5px;
    }
  `;
  const searchImages = async (term) => {
    const response = await axios.get("https://api.unsplash.com/search/photos", {
      headers: {
        Authorization: "Client-ID jiKWiDd2-ewBK_3-RdNmM_ev2krKdQIox2_dtdVrn0M",
      },
      params: {
        query: term,
        per_page: 100,
      },
    });
    return response.data.results;
  };
  const [image, setImage] = useState([]);
  return (
    <div className="search-div">
      <MyForm1
        onSubmit={(event) => {
          event.preventDefault();
          const term=document.querySelector('#searchText').value;
          searchImages(term).then((data) => {
            setImage(data);
          });
        }}
      >
        <input
          type="text"
          id="searchText"
          placeholder="Aramak istediğiniz resmi girin"
        />
      </MyForm1>
      <div className="image-wrapper">
        {image.map((data, index) => (
          <Search url={data} key={index}></Search>
        ))}
      </div>
    </div>
  );
};

export default SearchForm;
