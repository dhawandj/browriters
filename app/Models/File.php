<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class File extends Model
{
    protected  $guarded = [];

    // this book belongs to paritcula order
    public function book()
    {
        return $this->belongsTo(Book::class);
    }
}