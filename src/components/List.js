import { useEffect, useState } from "react";
import "./List.css";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../svgfile/Logo";
function List() {
  const [data, usedata] = useState(null);
  const navigate = useNavigate();
  
  const LoadDetail = (id) => {
    navigate("/details/" + id);
  };
  
  const LoadDelete = (id) => {
    if (window.confirm("Are you sure you want to delete")){
      fetch("http://localhost:4000/products/" + id, {
        method : "DELETE",
      })
    }
  };

  const LoadEdit = (id) => {
    navigate("/edit/" + id);
  };

  useEffect(() => {
    fetch("http://localhost:4000/products")
      .then((res) => {
        return res.json();
      })
      .then((response) => {
        usedata(response);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
  
    <div className="table">
    <div className="main-page">
        <ul>
            <li className="pages-img">
            {/* <box-icon  name='home'></box-icon> */}
            <Logo></Logo>
                <p>sneat</p>
            </li>
            <li className="dash-main">
                <div className="dashboard-text">
                <box-icon  name='home'></box-icon>
                    <p><Link className="dashboard-link" to="/">Home</Link></p>
                </div>
            </li>
            <li className="dash-main">
                <div className="dashboard-text">
                <box-icon name='cog'></box-icon>
                    <p>Account Settings</p>
                </div>
            </li>
            <li className="pages-category">
                <hr className="page-line" />
                <p>Pages</p>
            </li>
            <li className="dash-main">
                <div className="dashboard-text">
                <box-icon name='log-out' ></box-icon>
                    <p>Login</p>
                </div>
            </li>
            <li className="dash-main">
                <div className="dashboard-text">
                <box-icon name='user-plus' ></box-icon>
                    <p><Link className="dashboard-link" to="/post" >Register</Link></p>
                </div>
            </li>
            <li className="dash-main">
                <div className="dashboard-text" >
                <box-icon name='error-circle'></box-icon>
                    <p>Error</p>
                </div>
            </li>
            <li className="pages-category">
                <hr className="page-line" />
                <p>user inerface</p>
            </li>
            <li className="dash-main">
                <div className="dashboard-text" >
                <box-icon type='solid' name='folder-minus'></box-icon>
                    <p>Typography</p>
                </div>
            </li>
            <li className="dash-main">
                <div className="dashboard-text" >
                <box-icon name='low-vision'></box-icon>
                    <p>Icons</p>
                </div>
            </li>
            <li className="dash-main">
                <div className="dashboard-text" >
                <box-icon name='credit-card'></box-icon>
                    <p>Cards</p>
                </div>
            </li>
            <li className="dash-main">
                <div className="dashboard-text" >
                <box-icon name='table' ></box-icon>
                    <p>Table</p>
                </div>
            </li>
            <li className="dash-main">
                <div className="dashboard-text" >
                <box-icon type='solid' name='layout'></box-icon>
                    <p>Form Layouts</p>
                </div>
            </li>
        </ul>
    </div>
    <div className="table-page-main">
        <div className="table-text">
            
            <nav>
            <div class="search">
                        <button class="search-button">
                        <box-icon name='search' ></box-icon>
                        </button>
                        <input type="text" placeholder="Search" />
                    </div>
                    <div class="nav-buttons">
                        <button class="search-button">
                        <box-icon name='github' type='logo' ></box-icon>
                        </button>
                        <button class="search-button">
                        <box-icon name='bell'></box-icon>
                        </button>
                        <button class="search-button">
                        <box-icon name='sun' ></box-icon>
                        </button>
                        <button class="search-button">
                        <box-icon name='user-circle' type='solid' ></box-icon>
                        </button>
                    </div>
            </nav>
        </div>
        <div className="table-items">
            <table className="table-items-main">
                <thead>
                    <tr className="items">
                        <td>id</td>
                        <td>name</td>
                        <td>email</td>
                        <td>date</td>
                        <td >edit</td>
                        <td className='edit' >details</td>
                        <td className='edit'>delete</td>
                    </tr>
                </thead>
                <tbody>
                    {
                      data && 
                      data.map((item) =>(
                    <tr className="items" key={item.id} >

                        <td>{item.id}</td>
                        <td>{item.name}</td>
                        <td>{item.surname}</td>
                        <td>{item.email}</td>
                   

                            <td className="items-back">
                                <button className="items-flex">
                                <box-icon type='solid' name='pencil'></box-icon>
                                    <p  onClick={() => {LoadEdit(item.id)}}>edit</p>
                                </button>
                            </td>
                            <td>
                                <button className="details-button"   onClick={() => {
                       LoadDetail(item.id);  }}>details</button>
                            </td>
                            <td className="items-back">
                                <button className="items-flex2"  onClick={() => {
                      LoadDelete(item.id);
                     }}>
                              <box-icon name='trash' type='solid' ></box-icon>
                                    <p>delete</p>
                                </button>
                            </td>
                       
                    </tr>
                      ))
                    }
                </tbody>
            </table>

        </div>
    </div>
</div>
  );
}

export default List;
