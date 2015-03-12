function createMDB(){
   try{
      createMDB_menu();
   addToolbarSaveCancelHelp(function() {
         try{
         var command = "mdb+" +
            ports[portid][0] + "+" +
            ID("direction").value + "+" +
            ID("address").value + "+" +
            ID("register").value + "+" +
            ID("baud").value + "+" +
            ID("parity").value + "+" +
            ID("stop").value + "+" +
            ID("funct").value + "+" +
            ID("datatype").value;
         } catch (e) {
            alert("Invalid data: "+ e);
            return;
         }
         //alert(command);
         var resp = send_command(command);
         if (resp.indexOf("DONE")==-1) {
            alert("Error creating the link to the modbus port in: "+ resp + ".");
         } else {
            loadPortsInfo(ports[portid][0]);
            displayPortDetails(portid);
         }
      }, function(){displayPortDetails(portid);}, "mdb");
   } catch (e) {
      errorHandler(e);
   }     
         
}   
