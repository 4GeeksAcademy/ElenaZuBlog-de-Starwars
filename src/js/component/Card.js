import React, { useState, useContext } from 'react'
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart as farHeart } from '@fortawesome/free-regular-svg-icons'
import { faHeart as fasHeart } from '@fortawesome/free-solid-svg-icons' 
import { Context } from "../store/appContext";

const Card = (props) => {
  const [hover, setHover] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);
  const { store, actions } = useContext(Context);
  
  const handleFavoriteClick = () => {
    actions.addFavoriteItem(props.name);
    setIsFavorite(!isFavorite); 
  }
  const executeFavoriteFunctions = () =>{
    actions.addFavoriteItem(props.name);
    handleFavoriteClick();
  }

  return (
    <div>
      <div className="card ms-3" style={{width: "18rem"}}>
          <div className="card-body">
            <h5 className="card-title">{props.name}</h5>   
            <div className='d-flex justify-content-around'>
              <Link className="btn btn-primary" to={props.router}>
                <span>Learn more!</span>
              </Link>
              <FontAwesomeIcon 
                icon={isFavorite ? fasHeart : (hover ? fasHeart : farHeart)} 
                style={{color: "#fcf403"}} 
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
                onClick={() => executeFavoriteFunctions()}
              />
            </div>
          </div>
      </div>
    </div>
  )
}

export default Card

