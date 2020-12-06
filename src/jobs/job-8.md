---
layout: job-layout.njk
projectName: COUCH PRINTS - "TELL U EP"
spotifyLink: https://open.spotify.com/album/2HFveXo0kJEOPUo7bD70Re?si=yV-Xe3b6QhSpvcVWbO8cVA
coverArt: tell-u-ep-art.jpg
tags: ['job']
credit1: SONGWRITING
credit2: wewenya
credits:
  - SONGWRITING
  - PRODUCTION
  - RECORDING
---

{% for credit in credits %}
<li>
  <div class="list-wrapper">
    <img class="heart" src="images/heart.svg">
    <h6>{{ credit }}</h6>
  </div>
</li>
{% endfor %}
