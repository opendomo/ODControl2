<?php
	$VERSION="2.0.0";
	$UID="1234567890AB";

/* Site structure
  #hme -> Home
   adj -> Adjustments 
  #con -> Settings

*/

	$HTML_hme=file_get_contents("000.html");
	$HTML_cnf=file_get_contents("001.html");

	$p = intval($_REQUEST['p']);

	if (isset($_REQUEST['cmd'])) {
		$cmd = trim($_REQUEST['cmd']);
		switch($cmd){
			case '':
				$cmd="hme"; 
			case 'hme':
			case 'adv':
			case 'cnf':
				header('Content-type: text/html; charset=UTF-8');
				break;
			default:
				header('Content-type: text/plain; charset=UTF-8');
		}
		switch($cmd) {
			case "hme":
				die($HTML_hme);
				break;

			case "adv":
				die($HTML_cnf);
				break;


			case 'ver':
				echo "odctl versn $VERSION $UID 12:28:11 Jun 16 2013\n";
				break;

			case "lsc":
			case "lsc hme":
			case "lsc 00-23":
			case "lsc+00-23":
				echo "do000:DOM_:OFF
do001:DOM_:OFF
do002:DOM_:OFF
do003:DOM_:OFF
do004:DOM_:OFF
do005:DOM_:OFF
do006:DOM_:OFF
do007:DOM_:OFF
di000:DIM_:OFF
di001:DIM_:OFF
di002:DIM_:ON
di003:DIM_:ON
di004:DIM_:ON
di005:DIM_:OFF
di006:DIM_:OFF
di007:DIM_:OFF
ao000:AOM_:+0000.0000:+00000|00020:a5:00150
ao001:AOM_:+0000.0000:+00000|00020:a5:00255
ai000:AIM_:+0000.0000:+00000|00020:a5:00255
ai001:AIM_:+0000.0000:+00000|00020:a5:00255
vt000:DVC_:OFF:VAR:OFF
vt001:DVC_:OFF:VAR:OFF
vt002:DVC_:OFF:VAR:OFF
vt003:DVC_:OFF:VAR:OFF
";				break;			
			
			case "lsc cfg":
			case "lsc 24-47":
			case "lsc+24-47":
				echo "vt004:DVC_:OFF:VAR:OFF
vt005:DVC_:OFF:VAR:OFF
vt006:DVC_:OFF:VAR:OFF
vt007:DVC_:OFF:VAR:OFF
vt008:DVC_:OFF:VAR:OFF
vt009:XVH_:
vt010:XVM_:
vt011:XVH_:
vt012:XVH_:
vt013:XVH_:
vt014:XVH_:
vt015:XVH_:
vt016:XVH_:
vt017:XVH_:
vt018:XVH_:
vt019:XVH_:
vt020:XVH_:
vt021:XVH_:
vt022:XVH_:
vt023:XVH_:
vt024:XVH_:
vt025:XVH_:
vt026:XVH_:
vt027:XVH_:
";
				break;

			case "lsc 48-71":
			case "lsc+48-71":
				echo "vt028:XVH_:
vt029:XVH_:
vt030:XVH_:
vt031:XVH_:
vt032:XVH_:
vt033:XVH_:
vt034:XVH_:
vt035:XVH_:
vt036:XVH_:
vt037:XVH_:
vt038:XVH_:
vt039:XVH_:
vt040:XVH_:
vt041:XVH_:
vt042:XVH_:
vt043:XVH_:
vt044:XVH_:
vt045:XVH_:
vt046:XVH_:
vt047:XVH_:
vt048:XVH_:
vt049:XVH_:
vt050:XVH_:
vt051:XVH_:
";
				break;
			case "lsc 72-96":
			case "lsc+72-96":
				echo "vt052:XVH_:
vt053:XVH_:
vt054:XVH_:
vt055:XVH_:
vt056:XVH_:
vt057:XVH_:
vt058:XVH_:
vt059:XVH_:
vt060:XVH_:
vt061:XVH_:
\$ON__:DVH_:ON:PER:ON
\$OFF_:DVH_:OFF:PER:OFF
";
				break;		
		
			case "lln":
				echo "di000:do000:p\n";
				echo "di001:do001:p\n";
				echo "di002:do002:p\n";
				echo "di003:do003:d\n";
				break;
				
			case "net show":
				echo "mac:00:04:a3:6c:5f:37 ip:192.168.1.60 netmask:255.255.255.0 gateway:192.168.1.1 ntp:89.248.106.98 ev:255.255.255.255 webuiport:80 webcfport:80 protoport:1729 webuiaccess:any webcfaccess:any protoaccess:any";
				break;
				
			case "dte show":
				echo "years:02012 months:00005 days:00014 hours:00010 minutes:00000 seconds:00008, day:lun\n";
				break;
				  
			case "snm":
			case "set":
			default:
				die ("E301:$cmd");
		}
		echo "DONE";
		exit;
	}


	if ($p == 404) {
		header('Content-type: text/html; charset=UTF-8');
		echo "<html><head><title>404 Not Found</title></head><body>
		<h1>404 Not Found</h1></body>
		</html>\n\n";
	}

	if (!isset($_REQUEST['origin']) || intval($_REQUEST['origin'])==0) { 
		header('Content-type: text/html; charset=UTF-8');
		?>
		<html><head>
		<title>0</title>
		<meta name='viewport' content='width=device-width, initial-scale=1, maximum-scale=1'>
		<meta http-equiv='Content-Type' content='text/html; charset=utf-8' />
		<script src='http://cloud.opendomo.com/odctp/global<?php echo $VERSION; ?>.js'></script>
		</head>
		<body id='log'></body></html>
	<?php 
		exit;
	}
?>