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
				echo "DONE";
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
di000:DIM_:ON
di001:DIM_:ON
di002:DIM_:ON
di003:DIM_:OFF
di004:DIM_:OFF
di005:DIM_:OFF
di006:DIM_:OFF
di007:DIM_:OFF
ai000:AXH_:
ai001:AXH_:
ai002:AXH_:
ai003:AXH_:
ai004:AXH_:
ai005:AXH_:
ai006:AXH_:
ai007:AXH_:
";				break;			
			
			case "lsc cfg":
			case "lsc 24-47":
			case "lsc+24-47":
				echo "
vt000:DVM_:DTG:LUN000003|do000=00001:OFF
vt001:DVC_:OFF
vt002:DVC_:OFF
vt003:DVC_:OFF
vt004:DVC_:OFF
vt005:DVC_:OFF
vt006:DVC_:OFF
vt007:DVC_:OFF
vt008:VXH_:
vt009:VXH_:
vt010:VXH_:
vt011:VXH_:
vt012:VXH_:
vt013:VXH_:
vt014:VXH_:
vt015:VXH_:
vt016:VXH_:
vt017:VXH_:
vt018:VXH_:
vt019:VXH_:
vt020:VXH_:
vt021:VXH_:
vt022:VXH_:
vt023:VXH_:
";
				break;

			case "lsc 48-71":
			case "lsc+48-71":
				echo "
vt024:VXH_:
vt025:VXH_:
vt026:VXH_:
vt027:VXH_:
vt028:VXH_:
vt029:VXH_:
vt030:VXH_:
vt031:VXH_:
vt032:VXH_:
vt033:VXH_:
vt034:VXH_:
vt035:VXH_:
vt036:VXH_:
vt037:VXH_:
vt038:VXH_:
vt039:VXH_:
vt040:VXH_:
vt041:VXH_:
vt042:VXH_:
vt043:VXH_:
vt044:VXH_:
vt045:VXH_:
vt046:VXH_:
vt047:VXH_:
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
				
			case "snm":
			case "set":
				echo "DONE";
			default:
				die ("E301:$cmd");
		}
		echo "DONE ($cmd)";
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
