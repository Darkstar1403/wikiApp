import Swal from 'sweetalert2';
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import { googleAuthProvider } from '../components/firebase/firebase-config';
import {types} from '../types/types';
import { finishLoading, startLoading } from './ui';
import { noteLogout } from './notes';

export const startLoginEmailPassword = (email, password) =>{
    return (dispatch) =>{
        dispatch(startLoading());
        const auth = getAuth();
        return signInWithEmailAndPassword(auth, email, password)
        .then(({user})=>{
            if(user.photoURL){
                console.log(user.photoURL);
            }
            (user.photoURL)?dispatch(login(user.uid, user.displayName, true)):dispatch(login(user.uid, user.displayName));
            dispatch(finishLoading());
            Swal.fire(
                "Has ingresado a la mejor wiki",
                'Presionaste el botón',
                'success'
              );
        }).catch(e =>{
            console.log(e);
            dispatch(finishLoading());
            Swal.fire('Error', e.message, 'error');
        });
        
    }
}

export const  startRegister = (email, password, name, admin) =>{
    return (dispatch) =>{
        dispatch(startLoading());
        const auth = getAuth();
        let url = null;
        if(admin){
            url = 'admin'
        }
        createUserWithEmailAndPassword(auth, email, password).then(async ({user})=>{
            await updateProfile(user, {displayName:name, photoURL: url});
            dispatch(login(user.uid, user.displayName, (url)?true:false));
            dispatch(finishLoading());
            Swal.fire(
                "Te has registrado en la mejor wiki",
                'Presionaste el botón',
                'success'
              );
        }).catch(e =>{
            console.log(e);
            dispatch(finishLoading());
            Swal.fire('Error', e.message, 'error');
        })
        
    }
}

export const startGoogleLogin = () =>{
    return (dispatch) =>{
        dispatch(startLoading());
        const auth = getAuth();
        signInWithPopup(auth, googleAuthProvider)
            .then(({user}) =>{
                dispatch(login(user.uid, user.displayName))
            }).catch(e => console.log(e));
            dispatch(finishLoading());
        
    }
}

export const login = (uid, displayName, admin = false) =>(
    {
        type:types.login,
        payload: {
            uid,
            displayName,
            admin
        }
    }
)

export const startLogout = () =>{
    return async(dispatch) =>{
        const auth = getAuth();
       await signOut(auth);
       dispatch(logout());
       dispatch(noteLogout());
    }
}

export const logout = () =>({
    type:types.logout
})