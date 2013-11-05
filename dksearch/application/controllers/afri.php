<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class dk extends CI_Controller {
	
	public function __construct(){
		parent::__construct();
		$this->is_logged_in();
	}
	
	public	function is_logged_in(){
	 $is_logged_in = $this->session->userdata('is_logged_in');
	 /*$this->load->model('login_model');
	 $pass = $this->session->userdata('password');
	 $confirm = $this->login_model->user_confirm($pass);
			foreach($confirm as $cn){
				$usr = $cn;
			}
			$confirmed = $usr->password;
			$username_c = $usr->username;
			$ckp = $this->session->userdata(md5('password'));
			$cks = $this->session->userdata('name');*/
			
	 if(!isset($is_logged_in)|| $is_logged_in != true /*||$confirmed !== $ckp || $username_c !== $cks*/){
		 
	redirect('login');
	 }else{
		 return true;
	 }
	}	function confirm(){
		$this->load->model('login_model');
		$pass = $this->session->userdata('password');
		if($confirm = $this->login_model->user_confirm($pass)){
			foreach($confirm as $cn){
				$usr = $cn;
				
			}
			$confirmed = $usr->password;
			if($confirmed !==md5($pass)){
				redirect('login');
			}
			else{
		return true;
			}
		
			
		}
	
	}
	public function home()
	{$this->load->model('dk_model');
			$record['records'] = $this->dk_model->getLast();
			$this->load->library('calendar');
	        $cal= $this->calendar->generate();
			$template['records']= $record;
			$template['calender'] = $cal;
		$template['content'] ="home_view";
		$this->load->view('template_main',$template);
	}
	
	public function newRecord(){
		$template['content'] ="welcome_message";
		$this->load->view('template_main',$template);
		
	}
	
	public function addRecord(){
		
			$this->load->library('form_validation');
		    $this->form_validation->set_rules('name','Sender Name','trim|required|min_length[3]');
		    $this->form_validation->set_rules('email','Sender Email','trim|required|valid_email');
	        $this->form_validation->set_rules('city',' SenderCity','trim|required');
	  	    $this->form_validation->set_rules('phone',' Sender Phone','trim|required|numeric');
			
			//reciver
			$this->form_validation->set_rules('reciverName','Reciever Name','trim|required');
			$this->form_validation->set_rules('reciverEmail','Reciever Email','trim|required');
	  	    $this->form_validation->set_rules('recieverCity','Reciver City','trim|required|');
			$this->form_validation->set_rules('recieverPhone','Reciever Phone','trim|required|numeric');
	
			// cargo
			$this->form_validation->set_rules('consigment','consigment','trim|required');
			$this->form_validation->set_rules('reference','reference','trim|required');
	  	    $this->form_validation->set_rules('date','date','trim|required|');
			$this->form_validation->set_rules('location','location','trim|required');
			$this->form_validation->set_rules('origin','origin','trim|required');
			$this->form_validation->set_rules('destination',' destinationt','trim|required');
			$this->form_validation->set_rules('status',' status','trim|required');
		if($this->form_validation->run()==false){
			$data_temp['content'] = "welcome_message";
		    $this->load->view('template_main',$data_temp);
		}
		else{	 
			$data = array(
			  'sendername' => $this->input->post('name'),
			  'senderemail' => $this->input->post('email'),
			  'senderphone' => $this->input->post('phone'),
			  'sendercity'=> $this->input->post('city'),
			 
			  
			  'recievername' => $this->input->post('reciverName'),
		 	  'recieveremail' => $this->input->post('reciverEmail'),
			  'recieiverphone' => $this->input->post('recieverPhone'),
			  'recievercity'=> $this->input->post('recieverCity'),
			  
		 	  
			  
			  'consigment' => $this->input->post('consigment'),	 
			  'reference' => $this->input->post('reference'),
		 	  'date' => $this->input->post('date'),
		      'location' => $this->input->post('location'),
			  'origin' => $this->input->post('origin'),
		 	  'destination' => $this->input->post('destination'),
		      'status' => $this->input->post('status'),
			  
			);
			$this->load->model('dk_model');
			$this->dk_model->add_record($data);
			$id = $this->db->insert_id();

		  $this->showRecord();
		}
		
	}
	
public function showRecord(){
	$this->load->model('dk_model');
			$record['records'] = $this->dk_model->show_records();
			
			$template = array(
			'content'=>'show_record',
			 'records'=> $record,
			);
			
			$this->load->view('template_main',$template);

}
public function lastRecord(){
	$this->load->model('dk_model');
			$record['records'] = $this->dk_model->getLast();

			$template = array(
			'content'=>'last_record',
			 'records'=> $record,
			);
			
			$this->load->view('template_main',$template);
	
}

public function allRecord(){
	$this->load->model('dk_model');
	$template = array();
	
	if($query=$this->dk_model->allRecord()){
		
		$template['records'] = $query;
	}
	$template['content']= "all_view";
	$this->load->view('template_main',$template);
}
public function deleteRecord(){
	$this->load->model('dk_model');
	$template = array();
	
	if($query=$this->dk_model->allRecord()){
		
		$template['records'] = $query;
	}
	$template['content']= "delete_view";
	$this->load->view('template_main',$template);
	
	$this->dk_model->delete_row();
	$this->deleteRecord();
	
}
public function edit(){
	
	$this->load->model('dk_model');
	$template = array();
	if($query=$this->dk_model->allRecord()){
		
		$template['records'] = $query;
	}
	$template['content']= "edit_view";
	$this->load->view('template_main',$template);
	
}
public function updateRecord(){
	$this->load->model('dk_model');
	$template = array();
	if($query=$this->dk_model->update_selected()){
		
		$template['records'] = $query;
	}
	
	
			$this->load->library('form_validation');
		    $this->form_validation->set_rules('name','Sender Name','trim|required|min_length[3]');
		    $this->form_validation->set_rules('email','Sender Email','trim|required|valid_email');
	        $this->form_validation->set_rules('city',' SenderCity','trim|required');
	  	    $this->form_validation->set_rules('phone',' Sender Phone','trim|required|numeric');
			
			//reciver
			$this->form_validation->set_rules('reciverName','Reciever Name','trim|required');
			$this->form_validation->set_rules('reciverEmail','Reciever Email','trim|required');
	  	    $this->form_validation->set_rules('recieverCity','Reciver City','trim|required|');
			$this->form_validation->set_rules('recieverPhone','Reciever Phone','trim|required|numeric');
	
			// cargo
			$this->form_validation->set_rules('consigment','consigment','trim|required');
			$this->form_validation->set_rules('reference','reference','trim|required');
	  	    $this->form_validation->set_rules('date','date','trim|required|');
			$this->form_validation->set_rules('location','location','trim|required');
			$this->form_validation->set_rules('origin','origin','trim|required');
			$this->form_validation->set_rules('destination',' destinationt','trim|required');
			$this->form_validation->set_rules('status',' status','trim|required');
		if($this->form_validation->run()==false){
			$template['content']= "update_view";
	        $this->load->view('template_main',$template);
		}
		else{	 
			$data = array(
			  'sendername' => $this->input->post('name'),
			  'senderemail' => $this->input->post('email'),
			  'senderphone' => $this->input->post('phone'),
			  'sendercity'=> $this->input->post('city'),
			 
			  
			  'recievername' => $this->input->post('reciverName'),
		 	  'recieveremail' => $this->input->post('reciverEmail'),
			  'recieiverphone' => $this->input->post('recieverPhone'),
			  'recievercity'=> $this->input->post('recieverCity'),
			  
		 	  
			  
			  'consigment' => $this->input->post('consigment'),	 
			  'reference' => $this->input->post('reference'),
		 	  'date' => $this->input->post('date'),
		      'location' => $this->input->post('location'),
			  'origin' => $this->input->post('origin'),
		 	  'destination' => $this->input->post('destination'),
		      'status' => $this->input->post('status'),
			  
			);
			
			$this->dk_model->update_record($data);
			$this->edit();
		}
}
function find(){
	$this->load->model('dk_model');
	$template = array();
	
	$name= $this->input->post('findname');
	$ref= $this->input->post('findref');
	
	
	if($query=$this->dk_model->find_selected($name,$ref)){
		
		$template['records'] = $query;
	}
	   $template['content']= "find_view";
	        $this->load->view('template_main',$template);
}
function logout(){
	 $is_logged_in = $this->session->userdata('is_logged_in');
	 if(!isset($is_logged_in)|| $is_logged_in != true){
		 
	redirect('login');
	 }else{
		 $this->session->sess_destroy('is_logged_in');
			redirect('login');
	 }
}
// search
public function search(){
	$this->load->view('search_view');
}
function result(){

	$this->load->model('dk_model');
	$template = array();
	
	$name= $this->input->post('findname');
	$ref= $this->input->post('findref');
	
	
	if($query=$this->dk_model->find_selected($name,$ref)){
		
		$template['records'] = $query;
	}
	   $template['content']= "find_view";
	        $this->load->view('template_main',$template);
}

function calender(){
	
	$this->load->library('calender');
	$cal= $this->calender->generate();
}
}
