'use strict';
///////////////
//// Json
///////////////

// Bio
// Display function is added later for better readability, see "Display function" bellow.
var bio = {
  "name" : "Peter Janak",
  "role" : "Web Developer",
  "contacts" : {
        "mobile" : "07475633636",
        "email" : "2010janak2010@gmail.com",
        "github" : "pe1te3son",
        "twitter" : "@peter_janak",
        "location" : "London",
        "blog" : "https://github.com/pe1te3son"
      },
  "welcomeMessage": "Welcome to my site",
  "skills" : ["html", "CSS", "JavaScript", 'Wordpress', 'PHP'],
  "biopic" : "images/profile_pic.jpg"
};



//Work
var work = {
  "jobs" : [
    {
      "employer" : "Augustus Martin",
      "title" : "Warehouse operative",
      "location" : "London, UK",
      "dates" : "in porgress :(",
      "description" : "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros.",
      "url" : "http://www.augustusmartin.com/"
    },
    {
      "employer" : "Joka",
      "title" : "Builder",
      "location" : "Prague, CZ",
      "dates" : "7 years ago",
      "description" : " Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.",
      "url" : "http://www.kapicak.sk/"
    }
  ]
};

//education
var education = {
  "schools" : [
    {
      "name" : "Dopravna akademia Zilina",
      "location" : "Zilina, Slovakia",
      "degree" : "Graduated",
      "majors" : ["Enginering", "Science"],
      "dates" : "2001 - 2005",
      "url" : "https://doaza.edu.sk/"
    }
  ],
  "onlineCourses": [
    {
      "title" : "Front end Web-developer",
      "school" : "Udacity",
      "date" : "2016 (in progress)",
      "url" : "https://www.udacity.com/",
      "urlCourse" : "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
    },
    {
      "title" : "Front end Web-developer",
      "school" : "Treehouse",
      "date" : "2015",
      "url" : "https://teamtreehouse.com/",
      "urlCourse" : "https://teamtreehouse.com/"
    },
    {
      "title" : "Php, Wordpress Developer",
      "school" : "Treehouse",
      "date" : "2015 - (in progress)",
      "url" : "https://teamtreehouse.com/",
      "urlCourse" : "https://teamtreehouse.com/"
    }
  ]
};

//projects
var projects = {
  "projects" : [
    {
      "title" : "Portfolio",
      "dates" : "2016",
      "description" : "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.",
      "images" : ["images/portfolio_website.jpg"],
      "url" : "https://github.com/pe1te3son/porfolio_website"
    }
  ]
};

///////////////
//// Resume Display functions
///////////////

//Bio display function
bio.display = function(){
  var $skills = $('#skills');
  $('#bio-name').prepend(
      HTMLheaderName.replace('%data%', bio.name),
      HTMLheaderRole.replace('%data%', bio.role)
  );

  $('#topContacts, #footerContacts').append(
      HTMLemail.replace('%link%', bio.contacts['email']).replace('%data%', bio.contacts['email']),
      HTMLmobile.replace('%link%', bio.contacts['mobile']).replace('%data%', bio.contacts['mobile']),
      HTMLtwitter.replace('%link%', bio.contacts.twitter['twitter_url']).replace('%data%', bio.contacts.twitter['username']),
      HTMLgithub.replace('%link%', bio.contacts.github['github_url']).replace('%data%', bio.contacts.github['username']),
      HTMLblog.replace('%link%', bio.contacts['blog']),
      HTMLlocation.replace('%data%', bio.contacts['location'])
  );

  $skills.before(HTMLbioPic.replace('%data%', bio.biopic));
  $skills.prepend(HTMLwelcomeMsg.replace('%data%', bio.welcomeMessage));

  if(bio.skills.length){
    $skills.append(HTMLskillsStart);
    $('#skills-list').append(function(){
      //constructs skills html
      var htmlToReturn = "";
      bio.skills.forEach(function(skill){
        htmlToReturn += HTMLskills.replace('%data%', skill);
      });//for loop ends

      return htmlToReturn;
    });
  }//if statment ends
};

//work display function
work.display = function(){
  if(work.jobs.length){
    work.jobs.forEach(function(job){
      $('#workExperience').append(HTMLworkStart);
      $('.work-entry:last').append(function(){
        var htmlToReturn = "";
        htmlToReturn += HTMLworkEmployer.replace('%#%', job.url).replace('%data%', job.employer);
        htmlToReturn += HTMLworkTitle.replace('%data%', job.title);
        htmlToReturn += HTMLworkDates.replace('%data%', job.dates);
        htmlToReturn += HTMLworkDescription.replace('%data%', job.description);
        htmlToReturn += HTMLworkLocation.replace('%data%', job.location);
        return htmlToReturn;
      });
    });//for loop ends
  }//if statment ends
};

//education display function
education.display = function(){
  var $education = $('#education');
  if(education.schools.length){
    //constructs education unit for schools
    education.schools.forEach(function(school){
      $education.append(HTMLschoolStart);
      $('.education-entry:last').append(function(){
        var htmlToReturn = "";
        htmlToReturn += HTMLschoolName.replace('%#%', school.url).replace('%data%', school.name);
        htmlToReturn += HTMLschoolDegree.replace('%data%', school.degree);
        htmlToReturn += HTMLschoolDates.replace('%data%', school.dates);
        htmlToReturn += HTMLschoolLocation.replace('%data%', school.location);
        htmlToReturn += HTMLschoolMajor.replace('%data%', school.majors);
        return htmlToReturn;
      });
    });//for loop ends
  }//if ends

  if(education.onlineCourses.length){
    //constructs education unit for online courses
    $education.append(HTMLonlineClasses);
    education.onlineCourses.forEach(function(course){
      $education.append(HTMLschoolStart);
      $('.education-entry:last').append(function(){
        var htmlToReturn = "";
        htmlToReturn += HTMLonlineTitle.replace('%#%', course.urlCourse).replace('%data%', course.title);
        htmlToReturn += HTMLonlineSchool.replace('%data%', course.school);
        htmlToReturn += HTMLonlineDates.replace('%data%', course.date);
        htmlToReturn += HTMLonlineURL.replace('%#%', course.url).replace('%data%', course.school);
        return htmlToReturn;
      });
    });//for loop ends
  }//if ends
};

//projects display function
projects.display = function(){

  //Returns built html for project`s images
  //@param: project
  function loopImages(project){
    if(project.length){
      var htmlToReturn = "";
      project.forEach(function(image){
        htmlToReturn += HTMLprojectImage.replace('%data%', image);
      });//for loop ends
      return htmlToReturn;
    }//if ends
  }//loopImages ends

  if(projects.projects.length){
    projects.projects.forEach(function(project){
      $('#projects').append(HTMLprojectStart);
      $('.project-entry:last').append(function(){
        var htmlToReturn = "";
        htmlToReturn += '<div class="project-info col-sm-6">';
        htmlToReturn += HTMLprojectTitle.replace('%#%', project.url).replace('%data%', project.title);
        htmlToReturn += HTMLprojectDates.replace('%data%', project.dates);
        htmlToReturn += HTMLprojectDescription.replace('%data%', project.description);
        htmlToReturn += '</div>';
        htmlToReturn += loopImages(project.images);
        return htmlToReturn;
      });
    });//for loop ends
  }//if ends
};

///////////////
//// Functions
///////////////

  //Off canvas menu
function mainNavigation(){
  //TODO: rethink the way its done, cut on selectors, improve reusability
  $('.icon-open').click(function(){
    $('#main-navigation').animate({"left":0});
    $(this).css("display", "none");
    $('.icon-close').css("display", "block");
    $('.nav-icon, #main').animate({"marginLeft": "300px"});
    if($(window).width() < 600){
      $('#bio-name').animate({"right": "-300"});
    }
  });

  $('.icon-close').click(function(){
    $('#main-navigation').animate({"left": '-=300'});
    $(this).css("display", "none");
    $('.icon-open').css("display", "block");
    $('.nav-icon, #main').animate({"marginLeft": '-=300'});
    $('#bio-name').animate({"right": 40});
  });
}

//smoothly scrolls to anchors on the page
//@param: duration
function smoothScroll (duration) {
	$('a[href^="#"]').on('click', function(event) {

	    var target = $( $(this).attr('href') );
      var scrollTo = (target.offset().top) - 200;

	    if( target.length ) {
	        event.preventDefault();
	        $('html, body').animate({
	            scrollTop: scrollTo
	        }, duration);
	    }
	});
}

///////////////
//// Resume builder
///////////////
bio.display();
work.display();
projects.display();
education.display();
$('#mapDiv').append(googleMap);
$('#main-navigation').append(internationalizeButton);

///////////////
//// Document ready
///////////////
$(document).ready(function(){

    mainNavigation();
    smoothScroll(1000);

});
