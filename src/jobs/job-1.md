---
layout: job-layout.njk
projectName: MOLLY FRANCES - "FRANCES"
spotifyLink: https://open.spotify.com/album/7az6iWNbHovUXTjbZXsxgb?si=pQvEJ8LUTXaIhNLwV70d_Q
coverArt: frances.png
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
