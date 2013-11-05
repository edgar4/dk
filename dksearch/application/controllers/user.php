<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class User extends CI_Controller{
	
	public function index(){
		$this->load->view('user_view');
	}
public function enter(){
	$this->load->model('user_model');
	$query = $this->user_model->validate();
	if($query){
		$data = array(
		  'username'=> $this->input->post('username'),
		  'password'=> $this->input->post('password'),
		  'is_logged_in' => true
		);
		
		$this->session->set_userdata($data);
		redirect('loggedUser/home');
	}else{
		$this->index();
	}
}
}