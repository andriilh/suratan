<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Resident extends Model
{
    use HasFactory;
    protected $fillable = [
        'nik',
        'nama',
        'sex',
        'pob',
        'dob',
        'alamat',
        'pekerjaan',
        'perkawinan',
        'agama',
        'telpon',
        'goldar',
        'kewarganegaraan'
    ];
}
