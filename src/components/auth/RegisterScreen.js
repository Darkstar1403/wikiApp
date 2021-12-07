import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { startRegister } from "../../actions/auth";
import { removeError } from "../../actions/ui";
import { useForm } from "../../hooks/useForm";



export const RegisterScreen = () => {

  const dispatch = useDispatch();
//useSelector te trae información en tiempo real del state de
//todos tus reducers de la aplicación

  const [admin, setAdmin] = useState(false);

  const {msgError, loading} = useSelector(state => state.ui);

  const [formValues, handleInputChange] = useForm({name:'', email:'', password:'', passwordConfirm:''})
  
  const {name, email, password, passwordConfirm} = formValues;

  const handleRegister = (e) =>{
    e.preventDefault();
    if(isFormValid()){
      dispatch(startRegister(email, password, name, admin))
    }
  }

  const isFormValid = () =>{
    if(!/^[a-zA-Z]\w*$/.test(name.trim())){
      Swal.fire('Error', 'El nombre solo tiene una palabra', 'error');
      return false;
    }
    else if(!/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)+$/.test(email)){
      Swal.fire('Error', 'Email no valido', 'error');
      return false;
    }
    else if(!/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password)){
      Swal.fire('Error', 'Contraseña incorrecta', 'error');
      return false
    }
    else if(password !== passwordConfirm){
      Swal.fire('Error', 'Las contraseñas no concuerdan', 'error');
      return false;
    }
    dispatch(removeError());
    return true;
  }

  return (
    <>
      <h3 className='auth__title'>Registro</h3>
      <form onSubmit={handleRegister} className='animate__animated animate__fadeIn animate__faster'>
        {msgError && (<div className='auth__alert-error'>
          {msgError}
        </div>)}
        <input className='auth__input' type="text" placeholder="Nombre" name="name" value={name} onChange={handleInputChange} />
        <input className='auth__input' type="email" placeholder="Email" name="email" value={email} onChange={handleInputChange}/>
        <input className='auth__input' type="password" placeholder="Contraseña" name="password" value={password} onChange={handleInputChange}/>
        <input className='auth__input' type="password" placeholder="Confirmación de Contraseña" name="passwordConfirm" value={passwordConfirm} onChange={handleInputChange}/>
        <input className='me-3' type="checkbox" checked={admin} onChange={()=>{console.log(admin); setAdmin(a=>!a)}} />
        Administrador
        <button disabled={loading} className='btn btn-primary btn-block mb-5 mt-3' type="submit">Registrar</button>
        <Link className='link' to='/auth/login'>
          ¿Ya estas registrado?
        </Link>
      </form>
    </>
  );
};
