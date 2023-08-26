<?php

namespace App\Http\Controllers;

use App\Models\Resident;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ResidentController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $resident = Resident::paginate(10);

        return Inertia::render('Resident/Resident', [
            'residents' => $resident
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Resident/CreateResident');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'nik'               => ['required', 'unique:' . Resident::class],
            'nama'              => ['required', 'string'],
            'sex'               => ['required'],
            'pob'               => ['required', 'string'],
            'dob'               => ['required', 'date', 'before:today'],
            'alamat'            => ['required', 'string'],
            'pekerjaan'         => ['required', 'string'],
            'perkawinan'        => ['required', 'string'],
            'agama'             => ['required', 'string'],
            'goldar'            => ['required', 'string'],
            'kewarganegaraan'   => ['required', 'string'],
        ]);

        Resident::create([
            'nik'               => $request->nik,
            'nama'              => $request->nama,
            'sex'               => $request->sex,
            'pob'               => $request->pob,
            'dob'               => $request->dob,
            'alamat'            => $request->alamat,
            'pekerjaan'         => $request->pekerjaan,
            'perkawinan'        => $request->perkawinan,
            'agama'             => $request->agama,
            'telpon'            => $request->telpon,
            'goldar'            => $request->goldar,
            'kewarganegaraan'   => $request->kewarganegaraan,
        ]);
    }

    /**
     * Display the specified resource.
     */
    public function show(Resident $resident)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Resident $resident)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Resident $resident)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Resident $resident)
    {
        //
    }
}
