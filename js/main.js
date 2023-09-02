
const imageUrls = [
    "../images/crappng.png",
    "../images/fish.png",
    "../images/kla.png",
    "../images/lopster.png",
    "../images/meorn.png",
    "../images/khluk.png",
];
function displayRandomImages() {
    const randomIcon = []
    const iconElement = document.getElementsByClassName("randomImage")

    for (let i = 0; i < iconElement.length; i++) {
        const randomIndex = Math.floor(Math.random() * imageUrls.length)
        // console.log(randomIndex)
        const randomImageUrl = imageUrls[randomIndex]
        // console.log(randomImageUrl)
        randomIcon.push(randomImageUrl)
        //   console.log(randomIcon)
        iconElement[i].src = randomImageUrl
    }
}