function nextImg() {
    let currentImg = getImg();
    currentImg++;
    if (currentImg > 4) {
        currentImg = 1;
    }
    document.getElementById("img").src = "assets/" + currentImg + ".jpg"
}

function previousImg() {
    let currentImg = getImg();
    currentImg--;
    if (currentImg < 1) {
        currentImg = 4;
    }
    document.getElementById("img").src = "assets/" + currentImg + ".jpg"
}

function getImg() {
    let img = document.getElementById("img");
    let img_name = img.src.substr(img.src.lastIndexOf("/")+1, 1);
    return img_name;
}

