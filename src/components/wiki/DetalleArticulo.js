import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router'
import { Link } from 'react-router-dom';
import { activeNote, loadActiveNote } from '../../actions/notes';

export const DetalleArticulo = () => {
    const { id } = useParams();
    const dispatch = useDispatch();

    const {img, titulo, desc} = useSelector(state => state.article.active);

    useEffect(() => {
        dispatch(loadActiveNote(id));
    }, [])
    
    return (
        <div className="col-lg-4 mb-4">
        <div className="card-detail">
          <img
            src={img}
            alt={`${titulo}`}
            className="card-img-top"
          />
          <div className="card-body row">
            <h5 className="card-title">{titulo}</h5>
            <p className="card-text">{desc}</p>
            <Link className="btn boton-azul blue-text w-100 align-self-end" to='/article/modify' onClick={()=>dispatch(activeNote({titulo,img,id,desc}))}>
              Modificar
            </Link>
          </div>
        </div>
      </div>
    )
}
