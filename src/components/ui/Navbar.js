import React, { useEffect } from "react";
import queryString from "query-string";
import { Link } from "react-router-dom";
import { useHistory, useLocation } from "react-router";
import logo from "../../assets/logo.png"
import { useForm } from "../../hooks/useForm";
import { useDispatch, useSelector } from "react-redux";
import { startLogout } from "../../actions/auth";
import { setNotes, startLoadingNotes } from "../../actions/notes";
import { loadNotes } from "../../helpers/loadNotes";


export const Navbar = () => {
  const history = useHistory();
  const location = useLocation();
  const dispatch = useDispatch();
  

  const { q = "" } = queryString.parse(location.search);

  const [{ search }, handleInputChange] = useForm({ search: q });

  const {name, admin} = useSelector(state => state.auth);
  const  activeNote = useSelector(state => state.article.active)

  const articles = useSelector(state => state.article.notes );

  const handleSearch = (e) => {
    e.preventDefault();
    history.push(`?q=${search}`);
    const newArticles = articles.filter(s => s.titulo.toLowerCase().includes(search.toLowerCase()) );
    dispatch(setNotes(newArticles));
  }



  const handleLogout = (e) =>{
    dispatch(startLogout());
  };
  return (
    <div>
      <nav className="navbar width-100 navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/home" onClick={()=>dispatch(startLoadingNotes())}>
            <img className="Logo" src={logo} alt="Logo udg virtual"/>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              {admin && (
                <>
                  <li className="nav-item">
                    <Link className="nav-link" to={'/article/new'}>
                      Agregar articulo
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" href="https://www.google.com/">
                      Gestionar peticiones
                    </Link>
                  </li>
                </>
                )}
              <li class="nav-item">
                <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">{name}</a>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to='/auth/login'
                  onClick={handleLogout}
                >
                  Salir
                </Link>
              </li>
            </ul>
            {!activeNote && (
              <form className="d-flex" >
              <input
                className="form-control me-2"
                type="search"
                placeholder="Buscar articulo"
                aria-label="Search"
                value={search}
                onChange={handleInputChange}
                name="search"
                autoComplete="off"
              />
              <button className="btn color text-white boton-azul" type="submit" onClick={handleSearch}>
                Buscar
              </button>
            </form>
            )}
          
          </div>
        </div>
      </nav>
    </div>
  );
};
