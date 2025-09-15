# 🔒 Guia de Segurança do Firebase

## ⚠️ IMPORTANTE: Configurações de Segurança

### 1. **Configurar Domínios Autorizados no Firebase**

1. Acesse o [Firebase Console](https://console.firebase.google.com)
2. Selecione seu projeto
3. Vá em **Authentication** > **Settings** > **Authorized domains**
4. Adicione apenas:
   - `seu-usuario.github.io` (seu domínio do GitHub Pages)
   - `localhost` (apenas para desenvolvimento local)
5. **REMOVA** qualquer domínio não autorizado

### 2. **Configurar Regras de Segurança do Firestore**

No Firebase Console, vá em **Firestore Database** > **Rules**:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Permitir apenas leitura para usuários autenticados
    match /{document=**} {
      allow read, write: if request.auth != null;
    }
  }
}
```

### 3. **Configurar Regras de Storage (se usar)**

No Firebase Console, vá em **Storage** > **Rules**:

```javascript
rules_version = '2';
service firebase.storage {
  match /b/{bucket}/o {
    match /{allPaths=**} {
      allow read, write: if request.auth != null;
    }
  }
}
```

### 4. **Atualizar Domínio no Código**

No arquivo `firebase-config.js`, linha 17, substitua:
```javascript
'seu-usuario.github.io', // Substitua pelo seu domínio real
```

Pelo seu domínio real do GitHub Pages.

### 5. **Configurar Usuários de Teste**

1. No Firebase Console, vá em **Authentication** > **Users**
2. Adicione usuários de teste manualmente
3. Configure senhas seguras
4. **NÃO** use emails pessoais importantes

### 6. **Monitoramento de Segurança**

1. Ative **Security Rules** no Firebase Console
2. Monitore logs de autenticação
3. Configure alertas para tentativas de acesso suspeitas

## 🚨 **Nunca Faça:**

- ❌ Compartilhe chaves de API em repositórios públicos
- ❌ Use domínios genéricos como `*` nas regras
- ❌ Deixe regras de Firestore muito permissivas
- ❌ Use credenciais de produção em desenvolvimento

## ✅ **Sempre Faça:**

- ✅ Use domínios específicos nas configurações
- ✅ Configure regras de segurança restritivas
- ✅ Monitore logs de acesso
- ✅ Mantenha backups das configurações
- ✅ Use variáveis de ambiente para desenvolvimento

## 📞 **Em Caso de Problemas:**

1. Revogue imediatamente as chaves de API
2. Atualize as regras de segurança
3. Monitore logs de acesso
4. Considere migrar para um novo projeto Firebase
