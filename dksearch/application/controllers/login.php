<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class Login extends CI_Controller{
	
	public function index(){
		
		$this->load->view('login_view');
	}
public function enter(){
	$this->load->model('login_model');
	$query =$this->login_model->validate();
	if($query){
		$data = array(
		  'name'=> $this->input->post('username'),
		  'password'=> $this->input->post('password'),
		  'is_logged_in' => true
		);
		//dk@admin#01
		$this->session->set_userdata($data);
		redirect('dk/home');
	}else{
		$this->index();
	}
}
}