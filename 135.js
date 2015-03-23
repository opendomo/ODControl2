function loadNetworkConfig_menu(data){
      clearMenu();
      addMenuItem("netcnt", "menuitem", MNU_WAP, cIF("webui", "number", data.webuiport, null));
      addMenuItem("netcfg", "menuitem", MNU_ODC, cIF("webcf", "number", data.webcfport, null));
      addMenuItem("netcrp", "menuitem", MNU_COM, cIF("proto", "number", data.protoport, null));
      addMenuItem("netip",  "menuitem", MNU_IP,  cIF("ip", "text", data.ip, "[0-9.]*"));
      addMenuItem("netgtw", "menuitem", MNU_GWY , cIF("gateway", "text", data.gateway, "[0-9.]*"));
      addMenuItem("netmsk", "menuitem", MNU_MSK, cIF("netmask", "text", data.netmask, "[0-9.]*"));
      addMenuItem("netntp", "menuitem", MNU_NTP, cIF("ntp", "text", data.ntp, "[0-9.]*"));
      addMenuItem("netevn", "menuitem", MNU_BCE, cIF("ev", "text", data.ev, "[0-9.]*"));
}
