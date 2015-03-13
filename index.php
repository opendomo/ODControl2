<?php
	$VERSION="2.0.0";

/* Site structure
  #hme -> Home
   adj -> Adjustments 
  #con -> Settings

*/

	$HTML_hme=file_get_contents("000.html");
	/*"<!DOCTYPE html>
<html><head><title></title>
<meta name=viewport content='width=device-width,initial-scale=1,maximum-scale=1'>
<meta name=apple-mobile-web-app-capable content=yes/>
<link rel=apple-touch-icon href='http://opendomo.com/odc2.png'/>
<link rel=stylesheet href=020.css />
<script type=text/javascript>
var L=localStorage,D=document,uid='000000000001',ver='odc-test';
</script>
</head>
<body onload=\"JS('http://c.opendomo.com/rc/hme_@VER@.js')\">
<body>
<div id='main'>
<div class='t'>
<img class='tr' src='200.svg'/>
<img class='t0' src='201.svg'/>
<img class='tp' src='202.svg'/>
<img class='te' src='203.svg'/>
<img class='tn' src='204.svg'/>
<img class='td' src='205.svg'/>
<img class='to' src='206.svg'/>
<img class='tm' src='207.svg'/>
<img class='to' src='206.svg'/>
</div>
<div id='h'></div><ul id='b'><li id='loading'></li></ul><a id='f'></a></div>
<script src='002.js'></script>
</body>
</html>

"; */


	$HTML_cnf=file_get_contents("001.html");
/*	"
<!DOCTYPE html>
<html><head><title>@XXX@</title>
<meta name=viewport content='width=device-width,initial-scale=1,maximum-scale=1'>
<meta name=apple-mobile-web-app-capable content=yes/>
<link rel=apple-touch-icon href='http://opendomo.com/odc2.png'/>
<link rel=stylesheet href=020.css />
<script type=text/javascript>
var L=localStorage,D=document,uid='000000000000',ver='odc-test';
</script>
</head>
<body onload=\"
for(var i=100;i<=158;i++)JS(i+'.js');
JS('160.js');
\">
<div id='main'>
<div class='t'>
<img class='tr' src='200.svg'/>
<img class='t0' src='201.svg'/>
<img class='tp' src='202.svg'/>
<img class='te' src='203.svg'/>
<img class='tn' src='204.svg'/>
<img class='td' src='205.svg'/>
<img class='to' src='206.svg'/>
<img class='tm' src='207.svg'/>
<img class='to' src='206.svg'/>
</div>
<div id='h'></div><ul id='b'><li id='loading_cf'></li></ul><a id='f'></a></div>
<script src='002.js'></script>
</body>
</html>
"; */
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

			case "cnf":
				die($HTML_cnf);
				break;


			case 'ver':
				echo "odctl versn $VERSION 12:28:11 Jun 16 2013\n";
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

			case "lst 24-47":
			case "lst+24-47":
				echo "
DV:vt000:OFF
DV:vt001:OFF
DV:vt002:OFF
DV:vt003:OFF
DV:vt004:OFF
DV:vt005:OFF
DV:vt006:OFF
DV:vt007:OFF
XX:vt008:
XX:vt009:
XX:vt010:
XX:vt011:
XX:vt012:
XX:vt013:
XX:vt014:
XX:vt015:
XX:vt016:
XX:vt017:
XX:vt018:
XX:vt019:
XX:vt020:
XX:vt021:
XX:vt022:
XX:vt023:
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

			case "lst 48-71":
			case "lst+48-71":
				echo "XX:vt024:
XX:vt025:
XX:vt026:
XX:vt027:
XX:vt028:
XX:vt029:
XX:vt030:
XX:vt031:
XX:vt032:
XX:vt033:
XX:vt034:
XX:vt035:
XX:vt036:
XX:vt037:
XX:vt038:
XX:vt039:
XX:vt040:
XX:vt041:
XX:vt042:
XX:vt043:
XX:vt044:
XX:vt045:
XX:vt046:
XX:vt047:
";
				break;
		
			case "lln":
				echo "di000:do000:p\n";
				echo "di001:do001:p\n";
				echo "di002:do002:p\n";
				echo "di003:do003:d\n";
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
