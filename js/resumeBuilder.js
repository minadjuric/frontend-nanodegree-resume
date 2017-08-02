var skills = ["awesome", " super awesome", " extraordinary"];

var bio = {
	"name": "Mina Djuric",
	"role" : "QA tester",
	"contactInfo" : {
		"phone" : "+381642163081",
		"email" : "minadjuric@gmail.com",
		"github": "https://github.com/minadjuric",
		"location" : "Belgrade, Serbia"
	},
	"picture" : "images/fry.jpg",
	"welcomeMessage" : "Welcome to my page!",
	"skills" : skills
};


var work = {
	"jobs" : [
		{
			"title" : "Pizza delivery",
			"employer" : "Navdy",
			"years" : "2016-present",
			"location" : "San Francisco, USA"
		},
		{
			"title" : "Chief",
			"employer" : "Polus",
			"years" : "2016-present",
			"location" : "Geneva, Switzerland"
		},
		{
			"title" : "Cook",
			"employer" : "NCR",
			"years" : "2014-2016",
			"location" : "Belgrade, Serbia"
		}
	]
};

var education = {
	"schools" : [
		{
			"colledge" : "Faculty of Philosophy",
			"years" : "2004-2011",
			"location" : "Belgrade, Serbia"	
		}
	]
};

var projects = {
	"activities" : [
		{
			"title" : "Pizza dough project",
			"years" : "2016",
			"description" : "I was making the perfect pizza dough for the Obama's cook.",
			"image" : "images/dough.jpg",
			"location" : "Boston, MA"
			
		},
		{
			"title" : "Cheddar cheese get-to-know",
			"years" : "2014",
			"description" : "Cheddar has special taste when melted on the crisps and baked in the oven for 25 minutes.",
			"image" : "images/cheddar.jpg",
			"location" : "Rome, Italy"

		}
	]
};



var myName = HTMLheaderName.replace ("%data%", bio.name);
var myRole = HTMLheaderRole.replace ("%data%", bio.role);
var phone = HTMLmobile.replace("%data%", bio.contactInfo.phone);
var email = HTMLemail.replace("%data%", bio.contactInfo.email);
var github = HTMLgithub.replace("%data%", bio.contactInfo.github);
var myLocation = HTMLlocation.replace("%data%", bio.contactInfo.location);
var pic = HTMLbioPic.replace("%data%", bio.picture);
var welcomeMessage = HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage);


$("#header").append(myName, myRole, phone, email, github, myLocation, pic, welcomeMessage);


if(bio.skills.length > 0) {
    
 $("#header").append(HTMLskillsStart);

 var formatedSkill = HTMLskills.replace("%data%", bio.skills[0]);
 $("#skills").append(formatedSkill);

 formatedSkill = HTMLskills.replace("%data%", bio.skills[1]);
 $("#skills").append(formatedSkill);

 formatedSkill = HTMLskills.replace("%data%", bio.skills[2]);
 $("#skills").append(formatedSkill);

}


work.display = function() {
	for(job in work.jobs) {

		$("#workExperience").append(HTMLworkStart);

		var myEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
		var myTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
		var formatedEmployer = myEmployer + myTitle;
		$(".work-entry:last").append(formatedEmployer);

		var myDates = HTMLworkDates.replace("%data%", work.jobs[job].years);
		$(".work-entry:last").append(myDates);

		var workLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
		$(".work-entry:last").append(workLocation);

	}
}

work.display();

projects.display = function() {

	for(activity in projects.activities) {

		$("#projects").append(HTMLprojectStart);

		var myProject = HTMLprojectTitle.replace("%data%", projects.activities[activity].title);
		$(".project-entry:last").append(myProject);

		var myDates = HTMLprojectDates.replace("%data%", projects.activities[activity].years);
		$(".project-entry:last").append(myDates);

		var myDescription = HTMLprojectDescription.replace("%data%", projects.activities[activity].description);
		$(".project-entry:last").append(myDescription);

		var myImages = HTMLprojectImage.replace("%data%", projects.activities[activity].image);
		$(".project-entry:last").append(myImages);

		var projectsLocation = HTMLprojectLocation.replace("%data%", projects.activities[activity].location);
		$(".project-entry:last").append(projectsLocation);

	}
}

projects.display();

education.display = function() {
	for(school in education.schools) {

		$("#education").append(HTMLschoolStart);

		var mySchool = HTMLschoolName.replace("%data%", education.schools[school].colledge);
		$(".education-entry:last").append(mySchool);

		var schoolDates = HTMLschoolDates.replace("%data%", education.schools[school].years);
		$(".education-entry:last").append(schoolDates);

		var schoolLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
		$(".education-entry:last").append(schoolLocation);

	}
}

education.display();

$("#mapDiv").append(googleMap);

/*
function inName(name) {
	
	
	arrayOfName = bio.name.split(" ");
	lastName = arrayOfName[1].toUpperCase();
	return arrayOfName[0] + " " + lastName;
}

inName(name);

//$("#main").append(internationalizeButton); */