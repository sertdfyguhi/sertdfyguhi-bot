const discordjs = require('discord.js')
const discord = new discordjs.Client()
const chancejs = require('chance')
const chance = new chancejs()
const uwufy = require('uwufy')
const superAgent = require('superagent')
const randompuppy = require('random-puppy')
const owofy = require('owofy')
const urban = require('urban')
const math = require('mathjs')
const tinyurl = require('tinyurl')
const translate = require('@vitalets/google-translate-api')
const hastebin = require('hastebin')
const config = require('./config.json')

discord.on('ready', () => {
  console.log('logged in')
  discord.user.setActivity('do .help for commands')
})

discord.on('message', (msg) => {
  if (msg.guild) {
    discord.user.setActivity('do .help for commands')
    if (msg.content == `${config.prefix}credits`) {
      msg.channel.send('*Made by sertdfyguhi#5971*')
    }
    if (msg.content == `${config.prefix}pin`) {
      const author = msg.guild.member(msg.author)
      if (
        author.hasPermission('ADMINISTRATOR') ||
        msg.author.id == '404422844580233217'
      ) {
        msg.pin({ reason: 'a' })
      } else {
        msg.channel.send('Not enough permissions')
      }
    }
    if (msg.content.startsWith(`${config.prefix}help`)) {
      const args = msg.content.slice(config.prefix.length).trim().split(' ')
      if (msg.content == `${config.prefix}help`) {
        const commandsEmbed = new discordjs.MessageEmbed()
          .setTitle('Commands')
          .setColor('#00aaff')
          .setDescription('Prefix: `.`\n\n')
          .addField(
            '**General**',
            '`.help {command}`\n`.credits`\n`.serverinfo`\n`.botinvite`\n`.pin`\n`.prefix`\n`.nick {nickname}`\n`.servericon`\n`.support`'
          )
          .addField(
            '**Moderation**',
            '`.kick {mention} {reason}`\n`.slowmode {channel} {seconds}`'
          )
          .addField(
            '**Fun**',
            '`.random {letter, number, string, color} {hex, shorthex, rgb, 0x(color only)}`\n`.uwu {text}`\n`.owo {text}`\n`.dog`\n`.cat`\n`.embed -{title} -{description} -{hex color}`\n`.say {text}`\n`.dm {text}`\n`.coin`\n`.neko`\n`.fox`\n`.bird`\n`.duck`\n`.seal`\n`.spoilers`\n`.useless`\n`.choose {option} {option}...`\n`.word {number of words}`\n`.proglang`\n`.panda`\n`.binary {encode/decode} {text/binary}`\n`.base64 {encode/decode} {text/base64}`\n`.reverse {text}`\n`.stickbug`\n`.shiba`\n`.mlem`\n`.nugget`\n`.earthporn`\n`.meme`\n`.food`\n`.calculate {calculation}`\n`.pasta`\n`.dice {d4, d6, d8, d10, d12, d20, d30, d100}`\n`.8ball {question}`\n`.rndtranslate {text}`\n`.hug`\n`.koala`\n`.wink`\n`.pat`\n`.rps {rock, paper, scissors}`\n`.japan`\n`.emojitext {text}`'
          )
          // .addField(
          //   '**Nsfw**',
          //   '`.nsfw {pussy, 4k, anal, gif, hentai, lewd, hentaicum}`'
          // )
          .addField(
            '**Misc**',
            '`.avatar {mention}`\n`.ping`\n`.urban {word}`\n`.delete`\n`.lyrics {song name}`\n`.userinfo {mention}`\n`.tinyurl {url}`\n`.poll {channel} {question}`\n`.hastebin {text}`\n`.translate {language} {text}`\n`.translangs`\n`.covid19`'
          )
          .setFooter(
            'Do .help {command} for more info about a specific command'
          )
        msg.author.send(commandsEmbed)
        msg.reply('Check your dms')
      }
      if (args[1] == 'help') {
        msg.channel.send('`.help`: sends command')
      }
      if (args[1] == 'credits') {
        msg.channel.send('`.credits`: sends credits')
      }
      if (args[1] == 'server') {
        msg.channel.send('`.serverinfo`: sends server info')
      }
      if (args[1] == 'botinvite') {
        msg.channel.send('`.botinvite`: sends bot invite')
      }
      if (args[1] == 'pin') {
        msg.channel.send('`.pin`: pins message (admin only)')
      }
      if (args[1] == 'prefix') {
        msg.channel.send('`.prefix`: sends prefix')
      }
      if (args[1] == 'random') {
        msg.channel.send(
          '`.random {letter, number, string, color} {0x, hex shorthex, rgb (color only)}`: sends random letter, number, string or color, 0x, hex, shorthex, rgb is only for color'
        )
      }
      if (args[1] == 'uwu') {
        msg.channel.send('`.uwu`: uwuifies text')
      }
      if (args[1] == 'owo') {
        msg.channel.send('`.owo`: owofies text (basically a better .uwu)')
      }
      if (args[1] == 'dog') {
        msg.channel.send('`.dog`: sends random dog photo')
      }
      if (args[1] == 'urban') {
        msg.channel.send(
          '`.urban {word}`: searches word up on urban dictionary and sends the definition'
        )
      }
      if (args[1] == 'cat') {
        msg.channel.send('`.cat`: sends random cat photo')
      }
      if (args[1] == 'embed') {
        msg.channel.send(
          '`.embed -{title} -{description} -{hex color}`: sends a embed (make sure to add - in front of title, description and color)'
        )
      }
      if (args[1] == 'say') {
        msg.channel.send('`.say {text}`: says text')
      }
      if (args[1] == 'dm') {
        msg.channel.send("`.dm {text}`: dm's message author text")
      }
      if (args[1] == 'coin') {
        msg.channel.send('`.coin`: flips a coin')
      }
      // if (args[1] == 'nsfw') {
      //   msg.channel.send(
      //     '`.nsfw {4k, gif, hentai, anal, pussy, lewd, hentaicum}`: sends random nsfw photo'
      //   )
      // }
      if (args[1] == 'avatar') {
        msg.channel.send("`.avatar {mention}`: sends mentioned user's avatar")
      }
      if (args[1] == 'ping') {
        msg.channel.send('`.ping`: sends bot ping')
      }
      if (args[1] == 'nick') {
        msg.channel.send(
          '`.nick {nickname}`: set your nickname (only for roles under bot role)'
        )
      }
      if (args[1] == 'neko') {
        msg.channel.send('`.neko`: sends random neko pic')
      }
      if (args[1] == 'delete') {
        msg.channel.send('`.delete`: deletes the message')
      }
      if (args[1] == 'fox') {
        msg.channel.send('`.fox`: sends random fox pic')
      }
      if (args[1] == 'bird') {
        msg.channel.send('`.bird`: sends random bird pic')
      }
      if (args[1] == 'duck') {
        msg.channel.send('`.duck`: sends random duck pic')
      }
      if (args[1] == 'seal') {
        msg.channel.send('`.seal`: sends random seal pic')
      }
      if (args[1] == 'spoilers') {
        msg.channel.send('`.spoilers`: hides spoiler message')
      }
      if (args[1] == 'useless') {
        msg.channel.send('`.useless`: sends random useless website')
      }
      if (args[1] == 'servericon') {
        msg.channel.send('`.servericon`: sends server icon')
      }
      if (args[1] == 'choose') {
        msg.channel.send('`.choose {option} {option}...`: helps you decide')
      }
      if (args[1] == 'word') {
        msg.channel.send(
          '`.word {number of words}`: sends random word(s) (cap is 5)'
        )
      }
      if (args[1] == 'proglang') {
        msg.channel.send('`.proglang`: sends random programming language')
      }
      if (args[1] == 'panda') {
        msg.channel.send('`.panda`: sends random panda pic')
      }
      if (args[1] == 'lyrics') {
        msg.channel.send('`.lyrics {song name}`: sends lyrics of song name')
      }
      if (args[1] == 'userinfo') {
        msg.channel.send('`.userinfo {mention}`: sends user info')
      }
      if (args[1] == 'binary') {
        msg.channel.send(
          '`.binary {encode/decode} {text/binary}`: encodes text to binary or decode binary to text'
        )
      }
      if (args[1] == 'base64') {
        msg.channel.send(
          '`.base64 {encode/decode} {text/base64}`: encodes text to base64 or decode base64 to text'
        )
      }
      if (args[1] == 'reverse') {
        msg.channel.send('`.reverse {text}`: reverses text')
      }
      if (args[1] == 'stickbug') {
        msg.channel.send('`.stickbug`: send random stickbug meme')
      }
      if (args[1] == 'shiba') {
        msg.channel.send('`.shiba`: sends random shiba inu pic')
      }
      if (args[1] == 'mlem') {
        msg.channel.send('`.mlem`: sends random mlem pic')
      }
      if (args[1] == 'nugget') {
        msg.channel.send('`.nugget`: sends random nugget pic')
      }
      if (args[1] == 'earthporn') {
        msg.channel.send('`.earthporn`: sends random r/earthporn pic')
      }
      if (args[1] == 'meme') {
        msg.channel.send('`.meme`: sends random meme (probably')
      }
      if (args[1] == 'food') {
        msg.channel.send('`.food`: sends random r/foodporn pic')
      }
      if (args[1] == 'calculate') {
        msg.channel.send('`.calculate {calulation}`: calculates calculation')
      }
      if (args[1] == 'pasta') {
        msg.channel.send('`.pasta`: sends random r/pasta pic')
      }
      if (args[1] == 'dice') {
        msg.channel.send(
          '`.dice {d4, d6, d8, d10, d12, d20, d30, d100}`: rolls a dice'
        )
      }
      if (args[1] == '8ball') {
        msg.channel.send('`.8ball {question}`: ask a question to the 8ball')
      }
      if (args[1] == 'tinyurl') {
        msg.channel.send('`.tinyurl {url}`: shortens a link via tinyurl')
      }
      if (args[1] == 'rndtranslate') {
        msg.channel.send(
          '`.rndtranslate {text}`: translates text into too many languages'
        )
      }
      if (args[1] == 'kick') {
        msg.channel.send(
          '`.kick {mention} {reason}`: kicks mention (admin only)'
        )
      }
      if (args[1] == 'hug') {
        msg.channel.send('`.hug`: sends random anime hug gif')
      }
      if (args[1] == 'koala') {
        msg.channel.send('`.koala`: sends random koala pic')
      }
      if (args[1] == 'wink') {
        msg.channel.send('`.wink`: sends random anime wink gif')
      }
      if (args[1] == 'pat') {
        msg.channel.send('`.pat`: sends random anime pat gif')
      }
      if (args[1] == 'rps') {
        msg.channel.send(
          '`.rps {rock, paper, scissors}`: play a game of rock paper scissors with the bot'
        )
      }
      if (args[1] == 'japan') {
        msg.channel.send('`.japan`: sends random r/japanpics pic')
      }
      if (args[1] == 'poll') {
        msg.channel.send(
          '`.poll {channel} {question}`: creates a poll in channel (admin  only)'
        )
      }
      if (args[1] == 'hastebin') {
        msg.channel.send('`.hastebin {text}`: creates a hastebin')
      }
      if (args[1] == 'emojitext') {
        msg.channel.send(
          '`.emojitext {text}`: translates text to discord emojis'
        )
      }
      if (args[1] == 'translate') {
        msg.channel.send(
          '`.translate {language} {text}`: translates text to language do .translatelangs for supported languages'
        )
      }
      if (args[1] == 'translangs') {
        msg.channel.send(
          '`.translangs`: sends list of supported languages for .translate'
        )
      }
      if (args[1] == 'covid19') {
        msg.channel.send('`.covid19`: sends covid19 statistics')
      }
      if (args[1] == 'slowmode') {
        msg.channel.send(
          '`.slowmode {channel} {seconds}`: sets channel slowmode to seconds'
        )
      }
    }
    if (msg.content.startsWith(`${config.prefix}random`)) {
      const args = msg.content.slice(config.prefix.length).trim().split(' ')
      if (args[1] == 'letter') {
        msg.reply(chance.letter())
      }
      if (args[1] == 'number') {
        msg.reply(chance.integer())
      }
      if (args[1] == 'string') {
        msg.reply(chance.string())
      }
      if (args[1] == 'color') {
        if (args[2] == 'hex') {
          msg.reply(chance.color({ format: 'hex' }))
        }
        if (args[2] == 'shorthex') {
          msg.reply(chance.color({ format: 'shorthex' }))
        }
        if (args[2] == 'rgb') {
          msg.reply(chance.color({ format: 'rgb' }))
        }
        if (args[2] == '0x') {
          msg.reply(chance.color({ format: '0x' }))
        }
      }
    }
    if (msg.content == `${config.prefix}botinvite`) {
      msg.channel.send(
        'https://discord.com/oauth2/authorize?client_id=754514209357955132&permissions=8&scope=bot'
      )
    }
    if (msg.content.startsWith(`${config.prefix}avatar`)) {
      const user = msg.mentions.users.first()
      if (user) {
        const avatarEmbed = new discordjs.MessageEmbed()
          .setTitle(`${user.tag}\'s avatar`)
          .setThumbnail(user.displayAvatarURL({ dynamic: true }))
          .setColor('#00e98a')
        msg.channel.send(avatarEmbed)
      } else {
        const avatarEmbed = new discordjs.MessageEmbed()
          .setTitle(`${msg.author.tag}\'s avatar`)
          .setThumbnail(msg.author.displayAvatarURL({ dynamic: true }))
          .setColor('#00e98a')
        msg.channel.send(avatarEmbed)
      }
    }
    if (msg.content.startsWith(`${config.prefix}dm`)) {
      const args = msg.content.slice(config.prefix.length).trim().split('dm ')
      msg.channel.send('Message sent')
      msg.author.send(args[1])
    }
    if (msg.content.startsWith(`${config.prefix}embed`)) {
      const args = msg.content.slice(config.prefix.length).trim().split('-')
      const embed = new discordjs.MessageEmbed()
        .setTitle(args[1])
        .setDescription(args[2])
        .setColor(args[3])
      msg.channel.send(embed)
    }
    if (msg.content == `${config.prefix}serverinfo`) {
      const serverEmbed = new discordjs.MessageEmbed()
        .setTitle('Server info')
        .setThumbnail(msg.guild.iconURL())
        .setColor('#007bff')
        .addField('**Server name**', msg.guild.name, true)
        .addField('**Member count**', msg.guild.memberCount, true)
        .addField('**Role count**', msg.guild.roles.cache.size, true)
        .addField(
          '**Bot count**',
          msg.guild.members.cache.filter((member) => member.user.bot).size,
          true
        )
        .addField('**Channel count**', msg.guild.channels.cache.size, true)
        .addField('**Server owner**', msg.guild.owner, true)
      msg.channel.send(serverEmbed)
    }
    if (msg.content.startsWith(`${config.prefix}say`)) {
      const args = msg.content.slice(config.prefix.length).trim().split('say ')
      if (args[1].includes('@')) {
        msg.channel.send("I won't say that")
      } else {
        msg.channel.send(args[1])
      }
    }
    // if (msg.content.startsWith(`${config.prefix}nsfw`)) {
    //   nsfw()
    //   async function nsfw() {
    //     const args = msg.content.slice(config.prefix.length).trim().split(' ')
    //     if (msg.channel.nsfw == true) {
    //       if (args[1] == 'hentai') {
    //         var { body } = await superAgent.get(
    //           'https://nekobot.xyz/api/image?type=hentai'
    //         )

    //         const hentai = new discordjs.MessageEmbed()
    //           .setImage(body.message)
    //           .setColor('#d059d8')
    //         msg.channel.send(hentai)
    //       }
    //       if (args[1] == 'anal') {
    //         var { body } = await superAgent.get(
    //           'https://nekobot.xyz/api/image?type=anal'
    //         )

    //         const anal = new discordjs.MessageEmbed()
    //           .setImage(body.message)
    //           .setColor('#d059d8')
    //         msg.channel.send(anal)
    //       }
    //       if (args[1] == 'gif') {
    //         var { body } = await superAgent.get(
    //           'https://nekobot.xyz/api/image?type=pgif'
    //         )

    //         const gif = new discordjs.MessageEmbed()
    //           .setImage(body.message)
    //           .setColor('#d059d8')
    //         msg.channel.send(gif)
    //       }
    //       if (args[1] == '4k') {
    //         var { body } = await superAgent.get(
    //           'https://nekobot.xyz/api/image?type=4k'
    //         )

    //         const fourk = new discordjs.MessageEmbed()
    //           .setImage(body.message)
    //           .setColor('#d059d8')
    //         msg.channel.send(fourk)
    //       }
    //       if (args[1] == 'pussy') {
    //         var { body } = await superAgent.get(
    //           'https://nekobot.xyz/api/image?type=pussy'
    //         )

    //         const pussy = new discordjs.MessageEmbed()
    //           .setImage(body.message)
    //           .setColor('#d059d8')
    //         msg.channel.send(pussy)
    //       }
    //       if (args[1] == 'lewd') {
    //         var { body } = await superAgent.get(
    //           'https://nekos.life/api/v2/img/lewd'
    //         )

    //         const lewd = new discordjs.MessageEmbed()
    //           .setImage(body.url)
    //           .setColor('#d059d8')
    //         msg.channel.send(lewd)
    //       }
    //       if (args[1] == 'hentaicum') {
    //         var { body } = await superAgent.get(
    //           'https://nekos.life/api/v2/img/cum'
    //         )

    //         const hentaicum = new discordjs.MessageEmbed()
    //           .setImage(body.url)
    //           .setColor('#d059d8')
    //         msg.channel.send(hentaicum)
    //       }
    //     } else {
    //       msg.channel.send('You can only use this command in nsfw channels')
    //     }
    //   }
    // }
    if (msg.content == `${config.prefix}ping`) {
      msg.channel.send(`${Date.now() - msg.createdTimestamp}ms`)
    }
    if (msg.content.startsWith(`${config.prefix}uwu`)) {
      const uwu = msg.content.substr(`${config.prefix}uwu `.length)
      msg.channel.send(uwufy(uwu))
    }
    if (msg.content == `${config.prefix}prefix`) {
      msg.channel.send('Prefix is: ' + config.prefix)
    }
    if (msg.content == `${config.prefix}coin`) {
      msg.reply(chance.coin())
    }
    if (msg.content == `${config.prefix}dog`) {
      dog()
      async function dog() {
        var { body } = await superAgent.get('https://random.dog/woof.json')

        const dogEmbed = new discordjs.MessageEmbed()
          .setImage(body.url)
          .setColor('#e99000')
        msg.channel.send(dogEmbed)
      }
    }
    if (msg.content == `${config.prefix}cat`) {
      cat()
      async function cat() {
        var { body } = await superAgent.get('http://aws.random.cat/meow')

        const catEmbed = new discordjs.MessageEmbed()
          .setImage(body.file)
          .setColor('#a2b0dc')
        msg.channel.send(catEmbed)
      }
    }
    if (msg.content.startsWith(`${config.prefix}owo`)) {
      const owo = msg.content.substr(`${config.prefix}owo `.length)
      msg.channel.send(owofy(owo))
    }
    if (msg.content.startsWith(`${config.prefix}nick`)) {
      const nickname = msg.content.substr(`${config.prefix}nick `.length)
      msg.guild.member(msg.author).setNickname(nickname)
    }
    if (msg.content.startsWith(`${config.prefix}urban`)) {
      const a = msg.content.substr(`${config.prefix}urban `.length)
      const search = urban(a)
      search.first(function (json) {
        if (!json == '') {
          if (json.definition.length <= 2000) {
            msg.channel
              .send(
                `**Definition**\n${json.definition}\n\n**Example**\n${json.example}\n\nby ${json.author}`
              )
              .catch(() => {
                msg.channel.send(
                  `Definition has too much letters, use link instead ${json.permalink}`
                )
              })
          }
        } else {
          msg.channel.send('No results')
        }
      })
    }
    if (msg.content == `${config.prefix}neko`) {
      neko()
      async function neko() {
        var { body } = await superAgent.get(
          'https://nekos.life/api/v2/img/neko'
        )

        const nekoembed = new discordjs.MessageEmbed()
          .setImage(body.url)
          .setColor('#fff23d')
        msg.channel.send(nekoembed)
      }
    }
    if (msg.content == `${config.prefix}delete`) {
      msg.delete({ reason: 'a' })
    }
    if (msg.content == `${config.prefix}fox`) {
      fox()
      async function fox() {
        var { body } = await superAgent.get('https://randomfox.ca/floof/')

        const embed = new discordjs.MessageEmbed()
          .setImage(body.image)
          .setColor('#ffa83d')
        msg.channel.send(embed)
      }
    }
    if (msg.content == `${config.prefix}bird`) {
      bird()
      async function bird() {
        var { body } = await superAgent.get(
          'https://some-random-api.ml/img/birb'
        )

        const embed = new discordjs.MessageEmbed()
          .setImage(body.link)
          .setColor('#ffffff')
        msg.channel.send(embed)
      }
    }
    if (msg.content == `${config.prefix}duck`) {
      duck()
      async function duck() {
        var { body } = await superAgent.get('https://random-d.uk/api/v2/quack')

        const embed = new discordjs.MessageEmbed()
          .setImage(body.url)
          .setColor('#ff7b00')
        msg.channel.send(embed)
      }
    }
    if (msg.content.startsWith(`${config.prefix}seal`)) {
      let num = chance.natural({ min: 1, max: 86 })
      msg.channel.send({
        files: [`https://investigationelimination.xyz/seals/${num}.jpg`],
      })
    }
    if (msg.content.startsWith(`${config.prefix}spoilers`)) {
      const spoiler = msg.content.substr(`${config.prefix}spoilers `.length)
      if (spoiler.includes('@')) {
        msg.channel.send("I won't say that")
      } else {
        msg.channel.send(`||${spoiler}||`)
      }
    }
    if (msg.content == `${config.prefix}useless`) {
      let sites = [
        'http://heeeeeeeey.com/',
        'http://thatsthefinger.com/',
        'http://cant-not-tweet-this.com/',
        'http://eelslap.com/',
        'http://www.staggeringbeauty.com/',
        'http://burymewithmymoney.com/',
        'http://www.fallingfalling.com/',
        'http://ducksarethebest.com/',
        'http://www.trypap.com/',
        'http://www.republiquedesmangues.fr/',
        'http://www.movenowthinklater.com/',
        'http://www.partridgegetslucky.com/',
        'http://www.rrrgggbbb.com/',
        'http://beesbeesbees.com/',
        'http://www.sanger.dk/',
        'http://www.koalastothemax.com/',
        'http://www.everydayim.com/',
        'http://www.leduchamp.com/',
        'http://grandpanoclothes.com/',
        'http://www.haneke.net/',
        'http://r33b.net/',
        'http://randomcolour.com/',
        'http://cat-bounce.com/',
        'http://cachemonet.com/',
        'http://www.sadforjapan.com/',
        'http://www.taghua.com/',
        'http://chrismckenzie.com/',
        'http://hasthelargehadroncolliderdestroyedtheworldyet.com/',
        'http://ninjaflex.com/',
        'http://iloveyoulikeafatladylovesapples.com/',
        'http://ihasabucket.com/',
        'http://corndogoncorndog.com/',
        'http://giantbatfarts.com/',
        'http://www.ringingtelephone.com/',
        'http://www.pointerpointer.com/',
        'http://www.pleasedonate.biz/',
        'http://imaninja.com/',
        'http://willthefuturebeaweso.me/',
        'http://salmonofcapistrano.com/',
        'http://www.ismycomputeron.com/',
        'http://www.wwwdotcom.com/',
        'http://www.nullingthevoid.com/',
        'http://www.muchbetterthanthis.com/',
        'http://www.ouaismaisbon.ch/',
        'http://iamawesome.com/',
        'http://www.pleaselike.com/',
        'http://crouton.net/',
        'http://corgiorgy.com/',
        'http://www.electricboogiewoogie.com/',
        'http://www.nelson-haha.com/',
        'http://www.wutdafuk.com/',
        'http://unicodesnowmanforyou.com/',
        'http://tencents.info/',
        'http://intotime.com/',
        'http://leekspin.com/',
        'http://minecraftstal.com/',
        'http://www.riddlydiddly.com/',
        'http://www.patience-is-a-virtue.org/',
        'http://whitetrash.nl/',
        'http://www.theendofreason.com/',
        'http://zombo.com',
        'http://secretsfornicotine.com/',
        'http://pixelsfighting.com/',
        'http://crapo.la/',
        'http://baconsizzling.com/',
        'http://isitwhite.com/',
        'http://noot.space/',
        'http://tomsdog.com/',
        'http://hardcoreprawnlawn.com/',
        'http://www.omfgdogs.com/',
      ]
      let url = chance.pickone(sites)
      msg.channel.send(`Here is your useless website:\n${url}`)
    }
    if (msg.content == `${config.prefix}servericon`) {
      msg.channel.send(msg.guild.iconURL({ dynamic: true }))
    }
    if (msg.content.startsWith(`${config.prefix}choose`)) {
      const args = msg.content
        .slice(`${config.prefix}choose `.length)
        .trim()
        .split(' ')
      const num = chance.natural({ min: 1, max: args.length })
      if (args[1]) {
        msg.channel.send(args[num])
      } else {
        msg.channel.send('No options to choose from')
      }
    }
    if (msg.content.startsWith(`${config.prefix}word`)) {
      word()
      async function word() {
        const args = msg.content.slice(config.prefix.length).trim().split(' ')
        if (args[1] == '') {
          var { body } = await superAgent.get(
            `https://random-word-api.herokuapp.com/word`
          )
          msg.channel.send(body)
        }
        if (args[1] <= 5) {
          var { body } = await superAgent.get(
            `https://random-word-api.herokuapp.com/word?number=${args[1]}`
          )
          msg.channel.send(body)
        }
        if (args[1] > 5) {
          msg.channel.send('You have reached the cap')
        }
      }
    }
    if (msg.content == `${config.prefix}proglang`) {
      let proglangs = [
        'ActionScript',
        'AppleScript',
        'Averest',
        'Axum',
        'Batch file',
        'BCPL',
        'BETA',
        'BLISS',
        'Boomerang',
        'C++',
        'C',
        'C#',
        'C Shell',
        'C--',
        'C-',
        'CFEngine',
        'Chapel',
        'chomski',
        'CL',
        'CoffeeScript',
        'Clipper',
        'Clojure',
        'Crystal',
        'COMTRAN',
        'Cython',
        'Cyclone',
        'D',
        'Dart',
        'Datalog',
        'dBase',
        'DCL',
        'Dog',
        'ECMAScript',
        'Eiffel',
        'EPL',
        'Escher',
        'F#',
        'FL',
        'Flex',
        'F-Script',
        'Go',
        'GRASS',
        'Hack',
        'Haxe',
        'Hugo',
        'HyperTalk',
        'Idris',
        'J#',
        'J++',
        'Java',
        'JScript',
        'JavaScript',
        'K',
        'Kotlin',
        'Ladder',
        'LIL',
        'Logo',
        'LiveCode',
        'LiveScript',
        'Lynx',
        'M#',
        'Mercury',
        'Modula',
        'MPD',
        'Nim',
        'Pizza',
        'PostScript',
        'Python',
        'Q',
        'Q#',
        'R',
        'R++',
        'TypeScript',
        'XML',
        'X++',
        'h++',
        'YAML',
        'Z++',
      ]
      msg.channel.send(chance.pickone(proglangs))
    }
    if (msg.content == `${config.prefix}panda`) {
      panda()
      async function panda() {
        var { body } = await superAgent.get(
          'https://some-random-api.ml/img/panda'
        )

        const embed = new discordjs.MessageEmbed()
          .setImage(body.link)
          .setColor('#000000')
        msg.channel.send(embed)
      }
    }
    if (msg.content.startsWith(`${config.prefix}lyrics`)) {
      lyrics()
      async function lyrics() {
        const songtosearch = msg.content.substr(
          `${config.prefix}lyrics `.length
        )
        var { body } = await superAgent
          .get(`https://some-random-api.ml/lyrics?title=${songtosearch}`)
          .catch((err) => {
            msg.channel.send('No results')
          })

        if (body.lyrics.length > 2000) {
          msg.channel.send(
            `Lyrics has too much letters, use the link instead ${body.links.genius}`
          )
        }
        if (body.lyrics.length <= 2000) {
          msg.channel.send(
            `**${body.title}**\n\n**Lyrics**\n${body.lyrics}\n\n*by ${body.author}*`
          )
        }
      }
    }
    if (msg.content.startsWith(`${config.prefix}userinfo`)) {
      const user = msg.mentions.users.first()
      if (user) {
        const embed = new discordjs.MessageEmbed()
          .setTitle(`${user.tag}\'s info`)
          .setTimestamp()
          .addField('**Username**', user.username, true)
          .addField('**Nickname**', msg.guild.member(user).nickname, true)
          .addField('**Status**', user.presence.status, true)
          .addField('**Discord ID**', user.id, true)
          .setThumbnail(user.displayAvatarURL({ dynamic: true }))
        msg.channel.send(embed)
      } else {
        msg.channel.send('That is not a user')
      }
    }
    if (msg.content.startsWith(`${config.prefix}binary`)) {
      binary()
      async function binary() {
        const args = msg.content
          .slice(`${config.prefix}binary `.length)
          .trim()
          .split(' ')
        const a = msg.content.substr(
          `${config.prefix}binary ${args[0]} `.length
        )
        if (args[0] == 'encode') {
          if (a.includes('@')) {
            msg.channel.send("I won't encode that")
          } else {
            var { body } = await superAgent.get(
              `https://some-random-api.ml/binary?text=${a}`
            )
            msg.channel.send(body.binary)
          }
        }
        if (args[0] == 'decode') {
          var { body } = await superAgent.get(
            `https://some-random-api.ml/binary?decode=${a}`
          )
          if (body.text.includes('@')) {
            msg.channel.send("I won't say that")
          } else {
            msg.channel.send(body.text)
          }
        }
      }
    }
    if (msg.content.startsWith(`${config.prefix}base64`)) {
      base64()
      async function base64() {
        const args = msg.content
          .slice(`${config.prefix}base64 `.length)
          .trim()
          .split(' ')
        const a = msg.content.substr(
          `${config.prefix}base64 ${args[0]} `.length
        )
        if (args[0] == 'encode') {
          if (a.includes('@')) {
            msg.channel.send("I won't encode that")
          } else {
            var { body } = await superAgent.get(
              `https://some-random-api.ml/base64?encode=${a}`
            )
            msg.channel.send(body.base64)
          }
        }
        if (args[0] == 'decode') {
          var { body } = await superAgent.get(
            `https://some-random-api.ml/base64?decode=${a}`
          )
          if (body.text.includes('@')) {
            msg.channel.send("I won't say that")
          } else {
            msg.channel.send(body.text)
          }
        }
      }
    }
    if (msg.content.startsWith(`${config.prefix}reverse`)) {
      const a = msg.content.substr(`${config.prefix}reverse `.length)
      if (a.includes('@')) {
        msg.channel.send("I won't say that")
      } else {
        msg.channel.send(a.split('').reverse().join(''))
      }
    }
    if (msg.content == `${config.prefix}stickbug`) {
      let stickbug = [
        'https://www.youtube.com/watch?v=CNZdYtKhmQg',
        'https://www.youtube.com/watch?v=ImAUJsMNWbY',
        'https://www.youtube.com/watch?v=yI0M0dDf25w',
        'https://www.youtube.com/watch?v=dmHvFREgtXQ',
        'https://www.youtube.com/watch?v=6ZE2U3eHVbs',
        'https://www.youtube.com/watch?v=AgL6taMkdno',
        'https://www.youtube.com/watch?v=q60DiCzAVqE',
        'https://www.youtube.com/watch?v=HTsNFidPJsc',
        'https://www.youtube.com/watch?v=FCdy15lShps',
        'https://www.youtube.com/watch?v=oafyVBCXBpU',
        'https://www.youtube.com/watch?v=QuJ4Ferb5Go',
        'https://www.youtube.com/watch?v=KlRSpUag9qo',
        'https://www.youtube.com/watch?v=ycec961dsvE',
        'https://www.youtube.com/watch?v=jxuWJWr80Tg',
        'https://www.youtube.com/watch?v=Tt7bzxurJ1I',
        'https://www.youtube.com/watch?v=Ky19VRTfr68',
        'https://www.youtube.com/watch?v=6r5eGfbbLgk',
        'https://www.youtube.com/watch?v=-CbxUk8QX9M',
        'https://www.youtube.com/watch?v=a3HstRzn0_k',
        'https://www.youtube.com/watch?v=iP6lKwBUvqs',
        'https://www.youtube.com/watch?v=8g4D0a-tbxI',
        'https://www.youtube.com/watch?v=gmkvLKUf54A',
        'https://www.youtube.com/watch?v=l-NUzmmJVCk',
        'https://www.youtube.com/watch?v=q6s99eH9EC8',
      ]
      msg.channel.send(chance.pickone(stickbug))
    }
    if (msg.content == `${config.prefix}shiba`) {
      shiba()
      async function shiba() {
        var { body } = await superAgent.get('http://shibe.online/api/shibes')
        msg.channel.send(body)
      }
    }
    if (msg.content == `${config.prefix}mlem`) {
      mlem()
      async function mlem() {
        var { body } = await superAgent.get('https://mlem.tech/api/randommlem')

        const embed = new discordjs.MessageEmbed()
          .setImage(body.url)
          .setColor('#ba7627')
        msg.channel.send(embed)
      }
    }
    if (msg.content == `${config.prefix}nugget`) {
      let num = chance.natural({ min: 1, max: 70 })
      msg.channel.send({
        files: [`https://investigationelimination.xyz/nugget/${num}.jpeg`],
      })
    }
    if (msg.content == `${config.prefix}earthporn`) {
      randompuppy('earthporn').then((url) => {
        const embed = new discordjs.MessageEmbed()
          .setImage(url)
          .setColor('#00ab17')
        msg.channel.send(embed)
      })
    }
    if (msg.content == `${config.prefix}meme`) {
      meme()
      async function meme() {
        var { body } = await superAgent.get('https://some-random-api.ml/meme')

        const embed = new discordjs.MessageEmbed()
          .setTitle(body.caption)
          .setImage(body.image)
          .setColor('#000000')
        msg.channel.send(embed)
      }
    }
    if (msg.content == `${config.prefix}food`) {
      randompuppy('foodporn').then((url) => {
        const embed = new discordjs.MessageEmbed()
          .setImage(url)
          .setColor('#ff0000')
        msg.channel.send(embed)
      })
    }
    if (msg.content.startsWith(`${config.prefix}calculate`)) {
      const a = msg.content.substr(`${config.prefix}calculate `.length)
      let ans
      try {
        ans = math.evaluate(a)
      } catch (e) {
        msg.channel.send('That is not a valid calculation.')
      }
      if (ans) {
        msg.channel.send(ans)
      }
    }
    if (msg.content == `${config.prefix}pasta`) {
      randompuppy('pasta').then((url) => {
        const embed = new discordjs.MessageEmbed()
          .setImage(url)
          .setColor('#005eff')
        msg.channel.send(embed)
      })
    }
    if (msg.content.startsWith(`${config.prefix}dice`)) {
      const d = msg.content.slice(config.prefix.length).trim().split(' ')
      if (d) {
        if (d[1] == 'd4') {
          msg.channel.send(chance.d4())
        }
        if (d[1] == 'd6') {
          msg.channel.send(chance.d6())
        }
        if (d[1] == 'd8') {
          msg.channel.send(chance.d8())
        }
        if (d[1] == 'd10') {
          msg.channel.send(chance.d10())
        }
        if (d[1] == 'd12') {
          msg.channel.send(chance.d12())
        }
        if (d[1] == 'd20') {
          msg.channel.send(chance.d20())
        }
        if (d[1] == 'd30') {
          msg.channel.send(chance.d30())
        }
        if (d[1] == 'd100') {
          msg.channel.send(chance.d100())
        }
      } else {
        msg.channel.send("You didn't specify to use what roll of the dice")
      }
    }
    if (msg.content.startsWith(`${config.prefix}8ball`)) {
      const a = msg.content.substr(`${config.prefix}8ball `.length)
      let res = [
        'As I see it, yes.',
        'Ask again later.',
        'Better not tell you now.',
        'Cannot predict now.',
        'Concentrate and ask again.',
        'Don’t count on it.',
        'It is certain.',
        'It is decidedly so.',
        'Most likely.',
        'My reply is no.',
        'My sources say no.',
        'Outlook not so good.',
        'Outlook good.',
        'Reply hazy, try again.',
        'Signs point to yes.',
        'Very doubtful.',
        'Without a doubt.',
        'Yes.',
        'Yes – definitely.',
        'You may rely on it.',
      ]
      if (!a) {
        msg.channel.send("You didn't specify your question")
      } else {
        msg.channel.send(chance.pickone(res))
      }
    }
    if (msg.content.startsWith(`${config.prefix}tinyurl`)) {
      const a = msg.content.substr(`${config.prefix}tinyurl `.length)
      if (a) {
        tinyurl.shorten(a).then(function (res) {
          if (res == 'Error') {
            msg.channel.send('That is not a valid url')
          } else {
            msg.channel.send(res)
          }
        })
      } else {
        msg.channel.send("You didn' specify a link to shorten")
      }
    }
    if (msg.content.startsWith(`${config.prefix}rndtranslate`)) {
      const a = msg.content.substr(`${config.prefix}translate `.length)
      let l = JSON.parse(
        '{"af": "Afrikaans", "sq": "Albanian", "am": "Amharic", "ar": "Arabic", "hy": "Armenian", "az": "Azerbaijani", "eu": "Basque", "be": "Belarusian", "bn": "Bengali", "bs": "Bosnian", "bg": "Bulgarian", "ca": "Catalan", "ceb": "Cebuano", "ny": "Chichewa", "zh-CN": "Chinese (Simplified)", "zh-TW": "Chinese (Traditional)", "co": "Corsican", "hr": "Croatian", "cs": "Czech", "da": "Danish", "nl": "Dutch", "en": "English", "eo": "Esperanto", "et": "Estonian", "tl": "Filipino", "fi": "Finnish", "fr": "French", "fy": "Frisian", "gl": "Galician", "ka": "Georgian", "de": "German", "el": "Greek", "gu": "Gujarati", "ht": "Haitian Creole", "ha": "Hausa", "haw": "Hawaiian", "he": "Hebrew", "iw": "Hebrew", "hi": "Hindi", "hmn": "Hmong", "hu": "Hungarian", "is": "Icelandic", "ig": "Igbo", "id": "Indonesian", "ga": "Irish", "it": "Italian", "ja": "Japanese", "jw": "Javanese", "kn": "Kannada", "kk": "Kazakh", "km": "Khmer", "ko": "Korean", "ku": "Kurdish (Kurmanji)", "ky": "Kyrgyz", "lo": "Lao", "la": "Latin", "lv": "Latvian", "lt": "Lithuanian", "lb": "Luxembourgish", "mk": "Macedonian", "mg": "Malagasy", "ms": "Malay", "ml": "Malayalam", "mt": "Maltese", "mi": "Maori", "mr": "Marathi", "mn": "Mongolian", "my": "Myanmar (Burmese)", "ne": "Nepali", "no": "Norwegian", "ps": "Pashto", "fa": "Persian", "pl": "Polish", "pt": "Portuguese", "pa": "Punjabi", "ro": "Romanian", "ru": "Russian", "sm": "Samoan", "gd": "Scots Gaelic", "sr": "Serbian", "st": "Sesotho", "sn": "Shona", "sd": "Sindhi", "si": "Sinhala", "sk": "Slovak", "sl": "Slovenian", "so": "Somali", "es": "Spanish", "su": "Sundanese", "sw": "Swahili", "sv": "Swedish", "tg": "Tajik", "ta": "Tamil", "te": "Telugu", "th": "Thai", "tr": "Turkish", "uk": "Ukrainian", "ur": "Urdu", "uz": "Uzbek", "vi": "Vietnamese", "cy": "Welsh","xh": "Xhosa", "yi": "Yiddish", "yo": "Yoruba", "zu": "Zulu"}'
      )
      let language = []
      for (var i in l) language.push(l[i])
      translate(a, { to: chance.pickone(language) }).then((res) => {
        translate(res.text, { to: chance.pickone(language) }).then((res) => {
          translate(res.text, { to: chance.pickone(language) }).then((res) => {
            translate(res.text, { to: chance.pickone(language) }).then(
              (res) => {
                translate(res.text, { to: chance.pickone(language) }).then(
                  (res) => {
                    translate(res.text, { to: chance.pickone(language) }).then(
                      (res) => {
                        translate(res.text, {
                          to: chance.pickone(language),
                        }).then((res) => {
                          translate(res.text, {
                            to: chance.pickone(language),
                          }).then((res) => {
                            translate(res.text, {
                              to: chance.pickone(language),
                            }).then((res) => {
                              translate(res.text, {
                                to: chance.pickone(language),
                              }).then((res) => {
                                translate(res.text, {
                                  to: chance.pickone(language),
                                }).then((res) => {
                                  translate(res.text, {
                                    to: chance.pickone(language),
                                  }).then((res) => {
                                    translate(res.text, { to: 'en' }).then(
                                      (res) => {
                                        msg.channel.send(res.text)
                                      }
                                    )
                                  })
                                })
                              })
                            })
                          })
                        })
                      }
                    )
                  }
                )
              }
            )
          })
        })
      })
    }
    if (msg.content.startsWith(`${config.prefix}kick`)) {
      if (
        msg.guild.member(msg.author).hasPermission('ADMINISTRATOR') ||
        msg.author.id == '404422844580233217'
      ) {
        const user = msg.mentions.users.first()
        const reason = msg.content.substr(`${config.prefix}kick ${user} `)
        if (user) {
          const member = msg.guild.member(user)
          if (member) {
            if (member.hasPermission('ADMINISTRATOR')) {
              msg.channel.send('I cannot ban that user')
            } else {
              member.kick(reason).then(() => {
                msg.channel.send(`Successfully kicked ${user.tag}`)
              })
            }
          } else {
            msg.channel.send(`That user is not in this server`)
          }
        } else {
          msg.channel.send("You didn't specify a user to kick")
        }
      } else {
        msg.channel.send("You don' have enough permissions")
      }
    }
    if (msg.content == `${config.prefix}hug`) {
      hug()
      async function hug() {
        var { body } = await superAgent.get(
          'https://some-random-api.ml/animu/hug'
        )
        const embed = new discordjs.MessageEmbed()
          .setImage(body.link)
          .setColor('#ff42f2')
        msg.channel.send(embed)
      }
    }
    if (msg.content == `${config.prefix}koala`) {
      koala()
      async function koala() {
        var { body } = await superAgent.get(
          'https://some-random-api.ml/img/koala'
        )
        const embed = new discordjs.MessageEmbed()
          .setImage(body.link)
          .setColor('#fffff')
        msg.channel.send(embed)
      }
    }
    if (msg.content == `${config.prefix}wink`) {
      wink()
      async function wink() {
        var { body } = await superAgent.get(
          'https://some-random-api.ml/animu/wink'
        )
        const embed = new discordjs.MessageEmbed()
          .setImage(body.link)
          .setColor('#ff0363')
        msg.channel.send(embed)
      }
    }
    if (msg.content == `${config.prefix}pat`) {
      pat()
      async function pat() {
        var { body } = await superAgent.get(
          'https://some-random-api.ml/animu/pat'
        )
        const embed = new discordjs.MessageEmbed()
          .setImage(body.link)
          .setColor('#525252')
        msg.channel.send(embed)
      }
    }
    if (msg.content.startsWith(`${config.prefix}rps`)) {
      const args = msg.content.slice(config.prefix.length).trim().split(' ')
      if (args[1]) {
        const a = args[1].toLowerCase()
        if (a == 'rock' || a == 'paper' || a == 'scissors') {
          let v = chance.pickone(['Rock', 'Paper', 'Scissors'])
          msg.channel.send(v)
          if (a == 'rock' && v == 'Scissors') {
            msg.channel.send('Player wins')
          }
          if (a == 'rock' && v == 'Paper') {
            msg.channel.send('Bot wins')
          }
          if (a == 'rock' && v == 'Rock') {
            msg.channel.send('Tie')
          }
          if (a == 'scissors' && v == 'Scissors') {
            msg.channel.send('Tie')
          }
          if (a == 'scissors' && v == 'Rock') {
            msg.channel.send('Bot wins')
          }
          if (a == 'scissors' && v == 'paper') {
            msg.channel.send('Player wins')
          }
          if (a == 'paper' && v == 'Rock') {
            msg.channel.send('Player wins')
          }
          if (a == 'paper' && v == 'Scissors') {
            msg.channel.send('Bot wins')
          }
          if (a == 'paper' && v == 'Paper') {
            msg.channel.send('Tie')
          }
        } else {
          msg.channel.send('That is not rock, paper or scissors')
        }
      } else {
        msg.channel.send("You didn't say rock, paper or scissors")
      }
    }
    if (msg.content == `${config.prefix}japan`) {
      randompuppy('japanpics').then((url) => {
        const embed = new discordjs.MessageEmbed()
          .setImage(url)
          .setColor('#1bc904')
        msg.channel.send(embed)
      })
    }
    if (msg.content.startsWith(`${config.prefix}poll`)) {
      poll()
      async function poll() {
        if (
          msg.guild.member(msg.author).hasPermission('ADMINISTRATOR') ||
          msg.author.id == '404422844580233217'
        ) {
          const channel = msg.mentions.channels.first()
          if (channel) {
            const y = msg.content.substr(
              `${config.prefix}poll ${channel} `.length
            )
            if (y) {
              const embed = new discordjs.MessageEmbed()
                .setTitle('Poll')
                .setDescription(y)
                .setFooter(`This poll is generated by ${msg.author.tag}`)
              let mess = await msg.guild.channels.cache
                .get(channel.id)
                .send(embed)
              msg.channel.send('Sucessfully created poll')
              await mess.react('✅')
              await mess.react('❌')
            } else {
              msg.channel.send("You didn't specify a question for your poll")
            }
          } else {
            msg.channel.send("You didn't mention a channel to start a poll in")
          }
        } else {
          msg.channel.send("You don't have enough permissions")
        }
      }
    }
    if (msg.content.startsWith(`${config.prefix}hastebin`)) {
      const a = msg.content.substr(`${config.prefix}hastebin `.length)
      hastebin.createPaste(a).then((urlToPaste) => {
        msg.channel.send(urlToPaste)
      })
    }
    if (msg.content.startsWith(`${config.prefix}emojitext`)) {
      const ahhhhh = msg.content.substr(`${config.prefix}emojitext `.length)
      if (ahhhhh) {
        const a = ahhhhh.toLowerCase()
        let w = {
          a: ':regional_indicator_a:',
          b: ':regional_indicator_b:',
          c: ':regional_indicator_c:',
          d: ':regional_indicator_d:',
          e: ':regional_indicator_e:',
          f: ':regional_indicator_f:',
          g: ':regional_indicator_g:',
          h: ':regional_indicator_h:',
          i: ':regional_indicator_i:',
          j: ':regional_indicator_j:',
          k: ':regional_indicator_k:',
          l: ':regional_indicator_l:',
          m: ':regional_indicator_m:',
          n: ':regional_indicator_n:',
          o: ':regional_indicator_o:',
          p: ':regional_indicator_p:',
          q: ':regional_indicator_q:',
          r: ':regional_indicator_r:',
          s: ':regional_indicator_s:',
          t: ':regional_indicator_t:',
          u: ':regional_indicator_u:',
          v: ':regional_indicator_v:',
          w: ':regional_indicator_w:',
          x: ':regional_indicator_x:',
          y: ':regional_indicator_y:',
          z: ':regional_indicator_z:',
          1: ':one:',
          2: ':two:',
          3: ':three:',
          4: ':four:',
          5: ':five:',
          6: ':six:',
          7: ':seven:',
          8: ':eight:',
          9: ':nine:',
          0: ':zero:',
        }
        let res = []
        a.split(' ').map(function (word) {
          word.split('').map(function (letter) {
            res.push(w[letter])
          })
          res.push(' ')
        })
        if (res.join('') == ' ') {
          msg.channel.send('I cannot translate that')
        } else {
          msg.channel.send(res.join(''))
        }
      } else {
        msg.channel.send("You didn't type anything for me to translate")
      }
    }
    if (msg.content.startsWith(`${config.prefix}translate`)) {
      const args = msg.content.slice(config.prefix.length).trim().split(' ')
      const a = msg.content.substr(
        `${config.prefix}translate ${args[1]} `.length
      )
      const r = args[1].toLowerCase()
      if (r) {
        if (a) {
          translate(a, { to: r })
            .catch(() => {
              msg.channel.send(
                'That language is not supported.=, do .translangs for all the supported languages'
              )
            })
            .then((res) => {
              if (res) {
                msg.channel.send(res.text)
              }
            })
        }
      } else {
        msg.channel.send("You didn't specify a language to translate to")
      }
    }
    if (msg.content == `${config.prefix}translangs`) {
      msg.author.send(
        'translate languages\n\nauto: Automatic\naf: Afrikaans\nsq: Albanian\nam: Amharic\nar: Arabic\nhy: Armenian\naz: Azerbaijani\neu: Basque\be: Belarusian\nbn: Bengali\nbs: Bosnian\nbg: Bulgarian\nca: Catalan\nceb: Cebuano\nny: Chichewa\nzh-CN: Chinese (Simplified)\nzh-TW: Chinese (Traditional)\nco: Corsican\nhr: Croatian\ncs: Czech\nda: Danish\nnl: Dutch\nen: English\neo: Esperanto\net: Estonian\ntl: Filipino\nfi: Finnish\nfr: French\nfy: Frisian\ngl: Galician\nka: Georgian\nde: German\nel: Greek\ngu: Gujarati\nht: Haitian Creole\nha: Hausa\nhaw: Hawaiian\nhe: Hebrew\niw: Hebrew\nhi: Hindi\nhmn: Hmong\nhu: Hungarian\nis: Icelandic\nig: Igbo\nid: Indonesian\nga: Irish\nit: Italian\nja: Japanese\njw: Javanese\nkn: Kannada\nkk: Kazakh\nkm: Khmer\nko: Korean\nku: Kurdish (Kurmanji)\nky: Kyrgyz\nlo: Lao\nla: Latin\nlv: Latvian\nlt: Lithuanian\nlb: Luxembourgish\nmk: Macedonian\nmg: Malagasy\nms: Malay\nml: Malayalam\nmt: Maltese\nmi: Maori\nmr: Marathi\nmn: Mongolian\nmy: Myanmar (Burmese)\nne: Nepali\nno: Norwegian\nps: Pashto\nfa: Persian\npl: Polish\npt: Portuguese\npa: Punjabi\nro: Romanian\nru: Russian\nsm: Samoan\ngd: Scots Gaelic\nsr: Serbian\nst: Sesotho\nsn: Shona\nsd: Sindhi\nsi: Sinhala\nsk: Slovak\nsl: Slovenian\nso: Somali\nes: Spanish\nsu: Sundanese\nsw: Swahili\nsv: Swedish\ntg: Tajik\nta: Tamil\nte: Telugu\nth: Thai\ntr: Turkish\nuk: Ukrainian\nur: Urdu\nuz: Uzbek\nvi: Vietnamese\ncy: Welsh\nxh: Xhosa\nyi: Yiddish\nyo: Yoruba\nzu: Zulu'
      )
      msg.reply('Check your dms')
    }
    if (msg.content == `${config.prefix}covid19`) {
      covid()
      async function covid() {
        let { body } = await superAgent.get(
          'https://api.covid19api.com/world/total'
        )
        const embed = new discordjs.MessageEmbed()
          .setTitle('Covid19 statistics')
          .setColor('#00aaff')
          .addField('Total Covid19 cases', body.TotalConfirmed)
          .addField('Total Covid19 deaths', body.TotalDeaths)
          .addField('Total Covid19 victims recovered', body.TotalRecovered)
        msg.channel.send(embed)
      }
    }
    if (msg.content.startsWith(`${config.prefix}slowmode`)) {
      if (
        msg.guild.member(msg.author).hasPermission('ADMINISTRATOR') ||
        msg.author.id == '404422844580233217'
      ) {
        const ch = msg.mentions.channels.first()
        if (ch) {
          const time = msg.content.substr(
            `${config.prefix}slowmode ${ch} `.length
          )
          if (time) {
            if (!isNaN(time)) {
              if (time > 21600) {
                msg.channel.send(
                  'Maximum slowmode you can set is 21600 seconds'
                )
              } else {
                ch.setRateLimitPerUser(time)
                msg.channel.send(`Successfully set slowmode to ${time} seconds`)
              }
            } else {
              msg.channel.send('That is not a number')
            }
          } else {
            msg.channel.send(
              "You didn't specify a time in seconds to set the slowmode"
            )
          }
        } else {
          msg.channel.send("You didn't specify a channel to add slowmode")
        }
      } else {
        msg.channel.send('Not enough permissions')
      }
    }
  }
})

discord.login(process.env.token)
