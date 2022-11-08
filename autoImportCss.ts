import * as fs from 'fs'
import * as path from 'path'
let __dirname = path.resolve()
let workDir = __dirname + '/NaUI'

let res = fs.readdirSync(__dirname + '/NaUI')
res.map(async (i) => {
  if (fs.lstatSync(workDir + '/' + i).isDirectory()) {
    let jsFile = workDir + '/' + i + '/index.mjs'
    await fs.readFile(jsFile, function (err, res) {
      if (err) {
        console.log(err)
      }
      //
      let content = 'import "./style.css" \n\r' + res.toString()
      fs.writeFileSync(jsFile, content, {
        encoding: 'utf-8',
        flag: 'w'
      })
    })
  }
})
