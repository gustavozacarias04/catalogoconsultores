// Configuração do Firebase
// IMPORTANTE: Substitua estas configurações pelas suas próprias do Firebase Console
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCapi9n93yJaDJNjbSGqk09_L5AEkTbEmM",
    authDomain: "sitelinks-ecbd4.firebaseapp.com",
    projectId: "sitelinks-ecbd4",
    storageBucket: "sitelinks-ecbd4.firebasestorage.app",
    messagingSenderId: "168001184505",
    appId: "1:168001184505:web:7e5420fc8dddee3b82f828",
    measurementId: "G-GYMSZBZ34E"
  };

// Inicializar Firebase
firebase.initializeApp(firebaseConfig);

// Referência para o serviço de autenticação
const auth = firebase.auth();
