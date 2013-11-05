<script>
function myFunction()
{
alert("Sorry  Feature not available ");
}
function notAllowed()
{
alert("restricted feature ");
}
</script>
<div class="container">
  <div class="row">
<div class="container_12"> 
          <!-- Dashboard icons -->
          <div class="grid_7"> <a href="<?php echo base_url();?>afri/newRecord" class="dashboard-module">
           <img src="<?php echo base_url();?>images/Crystal_Clear_write.gif"    /> 
           <span>New Record</span> </a>
            <a href="<?php echo base_url();?>afri/edit" class="dashboard-module"> <img src="<?php echo base_url();?>images/Crystal_Clear_file.gif"/> <span>Edit record</span> </a> 
            <a href="<?php echo base_url();?>afri/allRecord" class="dashboard-module"> <img src="<?php echo base_url();?>images/Crystal_Clear_files.gif"/> <span>show record</span> </a> 
             <a  href="#myModal" class="dashboard-module" data-toggle="modal"> <img src="<?php echo base_url();?>images/search-icon.gif"/> <span>Find record</span> </a> 
            <a href="" class="dashboard-module" onclick="myFunction()"> <img src="<?php echo base_url();?>images/Crystal_Clear_user.gif" /> <span>My profile</span> </a> <a href="<?php echo base_url();?>afri/deleteRecord" class="dashboard-module"> <img src="<?php echo base_url();?>images/Crystal_Clear_stats.gif"   /> <span>Delete</span> </a>
         <a href="" class="dashboard-module" onclick="noAllowed()"> <img src="<?php echo base_url();?>images/Crystal_Clear_settings.gif" /> <span>Settings</span> </a>
    <div style="clear: both"></div>
  </div>
          <!-- End .grid_7 --> 
          
          <!-- Account overview -->
          <div class="grid_5">
    <div class="module">
              <h2><span>Account overview</span></h2>
              <div class="module-body">
       <?php echo $calender;?>
      </div>
            </div>
    <div style="clear:both;"></div>
  </div>
        </div>
<!-- End .container_12 -->

  </div>
</div>
