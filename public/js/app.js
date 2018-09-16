const skills = {
  tech: [{ name: 'Javascript', no: '70%' }, { name: 'HTML, CSS', no: '70%' }, { name: 'Redux', no: '50%' }, { name: 'TypeScript', no: '60%' }, { name: 'Bootstrap', no: '70%' }, { name: 'C#, ASP.NET', no: '50%' }],
  framework: [{ name: 'React', no: '70%' }, { name: 'Angular 2', no: '60%' }, { name: 'Handlebars', no: '70%' }, { name: 'JQuery', no: '70%' }],
  database: [{ name: 'MySQL', no: '70%' }, { name: 'SQL Server', no: '70%' }, { name: 'MongoDB', no: '70%' }, { name: 'Firebase', no: '50%' }, { name: 'Ms Access', no: '70%' }],
  other: [{ name: 'Git', no: '70%' }, { name: 'Heroku', no: '70%' }, { name: 'REST API', no: '70%' }, { name: 'AJAX', no: '70%' }, { name: 'Node', no: '60%' }, { name: 'Express', no: '60%' }]
}

skills.tech.map(tech => {
  let skill = $('<p class="mt-2 mb-1">' + tech.name + '</p>')
  let skill1 = $('<div>')
  skill1.addClass('progress mb-3')
  skill1.append('<div class="progress-bar bg-info" style="width:' + tech.no + '"></div>')
  $('#tech').append(skill).append(skill1)
})

for (let framework of skills.framework) {
  let skill = $('<p class="mt-2 mb-1">' + framework.name + '</p>')
  let skill1 = $('<div>')
  skill1.addClass('progress mb-3')
  skill1.append('<div class="progress-bar bg-info" style="width:' + framework.no + '"></div>')
  $('#framework').append(skill).append(skill1)
}

skills.database.forEach((database) => {
  let skill = $('<p class="mt-2 mb-1">' + database.name + '</p>')
  let skill1 = $('<div>')
  skill1.addClass('progress mb-3')
  skill1.append('<div class="progress-bar bg-info" style="width:' + database.no + '"></div>')
  $('#database').append(skill).append(skill1)
})

for (let s = 0; s < skills.other.length; s++) {
  let skill = $('<p class="mt-2 mb-1">' + skills.other[s].name + '</p>')
  let skill1 = $('<div>')
  skill1.addClass('progress mb-3')
  skill1.append('<div class="progress-bar bg-info" style="width:' + skills.other[s].no + '"></div>')
  $('#other').append(skill).append(skill1)
}

const application = [{ link: 'http://www.evitehub.com/', img: './img/evitehub.jpg', title: 'EviteHub - (React, Redux, MongoDB, Mongoose)', desc: "Plan your next event with us by using our easy to use event planner. You can create multiple events, to do list and keep track of each event. Manage your guest list and track of who's RSVP'd and manage guest contact information. Create your own invitation with our easy to use invitation maker and send it out to all your guests." }, { link: 'https://jo3myself.github.io/iLoveMusic/', img: './img/ilovemusic.jpg', title: 'iLoveMusic - (JQuery, Firebase, JSON, API, AJAX)', desc: 'Your one stop shop for everything artist related, from upcoming shows, buying tickets to watching music videos or listening to their music on spotify or even browsing their social media feeds.' }, { link: 'https://stormy-wave-49060.herokuapp.com/', img: './img/yellow.jpg', title: 'YellowStore - (Handlebars, JQuery, mySQL, Sequelize)', desc: 'This is an app that serves as a storefront to buy and sell goods. In this app, users can register to create their own �store� in a couple minutes. In this store, products can be added and those items are then displayed in their own storefront.' }]

for (let apps of application) {
  let app = $('<div>')
  app.addClass('carousel-item')
  app.append('<a href="' + apps.link + '" target="_new"><img class="d-block w-100" src="' + apps.img + '"><div class="carousel-caption d-none d-md-block"><h5>' + apps.title + '</h5><p class="px-3">' + apps.desc + '</p></div></a>')
  $('.carousel-inner').prepend(app)
}

// validate email format
function validateEmail (email) {
  let validation = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return validation.test(email)
}

// send the email
$('#sendEmail').click(function () {
  let to, subject, text
  let name = $('#contactName').val()
  let email = $('#contactEmail').val()
  let content = $('#contactContent').val()
  if (name && validateEmail(email) && content) {
    to = 'hartono@myself.com'
    subject = 'Webmail - ' + name + ' - ' + email
    text = content
    $.get('https://johan-hartono.herokuapp.com/send', { to: to, subject: subject, text: text }, function (data) {
      if (data === 'sent') {
        $('.email').val('')
        $('#contactWarning').text('')
        alert('Your message has been sent!')
      }
    })
  } else {
    $('#contactWarning').text('Please fill all the fields')
  }
})
