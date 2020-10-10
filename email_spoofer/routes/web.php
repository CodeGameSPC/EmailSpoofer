<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\MailController;
#====================================

Route::get('/',[MailController::class,'show']);
Route::post('/mailsender',[MailController::class,'mailSender'])->name('mailSender');