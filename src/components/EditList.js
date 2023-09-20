import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";



function EditList(){
    const { listid } = useParams();
    // const [detaildata, detailData] = useState({});
  
    const [id, idchange] = useState("");
    const [name, namechange] = useState("");
    const [price, pricechange] = useState("");
    const [oldprice, oldpricechange] = useState("");
    const data = {
      id,
      name,
      price,
      oldprice,
    };
    
    useEffect(() => {
      console.log(listid);
      fetch("http://localhost:4000/products/" + listid)
        .then((res) => {
          return res.json();
        })
        .then((response) => {
          idchange(response.id)
          namechange(response.name)
          pricechange(response.price)
          oldpricechange(response.oldprice)
        })
        .catch((err) => {
          console.log(err);
        });
    }, [listid]);


  const navigate = useNavigate();

  const handlesubmit = (e) => {
    e.preventDefault();

    fetch("http://localhost:4000/posts/" + listid, {
      method: "PUT",
      headers: { "Content-Type": "Application/json" },
      body: JSON.stringify(data),
    })
      .then(() => {
        alert("Your form is submitted changed.");
        console.log(data);
        navigate("/table");
      })
      .catch((err) => {
        console.error(err.message);
      });
  };

  return (

    <div className="body">

    <div class="forms-main">
      <div className="main-page">
        <ul>
            <li className="pages-img">
            <box-icon  name='home'></box-icon>
                <p>sneat</p>
            </li>
            <li class="dash-main">
                <div class="dashboard-text">
                <box-icon  name='home'></box-icon>
                    <p>Dashboard</p>
                </div>
            </li>
            <li class="dash-main">
                <div class="dashboard-text">
                <box-icon name='cog'></box-icon>
                    <p>Account Settings</p>
                </div>
            </li>
            <li class="pages-category">
                <hr class="page-line" />
                <p>Pages</p>
            </li>
            <li class="dash-main">
                <div class="dashboard-text">
                <box-icon name='log-out' ></box-icon>
                    <p>Login</p>
                </div>
            </li>
            <li class="dash-main">
                <div class="dashboard-text">
                <box-icon name='user-plus' ></box-icon>
                    <p>Register</p>
                </div>
            </li>
            <li class="dash-main">
                <div class="dashboard-text" >
                <box-icon name='error-circle'></box-icon>
                    <p>Error</p>
                </div>
            </li>
            <li class="pages-category">
                <hr class="page-line" />
                <p>user inerface</p>
            </li>
            <li class="dash-main">
                <div class="dashboard-text" >
                <box-icon type='solid' name='folder-minus'></box-icon>
                    <p>Typography</p>
                </div>
            </li>
            <li class="dash-main">
                <div class="dashboard-text" >
                <box-icon name='low-vision'></box-icon>
                    <p>Icons</p>
                </div>
            </li>
            <li class="dash-main">
                <div class="dashboard-text" >
                <box-icon name='credit-card'></box-icon>
                    <p>Cards</p>
                </div>
            </li>
            <li class="dash-main">
                <div class="dashboard-text" >
                <box-icon name='table' ></box-icon>
                    <p><Link className="dashboard-link" to="/table">Table</Link></p>
                </div>
            </li>
            <li class="dash-main">
                <div class="dashboard-text" >
                <box-icon type='solid' name='layout'></box-icon>
                    <p>Form Layouts</p>
                </div>
            </li>
        </ul>
    </div>
    <div class="container-main">
            
            <div class="container">
                       <div class="text">
                          Contact us Form
                       </div>
                       <form  onSubmit={handlesubmit}>
                          <div class="form-row">
                             <div class="input-data">
                                <input type="text"   value={id}
                                 onChange={(e) => idchange(e.target.value)} required />
                                <div class="underline"></div>
                                <label for="">id</label>
                             </div>
                             <div class="input-data">
                                <input type="text" value={name} onChange={(e) => namechange(e.target.value)} required />
                                <div class="underline"></div>
                                <label for="">Name</label>
                             </div>
                          </div>
                          <div class="form-row">
                             <div class="input-data">
                                <input type="text" value={price} onChange={(e) => pricechange(e.target.value)} required />
                                <div class="underline"></div>
                                <label for="">price</label>
                             </div>
                             <div class="input-data">
                                <input type="text" value={oldprice} onChange={(e) => oldpricechange(e.target.value)} required />
                                <div class="underline"></div>
                                <label for="">oldprice</label>
                             </div>
                          </div>
                          <div class="form-row">

                          <div class="input-data textarea">
                             <textarea rows="8" cols="80" required></textarea>
                             <br />
                             <div class="underline"></div>
                             <label for="">Write your message</label>
                             <br />
                             <div class="form-row submit-btn">
                                <div class="input-data">
                                   <div class="inner"></div>
                                   <input type="submit" value="submit" />
                                </div>
                             </div>
                   
                          </div>
                       </div>
                     </form>
     
             </div>

         </div>
    </div>
</div>
  );
}

export default EditList;