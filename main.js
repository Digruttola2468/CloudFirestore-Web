import { collection, query, where, onSnapshot } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-firestore.js";

import { db } from'./app/firebase.js';
import './app/agregarDatos.js'
import { addDocumentHtml } from './app/readDatos.js'

const q = query(collection(db, "turnos"));

const unsubscribe = onSnapshot(q, (snapshot) => {
  snapshot.docChanges().forEach((change) => {
    if (change.type === "added") {
        addDocumentHtml(change.doc);
        console.log("New Turno: ", change.doc.data());
    }
    if (change.type === "modified") {
        console.log("Modified Turno: ", change.doc.data());
    }
    if (change.type === "removed") {
        
        console.log("Removed Turno: ", change.doc.data());
    }
  });
});