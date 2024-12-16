<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('orders', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained()->cascadeOnDelete();
            $table->string('payment_id')->nullable();
            $table->decimal('amount', 10, 2)->nullable();
            $table->string('status')->nullable();
            $table->string('contact')->nullable();
            $table->timestamps();

            // p_ is pickup address
            $table->string('p_area', 255)->nullable();
            $table->string('p_pincode', 6)->nullable();
            $table->string('p_address', 500)->nullable();
            $table->string('p_lat', 50)->nullable();
            $table->string('p_lon', 50)->nullable();
            // d_ is delivery address
            $table->string('d_area', 255)->nullable();
            $table->string('d_pincode', 6)->nullable();
            $table->string('d_address', 500)->nullable();
            $table->string('d_lat', 50)->nullable();
            $table->string('d_lon', 50)->nullable();
            //contct-details
            $table->string('name')->nullable();
            $table->string('phone')->nullable();
            // status-details
            $table->string('order_status')->nullable()->default('pickup');
            
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('orders');
    }
};
