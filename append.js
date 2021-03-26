const fs = require('fs')

//verifier la commande line
if (process.argv.length < 4) {
  console.log('Error')
  process.exit(1)
}

// verifier si le fichier existe 
if (!fs.existsSync(process.argv[2])) {
  console.log(`ERROR: ${process.argv[2]}, does not exist`)
  process.exit(1)
}
// copier les fichier 
// 1er méthode : {copyFileSync}

if (process.argv.length >= 3) {
  for (let i = 2; i < process.argv.length - 1; i++) {
    let y = process.argv.length - 1
    let cp = fs.copyFileSync(process.argv[i], process.argv[y])
  }
}
// pour fichier1, fichier2 copier vers fichier3 => i ne prend seulement le fichier2.
// je sais que nous pouvons utiliser la méthode { readFileSync, writeFileSync }.
// mais je pense qu'il est aussi possible d'utiliser cette méthode.
// je cherche encore comment faire...

//2eme Methode : {readFileSync, writeFileSync}
let txt = " "
for (let i = 2; i < process.argv.length; i++) {
  txt += fs.readFileSync(process.argv[i])
}
fs.writeFileSync(process.argv[process.argv.length - 1], txt)