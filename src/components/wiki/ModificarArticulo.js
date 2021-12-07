import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Swal from 'sweetalert2';
import { activeNote, startLoadingNotes, startUpdateNote, startUploading } from '../../actions/notes';
import { useForm } from '../../hooks/useForm';

export const ModificarArticulo = ({history}) => {

    const dispatch = useDispatch();
    const {active} = useSelector(state => state.article);
    const {admin} = useSelector(state => state.auth);
    const [formValues, handleInputChange] = useForm(active); 

    const {titulo, desc, img} = formValues;

    const handleSave = () =>{
        (admin)?dispatch(startUpdateNote(active)):Swal.fire('Error', 'Solo admins', 'error');
        setTimeout(() => {
            history.replace('/home');
            dispatch(startLoadingNotes());
        }, 1000);
    }


    useEffect(() => {
        dispatch(activeNote({...formValues}))
    }, [formValues, dispatch]);

    // useEffect(() => {
    //     dispatch(activeNote(active));
    // }, [handleSave])

    const handlePictureUploud = () =>{
        document.querySelector('#fileSelector').click();
    }

    const handleFileChange = (e) =>{
        const file = e.target.files[0];
        if (file){
            dispatch(startUploading(file));
        }
    }

    return (
        <div>
            <img
                src={img}
                alt={`${titulo}`}
                className="card-img-top mb-1"
            />
            <input
                type='text'
                placeholder='Titulo del articulo'
                className='form-control mb-3'
                autoComplete='off'
                value={titulo}
                onChange={handleInputChange}
                name='titulo'
            />
            <textarea placeholder='Descripción'
            className='form-control' value={desc}
            onChange={handleInputChange}
            style={{minHeight:200}}
            name='desc'>
            </textarea>
            <div className='mt-1 row align-items-center'>
                <input name='file' id='fileSelector' type='file' style={{display: 'none'}} onChange={handleFileChange}/>
                <div class="col-auto">
                    <button className='btn' onClick={handlePictureUploud}>
                        <i class="fas fa-camera fa-lg"></i>
                    </button>
                </div>
                <div class="col-auto">
                    <label  class="col-form-label" style={{color:'#fff'}}>Agregar imagen</label>
                </div>
                <div class="col-auto" style={{marginLeft:50}}>
                    <button className='btn btn-success' onClick={handleSave}>
                        Modificar
                    </button>
                </div>
            </div>
        </div>
    )
}
