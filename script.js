function genderClick(input) {
    localStorage.setItem('gender', input);
}

function seasonClick(input) {
    localStorage.setItem('season', input);
}

function figureUpload() {
    const currentGender=localStorage.getItem('gender');
    const currentSeason=localStorage.getItem('season');

    var imageElement = window.document.getElementById("myFigure")
    if(currentGender!=null && currentSeason!=null)
    {
        imageElement.setAttribute("src", "images/figure/"+ currentGender +"-"+ currentSeason + ".png");
    }
}

function detailsUpload(input){
    const currentGender=localStorage.getItem('gender');
    const currentSeason=localStorage.getItem('season');
    var bodyPart=input;

    var imageElement = window.document.getElementById("myDetailedFigure")
    if(currentGender!=null && currentSeason!=null && bodyPart!=null)
    {
        imageElement.setAttribute("usemap", "#detailed_part_head");
        imageElement.setAttribute("src", "images/figure/"+ currentGender +"-"+ currentSeason +"-"+ bodyPart+".png");
        localStorage.setItem('bodyPart', bodyPart);
    }
}

function mouseOnClothing(input) {
    const currentGender=localStorage.getItem('gender');
    const currentSeason=localStorage.getItem('season');
    const currentBodyPart=localStorage.getItem('bodyPart');
    var clothing=input;

    var imageElement = window.document.getElementById("myDetailedFigure")
    imageElement.setAttribute("src", "images/figure/"+ currentGender +"-"+ currentSeason +"-"+currentBodyPart+"-"+clothing+".png");
}

function itemSelected(input) {

    const currentGender = localStorage.getItem('gender');
    const currentSeason = localStorage.getItem('season');
    const currentBodyPart = localStorage.getItem('bodyPart');
    var clothing = input;
    var imageElement = window.document.getElementById("myDetailedFigure");

    window.location.href = "clothing-list.html"
    if (currentGender != null && currentSeason != null && currentBodyPart != null) {


        imageElement.setAttribute("usemap", "null");
        localStorage.setItem('clothing', clothing);
        imageElement.setAttribute("src", "images/figure/" + currentGender + "-" + currentSeason + "-" + currentBodyPart + "-" + clothing + ".png");
    }
}

function chooseColor(color, id) {
    const currentColor = color;
    const currenClothingId = id;


    var imageElement = window.document.getElementById(currenClothingId);

    imageElement.setAttribute('src', './images/clothing/' + currenClothingId + "-" + currentColor + ".png")
}

function addToCart(){
    var imageElement = window.document.getElementById("cart");
    imageElement.setAttribute("src", './images/in-cart1.png');
}


function pressingPay()
{
    alert("Thank you for your purchase, you will be redirected to the starting page");
    window.location.href = "index.html"
}
