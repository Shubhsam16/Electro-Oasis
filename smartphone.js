fetch('electronic.json')
    .then(response => response.json())
    .then(data => {
        const smartphonesContainer = document.getElementById('smartphones-container');
        
        // Assuming we're only dealing with the "Smartphones" category for now
        const smartphones = data.categories.find(category => category.name === 'Smartphones');
        
        if (smartphones && smartphones.products) {
            smartphones.products.forEach(product => {
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
                smartphonesContainer.appendChild(productLink);
            });
        } else {
            const noProductsMessage = document.createElement('p');
            noProductsMessage.textContent = 'No smartphones found in the catalog.';
            smartphonesContainer.appendChild(noProductsMessage);
        }
    })
    .catch(error => console.error('Error fetching data:', error));




// fetch('products.json')
//     .then(response => response.json())
//     .then(data => {
//         const productContainer = document.getElementById('productContainer');
//         data.products.forEach(product => {
//             // *** CHANGED *** Wrap productCard with an <a> tag
//             const productLink = document.createElement('a');
//             productLink.href = `product-details.html?productId=${product.productId}`; // assuming 'id' is a unique key in your product JSON
            

//             const productCard = document.createElement('div');
//             productCard.classList.add('product-card');

//             const productImage = document.createElement('img');
//             productImage.classList.add('product-image');
//             productImage.src = product.imageLink;

//             const productInfo = document.createElement('div');
//             productInfo.classList.add('product-info');
//             productInfo.innerHTML = `
//                 <h2>${product.name}</h2>
//                 <p>Price: $${product.price}</p>
//                 <p>Stock: ${product.stock} units</p>
//                 <h3>Specifications:</h3>
//                 <ul>
//                     ${Object.keys(product.specifications).map(spec => `<li><strong>${spec}:</strong> ${product.specifications[spec]}</li>`).join('')}
//                 </ul>
//             `;

//             productCard.appendChild(productImage);
//             productCard.appendChild(productInfo);
//             productLink.appendChild(productCard); // append productCard to the link
//             productContainer.appendChild(productLink); // append link to the container
//         });
//     })
//     .catch(error => console.error('Error:', error));






// fetch('products.json')
//     .then(response => response.json())
//     .then(data => {
//         const productContainer = document.getElementById('productContainer');
//         data.products.forEach(product => {
//             const productCard = document.createElement('div');
//             productCard.classList.add('product-card');

//             const productImage = document.createElement('img');
//             productImage.classList.add('product-image');
//             productImage.src = product.imageLink;

//             const productInfo = document.createElement('div');
//             productInfo.classList.add('product-info');
//             productInfo.innerHTML = `
//                 <h2>${product.name}</h2>
//                 <p>Price: $${product.price}</p>
//                 <p>Stock: ${product.stock} units</p>
//                 <h3>Specifications:</h3>
//                 <ul>
//                     ${Object.keys(product.specifications).map(spec => `<li><strong>${spec}:</strong> ${product.specifications[spec]}</li>`).join('')}
//                 </ul>
//             `;

//             productCard.appendChild(productImage);
//             productCard.appendChild(productInfo);
//             productContainer.appendChild(productCard);
//         });
//     })
//     .catch(error => console.error('Error:', error));


