//page html loader
function loadPage(href) {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET", href, false);
    xmlhttp.send();
    return xmlhttp.responseText;
};

//script loader
let scrData;
async function loadScript(btn_no){
    let {script}=await import(`./p/scripts/${contentScripts[btn_no]}`);
    scrData = script();
}

//load page and script according to content change
let activeBtn=document.getElementById("btn-1");
function goto(page,btnId){
    changeContent(page+".html");
    //
    let btn = document.getElementById(btnId);
    btn.setAttribute("class","nav-link active");
    btn.setAttribute("aria-current","page");

    activeBtn.setAttribute("class","nav-link");
    btn.setAttribute("aria-current","false");
    activeBtn = btn;

    //loadScript(btn_no+".js");
};

//change innerhtml of content
function changeContent(page){
    let contDiv = document.getElementById('content');
    contDiv.innerHTML = loadPage("./contents/"+page);
};

goto('whatis','btn-0');