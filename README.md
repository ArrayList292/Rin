# Rin
A Fun Music Bot Made In discord.js

# Support me!
* [Patreon](https://www.patreon.com/hayper)

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
* Discord Framework : [discord.js](https://discord.js.org)<br>
* Hosted On : [DigitalOcean](https://www.digitalocean.com)<br>
* Invite link : [Here](https://discord.com/oauth2/authorize?client_id=732807386414317658&scope=bot&permissions=137755969)<br>
* Support Server Link : [Here](https://discord.gg/kpMyn55)

# TODO
* Clean up the code.
* Optimise the bot if possible.
* Add more feature.

# Future Command
* rin$shuffle - Shuffle the queue

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

# Packages
[@discordjs/opus](https://www.npmjs.com/package/@discordjs/opus)<br>
[bufferutil](https://www.npmjs.com/package/bufferutil)<br>
[discord.js](http://npmjs.com/package/discord.js)<br>
[dotenv](https://www.npmjs.com/package/dotenv)<br>
[erlpack](https://github.com/discordapp/erlpack)<br>
[express](https://www.npmjs.com/package/express)<br>
[ffmpeg-static](https://www.npmjs.com/package/ffmpeg-static)<br>
[glob](https://www.npmjs.com/package/glob)<br>
[libsodium-wrappers](https://www.npmjs.com/package/libsodium-wrappers)<br>
[moment](https://www.npmjs.com/package/moment)<br>
[utf-8-validate](https://www.npmjs.com/package/utf-8-validate)<br>
[yt-search](https://www.npmjs.com/package/yt-search)<br>
[ytdl-core](https://www.npmjs.com/package/ytdl-core)<br>
[ytpl](https://www.npmjs.com/package/ytpl)<br>
[zlib-sync](https://www.npmjs.com/package/zlib-sync)<br>

# How to host?

* Download the source, Unzip it in your desktop
* Then rename config.json.example to config.json and edit the file data
* Do the same with .env.example
* Open Command Prompt, Then type ```cd "C:\Users\%username%\Desktop\Rin-rin-master\src"``` or change directory to the bot folder.
* Then type ```npm install``` (Only do it once)
* Then type ```node main.js```

# FAQ
* Help! It said `'npm' is not recognized as an internal or external command.` or `'node' is not recognized as an internal or external command.`<br>
A : Install [Node.JS](https://nodejs.org/en/).

* Help! It said `Error : Cannot find module 'node-gyp'`<br>
A : Install [node-gyp](https://github.com/nodejs/node-gyp) and [windows-build-tools](https://www.npmjs.com/package/windows-build-tools).

* Help! It said `Error: Invalid converter command`<br>
A: Install [FFMPEG](https://www.ffmpeg.org/download.html), Then put the file path in PATH's System Environment Variable, Then restart your computer.
