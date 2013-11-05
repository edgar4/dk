<div class="container">
  <div class="row">
<?php if(isset($records)): foreach ($records as $record):?>
<table width="100%" border="0" cellspacing="0" cellpadding="0">
  <tr>
    <td>View images</td>
    <td>City</td>
    <td>where</td>
    <td>Minimum bed</td>
    <td>maximun bed</td>
    <td>minimum price</td>
    <td>maximun price</td>
    <td>Property Details</td>
    <td>Tenure</td>
     <td>Propery reference</td>
    
    
  </tr>
  <tr>
    <td><a href="<?php echo $record->url;?>">See property images</a></td>
    <td><?php echo $record->city;?></td>
    <td><?php echo $record->location;?></td>
    <td><?php echo $record->minbed;?></td>
    <td><?php echo $record->maxbed;?></td>
    <td><?php echo $record->minprice;?></td>
    <td><?php echo $record->maxprice;?></td>
    <td><?php echo $record->details;?></td>
    <td><?php echo $record->tenure;?></td>
    <td><?php echo $record->reference;?></td>
    
   

  </tr>
</table>

<?php endforeach;?>
<?php else:?>
<h2>no records found</h2>


<?php endif?>
  </div>
</div>