let images = [{
    name: "assets/1.jpg"
}, {
    name: "assets/2.jpg"
}, {
    name: "assets/3.jpg"
}, {
    name: "assets/4.jpg"
}];

document.addEventListener("DOMContentLoaded",() => {
    document.getElementById("img").src = images[0].name;
});

function animation(button) {
    let oldIcon = button.style.background;
    button.style.background = 'url("../icons/empty.png")';
    setTimeout(() => {
        button.style.background = oldIcon;
    }, 50);
}

function nextImg() {
    animation(document.getElementById("button-next"));

    let activeImg = getImg();
    let index = getActiveImageIndex(activeImg);
    if (index === images.length-1) {
        index = 0;
    } else {
        index++;
    }
    changeActiveImage(images[index].name);
}

function previousImg() {
    animation(document.getElementById("button-previous"));

    let activeImg = getImg();
    let index = getActiveImageIndex(activeImg);
    if (index === 0) {
        index = images.length-1;
    } else {
        index--;
    }
    changeActiveImage(images[index].name)
}

function getImg() {
    let img = document.getElementById("img");
    let img_name = img.src.substr(img.src.lastIndexOf("/")+1, img.src.length);
    return "assets/" + img_name;
}

function getActiveImageIndex(currentImg) {
    for (let i=0; i<images.length; i++) {
        if (images[i].name === currentImg) {
            return i;
        }
    }
    return -1;
}

function changeActiveImage(name) {
    document.getElementById("img").src = name;
    document.getElementById("label").innerText = name.substr(name.lastIndexOf("/")+1, name.length);
}

