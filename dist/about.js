const aboutSection = document.querySelector(".about-copy")
const portfolioContent = document.querySelector('.portfolio-content')
const aboutButton = document.querySelector('.about')
const homeButton =document.querySelector('.home')
const allContent = document.querySelector('.all-content')

let aboutOn = false

const aboutEvent = () => {

    aboutSection.classList.add('show')
    portfolioContent.classList.add('remove')
    aboutButton.classList.add('underline')
    homeButton.classList.remove('underline')
    console.log('remove the content')
    aboutOn = !aboutOn
}

const homeEvent = () => {

  if (aboutOn == true) {
    aboutSection.classList.remove('show')
    portfolioContent.classList.remove('remove')
    aboutButton.classList.remove('underline')
    homeButton.classList.add('underline')
    console.log('remove the content')
    aboutOn = !aboutOn
  } else {
    null
  }
}

aboutButton.addEventListener('click', aboutEvent)
homeButton.addEventListener('click', homeEvent)
