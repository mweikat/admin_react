import { Link } from "react-router-dom";
import  AuthService  from "../../../services/auth.service";

export const Top = () => {

    const handeLogOut = () =>{
      AuthService.logout();
    }

    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container">
    <a className="navbar-brand" href="#">ChatBoot</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Link</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled" aria-disabled="true">Disabled</a>
        </li>
      </ul>
      <div>
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            <button className="btn btn-primary">José Luis</button>
          </a>
          <ul className="dropdown-menu">
            <li><Link className="dropdown-item" to="/account">Mi perfil</Link></li>
            <li><a className="dropdown-item" href="#">Configuraci&oacute;n</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="#" onClick={handeLogOut}>Cerrar Sesi&oacute;n</a></li>
          </ul>
        </li>
      </ul>
      </div>
      
    </div>
  </div>
</nav>
    )
}