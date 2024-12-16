<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    protected  $guarded = [];
       /**
     * Get the books for the category.
     */
    public function books()
    {
        return $this->hasMany(Book::class);
    }
}
