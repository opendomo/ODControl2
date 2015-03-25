# ODControl2
This is the development repository for ODControl2 project, and it contains 
all the files used in the web interface and embedded configuration tools.
Each file size limit is 1010Bytes, so it's crucial to optimize size and 
loading times.

## Range reorganization
To optimize page load, files are organized in ranges:

 1. Control interface: JS [050-065] CSS [020-029]
 2. Configuration tools: JS [100-160] CSS [020-029]
 3. All: SVG [090-098], Manifest [099]


## Javascript index

    002 - show hide G SA AC CE JS RB SEL
    003 - RL
    004 - AJ upd upc M ID CT SC V n ci TB
    005 - ns sadv HME CFG ADV
    006 - AM SV
    007 - loadODinfo
    008 - TB RL
    009 - G SA AC CE JS
    010 - adv
	
	
	050 - 
	051 - ID show hide G SA AC CE JS RB SEL
    052 - ns sadv HME CFG ADV
    053 - RL
    054 - AJ upd upc M ID CT SC V n ci TB
    055 - ns sadv HME CFG ADV
    056 - AM SV
    057 - loadODinfo
    058 - TB RL
    059 - G SA AC CE JS adv
    060 - cAV cDV cDI cAI 
    061 - cCV
    062 - cSV showSCH
    063 - idh idw
    064 - cWV
    065 - cSF
	099 - appcache
	100 $ (literals)
    101 - createTTG
    102 - changeTime
    103 - ID CE CT pad validate_field
    104 - setLDate setIntervalRefreshDate saveNTP saveDateTime
    105 - loadCSSfile loadJSfile getPortListByType
    106 - clearConfiguration ptoREST dteToStr
    107 - loadODControlData deleteLink 
    108 - HME2 addMenuItem
    109 - loadMenu loadConsole
    110 - cSF cIF 
    111 - loadPortsMenu
    112 - f createVP 
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
	130 - my_confirm hidealert
    131 - getPortId errorHandler showHidePanel
    133 - loadPortsInfo
	134 - vportExtractConfig
	135 - loadNetworkConfig_menu
	136 - loadNetworkConfig
	137 $ loadLinksMenu_menu
	138 - loadLinksMenu
	139 - extractConfiguration_switch
	140 - extractConfiguration
	141 $ createMDB_menu
	142 $ createMDB
	143 $ loadODCConfiguratorPassword
	144 $ loadUserPassword
	145 $ loadEncryptionPassword_menu loadSecurity
	146 $ loadEncryptionPassword
	147 $ displayPortDetails_menu_init
	148 - displayPortDetails_process_analog
	149 - displayPortDetails_process_virtuals_1
	150 - displayPortDetails_process_virtuals_2
	151 - displayPortDetails_apply_ranges_and_tolerances 
	152 - displayPortDetails
	153 - defpn
    154 - send_command
	155 $ grptypes_desc trgtypes_desc tags_desc analogtype_desc
	156 - .
	157 $ ZTG_HI TRG_HI MDB_HI SCH_HI GRP_HI TTG_HI DTG_HI RDV_HI RPT_HI RDV_WI
	158 $ VAR_HI PER_HI
	159 (empty)
	160 $ .

