const db = require("./_database.js")

async function getData() {
  await db.connect()
  let result

  result = await db.query(`Select * from disciplinas`)
  db.end()
  return result.rows
}

console.log(getData())
