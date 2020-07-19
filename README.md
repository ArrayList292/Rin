<div align="center">
    <a href="https://top.gg/bot/732807386414317658">
        <img src="https://hayper.is-inside.me/9DWXQU2m.png" alt="Icon"/>
    </a>
</div>
<div align="center">
    <a href="https://discord.gg/kpMyn55">
        <img src="https://discordapp.com/api/guilds/723434573802766357/widget.png" alt="Support Server"/>
    </a>
    <a href="https://travis-ci.com/xhayper/Rin">
        <img src="https://travis-ci.com/xhayper/Rin.svg?branch=rin-master" alt="Build Status"/>
    </a>
</div>

# Help me!
* [Report a bug!](https://github.com/xhayper/Rin/issues/new?assignees=&labels=&template=bug_report.md&title=%5BBUG%5D)
* [Suggest a feature!](https://github.com/xhayper/Rin/issues/new?assignees=&labels=&template=feature_request.md&title=%5BREQUEST%5D)

# Feature
* Play music.
* Play live music.
* Play a playlist.
* Easy to host yourself.
* Power Level customizable.

# Bot Information
* Discord Framework : [Discord.JS-Light](https://www.npmjs.com/package/discord.js-light)
* Hosted On : [DigitalOcean](https://www.digitalocean.com)
* Invite link : [Here](https://discordapp.com/oauth2/authorize?client_id=732807386414317658&scope=bot&permissions=70643009)
* Support Server Link : [Here](https://discord.gg/kpMyn55)

# TODO
* Clean up the code.
* Optimise the bot if possible.
* Add more feature.

# Power Levels

|Name     | Power Level | Permissions | Default? |
|:--------|:-----------:|:------------|:--------:|
|All      |0            |Anything     |Yes       |
|Admin    |2            |Administrator|No        |
|Bot Owner|4            |Bot Owner    |No        |

* You can't change These Power Level, It's permenant.

# Command-List
 
* [] = Required, () = Optinal, / = or, & = and.

### Category

##### Information

|Command Name |Power Level|Argument |Description                        |Example |
|:-----------:|:---------:|:-------:|:----------------------------------|:-------|
|rin$help     |0          |None     |Show you all of the commands       |rin$help|                
|rin$info     |0          |None     |Show you the information of the bot|rin$info|

###### Music

|Command Name |Power Level|Argument                                                |Description                                 |Example                                                                                                                                    |
|:-----------:|:---------:|:------------------------------------------------------:|:-------------------------------------------|:------------------------------------------------------------------------------------------------------------------------------------------|
|rin$play     |0          |[Youtube Video URL/Youtube Video ID/Search String]      |Play/Add a video to the queue.              |rin$play https://www.youtube.com/watch?v=dQw4w9WgXcQ<br>rin$play dQw4w9WgXcQ<br>rin$play Rick Astley - Never Gonna Give You Up             |
|rin$play     |0          |[Youtube Playlist URL/Youtube Playlist ID]              |Play/Add a playlist. (Same command as above)|rin$play https://www.youtube.com/watch?v=9C7IdIwUSMU&list=PLv3TTBr1W_9tppikBxAE_G6qjWdBljBHJ<br>rin$play PLv3TTBr1W_9tppikBxAE_G6qjWdBljBHJ|
|rin$skip     |0          |None                                                    |Skip a song                                 |rin$skip                                                                                                                                   |
|rin$stop     |0          |None                                                    |Stop the song. (Clear the queue)            |rin$stop                                                                                                                                   |
|rin$queue    |0          |None                                                    |See the current queue                       |rin$queue                                                                                                                                  |
|rin$volume   |0          |(Number {0-100})                                        |Set the volume, or get current volume       |rin$volume, rin$volume 100                                                                                                                 |
|rin$loop     |0          |None                                                    |Loop current queue                          |rin$loop                                                                                                                                   |
|rin$shuffle  |0          |None                                                    |Shuffle Current Queue                       |rin$shuffle                                                                                                                                |
# Packages
* [@discordjs/opus](https://www.npmjs.com/package/@discordjs/opus)
* [bufferutil](https://www.npmjs.com/package/bufferutil)
* [discord.js-light](https://www.npmjs.com/package/discord.js-light)
* [dotenv](https://www.npmjs.com/package/dotenv)
* [erlpack](https://github.com/discordapp/erlpack)
* [express](https://www.npmjs.com/package/express)
* [ffmpeg-static](https://www.npmjs.com/package/ffmpeg-static)
* [glob](https://www.npmjs.com/package/glob)
* [libsodium-wrappers](https://www.npmjs.com/package/libsodium-wrappers)
* [moment](https://www.npmjs.com/package/moment)
* [utf-8-validate](https://www.npmjs.com/package/utf-8-validate)
* [yt-search](https://www.npmjs.com/package/yt-search)
* [ytdl-core](https://www.npmjs.com/package/ytdl-core)
* [ytpl](https://www.npmjs.com/package/ytpl)
* [zlib-sync](https://www.npmjs.com/package/zlib-sync)

# How to host?


1. Download the source, Unzip it in your desktop
2. Then rename config.json.example to config.json, .env.example to .env and edit the file data
3. Open Command Prompt, Then change directory to the bot folder.
4. Then type ```npm install``` (Only do it once)
5. Double click on start.bat.

# FAQ
* Help! It said `'npm' is not recognized as an internal or external command.` or `'node' is not recognized as an internal or external command.`
* A : Install [Node.JS](https://nodejs.org/en/).

* Help! It said `Error : Cannot find module 'node-gyp'`
* A : Install [node-gyp](https://github.com/nodejs/node-gyp) and [windows-build-tools](https://www.npmjs.com/package/windows-build-tools).

* Help! It said `Error: Invalid converter command`
* A: Install [FFMPEG](https://www.ffmpeg.org/download.html), Then put the file path in PATH's System Environment Variable, Then restart your computer.

* Why Discord.JS-Light?
* A: Because it reduces the ram usage, by removing caching.