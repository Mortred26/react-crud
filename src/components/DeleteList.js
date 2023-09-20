import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";



function EditList(){
    const { listid } = useParams();
    // const [detaildata, detailData] = useState({});
  
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
    
    useEffect(() => {
      console.log(listid);
      fetch("http://localhost:4000/posts/" + listid)
        .then((res) => {
          return res.json();
        })
        
        .catch((err) => {
          console.log(err);
        });
    }, [listid]);


  const navigate = useNavigate();

  const handlesubmit = (e) => {
    e.preventDefault();

    fetch("http://localhost:4000/posts/" + listid, {
      method: "DELETE",
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
      <div className="section">
        <div className="container">
          <form
            className="row full-height justify-content-center"
            onSubmit={handlesubmit}
          >
            <div className="col-12 text-center align-self-center py-5">
              <div className="section pb-5 pt-5 pt-sm-2 text-center">
                <input
                  class="checkbox"
                  type="checkbox"
                  id="reg-log"
                  name="reg-log"
                />
                <label for="reg-log"></label>
                <div className="card-3d-wrap mx-auto">
                  <div className="card-3d-wrapper">
                    <div className="card-front">
                      <div className="center-wrap">
                        <div className="section text-center">
                          <h4 className="mb-4 pb-3">Log In</h4>
                          <div className="form-group">
                            <input
                              type="text"
                              name="id"
                              class="form-style"
                              placeholder="Id"
                              id="logemail"
                              autocomplete="off"
                            />
                            <i className="input-icon uil uil-at"></i>
                          </div>
                          <div className="form-group mt-2">
                            <input
                              type="password"
                              name="logpass"
                              class="form-style"
                              placeholder="Your Password"
                              id="logpass"
                              autocomplete="off"
                            />
                            <i className="input-icon uil uil-lock-alt"></i>
                          </div>
                          <button className="btn mt-4">submit</button>
                          <p className="mb-0 mt-4 text-center">
                            <a href="#0" class="link">
                              Forgot your password?
                            </a>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="card-back">
                      <div className="center-wrap">
                        <div className="section text-center">
                          <h4 className="mb-4 pb-3">Edit list</h4>
                          <div className="form-group">
                            <input
                              type="number"
                              required
                              name="id"
                              value={id}
                              onChange={(e) => idchange(e.target.value)}
                              class="form-style"
                              placeholder="Id"
                              id="numbers-only"
                              autocomplete="off"
                            />
                            <i className="input-icon uil uil-user"></i>
                          </div>
                          <div className="form-group mt-2">
                            <input
                              type="text"
                              required
                              value={name}
                              onChange={(e) => namechange(e.target.value)}
                              name="logemail"
                              className="form-style"
                              placeholder="Your name"
                              id="logemail"
                              autocomplete="off"
                            />
                            <i className="input-icon uil uil-at"></i>
                          </div>
                          <div className="form-group mt-2">
                            <input
                              type="text"
                              required
                              value={surname}
                              onChange={(e) => surnamechange(e.target.value)}
                              name="logpass"
                              className="form-style"
                              placeholder="Your Surname"
                              id="logpass"
                              autocomplete="off"
                            />
                            <i className="input-icon uil uil-lock-alt"></i>
                          </div>
                          <div className="form-group mt-2">
                            <input
                              type="email"
                              required
                              value={email}
                              onChange={(e) => emailchange(e.target.value)}
                              name="logpass"
                              class="form-style"
                              placeholder="Your Email"
                              id="logpass"
                              autocomplete="off"
                            />
                            <i className="input-icon uil uil-lock-alt"></i>
                          </div>
                          <button className="btn mt-4" type="submit">
                            submit
                          </button>
                          <button className="btn2 mt-4">
                            <Link to="/">back</Link>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default EditList;