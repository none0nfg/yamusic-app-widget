# yamusic-app-widget

Docker image: https://hub.docker.com/r/none0nfg/yamusic-widget

Docker image to serve nodejs web server, which respond an html template on "/" path, and json data about current song on "/data".

DONT'T FORGET TO CHANGE $USER VARIABLE IN DOCKER-COMPOSE TO YOUR OWN

Docker compose written to run in WSL on Windows, if you are running anywhere else, change volume.

If you want to serve your own HTML Template, just make another Dockerfile with overriding of index.html file at /app/src/index.html

After docker compose start you can check result at http://localhost:1337/. And you can add Browser source to your streaming app with listed url.


### Changelog

1.0 - initial

1.1 - Runuser changed to node (securely), added healthcheck