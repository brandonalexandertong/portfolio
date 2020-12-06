---
layout: job-layout.njk
projectName: MAISIE MAY - "COLORS WE DREAMT"
spotifyLink: https://open.spotify.com/track/6xjSqat5vbreFNkmFghvQE?si=m_rjaS0hQRC5zUFqb5ECSw
coverArt: colors-we-dreamt_cover.jpg
tags: ['job']
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
