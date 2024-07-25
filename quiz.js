let currentFieldSet = 0

function showCurrentFieldSet(index) {
    let fieldsets = document.getElementsByTagName('fieldset')
    let next = document.getElementById('next')
    let prev = document.getElementById('prev')

    fieldsets[index].style.display = 'block'

    if (index === 0) {
        prev.style.display = 'none'
        // adjustSteps(0, 0)
    }
    else {
        prev.style.display = 'inline'
    }

    if (currentFieldSet === fieldsets.length - 1) {
        next.innerHTML = "Submit"
        next.style.backgroundColor = "wheat"
    }
    else {
        next.innerHTML = 'Next'
        next.style.backgroundColor = "white"
        next.style.c
    }   

}

function nextFieldset() {
    let fieldsets = document.getElementsByTagName('fieldset')
    fieldsets[currentFieldSet].style.display = 'none'
    const temp = currentFieldSet
    currentFieldSet += 1
    if (currentFieldSet >= fieldsets.length) {
        document.getElementById("review-form").submit();
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

function adjustSteps(prev, current) {
    let steps = document.getElementsByClassName("step");
    steps[prev].className = steps[prev].className.replace(" active", "");
    
    steps[current].className += " active";
  }

showCurrentFieldSet(0)
adjustSteps(0, 0)
