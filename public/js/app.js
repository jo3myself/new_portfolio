new WOW().init()

const skills = {
  web: ['React.js', 'HTML', 'CSS', 'JavaScript', 'jQuery', 'Responsive Design', 'Bootstrap', 'Material UI', 'Handlebars.js', 'C#', 'ASP.NET', 'Express.js', 'Node.js', 'AJAX', 'APIs', 'MVC'],
  database: ['MySQL', 'MongoDB', 'SQL Server', 'Firebase', 'Ms Access'],
  deployment: ['GIT', 'Heroku'],
  tools: ['Sublime', 'Visual Studio Code', 'Photoshop', 'Notepad']
}

for (let w = 0; w < skills.web.length; w++) {
  let skill = $('<span>')
  skill.addClass('badge badge-pill stylish-color-dark')
  skill.append('<i class="fa fa-code"></i> ' + skills.web[w])
  $('#web').append(skill)
}

for (let w = 0; w < skills.database.length; w++) {
  let skill = $('<span>')
  skill.addClass('badge badge-pill stylish-color-dark')
  skill.append('<i class="fa fa-database"></i> ' + skills.database[w])
  $('#database').append(skill)
}

for (let w = 0; w < skills.deployment.length; w++) {
  let skill = $('<span>')
  skill.addClass('badge badge-pill stylish-color-dark')
  skill.append('<i class="fa fa-code-fork"></i> ' + skills.deployment[w])
  $('#deployment').append(skill)
}

for (let w = 0; w < skills.tools.length; w++) {
  let skill = $('<span>')
  skill.addClass('badge badge-pill stylish-color-dark')
  skill.append('<i class="fa fa-gavel"></i> ' + skills.tools[w])
  $('#tools').append(skill)
}
