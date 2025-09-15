// Configuração do Firebase - ARQUIVO DE EXEMPLO
// IMPORTANTE: 
// 1. Copie este arquivo para firebase-config.js
// 2. Substitua as configurações pelas suas próprias do Firebase Console
// 3. NUNCA commite o arquivo firebase-config.js real para o repositório

const firebaseConfig = {
    apiKey: "SUA_API_KEY_AQUI",
    authDomain: "seu-projeto.firebaseapp.com",
    projectId: "seu-projeto-id",
    storageBucket: "seu-projeto.appspot.com",
    messagingSenderId: "123456789",
    appId: "sua-app-id",
    measurementId: "G-XXXXXXXXXX"
};

// Validação de domínio para segurança
function validateDomain() {
  const allowedDomains = [
    'seu-usuario.github.io', // Substitua pelo seu domínio do GitHub Pages
    'localhost',
    '127.0.0.1'
  ];
  
  const currentDomain = window.location.hostname;
  
  if (!allowedDomains.includes(currentDomain)) {
    console.error('Domínio não autorizado:', currentDomain);
    document.body.innerHTML = `
      <div style="display: flex; justify-content: center; align-items: center; height: 100vh; font-family: Arial, sans-serif;">
        <div style="text-align: center; padding: 20px; border: 1px solid #ccc; border-radius: 8px;">
          <h2>Acesso Negado</h2>
          <p>Este site só pode ser acessado através de domínios autorizados.</p>
        </div>
      </div>
    `;
    return false;
  }
  
  return true;
}

// Verificar domínio antes de inicializar o Firebase
if (!validateDomain()) {
  throw new Error('Domínio não autorizado');
}

// Inicializar Firebase
firebase.initializeApp(firebaseConfig);

// Referência para o serviço de autenticação
const auth = firebase.auth();
