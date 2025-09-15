// Aplicação principal SAREN
document.addEventListener('DOMContentLoaded', async function() {
    // Elementos do DOM
    const loginLink = document.getElementById('loginLink');
    const searchLink = document.querySelector('a.nav-link:first-of-type');
    const loginModal = document.getElementById('loginModal');
    const userModal = document.getElementById('userModal');
    const searchModal = document.getElementById('searchModal');
    const closeButtons = document.querySelectorAll('.close');
    const filterButtons = document.querySelectorAll('.filter-btn');
    
    // Elementos de pesquisa
    const searchInput = document.getElementById('searchInput');
    const searchBtn = document.getElementById('searchBtn');
    const searchResults = document.getElementById('searchResults');
    const suggestionTags = document.querySelectorAll('.suggestion-tag');
    
    // Verificar autenticação e redirecionar se necessário
    async function checkAuthentication() {
        console.log('Aguardando inicialização do Firebase...');
        await authManager.waitForInitialization();
        console.log('Firebase inicializado');
        
        const isLoggedIn = authManager.isUserLoggedIn();
        console.log('Usuário logado?', isLoggedIn);
        
        if (!isLoggedIn) {
            console.log('Usuário não autenticado, redirecionando para login...');
            window.location.href = 'login.html';
            return false;
        }
        
        console.log('Usuário autenticado com sucesso');
        return true;
    }
    
    
    // Verificar se usuário está logado
    function checkUserStatus() {
        if (authManager.isUserLoggedIn()) {
            const user = authManager.getCurrentUser();
            console.log('Configurando interface para usuário logado:', user.email);
            
            // Atualizar o texto do link de login para mostrar o email
            if (loginLink) {
                loginLink.textContent = user.email.split('@')[0].toUpperCase();
                loginLink.onclick = () => userModal.style.display = 'block';
            }
            
            // Atualizar o email no modal do usuário
            const userEmailElement = document.getElementById('userEmail');
            if (userEmailElement) {
                userEmailElement.textContent = `Email: ${user.email}`;
            }
            
            // Verificar se o botão de logout existe
            const logoutBtn = document.getElementById('logoutBtn');
            if (logoutBtn) {
                console.log('Botão de logout encontrado e configurado');
            } else {
                console.error('Botão de logout não encontrado!');
            }
        } else {
            // Se chegou aqui sem estar logado, redirecionar
            window.location.href = 'login.html';
        }
    }
    
    // Event listeners para modais
    loginLink.addEventListener('click', function(e) {
        e.preventDefault();
        if (authManager.isUserLoggedIn()) {
            userModal.style.display = 'block';
        } else {
            loginModal.style.display = 'block';
        }
    });
    
    // Event listener para abrir modal de pesquisa
    if (searchLink) {
        searchLink.addEventListener('click', function(e) {
            e.preventDefault();
            searchModal.style.display = 'block';
            // Focar no input de pesquisa
            setTimeout(() => {
                if (searchInput) {
                    searchInput.focus();
                }
            }, 100);
        });
    }
    
    // Fechar modais
    closeButtons.forEach(button => {
        button.addEventListener('click', function() {
            loginModal.style.display = 'none';
            userModal.style.display = 'none';
            searchModal.style.display = 'none';
        });
    });
    
    // Fechar modal clicando fora
    window.addEventListener('click', function(e) {
        if (e.target === loginModal) {
            loginModal.style.display = 'none';
        }
        if (e.target === userModal) {
            userModal.style.display = 'none';
        }
        if (e.target === searchModal) {
            searchModal.style.display = 'none';
        }
    });
    
    // Filtros de produtos
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remover classe active de todos os botões
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Adicionar classe active ao botão clicado
            this.classList.add('active');
            
            // Filtrar produtos
            const category = this.getAttribute('data-category');
            filterProducts(category);
        });
    });
    
    // Função para executar pesquisa
    function performSearch() {
        const query = searchInput.value.trim();
        console.log('Pesquisando por:', query);
        
        if (query === '') {
            searchResults.innerHTML = '<div class="no-results"><h3>Digite algo para pesquisar</h3></div>';
            return;
        }
        
        const results = searchProducts(query);
        renderSearchResults(results, 'searchResults');
    }
    
    // Event listeners para pesquisa
    if (searchBtn) {
        searchBtn.addEventListener('click', function(e) {
            e.preventDefault();
            performSearch();
        });
    }
    
    // Pesquisar ao pressionar Enter
    if (searchInput) {
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                e.preventDefault();
                performSearch();
            }
        });
    }
    
    // Event listeners para tags de sugestão
    suggestionTags.forEach(tag => {
        tag.addEventListener('click', function() {
            const searchTerm = this.getAttribute('data-search');
            searchInput.value = searchTerm;
            performSearch();
        });
    });
    
    // Event listeners para resultados de pesquisa (filtrar por categoria)
    document.addEventListener('click', function(e) {
        if (e.target.closest('.search-result-item')) {
            const category = e.target.closest('.search-result-item').getAttribute('data-category');
            if (category) {
                // Fechar modal de pesquisa
                searchModal.style.display = 'none';
                // Filtrar produtos por categoria
                filterProducts(category);
                // Ativar botão de filtro correspondente
                filterButtons.forEach(btn => btn.classList.remove('active'));
                const categoryBtn = document.querySelector(`[data-category="${category}"]`);
                if (categoryBtn) {
                    categoryBtn.classList.add('active');
                }
            }
        }
    });
    
    // Event listener para logout
    document.addEventListener('click', function(e) {
        if (e.target && e.target.id === 'logoutBtn') {
            e.preventDefault();
            console.log('Botão de logout clicado');
            
            // Mostrar feedback visual
            e.target.textContent = 'Saindo...';
            e.target.disabled = true;
            
            authManager.signOut().then(result => {
                if (result.success) {
                    console.log('Logout realizado com sucesso');
                    // O handleUserLoggedOut será chamado automaticamente pelo Firebase
                } else {
                    console.error('Erro no logout:', result.error);
                    // Restaurar botão em caso de erro
                    e.target.textContent = 'Logout';
                    e.target.disabled = false;
                }
            }).catch(error => {
                console.error('Erro no logout:', error);
                // Restaurar botão em caso de erro
                e.target.textContent = 'Logout';
                e.target.disabled = false;
            });
        }
    });
    
    
    // Handlers de autenticação
    authManager.handleUserLoggedIn = function(user) {
        console.log('Usuário logado:', user.email);
        checkUserStatus();
        userModal.style.display = 'none';
        loginModal.style.display = 'none';
    };
    
    authManager.handleUserLoggedOut = function() {
        console.log('Usuário deslogado, redirecionando para login...');
        
        // Fechar todos os modais
        userModal.style.display = 'none';
        loginModal.style.display = 'none';
        searchModal.style.display = 'none';
        
        // Limpar dados do localStorage se existirem
        localStorage.removeItem('sarenCart');
        localStorage.removeItem('rememberedEmail');
        localStorage.removeItem('rememberedPassword');
        
        // Redirecionar para página de login
        setTimeout(() => {
            window.location.href = 'login.html';
        }, 500);
    };
    
    // Ocultar tela de carregamento
    function hideLoadingScreen() {
        console.log('Tentando ocultar tela de carregamento...');
        const loadingScreen = document.getElementById('loadingScreen');
        if (loadingScreen) {
            console.log('Tela de carregamento encontrada, ocultando...');
            loadingScreen.classList.add('hidden');
            setTimeout(() => {
                loadingScreen.style.display = 'none';
                console.log('Tela de carregamento ocultada com sucesso');
            }, 300);
        } else {
            console.log('Tela de carregamento não encontrada');
        }
    }
    
    // Função de fallback para ocultar tela de carregamento
    function forceHideLoadingScreen() {
        console.log('Forçando ocultação da tela de carregamento...');
        const loadingScreen = document.getElementById('loadingScreen');
        if (loadingScreen) {
            loadingScreen.style.display = 'none';
            console.log('Tela de carregamento forçadamente ocultada');
        }
    }

    // Inicializar aplicação
    async function init() {
        console.log('Iniciando aplicação...');
        
        // Timeout de segurança para ocultar tela de carregamento
        const safetyTimeout = setTimeout(() => {
            console.log('Timeout de segurança ativado, forçando ocultação da tela de carregamento');
            forceHideLoadingScreen();
        }, 10000); // 10 segundos
        
        try {
            // Verificar autenticação primeiro
            const isAuthenticated = await checkAuthentication();
            console.log('Autenticação verificada:', isAuthenticated);
            
            if (!isAuthenticated) {
                console.log('Usuário não autenticado, saindo da inicialização');
                clearTimeout(safetyTimeout);
                return; // Redirecionamento já foi feito
            }
            
            // Se chegou aqui, usuário está autenticado
            console.log('Usuário autenticado, configurando interface...');
            checkUserStatus();
            
            // Ocultar tela de carregamento
            console.log('Ocultando tela de carregamento...');
            hideLoadingScreen();
            
            // Limpar timeout de segurança
            clearTimeout(safetyTimeout);
        } catch (error) {
            console.error('Erro na inicialização:', error);
            clearTimeout(safetyTimeout);
            forceHideLoadingScreen();
        }
    }
    
    init();
});
