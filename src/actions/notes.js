import { addDoc, collection, updateDoc, doc, deleteDoc } from "firebase/firestore";
import Swal from "sweetalert2";
import { db } from "../components/firebase/firebase-config";
import { fileUpload } from "../helpers/fileUpload";
import { loadNotes, loadNote } from "../helpers/loadNotes";
import { types } from "../types/types";

export const startNewNote = () =>{
    return async(dispatch, getState) =>{
        try{
            const {uid} = getState().auth;
            const newNote = {
                title: '',
                body: '',
                date: new Date().getTime()
            }
            
            const docRef = await addDoc(collection(db, `${uid}/journal/notes`),newNote);
            dispatch(activeNote(docRef.id, newNote));
            dispatch(addNewNotes(docRef.id, newNote));
        }
        catch(error){
            Swal.fire('Error', 'Registrar nuevo articulo error', 'error');
        }

    }
}

export const loadActiveNote = (id) =>{
    return async(dispatch) =>{
        try {
            const note = await loadNote(id);
            dispatch(activeNote(note));
            console.log(note);
        } catch (error) {
            Swal.fire('Error', 'Error al cargar el articulo', 'error');
        }
    }
}

export const activeNote = (note) => ({
    type: types.articleActive,
    payload: {
        ...note
    }
});

export const unsetActiveNote = () => ({type: types.articleUnsetActive});

export const addNewNotes = (id, note) =>({
    type:types.articleAddNew,
    payload:{
        id,
        ...note
    }
})

export const startLoadingNotes = () =>{
    return async(dispatch) =>{
        try{
            const notes = await loadNotes();
            console.log(notes);
            dispatch(setNotes(notes));
        }
        catch(error){
            Swal.fire('Error', 'La carga de los articulos falló', 'error');
        }
    }
}

export const setNotes = (notes) =>({
    type: types.articleLoad,
    payload: notes
});

export const startSaveNote = (note) =>{
    return async() =>{
        try{
            if(!note.img){
                delete note.img;
            }
            const noteToFirestore = {...note};
            //asi es como eliminas una llave de un objeto
            delete noteToFirestore.id;
            const docRef = await addDoc(collection(db, `/articles`),note);
            console.log(docRef);
            Swal.fire('Articulo agregado', note.title, 'success')
        }
        catch(error){
            Swal.fire('Error', 'Error al guardar el articulo', 'error');
        }

    }
}

export const startUpdateNote = (note) =>{
    return async(dispatch) =>{
        try{
            if(!note.img){
                delete note.img;
            }
            const noteToFirestore = {...note};
            //asi es como eliminas una llave de un objeto
            delete noteToFirestore.id;
            const refDoc = doc(db, `/articles/${note.id}`);
            await updateDoc(refDoc, noteToFirestore);
            Swal.fire('Se ha modificado', note.title, 'success');
            dispatch(activeNote(note));
        }
        catch(error){
            Swal.fire('Error', 'Saving note failed', 'error');
        }

    }
}

export const refreshNote = (id, note) =>({
    type: types.articleUpdated,
    payload : {
        id, 
        note: {
            id,
            ...note
        }
    }
});
//todos los actions start se refieren a tareas asincronas
export const startUploading = (file) =>{
    return async(dispatch, getState) =>{
        const {active} = getState().article;
        Swal.fire({
            title: 'Uploading...',
            text: 'Please wait...',
            allowOutsideClick: false,
            showConfirmButton: false,
            willOpen: () =>{
                Swal.showLoading();
            }
        });
        const fileUrl = await fileUpload(file);
        active.img = fileUrl;

        dispatch(activeNote(active))

        Swal.close();
    }
}

export const startDeleting = (id) =>{
    return async(dispatch, getState) =>{
        try{
            const {uid} = getState().auth;
            const refDoc = doc(db, `/${uid}/journal/notes/${id}`);
            await deleteDoc(refDoc);
            dispatch(deleteNote(id));
            Swal.fire('Deleted', 'Eliminado correctamente', 'success')
        }
        catch(error){
            Swal.fire('Error', 'Error al eliminar el articulo', 'error');
        }

    }
}

export const deleteNote = (id) => ({
    type: types.articleDelete,
    payload: id
});

export const noteLogout = () =>({
    type:types.articleLogout
});