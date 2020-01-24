<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;
use App\User;
class Project extends Model
{
    protected $fillable = ['title' , 'creator_user_id'];

    public function user()
    {
        return $this->belongsTo(User::class , 'creator_user_id');
    }
    public function getFullNameAttribute()
    {
        return $this->user->firstName . " " . $this->user->lastName;
    }
}
