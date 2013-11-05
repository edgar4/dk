<!DOCTYPE html>
<!--[if IE 8]>    <html class="no-js lt-ie9" lang="en"> <![endif]-->
<!--[if gt IE 8]><!--> <html class="no-js" lang="en"> <!--<![endif]-->
<head>
  <meta charset="utf-8" />

  <!-- Set the viewport width to device width for mobile -->
  <meta name="viewport" content="width=device-width" />

  <title>Responsive Web Mobile Layout Templates</title>

  <!-- Included Bootstrap CSS Files -->
	<link rel="stylesheet" href="<?php echo base_url()."js/bootstrap/css/bootstrap.min.css";?>" />
	<link rel="stylesheet" href="<?php echo base_url()."js/bootstrap/css/bootstrap-responsive.min.css";?>" />
	
	<!-- Includes FontAwesome -->
	<link rel="stylesheet" href="<?php echo base_url()."css/fontawesome/css/font-awesome.css";?>" />
	
	<!-- Included Bootstrap Customization CSS Files -->	
	<link rel="stylesheet" href="<?php echo base_url()."css/bootstrap-extension.css";?>" />

	<link rel="stylesheet" href="<?php echo base_url()."css/stylesheet.css";?>" />
	<link rel="stylesheet" href="<?php echo base_url()."css/login.css";?>" />

</head>
<body>
       <div class="container">
        <div id="login-wraper">
       
         <?php
		  $attr = array(
		  'class' => 'form login-form'
		  );
		  echo Form_open('login/enter',$attr)?>
                <legend>Administrator</legend>
            
                <div class="body">
                    <label>Username</label>
                    <input type="text" name="username">
                    
                    <label>Password</label>
                    <input type="password" name="password">
                </div>
            
                <div class="footer">
                    <label class="checkbox inline">
                        <input type="checkbox" id="inlineCheckbox1" value="option1"> Remember me
                    </label>
                                
                    <button type="submit" class="btn btn-success">Login</button>
                </div>
            
            </form>
        </div>

    </div>

   <footer class="white navbar-fixed-bottom">
  
   </footer>
	<script src="<?php echo base_url()?>js/jquery-1.8.3.min.js" type="text/javascript"></script>
	<script src="<?php echo base_url()?>js/bootstrap/js/bootstrap.min.js"></script>
	<script src="<?php echo base_url()?>js/holder.js"></script>
	<script src="<?php echo base_url()?>js/backstretch.min.js"></script>

</body>
</html>