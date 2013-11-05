<div class="row">&nbsp;</div>

<footer id="footer" class="vspace20 navbar-inner">
  <div class="container">
    <div class="row">
      <div class="span6">
        <p>&copy; Copyright 2013y.&nbsp;<a href="#">Privacy</a>&nbsp;&amp;&nbsp;<a href="#">Terms and Conditions</a></p>
      </div>
    </div>
  </div>
</footer>
<a class="scrolltotop" href="#"><span>up</span></a> 
<script src="<?php echo base_url();?>js/jquery-1.8.3.min.js"  type="text/javascript"></script> 
<script src="<?php echo base_url(). "js/bootstrap/js/bootstrap.min.js";?>"></script> 
<script src="<?php echo base_url(). "js/holder.js";?>"></script> 
<script src="<?php echo base_url(). "js/script.js";?>"></script>

        <script>
		    
    $("#myModal").modal({                    // wire up the actual modal functionality and show the dialog
      "backdrop"  : "static",
      "keyboard"  : true,
      "show"      : false                     // ensure the modal is shown immediately
    });
	
	
   $("#myModal").on("show", function() {    // wire up the OK button to dismiss the modal when shown
        $("#myModal a.btn").on("click", function(e) {
            console.log("button pressed");   // just as an example...
            $("#myModal").modal('hide');     // dismiss the dialog
        });
    });
  /*
    $("#myModal").on("hide", function() {    // remove the event listeners when the dialog is dismissed
        $("#myModal a.btn").off("click");
    });
    
    $("#myModal").on("hidden", function() {  // remove the actual elements from the DOM when fully hidden
        $("#myModal").remove();
    });*/
    $("#update").modal({                    // wire up the actual modal functionality and show the dialog
      "backdrop"  : "static",
      "keyboard"  : true,
      "show"      : false                     // ensure the modal is shown immediately
    });
	
	
   $("#update").on("show", function() {    // wire up the OK button to dismiss the modal when shown
        $("#update a.btn").on("click", function(e) {
            console.log("button pressed");   // just as an example...
            $("#update").modal('hide');     // dismiss the dialog
        });
    });
</script>

    <script type="text/javascript">
        $(document).ready(function(){
            $(".SignupForm").formToWizard({ submitButton: 'SaveAccount' })
        });
    </script>  
</body>
</html>