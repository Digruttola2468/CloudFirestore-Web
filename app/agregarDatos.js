import { db } from './firebase.js';
import { collection, addDoc } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-firestore.js";

const formAgregar = document.querySelector("#formAgregar");
const btnAgregar = document.querySelector("#btnAgregar");

btnAgregar.addEventListener("click", async e => {
    e.preventDefault();

    const nombre = formAgregar['nombreAgregar'].value;
    const apellido = formAgregar['apellidoAgregar'].value;
    const fecha = formAgregar['dateAgregar'].value;
    const time = formAgregar['timeAgregar'].value;

    try {
        const docRef = await addDoc(collection(db, "turnos"), {
            nombre: nombre,
            last: apellido,
            fecha: fecha,
            hora: time
        });
        console.log("Document written with ID: ", docRef.id);
    } catch (e) {
        console.error("Error adding document: ", e);
    }

})




