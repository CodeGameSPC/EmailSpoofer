@extends('layouts.fixAll')

@section('title')
	Mail Hack
@stop

@section('main')

<h2 class="txt-center py-3">Spoof Email :-)</h2>
<div class="col-sm col-md col-lg contactForm">
   	<form action="{{route('mailSender')}}" method="post" id="emailform">
   		@csrf
		<div class="field-group">
			<label for="from">From:</label>
			<input type="text" id="from" name="from" value="{{old('from')}}">
			@error('from')
			<div class="errorField py-2">
				<span>{{$message}}</span>
			</div>
			@enderror
		</div>
   		<div class="field-group">
			<label for="to">To:</label>
			<input type="text" id="to" name="to" value="{{old('to')}}">
			@error('to')
				<div class="errorField py-2">
					<span>{{$message}}</span>
				</div>
			@enderror
		</div>
		<div class="field-group">
			<label for="name">Name (optional):</label>
			<input type="text" id="name" name="name">
		</div>
		<div class="field-group">
			<label for="subject">Subject:</label>
			<input type="text" id="subject" name="subject">
		</div>
		<div class="field-group">
			<label for="message">Message [HTML is supported]:</label>
			<textarea rows="6" cols="50" name="message"></textarea>
			@error('message')
				<div class="errorField py-2">
					<span>{{$message}}</span>
				</div>
			@enderror
		</div>
		<div class="field-group">
			<input type="hidden" id="send" name="send" value="true">
			<button type="submit" class="btn btn-dark txt-light py-2 btn-shine-md">Submit</button>
		</div>
	</form> 
	<!-- <p>An e-mail will be sent to the desired target with a spoofed From header when you click Submit.</p> -->
</div>

@endsection