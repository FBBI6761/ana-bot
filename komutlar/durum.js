const Discord = require("discord.js");
const moment = require("moment");
require("moment-duration-format");

exports.run = (client, msg) => {
  const duration = moment.duration(client.uptime).format(" D [gün], H [saat], m [dakika], s [saniye]");
  msg.channel.sendCode("asciidoc", ` Sunucu Durumu  
 ! Bellek kullanımı : ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB
 ! Kullanıcılar     : ${client.guilds.reduce((a, b) => a + b.memberCount, 0).toLocaleString()}
 ! Sunucular        : ${client.guilds.size.toLocaleString()}
 ! Kanallar         : ${client.channels.size.toLocaleString()}
 ! Ping             : ${client.ping}`);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['bot durum', 'i', 'bi', 'durum', 'kullan�mlar', 'botdurum', 'bd', 'istatisik', 'stats', 'stat'],
  permLevel: 0
};

exports.help = {
  name: 'durum',
  description: 'Botun istatistik g�sterir.',
  usage: 'istatistik'
};
