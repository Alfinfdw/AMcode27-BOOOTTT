import fs from 'fs'
let handler = async (m, { conn, text } ) => {
 let groups = Object.entries(conn.chats).filter(([jid, chat]) => jid.endsWith('@g.us') && chat.isChats && !chat.metadata?.read_only && !chat.metadata?.announce).map(v => v[0])

 for (let id of groups) {
 let member = (await conn.groupMetadata(id)).participants.map(v => v.jid)
conn.sendButton(id, '────━┅ *BROADCAST* ┅━────\n' + text, wm, fla + 'BROADCAST', [['OWNER 🎐', '.owner'],['DONASI ✨', '.donasi']], false, { contextInfo: { externalAdReply: {title: namebot, body: bottime, sourceUrl: sig, thumbnail: fs.readFileSync('https://telegra.ph/file/1c2668a1f2cf1dd1d44e3.jpg') }}})
  }
}
handler.command = ['bcgcb']
handler.tags = ['host']
handler.help = ['bcgcb']
export default handler
