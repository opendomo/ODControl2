# ODControl2
This is the development repository for ODControl2 project, and it contains 
all the files used in the web interface and embedded configuration tools.
Each file size limit is 1010 Bytes, so it's crucial to optimize size and 
loading times.

## Range reorganization
To optimize page load, files are organized in ranges:

 1. Control interface: JS [050-060] CSS [020-031]
 2. Configuration tools: JS [100-160] CSS [020-031]
 3. All: SVG [090-098], Manifest [099]
 4. Templates: [080-089]
 
 
## CSS index
	020 - 

 
## Javascript index

	050 - ID show hide G SA AC CE JS RB SEL
	051 $ (literals)
	052 - TB RL ns HME CFG ADV
	053 - AJ upd upc M ID CT SC V n ci  (empty)
	054 - AM SV
	055 - cAV cDV cDI cAI
	056 - cCV
	057 - cSV showSCH
	058 - idh idw
	059 - cWV
	060 - cSF
	061 - (empty)

	080 - Templates
	081 - 
	082 - 
	083 - 
	084 - 

	099 - appcache
	100 $ (literals)
	101 - createTTG
	102 - changeTime
	103 - ID CE CT pad validate_field (global variables)
	104 - setLDate setIntervalRefreshDate saveNTP saveDateTime
	105 - getPortListByType
	106 - clearConfiguration ptoREST dteToStr
	107 - loadODControlData deleteLink 
	108 - HME2 addMenuItem
	109 - loadMenu loadConsole
	110 - cSF cIF 
	111 - loadPortsMenu f
	112 - createVP 
	113 - createRDV
	114 - createRPT
	115 - createGRP
	116 - createDTG
	117 - getPortTypeDesc isvisible isinconfig isenabled isdigital isanalog isvirtual isType
	118 - createZTG
	119 - createTRG
	120 $ (literals)
	121 - createSCH changeODControlName setODControlName
	122 - loadTemplates
	123 - addToolbarSaveCancelHelp
	124 - cCF
	125 - loadTemplateNextCommand
	126 - loadTemplate
	127 - showfrm clearMenu createProgressField
	128 - exportConfiguration
	129 - loadLinksInfo initmsg
	130 $ (literals)
	131 - my_confirm my_alert hidealert errorHandler getPortId
	133 - loadPortsInfo
	134 - vportExtractConfig
	135 - loadNetworkConfig_menu
	136 - loadNetworkConfig
	137 - loadLinksMenu_menu
	138 - loadLinksMenu
	139 - extractConfiguration_switch
	140 - (empty)
	141 - extractConfiguration
	142 - createMDB_menu
	143 - createMDB
	144 - setCPass setUPass
	145 - loadSecurity dpd_init
	146 - setEKey
	147 - dpd_analog
	148 - dpd_virtuals
	149 - (empty)
	150 - (empty)
	151 - dpd_apply
	152 - displayPortDetails
	153 - defpn
	154 - send_command
	155 - (global variables)
	156 $ (literals) grptypes_desc trgtypes_desc tags_desc analogtype_desc
	157 $ ZTG_HI TRG_HI MDB_HI SCH_HI GRP_HI TTG_HI DTG_HI RDV_HI RPT_HI RDV_WI
	158 $ VAR_HI PER_HI
	159 $ (literals)
	160 - (main menu)

