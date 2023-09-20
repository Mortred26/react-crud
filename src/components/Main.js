import { Link } from "react-router-dom";
import './List.css'
import 'boxicons'
import Logo from "../svgfile/Logo";
function Home() {
  return (
    <div className="table">
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
                    <p><Link className="dashboard-link" to="/post" >Register</Link></p>
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
    <div class="table-page-main">
        <div class="table-text">
            
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
     
    </div>
</div>
  );
}

export default Home;
