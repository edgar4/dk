<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class Search extends CI_Controller {
	
	public function index(){
		
		$template = array();
		//$template['content'] = 'search_view';
		$this->load->view('search_view',$template);
	}
	
function find(){
	$this->load->model('dk_model');
	$template = array();
	
	$city= $this->input->post('city');
	$minbed= $this->input->post('minbed');
	$maxbed= $this->input->post('maxbed');
	$minprice= $this->input->post('minprice');
	$maxprice= $this->input->post('maxprice');
	
	
	
	if($query=$this->dk_model->find_selected($city,$minbed,$maxbed,$minprice,$maxprice)){
		
		$template['records'] = $query;
	}
	   $template['content']= "result_view";
	        $this->load->view('template_user',$template);
}
}