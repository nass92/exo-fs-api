if (process.argv.length >= 3) {
  let echo = []
  for (let i = 2; i < process.argv.length; i++) {
    echo.push(process.argv[i])

  } console.log(echo.join(" "))
} else {
  console.log("Error: check your setting ")
  process.exit(1)
}