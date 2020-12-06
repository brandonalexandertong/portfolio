---
layout: job-layout.njk
projectName: MAISIE MAY - "FLYING WITHOUT YOU"
spotifyLink: https://open.spotify.com/track/5JXcthnZPwxqaXsHVv2tw4?si=yAPdu6-1RvefpJT36_D8Og
coverArt: flying-without-you_cover.jpg
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
