var countCon = parseInt(document.querySelector("#conNumbers").innerHTML);
var countConReq = parseInt(document.querySelector("#reqNumbers").innerHTML);

function editProfile(){
    document.querySelector("#profName").textContent = "Mary Joana";
}

function buttonAccept1(){
    countCon++;
    countConReq--;
    document.querySelector("#conNumbers").innerHTML = countCon + "+";
    document.querySelector("#reqNumbers").innerHTML = countConReq;
    document.querySelector("#toddDelete").remove();

    if(countConReq==0){
        window.alert("You have " + countConReq + " Connection Request!");
    }
}

function buttonDelete1(){
    countConReq--;
    document.querySelector("#reqNumbers").innerHTML = countConReq;
    document.querySelector("#toddDelete").remove();

    if(countConReq==0){
        window.alert("You have " + countConReq + " Connection Request!");
    }
}

function buttonAccept2(){
    countCon++;
    countConReq--;
    document.querySelector("#conNumbers").innerHTML = countCon + "+";
    document.querySelector("#reqNumbers").innerHTML = countConReq;
    document.querySelector("#philDelete").remove();

    if(countConReq==0){
        window.alert("You have " + countConReq + " Connection Request!");
    }
}

function buttonDelete2(){
    countConReq--;
    document.querySelector("#reqNumbers").innerHTML = countConReq;
    document.querySelector("#philDelete").remove();

    if(countConReq==0){
        window.alert("You have " + countConReq + " Connection Request!");
    }
}