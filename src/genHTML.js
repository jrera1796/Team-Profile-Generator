function genHTML(managerCard, engineerCards, internCards) {
    const innerHTML = `<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>My Team</title>
      <link rel="stylesheet" href="./css/style.css">
      <script src="https://kit.fontawesome.com/f14c85c842.js" crossorigin="anonymous"></script>

    </head>
    <body>
      <header>
          <h1>My Team</h1>
      </header>
        <main>
            <div class="employees">
                ${managerCard}
                ${engineerCards}
                ${internCards}
            </div>
        </main>
  </body>
  </html>`
    return innerHTML
}

module.exports = genHTML
