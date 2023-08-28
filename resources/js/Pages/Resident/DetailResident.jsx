import Authenticated from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/react';
import FormResident from './Partials/FormResident';
import { Edit } from '@mui/icons-material';

var namaBulan = [
    'Januari',
    'Februari',
    'Maret',
    'April',
    'Mei',
    'Juni',
    'Juli',
    'Agustus',
    'September',
    'Oktober',
    'November',
    'Desember'
];

export default function DetailResident({ resident }) {
    const dob = new Date(resident.dob);
    return (
        <Authenticated>
            <Head title="Detail Warga" />
            <div className="p-3 text-gray-900 md:p-6">
                <h1 className="text-2xl font-bold md:text-3xl md:font-normal">
                    {resident.nama}
                </h1>
                <div className="mt-4 rounded-lg bg-white p-3 shadow-md md:mt-6">
                    <div className="grid lg:grid-flow-col lg:grid-cols-2">
                        <div className="relative flex items-center justify-center p-4 lg:col-start-2">
                            <div className="group absolute right-0 top-0">
                                <span className="hidden rounded-lg bg-gray-800 px-2 py-1 text-xs text-gray-50 group-hover:inline">
                                    Edit
                                </span>
                                <Link className="rounded-full p-2 text-gray-500 group-hover:text-gray-800">
                                    <Edit fontSize="small" />
                                </Link>
                            </div>
                            <div
                                className="aspect-[4/3] h-60 w-44 overflow-hidden rounded-md bg-cover bg-center"
                                style={{
                                    backgroundImage:
                                        "url('https://i.stack.imgur.com/l60Hf.png')"
                                }}
                            ></div>
                        </div>
                        <div className="col-start-1 grid w-full gap-y-6 sm:hidden lg:col-start-2">
                            <div className="grid md:grid-flow-col">
                                <span className="font-semibold">Nama</span>
                                <span>{resident.nama}</span>
                            </div>
                            <div className="grid md:grid-flow-col">
                                <span className="font-semibold">NIK</span>
                                <span>{resident.nik}</span>
                            </div>
                            <div className="grid md:grid-flow-col">
                                <span className="font-semibold">
                                    Tempat, Tanggal Lahir
                                </span>
                                <span>
                                    {resident.pob +
                                        ', ' +
                                        dob.getDate() +
                                        ' ' +
                                        namaBulan[dob.getMonth()] +
                                        ' ' +
                                        dob.getFullYear()}
                                </span>
                            </div>
                            <div className="grid md:grid-flow-col">
                                <span className="font-semibold">Agama</span>
                                <span>{resident.agama}</span>
                            </div>
                            <div className="grid md:grid-flow-col">
                                <span className="font-semibold">
                                    Jenis Kelamin
                                </span>
                                <span>{resident.sex}</span>
                            </div>
                            <div className="grid md:grid-flow-col">
                                <span className="font-semibold">
                                    Status Perkawinan
                                </span>
                                <span>{resident.perkawinan}</span>
                            </div>
                            <div className="grid md:grid-flow-col">
                                <span className="font-semibold">Pekerjaan</span>
                                <span>{resident.pekerjaan}</span>
                            </div>
                            <div className="grid md:grid-flow-col">
                                <span className="font-semibold">
                                    Kewarganegaraan
                                </span>
                                <span>{resident.kewarganegaraan}</span>
                            </div>
                            <div className="grid md:grid-flow-col">
                                <span className="font-semibold">
                                    Golongan Darah
                                </span>
                                <span>{resident.goldar}</span>
                            </div>
                            <div className="grid md:grid-flow-col">
                                <span className="font-semibold">Alamat</span>
                                <span>{resident.alamat}</span>
                            </div>
                        </div>
                        <div className="hidden sm:block lg:col-start-1">
                            <table className="text-left">
                                <tr>
                                    <th className="py-4 pr-12 md:pr-4">Nama</th>
                                    <td className="py-4">{resident.nama}</td>
                                </tr>
                                <tr>
                                    <th className="py-4 pr-12 md:pr-4">NIK</th>
                                    <td className="py-4">{resident.nik}</td>
                                </tr>
                                <tr>
                                    <th className="py-4 pr-12 md:pr-4">
                                        Tempat, Tanggal Lahir
                                    </th>
                                    <td className="py-4">
                                        {resident.pob +
                                            ', ' +
                                            dob.getDate() +
                                            ' ' +
                                            namaBulan[dob.getMonth()] +
                                            ' ' +
                                            dob.getFullYear()}
                                    </td>
                                </tr>
                                <tr>
                                    <th className="py-4 pr-12 md:pr-4">
                                        Agama
                                    </th>
                                    <td className="py-4">{resident.agama}</td>
                                </tr>
                                <tr>
                                    <th className="py-4 pr-12 md:pr-4">
                                        Jenis Kelamin
                                    </th>
                                    <td className="py-4">{resident.sex}</td>
                                </tr>
                                <tr>
                                    <th className="py-4 pr-12 md:pr-4">
                                        Status Perkawinan
                                    </th>
                                    <td className="py-4">
                                        {resident.perkawinan}
                                    </td>
                                </tr>
                                <tr>
                                    <th className="py-4 pr-12 md:pr-4">
                                        Status Pekerjaan
                                    </th>
                                    <td className="py-4">
                                        {resident.pekerjaan}
                                    </td>
                                </tr>
                                <tr>
                                    <th className="py-4 pr-12 md:pr-4">
                                        Kewarganegaraan
                                    </th>
                                    <td className="py-4">
                                        {resident.kewarganegaraan}
                                    </td>
                                </tr>
                                <tr>
                                    <th className="py-4 pr-12 md:pr-4">
                                        Golongan Darah
                                    </th>
                                    <td className="py-4">{resident.goldar}</td>
                                </tr>
                                <tr>
                                    <th className="py-4 pr-12 md:pr-4">
                                        Alamat
                                    </th>
                                    <td className="py-4">{resident.alamat}</td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </div>
                <h1 className="mt-6 text-lg font-bold md:text-xl md:font-normal">
                    Riwayat
                </h1>
            </div>
        </Authenticated>
    );
}
