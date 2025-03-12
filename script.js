document.addEventListener("DOMContentLoaded", function() {
    console.log("Script JS caricato correttamente");

    // Effetto di scorrimento per i link di navigazione
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute("href"));
            if (target) {
                target.scrollIntoView({ behavior: "smooth" });
            }
        });
    });

    // Selezione del contenitore prodotti
    const productGrid = document.querySelector(".productGrid"); // Modifica qui per selezionare correttamente il contenitore

    if (!productGrid) {
        console.warn("Nessun contenitore '.productGrid' trovato!");
        return;
    }

    // Prodotti per la pagina index.html (solo ViperX, Protekx e Ball Heart Tech)
    const indexProducts = [
        { name: "ViperX", price: "€140.00", image: "immagini/ViperX.png" },
        { name: "Protekx + App Parastinchi Digitali", price: "€130.00", image: "immagini/Parastinchi.png" },
        { name: "BALL HEART TECH + APP", price: "€100.00", image: "immagini/Ball.png" }
    ];

    // Se siamo sulla home, carichiamo solo alcuni prodotti
    if (window.location.href.includes("index.html") || window.location.pathname === "/") {
        indexProducts.forEach(product => {
            addProductToGrid(product);
        });
    }

    // Prodotti per la pagina shop.html (tutti i prodotti)
    if (window.location.href.includes("shop.html")) {
        const allProducts = [
            { name: "BALL HEART TECH + APP", price: "€100.00", image: "immagini/Ball.png" },
            { name: "Bite Sportivo", price: "€50.00", image: "immagini/Bite.png" },
            { name: "Digital Ring", price: "€90.00", image: "immagini/DigitalRing.png" },
            { name: "Fascia Cardiofrequenzimetro", price: "€70.00", image: "immagini/Fascia.png" },
            { name: "Protekx + App Parastinchi Digitali", price: "€130.00", image: "immagini/Parastinchi.png" },
            { name: "Tank Top Ems", price: "€120.00", image: "immagini/TankTopEms.png" },
            { name: "ViperX", price: "€140.00", image: "immagini/ViperX.png" }
        ];

        // Ordinamento alfabetico per nome
        allProducts.sort((a, b) => a.name.localeCompare(b.name));

        allProducts.forEach(product => {
            addProductToGrid(product);
        });
    }

    // Funzione per aggiungere prodotti alla griglia
    function addProductToGrid(product) {
        const productCard = document.createElement("div");
        productCard.classList.add("col-12", "col-sm-6", "col-md-4", "col-lg-3", "product-card"); // Aggiungi la classe 'product-card'
    
        productCard.innerHTML = `
            <div class="card">
                <img src="${product.image}" class="card-img-top" alt="${product.name}">
                <div class="card-body">
                    <h5 class="card-title">${product.name}</h5>
                    <p class="card-text">${product.price}</p>
                </div>
            </div>
        `;
        
        productGrid.appendChild(productCard);
    }
    
});
