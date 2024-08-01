let currentFieldSet = 0

document.getElementById('quiz-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    console.log('hello!')
});

function showCurrentFieldSet(index) {
    let fieldsets = document.getElementsByTagName('fieldset')
    let next = document.getElementById('next')
    let prev = document.getElementById('prev')

    fieldsets[index].style.display = 'block'

    if (index === 0) {
        prev.style.display = 'none'
    }
    else {
        prev.style.display = 'inline'
    }

    if (currentFieldSet === fieldsets.length - 1) {
        next.innerHTML = "Submit"
        next.style.backgroundColor = "wheat"
        next.type = "Submit"
    }
    else {
        next.innerHTML = 'Next'
        next.style.backgroundColor = "white"
    }   

}

function nextFieldset() {
    let fieldsets = document.getElementsByTagName('fieldset')
    fieldsets[currentFieldSet].style.display = 'none'
    const temp = currentFieldSet
    currentFieldSet += 1
    if (currentFieldSet >= fieldsets.length) {
        showResults()
    }
    else {
        showCurrentFieldSet(currentFieldSet)
        adjustSteps(temp, currentFieldSet)
    }  
}

function prevFieldset() {
    let fieldsets = document.getElementsByTagName('fieldset')
    fieldsets[currentFieldSet].style.display = 'none'
    const temp = currentFieldSet
    currentFieldSet -= 1

    showCurrentFieldSet(currentFieldSet)
    adjustSteps(temp, currentFieldSet)
}

function pulse(img){
    var isSmol= true;
    var intervalId = setInterval(function() {
       if (isSmol) {
       img.style.transform = "scale(1.11)";
       img.style.transition = "transform 0.50s ease";
      }
      else {
        img.style.transform = "scale(1)";
        img.style.transition = "transform 0.50s ease";
      }
    
      isSmol = !isSmol
    }, 500); // 1000 milliseconds = 1 second
    }

function showResults() {
    document.getElementById("quiz-form").style.display = 'none'
    document.getElementById("quiz-header").style.display = 'none'
    document.getElementById("quiz-results").style.display = 'flex'

    const form = document.getElementById('quiz-form');
    const data = new FormData(form)
    let resImage = document.getElementById("result-image")


    switch(data.get('aesthetic-pref')) {
        case 'cool':
            resImage.src = 'pictures/Men1.jpg'
            break;
        case 'cute':
            resImage.src = 'pictures/Other3.jpg'
            break;
        case 'classy':
            resImage.src = 'pictures/Women1.jpg'
            break;
    }
    pulse(resImage);
}




function adjustSteps(prev, current) {
    let steps = document.getElementsByClassName("step");
    steps[prev].className = steps[prev].className.replace(" active", "");
    
    steps[current].className += " active";
  }

showCurrentFieldSet(0)
adjustSteps(0, 0)

