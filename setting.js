const fs = require('fs')
const chalk = require('chalk')
const moment = require('moment-timezone')
const hariini = moment.tz('Asia/Jakarta').format('dddd, DD MMMM YYYY')	
const time = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('HH:mm:ss z')
const Fichan = new require('./lib/functions')
const Styles = (text, style = 1) => {
  var xStr = 'abcdefghijklmnopqrstuvwxyz1234567890'.split('');
  var yStr = {
    1: 'ᴀʙᴄᴅᴇꜰɢʜɪᴊᴋʟᴍɴᴏᴘqʀꜱᴛᴜᴠᴡxʏᴢ1234567890'
  };
  var replacer = [];
  xStr.map((v, i) =>
    replacer.push({
      original: v,
      convert: yStr[style].split('')[i]
    })
  );
  var str = text.toLowerCase().split('');
  var output = [];
  str.map((v) => {
    const find = replacer.find((x) => x.original == v);
    find ? output.push(find.convert) : output.push(v);
  });
  return output.join('');
};

// SETTINGS IS BAILEYS \\
global.baileys = require('@whiskeysockets/baileys') // Biarin Ae Jir
// ====================== \\

/* SETTING IS PAIRING CODE 
True To Pairing Code
False To Scaned
*/
global.usePairingCode = true 
// ====================== \\

// SETTING IN SALURAN WHATSAPP \\
global.saluran = 'https://whatsapp.com/channel/0029VaUyRQCLdQeWJXvTRg3T'
global.idsal = "120363198449115557@newsletter"
// ====================== \\

// SETTING IN OWNER NAME AND NUMBER OWNER \\
global.ownername = 'ᴋʏʏxᴅ' // Owner Name
global.owner = ['6288286326619'] // Nomor Owner
global.botname = 'ʜᴀɴᴀᴋᴏ ᴀɪ' // Nama Bot
// ====================== \\

// SETTING IN WM \\
global.packname = 'ᴄʀᴇᴀᴛᴇᴅ ʙʏ ᴋʏʏxᴅ' // Name Sticker
global.author = `ᴄʀᴇᴀᴛᴇᴅ ʙʏ ʜᴀɴᴀᴋᴏ ᴀɪ` // Name Sticker 
global.hiasan = `	◦  ` // Biarin ,, Klo Ubah Eror Ga Nanggung 
global.prefa = ['','!','.',',','🐤','🗿'] // Biarin Juga
global.sessionName = 'Session' // Gausah
global.sp = '⭔' // Jangan
global.wlcm = []
global.wlcmm = []
global.gris = '`'
global.wm = `ʜ ᴀ ɴ ᴀ ᴋ ᴏ ᴀ ɪ × ᴋʏʏxᴅ` // Ubah Ae
global.namaStore = 'ᴋʏʏxᴅ' // Ubah Ae
global.ownerStore = 'ᴋʏʏxᴅ' // Ubah Ae
global.autobio = true // True Jika Langsung On False Jika Off
global.autoread = true // True Jika Langsung On False Jika On
global.thumbnail = 'https://telegra.ph/file/8075bbe59fb9b63fa5ac0.jpg'
// ====================== \\

// SETTING IN APIKEY CPANEL \\
global.footer2 = Styles('CREATED BY KYYXD')
global.domain = 'https://panelnotfound.shopwebsite.my.id' // Isi Domain Lu
global.apikey2 = 'ptla_D44ADCm8F32DdoUMRhBlRbICWZYYFrzkDg1vW0IYfrF' // Isi Apikey Plta Lu
global.capikey2 = 'ptlc_P7nMUOweqHG78SS4YCFE68KXB9VOjftlT3KEcBg9OHQ' // Isi Apikey Pltc Lu
global.eggsnya = '15' // id eggs yang dipakai
global.location = '1' // id location
// ====================== \\

// SETTING IN CREAT LINODE \\
global.apilinode = ''
global.apitokendo = ''
// ====================== \\

// MESSAGE OTOMATISED \\
global.Func = Fichan
global.systemN = `*sʏsᴛᴇᴍ ɴᴏᴛɪᴄᴇ*`
global.mess = {
    ban: Styles('*sʏsᴛᴇᴍ ɴᴏᴛɪᴄᴇ* ʟᴜ ᴅɪ ʙᴀɴᴅ ᴏᴡɴᴇʀ ᴋᴏɴᴛᴏʟ ᴡᴋᴡᴋᴡᴋ'),
    badm: Styles('*sʏsᴛᴇᴍ ɴᴏᴛɪᴄᴇ* ᴊᴀᴅɪɪɪɴ ʙᴏᴛ ᴀᴅᴍɪɴ ᴅᴜʟᴜ ʟᴀʜ ʙᴀʀᴜ ʙɪsᴀ ɢᴜɴᴀɪɴ ɴɪʜ ғɪᴛᴜʀᴇ'),
    regis: Styles(`*sʏsᴛᴇᴍ ɴᴏᴛɪᴄᴇ* ᴋᴀᴍᴜ ʙᴇʟᴜᴍ ᴛᴇʀᴅᴀғᴛᴀʀ sɪʟᴀʜᴋᴀɴ ᴋᴇᴛɪᴋ .ᴅᴀғᴛᴀʀ`),
    premium: Styles('*sʏsᴛᴇᴍ ɴᴏᴛɪᴄᴇ* ᴋʜᴜsᴜs ᴜsᴇʀ ᴘʀᴇᴍ ʙᴜʏ ᴘʀᴇᴍ ᴋᴇ ᴏᴡɴᴇʀ'),
    search: Styles('*sʏsᴛᴇᴍ ɴᴏᴛɪᴄᴇ* ᴏᴛᴡ ʜᴀɴᴀᴋᴏ sᴇᴀʀᴄʜ....'),
    done: Styles('*sʏsᴛᴇᴍ ɴᴏᴛɪᴄᴇ* ᴅᴏɴᴇ ʏᴀ ᴡɪʀ...'),
    success: Styles('*sʏsᴛᴇᴍ ɴᴏᴛɪᴄᴇ* sᴜᴄᴄᴇs....!!'),
    admin: Styles('*sʏsᴛᴇᴍ ɴᴏᴛɪᴄᴇ* ғɪᴛᴜʀᴇ ᴋʜᴜsᴜs ᴀᴅᴍɪɴ ɢʀᴏᴜᴘ'),
    owner: Styles('*sʏsᴛᴇᴍ ɴᴏᴛɪᴄᴇ* ᴋʜᴜsᴜs ᴏᴡɴᴇʀ ᴋʏʏ sᴀᴊᴀ ʏᴀ'),
    group: Styles('*sʏsᴛᴇᴍ ɴᴏᴛɪᴄᴇ* ᴄᴏᴍᴍᴀɴᴅ ɪɴɪ ᴋʜᴜsᴜs ɢʀᴏᴜᴘ sᴀᴊᴀ ʏᴀ ʟᴏʟ'),
    private: Styles('*sʏsᴛᴇᴍ ɴᴏᴛɪᴄᴇ* ᴄᴍᴅ ɪɴɪ ᴋʜᴜsᴜs ᴘʀɪᴠᴀᴛᴇ ᴄʜᴀᴛ ʜᴀɴᴀᴋᴏ ᴀɪ'),
    bot: Styles('*sʏsᴛᴇᴍ ɴᴏᴛɪᴄᴇ* ᴏɴʟʏ ʙᴏᴛ ᴜsᴇʀ'),
    wait: Styles('*sʏsᴛᴇᴍ ɴᴏᴛɪᴄᴇ* ᴡᴀɪᴛɪɴɢ ᴏᴛᴡ ʜᴀɴᴀᴋᴏ ᴘʀᴏsᴇs...'),
    getdata: Styles('*sʏsᴛᴇᴍ ɴᴏᴛɪᴄᴇ* Scraping metadata . . .'),
    fail: Styles('*sʏsᴛᴇᴍ ɴᴏᴛɪᴄᴇ* Can\'t get metadata!'),
    error: Styles('*sʏsᴛᴇᴍ ɴᴏᴛɪᴄᴇ* ʟᴀɢɪ ᴀᴅᴀ ᴋᴇɴᴅᴀʟᴀ ᴋᴀᴋ sᴏʀʏ ʏᴀ'),
    errorF: Styles('*sʏsᴛᴇᴍ ɴᴏᴛɪᴄᴇ* this feature is in error.'),
}
//=================================================//
// SETTING IN LIMITED \\
global.limitawal = {
    premium: "Infinity",
    free: 15
    }
//=================================================//
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})