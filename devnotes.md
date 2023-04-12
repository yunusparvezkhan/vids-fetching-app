### Version 1
On this launch the app contains a search bar, very much like pics-fetching-app (https://github.com/yunusparvezkhan.pics-fetching-app). When user submits a search request, the app requests videos from youtube video api v3 and maps them on the screen. When any video title/thumbnail is clicked, a new section emerges from top containing a youtube video player, the video title, channel name, video description. Folks can use this app on their local environment to avoid ads, as CORS policy blocks the ads. 

## Version 1.1
On this launch the max number of results is increased to 50. That means now new searches will get back 50 results from the YouTube API. However it is important to note that it is not neccessary that 50 video will render on each time, because search results contains other types than videos, which are filtered out in this app, hence the video results depends on the search.
A new functionality also has been added to the app such that whenever a thumbnail or title is clicked, the window scrolls back to top. 


