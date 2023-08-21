import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

export default function Dashboard({ auth }) {
    return (
        <AuthenticatedLayout>
            <Head title="Dashboard" />
            <div className="p-6 text-gray-900">
                Selamat datang{' '}
                <span className="font-bold">{auth.user.name}</span>
            </div>
        </AuthenticatedLayout>
    );
}
