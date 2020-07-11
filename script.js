var navMenuAnchorTags = document.querySelectorAll('.nav-menu a');
var interval;
 
for(var i = 0 ; i < navMenuAnchorTags.length; i++){
    navMenuAnchorTags[i].addEventListener('click',function(e){
        e.preventDefault();
        var targetSectionID = this.textContent.trim().toLowerCase();
        var targetSection = document.getElementById(targetSectionID);
        console.log(targetSection);
         interval = setInterval(verticalScroll,20,targetSection);
    });
}



function verticalScroll(targetSection){
    var targetCordinates = targetSection.getBoundingClientRect();
    if(targetCordinates.top<=10){
        clearInterval(interval);
    }
    window.scrollBy(0,50);
}


 var progressBars = document.querySelectorAll('.skill-progress > div');
var skillsection = document.getElementById('skills');
window.addEventListener('scroll',checkScroll);



function initialProgress(){
    for(let bar of progressBars){
        bar.style.width = 0+'%';
    }
}
initialProgress();


function fillBar(){
    for(let bar of progressBars){
    
        let targetWidth = bar.getAttribute('data-bar-width');
        let currwidth = 0 ;
        let interval = setInterval(function(){
            if(currwidth > targetWidth){
                
                clearInterval(interval);
            }
            currwidth++;
            bar.style.width = currwidth + '%';
        },5);
    }
}


 var isHappenedAnimation =  false;
function checkScroll (){

    var skillsectionposition = skillsection.getBoundingClientRect();

     if(skillsectionposition.top<window.innerHeight){
        if(!isHappenedAnimation){
              isHappenedAnimation = true;
            fillBar();
        }
        
    }
    else{
        isHappenedAnimation = false;
        initialProgress();
    }
}
