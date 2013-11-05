<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');
class login_model extends CI_Model{
public function validate(){
	 $this->db->where('username',$this->input->post('username'));
	 $this->db->where('password',md5($this->input->post('password')));
	 $query = $this->db->get('login');
	  if($query->num_rows()==1){ 
		  return true;
	  }	
 }  public function user_confirm($pass){
	 $this->db->where('password',md5($pass));
	 $query = $this->db->get('user');
	  return $query->result();	
	 
 }
 
 
public function get_records($name,$lastname,$email){
		$query = $this->db->get_where('projectnew', array('name' => $name, 'lastName' =>$lastname, 'email'=> $email        ) );
		if($query->num_rows() > 0){
			foreach($query->result() as $row){
	            $data[] = $row;
				return $data;
			}
		}
 }
 public function show_records(){
	   $id = array(
	  	    'id'=>$this->db->insert_id());
		$query = $this->db->get_where('recordinfo',$id);
		if($query->num_rows() > 0){
			foreach($query->result() as $row){
	            $data[] = $row;
				return $data;
			}
		}
 }
 
 function getLast(){

     $query ="select * from recordinfo order by id DESC limit 1";

     $res = $this->db->query($query);

     if($res->num_rows() > 0) {
            foreach($res->result() as $last){
				$data[]= $last;
				return $data; 
			}
    }
  }
public function add_record($data){
		$this->db->insert('recordinfo',$data);
		return;
 }
public function update_record($data){
		$this->db->where('id',$this->input->get('pesapal_merchant_reference'));
		$this->db->update('projectNew',$data);
 }
public function delete_row(){
	$this->db->where('id',$this->uri->segment(3));
	$this->db->delete($data);
	}
}
?>