import Pagination from '@/Components/Pagination';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { MoreHoriz } from '@mui/icons-material';
import React from 'react';

const dataSurat = [
    {
        perihal: 'Keterangan Domisili',
        bagian: 'Kependudukan',
        pengaju: 'Sudirman Madin',
        tanggal: '21/09/2023 16:00'
    },
    {
        perihal: 'Izin Usaha',
        bagian: 'Perizinan',
        pengaju: 'Rina Permata',
        tanggal: '22/09/2023 10:30'
    },
    {
        perihal: 'Surat Lamaran',
        bagian: 'SDM',
        pengaju: 'Budi Santoso',
        tanggal: '23/09/2023 14:15'
    },
    {
        perihal: 'Pengaduan Layanan',
        bagian: 'Pelayanan Publik',
        pengaju: 'Dewi Cahyani',
        tanggal: '24/09/2023 09:00'
    },
    {
        perihal: 'Permohonan Cuti',
        bagian: 'Kepegawaian',
        pengaju: 'Putri Wulandari',
        tanggal: '25/09/2023 08:00'
    },
    {
        perihal: 'Permintaan Informasi',
        bagian: 'Humas',
        pengaju: 'Fahmi Rahman',
        tanggal: '26/09/2023 11:45'
    },
    {
        perihal: 'Pembuatan Kartu Pelajar',
        bagian: 'Pendidikan',
        pengaju: 'Anisa Putri',
        tanggal: '27/09/2023 13:20'
    },
    {
        perihal: 'Permohonan Bantuan',
        bagian: 'Sosial',
        pengaju: 'Hendra Gunawan',
        tanggal: '28/09/2023 15:30'
    },
    {
        perihal: 'Pengajuan Proposal',
        bagian: 'Keuangan',
        pengaju: 'Linda Wijaya',
        tanggal: '29/09/2023 09:45'
    },
    {
        perihal: 'Perpanjangan SIM',
        bagian: 'Lalu Lintas',
        pengaju: 'Rudi Hartono',
        tanggal: '30/09/2023 12:10'
    }
];

export default function Pengajuan() {
    return (
        <AuthenticatedLayout>
            <Head title="Pengajuan" />
            <div className="p-6 text-gray-900">
                <h1 className="text-lg md:text-2xl">
                    Data Pengajuan Masyarakat
                </h1>
                <div className="relative mt-6 rounded-lg bg-white p-5 shadow-md md:mt-10">
                    <Table dataTabel={dataSurat} />
                </div>
            </div>
        </AuthenticatedLayout>
    );
}

function Table({ dataTabel }) {
    return (
        <div className="overflow-x-auto text-sm text-gray-500">
            <table className="w-full text-left">
                <thead className="bg-gray-50 text-xs uppercase text-gray-700">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            Perihal
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Bagian
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Pengaju
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Tanggal
                        </th>
                        <th scope="col" className="px-6 py-3">
                            <span className="sr-only">Edit</span>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {dataTabel.map(
                        ({ bagian, pengaju, perihal, tanggal }, key) => {
                            return (
                                <tr
                                    key={key}
                                    className={`border-b hover:bg-gray-100 ${
                                        key % 2 == 0 ? 'bg-white' : 'bg-gray-50'
                                    }`}
                                >
                                    <td className="px-6 py-4">{perihal}</td>
                                    <td className="px-6 py-4">{bagian}</td>
                                    <td className="px-6 py-4">{pengaju}</td>
                                    <td className="px-6 py-4">{tanggal}</td>
                                    <td className="px-6 py-4 text-right">
                                        <button>
                                            <MoreHoriz className="text-blue-600" />
                                        </button>
                                    </td>
                                </tr>
                            );
                        }
                    )}
                </tbody>
            </table>
            <div className="mt-4 flex md:justify-between">
                <div className="hidden md:block">
                    {10} data dari total {130}
                </div>
            </div>
        </div>
    );
}
