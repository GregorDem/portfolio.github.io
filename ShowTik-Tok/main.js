let color;
let thing;
let loc;
console.log(document.getElementsByClassName('photo'));
if (!localStorage.color || !localStorage.thing || !localStorage.loc) {
	color = [];
    thing = [];
    loc = [];
} else {
	color = JSON.parse(localStorage.getItem('color'));
    thing = JSON.parse(localStorage.getItem('thing'));
    loc = JSON.parse(localStorage.getItem('loc'));
}
const saveInLocal = () => {
	localStorage.setItem('color', JSON.stringify(color));
    localStorage.setItem('thing', JSON.stringify(thing));
    localStorage.setItem('loc', JSON.stringify(loc));
}

function Color(){
    let number = Math.floor(Math.random() * 3) + 1;
    if(color.length != 0) {
        if(color.indexOf(number) == -1) {
            color.push(number);
            document.getElementById('1').className = "photoC"
            document.getElementById('1').style.backgroundImage = "url(Color/"+String(number)+".jpg)";
            saveInLocal();
        }else {
            Color()
        }
    } else {
        color.push(number);
        document.getElementById('1').className = "photoC"
        document.getElementById('1').style.backgroundImage = "url(Color/"+String(number)+".jpg)";
        saveInLocal();
    }
}
function Thing(){
    let number = Math.floor(Math.random() * 3) + 1;
    if(thing.length != 0) {
        if(thing.indexOf(number) == -1) {
            thing.push(number);
            document.getElementById('2').className = "photoT"
            document.getElementById('2').style.backgroundImage = "url(Thing/"+String(number)+".jpg)";
            saveInLocal();
        }else {
            Thing()
        }
    } else {
        thing.push(number);
        document.getElementById('2').className = "photoT"
        document.getElementById('2').style.backgroundImage = "url(Thing/"+String(number)+".jpg)";
        saveInLocal();
    }
}
function Location(){
    let number = Math.floor(Math.random() * 3) + 1;
    if(loc.length != 0) {
        if(loc.indexOf(number) == -1) {
            loc.push(number);
            document.getElementById('3').className = "photoL"
            document.getElementById('3').style.backgroundImage = "url(Location/"+String(number)+".jpg)";
            saveInLocal();
        }else {
            Location()
        }
    } else {
        loc.push(number);
        document.getElementById('3').className = "photoL"
        document.getElementById('3').style.backgroundImage = "url(Location/"+String(number)+".jpg)";
        saveInLocal();
    }
}
