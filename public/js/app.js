new WOW().init()

const skills = {
  web: ['Javascript', 'React', 'Redux', 'Angular', 'Handlebars', 'JQuery', 'HTML', 'CSS', 'Bootstrap', 'TypeScript', 'C#', 'ASP.NET', 'REST API', 'Node', 'Express'],
  database: ['MySQL', 'SQL Server', 'MongoDB', 'Firebase', 'Ms Access'],
  deployment: ['Git', 'Heroku'],
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

// send the email
let to,subject,text;
$("#sendEmail").click(function(){      
	to='hartono@myself.com';
	subject="Webmail - " + $("#contactName").val() + " - " + $("#contactEmail").val();
	text=$("#contactContent").val();
	$.get("https://johan-hartono.herokuapp.com/send",{to:to,subject:subject,text:text},function(data){
	if(data=="sent") {
    $('.email').val("");
    alert("Your message has been sent!")
	}
	});
});