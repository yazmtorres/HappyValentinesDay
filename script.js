function changeImage() {
    let image = document.getElementById("dynamicImage");
    if (image.src.includes("37b37ffccfd401a85ffc42a2b1eccaad.jpg")) {
        image.src = "https://i.pinimg.com/736x/5a/7f/3d/5a7f3d7ccbd5a2c2b3ee9f6e09f7b4b3.jpg"; // New Valentine’s Day Image
    } else {
        image.src = "https://i.pinimg.com/736x/37/b3/7f/37b37ffccfd401a85ffc42a2b1eccaad.jpg"; // Original image
    }
}