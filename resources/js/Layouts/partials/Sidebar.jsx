import { Link } from '@inertiajs/react';
import {
    AccessTime,
    Delete,
    Diversity2,
    Fingerprint,
    PeopleAlt,
    Person3,
    Star,
    Storage
} from '@mui/icons-material';
import { createElement } from 'react';

export default function Sidebar() {
    return (
        <aside className="fixed left-0 top-0 z-40 ml-0 h-screen w-64 -translate-x-full border border-l-2 transition-transform md:translate-x-0">
            <div className="px-4 py-10">
                <span className="text-4xl font-bold text-blue-700">
                    Suratan
                </span>
            </div>
            <div className="font-medium text-gray-500">
                <div className="flex flex-col py-3 pr-3">
                    <span className="uppercase">Dashboard</span>
                    <Sidemenu
                        icon={Fingerprint}
                        title="Dashboard"
                        href="dashboard"
                    />
                    <span>Surat</span>
                    <Sidemenu
                        icon={Person3}
                        title="Profile"
                        href="profile.edit"
                    />
                </div>
            </div>
        </aside>
    );
}

function Sidemenu({ icon, title, href = '' }) {
    const active = href && route().current(href) ? true : false;
    return (
        <Link
            href={href && route(href)}
            className={`rounded-r-full px-4 py-2 transition-colors  ${
                active
                    ? 'bg-gray-800 text-white hover:bg-gray-700'
                    : 'hover:bg-gray-800 hover:text-blue-50'
            }`}
        >
            {createElement(icon, { className: 'w-10 h-10' })}{' '}
            <span className="ml-3">{title}</span>
        </Link>
    );
}
