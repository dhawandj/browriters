<?php

use App\Http\Controllers\RazorpayController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::post('/upload', function (Request $request) {
    // dd($request->file('demo'));
        sleep(10);
    foreach (request()->file('demo') as $file) {
        $path = $file->store('demo', 'public'); // Store in "storage/app/public/avatars"
    }
    // return $request->user();
});


// Route::post('/razorpay/create-order', [RazorpayController::class, 'createOrder'])->name('razorpay.create-order');
// Route::post('/razorpay/verify-payment', [RazorpayController::class, 'verifyPayment'])->name('razorpay.verify-payment');
