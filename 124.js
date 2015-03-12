function cCF(id,value,f) {
   var complexfield = CE("span");

   var input = CE("input");
   input.setAttribute("id",id);
   input.setAttribute("type","hidden");
   input.setAttribute("value",value);
   AC(complexfield,input);

   var check = CE("a");
   SA(check,"title",id);
   if (value!="false" && value != false) {
      SA(check,"class","cbxON");
   } else {
      SA(check,"class","cbxOFF");
   }

   check.onclick = function(){
		if(f)f();
      var d = ID(this.title);
      if (d.value!="false") {
         d.value=false;
         this.setAttribute("class","cbxOFF");
      }else{
         d.value=true;
         this.setAttribute("class","cbxON");
      }
   };
   var a = CE("a");
   a.appendChild(check);
   AC(complexfield,a);

   return complexfield;
}

