<body well>

<div class="navbar navbar-inverse navbar-static-top mbottom20">
  <div class="navbar-inner">
    <div class="container"> <a class="btn btn-navbar" data-toggle="collapse" data-target=".nav-collapse" href="#"> <span class="icon-bar"></span> <span class="icon-bar"></span> <span class="icon-bar"></span> </a> <a class="brand" href="<?php echo base_url()?>">DK Real Estate Limited</a>
      <div class="nav-collapse pull-right">
        <ul class="nav">
          <li> <a href="<?php echo base_url()?>dk/home" >Dashboard</a>

          </li>
          <li > <a href="<?php echo base_url()?>dk/newRecord">Add New Record</a>
           
          <li class="dropdown" > <a href="#" class="dropdown-toggle" data-toggle="dropdown">View Record</a>
          <ul class="dropdown-menu">
               <li > <a href="<?php echo base_url()?>dk/lastRecord">View Last Record</a>
                    <li > <a href="#myModal" data-toggle="modal" >Find Record</a>
                
          </ul>
          
          </li>
        <li class="dropdown" > <a href="#" class="dropdown-toggle" data-toggle="dropdown">Edit Record</a>
          <ul class="dropdown-menu">
               <li > <a href="<?php echo base_url()?>dk/edit">edit Record</a>
                
                
          </ul>
          
          </li>
          <li > <a href="<?php echo base_url()?>dk/deleteRecord">Delete records</a> </li>
                   <li class="pull-right" > <a href="<?php echo base_url()?>dk/logout" >logOut</a> </li>
        </ul>
      </div>
    </div>
  </div>
</div>
        
<div id="myModal" class="modal hide fade">
 <!-- set up the modal to start hidden and fade in and out -->
<div class="modal-header">Enter below details</div>
    <!-- dialog contents -->
    <div class="modal-body ">
    <?php echo Form_open("dk/find")?>
     <label>Enter reference number</label>
  <input type="text" name="findref"/><br/>
  <input type="submit" name="find" value="Find record" />
  
  
  </form>
  
    </div>
    <!-- dialog buttons -->
    <div class="modal-footer"><a href="#" class="btn primary" data-dismiss="modal">X</a></div>
</div>
<!--end modal-->