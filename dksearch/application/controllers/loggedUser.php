<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class LoggedUser extends CI_Controller{
	
		public function __construct(){
		parent::__construct();
		$this->is_logged_in();
		$this->confirm();
		
	}
	
	public	function is_logged_in(){
	 $is_logged_in = $this->session->userdata('is_logged_in');
	 if(!isset($is_logged_in)|| $is_logged_in != true){ 
	redirect('user');
	 }
	 else{
		 return true;
	 }
	}

public function home(){
	 $template= array();
	 $username= $this->session->userdata('name');
	 $template['content'] = 'user_temp';
	$this->load->view('template_user',$template);
	}
	
	function confirm(){
		$this->load->model('user_model');
		$pass = $this->session->userdata('password');
		if($confirm = $this->user_model->user_confirm($pass)){
			foreach($confirm as $cn){
				$usr = $cn;
				
			}
			$confirmed = $usr->password;
			if($confirmed !==md5($pass)){
				redirect('user');
			}
			else{
		return true;
			}
		
			
		}
	
	}
	
}