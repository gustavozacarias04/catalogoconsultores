// Lógica da página principal SAREN
document.addEventListener('DOMContentLoaded', async function() {
    const logoutBtn = document.getElementById('logoutBtn');
    const userEmail = document.getElementById('userEmail');
    const loginForm = document.getElementById('loginForm');
    const togglePasswordBtn = document.getElementById('togglePassword');
    const passwordInput = document.getElementById('password');
    const rememberMeCheckbox = document.getElementById('rememberMe');
    const emailInput = document.getElementById('email');
    const errorMessage = document.getElementById('errorMessage');
    
    // Elementos para animações
    const loadingScreen = document.getElementById('loadingScreen');
    const header = document.querySelector('.header');
    const productCards = document.querySelectorAll('.product-card');
    const filterBtns = document.querySelectorAll('.filter-btn');

    // Verificar autenticação primeiro
    async function checkAuthentication() {
        await authManager.waitForInitialization();
        
        if (!authManager.isUserLoggedIn()) {
            console.log('Usuário não autenticado, redirecionando para login...');
            window.location.href = 'login.html';
            return false;
        }
        
        return true;
    }

    // Atualizar informações do usuário
    function updateUserInfo() {
        const user = authManager.getCurrentUser();
        if (user) {
            userEmail.textContent = `Email: ${user.email}`;
        }
    }

    // Carregar dados salvos se "Lembrar-me" estava ativo
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

    // Função para limpar dados salvos
    function clearRememberedData() {
        try {
            localStorage.removeItem('rememberedLogin');
            console.log('Dados do "Lembrar-me" limpos');
        } catch (error) {
            console.error('Erro ao limpar dados:', error);
        }
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

    // Funções de animação e scroll
    function initScrollAnimations() {
        // Scroll suave para links internos
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });

        // Header scroll effect
        window.addEventListener('scroll', () => {
            const currentScrollY = window.scrollY;
            
            if (currentScrollY > 50) {
                header.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.08)';
            } else {
                header.style.boxShadow = '0 1px 3px rgba(0, 0, 0, 0.05)';
            }
        });

        // Intersection Observer para animações de entrada
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -20px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, observerOptions);

        // Observar elementos para animação
        productCards.forEach((card, index) => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(30px)';
            card.style.transition = `all 0.5s ease ${index * 0.1}s`;
            observer.observe(card);
        });
    }

    // Função para melhorar modais
    function initModalAnimations() {
        const modals = document.querySelectorAll('.modal');
        
        modals.forEach(modal => {
            const closeBtn = modal.querySelector('.close');
            
            if (closeBtn) {
                closeBtn.addEventListener('click', () => {
                    modal.style.display = 'none';
                });
            }
            
            // Fechar modal clicando fora
            modal.addEventListener('click', (e) => {
                if (e.target === modal) {
                    modal.style.display = 'none';
                }
            });
        });
    }

    // Função para loading screen
    function hideLoadingScreen() {
        if (loadingScreen) {
            setTimeout(() => {
                loadingScreen.classList.add('hidden');
                setTimeout(() => {
                    loadingScreen.style.display = 'none';
                }, 400);
            }, 1000);
        }
    }

    // Função para animar filtros
    function initFilterAnimations() {
        filterBtns.forEach(btn => {
            btn.addEventListener('click', function() {
                // Remover active de todos os botões
                filterBtns.forEach(b => b.classList.remove('active'));
                // Adicionar active ao clicado
                this.classList.add('active');
            });
        });
    }

    // Event listeners
    if (logoutBtn) {
        logoutBtn.addEventListener('click', async function() {
            const originalText = logoutBtn.textContent;
            logoutBtn.textContent = 'Saindo...';
            logoutBtn.disabled = true;

            try {
                const result = await authManager.signOut();
                
                if (result.success) {
                    console.log('Logout realizado com sucesso');
                    // Fechar modal e atualizar interface
                    document.getElementById('userModal').style.display = 'none';
                } else {
                    alert('Erro ao fazer logout: ' + result.error);
                    logoutBtn.textContent = originalText;
                    logoutBtn.disabled = false;
                }
            } catch (error) {
                alert('Erro inesperado ao fazer logout.');
                console.error('Erro no logout:', error);
                logoutBtn.textContent = originalText;
                logoutBtn.disabled = false;
            }
        });
    }

    if (loginForm) {
        loginForm.addEventListener('submit', async function(e) {
            e.preventDefault();
            
            const email = emailInput.value;
            const password = passwordInput.value;

            clearError();

            if (!email || !password) {
                showError('Por favor, preencha todos os campos.');
                return;
            }

            const submitBtn = loginForm.querySelector('button[type="submit"]');
            const originalText = submitBtn.textContent;
            submitBtn.textContent = 'Entrando...';
            submitBtn.disabled = true;

            try {
                const result = await authManager.signIn(email, password);
                
                if (result.success) {
                    if (rememberMeCheckbox.checked) {
                        saveRememberedData(email, password);
                    } else {
                        clearRememberedData();
                    }
                    console.log('Login realizado com sucesso');
                } else {
                    showError(result.error);
                }
            } catch (error) {
                showError('Erro inesperado. Tente novamente.');
                console.error('Erro no login:', error);
            } finally {
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
            }
        });
    }

    if (togglePasswordBtn) {
        togglePasswordBtn.addEventListener('click', togglePasswordVisibility);
    }

    if (rememberMeCheckbox) {
        rememberMeCheckbox.addEventListener('change', function() {
            if (!this.checked) {
                clearRememberedData();
            }
        });
    }

    // Sobrescrever handlers do AuthManager
    authManager.handleUserLoggedIn = function(user) {
        updateUserInfo();
        console.log('Usuário logado:', user.email);
        // Fechar modal de login se estiver aberto
        const loginModal = document.getElementById('loginModal');
        if (loginModal) {
            loginModal.style.display = 'none';
        }
    };

    authManager.handleUserLoggedOut = function() {
        console.log('Usuário deslogado');
        // Não redirecionar, apenas atualizar interface
    };

    // Inicializar
    async function init() {
        // Verificar autenticação primeiro
        const isAuthenticated = await checkAuthentication();
        
        if (!isAuthenticated) {
            return; // Redirecionamento já foi feito
        }
        
        // Se chegou aqui, usuário está autenticado
        loadRememberedData();
        updateUserInfo();
        
        // Inicializar animações e efeitos
        initScrollAnimations();
        initModalAnimations();
        initFilterAnimations();
        hideLoadingScreen();
    }
    
    init();
});