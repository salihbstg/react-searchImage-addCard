import React from 'react'
import './Search.css';
const Search = ({url}) => {
  return (
    <div className='image-wrapper'>
        <img src={url.urls.small} alt="" />
    </div>
  )
}

export default Search
