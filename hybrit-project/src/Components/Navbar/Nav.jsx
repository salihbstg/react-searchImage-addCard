import React from "react";
import styled from "styled-components";
import "./Nav.css";

const nav = ({ setValue }) => {
  const Link = styled.a`
    text-decoration: none;
    background-color: #999999;
    color: black;
    text-transform: capitalize;
    transition: 0.4s;
    font-weight: 800;
    font-size: 17px;
    padding: 10px;
    cursor: pointer;
    &:hover {
      background-color: #001821;
      color: white;
    }
  `;
  return (
    <div className="navbar">
      <div>
        <Link
          onClick={() => {
            setValue("search");
          }}
        >
          Resim Arama
        </Link>
      </div>
      <div>
        <Link onClick={()=>{
          setValue("card");
        }}>Kart Ekleme</Link>
      </div><div>
        <Link onClick={()=>{
          setValue("git");
        }}>Github Repo</Link>
      </div>
    </div>
  );
};

export default nav;
