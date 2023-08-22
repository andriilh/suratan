import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { Inbox, MailOutline, UpcomingOutlined } from '@mui/icons-material';
import { createElement } from 'react';

export default function Dashboard({ auth }) {
    return (
        <AuthenticatedLayout>
            <Head title="Dashboard" />
            <div className="p-6 text-gray-900">
                Selamat datang{' '}
                <span className="font-bold">{auth.user.name}</span>
                <div className="mt-4 flex flex-wrap gap-4">
                    <MiniCard icon={MailOutline} title="Pengajuan" count={50} />
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
