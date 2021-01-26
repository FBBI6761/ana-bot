const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
exports.run = async (client, message, params) => {
  
  let prefix = ayarlar.prefix
 
  if (!params[0]) {
    message.channel.sendCode("asciidoc",`= Fuat Kocaeli Botunun Yardım Menüsü =
• ${prefix}eğlence     ::  Eğlence komutlarını gösterir
• ${prefix}aşk-ölçer
• ${prefix}korkut
• ${prefix}söv
• ${prefix}kullanıcı   ::  Kullanıcı komutlarını gösterir.
• ${prefix}avatar
• ${prefix}kullanıcıbilgim
• ${prefix}yetkilerim
• ${prefix}durum
• ${prefix}davetoluştur
• ${prefix}duyuru
• ${prefix}yetkili      ::  Yetkili komutlarını gösterir.
• ${prefix}roller
• ${prefix}ban
• ${prefix}kick
• ${prefix}sustur
• ${prefix}temizle
• ${prefix}uyar
••• # ÖNEMLİ!!! Yetkili Komutlarını Yetkili Olmadan Kullanamazsınız Bilginize `);
  } else {
    let command = params[0];
    if (client.commands.has(command)) {
      command = client.commands.get(command);
      message.channel.sendCode('asciidoc', `= ${command.help.name} =
Hakkında  :: ${command.help.description}
Kullanım  :: ${prefix}${command.help.usage}`);
    }
  }
  
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};
exports.help = {
  name: 'yardım',
  description: 'Komut kategorilerini gösterir.',
  usage: 'yardım'
};