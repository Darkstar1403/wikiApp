import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { activeNote, loadActiveNote } from "../../actions/notes";

export const Articulo = ({ titulo, img, id, desc }) => {
  const dispatch = useDispatch();
  

  return (
    <div className="col-lg-4 mb-4 h-300">
      <div className="card">
        <img
          src={img}
          alt={`${titulo}`}
          className="card-img-top"
        />
        <div className="card-body ">
          <h5 className="card-title mb-5">{titulo}</h5>
          <Link to={`./article/${id}`} className="btn boton-azul blue-text w-100" onClick={()=>dispatch(activeNote({titulo,img,id,desc}))}>
            Ir al articulo
          </Link>
        </div>
      </div>
    </div>
  );
};
