import fetch from 'node-fetch'

let zzz = []
fetch('https://raw.githubusercontent.com/arivpn/dbase/master/kpop/ukhty.txt')
    .then(res => res.text())
    .then(txt => zzz = txt.split('\n'))
let handler = async (m, { conn }) => {
    let img = zzz[Math.floor(Math.random() * zzz.length)]
    if (!img) throw img
    await conn.sendFile(m.chat, img, '', '© 𝙘𝙤𝙥𝙮𝙧𝙞𝙜𝙝𝙩 𝘼𝙃𝙔𝘼𝙉 👍', m, 0, { thumbnail: await (await fetch(img)).buffer() }) 
    }
handler.help = ['cecanukhty']
handler.tags = ['premium']
handler.premium = true
handler.command = /^(cecanukhty|ukhty)$/i

export default handler

