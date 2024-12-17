<?php


use App\Http\Controllers\ProfileController;
use App\Http\Controllers\RazorpayController;
use App\Models\Book;
use App\Models\File;
use App\Models\Order;
use App\Models\User;
use Illuminate\Foundation\Application;
use Illuminate\Foundation\Http\Middleware\VerifyCsrfToken;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;
use Laravel\Socialite\Facades\Socialite;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__ . '/auth.php';

// google OAuth routes
Route::get('/auth/redirect', function () {
    return Socialite::driver('google')->redirect();
})->name('google.login');

Route::get('/auth/callback', function () {

    $googleUser = Socialite::driver('google')->user();

    $user = User::updateOrCreate([
        'email' => $googleUser->email,
    ], [
        'name' => $googleUser->name,
        'password' => bcrypt('dummy_password'),
        'google_id' => $googleUser->id,
        'email_verified_at' => now(),
        'google_token' => $googleUser->token,
    ]);

    Auth::login($user);

    return redirect('/home');
});
//razorpay routes
Route::post('/razorpay/create-order', [RazorpayController::class, 'createOrder'])->name('razorpay.create-order')->middleware('auth');
Route::post('/razorpay/verify-payment', [RazorpayController::class, 'verifyPayment'])->name('razorpay.verify-payment')->middleware('auth');

//file-store
Route::post('/upload', function (Request $request) {
    $uploadedFiles = []; // To store details of uploaded files
    // Loop through each file in the 'avatars' field
    // dd($request->file('myFiles'));

    $request->validate([
        'book_id' => ['required'],
        'myFiles' => ['required'], // Ensure `myFiles` is an array
        'myFiles.*' => ['file', 'mimes:jpg,png,pdf,webp', 'max:102400 '], // Validate each file
    ]);

    // sleep(5);

    // file->create(['book_id'])
    foreach ($request->file('myFiles') as $file) {
        // Store the file and get the path
        $path = $file->store('myFiles', 'public'); // Stored in "storage/app/public/avatars"
        // Add details of the uploaded file to the array
        //store to db

        File::create([
            'book_id' => $request->book_id,
            'name' => $file->getClientOriginalName(),
            'url' => $path,
            'size' => $file->getSize(),
            'extension' => $file->getClientOriginalExtension()

        ]);
        $uploadedFiles[] = [
            'original_name' => $file->getClientOriginalName(),
            'stored_path' => $path,
            'size' => $file->getSize(),
            'extension' => $file->getClientOriginalExtension()

        ];
    }

    // Redirect back with flash data

    return back()->with('message', 'ok');
})->name('upload');
//file delete
Route::delete('/delete-file/{id}', function ($id) {
    // Find the file record in the database
    $file = File::findOrFail($id);

    // Delete the file from storage
    Storage::disk('public')->delete($file->url);

    // Remove the record from the database
    $file->delete();

    // Redirect back with success message
    return back()->with('message', 'File deleted successfully');
})->name('delete-file');


Route::get('admin/{status?}', function ($status = 'pickup') {

    $validStatuses = ['pickup', 'write', 'writing', 'delivery'];

    // Check if the provided status is valid; default to 'pickup' if invalid
    $status = in_array($status, $validStatuses) ? $status : null;

    $orders = $status
        ? Order::where('order_status', $status)->latest()->get()
        : Order::latest()->get();

    $count = [
        'pickup' => Order::where('order_status', 'pickup')->count(),
        'write' => Order::where('order_status', 'write')->count(),
        'writing' => Order::where('order_status', 'writing')->count(),
        'delivery' => Order::where('order_status', 'delivery')->count(),
    ];

    return Inertia::render('Admin/Index', [
        'orders' => $orders,
        'count' => $count,
        'currentStatus' => $status ?? 'all', // Default to 'all' when no specific status is provided
    ]);
})->name('admin');


Route::get('admin/order/{order}', function (Order $order) {
    $order->load(['books.files', 'books.category']);
    return Inertia::render('Admin/Show', [
        'order' => $order
    ]);
})->name('admin.order.show');

Route::patch('admin/order/{status?}/{order}', function ($status, Order $order) {
    // $order[$property] = true;
    // $order->save();

    $order->order_status = $status;
    $order->save();
    return redirect(route('admin'));
})->name('update.order.status');

Route::get('download', function () {
    $filePath = 'myFiles/4nKZrPHVow80GHB1zORRHcpjW3QgIcSLMzyrqMOa.webp';

    if (!Storage::exists($filePath)) {
        abort(404, 'File not found');
    }

    return Storage::download($filePath, 'djfile');
})->name('download');

Route::get('/download-zip/{book}', function (Book $book) {

    // needed files and zipfilename 
    $files = $book->files;
    if ($files->isEmpty()) {
        return back()->with('error', 'no files found');
    }
    // dd('dd');
    $zipFileName = 'orderId-' . $book->order_id . '_' . $book->name . '.zip';
    $zip = new ZipArchive;
    if ($zip->open(public_path($zipFileName), ZipArchive::CREATE) === TRUE) {
        // $files = [
        //     'myFiles/4nKZrPHVow80GHB1zORRHcpjW3QgIcSLMzyrqMOa.webp',
        //     'myFiles/ACQFowcQRjn5CTnp75zJaOUXw8AXHJ68dGUTXr9y.jpg',
        // ];

        foreach ($files as $index =>  $file) {
            $filePath = Storage::path($file->url);
            $customName = "browriters_" . ($index + 1) . "." . pathinfo($file->url, PATHINFO_EXTENSION);
            $zip->addFile($filePath, $customName); // Add the file with its original name or custom name
        }

        $zip->close();

        return response()->download(public_path($zipFileName))->deleteFileAfterSend(true);
    }

    return response()->json(['error' => 'Unable to create zip file'], 500);
})->name('download-zip');



// start from her 
Route::get('home', function () {
    return Inertia::render('Home');
})->name('home');

Route::get('assignment', function () {
    return Inertia::render('Assignment');
})->name('assignment');

Route::get('record', function () {
    return Inertia::render('Record');
})->name('record');
//orders
Route::get('orders', function () {
    $id = Auth::id();

    // Fetch all orders
    $allOrders = Order::where('user_id', $id)
        ->latest()
        ->with(['books'])
        ->get()
        ->map(function ($order) {
            // Add a human-readable 'created_at_diff' attribute
            $order->date = $order->created_at->diffForHumans();
            return $order;
        });

    return Inertia::render('Orders', [
        'oldOrders' => $allOrders->slice(2), // All except the latest 2
        'latestOrders' => $allOrders->take(2), // Only the latest 2
    ]);
})->name('orders')->middleware('auth');

Route::get('order/{order}', function (Order $order) {

    $order->load(['books.files', 'books.category']);

    return Inertia::render('Order', [
        'order' => $order
    ]);
})->name('order')->middleware('auth');

Route::post('pickup-address/{order}/store', function (Request $request, Order $order) {
    $validatedData = $request->validate([
        'area' => ['required', 'string', 'max:255'],
        'pincode' => ['required', 'digits:6'],
        'address' => ['required', 'string', 'max:500'],
        'lat' => ['required', 'numeric', 'between:-90,90'],
        'lon' => ['required', 'numeric', 'between:-180,180'],
    ]);

    $order->update([
        'p_area' => $validatedData['area'],
        'p_pincode' => $validatedData['pincode'],
        'p_address' => $validatedData['address'],
        'p_lat' => $validatedData['lat'],
        'p_lon' => $validatedData['lon'],
    ]);

    return back();
})->name('pickup.store');
//delivery
Route::post('delivery-address/{order}/store', function (Request $request, Order $order) {
    $validatedData = $request->validate([
        'area' => ['required', 'string', 'max:255'],
        'pincode' => ['required', 'digits:6'],
        'address' => ['required', 'string', 'max:500'],
        'lat' => ['required', 'numeric', 'between:-90,90'],
        'lon' => ['required', 'numeric', 'between:-180,180'],
    ]);

    $order->update([
        'd_area' => $validatedData['area'],
        'd_pincode' => $validatedData['pincode'],
        'd_address' => $validatedData['address'],
        'd_lat' => $validatedData['lat'],
        'd_lon' => $validatedData['lon'],
    ]);

    return back();
})->name('delivery.store');

Route::post('contact-details/{order}/store', function (Request $request, Order $order) {
    $validatedData = $request->validate([
        'name' => ['required', 'string', 'max:255'],
        'phone' => ['required', 'digits:10'],
    ]);

    $order->update($validatedData);

    return back();
})->name('contact.store');


//test 
Route::get('fu', function () {
    return Inertia::render('FileUpload');
});
Route::post('upload/{id}/', function (Request $request, $id) {
    // File::create([
    //     'book_id' => $request->book_id,
    //     'name' => $file->getClientOriginalName(),
    //     'url' => $path,
    //     'size' => $file->getSize(),
    //     'extension' => $file->getClientOriginalExtension()

    // ]);

    $file = $request->file('file');
    $path = $file->store('myFiles', 'public');
    File::create([
        'book_id' => $id,
        'name' => $file->getClientOriginalName(),
        'url' => $path,
        'size' => $file->getSize(),
        'extension' => $file->getClientOriginalExtension()

    ]);
    return response()->json($path);
})->withoutMiddleware(VerifyCsrfToken::class)->name('upload');

Route::get('upload/{id}/', function (Request $request, $id) {
    return Storage::url('myfiles/1VMlWGm5mSRpRvLyQUazBAfMKLZNkWrTTUtHktqU.jpg');
})->withoutMiddleware(VerifyCsrfToken::class)->name('upload');

Route::delete('delete/{fileName}', function (Request $request, $fileName) {
    // file name for or url 
    $file = File::where('name', $fileName)
        ->orWhere('url', 'myFiles/' . $fileName)
        ->latest()->first();
    // dd($file->url);

    // Check if the file exists in the storage
    if (Storage::disk('public')->exists($file->url)) {
        // Delete the file from storage
        Storage::disk('public')->delete($file->url);
        $file->delete();
        return  back();
    } else {
        return response()->json(['error' => 'File not found'], 404);
    };
})->name('delete');
Route::get('t', function () {  
    $path = storage_path('app/public/myFiles/BvPHyyPkk9H1r7bCXwN5DgNBrYzd7dSXV625YBl9.webp');

    if (file_exists($path)) {
        return response()->file($path);
    }
    return abort(404); // Return 404 if the file doesn't exist
});
Route::get('mj/{name}', function ($name) {
    // $path = storage_path('app/public/myFiles/BvPHyyPkk9H1r7bCXwN5DgNBrYzd7dSXV625YBl9.webp');
    $file = File::where('name', $name)->latest()->first();
        // return $file->url;
    // $path = storage_path('app/public/myFiles/' . $name);
    $path = storage_path('app/public/' . $file->url);

    if (file_exists($path)) {
        return response()->file($path);
    }

    return abort(404); // Return 404 if the file doesn't exist
});

Route::post('delivery-details/{order}/store', function (Request $request, Order $order) {
    $validatedData = $request->validate([
        'pickupAddress' => ['required', 'string', 'max:255'],
        'deliveryAddress' => ['required', 'string', 'max:255'],
        'pickupPincode' => ['required', 'digits:6'],
        'phone' => ['required', 'numeric', 'digits:10'],
    ]);

    $order->update([
        'p_address'=>$validatedData['pickupAddress'],
        'd_address'=>$validatedData['deliveryAddress'],
        'p_pincode'=>$validatedData['pickupPincode'],
        'phone'=>$validatedData['phone'],
    ]);

    return back();
})->name('delivery.store');