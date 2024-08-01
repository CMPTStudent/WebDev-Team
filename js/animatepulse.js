img = document.getElementById("result-image");
function pulse(){
    i = 0
    do{
        img.style.transform = "scale(1.5)";
        img.style.transition = "transform 0.25s ease";
        img.style.transform = "scale(1)";
        img.style.transition = "transform 0.25s ease";
        i++;
    } while(i<=20)
    }