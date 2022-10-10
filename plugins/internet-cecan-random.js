import fetch from 'node-fetch'

let arr = []
fetch('https://raw.githubusercontent.com/arivpn/dbase/master/kpop/cecan.txt')
    .then(res => res.text())
    .then(txt => arr = txt.split('\n'))
let handler = async (m, { conn }) => {
    let img = arr[Math.floor(Math.random() * arr.length)]
    if (!img) throw img
    await conn.sendFile(m.chat, img, '', '© 𝙘𝙤𝙥𝙮𝙧𝙞𝙜𝙝𝙩 𝘼𝙃𝙔𝘼𝙉 👍', m, 0, { thumbnail: await (await fetch(img)).buffer() })
}
handler.help = ['cecanrandom']
handler.tags = ['premium']
handler.premium = true
handler.command = /^(cecanrandom)$/i

export default handler
