
const progressTag = document.querySelector("div.progress")
const bodyTag = document.querySelector("body")
const timeTag = document.querySelector("div.time")
const headerTag  = document.querySelector("header")
const creditsTag = document.querySelector("div.credits")
const creditCopy = document.querySelector("div.credits p")
const nameTag = document.querySelector("div.name")
const descriptorTag = document.querySelector("div.description")
const linksTag = document.querySelectorAll("nav.links a")
const underlineTag = document.querySelector("nav.links a.underline")

const sections = document.querySelectorAll("section")


document.addEventListener("scroll", function () {
  const pixels = window.pageYOffset
  // measures how high the entire body is (page)
  const pageHeight = bodyTag.getBoundingClientRect().height
  // measures  how high one frame  is
  const windowHeight =  window.innerHeight
  // measures amount that is scrollable as we cannot scroll to
  // theoretical bottom of page
  const totalScrollable = pageHeight - windowHeight
  // create ratio of percent down page we are
  const percentage  = pixels / totalScrollable

  progressTag.style.width = percentage * 100 +"%"
})



document.addEventListener("scroll", function () {
  const topViewport = window.pageYOffset
  const midViewport = topViewport +  (window.innerHeight / 2)

  sections.forEach(section => {
    const topSection =  section.offsetTop
    const midSection  = topSection + (section.offsetHeight / 2)

    const distanceToSection  = midSection - midViewport

    const parallaxTags = section.querySelectorAll(`[data-parallax]`)

    parallaxTags.forEach(tag => {
        const speed = (tag.getAttribute("data-parallax"))
        tag.style.transform = `translate(0, ${distanceToSection * speed}px)`

    })
  })
})
