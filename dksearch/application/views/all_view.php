<div class="container">
  <div class="row">

<?php if(isset($records)): foreach ($records as $record):?>
<table width="100%" border="0" cellspacing="0" cellpadding="0">
  <tr>
    <td>Sender name</td>
    <td>Sender email</td>
    <td>Sender phone</td>
    <td>Sender city</td>
    <td>reciver name</td>
    <td>reciver email</td>
    <td>reciver phone</td>
    <td>reciver city</td>
    <td>consigment</td>
    <td>reference</td>
    <td>date</td>
    <td>location</td>
    <td>origin</td>
    <td>destination</td>
    <td>status</td>
  </tr>
  <tr>
    <td><?php echo $record->sendername;?></td>
    <td><?php echo $record->senderemail;?></td>
    <td><?php echo $record->senderphone;?></td>
    <td><?php echo $record->sendercity;?></td>
    <td><?php echo $record->recievername;?></td>
    <td><?php echo $record->recieveremail;?></td>
    <td><?php echo $record->recieiverphone;?></td>
    <td><?php echo $record->recievercity;?></td>
    <td><?php echo $record->consigment;?></td>
    <td><?php echo $record->reference;?></td>
    <td><?php echo $record->date;?></td>
    <td><?php echo $record->location;?></td>
    <td><?php echo $record->origin;?></td>
    <td><?php echo $record->destination;?></td>
    <td><?php echo $record->status;?></td>
  </tr>
</table>

<?php endforeach;?>
<?php else:?>
<h2>no records found</h2>


<?php endif?>
  </div>
</div>