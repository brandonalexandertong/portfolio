
function makeMarquee  () {
  const title = 'BRANDON TONG: MIX  - MASTER - PRODUCE --- BRANDON TONG --- CALL: "+1 (720)-288-3339"'

  // array is a list of things
  // can use array creator using new Array(#of items),  fill  it with
  // FIFTY copy, and it  will be a list  repeating the FIFTY copy 50 times
  // adding join  piece as this is what will use  to seperate each item in the Array
  // with the default being a  comma
  const marqueeText = new Array(500).fill(title).join(' --- ')

  const leftMarquee = document.querySelector(".left-marquee span")
  const rightMarquee = document.querySelector(".right-marquee span")

  leftMarquee.innerHTML = marqueeText
  rightMarquee.innerHTML = marqueeText
}

makeMarquee()
