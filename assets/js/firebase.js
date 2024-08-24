

import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-auth.js"
import { getDatabase } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-database.js"
import { getStorage} from "https://www.gstatic.com/firebasejs/9.6.10/firebase-storage.js"

const firebaseConfig = {
  apiKey: "AIzaSyAm-OpTUE8Az5yeyoORb8fjiNrhpH5sbQQ",
  authDomain: "tcc-3a.firebaseapp.com",
  databaseURL: "https://tcc-3a-default-rtdb.firebaseio.com",
  projectId: "tcc-3a",
  storageBucket: "tcc-3a.appspot.com",
  messagingSenderId: "287360685081",
  appId: "1:287360685081:web:4f60129ffa80540695c688",
  measurementId: "G-49EXPN0JX6"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const database = getDatabase(app)
const storage = getStorage(app)
export {app, auth, database, storage}
