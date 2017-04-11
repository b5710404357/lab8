
<!DOCTYPE html>

<html>
<head>

<meta charset="utf-8">
<title>Untitled Document</title>
    <link href="https://fonts.googleapis.com/css?family=Nunito" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Itim" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Pattaya" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Athiti" rel="stylesheet">
    <link rel="stylesheet" media="screen" href="5710404357-ds.css">
        <script src="jquery-3.1.1.min.js"></script>
    <script src="my_jquery_functions.js"></script>
    
    

</head>
<body>
<?php
$t="";
$picture="";
if(isset($_POST['submit']))
{
    
	$pv = $_POST['province']; 
    $png = "Province/sign/$pv.png";
	$text = "Province/motto/$pv.txt";
	
    $tis620 = iconv("utf-8", "tis-620", $text);
	$handle = fopen($tis620, "r") or die("Unable to open file!");
	$context = fread($handle,filesize($tis620));
	$t=$context;
    
	fclose($handle);
    
    $picture = $png;
	
}
?>
<div class="div1" id="div1" method="POST">
<form class="myform" id="myform">
    First name:<br>
    <input type="text" id="firstname" name="firstname"><br>
    Last name:<br>
    <input type="text" id="lastname" name="lastname"><br>
    Birthday:<br>
     <input id = "mydate"type = "date"></input><br>
    Gender:<br>
        <select id="gender" name="gender">
    <option value="Male">Male</option>
    <option value="Female">Female</option>
                           </select>
    <br>
    Province:<br>
    <select id="province" name="province">
    <option value=""></option>
                           </select>
    
    <button id="submit" name="submit" onclick="submit()">Submit</button>
</form>
        
    <button id="cancel" name="cancel" onclick="cancel()">Cancel</button>
 </div>  
 
  <div class="div2" id="div2"><?php echo $t;?>
      
      <h1 class="np" id="np"></h1>
      <p class="pic" id="pic"></p>
      <img src="<?php echo $picture; ?>">
      <p class="demo" id="demo"></p>
 </div>  
      
<!--
<div id="demo">
  <h2>Let AJAX change this text</h2>
    
  <button type="button" onclick="test()">Change Content</button>
</div>
-->

</body>
</html>
