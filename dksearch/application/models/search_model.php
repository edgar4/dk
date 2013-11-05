<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');
class Search_model extends CI_Model{
	
    

	public function find_selected($sname,$rname,$ref){
		
		$find =array(
		'sendername'=> $sname,
	'recievername'=> $rname,
	'reference'=> $ref
		
		);
		$this->db->where($find);
		$query =$this->db->get('recordinfo');
		return $query->result();
	}
 }
 

