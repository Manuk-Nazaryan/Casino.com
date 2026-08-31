/*---------- DOM elements ----------*/
const carouselItems = document.querySelectorAll(".carousel-item")
const carouselInd = document.querySelectorAll(".carousel_ind")

/*---------- Functions ----------*/
const removeClass = (arr) => {
  arr.forEach((el) => {
    el.classList.remove("active-state", "active")
  })
}

const slide = (i) => {
  const progLine = document.querySelector(".progress-line")

  //removing active state
  removeClass(carouselItems)
  removeClass(carouselInd)

  //adding active state on clicked item and indicator
  carouselItems[i].classList.add("active")
  carouselInd[i].classList.add("active-state", "active")

  //creating array with indicators before clicked one
  const activeInd = Array.from(carouselInd).filter((ind, j) => j < i)

  // adding active states on new array of indicators
  activeInd.forEach((el) => el.classList.add("active"))

  //changing progress line width
  progLine.style.width = (100 / (carouselInd.length - 1)) * i + "%"
}

/*---------- Setup Listeners ----------*/
carouselItems.forEach((item, i) => {
  item.addEventListener("click", () => {
    slide(i)
  })
})
carouselInd.forEach((item, i) => {
  item.addEventListener("click", () => {
    slide(i)
  })
})
