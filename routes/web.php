<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\PostController;


// Route::get('/', function () {
//     sleep(1);
//     return inertia('Home',[
//         'title' => 'Home',
//         'description' => 'This is the home page',
//         'keywords' => 'home, page, laravel, inertia',
//         'author' => 'John Doe',
//         'image' => 'https://laravel.com/img/logomark.min.svg',
//     ]);
// });

Route::resource('posts', PostController::class)->except('index');

Route::get('/', [PostController::class, 'index'])->name('posts.index');

