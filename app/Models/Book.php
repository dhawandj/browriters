<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Book extends Model
{
    protected  $guarded = [];

    // this book belongs to paritcula order
    public function order()
    {
        return $this->belongsTo(Order::class);
    }

    /**
     * Get the orders for the Users
     */
    public function files(): HasMany
    {
        return $this->hasMany(File::class);
    }

    /**
     * Get the category that the book belongs to.
     */
    public function category()
    {
        return $this->belongsTo(Category::class);
    }
}
