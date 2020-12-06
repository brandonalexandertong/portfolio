---
layout: job-layout.njk
projectName: MAISIE MAY - "2 SMART 2 CRY"
spotifyLink: https://open.spotify.com/track/65gU1mMWm9caV4hayP83Bf?si=I7fKK31TQa2YrG7cfM_ong
coverArt: 2-smart-2-cry_cover.jpeg
tags: ['job']
credits:
  - MIXING
  - MASTERING
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
