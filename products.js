// Dados dos produtos SAREN
const products = [
    {
        id: 1,
        name: "BADGE",
        category: "start",
        image: "./img/1.png",
        links: [
            { text: "VIP", url: "https://tinyurl.com/23hl5ze9", primary: true },
            {text: "OCEAN", url: "https://tinyurl.com/23b8o522", primary: true },
            {text: "Azure", url: "https://tinyurl.com/24uhzfle", primary: true },
        ]
    },
     {
        id: 2,
        name: "BADGE COLLECTION",
        category: "start",
        image: "./img/2.png",
        links: [
             { text: "VIP", url: "https://tinyurl.com/2xnu76g5", primary: true },
            {text: "OCEAN", url: "https://tinyurl.com/2c3k9ho2", primary: true },
            {text: "Azure", url: "https://tinyurl.com/2by795ly", primary: true },
        ]
    },
    {
        id: 3,
        name: "LONA I",
        category: "offline",
        image: "./img/3.png",
        links: [
            { text: "Download", url: "https://tinyurl.com/294jyjt6", primary: true },
          
        ]
    },
    {
        id: 4,
        name: "LONA II",
        category: "offline",
        image: "./img/4.png",
        links: [
            { text: "Download", url: "https://tinyurl.com/29vx67bn", primary: true },
       
        ]
    },
    {
        id: 5,
        name: "CARTA AO VIZINHO",
        category: "offline",
        image: "./img/5.png",
        links: [
            { text: "VIP", url: "https://tinyurl.com/2a42tmyj", primary: true },
            {text: "OCEAN", url: "https://tinyurl.com/23l7ag7n", primary: true },
            {text: "Azure", url: "https://tinyurl.com/292m5a25", primary: true },
        ]
    },
     {
        id: 6,
        name: "WHATSAPP IMÓVEL",
        category: "online",
        image: "./img/6.png",
        links: [
            { text: "Download", url: "https://tinyurl.com/2y9rbb6m", primary: true }
        ]
    },
     {
        id: 7,
        name: "FLYER VENDE",
        category: "offline",
        image: "./img/7.png",
        links: [
            { text: "VIP", url: "https://tinyurl.com/2ajona7q", primary: true },
            {text: "OCEAN", url: "https://tinyurl.com/225cx32v", primary: true },
            {text: "Azure", url: "https://tinyurl.com/23slf4ks", primary: true },
        ]
    },
     {
        id: 8,
        name: "FLYER VENDIDO",
        category: "offline",
        image: "./img/8.png",
        links: [
            { text: "VIP", url: "https://tinyurl.com/27hf8h7g", primary: true },
            {text: "OCEAN", url: "https://tinyurl.com/29r7ody6", primary: true },
            {text: "Azure", url: "https://tinyurl.com/2cp26a9n", primary: true },
        ]
    },
     {
        id: 9,
        name: "FLYER POSICIONAMENTO",
        category: "offline",
        image: "./img/9.png",
        links: [
             { text: "VIP", url: "https://tinyurl.com/23ssw53k", primary: true },
            {text: "OCEAN", url: "https://tinyurl.com/2d8pftq3", primary: true },
            {text: "Azure", url: "https://tinyurl.com/25e7vngn", primary: true },
        ]
    },
     {
        id: 10,
        name: "CARTÃO DE VISITA",
        category: "start",
        image: "./img/10.png",
        links: [
             { text: "VIP", url: "https://tinyurl.com/2y676j5b", primary: true },
            {text: "OCEAN", url: "https://tinyurl.com/2xwyazm4", primary: true },
            {text: "Azure", url: "https://tinyurl.com/29f4k63u", primary: true },
        ]
    },
     {
        id: 11,
        name: "CARTÃO DE VISITA COLLECTION",
        category: "start",
        image: "./img/11.png",
        links: [
            { text: "VIP", url: "https://tinyurl.com/2dxmhrcs", primary: true },
            {text: "OCEAN", url: "https://tinyurl.com/259za8ra", primary: true },
            {text: "Azure", url: "https://tinyurl.com/2yyv8d3u", primary: true },
        ]
    },
     {
        id: 12,
        name: "CARRO",
        category: "offline",
        image: "./img/12.png",
        links: [
           { text: "VIP", url: "https://tinyurl.com/2agb9423", primary: true },
            {text: "OCEAN", url: "https://tinyurl.com/27wtdjg3", primary: true },
            {text: "Azure", url: "https://tinyurl.com/27e2ngur", primary: true },
        ]
    },
     {
        id: 13,
        name: "BLOCO A6",
        category: "offline",
        image: "./img/13.png",
        links: [
            { text: "REMAX", url: "https://tinyurl.com/2a2tkw5l", primary: true },
            { text: "COLLECTION", url: "https://tinyurl.com/26j5renp", primary: false }
        ]
    },
     {
        id: 14,
        name: "PLACA DE VENDA (REMAX)",
        category: "offline",
        image: "./img/14.png",
        links: [
            { text: "VIP", url: "https://tinyurl.com/22vrwqje", primary: true },
            {text: "OCEAN", url: "https://tinyurl.com/24847vp8", primary: true },
            {text: "Azure", url: "https://tinyurl.com/27l38zyt", primary: true },
        ]
    },
     {
        id: 15,
        name: "PLACA DE VENDA (COLLECTION)",
        category: "offline",
        image: "./img/14.png",
        links: [
            { text: "VIP", url: "https://tinyurl.com/2cd5bwth", primary: true },
            {text: "OCEAN", url: "https://tinyurl.com/2co4ef4e", primary: true },
            {text: "Azure", url: "https://tinyurl.com/2d8cs6lv", primary: true },
        ]
    },
     {
        id: 16,
        name: "LOGÓTIPOS",
        category: "normas",
        image: "./img/15.png",
        links: [
            { text: "Download", url: "https://tinyurl.com/22wzexto", primary: true },
        ]
    },
    {
        id: 17,
        name: "ASSINATURA",
        category: "start",
        image: "./img/16.png",
        links: [
            { text: "REMAX", url: "https://tinyurl.com/28s9wdys", primary: true },
            { text: "COLLECTION", url: "https://tinyurl.com/24ms3c5d", primary: true },
        ]
    },
     {
        id: 18,
        name: "AUTOCOLANTES",
        category: "normas",
        image: "./img/17.png",
        links: [
            { text: "14,8x6cm", url: "https://tinyurl.com/2dlzlzp3", primary: true },
            { text: "5x5cm", url: "https://tinyurl.com/28t9fmt7", primary: true },
        ]
    },
    {
        id: 19,
        name: "CARTÃO DIGITAL",
        category: "start",
        image: "./img/18.png",
        links: [
             { text: "VIP", url: "https://tinyurl.com/23fsm7ue", primary: true },
            {text: "OCEAN", url: "https://tinyurl.com/296hmbca", primary: true },
            {text: "Azure", url: "https://tinyurl.com/29ygerwk", primary: true },
        ]
    },
     {
        id: 20,
        name: "REDES SOCIAIS (POSTS - VIP)",
        category: "online",
        image: "./img/19.png",
        links: [
             { text: "GERAL", url: "https://tinyurl.com/23ya9cb9", primary: true },
            {text: "TESTEMUNHOS", url: "https://tinyurl.com/2494puxf", primary: true },
            {text: "NOTÍCIAS", url: "https://tinyurl.com/2494puxf", primary: true },
        ]
    },
     {
        id: 21,
        name: "REDES SOCIAIS (POSTS - VIP)",
        category: "online",
        image: "./img/19.png",
        links: [
             { text: "VENDE/ARRENDA", url: "https://tinyurl.com/27sh42zb", primary: true },
            {text: "VENDIDO/ARRENDADO", url: "https://tinyurl.com/2cfmdude", primary: true },
          
        ]
    },
    {
        id: 22,
        name: "REDES SOCIAIS (POSTS - OCEAN)",
        category: "online",
        image: "./img/19.png",
        links: [
             { text: "GERAL", url: "https://tinyurl.com/2dow9lg4", primary: true },
            {text: "TESTEMUNHOS", url: "https://tinyurl.com/26sxvnxv", primary: true },
            {text: "NOTÍCIAS", url: "https://tinyurl.com/2bmwzcss", primary: true },
        ]
    },
     {
        id: 23,
        name: "REDES SOCIAIS (POSTS - OCEAN)",
        category: "online",
        image: "./img/19.png",
        links: [
             { text: "VENDE/ARRENDA", url: "https://tinyurl.com/2aqjjurk", primary: true },
            {text: "VENDIDO/ARRENDADO", url: "https://tinyurl.com/2aevskyf", primary: true },
          
        ]
    },
      {
        id: 24,
        name: "REDES SOCIAIS (POSTS - AZURE)",
        category: "online",
        image: "./img/19.png",
        links: [
             { text: "GERAL", url: "https://tinyurl.com/2dexwnpc", primary: true },
            {text: "TESTEMUNHOS", url: "https://tinyurl.com/23hgru7j", primary: true },
            {text: "NOTÍCIAS", url: "https://tinyurl.com/262yof52", primary: true },
        ]
    },
     {
        id: 25,
        name: "REDES SOCIAIS (POSTS - AZURE)",
        category: "online",
        image: "./img/19.png",
        links: [
             { text: "VENDE/ARRENDA", url: "https://tinyurl.com/2ybdgevy", primary: true },
            {text: "VENDIDO/ARRENDADO", url: "https://tinyurl.com/26fs376m", primary: true },
          
        ]
    },
    {
        id: 26,
        name: "REDES SOCIAIS (REELS - VIP)",
        category: "online",
        image: "./img/20.png",
        links: [
             { text: "GERAL", url: "https://tinyurl.com/26fs376m", primary: true },
            {text: "TESTEMUNHOS", url: "https://tinyurl.com/26rdda2g", primary: true },
            {text: "NOTÍCIAS", url: "https://tinyurl.com/22p5klom", primary: true },
        ]
    },
     {
        id: 27,
        name: "REDES SOCIAIS (REELS - VIP)",
        category: "online",
        image: "./img/20.png",
        links: [
             { text: "VENDE/ARRENDA", url: "https://tinyurl.com/225pflro", primary: true },
            {text: "VENDIDO/ARRENDADO", url: "https://tinyurl.com/2cyb7l4v", primary: true },
          
        ]
    },
    {
        id: 28,
        name: "REDES SOCIAIS (REELS - OCEAN)",
        category: "online",
        image: "./img/20.png",
        links: [
             { text: "GERAL", url: "https://tinyurl.com/29z6abwy", primary: true },
            {text: "TESTEMUNHOS", url: "https://tinyurl.com/242kyv9k", primary: true },
            {text: "NOTÍCIAS", url: "https://tinyurl.com/2do7qpow", primary: true },
        ]
    },
     {
        id: 29,
        name: "REDES SOCIAIS (REELS - OCEAN)",
        category: "online",
        image: "./img/20.png",
        links: [
             { text: "VENDE/ARRENDA", url: "https://tinyurl.com/2aye9qk7", primary: true },
            {text: "VENDIDO/ARRENDADO", url: "https://tinyurl.com/2yrfgv4p", primary: true },
          
        ]
    },
      {
        id: 30,
        name: "REDES SOCIAIS (REELS - AZURE)",
        category: "online",
        image: "./img/20.png",
        links: [
             { text: "GERAL", url: "https://tinyurl.com/28tvahtr", primary: true },
            {text: "TESTEMUNHOS", url: "https://tinyurl.com/26lmblbr", primary: true },
            {text: "NOTÍCIAS", url: "https://tinyurl.com/2y3swzzj", primary: true },
        ]
    },
     {
        id: 31,
        name: "REDES SOCIAIS (REELS - AZURE)",
        category: "online",
        image: "./img/20.png",
        links: [
             { text: "VENDE/ARRENDA", url: "https://tinyurl.com/2489va7z", primary: true },
            {text: "VENDIDO/ARRENDADO", url: "https://tinyurl.com/266srnaj", primary: true },
          
        ]
    },
     {
        id: 32,
        name: "PERFIL E CAPA (CAPA)",
        category: "online",
        image: "./img/21.png",
        links: [
              { text: "VIP", url: "https://tinyurl.com/2xnwmsex", primary: true },
            {text: "OCEAN", url: "https://tinyurl.com/22v8nsn4", primary: true },
            {text: "Azure", url: "https://tinyurl.com/29kaz6ox", primary: true },
          
        ]
    },
     {
        id: 33,
        name: "PERFIL E CAPA (PERFIL)",
        category: "online",
        image: "./img/21.png",
        links: [
              { text: "VIP", url: "https://tinyurl.com/2ckccuxy", primary: true },
            {text: "OCEAN", url: "https://tinyurl.com/2yuykbae", primary: true },
            {text: "Azure", url: "", primary: true },
          
        ]
    },
      {
        id: 34,
        name: "ESTUDO DE MERCADO",
        category: "kits",
        image: "./img/22.png",
        links: [
              { text: "VIP", url: "https://tinyurl.com/29m5m4pw", primary: true },
            {text: "OCEAN", url: "https://tinyurl.com/2bclho6s", primary: true },
            {text: "Azure", url: "https://tinyurl.com/2b5odp8y", primary: true },
          
        ]
    },
];

//START KITS OFFLINE ONLINE NORMAS

// Função para renderizar produtos
function renderProducts(productsToRender = products) {
    const productsGrid = document.getElementById('productsGrid');

    if (!productsGrid) return;

    productsGrid.innerHTML = productsToRender.map(product => `
        <div class="product-card" data-category="${product.category}">
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}" loading="lazy">
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
document.addEventListener('DOMContentLoaded', function () {
    renderProducts();
});
