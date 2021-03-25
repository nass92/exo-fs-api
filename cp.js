const fs = require('fs')

//verifier la commande line
if (process.argv.length !== 4) {
  console.log('Error')
  process.exit(1)
}

// verifier si le fichier existe 
if (!fs.existsSync(process.argv[2])) {
  console.log(`ERROR: ${process.argv[2]}, does not exist`)
  process.exit(1)
}
// copie a file 
let cp = fs.copyFileSync(process.argv[2], process.argv[3])

