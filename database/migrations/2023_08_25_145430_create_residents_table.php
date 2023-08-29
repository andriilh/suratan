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
        Schema::create('residents', function (Blueprint $table) {
            $table->id();
            $table->char('nik', 25)->unique();
            $table->string('nama');
            $table->string('sex');
            $table->string('pob'); // place of birth
            $table->date('dob'); // date of birth
            $table->string('alamat')->nullable();
            $table->string('pekerjaan')->nullable();
            $table->string('perkawinan')->nullable();
            $table->string('agama')->nullable();
            $table->string('telpon')->nullable();
            $table->string('goldar')->nullable(); // golongan darah
            $table->string('kewarganegaraan')->default('Indonesia');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('residents');
    }
};
