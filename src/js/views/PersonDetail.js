import React, { useContext, useEffect } from "react";

import { Context } from "../store/appContext";

import { useParams } from 'react-router-dom';


const PersonDetail = (props) => {
  let { theid } = useParams();

  const { store, actions } = useContext(Context);

  useEffect(() => {
    actions.getPersonById(theid);
  }, []);

  console.log(store.personDetail ? store.personDetail : "Loading...");
  
  console.log(store.personDetail.result ? store.personDetail.result.properties.name : "Loading...");
  return (
    <>
      <div className='container d-flex justify-content-evenly'>
        <img className="detail-img" style={{ height: "425px" }} src='https://www.sideshow.com/cdn-cgi/image/width=850,quality=90,f=auto/https://www.sideshow.com/storage/product-images/904944/luke-skywalker-bespin_star-wars_gallery_6256f777d993c.jpg'></img>
        <div className='ms-3' style={{ width: "20%" }}>
          <h1>
            {store.personDetail.result ? store.personDetail.result.properties.name : ""}
          </h1>

          <p>
          {store.personDetail.result  ? store.personDetail.result.description : ""}
          </p>
        </div>
      </div>
      <div className='d-flex justify-content-evenly mt-3' style={{ width: "60%", margin: 'auto' }}>
        <div>
          <h5 className='fw-bold'>Gender</h5>
          <h5>{store.personDetail.result  ? store.personDetail.result.properties.gender : ""}</h5>
        </div>

        <div>
          <h5 className='fw-bold'>Birth Year</h5>
          <h5>dfgdfg fgtrrty</h5>
        </div>

        <div>
          <h5 className='fw-bold'>Gender</h5>
          <h5>dfgdfg fgtrrty</h5>
        </div>

        <div>
          <h5 className='fw-bold'>Height</h5>
          <h5>dfgdfg fgtrrty</h5>
        </div>

        <div>
          <h5 className='fw-bold'>Skin Color</h5>
          <h5>dfgdfg fgtrrty</h5>
        </div>

        <div>
          <h5 className='fw-bold'>Eye Color</h5>
          <h5>dfgdfg fgtrrty</h5>
        </div>
      </div>
    </>
  )

}

export default PersonDetail