<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class MailController extends Controller
{
    
	public function show(){
    	return view('pages.test');
    }
    
    public function mailSender(Request $req){
    	#dd($req->all());
    	#=================
    	$req->validate([
			'from'=>'required|email',
			'to'=>'required|email',
			'message'=>'required|min:3|max:333'
    	]);
    	#=================
		$from=$req->input('from');
		$to=$req->input('to');
		$subject=$req->input('subject');
		$message=$req->input('message');
		$name=$req->input('name');
		#=================
		// if(!(filter_var($to, FILTER_VALIDATE_EMAIL) && filter_var($from, FILTER_VALIDATE_EMAIL))) {
		// 	echo "Email address inputs invalid";die();
		// } 
		#=================
		$header="From: ".$name." <".$from.">\r\nMIME-Version: 1.0\r\nContent-type: text/html\r\n";
		$retval=mail ($to,$subject,$message,$header);
		if($retval){
			echo "Email sent.";
		}else{
			echo "Email did not send. Error: " . $retval;
		}

    }

}
