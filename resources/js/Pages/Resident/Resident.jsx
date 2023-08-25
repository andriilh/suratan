import Fab from '@/Components/Fab';
import Authenticated from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/react';

export default function Kependudukan() {
    return (
        <Authenticated>
            <Head title="Data Warga" />
            <div className="p-6 text-gray-900">
                <Link href={route('kependudukan.create')}>
                    <Fab tooltip="Add Data" />
                </Link>
                <h1 className="text-lg md:text-2xl">Data Warga</h1>
                <div className="relative mt-6 rounded-lg bg-white p-5 shadow-md md:mt-10"></div>
            </div>
        </Authenticated>
    );
}
