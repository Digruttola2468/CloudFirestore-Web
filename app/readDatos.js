import { db } from './firebase.js';
import { deleteDoc, doc } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-firestore.js";

const divContainerDatos = document.querySelector(".listaDatos");

export function addDocumentHtml( dato ) {
  const containerItem = document.createElement("div");
  containerItem.classList.add("itemDatos");
  containerItem.classList.add(dato.id);
  containerItem.innerHTML = 
  `
  <span>
  <b>Nombre: </b> ${dato.data().nombre}  
  <b>Apellido: </b> ${dato.data().last} 
  <b>Fecha: </b> ${dato.data().fecha} 
  <b>Hora: </b> ${dato.data().hora} 
  </span>
  `;
  

  const btnEleminar = document.createElement("button");
  btnEleminar.innerHTML = '<i class="fa fa-trash"></i>';
  const btnModificar = document.createElement("button");
  btnModificar.innerHTML = '<i class="fa fa-pen">';

  containerItem.appendChild(btnModificar);
  containerItem.appendChild(btnEleminar);

  divContainerDatos.appendChild(containerItem);

  btnEleminar.addEventListener('click', async e => {
    try {
      await deleteDoc(doc(db, "turnos", containerItem.classList[1]));
      containerItem.classList.add("ocultar");
    } catch (error) {
      console.log(error);
    }
  });
  btnModificar.addEventListener('click', e => {
    console.log("Modificando: " + containerItem.classList[1]);
  });
} 


