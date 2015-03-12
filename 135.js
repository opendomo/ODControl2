function loadNetworkConfig_menu(data){
      clearMenu();
      addMenuItem("netcnt", "menuitem", "Web access port", cIF("webui", "number", data.webuiport, null));
      addMenuItem("netcfg", "menuitem", "ODC Configurator port", cIF("webcf", "number", data.webcfport, null));
      addMenuItem("netcrp", "menuitem", "Communication port", cIF("proto", "number", data.protoport, null));
      addMenuItem("netip",  "menuitem", "IP", cIF("ip", "text", data.ip, "[0-9.]*"));
      addMenuItem("netgtw", "menuitem", "Gateway", cIF("gateway", "text", data.gateway, "[0-9.]*"));
      addMenuItem("netmsk", "menuitem", "Netmask", cIF("netmask", "text", data.netmask, "[0-9.]*"));
      addMenuItem("netntp", "menuitem", "NTP", cIF("ntp", "text", data.ntp, "[0-9.]*"));
      addMenuItem("netevn", "menuitem", "Broadcast events", cIF("ev", "text", data.ev, "[0-9.]*"));
}

