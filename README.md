# go-touch-client README

## Features
You can use [go-touch](https://github.com/takeshy/go-touch) to Docker for Windows on shared directory. because currently, inotify does not work on Docker for Windows. execute go-touch on docker container and if file was saved, this extension send that file path to go-touch then go-touch touch that file. So App as Rails, webpack-dev-server etc. can detect file changes.

## Extension Settings

- "go-touch-client.removePath": remove path continuous $USERPROFILE  default "" <br/>
**ex. /work if /Users/USERNME/work/PROJECT -> /home/USERNAME/PROJECT**
- "go-touch-client.appendPath": append path continuous $HOME default "" <br/>
**ex. /app if /Users/USERNAME/PROJECT -> /home/USERNAME/app/PROJECT**
- "go-touch-client.port": go-touch port default 7650

**Enjoy!**
