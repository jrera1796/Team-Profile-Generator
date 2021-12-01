function genManagerCard(manager) {
    const managerCard = `<div class="card">
  <div class="card-title">
      <h3 class="name">${manager.name}</h3>
      <h4 class="type"> <span class="fas fa-mug-hot"></span> Manager</h4>
  </div>
  <div class="card-body">
      <p>Employee ID: <span class="ID">${manager.id}</span></p>
      <p>Email: <span class="Email"><a href="mailto:${manager.email}">${manager.email}</a></span></p>
      <p>Office Number: <span class="officeNumber">${manager.officeNumber}</span></p>
  </div>
</div>`
    return managerCard
}

function genEngineerCards(engineers) {
    let engineerCards = ``
    for (let i = 0; i < engineers.length; i++) {
        let engineer = engineers[i]
        let card = `<div class="card">
      <div class="card-title">
          <h3 class="name">${engineer.name}</h3>
          <h4 class="type"><span class="fas fa-rss"></span> Engineer</h4>
      </div>
      <div class="card-body">
          <p>Employee ID: <span class="ID">${engineer.id}</span></p>
          <p>Email: <span class="Email"><a href="mailto:${engineer.email}">${engineer.email}</a></span></p>
          <p>Github: <span class="Github"><a href="https://www.github.com/${engineer.github}"  target="_blank">${engineer.github}</a></span></p>
      </div>
  </div>`
        engineerCards += card
    }
    return engineerCards
}


function genInternCards(interns) {
    let internCards = ``
    for (let i = 0; i < interns.length; i++) {
        let intern = interns[i]
        let card = `<div class="card">
      <div class="card-title">
          <h3 class="name">${intern.name}</h3>
          <h4 class="type"><span class="fas fa-user-graduate"></span> Intern</h4>
      </div>
      <div class="card-body">
          <p>Employee ID: <span class="ID">${intern.id}</span></p>
          <p>Email: <span class="Email"><a href="mailto:${intern.email}">${intern.email}</a></span></p>
          <p>School: <span class="Github">${intern.school}</span></p>
      </div>
  </div>`

        internCards += card
    }
    return internCards
}


module.exports = { genManagerCard, genEngineerCards, genInternCards }