const handler = async (m, {conn, text, command}) => {
  const id = text ? text : m.chat;
  await conn.reply(id, '*كنت هنا*');
  await conn.groupLeave(id);
};
handler.command = /^(برا|اخرج|باي|salirdelgrupo)$/i;
handler.group = true;
handler.rowner = true;
export default handler;
