class Productos{

    constructor(titulo, precio, descripcion, stock, imagen){
        this.titulo = titulo
        this.precio = precio
        this.descripcion = descripcion
        this.stock = stock
        this.imagen = imagen
    }

    details() {
        const productContainer = document.getElementById('product-details');
        let stockHTML = '';

        if (this.stock > 0) {
            stockHTML = `<p class="product-stock">En stock: <span>${this.stock} unidades disponibles</span></p>`;
        } else {
            stockHTML = `<p class="product-stock out-of-stock">Sin stock</p>`;
        }

        productContainer.innerHTML = `
            <div class="product-image">
            <img src="https://66d9ee6caa07a954166f10ed--gregarious-melba-cacdba.netlify.app/${this.imagen}.jpg" alt="Imagen del producto">
            </div>
            <div class="product-details">
                <h1 class="product-title">${this.titulo}</h1>
                <p class="product-price">$${this.precio.toFixed(2)}</p>
                ${stockHTML}
                
                <p class="product-description">
                    ${this.descripcion}
                </p>
                <a href="#" class="buy-button">Comprar ahora</a>
            </div>
        `;
    }
}



const producto1 = new Productos(
    "Carro 1", 
    345000,
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit nihil esse expedita molestias atque, incidunt cupiditate.", 
    12, 
    1
)

producto1.details()








