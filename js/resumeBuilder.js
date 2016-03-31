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
        "github" : "https://github.com/pe1te3son",
        "twitter" : "@peter_janak",
        "location" : "London",
        "blog" : "https://github.com/pe1te3son"
      },
  "welcomeMessage": "Welcome to my site",
  "skills" : ["html", "css", "javascript"],
  "biopic" : "images/profile_pic.jpg"
};



//Work
var work = {
  "jobs" : [
    {
      "employer" : "Augustus Martin",
      "title" : "Warehouse operative",
      "location" : "London",
      "dates" : "in porgress :(",
      "description" : "Printing company"
    },
    {
      "employer" : "Joka",
      "title" : "Builder",
      "location" : "Prague",
      "dates" : "7 years ago",
      "description" : "Building company"
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
      "url" : "https://www.udacity.com/"
    },
    {
      "title" : "Front end Web-developer",
      "school" : "Treehouse",
      "date" : "2015",
      "url" : "https://teamtreehouse.com/"
    },
    {
      "title" : "Php, Wordpress Developer",
      "school" : "Treehouse",
      "date" : "2015 - (in progress)",
      "url" : "https://teamtreehouse.com/"
    }
  ]
};


///////////////
//// Display functions
///////////////

//Bio display function
bio['display'] = function(){

  $('#header').prepend(
      HTMLheaderName.replace('%data%', bio.name)
    , HTMLheaderRole.replace('%data%', bio.role)
  );

  $('#topContacts').before(HTMLbioPic.replace('%data%', bio.biopic));

  $('#topContacts, #footerContacts').append(
      HTMLmobile.replace('%data%', bio.contacts['mobile'])
    , HTMLemail.replace('%data%', bio.contacts['email'])
    , HTMLlocation.replace('%data%', bio.contacts['location'])
    , HTMLtwitter.replace('%data%', bio.contacts['twitter'])
    , HTMLgithub.replace('%data%', bio.contacts['github'])
    , HTMLblog.replace('%data%', bio.contacts['blog'])
  );

  //todo put if statement here
  if(bio.skills.length > 0){
    $('#header').append(HTMLskillsStart);
    $('#skills').append(function(){
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
    $('#workExperience').append(HTMLworkStart);
    $('#workExperience').append(function(){
        var htmlToReturn = "";
        //constructs job unit
        for(var job in work.jobs){
          htmlToReturn += HTMLworkEmployer.replace('%data%', work.jobs[job].employer);
          htmlToReturn += HTMLworkTitle.replace('%data%', work.jobs[job].title);
          htmlToReturn += HTMLworkDates.replace('%data%', work.jobs[job].dates);
          htmlToReturn += HTMLworkLocation.replace('%data%', work.jobs[job].location);
          htmlToReturn += HTMLworkDescription.replace('%data%', work.jobs[job].description);
        }//for loop ends

        return htmlToReturn;
      }//append function ends
    );
  }//if statment ends
};

//education display function
education["display"] = function(){
  if(education.schools.length > 0){
    $('#education').append(HTMLschoolStart);
    $('#education').append(function(){
      var htmlToReturn = "";
      //constructs school unit
      for(var school in education.schools){
        htmlToReturn += HTMLschoolName.replace('%data%', education.schools[school].name);
        htmlToReturn += HTMLschoolDegree.replace('%data%', education.schools[school].degree);
        htmlToReturn += HTMLschoolDates.replace('%data%', education.schools[school].dates);
        htmlToReturn += HTMLschoolLocation.replace('%data%', education.schools[school].location);
        htmlToReturn += HTMLschoolMajor.replace('%data%', education.schools[school].majors);
      }//for loop ends
      return htmlToReturn;
    });

  }//if ends
  if(education.onlineCourses.length > 0){

  }//if ends
};
///////////////
//// Resume builder
///////////////
bio.display();
work.display();
education.display();
