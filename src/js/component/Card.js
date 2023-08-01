import React from 'react'
import { Link } from "react-router-dom";
const Card = (props) => {

  return (
    <div>
      <div className="card ms-3" style={{width: "18rem"}}>
          <div className="card-body">
            <h5 className="card-title">{props.name}</h5>   

            <Link className="btn btn-primary" to={props.router}>
								<span>Learn more!</span>
							</Link>
            
          </div>
      </div>
    </div>
  )
}

export default Card