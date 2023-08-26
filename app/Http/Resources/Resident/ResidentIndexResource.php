<?php

namespace App\Http\Resources\Resident;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class ResidentIndexResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        // return parent::toArray($request);
        return [
            'nik'               => $this->nik,
            'nama'              => $this->nama,
            'sex'               => $this->sex,
            'pob'               => $this->pob,
            'dob'               => $this->dob,
            'alamat'            => $this->alamat,
            'pekerjaan'         => $this->pekerjaan,
            'perkawinan'        => $this->perkawinan,
            'agama'             => $this->agama,
            'telpon'            => $this->telpon,
            'goldar'            => $this->goldar,
            'kewarganegaraan'   => $this->kewarganegaraan,
        ];
    }
}
