fetch('electronic.json')
    .then(response => response.json())
    .then(data => {
        const essentialsContainer = document.getElementById('essentials-container');
        
        // Assuming we're only dealing with the "essentials" category for now
        const essentials = data.categories.find(category => category.name === 'Daily Essentials');
        
        if (essentials && essentials.products) {
            essentials.products.forEach(product => {
                // Create a link wrapper for the product card
                const productLink = document.createElement('a');
                // Assuming you have a detail page for each product, e.g., product.html?id={productId}
                productLink.href = `product-details.html?id=${product.id}`;
                productLink.target = "_self"; // or "_blank" to open in a new tab
                
                const productCard = document.createElement('div');
                productCard.classList.add('product-card');
                productLink.appendChild(productCard); // Link wraps the card
                
                // Product Image
                const productImage = document.createElement('img');
                productImage.src = product.image; // Ensure image path is correct
                productCard.appendChild(productImage);
                
                // Product Details
                const productDetails = document.createElement('div');
                productDetails.classList.add('product-details');
                productCard.appendChild(productDetails);
                
                // Product Name
                const productName = document.createElement('h3');
                productName.textContent = product.name;
                productDetails.appendChild(productName);
                
                // Product Description
                const productDescription = document.createElement('p');
                productDescription.textContent = product.description;
                productDetails.appendChild(productDescription);
                
                // Product Specs
                const productSpecs = document.createElement('ul');
                productSpecs.classList.add('specs-list');
                productDetails.appendChild(productSpecs);
                Object.keys(product.specs).forEach(spec => {
                    const specListItem = document.createElement('li');
                    specListItem.innerHTML = `<span>${spec}:</span> ${product.specs[spec]}`;
                    productSpecs.appendChild(specListItem);
                });
                
                // Product Price and Stock
                const productPriceStock = document.createElement('p');
                productPriceStock.innerHTML = `<strong>Price:</strong> $${product.price} | <strong>Stock:</strong> ${product.stock} units`;
                productDetails.appendChild(productPriceStock);
                
                // Append Product Link (with card) to Container
                essentialsContainer.appendChild(productLink);
            });
        } else {
            const noProductsMessage = document.createElement('p');
            noProductsMessage.textContent = 'No essentials found in the catalog.';
            essentialsContainer.appendChild(noProductsMessage);
        }
    })
    .catch(error => console.error('Error fetching data:', error));