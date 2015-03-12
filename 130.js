function my_confirm(text,callback_txt) {
   var a = initmsg();
   var b = ID("alertbgnd");
   a.innerHTML = "<div class='alertit'></div><p>" + text + "</p><input type='button' onclick=\"" + callback_txt + "\" value='Confirm' />";
   a.style.display = "block";
   b.style.display = "block";
}

function hidealert() {
   var a = ID("alertbox");
   var b = ID("alertbgnd");
   a.style.display = "none";
   b.style.display = "none";
}

