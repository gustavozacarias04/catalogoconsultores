// Dados dos produtos SAREN
const products = [
    {
        id: 1,
        name: "MARCA PESSOAL",
        category: "start",
        image: "1.png",
        links: [
            { text: "Download", url: "#", primary: true },
            { text: "Preview", url: "#", primary: false }
        ]
    },
    {
        id: 2,
        name: "CARTÃO DE VISITA",
        category: "start",
        image: "2.png",
        links: [
            { text: "Download", url: "#", primary: true }
        ]
    },
    {
        id: 3,
        name: "CARTÃO DIGITAL",
        category: "start",
        image: "3.png",
        links: [
            { text: "Acessar", url: "#", primary: true },
            { text: "Tutorial", url: "#", primary: false }
        ]
    },
    {
        id: 4,
        name: "ASSINATURA DE EMAIL",
        category: "start",
        image: "4.png",
        links: [
            { text: "Download", url: "#", primary: true }
        ]
    },
    {
        id: 5,
        name: "BADGE",
        category: "start",
        image: "5.png",
        links: [
            { text: "Download", url: "#", primary: true },
            { text: "Customizar", url: "#", primary: false }
        ]
    },
    {
        id: 6,
        name: "ESTUDO DE MERCADO",
        category: "kits",
        image: "6.png",
        links: [
            { text: "Acessar", url: "#", primary: true },
            { text: "Relatório", url: "#", primary: false }
        ]
    },
];

//START KITS OFFLINE ONLINE NORMAS

// Função para detectar se está rodando no GitHub Pages
function isGitHubPages() {
    return window.location.hostname.includes('github.io');
}

// Função para ajustar caminho das imagens
function getImagePath(imageName) {
    if (isGitHubPages()) {
        // No GitHub Pages, usar caminho relativo
        return `./img/${imageName}`;
    } else {
        // Em desenvolvimento local, usar caminho absoluto
        return `/img/${imageName}`;
    }
}

// Função para renderizar produtos
function renderProducts(productsToRender = products) {
    const productsGrid = document.getElementById('productsGrid');
    
    if (!productsGrid) return;
    
    productsGrid.innerHTML = productsToRender.map(product => `
        <div class="product-card" data-category="${product.category}">
            <div class="product-image">
                <img src="${getImagePath(product.image)}" alt="${product.name}" loading="lazy">
            </div>
            <div class="product-info">
                <div class="product-category">${product.category.toUpperCase()}</div>
                <h3 class="product-name">${product.name}</h3>
                <div class="product-footer">
                    <div class="product-actions">
                        ${product.links ? product.links.map(link => 
                            `<a href="${link.url}" class="product-action ${link.primary ? '' : 'secondary'}" target="_blank">${link.text}</a>`
                        ).join('') : ''}
                    </div>
                </div>
            </div>
        </div>
    `).join('');
}

// Função para filtrar produtos
function filterProducts(category) {
    const filteredProducts = category === 'all' 
        ? products 
        : products.filter(product => product.category === category);
    
    renderProducts(filteredProducts);
}


// Função para pesquisar produtos
function searchProducts(query) {
    if (!query || query.trim() === '') {
        return products;
    }
    
    const searchTerm = query.toLowerCase().trim();
    const searchResults = products.filter(product => {
        // Pesquisar por nome do produto
        const nameMatch = product.name.toLowerCase().includes(searchTerm);
        
        // Pesquisar por categoria
        const categoryMatch = product.category.toLowerCase().includes(searchTerm);
        
        return nameMatch || categoryMatch;
    });
    
    return searchResults;
}

// Função para renderizar resultados de pesquisa
function renderSearchResults(results, containerId) {
    const container = document.getElementById(containerId);
    
    if (!container) return;
    
    if (results.length === 0) {
        container.innerHTML = `
            <div class="no-results">
                <h3>Nenhum produto encontrado</h3>
                <p>Tente pesquisar por outro termo ou use as sugestões abaixo.</p>
            </div>
        `;
        return;
    }
    
    container.innerHTML = `
        <h3>Resultados da pesquisa (${results.length} produto${results.length !== 1 ? 's' : ''})</h3>
        <div class="search-results-grid">
            ${results.map(product => `
                <div class="search-result-item" data-category="${product.category}">
                    <h4>${product.name}</h4>
                    <p>Categoria: ${product.category.toUpperCase()}</p>
                </div>
            `).join('')}
        </div>
    `;
}

// Inicializar produtos quando o DOM carregar
document.addEventListener('DOMContentLoaded', function() {
    renderProducts();
});
