import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import "./PostItem.css";
import Logo from "../svgfile/Logo";
function PostItem() {
  const [id, idchange] = useState("");
  const [name, namechange] = useState("");
  const [surname, surnamechange] = useState("");
  const [email, emailchange] = useState("");
  const data = {
    id,
    name,
    surname,
    email,
  };
  const navigate = useNavigate();

  const handlesubmit = (e) => {
    e.preventDefault();

    fetch("http://localhost:4000/products", {
      method: "POST",
      headers: { "Content-Type": "Application/json" },
      body: JSON.stringify(data),
    })
      .then(() => {
        alert("Your form is submitted successfully.");
        console.log(data);
        navigate("/table");
      })
      .catch((err) => {
        console.error(err.message);
      });
  };

  return (
    // <div className="body">
    //   <div className="section">
    //     <div className="container">
    //       <form
    //         className="row full-height justify-content-center"
    //         onSubmit={handlesubmit}
    //       >
    //         <div className="col-12 text-center align-self-center py-5">
    //           <div className="section pb-5 pt-5 pt-sm-2 text-center">
    //             <input
    //               class="checkbox"
    //               type="checkbox"
    //               id="reg-log"
    //               name="reg-log"
    //             />
    //             <label for="reg-log"></label>
    //             <div className="card-3d-wrap mx-auto">
    //               <div className="card-3d-wrapper">
    //                 <div className="card-front">
    //                   <div className="center-wrap">
    //                     <div className="section text-center">
    //                       <h4 className="mb-4 pb-3">Log In</h4>
    //                       <div className="form-group">
    //                         <input
    //                           type="text"
    //                           name="id"
    //                           class="form-style"
    //                           placeholder="Id"
    //                           id="logemail"
    //                           autocomplete="off"
    //                         />
    //                         <i className="input-icon uil uil-at"></i>
    //                       </div>
    //                       <div className="form-group mt-2">
    //                         <input
    //                           type="password"
    //                           name="logpass"
    //                           class="form-style"
    //                           placeholder="Your Password"
    //                           id="logpass"
    //                           autocomplete="off"
    //                         />
    //                         <i className="input-icon uil uil-lock-alt"></i>
    //                       </div>
    //                       <button className="btn mt-4">submit</button>
    //                       <p className="mb-0 mt-4 text-center">
    //                         <a href="#0" class="link">
    //                           Forgot your password?
    //                         </a>
    //                       </p>
    //                     </div>
    //                   </div>
    //                 </div>
    //                 <div className="card-back">
    //                   <div className="center-wrap">
    //                     <div className="section text-center">
    //                       <h4 className="mb-4 pb-3">Sign Up</h4>
    //                       <div className="form-group">
    //                         <input
    //                           type="number"
    //                           required
    //                           name="id"
    //                           value={id}
    //                           onChange={(e) => idchange(e.target.value)}
    //                           class="form-style"
    //                           placeholder="Id"
    //                           id="numbers-only"
    //                           autocomplete="off"
    //                         />
    //                         <i className="input-icon uil uil-user"></i>
    //                       </div>
    //                       <div className="form-group mt-2">
    //                         <input
    //                           type="text"
    //                           required
    //                           value={name}
    //                           onChange={(e) => namechange(e.target.value)}
    //                           name="logemail"
    //                           className="form-style"
    //                           placeholder="Your name"
    //                           id="logemail"
    //                           autocomplete="off"
    //                         />
    //                         <i className="input-icon uil uil-at"></i>
    //                       </div>
    //                       <div className="form-group mt-2">
    //                         <input
    //                           type="text"
    //                           required
    //                           value={surname}
    //                           onChange={(e) => surnamechange(e.target.value)}
    //                           name="logpass"
    //                           className="form-style"
    //                           placeholder="Your Surname"
    //                           id="logpass"
    //                           autocomplete="off"
    //                         />
    //                         <i className="input-icon uil uil-lock-alt"></i>
    //                       </div>
    //                       <div className="form-group mt-2">
    //                         <input
    //                           type="email"
    //                           required
    //                           value={email}
    //                           onChange={(e) => emailchange(e.target.value)}
    //                           name="logpass"
    //                           class="form-style"
    //                           placeholder="Your Email"
    //                           id="logpass"
    //                           autocomplete="off"
    //                         />
    //                         <i className="input-icon uil uil-lock-alt"></i>
    //                       </div>
    //                       <button className="btn mt-4" type="submit">
    //                         submit
    //                       </button>
    //                       <button className="btn2 mt-4">
    //                         <Link to="/">back</Link>
    //                       </button>
    //                     </div>
    //                   </div>
    //                 </div>
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //       </form>
    //     </div>
    //   </div>
    // </div>
<div className="body">

    <div class="forms-main">
      <div className="main-page">
        <ul>
            <li className="pages-img">
            {/* <box-icon  name='home'></box-icon> */}
            <Logo></Logo>
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
                                <label for="r1">id</label>
                             </div>
                             <div class="input-data">
                                <input type="text" value={name} onChange={(e) => namechange(e.target.value)} required />
                                <div class="underline"></div>
                                <label for="r2">Name</label>
                             </div>
                          </div>
                          <div class="form-row">
                             <div class="input-data">
                                <input type="text" value={surname} onChange={(e) => surnamechange(e.target.value)} required />
                                <div class="underline"></div>
                                <label for="r3">Surname</label>
                             </div>
                             <div class="input-data">
                                <input type="text" value={email} onChange={(e) => emailchange(e.target.value)} required />
                                <div class="underline"></div>
                                <label for="r4">Email</label>
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
  )

    
  }
export default PostItem;
