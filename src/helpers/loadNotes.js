import { doc ,getDoc ,getDocs, collection, orderBy, query } from "firebase/firestore"
import Swal from "sweetalert2";
import { db } from "../components/firebase/firebase-config"

export const loadNotes = async() =>{
    const refDoc = collection(db, `/articles`);
    const q = query(refDoc, orderBy('titulo', 'desc'))
    const docsSnap = await getDocs(q);
    const notes =[];

    docsSnap.forEach(snapChild =>{
        notes.push({
            id: snapChild.id,
            ...snapChild.data()
        })
    });
    return notes
}

export const loadNote = async(id) =>{
    try {
        const refDoc = doc(db, `/articles/${id}`);
        const docsSnap = await getDoc(refDoc);
    
        return ({
            id:docsSnap.id,
            ...docsSnap.data()
        })
    } catch (error) {
        Swal.fire('Error', 'Error al cargar el articulo', 'error')
    }

}