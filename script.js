//Create Container
var container = document.createElement('div');
var body = document.getElementsByTagName('body')[0];
body.appendChild(container);

//Create Box
var boxin = document.createElement('div');
container.appendChild(boxin);
container.style.margin = '5px';



//Container Css

container.style.backgroundColor = "#999999";
container.style.width = "200px";
container.style.height = "200px";
container.style.position = "relative";

//Container box
boxin.style.backgroundColor = "#ff0000";
boxin.style.width = "50px";
boxin.style.height = "50px";
boxin.style.position = "absolute";


//button
var btnL = document.createElement('button');
var btnLText = document.createTextNode('<< Left');
btnL.appendChild(btnLText);
body.appendChild(btnL);
btnL.addEventListener('click', actionL);

var btnT = document.createElement('button');
var btnTText = document.createTextNode('Top');
btnT.appendChild(btnTText);
body.appendChild(btnT);
btnT.addEventListener('click', actionT);

var btnD = document.createElement('button');
var btnDText = document.createTextNode('Down');
btnD.appendChild(btnDText);
body.appendChild(btnD);
btnD.addEventListener('click', actionD);

var btnR = document.createElement('button');
var btnRText = document.createTextNode('Right >>');
btnR.appendChild(btnRText);
body.appendChild(btnR);
btnR.addEventListener('click', actionR);





//Action
var posR = 0;
var posT = 0;

function actionR(){
    if(posR>140){
        posR = 140; 
    } else{
        posR += 10;
        boxin.style.left = posR+"px";
    }
}

function actionL(){
    if(posR>0){
        posR -= 10;
        boxin.style.left = posR+"px";
    } 
}

function actionD(){
    if(posT>140){
        posT = 140; 
    } else{
        posT += 10;
        boxin.style.top = posT+"px";
    }
}

function actionT(){
    if(posT>0){
        posT -= 10;
        boxin.style.top = posT+"px";
    } 
}



