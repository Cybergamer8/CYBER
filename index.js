const Discord = require('discord.js-selfbot-v13');
const client = new Discord.Client({
  readyStatus: false,
  checkUpdate: false
});

const keepAlive = require('./server.js');
keepAlive();

client.on('ready', async () => {
    console.clear();
    console.log(`${client.user.tag} - rich presence started!`);

    const r = new Discord.RichPresence()
        .setApplicationId('1099642415754776628')
        .setType('STREAMING')
        .setURL('https://twitch.tv/cyber_winner')
        .setState('UID - 1803102972')
        .setName('GENSHIN IMPACT')
        .setDetails('PLAYING GENSHIN IMPACT')
        .setAssetsLargeImage('https://media.discordapp.net/attachments/1169491681507278863/1280952288537477233/icegif-1657.gif?ex=66d9f348&is=66d8a1c8&hm=6807af4558fb46b77839ac9b19c0268deb0c5861910296ec49264cca09eb118e&')
        .setAssetsLargeText('ASIA || AR 51')
        .setAssetsSmallImage('https://media.discordapp.net/attachments/1169491681507278863/1280951430186012807/games-genshinimpact-icon-2048x2048-jyrv8s6e.png?ex=66d9f27b&is=66d8a0fb&hm=b6ba01ae06a749033f93b2488def066c1bae5afdbd4d9a622175562bf7d01d66&')
        .setAssetsSmallText('LOGO')
        .addButton('INSTAGRAM', 'https://www.instagram.com/cs_cyber_winner?igsh=b3dydzIwaWQ2eWsx');

    client.user.setActivity(r);
    client.user.setPresence({ status: 'dnd' });
});

client.login(process.env.TOKEN);