
<div class="container">
  <div class="row">
  <h1 class="lead">Edit Record</h1>
    <div class="span6">
      <div id="main ">
      <?php if(isset($records)): foreach ($records as $record):?>
          <?php
              $attributes = array('class' => 'form SignupForm ', 'id' => 'contact-form');
							
							
							echo Form_open('dk/addRecord',$attributes);
						
	
							?>
          <fieldset>
            <legend>Property  Information </legend>
            <div class="control-group"> <?php echo"<div class=\"error\">".  form_error('location'). "</div>";?>
              <div class="controls">
                <label class="control-label" for="name">Property Location:</label>
                <?php
                        $location = array(
              'name'        => 'location',
              'id'          => 'name',
              'class'        => 'span6',
              'type'       => 'text',
			  'value'=> $record->location);
							
							
							echo form_input($location);
							
							?>
              </div>
            </div>
            <div class="control-group"> <?php echo"<div class=\"error\">".  form_error('type'). "</div>";?>
              <div class="controls">
                <label class="control-label" for="type">Property Type:</label>
                <?php
                        $type = array(
              'name'        => 'type',
              'id'          => 'email',
              'class'        => 'span6',
              'type'       => 'text',
			  'value'=> $record->type
            );
							
							
							echo form_input($type);
							
							?>
              </div>
            </div>
            <div class="control-group"> <?php echo"<div class=\"error\">".  form_error('tenure'). "</div>";?>
              <div class="controls">
                <label class="control-label" for="tenure">Property Tenure:</label>
                <?php
                        $tenure = array(
              'name'        => 'tenure',
              'id'          => 'tenure',

              'class'        => 'span6',
              'type'       => 'text',
			  'value'=> $record->tenure
			  
            );
							
							
							echo form_input($tenure);
							?>
              </div>
            </div>
            <div class="control-group"> <?php echo"<div class=\"error\">".  form_error('city'). "</div>";?>
              <div class="controls">
                <label class="control-label" for="city">Property City</label>
                <?php
                        $city = array(
              'name'        => 'city',
              'id'          => 'city',
              'class'        => 'span6',
              'type'       => 'text',
			  'value'=> $record->city
            );
							
							
							echo form_input($city);
							
							?>
              </div>
            </div>
          </fieldset>
          <fieldset>
            <div class="control-group"> <?php echo"<div class=\"error\">".  form_error('url'). "</div>";?>
              <div class="controls">
                <label class="control-label" for="aim">Main Site Property Url </label>
                <?php
                        $url = array(
              'name'        => 'url',
              'id'          => 'name',
              'class'        => 'span6',
              'type'       => 'text',
			  'value'=> $record->url);
							
							
							echo form_input($url);
							
							?>
              </div>
            </div>
            
           <div class="control-group"> <?php echo"<div class=\"error\">".  form_error('details'). "</div>";?>
              <div class="controls">
                <label class="control-label" for="message">Property Description</label>
                <?php
                        $message = array(
              'name'        => 'details',
              'id'          => 'email',
              'placeholder'   => 'details',
              'class'        => 'span6',
              'rows'       => '6',
			  'value'=> $record->details
            );
							
							
							echo form_textarea($message);
							
							?>
              </div>
            </div>
          </fieldset>
      
          <fieldset>
             <div class="control-group">
        <label for="message-long"></label>
        <div class="controls">
        </div>
      </div>
          </fieldset>
          <input id="SaveAccount" type="submit" value="submit Record " class="btn btn-large  pull-right" />
        
      </div>
    </div>
    <div class="span5">
    &nbsp;&nbsp;&nbsp;<br/><br/><br/>&nbsp;&nbsp;
    <div class="control-group"> <?php echo"<div class=\"error\">".  form_error('reference'). "</div>";?>
              <div class="controls">
                <label class="control-label" for="aim"> Property Reference Number </label>
                <?php
                        $reference = array(
              'name'        => 'reference',
              'id'          => 'name',
              'class'        => 'span6',
              'type'       => 'text',
			  'value'=> $record->reference);
							
							
							echo form_input($reference);
							
							?>
              </div>
            </div>  <div class="control-group"> <?php echo"<div class=\"error\">".  form_error('minbed'). "</div>";?>
              <div class="controls">
                <label class="control-label" for="aim">Property minimum  beds </label>
                <?php
                        $minbed = array(
              'name'        => 'minbed',
              'id'          => 'name',
              'class'        => 'span6',
              'type'       => 'text',
			  'value'=> $record->minbed);
							
							
							echo form_input($minbed);
							
							?>
              </div>
            </div>  <div class="control-group"> <?php echo"<div class=\"error\">".  form_error('maxbed'). "</div>";?>
              <div class="controls">
                <label class="control-label" for="aim">Propery Maximum beds</label>
                <?php
                        $maxbed = array(
              'name'        => 'maxbed',
              'id'          => 'name',
              'class'        => 'span6',
              'type'       => 'text',
			  'value'=> $record->maxbed);
							
							
							echo form_input($maxbed);
							
							?>
              </div>
            </div>
            <div class="control-group"> <?php echo"<div class=\"error\">".  form_error('minprice'). "</div>";?>
              <div class="controls">
                <label class="control-label" for="target">Minimum Price for Property </label>
                <?php
                        $minprice = array(
              'name'        => 'minprice',
              'id'          => 'tenure',
              'class'        => 'span6',
              'type'       => 'text',
			  'value'=> $record->minprice
			  
            );
							
							
							echo form_input($minprice);
							?>
              </div>
            </div>
            <div class="control-group"> <?php echo"<div class=\"error\">".  form_error('maxprice'). "</div>";?>
              <div class="controls">
                <label class="control-label" for="target">Maximu Price  For Property</label>
                <?php
                        $maxprice = array(
              'name'        => 'maxprice',
              'id'          => 'tenure',
              'class'        => 'span6',
              'type'       => 'text',
			  'value'=> $record->maxprice
			  
            );
							
							
							echo form_input($maxprice);
							?>
              </div>
            </div>

    </div>
        <div class="social">
     <?php echo"<div class=\"error\">".  form_error(). "</div>";?>
        </div>
      </div>
    </div>
    </form>
    
<?php endforeach;?>
<?php else:?>
<h2>no records found</h2>


<?php endif?>
  </div>
</div>
