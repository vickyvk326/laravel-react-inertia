<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PostController;

// use Inertia\Inertia;
// Route::get('/', function(){
//     sleep(3);
//     return Inertia::render('Home',['user' =>['name'=> 'vicky']]);
// });

Route::get('/',[PostController::class, 'index']);

Route::resource('posts',PostController::class) -> except('index');