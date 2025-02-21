function changeImage() {
    let image = document.getElementById("dynamicImage");

    if (image.src.includes("37b37ffccfd401a85ffc42a2b1eccaad.jpg")) {
        image.src = "https://via.placeholder.com/200"; // Change to a placeholder
    } else {
        image.src = "https://i.pinimg.com/736x/37/b3/7f/37b37ffccfd401a85ffc42a2b1eccaad.jpg"; // Revert to your image
    }
}