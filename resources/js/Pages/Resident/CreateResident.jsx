import Authenticated from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import FormResident from './Partials/FormResident';

export default function CreateResident() {
    return (
        <Authenticated>
            <Head title="Tambah Data Warga" />
            <div className="p-6 text-gray-900">
                <h1 className="text-lg md:text-3xl">Data Warga Baru</h1>
                <p className="mt-1 font-normal text-gray-500">
                    Tambahkan data kependudukan yang baru, isikan berdasarkan
                    data asli dari warga
                </p>
                <p className="font-normal text-gray-500">
                    <span className="text-red-500">*</span> Mengindikasikan
                    inputan wajib diisi.
                </p>
                <div className="relative mt-4 rounded-lg bg-white p-5 shadow-md md:mt-6">
                    <FormResident />
                </div>
            </div>
        </Authenticated>
    );
}
