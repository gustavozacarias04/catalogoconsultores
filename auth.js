// Funções de autenticação
class AuthManager {
    constructor() {
        this.auth = firebase.auth();
        this.isInitialized = false;
        this.setupAuthStateListener();
    }

    // Configurar listener para mudanças de estado de autenticação
    setupAuthStateListener() {
        this.auth.onAuthStateChanged((user) => {
            console.log('Auth state changed:', user ? 'User logged in' : 'User logged out');
            this.isInitialized = true;
            
            if (user) {
                // Usuário está logado
                console.log('Usuário logado:', user.email);
                this.handleUserLoggedIn(user);
            } else {
                // Usuário não está logado
                console.log('Usuário não logado');
                this.handleUserLoggedOut();
            }
        });
    }

    // Fazer login com email e senha
    async signIn(email, password) {
        try {
            const userCredential = await this.auth.signInWithEmailAndPassword(email, password);
            console.log('Login realizado com sucesso:', userCredential.user.email);
            return { success: true, user: userCredential.user };
        } catch (error) {
            console.error('Erro no login:', error);
            return { success: false, error: this.getErrorMessage(error.code) };
        }
    }


    // Fazer logout
    async signOut() {
        try {
            await this.auth.signOut();
            console.log('Logout realizado com sucesso');
            return { success: true };
        } catch (error) {
            console.error('Erro no logout:', error);
            return { success: false, error: 'Erro ao fazer logout' };
        }
    }

    // Verificar se usuário está logado
    isUserLoggedIn() {
        return this.isInitialized && this.auth.currentUser !== null;
    }

    // Obter usuário atual
    getCurrentUser() {
        return this.auth.currentUser;
    }

    // Aguardar inicialização do Firebase
    async waitForInitialization() {
        return new Promise((resolve) => {
            if (this.isInitialized) {
                resolve();
            } else {
                let attempts = 0;
                const maxAttempts = 50; // 5 segundos máximo
                
                const checkInitialization = () => {
                    attempts++;
                    if (this.isInitialized) {
                        resolve();
                    } else if (attempts >= maxAttempts) {
                        console.warn('Timeout na inicialização do Firebase, continuando mesmo assim...');
                        resolve();
                    } else {
                        setTimeout(checkInitialization, 100);
                    }
                };
                checkInitialization();
            }
        });
    }

    // Converter códigos de erro do Firebase para mensagens amigáveis
    getErrorMessage(errorCode) {
        const errorMessages = {
            'auth/user-not-found': 'Usuário não encontrado.',
            'auth/wrong-password': 'Senha incorreta.',
            'auth/invalid-email': 'Email inválido.',
            'auth/user-disabled': 'Esta conta foi desabilitada.',
            'auth/too-many-requests': 'Muitas tentativas. Tente novamente mais tarde.',
            'auth/network-request-failed': 'Erro de conexão. Verifique sua internet.',
            'auth/invalid-credential': 'Credenciais inválidas.'
        };
        
        return errorMessages[errorCode] || 'Erro desconhecido. Tente novamente.';
    }

    // Redirecionar para página de login se não estiver logado
    async redirectToLoginIfNotAuthenticated() {
        await this.waitForInitialization();
        if (!this.isUserLoggedIn()) {
            console.log('Usuário não autenticado, redirecionando para login.html');
            window.location.href = 'login.html';
        }
    }

    // Redirecionar para página principal se estiver logado
    async redirectToMainIfAuthenticated() {
        await this.waitForInitialization();
        if (this.isUserLoggedIn()) {
            console.log('Usuário já logado, redirecionando para index.html');
            window.location.href = 'index.html';
        }
    }

    // Handlers para mudanças de estado (podem ser sobrescritos)
    handleUserLoggedIn(user) {
        // Implementar em cada página conforme necessário
    }

    handleUserLoggedOut() {
        // Implementar em cada página conforme necessário
    }
}

// Instância global do gerenciador de autenticação
const authManager = new AuthManager();
