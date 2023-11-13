import React, { useState } from "react";
import "./CardForm.css";
import styled from "styled-components";
import Card from "../Card/Card";
const MyForm2 = styled.form`
width: 100%;
  display: flex;
  gap: 10px;
  font-size: 15px;
  justify-content: center;
  margin-bottom: 20px;
  & input[type="text"] {
    padding: 3px 8px;
    outline: none;
    border: 1px solid #834271;
  }
  input[type="text"]:focus {
    border-color: red;
  }
  input[type="submit"] {
    padding: 3px 20px;
    background-color: #ccc;
  }
`;
const CardForm = () => {
    const [arr,setArr]=useState([]);
  return (
    <>
      <MyForm2 onSubmit={(event)=>{
        event.preventDefault();
        const newCard={
            url:document.querySelector("#url").value,
            title:document.querySelector("#title").value,
            description:document.querySelector("#description").value
        }
        setArr(a=>[...a,newCard]);
      }}>
        <input type="text" placeholder="Kart resim adresini girin" name="url" id="url" />
        <input type="text" placeholder="Başlığı girin" name="title" id="title" />
        <input type="text" placeholder="Açıklama girin" name="description" id="description" />
        <input type="submit" value="Ekle" />
      </MyForm2>
      {arr.map((data,index)=><Card url={data.url} title={data.title} description={data.description}></Card>)}
    </>
  );
};

export default CardForm;
