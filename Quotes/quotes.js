const colors = ["Many of life’s failures are people who did not realize how close they were to success when they gave up.", "Life is like a coin. You can spend it any way you wish, but you only spend it once", "Never let the fear of striking out keep you from playing the game.", "Don’t settle for what life gives you; make life better and build something.", "I believe every human has a finite number of heartbeats. I don't intend to waste any of mine.", "The best way to predict your future is to create it.","If you want to live a happy life, tie it to a goal, not to people or things."]
const btn = document.getElementById("btn")
const color = document.querySelector(".color")

//function to change the colors of the background
btn.addEventListener("click", () => {
    //target the body from the html
    console.log(document.body)
    const randomNumber = getRandomNumber()
    document.body.style.backgroundColor = colors[randomNumber]
    color.textContent = colors[randomNumber]
})
getRandomNumber = () => {
    return Math.floor(Math.random() * colors.length)
}