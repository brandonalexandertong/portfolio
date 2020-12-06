---
layout: job-layout.njk
projectName: COUCH PRINTS - "TELL U"
spotifyLink: https://open.spotify.com/track/7HS1Y5Gzc99GhFA09SRuUM?si=Yun-r2IrT9mzwkAsJLbAzg
coverArt: couch-prints-art.jpg
tags: ['job']
credits:
 - PRODUCTION
 - SONGWRITING
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
