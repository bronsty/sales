
document.addEventListener('DOMContentLoaded', () => {
    const priceElement = document.getElementById('price');
    const quantityInput = document.getElementById('quantity');
    const purchaseButton = document.getElementById('purchaseButton');

    // Update price based on quantity
    quantityInput.addEventListener('input', () => {
        const basePrice = 49.99; // Base price of the product
        const quantity = parseInt(quantityInput.value) || 1; // Ensure quantity is a number
        const totalPrice = (basePrice * quantity).toFixed(2);
        priceElement.textContent = totalPrice;
    });

    // Handle purchase button click
    purchaseButton.addEventListener('click', () => {
        const quantity = parseInt(quantityInput.value) || 1;
        alert(`Thank you for purchasing ${quantity} item(s)!`);
    });
});
