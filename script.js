function addToCart(productName) {
    alert(productName + " added to cart! 🛒");
}
function orderProduct(productName, price) {

    const phone = "8801606247828";

    const message =
        "Assalamu Alaikum, I want to order:%0A%0A" +
        "Product: " + productName + "%0A" +
        "Price: ৳" + price + "%0A%0A" +
        "Please confirm my order.";

    const whatsappURL =
        "https://wa.me/" + phone + "?text=" + message;

    window.open(whatsappURL, "_blank");
}
