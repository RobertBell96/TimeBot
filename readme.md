# Setup

Build image

```
docker build -f Dockerfile -t <image-name> .
```

Run image

```
docker run --env DISCORD_BOT_TOKEN=<bot-token> <image-name>
```
