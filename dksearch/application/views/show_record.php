
<div class="container">
  <div class="row">
    <?php if(isset($records)): foreach($records as $row):?>
    <table>
      <tr>
        <td width="196">Property Location:</td>
        <td width="517"><?php foreach($row as $item)
	  
	  echo $item->location;
	  ?></td>
      </tr>
      <tr>
        <td>Property type:</td>
        <td> <?php foreach($row as $item)
	  
	  echo $item->type;
	  ?></td>
      </tr>
      <tr>
        <td>property tenure</td>
        <td> <?php foreach($row as $item)
	  
	  echo $item->tenure;
	  ?>></td>
      </tr>
      <tr>
        <td>Minimum beds:</td>
        <td><?php foreach($row as $item)
	  
	  echo $item->minbed;
	  ?></td>
      </tr>
      <tr>
        <td class="black"></td>
        <td class="black"></td>
      </tr>
      <tr>
        <td>Maxmun beds:</td>
        <td> <?php foreach($row as $item)
	  
	  echo $item->maxbed;
	  ?></td>
      </tr>
      <tr>
        <td>Minimum Price:</td>
        <td> <?php foreach($row as $item)
	  
	  echo $item->minprice;
	  ?></td>
      </tr>
      <tr>
        <td>Maximum Price:</td>
        <td> <?php foreach($row as $item)
	  
	  echo $item->maxprice;
	  ?></td>
      </tr>
      
      <tr>
      <td>Pictures Url</td>
        <td colspan="2"><?php foreach($row as $item)
	  
	  echo $item->url;
	  ?></td>
      </tr>
       <tr>
        <td class="black"></td>
        <td class="black"></td>
      </tr>
      <tr>
        <td>City</td>
        <td> <?php foreach($row as $item)
	  
	  echo $item->city;
	  ?></td>
      </tr>
      <tr>
        <td>Reference number:</td>
        <td> <?php foreach($row as $item)
	  
	  echo $item->reference;
	  ?></td>
      </tr>
      <tr>
            </table>
    <?php endforeach;?>
    <?php else:?>
    <h2>we have no records of your project submission</h2>
    <?php endif;?>
    
     <?php foreach($row as $item)
	  
	 $delete = $item->id;
	  ?>
    <div class="row navbar  navbar-static-top">
    <ul class="nav nav-collapse">
    <li><?php echo anchor("dk",'Home');?></li>
    <li><?php echo anchor("dk/delete/$delete",'delete record');?></li>
    <li><?php echo anchor("dk/update/$delete",'Update record');?></li>
    </ul>
    </div>
  </div>
</div>
