var templates = new Array();
function loadTemplates() {
	if (typeof templates == "undefined"){
		//JS("http://cloud.opendomo.com/odctp/json.php?ver="+ver+"&uid="+uid);

// EMBEDDED for testing
var templates = new Array();
templates.push({name: "Prueba 1",
id: "149",
desc: "Prueba de plantilla",
commands: "lbl do000 DO000;;cfg DO000 dos;;cfg do001 dos;;cfg do002 dos;;cfg do003 dos;;cfg do004 dos;;cfg do005 dos;;cfg do006 dos;;cfg do007 dos;;cfg di000 dis;;cfg di001 dis;;cfg di002 dis;;cfg di003 dis;;cfg di004 dis;;cfg di005 dis;;cfg di006 dis;;cfg di007 dis;;cfg ao000 aos;;rng ao000  00000 00020;;cfg ao001 aos;;rng ao001  00000 00020;;cfg ai000 ais;;rng ai000  00000 00020;;cfg ai001 ais;;rng ai001  00000 00020;;",
});

templates.push({name: "Prova",
id: "150",
desc: "",
commands: "lbl do000 DO000;;lbl vt000 vt008;;lbl vt001 vt009;;lbl vt002 vt010;;lbl vt003 vt011;;lbl vt004 vt012;;lbl vt005 vt013;;lbl vt006 vt014;;lbl vt007 vt015;;lbl vt008 vt016;;lbl vt009 vt017;;lbl vt010 vt018;;lbl vt011 vt019;;lbl vt012 vt020;;lbl vt013 vt021;;lbl vt014 vt022;;lbl vt015 vt023;;lbl vt016 vt024;;lbl vt017 vt025;;lbl vt018 vt026;;lbl vt019 vt027;;lbl vt020 vt028;;lbl vt021 vt029;;lbl vt022 vt030;;lbl vt023 vt031;;lbl vt024 vt032;;lbl vt025 vt033;;lbl vt026 vt034;;lbl vt027 vt035;;lbl vt028 vt036;;lbl vt029 vt037;;lbl vt030 vt038;;lbl vt031 vt039;;lbl vt032 vt040;;lbl vt033 vt041;;lbl vt034 vt042;;lbl vt035 vt043;;lbl vt036 vt044;;lbl vt037 vt045;;lbl vt038 vt046;;lbl vt039 vt047;;lbl vt040 vt048;;lbl vt041 vt049;;lbl vt042 vt050;;lbl vt043 vt051;;lbl vt044 vt052;;lbl vt045 vt053;;lbl vt046 vt054;;lbl vt047 vt055;;lbl vt048 vt056;;lbl vt049 vt057;;lbl vt050 vt058;;lbl vt051 vt059;;lbl vt052 vt060;;lbl vt053 vt061",
});

templates.push({name: "ERRONEA",
id: "151",
desc: "Esta es una template que DEBE fallar.",
commands: "cfg mo001 Tdos;;cfg co002 Mdos;;cfg TO003 doszsd",
});

templates.push({name: "Pimkie Definitiva",
id: "199",
desc: "",
commands: "tag do000 l;;tag do001 c;;tag do002 l;;tag do003 l;;tag do004 c;;tag ai000 c;;tag ai001 c;;lbl vt000 tmpDi;;lbl vt001 tiemF;;lbl vt002 g000F;;lbl vt003 g0000;;lbl vt004 tiemC;;lbl vt005 g000C;;lbl vt006 g00CT;;lbl vt007 tiemV;;lbl vt008 g000V;;lbl vt009 g00VT;;lbl vt010 cond1;;lbl vt011 tempD;;lbl vt012 cond2;;cfg do000 dos;;cfg do001 dos;;cfg do002 dos;;cfg do003 dos;;cfg do004 dos;;cfg do005 doh;;cfg do006 doh;;cfg do007 doh;;cfg di000 dis;;cfg di001 dih;;cfg di002 dih;;cfg di003 dih;;cfg di004 dih;;cfg di005 dih;;cfg di006 dih;;cfg di007 dih;;cfg ao000 a1h;;rng ao000 00000 00010;;cfg ao001 a1h;;rng ao001 00010 00050;;cfg ai000 a6s;;rng ai000 00000 00050;;cfg ai001 a6s;;rng ai001 00000 00050;;cfg tmpDi dS;;sch tmpDi w 0x7E;;cfg tiemF dS;;sch tiemF h 0xF8018F;;cfg g000F dh;;grp g000F tmpDi tiemF and;;cfg g0000 dh;;grp g0000 di000 g000F and;;cfg tiemC dS;;sch tiemC h 0x7E3E00;;cfg g000C dh;;grp g000C tmpDi tiemC and;;cfg g00CT dh;;grp g00CT di000 g000C and;;cfg tiemV dS;;sch tiemV h 0x7E3E00;;cfg g000V dh;;grp g000V tmpDi tiemV and;;cfg g00VT dh;;grp g00VT di000 g000V and;;cfg cond1 dh;;cfg tempD dh;;per tempD 0020.0000;;set tempD 0020.0000;;cfg cond2 dh;;cfg vt013 dh;;var vt013 off;;cfg vt014 dh;;var vt014 off;;cfg vt015 dh;;var vt015 off;;cfg vt016 dh;;var vt016 off;;cfg vt017 dh;;var vt017 off;;cfg vt018 dh;;var vt018 off;;cfg vt019 dh;;var vt019 off;;cfg vt020 dh;;var vt020 off;;cfg vt021 dh;;var vt021 off;;cfg vt022 dh;;var vt022 off;;cfg vt023 dh;;var vt023 off;;cfg vt024 dh;;var vt024 off;;cfg vt025 dh;;var vt025 off;;cfg vt026 dh;;var vt026 off;;cfg vt027 dh;;var vt027 off;;cfg vt028 dh;;var vt028 off;;cfg vt029 dh;;var vt029 off;;cfg vt030 dh;;var vt030 off;;cfg vt031 dh;;var vt031 off;;cfg vt032 dh;;var vt032 off;;cfg vt033 dh;;var vt033 off;;cfg vt034 dh;;var vt034 off;;cfg vt035 dh;;var vt035 off;;cfg vt036 dh;;var vt036 off;;cfg vt037 dh;;var vt037 off;;cfg vt038 dh;;var vt038 off;;cfg vt039 dh;;var vt039 off;;cfg vt040 dh;;var vt040 off;;cfg vt041 dh;;var vt041 off;;cfg vt042 dh;;var vt042 off;;cfg vt043 dh;;var vt043 off;;cfg vt044 dh;;var vt044 off;;cfg vt045 dh;;var vt045 off;;cfg vt046 dh;;var vt046 off;;cfg vt047 dh;;var vt047 off;;cfg vt048 dh;;var vt048 off;;cfg vt049 dh;;var vt049 off;;cfg vt050 dh;;var vt050 off;;cfg vt051 dh;;var vt051 off;;cfg vt052 dh;;var vt052 off;;cfg vt053 dh;;var vt053 off;;cfg vt054 dh;;var vt054 off;;cfg vt055 dh;;var vt055 off;;cfg vt056 dh;;var vt056 off;;cfg vt057 dh;;var vt057 off;;cfg vt058 dh;;var vt058 off;;cfg vt059 dh;;var vt059 off;;cfg vt060 dh;;var vt060 off;;cfg vt061 dh;;var vt061 off;;lnk g000F do000 d;;lnk g00CT do001 d;;lnk di000 do002 d;;lnk g00VT do003 d;;",
});

var cloudSessionStarted = true;
console.log(templates);
// End of EMBEDDED
		
		setTimeout(listTemplates, 1000);
	}else {
		listTemplates();
	}
}
function listTemplates(){
	clearMenu();
	if (typeof templates == "undefined") {
		addMenuItem("mess","message",MSG_NONET);
		addToolbarSaveCancelHelp(function() {}, loadMenu, "net");  			
	} else {
		for (var i=0;i<templates.length;i++){
			addMenuItem("temp_"+i, "menuitem", templates[i], null, 
				function(){loadTemplate(parseInt(this.id.split("_")[1]));});
		}	
		addToolbarSaveCancelHelp(null, loadMenu, "net");  
	}
}