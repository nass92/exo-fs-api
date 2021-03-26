const fs = require('fs')

//verifier la commande line
if (process.argv.length !== 3 && process.argv.length !== 5) {
  console.log('Error')
  process.exit(1)
}
// verifier si le fichier existe 
if (!fs.existsSync(process.argv[2])) {
  console.log(`ERROR: ${process.argv[2]}, does not exist`)
  process.exit(1)
}

const txt = fs.readFileSync(process.argv[2], 'utf-8').trim("").split("\n")
let n = "-n"
let x = Number(process.argv[4])
if (n = process.argv[3]) {
  console.log(txt.slice(txt.length - x, txt.length).join("\n"))
}
else {
  console.log(txt.slice(txt.length - 10, txt.length).join("\n"))
}

