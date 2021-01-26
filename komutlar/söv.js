exports.run = async (client, msg, args) => {
  let kufur=[
    "",
    "amına kodumun jedayı seni",
    "ebenin amı gibi kaşları da kara",
    "senin dalağını öyle bi sikerim ki ömür boyu hıçkırırsın",
    "seni bi sikerim bluetooh un hata verir kapsama alanın genişler.",
    "o tuşlara basan ufacık parmaklarının arasına sokar felç edene kadar siker o felç olan parmaklarını kesip organ mafyasına satarım elde ettigim gelirin bi kısmını görme engelliler vakfına bağışlar kalan kısmıda annenle çarçur eder babanın delirmesini sağlar ocağına incir ağacı diker ağacın gölgesinde teyzeni dallı budaklı sikerim senin",
    "küfür etmek günah olum sen ne yaptıysan artık sana kızmış birisi affettir kendini beni de günaha sokçak piç",
    "öyle yan durup şekilli mekilli tişört giyme seni  siker Erol Taş gibi kiraz ağacından kamçı yapar döverim",
  ]
     let member = msg.mentions.members.first()
   if(!member)return msg.channel.send({embed: {
 color: Math.floor(Math.random() * (0xFFFFFF + 1)),
 description: (':no_entry_sign: Ya geçerli birini etiketle ya da sana sövmemi istiyosan kendini etiketle.')
}});
  if(member.id === "498474557569499146")return msg.channel.send({embed: {
 color: Math.floor(Math.random() * (0xFFFFFF + 1)),
 description: (':no_entry_sign: Ağzına sıçtığım sen kimsinde Muhammete söversin!')
}})
  if(member.id === "481412397895122963")return msg.channel.send({embed: {
 color: Math.floor(Math.random() * (0xFFFFFF + 1)),
 description: (`:no_entry_sign: Hoop! Orda durucan Batuhanıma sövemezsin!!`)
}})
  if(member.id === "431772260508893194")return msg.channel.send({embed: {
 color: Math.floor(Math.random() * (0xFFFFFF + 1)),
 description: (`:no_entry_sign: Hoop! Orda durucan Mertime sövemezsin!!`)
}})
  if(member.id === client.user.id){
    msg.channel.send({embed: {
 color: Math.floor(Math.random() * (0xFFFFFF + 1)),
 description: (`:no_entry_sign: Siktir duygusuz pezeveng bide bana sövecek!!`)
}})
  }
  else{
  msg.channel.send({embed: {
 color: Math.floor(Math.random() * (0xFFFFFF + 1)),
 description: (`${member} ${kufur[Math.floor(Math.random() * 16)]}.`)
  }})
  }

}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 1
 };

exports.help = {
  name: 'söv',
  description: 'Birine Söver.',
  usage: 'söv'
 }
