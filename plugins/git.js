const Asena = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');

const Language = require('../language');
const Lang = Language.getString('gitlink');

Asena.addCommand({pattern: 'git', fromMe: false, desc: Lang.GL}, (async (message, match) => {

    var r_text = new Array ();
    
    
   
  r_text[0] = "https://i.imgur.com/BVLUrXJ.jpeg";
    
    
    var i = Math.floor(1*Math.random())

    var respoimage = await axios.get(`${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer(respoimage.data), MessageType.image, {quoted: message.data , mimetype: Mimetype.png, caption: `*jinusir_v2*
 

        *Github link        _https://github.com/jinuttan/jinusir_V2*
 
       *instagram    _https://instagram.com/jinu__777?utm_medium=copy_link_*

       *Audio commads-1     _https://github.com/jinuttan/jinusir_V2/tree/master/upload_*
 

       *Audio commads-2     _https://github.com/jinuttan/jinusir_V2/tree/master/uploads*
  
  
      *Sticker commads      _https://github.com/jinuttan/jinusir_V2/tree/master/stickers_*
`}) 

})); 
