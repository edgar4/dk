<?php
if(isset($_POST['email'])) {
	
	// CHANGE THE TWO LINES BELOW
	$email_to = "www.stanfold.com";
	
	$email_subject = "";
	
	
	function died($error) {
		// your error code can go here
		echo "We're sorry, but there's errors found with the form you submitted.<br /><br />";
		echo $error."<br /><br />";
		echo "Please go back and fix these errors.<br /><br />";
		die();
	}
	
	// validation expected data exists
	if(!isset($_POST['first_name']) ||
		!isset($_POST['last_name']) ||
		!isset($_POST['email']) ||
		!isset($_POST['telephone']) ||
		!isset($_POST['comments'])) {
		died('We are sorry, but there appears to be a problem with the form you submitted.');		
	}
	
	$first_name = $_POST['first_name']; // required
	$last_name = $_POST['last_name']; // required
	$email_from = $_POST['email']; // required
	$telephone = $_POST['telephone']; // not required
	$comments = $_POST['comments']; // required
	
	$error_message = "";
	$email_exp = '/^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/';
  if(!preg_match($email_exp,$email_from)) {
  	$error_message .= 'The Email Address you entered does not appear to be valid.<br />';
  }
	$string_exp = "/^[A-Za-z .'-]+$/";
  if(!preg_match($string_exp,$first_name)) {
  	$error_message .= 'The First Name you entered does not appear to be valid.<br />';
  }
  if(!preg_match($string_exp,$last_name)) {
  	$error_message .= 'The Last Name you entered does not appear to be valid.<br />';
  }
  if(strlen($comments) < 2) {
  	$error_message .= 'The Comments you entered do not appear to be valid.<br />';
  }
  if(strlen($error_message) > 0) {
  	died($error_message);
  }
	$email_message = "Form details below.\n\n";
	
	function clean_string($string) {
	  $bad = array("content-type","bcc:","to:","cc:","href");
	  return str_replace($bad,"",$string);
	}
	
	$email_message .= "First Name: ".clean_string($first_name)."\n";
	$email_message .= "Last Name: ".clean_string($last_name)."\n";
	$email_message .= "Email: ".clean_string($email_from)."\n";
	$email_message .= "Telephone: ".clean_string($telephone)."\n";
	$email_message .= "Comments: ".clean_string($comments)."\n";
	
	
// create email headers
$headers = 'From: '.$email_from."\r\n".
'Reply-To: '.$email_from."\r\n" .
'X-Mailer: PHP/' . phpversion();
@mail($email_to, $email_subject, $email_message, $headers);  
?>

<!-- place your own success html below -->
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>Contact us</title>
<link href="../css/style.css" rel="stylesheet" type="text/css" />
<link rel="icon" type="image/jpg" href="../images/favicon.png" />
</head>

<body>

<div id="wrapper">
    
    	<div id="page">
        
        	<div id="top">
            
            	<a id="logo" href="../index.html"></a>
                
                <div id="topRside">
                	
                    <div id="miniL"><a href="#" style="font-family:Arial; font-size:11px; color:#6c6e6f; text-decoration:none;">Member Login</a>  |  <a href="#" style="font-family:Arial; font-size:11px; color:#6c6e6f;text-decoration:none;">Sign In</a>  |  <a href="#" style="font-family:Arial; font-size:11px; color:#6c6e6f;text-decoration:none;">Create account</a></div>
                    
                    <div id="navigation">
                    
                    	<ul>
                        	<li><a href="../index.html">HOME</a></li>
                            <li><a href="../pages/about us.html">ABOUT US</a></li>
                            <li><a href="../pages/services.html">SERVICES</a></li>
                            <li><a href="../pages/projects.html">PROJECTS</a></li>
                            <li><a href="../pages/contact us.html">CONTACT US</a></li>
                        </ul>
                    
                    </div>
                    
                    <div id="search">
                    
                    	<form action="#" method="get">
                <input type="text" style="font-family:Arial; color:#9e9e9f; font-size:16px;" value= "search..." name="q" size="10" id="searchfield" title="searchfield" onfocus="clearText(this)" onblur="clearText(this)" />
                <input type="submit" name="Search" value="" id="searchbutton" title= "Search" />
            </form>
                    
                    </div>
                    
                </div>
            
            </div>
            
           <!-- page starts here!!-->
           
           <div id="aboutBody">
           
       		 <div id="headBg">
             	
                <div id="headTittle" class="headTittle">Contact Us</div>
                
             </div>
             
             <div id="formPut">
             
             	<div id="contHead">
                
                	<div id="conttopH" class="fontselect">Kindly enter your full details and send us your views. <span style="font-weight:bold; text-decoration:underline">NB </span>: Fill in the spaces with the <span style="color:#c61118">*</span> tag.  </div>
                    
                    <div id="feed" class="aboutTp"><span style="text-decoration:underline">Feedback Form</span></div>
                    
                
                </div>
                
                <div id="login">
                
                	                            	<form name="htmlform" method="post" action="../css/html_form_send.php">
<table width="590px">
</tr>
<tr>
 <td valign="top">
  <label for="first_name" class="formfont">First Name *</label>
 </td>
 <td valign="top">
  <input  type="text" name="first_name" title="field is mandatory" maxlength="50" size="60">
 </td>
</tr>
 
<tr>
 <td valign="top">
  <label for="last_name" class="formfont">Last Name *</label>
 </td>
 <td valign="top">
  <input  type="text" name="last_name" title="field is mandatory" maxlength="50" size="60">
 </td>
</tr>
<tr>
 <td valign="top">
  <label type="email" class="formfont">Email Address *</label>
 </td>
 <td valign="top">
  <input  type="text" name="email" title="field is mandatory" maxlength="80" size="60">
 </td>
 
</tr>
<tr>
 <td valign="top">
  <label for="telephone" class="formfont">Telephone Number</label>
 </td>
 <td valign="top">
  <input  type="text" name="telephone" maxlength="50" size="60">
 </td>
</tr>
<tr>
 <td valign="top">
  <label for="comments" class="formfont">Comments *</label>
 </td>
 <td valign="top">
  <textarea  name="comments" title="field is mandatory" cols="50" rows="12"></textarea>
 </td>
 
</tr>
<tr>
 <td colspan="2" style="text-align:center">
  <input type="submit" id="submit" value ="Submit"> 
  <input type="reset" id="reset" value="Reset">  
 </td>
</tr>
<!--<tr>
 <td colspan="2" style="text-align:center">
  <input type="reset" id="reset" value="Reset">  
 </td>
</tr>-->
</table>
</form>

                
                </div>
                
               <div id="messagesucces"><div id="messinfo" class="messinfo">* Message sent Succesfully </div></div>
                
                <div id="info4mBx">
                
                	
                    <div id="topper" class="aboutTp">OUR HEAD OFFICES</div>
                    
                    <div id="middiey">
                    
                    	<div id="middiey1">
                        	
                            <div id="middieyTop" class="aboutTp">MOMBASA  </div>
                            
                            <div id="middieyBody" class="middieyBody">Yusuf Ali Mansion Building<br />
3rd Floor, Suit 14D<br />
MOI AVENUE<br />
P.O.BOX 94610-80115<br />
TEL:+254 0538015316<br />
Mob:+254 720 588 357,<br />
	<span style="padding-left:24px;">737 543 648</span></div>
                            
                        </div>
                        
                        <div id="middieyBodyR">
                        
                        	<div id="middiey2">
                            	
                                <div id="middieyTop2" class="aboutTp">ELDORET </div>
                                
                                <div id="middieyBody2" class="middieyBody">Muya House,<br />
3rd Floor,<br /> 
RM, 30<br />
Kenyatta Street</div>

                        
                        
                        </div>
                        
                        		<div id="middiey3">
                            	
                                <div id="middieyTop3" class="aboutTp">   NAIROBI </div>
                                
                                <div id="middieyBody3" class="middieyBody">Chai House,
1st Floor, 
Koinange Street</div>
                                
                            </div>
                            
                            <div id="middieyBody4" class="middieyBody">E~mail: info@stanfoldinvestments.com<br />
	   <span style="padding-left:43px;">stanfold.investment@yahoo.com</span><br />
Website: www.stanfoldinvestments.com</div>
                    
                    
                    </div>
                
                </div>
                
                
             
             </div></div>
             
             
             
             <!--<div id="rightIma"></div>-->
             
             <div id="rightImacont"></div>
             
             <div id="servcontR">
            
            	<div id="servRh1" class="rightHeadt">Newsletter Sign up</div>
                
                <div id="servRb1" class="fontselect">Aliquam dignissim porttitor tortor non fermentum. Curabitur in magna lectus. Duis sed eros diam. Lorem ipsum dolor sit amet, consectetur.</div>
                
                <div id="servRb2" class="fontselect"><span style="font-style:italic">E-mail address:</span></div>
                
<!--                <div id="servRb3">
                	
                    <form action="insert success page location here" method="POST" >
<input type="hidden" name="c" value="####">
<input type="hidden" name="lid" value="#"> 
<input type="text" name="email__sValue" value="" ></form>
                    
                </div>
                
                <div id="servRb4"><ul>
                	<li id="prusus2"><a href="#">SIGN IN</a></li>
                </ul></div>-->
                
                <div id="servRbopt">
                
                	<form action="insert success page location here" method="POST" >
<input type="hidden" name="c" value="####">
<input type="hidden" name="lid" value="#"> 
<input type="text" id="servRbox" name="email__sValue" value="" ><br/>
<input type="Submit" id="prusus2" value="Sign in" >
</form>
                
                </div>
                
                <div id="servRh2" class="rightHeadt">Inspirational Videos</div>
                
                <div id="servRb5" class="aboutTp">Stanfold Videos</div>
                
                <div id="servRb6" class="fontselect">Real Estate Trust Market Update</div>
<!--           <div id="servncon1">
               		
               </div>
                
                <div id="servncon2"></div>-->
                
                <div id="videosstyle">
                
               		<!-- <a id="abtVid1" href="#" target="_parent"></a>
                
               		 <a id="abtVid2" href="#" target="_parent"></a>-->
                     
                     <ul>
                     
                     	<li><a href="#" id="abtVid1" target="_parent"></a><a href="#" id="abtVid2" target="_parent"></a></li>
                        
                        <!--<li><a href="#" id="abtVid2" target="_parent"></a></li>-->
                     
                     </ul>
                
                </div>
                
                <div id="abtfinsec" class="fontselect" style="padding-top:5px">Stay connected for more inspirational videos</div> 
            </div>
           
           </div>
           
           <!--- page ends here, footer starts !!-->
           
           <div id="footer">
           
           	  <div id="footerLeft">
           
           		<div id="footerNav">
                
                	<ul>
                    	<li id="nav"> <a href="../index.html">HOME  |</a></li>
                        <li id="nav"> <a href="../pages/about us.html">ABOUT US  |</a></li>
                        <li id="nav"> <a href="../pages/services.html">SERVICES  |</a></li>
                        <li id="nav"> <a href="../pages/projects.html">PROJECTS  |</a></li>
                        <li id="nav"> <a href="../pages/contact us.html">CONTACT US  |</a></li>
                    </ul>
                
                </div>
                
                <div id="footerinfo" class="footerinfo"><span style="font-size:18px;">"</span>Whoever we work with and whatever nature of the project,<br />
   <span style="padding-left:7px">Stanfold Investments Limited will continue to provide</span><br /> 
   <span style="padding-left:7px">excellence and quality. </span> <span style="font-size:18px;">"</span></div>
                
               </div>
               
               <div id="footerRight">
               
               		<div id="fotHead" class="fotHead">Connect with us on;</div>
                    
                    <div id="socials">
                    
                    	<a id="face" href="https://www.facebook.com/" target="_new"></a>
                        <a id="inn" href="https://www.linkedin.com/uas/login" target="_new"></a>
                        <a id="pinre" href="https://pinterest.com/" target="_new"></a>
                        <a id="tweet" href="https://twitter.com/login" target="_new"></a>
                    
                    </div>
                    
                    <div id="copyright" class="footerinfo">Copyright © 2013 Stanfold Investment Limited</div>
               
               </div>
           
           </div>
        
        
        </div>
    
    </div>

</body>
</html>


<?php
}
die();
?>