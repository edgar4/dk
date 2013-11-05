<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');
class dk_model extends CI_Model{
public function validate(){
	 $this->db->where('name',$this->input->post('name'));
	 $this->db->where('lastname',$this->input->post('last'));
	 $this->db->where('email',$this->input->post('email'));
	 $query = $this->db->get('projectNew');
	  if($query->num_rows()==1){ 
		  return true;
	  }	
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
		$query = $this->db->get_where('dkdetails',$id);
		if($query->num_rows() > 0){
			foreach($query->result() as $row){
	            $data[] = $row;
				return $data;
			}
		}
 }
 
 function getLast(){

     $query ="select * from dkdetails order by id DESC limit 1";

     $res = $this->db->query($query);

     if($res->num_rows() > 0) {
            foreach($res->result() as $last){
				$data[]= $last;
				return $data; 
			}
    }
  }
public function add_record($data){
		$this->db->insert('dkdetails',$data);
		return;
 }
public function update_selected(){
		$this->db->where('id',$this->uri->segment(3));
		$query =$this->db->get('dkdetails');
		return $query->result();
 }
public function update_record($data){
		$this->db->where('id',$this->uri->segment(3));
		$this->db->update('dkdetails',$data);
 }
public function delete_row(){
	$this->db->where('id',$this->uri->segment(3));
	$this->db->delete('dkdetails');

	}
	public function allRecord(){
		
		$query =$this->db->get('dkdetails');
		return $query->result();
	}
	
	public function find_selected($city,$minbed,$maxbed,$minprice,$maxprice){
		
		$find =array(
		'city'=>$city,
		'minbed'=>$minbed,
		'maxbed'=>$maxbed,
		'minprice'=>$minprice,
		'maxprice'=>$maxprice,
		
		);
		$this->db->where($find);
		$query =$this->db->get('dkdetails');
		return $query->result();
	}
	
		public function search_selected($ref){
		
		/*$find =array(
		'sendername'=>$sname,
		'recievername'=>$rname,
		'reference'=>$ref
		
		);*/
		$this->db->where('reference',$ref);
		$query =$this->db->get('dkdetails');
		return $query->result();
	}
}


?>