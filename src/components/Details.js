import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import "./Details.css";
import "./List.css"
const AllList = () => {
  const { listid } = useParams();
  const [detaildata, detailData] = useState({});

  useEffect(() => {
    console.log(listid);
    fetch("http://localhost:4000/products/" + listid)
      .then((res) => {
        return res.json();
      })
      .then((response) => {
        detailData(response);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [listid]);

  return (
    <div>
      <div className="container">
        <div className="card row" style={{ textAlign: "left" }}>
          <div className="card-title">
            <h2>Employee Create</h2>
          </div>
          <div className="card-body"></div>

          {detaildata && 
            <div>
              <h2>
                The Employee id is : <b>{detaildata.id}</b>
              </h2>
              <h3>Contact Details</h3>
              <h5>Name is : {detaildata.name}</h5>
              <h5>Price is : {detaildata.price}</h5>
              <h5>OldPrice is : {detaildata.oldprice}</h5>
              <Link className="btn btn-danger" to="/">
                Back to Listing
              </Link>
            </div>
          }
        </div>
      </div>
    </div>
 
  );
};

export default AllList;
