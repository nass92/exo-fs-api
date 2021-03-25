const fs = require('fs')

//verifier la commande line
if (process.argv.length < 2) {
  console.log('Error')
  process.exit(1)
}

// verifier si le fichier existe 
if (!fs.existsSync(process.argv[2])) {
  console.log(`ERROR: ${process.argv[2]}, does not exist`)
  process.exit(1)
}
//Read the file 
if (process.argv.length >= 3) {
  for (let i = 2; i < process.argv.length; i++) {
    let text = fs.readFileSync(process.argv[i], 'utf-8')
    console.log(text)

  }
}
