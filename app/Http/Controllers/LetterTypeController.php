<?php

namespace App\Http\Controllers;

use App\Models\LetterType;
use Illuminate\Http\Request;
use Inertia\Inertia;

class LetterTypeController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Inertia::render('LetterType/LetterType');
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'name' => ['required'],
            'description' => ['required'],
            'requirements' => ['required'],
        ]);
        LetterType::create([
            'name'              => $request->name,
            'type'              => $request->type,
            'description'       => $request->description,
            'requirements'      => $request->requirements
        ]);

        return to_route('jenissurat.index');
    }

    /**
     * Display the specified resource.
     */
    public function show(LetterType $letterType)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(LetterType $letterType)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, LetterType $letterType)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(LetterType $letterType)
    {
        //
    }
}
