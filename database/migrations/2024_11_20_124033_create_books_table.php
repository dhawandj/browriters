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
        Schema::create('books', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->integer('pages');
            // $table->integer('category_id')->nullable();
            $table->foreignId('category_id')->constrained()->cascadeOnDelete(); // Assumes a categories table exists
            $table->foreignId('order_id')->constrained('orders')->cascadeOnDelete(); // Links to the orders table
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('books');
    }
};
