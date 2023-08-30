import Checkbox from '@/Components/Checkbox';
import React from 'react';

export default function LetterTypeTable() {
    return (
        <table className="w-full text-left text-sm text-gray-500">
            <thead className="bg-gray-50 text-xs uppercase text-gray-700">
                <tr>
                    <th scope="col" className="p-4">
                        <Checkbox className="h-4 w-4" />
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Nama Surat
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Deskripsi
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Persyaratan
                    </th>
                    <th scope="col" className="px-6 py-3"></th>
                </tr>
            </thead>
            <tbody></tbody>
        </table>
    );
}
