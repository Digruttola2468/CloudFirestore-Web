import { db } from './firebase.js';
import { collection, getDocs, query } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-firestore.js";

const q = query(collection(db, "turnos"));

const ulListaDatos = document.querySelector(".listaDatos");

const querySnapshot = await getDocs(q);
querySnapshot.forEach((doc) => {

  const liItem = document.createElement("LI");
  liItem.innerHTML = `
  <b>Nombre: </b> ${doc.data().nombre}  
  <b>Apellido: </b> ${doc.data().last} 
  <b>Fecha: </b> ${doc.data().fecha} 
  <b>Hora: </b> ${doc.data().hora} `;
  ulListaDatos.appendChild(liItem);

  console.log(doc.id, " => ", doc.data().born);
});