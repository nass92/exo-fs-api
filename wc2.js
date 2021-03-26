const fs = require('fs')

//verifier la commande line
if (process.argv.length < 3 || process.argv.length > 4) {
  console.log('Error, check your arguments')
  process.exit(1)
}
// verifier si le fichier existe 
if (!fs.existsSync(process.argv[2])) {
  console.log(`ERROR: ${process.argv[2]}, does not exist`)
  process.exit(1)
}
// commpte le nb de line ou/et mot ou/et lettre en fonction du paramettre passée
const txt = fs.readFileSync(process.argv[2], 'utf-8')
if (process.argv[3] === "-l") {
  let line = txt.split("\n").length
  console.log(`${line} ${process.argv[2]}`)
} else if (process.argv[3] === "-w") {
  let word = txt.split(" ").length
  console.log(`${word} ${process.argv[2]}`)
} else if (process.argv[3] === "-c") {
  let car = txt.split("").length
  console.log(`${car} ${process.argv[2]}`)
} else {
  let line = txt.split("\n").length
  let word = txt.split(" ").length
  let car = txt.split("").length
  console.log(`${line} ${word} ${car} ${process.argv[2]} `)
}
