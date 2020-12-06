---
layout: job-layout.njk
projectName: COUCH PRINTS - "OF DRAWING"
spotifyLink: https://open.spotify.com/track/2PGQW225i6km8pSlnpKylr?si=o-Djm5NMRf2JwV6fw1p4dA
coverArt: Of-Drawing_Cover-Art.jpg
tags: ['job']
credits:
  - SONGWRITING
  - PRODUCTION
---

{% for credit in credits %}
<li>
  <div class="list-wrapper">
    <img class="heart" src="images/heart.svg">
    <h6>{{ credit }}</h6>
  </div>
</li>
{% endfor %}
