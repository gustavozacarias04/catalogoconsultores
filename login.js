// Lógica da página de login
document.addEventListener('DOMContentLoaded', async function() {
    const loginForm = document.getElementById('loginForm');
    const errorMessage = document.getElementById('errorMessage');
    const togglePasswordBtn = document.getElementById('togglePassword');
    const passwordInput = document.getElementById('password');
    const rememberMeCheckbox = document.getElementById('rememberMe');
    const emailInput = document.getElementById('email');

    // Verificar se usuário já está logado
    await authManager.redirectToMainIfAuthenticated();

    // Carregar dados salvos se "Lembrar-me" estava ativo
    loadRememberedData();

    // Event listener para o botão de mostrar/ocultar senha
    togglePasswordBtn.addEventListener('click', function() {
        togglePasswordVisibility();
    });

    // Event listener para o checkbox "Lembrar-me"
    rememberMeCheckbox.addEventListener('change', function() {
        if (!this.checked) {
            // Se desmarcou, limpar dados salvos
            clearRememberedData();
        }
    });

    // Event listener para o formulário de login
    loginForm.addEventListener('submit', async function(e) {
        e.preventDefault();
        
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        // Limpar mensagens de erro
        clearError();

        // Validar campos
        if (!email || !password) {
            showError('Por favor, preencha todos os campos.');
            return;
        }

        // Mostrar loading
        const submitBtn = loginForm.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        submitBtn.textContent = 'Entrando...';
        submitBtn.disabled = true;

        try {
            // Tentar fazer login
            const result = await authManager.signIn(email, password);
            
            if (result.success) {
                // Login bem-sucedido - salvar dados se "Lembrar-me" estiver marcado
                if (rememberMeCheckbox.checked) {
                    saveRememberedData(email, password);
                } else {
                    clearRememberedData();
                }
                
                // Redirecionamento será feito pelo auth state listener
                console.log('Redirecionando para página principal...');
            } else {
                showError(result.error);
            }
        } catch (error) {
            showError('Erro inesperado. Tente novamente.');
            console.error('Erro no login:', error);
        } finally {
            // Restaurar botão
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
        }
    });


    // Função para mostrar mensagens de erro
    function showError(message) {
        errorMessage.textContent = message;
        errorMessage.style.display = 'block';
    }

    // Função para limpar mensagens de erro
    function clearError() {
        errorMessage.textContent = '';
        errorMessage.style.display = 'none';
    }

    // Função para alternar visibilidade da senha
    function togglePasswordVisibility() {
        if (passwordInput.type === 'password') {
            passwordInput.type = 'text';
            togglePasswordBtn.classList.add('active');
            togglePasswordBtn.title = 'Ocultar senha';
        } else {
            passwordInput.type = 'password';
            togglePasswordBtn.classList.remove('active');
            togglePasswordBtn.title = 'Mostrar senha';
        }
    }

    // Função para salvar dados no localStorage
    function saveRememberedData(email, password) {
        try {
            const data = {
                email: email,
                password: password,
                timestamp: Date.now()
            };
            localStorage.setItem('rememberedLogin', JSON.stringify(data));
            console.log('Dados salvos para "Lembrar-me"');
        } catch (error) {
            console.error('Erro ao salvar dados:', error);
        }
    }

    // Função para carregar dados salvos
    function loadRememberedData() {
        try {
            const savedData = localStorage.getItem('rememberedLogin');
            if (savedData) {
                const data = JSON.parse(savedData);
                
                // Verificar se os dados não são muito antigos (30 dias)
                const thirtyDaysAgo = Date.now() - (30 * 24 * 60 * 60 * 1000);
                if (data.timestamp > thirtyDaysAgo) {
                    emailInput.value = data.email;
                    passwordInput.value = data.password;
                    rememberMeCheckbox.checked = true;
                    console.log('Dados carregados do "Lembrar-me"');
                } else {
                    // Dados muito antigos, limpar
                    clearRememberedData();
                }
            }
        } catch (error) {
            console.error('Erro ao carregar dados salvos:', error);
            clearRememberedData();
        }
    }

    // Função para limpar dados salvos
    function clearRememberedData() {
        try {
            localStorage.removeItem('rememberedLogin');
            console.log('Dados do "Lembrar-me" limpos');
        } catch (error) {
            console.error('Erro ao limpar dados:', error);
        }
    }

    // Sobrescrever handlers do AuthManager para esta página
    authManager.handleUserLoggedIn = function(user) {
        console.log('Usuário logado na página de login:', user.email);
        // Aguardar um pouco para garantir que o login foi processado
        setTimeout(() => {
            console.log('Redirecionando para site principal...');
            window.location.href = 'index.html';
        }, 500);
    };

    authManager.handleUserLoggedOut = function() {
        console.log('Usuário deslogado na página de login');
        // Não fazer nada, já estamos na página de login
    };
});
