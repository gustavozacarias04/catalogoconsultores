# 🚨 INSTRUÇÕES DE SEGURANÇA CRÍTICAS

## ⚠️ ANTES DE FAZER PUSH PARA O GITHUB:

### 1. **Proteja suas credenciais do Firebase**

```bash
# 1. Adicione o arquivo de configuração ao .gitignore
echo "firebase-config.js" >> .gitignore

# 2. Remova o arquivo do controle de versão (se já foi commitado)
git rm --cached firebase-config.js

# 3. Faça commit das mudanças
git add .gitignore
git commit -m "Adicionar firebase-config.js ao .gitignore"
```

### 2. **Configure o Firebase Console**

1. Acesse [Firebase Console](https://console.firebase.google.com)
2. Vá em **Authentication** > **Settings** > **Authorized domains**
3. Adicione apenas seu domínio do GitHub Pages
4. **REMOVA** `localhost` da lista de domínios autorizados

### 3. **Configure Regras de Segurança**

No Firebase Console, vá em **Firestore Database** > **Rules**:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /{document=**} {
      allow read, write: if request.auth != null;
    }
  }
}
```

### 4. **Monitore Acessos**

1. Ative **Security Rules** no Firebase Console
2. Monitore logs de autenticação
3. Configure alertas para tentativas suspeitas

## 🔒 **Nunca Compartilhe:**

- ❌ Chaves de API do Firebase
- ❌ Configurações de projeto
- ❌ Senhas de usuários
- ❌ Tokens de acesso

## ✅ **Sempre Faça:**

- ✅ Use domínios específicos
- ✅ Configure regras restritivas
- ✅ Monitore logs de acesso
- ✅ Mantenha backups das configurações

## 📞 **Se Alguém Roubar Suas Credenciais:**

1. **IMEDIATAMENTE** revogue as chaves no Firebase Console
2. Atualize as regras de segurança
3. Monitore logs de acesso
4. Considere migrar para um novo projeto Firebase

## 🛡️ **Proteção Adicional:**

- Use autenticação de dois fatores no Firebase
- Configure alertas de segurança
- Monitore uso de API
- Mantenha logs de auditoria
