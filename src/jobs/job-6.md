---
layout: job-layout.njk
projectName: MOLLY FRANCES - "TERMINAL 6"
spotifyLink: https://open.spotify.com/track/7jAjEl0bdWd4abdp2rcJNU?si=8gCN30RESVSODwphCKnHig
coverArt: terminal-6_cover.jpg
tags: ['job']
credits:
  - MIXING
  - MASTERING
---

{% for credit in credits %}
<li>
  <div class="list-wrapper">
    <img class="heart" src="images/heart.svg">
    <h6>{{ credit }}</h6>
  </div>
</li>
{% endfor %}
