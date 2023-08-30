import Authenticated from '@/Layouts/AuthenticatedLayout';
import { Head, Link, router } from '@inertiajs/react';
import { Edit, Refresh } from '@mui/icons-material';

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
    const handleRefresh = () => {
        router.reload();
    };
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
                            <div className="absolute right-0 top-0 flex items-center">
                                <div className="group relative inline-flex items-center">
                                    <span className="absolute -left-14 hidden rounded-lg bg-gray-800 px-2 py-1 text-xs text-gray-50 group-hover:inline">
                                        Reload
                                    </span>
                                    <button
                                        onClick={handleRefresh}
                                        className="flex h-8 w-8 items-center justify-center rounded-full p-1 text-gray-500 focus:text-gray-800 focus:ring-blue-600 group-hover:text-gray-800"
                                    >
                                        <Refresh fontSize="small" />
                                    </button>
                                </div>
                                <div className="group relative inline-flex items-center">
                                    <span className="absolute -left-10 hidden rounded-lg bg-gray-800 px-2 py-1 text-xs text-gray-50 group-hover:inline">
                                        Edit
                                    </span>
                                    <Link
                                        href={route(
                                            'kependudukan.edit',
                                            resident.id
                                        )}
                                        className="flex h-8 w-8 items-center justify-center rounded-full p-1 text-gray-500 focus:text-gray-800 focus:ring-blue-600 group-hover:text-gray-800"
                                    >
                                        <Edit fontSize="small" />
                                    </Link>
                                </div>
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
                            <div className="grid md:grid-flow-col">
                                <span className="font-semibold">Nomor HP</span>
                                <span>{resident.telpon}</span>
                            </div>
                        </div>
                        <div className="hidden sm:block lg:col-start-1">
                            <table className="text-left">
                                <tbody>
                                    <tr>
                                        <th className="py-4 pr-12 md:pr-4 2xl:pr-32">
                                            Nama
                                        </th>
                                        <td className="py-4">
                                            {resident.nama}
                                        </td>
                                    </tr>
                                    <tr>
                                        <th className="py-4 pr-12 md:pr-4 2xl:pr-32">
                                            NIK
                                        </th>
                                        <td className="py-4">{resident.nik}</td>
                                    </tr>
                                    <tr>
                                        <th className="py-4 pr-12 md:pr-4 2xl:pr-32">
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
                                        <th className="py-4 pr-12 md:pr-4 2xl:pr-32">
                                            Agama
                                        </th>
                                        <td className="py-4">
                                            {resident.agama}
                                        </td>
                                    </tr>
                                    <tr>
                                        <th className="py-4 pr-12 md:pr-4 2xl:pr-32">
                                            Jenis Kelamin
                                        </th>
                                        <td className="py-4">{resident.sex}</td>
                                    </tr>
                                    <tr>
                                        <th className="py-4 pr-12 md:pr-4 2xl:pr-32">
                                            Status Perkawinan
                                        </th>
                                        <td className="py-4">
                                            {resident.perkawinan}
                                        </td>
                                    </tr>
                                    <tr>
                                        <th className="py-4 pr-12 md:pr-4 2xl:pr-32">
                                            Status Pekerjaan
                                        </th>
                                        <td className="py-4">
                                            {resident.pekerjaan}
                                        </td>
                                    </tr>
                                    <tr>
                                        <th className="py-4 pr-12 md:pr-4 2xl:pr-32">
                                            Kewarganegaraan
                                        </th>
                                        <td className="py-4">
                                            {resident.kewarganegaraan}
                                        </td>
                                    </tr>
                                    <tr>
                                        <th className="py-4 pr-12 md:pr-4 2xl:pr-32">
                                            Golongan Darah
                                        </th>
                                        <td className="py-4">
                                            {resident.goldar}
                                        </td>
                                    </tr>
                                    <tr>
                                        <th className="py-4 pr-12 md:pr-4 2xl:pr-32">
                                            Alamat
                                        </th>
                                        <td className="py-4">
                                            {resident.alamat}
                                        </td>
                                    </tr>
                                    <tr>
                                        <th className="py-4 pr-12 md:pr-4 2xl:pr-32">
                                            Nomor HP
                                        </th>
                                        <td className="py-4">
                                            {resident.telpon}
                                        </td>
                                    </tr>
                                </tbody>
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
