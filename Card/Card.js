function Down(){
    document.getElementById("Name").style.left = "100px";
    document.getElementById("Name").style.top = "-110px";
    document.getElementById("Job").style.left = "100px";
    document.getElementById("Job").style.top = "-150px";
    document.getElementById("imgContainer").style.top = "60px";
    document.getElementById("imgContainer").style.left = "150px";
    document.getElementById("imgContainer").style.visibility = "visible";
    document.getElementById("CardHeader").style.visibility = "hidden";
    document.getElementById("CardContainer").style.height = "350px";
    document.getElementById("Star1").style.top = "-120px";
    document.getElementById("Star2").style.top = "-120px";
    document.getElementById("Star3").style.top = "-120px";
    document.getElementById("Star4").style.top = "-120px";
    document.getElementById("Star5").style.top = "-120px";
    document.getElementById("Insta").style.top = "-120px";
    document.getElementById("Twitter").style.top = "-120px";
    document.getElementById("Linkedin").style.top = "-120px";
    document.getElementById("Face").style.top = "-120px";
    document.getElementById("Youtube").style.top = "-120px";
    document.getElementById("button1").style.top = "-120px";
    document.getElementById("button2").style.top = "-168px";
    document.getElementById("Up").style.visibility = "visible";
    document.getElementById("Up").style.color = "#1f06ff";
    document.getElementById("Down").style.visibility = "hidden";
    document.getElementById("RoundedContainer").style.visibility = "hidden";
    document.getElementById("Open").style.visibility = "hidden";
    document.getElementById("Moon").style.visibility = "hidden";
    document.getElementById("Dark").style.visibility = "hidden";
    document.getElementById("Sun").style.visibility = "hidden";
}
function Up(){
    document.getElementById("Name").style.left = "0px";
    document.getElementById("Name").style.top = "50px";
    document.getElementById("Job").style.left = "0px";
    document.getElementById("Job").style.top = "0px";
    document.getElementById("imgContainer").style.top = "100px";
    document.getElementById("imgContainer").style.left = "225px";
    document.getElementById("imgContainer").style.visibility = "visible";
    document.getElementById("CardHeader").style.visibility = "visible";
    document.getElementById("CardContainer").style.height = "500px";
    document.getElementById("Star1").style.top = "0px";
    document.getElementById("Star2").style.top = "0px";
    document.getElementById("Star3").style.top = "0px";
    document.getElementById("Star4").style.top = "0px";
    document.getElementById("Star5").style.top = "0px";
    document.getElementById("Insta").style.top = "0px";
    document.getElementById("Twitter").style.top = "0px";
    document.getElementById("Linkedin").style.top = "0px";
    document.getElementById("Face").style.top = "0px";
    document.getElementById("Youtube").style.top = "0px";
    document.getElementById("button1").style.top = "0px";
    document.getElementById("button2").style.top = "-48px";
    document.getElementById("Up").style.visibility = "hidden";
    document.getElementById("Down").style.visibility = "visible";
    document.getElementById("Open").style.visibility = "visible";
    document.getElementById("Moon").style.visibility = "visible";
    document.getElementById("Dark").style.visibility = "visible";
    document.getElementById("Sun").style.visibility = "visible";
}

// When you click the Sun icon the JavaScript code allows the transition to Open Theme.

function Sun(){
    document.getElementById("Down").style.color = "#fff";
    document.getElementById("imgContainer").style.border = "5px solid #fff";
    document.getElementById("CardContainer").style.backgroundColor = "#fff";
    document.getElementById("Rounded").style.color = "#fff";
    document.getElementById("Name").style.color = "#131313";
    document.getElementById("Job").style.color = "#131313";
    document.getElementById("Insta").style.color = "#131313";
    document.getElementById("Twitter").style.color = "#131313";
    document.getElementById("Linkedin").style.color = "#131313";
    document.getElementById("Face").style.color = "#131313";
    document.getElementById("Youtube").style.color = "#131313";
    document.getElementById("AboutMe").style.color = "#131313";
    document.getElementById("Portfolio").style.color = "#131313";
    document.getElementById("Moon").style.visibility = "visible";
    document.getElementById("Sun").style.visibility = "hidden";
    document.getElementById("body").style.backgroundColor = "#fff";
}

// When you click the Moon icon the JavaScript code allows the transition to Dark Theme.

function Moon(){
    document.getElementById("Down").style.color = "#131313";
    document.getElementById("imgContainer").style.border = "5px solid #131313";
    document.getElementById("CardContainer").style.backgroundColor = "#131313";
    document.getElementById("Rounded").style.color = "#131313";
    document.getElementById("Name").style.color = "#fff";
    document.getElementById("Job").style.color = "#fff";
    document.getElementById("Insta").style.color = "#fff";
    document.getElementById("Twitter").style.color = "#fff";
    document.getElementById("Linkedin").style.color = "#fff";
    document.getElementById("Face").style.color = "#fff";
    document.getElementById("Youtube").style.color = "#fff";
    document.getElementById("AboutMe").style.color = "#fff";
    document.getElementById("Portfolio").style.color = "#fff";
    document.getElementById("Moon").style.visibility = "hidden";
    document.getElementById("Sun").style.visibility = "visible";
    document.getElementById("body").style.backgroundColor = "#131313";
}

