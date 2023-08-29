import Pagination from '@/Components/Pagination';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { Inbox, MailOutline, UpcomingOutlined } from '@mui/icons-material';
import { createElement } from 'react';

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

export default function Dashboard({ auth }) {
    return (
        <AuthenticatedLayout>
            <Head title="Dashboard" />
            <div className="p-6 text-gray-900">
                Selamat datang{' '}
                <span className="font-bold">{auth.user.name}</span>
                <div className="mt-4 flex flex-wrap gap-4">
                    <MiniCard
                        icon={MailOutline}
                        title="Pengajuan Baru"
                        count={50}
                    />
                    <MiniCard
                        icon={Inbox}
                        title="Surat Masuk"
                        count={50}
                        color="green"
                    />
                    <MiniCard
                        icon={UpcomingOutlined}
                        title="Surat Keluar"
                        count={50}
                        color="teal"
                    />
                    <MiniCard
                        icon={UpcomingOutlined}
                        title="Aduan Warga"
                        count={16}
                        color="red"
                    />
                </div>
                <div className="relative mt-6 rounded-lg bg-white p-5 shadow-md md:mt-10">
                    <div className="mb-4 text-left text-lg font-semibold text-gray-900">
                        Pengajuan
                    </div>
                    <Table dataTabel={dataSurat} />
                </div>
            </div>
        </AuthenticatedLayout>
    );
}

function MiniCard({ icon, title = '', count, color = 'blue' }) {
    const colorSet = {
        blue: {
            bg: 'bg-blue-100',
            text: 'text-blue-500',
            border: 'border-l-blue-500',
            shadow: 'shadow-blue-500/10'
        },
        red: {
            bg: 'bg-red-100',
            text: 'text-red-500',
            border: 'border-l-red-500',
            shadow: 'shadow-red-500/10'
        },
        teal: {
            bg: 'bg-teal-100',
            text: 'text-teal-500',
            border: 'border-l-teal-500',
            shadow: 'shadow-teal-500/10'
        },
        green: {
            bg: 'bg-green-100',
            text: 'text-green-500',
            border: 'border-l-green-500',
            shadow: 'shadow-green-500/10'
        },
        indigo: {
            bg: 'bg-indigo-100',
            text: 'text-indigo-500',
            border: 'border-l-indigo-500',
            shadow: 'shadow-indigo-500/10'
        }
    }[color];
    return (
        <div
            className={`group relative flex w-52 max-w-sm items-center overflow-hidden rounded-md ${colorSet.bg} px-4 py-2 ${colorSet.text} shadow-md ${colorSet.shadow}`}
        >
            <div
                className={`absolute rotate-12 text-8xl ${colorSet.text} text-opacity-5 transition-all group-hover:rotate-6 group-hover:text-9xl`}
            >
                {createElement(icon, { fontSize: 'inherit' })}
            </div>
            <div className="w-2/3 text-xl">{title}</div>
            <div
                className={`border-l-2 ${colorSet.border} px-3 text-center text-2xl font-bold`}
            >
                {count}
            </div>
        </div>
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
                                        <a
                                            href="#"
                                            className="font-medium text-blue-600 hover:underline"
                                        >
                                            Proses
                                        </a>
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
                {/* <Pagination /> */}
            </div>
        </div>
    );
}
