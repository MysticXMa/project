function Test() {
    var errorElement = document.getElementById("Error");
    var errorElement2 = document.getElementById("Button1");
    var name = document.getElementById("Name").value;
    var info = document.getElementById("Info").value;
    
    if (name == ""){
        errorElement.innerHTML = "Täytä kaikki kentät";
        errorElement.style.color = "#ffffff";
        errorElement.style.background = "#a00707";
        errorElement.style.margin = "10px 20px 10px 20px";
        errorElement.style.textAlign = "left";
        errorElement.style.padding = "10px";
        Final(false)
        errorElement2.innerHTML = "Virhe! En lisännyt tietoa.";
        errorElement2.style.color = "#ffffff";
        errorElement2.style.background = "#ff0000";
        errorElement2.style.textAlign = "center";
    } else if (info == ""){
        errorElement.innerHTML = "Täytä kaikki kentät";
        errorElement.style.color = "#ffffff";
        errorElement.style.background = "#a00707";
        errorElement.style.margin = "10px 20px 10px 20px";
        errorElement.style.textAlign = "left";
        errorElement.style.padding = "10px";
        Final(false)
        errorElement2.innerHTML = "Virhe! En lisännyt tietoa.";
        errorElement2.style.color = "#ffffff";
        errorElement2.style.background = "#ff0000";
        errorElement2.style.textAlign = "center";
    } else {
        console.log("Your data, Name: " + name + ", Info:" + info)
        Final(true)
        errorElement.innerHTML = "Tietosi ovat tallennettu!";
        errorElement.style.color = "#ffffff";
        errorElement.style.background = "#028A0F";
        errorElement.style.margin = "10px 20px 10px 20px";
        errorElement.style.textAlign = "left";
        errorElement.style.padding = "10px";

        errorElement2.innerHTML = "Lisää tieto"
        errorElement2.style.color = "#ffffff";
        errorElement2.style.background = "#332c2c";
        errorElement2.style.textAlign = "center";
    }
}

function Final(a) {
    var errorElement = document.getElementById("Result1");
    var name = document.getElementById("Name").value;
    var info = document.getElementById("Info").value;

    if (a){
        console.log("True") 
        errorElement.innerHTML = name + ": " + info;
        errorElement.style.alignContent = "center";
        errorElement.style.margin = "0 23%";
        errorElement.style.color = "#779169";
        errorElement.style.backgroundColor = "#f8e7fd";
        errorElement.style.borderRadius = "2px";
        errorElement.style.fontFamily = "'Courier New', Courier, monospace";
        errorElement.style.width = "60%";
        errorElement.style.fontStyle = "bold"
        errorElement.style.padding = "1%";
    } else{
        console.log("False")
        errorElement.innerHTML = ""
        errorElement.style.alignContent = "center";
        errorElement.style.margin = "0 0%";
        errorElement.style.color = "#779169";
        errorElement.style.backgroundColor = "#f8e7fd";
        errorElement.style.borderRadius = "0px";
        errorElement.style.fontFamily = "'Courier New', Courier, monospace";
        errorElement.style.width = "0%";
        errorElement.style.fontStyle = "bold"
        errorElement.style.padding = "0%";
    }
    
}

function Final2() {
    var HTML = document.getElementById("a");
    var HTML2 = document.getElementById("a2");
    var CSS = document.getElementById("b");
    var CSS2 = document.getElementById("b2");
    var JavaScript = document.getElementById("c");
    var JavaScript2 = document.getElementById("c2");
    var CICD = document.getElementById("d");
    var CICD2 = document.getElementById("d2");

    var result = "";

    if (HTML.checked) {
        HTML2.innerHTML = "HTML tunnit pidetty";
    } else{
        HTML2.innerHTML = "HTML";
    }

    if (CSS.checked) {
        CSS2.innerHTML = "CSS tunnit pidetty";
    } else{
        CSS2.innerHTML = "CSS";
    }

    if (JavaScript.checked) {
        JavaScript2.innerHTML = "JavaScript tunnit pidetty";
    } else{
        JavaScript2.innerHTML = "JavaScript";
    }

    if (CICD.checked) {
        CICD2.innerHTML = "CI/CD tunnit pidetty";
    } else{
        CICD2.innerHTML = "CI/CD";
    }
}

// Moi :D