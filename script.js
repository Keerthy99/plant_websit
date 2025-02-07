document.addEventListener("DOMContentLoaded", function () {
    const searchBox = document.querySelector(".search-box");
    const products = document.querySelectorAll(".product-list .product");

    searchBox.addEventListener("input", function () {
        const searchText = searchBox.value.toLowerCase();
        let found = false;

        products.forEach(product => {
            const productName = product.querySelector("h2").textContent.toLowerCase();
            
            if (productName.includes(searchText)) {
                product.style.display = "block"; // Show matching product
                found = true;
            } else {
                product.style.display = "none"; // Hide non-matching products
            }
        });

        // Show 'No Results Found' if nothing matches
        let noResults = document.querySelector(".no-results");
        if (!found) {
            if (!noResults) {
                noResults = document.createElement("div");
                noResults.className = "no-results";
                noResults.textContent = "No matching products found.";
                document.querySelector(".product-list").appendChild(noResults);
            }
        } else if (noResults) {
            noResults.remove(); // Remove the message if results are found
        }
    });
});
