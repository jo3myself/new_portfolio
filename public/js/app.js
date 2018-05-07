new WOW().init()

const skills = {
  web: ['React.js', 'Redux', 'HTML', 'CSS', 'JavaScript', 'jQuery', 'C#', 'ASP.NET', 'Responsive Design', 'Bootstrap', 'Material UI', 'Handlebars.js', 'Express.js', 'Node.js', 'AJAX', 'APIs', 'MVC'],
  database: ['MySQL', 'MongoDB', 'SQL Server', 'Firebase', 'Ms Access'],
  deployment: ['GIT', 'Heroku'],
  tools: ['Sublime', 'Visual Studio', 'Photoshop', 'Notepad']
}

skills.web.map(web => {
  let skill = $('<span>')
  skill.addClass('badge badge-pill stylish-color-dark')
  skill.append('<i class="fa fa-code"></i> ' + web)
  $('#web').append(skill)
})

for (data of skills.database) {
  let skill = $('<span>')
  skill.addClass('badge badge-pill stylish-color-dark')
  skill.append('<i class="fa fa-database"></i> ' + data)
  $('#database').append(skill)
}

skills.deployment.forEach((deploy) => {
  let skill = $('<span>')
  skill.addClass('badge badge-pill stylish-color-dark')
  skill.append('<i class="fa fa-code-fork"></i> ' + deploy)
  $('#deployment').append(skill)
})

for (let w = 0; w < skills.tools.length; w++) {
  let skill = $('<span>')
  skill.addClass('badge badge-pill stylish-color-dark')
  skill.append('<i class="fa fa-gavel"></i> ' + skills.tools[w])
  $('#tools').append(skill)
}
