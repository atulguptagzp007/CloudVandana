// Array of image URLs
const images = [
    "https://images.unsplash.com/photo-1734639528206-59e0864b3863?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzfHx8ZW58MHx8fHx8",
    "https://images.unsplash.com/photo-1735836761873-1e5fa93f7125?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1740968786458-9bf66e5e0bb4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyM3x8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1741024105806-9591f4611da9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzNnx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1734630439201-c80ba479252c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1Nnx8fGVufDB8fHx8fA%3D%3D"
];

let currentIndex = 0;
const slider = document.getElementById("slider");

// Function to update the image
function updateImage() {
    slider.style.opacity = 0; // Smooth transition effect
    setTimeout(() => {
        slider.src = images[currentIndex];
        slider.style.opacity = 1;
    }, 300);
}

// Function to go to the next image
function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    updateImage();
}

// Function to go to the previous image
function prevImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateImage();
}

// Initial image load
window.onload = () => {
    slider.src = images[currentIndex];
};
