import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { activeNote, startLoadingNotes, startSaveNote, startUploading, unsetActiveNote } from '../../actions/notes';
import { useForm } from '../../hooks/useForm';

export const CrearArticulo = ({history}) => {
    
    const dispatch = useDispatch();
    const {active} = useSelector(state => state.article);
    const [formValues, handleInputChange, reset] = useForm({
        titulo:'',
        desc: '',
        img: ''
    }); 
    const {titulo, desc} = formValues;

    useEffect(() => {
        if(active){
            console.log('ya hay activa')
            dispatch(unsetActiveNote());
            reset();
        }
    }, []);

    useEffect(() => {
        (active?.img)?dispatch(activeNote({...formValues, img:active.img})):dispatch(activeNote({...formValues}));
    }, [formValues, dispatch]);

    const handlePictureUploud = () =>{
        document.querySelector('#fileSelector').click();
    }

    const handleFileChange = (e) =>{
        const file = e.target.files[0];
        if (file){
            dispatch(startUploading(file));
        }
    }

    const handleSave = () =>{
        dispatch(startSaveNote(active));
        setTimeout(() => {
            history.replace('/home');
            dispatch(startLoadingNotes());
        }, 1000);
    }

    return (
        <div>
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
                <div class="col-auto" style={{marginLeft:60}}>
                    <button className='btn btn-success' onClick={handleSave}>
                        Guardar
                    </button>
                </div>
            </div>
        </div>
    )
}
