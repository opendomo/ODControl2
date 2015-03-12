function displayPortDetails_process_analog(id) {

   if (isanalog(id)) {
      var pr = ports[id][5].split("|");

      minval = parseFloat(pr[0]?pr[0]:0);
      maxval = parseFloat(pr[1]?pr[1]:100);
      tolval = ((""==ports[id][7])?1:parseFloat(0+ports[id][7]));

		if(isenabled(id))
		{
      //TODO Only for version 2+
      addMenuItem("fldantype","menuitem","Port type",
         cSF("anlgtype", ports[id][6], analogtype, analogtype_desc), null);
      
      addMenuItem("fldminval","menuitem","Minimum",
         cIF("minvalue","number",minval,"[0-9]+"),null);
      addMenuItem("fldmaxval","menuitem","Maximum",
         cIF("maxvalue","number",maxval,"[0-9]+"),null);
      addMenuItem("fldtolerance","menuitem","Tolerance",
         cIF("tolerance","number",tolval,"[0-9]+"),null);
		}
   }
}

