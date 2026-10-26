setTimeout(function() {

    document.getElementById("loading").style.display = "none";

    document.getElementById("home").style.display = "block";

}, 3000);


function showProduct(name, image, price) {
    document.querySelectorAll(".product").forEach(function(item) {
        item.style.display = "none";
    });

    document.getElementById("loading").style.display = "none";
    document.getElementById("product").style.display = "block";
    document.getElementById("productName").innerHTML = name;

    document.getElementById("productImage").src = image;

    document.getElementById("productPrice").innerHTML = "₹" + price;

    }




function showContact() {

    document.getElementById("contact").innerHTML =
        "CONTACT: 9876543210";

}
function goBack() {

    document.getElementById("product").style.display = "none";

    document.querySelectorAll(".product").forEach(function(item) {
        item.style.display = "inline-block";
    });

    document.getElementById("skintypes").style.display = "block";

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}