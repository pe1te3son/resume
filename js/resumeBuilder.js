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
        "github" : {
          "username" : "pe1te3son",
          "github_url" : "https://github.com/pe1te3son"
        },
        "twitter" : {
          "username" : "@peter_janak",
          "twitter_url" : "https://twitter.com/peter_janak"
        },
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
      "majors" : "N/A",
      "dates" : "2001 - 2005",
      "url" : "https://doaza.edu.sk/"
    }
  ],
  "onlineCourses": [
    {
      "title" : "Front end Web-developer",
      "school" : "Udacity",
      "date" : "2016 (in progress)",
      "urlCourse" : "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001",
      "url" : "https://www.udacity.com/"
    },
    {
      "title" : "Front end Web-developer",
      "school" : "Treehouse",
      "date" : "2015",
      "urlCourse" : "https://teamtreehouse.com/",
      "url" : "https://teamtreehouse.com/"
    },
    {
      "title" : "Php, Wordpress Developer",
      "school" : "Treehouse",
      "date" : "2015 - (in progress)",
      "urlCourse" : "https://teamtreehouse.com/",
      "url" : "https://teamtreehouse.com/"
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
//// Display functions
///////////////

//Bio display function
bio['display'] = function(){

  $('#bio-name').prepend(
      HTMLheaderName.replace('%data%', bio.name)
    , HTMLheaderRole.replace('%data%', bio.role)
  );

  $('#topContacts, #footerContacts').append(
      HTMLemail.replace('%link%', bio.contacts['email']).replace('%data%', bio.contacts['email'])
    , HTMLmobile.replace('%link%', bio.contacts['mobile']).replace('%data%', bio.contacts['mobile'])
    , HTMLtwitter.replace('%link%', bio.contacts.twitter['twitter_url']).replace('%data%', bio.contacts.twitter['username'])
    , HTMLgithub.replace('%link%', bio.contacts.github['github_url']).replace('%data%', bio.contacts.github['username'])
    , HTMLblog.replace('%link%', bio.contacts['blog'])
    , HTMLlocation.replace('%data%', bio.contacts['location'])
  );

  $('#skills').before(HTMLbioPic.replace('%data%', bio.biopic));
  $('#skills').prepend(HTMLwelcomeMsg.replace('%data%', bio.welcomeMessage));

  if(bio.skills.length > 0){
    $('#skills').append(HTMLskillsStart);
    $('#skills-list').append(function(){
      //constructs skills html
      var htmlToReturn = "";
      for(var skill in bio.skills){
        htmlToReturn += HTMLskills.replace('%data%', bio.skills[skill]);
      }//for loop ends

      return htmlToReturn;
    });
  }//if statment ends
};

//work display function
work['display'] = function(){
  if(work.jobs.length > 0){
    for(var job in work.jobs){
      $('#workExperience').append(HTMLworkStart);
      $('.work-entry:last').append(function(){
        var htmlToReturn = "";
        htmlToReturn += HTMLworkEmployer.replace('%#%', work.jobs[job].url).replace('%data%', work.jobs[job].employer);
        htmlToReturn += HTMLworkTitle.replace('%data%', work.jobs[job].title);
        htmlToReturn += HTMLworkDates.replace('%data%', work.jobs[job].dates);
        htmlToReturn += HTMLworkDescription.replace('%data%', work.jobs[job].description);
        htmlToReturn += HTMLworkLocation.replace('%data%', work.jobs[job].location);
        return htmlToReturn;
      });
    }//for loop ends
  }//if statment ends
};

//education display function
education["display"] = function(){
  if(education.schools.length > 0){
    //constructs education unit for schools
    for(var school in education.schools){
      $('#education').append(HTMLschoolStart);
      $('.education-entry:last').append(function(){
        var htmlToReturn = "";
        htmlToReturn += HTMLschoolName.replace('%#%', education.schools[school].url).replace('%data%', education.schools[school].name);
        htmlToReturn += HTMLschoolDegree.replace('%data%', education.schools[school].degree);
        htmlToReturn += HTMLschoolDates.replace('%data%', education.schools[school].dates);
        htmlToReturn += HTMLschoolLocation.replace('%data%', education.schools[school].location);
        htmlToReturn += HTMLschoolMajor.replace('%data%', education.schools[school].majors);
        return htmlToReturn;
      });
    }//for loop ends
  }//if ends

  if(education.onlineCourses.length > 0){
    //constructs education unit for online courses
    $('#education').append(HTMLonlineClasses);
    for(var course in education.onlineCourses){
      $('#education').append(HTMLschoolStart);
      $('.education-entry:last').append(function(){
        var htmlToReturn = "";
        htmlToReturn += HTMLonlineTitle.replace('%#%', education.onlineCourses[course].urlCourse).replace('%data%', education.onlineCourses[course].title);
        htmlToReturn += HTMLonlineSchool.replace('%data%', education.onlineCourses[course].school);
        htmlToReturn += HTMLonlineDates.replace('%data%', education.onlineCourses[course].date);
        htmlToReturn += HTMLonlineURL.replace('%#%', education.onlineCourses[course].url).replace('%data%', education.onlineCourses[course].school);
        return htmlToReturn;
      });
    }//for loop ends
  }//if ends
};

//projects display function
projects["display"] = function(){

  //Returns built html for project`s images
  //@param: project
  function loopImages(project){
    if(project.length > 0){
      var htmlToReturn = "";
      for(var image in project){
        htmlToReturn += HTMLprojectImage.replace('%data%', project[image]);
      }//for loop ends
      return htmlToReturn;
    }//if ends
  }//loopImages ends

  if(projects.projects.length > 0){
    for(var project in projects.projects){
      $('#projects').append(HTMLprojectStart);
      $('.project-entry:last').append(function(){
        var htmlToReturn = "";
        htmlToReturn += '<div class="project-info">';
        htmlToReturn += HTMLprojectTitle.replace('%#%', projects.projects[project].url).replace('%data%', projects.projects[project].title);
        htmlToReturn += HTMLprojectDates.replace('%data%', projects.projects[project].dates);
        htmlToReturn += HTMLprojectDescription.replace('%data%', projects.projects[project].description);
        htmlToReturn += '</div>';
        htmlToReturn += loopImages(projects.projects[project].images);
        return htmlToReturn;
      });
    }//for loop ends
  }//if ends
};

///////////////
//// Resume builder
///////////////
bio.display();
work.display();
projects.display();
education.display();
$('#mapDiv').append(googleMap);
