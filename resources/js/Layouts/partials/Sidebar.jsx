import { Link } from '@inertiajs/react';
import {
    AccessTime,
    Delete,
    Diversity2,
    Fingerprint,
    FlagCircle,
    InboxRounded,
    PeopleAlt,
    Person3,
    Star,
    Storage
} from '@mui/icons-material';
import { createElement } from 'react';

const menuList = [
    {
        group: 'Dashboard',
        menus: [
            {
                icon: Fingerprint,
                title: 'Dashboard',
                routeName: 'dashboard'
            }
        ]
    },
    {
        group: 'Warga',
        menus: [
            {
                icon: FlagCircle,
                title: 'Aduan',
                routeName: ''
            },
            {
                icon: InboxRounded,
                title: 'Pengajuan Surat',
                routeName: ''
            },
            {
                icon: InboxRounded,
                title: 'Data Kependudukan',
                routeName: ''
            }
        ]
    },
    {
        group: 'Pegawai',
        menus: [
            {
                icon: Person3,
                title: 'Data Pegawai',
                routeName: ''
            },
            {
                icon: Person3,
                title: 'Absensi',
                routeName: ''
            }
        ]
    },
    {
        group: 'User',
        menus: [
            {
                icon: Person3,
                title: 'Profile',
                routeName: 'profile.edit'
            }
        ]
    }
];

export default function Sidebar() {
    return (
        <aside className="fixed left-0 top-0 z-40 ml-0 h-screen w-64 -translate-x-full border border-l-2 transition-transform md:translate-x-0">
            <div className="px-4 py-10">
                <span className="text-4xl font-bold text-gray-800">
                    Suratan
                </span>
            </div>
            {menuList.map(({ group, menus }, i) => {
                return (
                    <div
                        className={`flex flex-col ${(i = 0
                            ? 'mt-3'
                            : 'mt-5')} pr-3 font-medium text-gray-500`}
                    >
                        <span className="ml-4 text-sm">
                            {group.toUpperCase()}
                        </span>
                        {menus.map(({ icon, routeName, title }, key) => {
                            return (
                                <Sidemenu
                                    icon={icon}
                                    title={title}
                                    href={routeName}
                                />
                            );
                        })}
                    </div>
                );
            })}
        </aside>
    );
}

function Sidemenu({ icon, title, href = '' }) {
    const active = href && route().current(href) ? true : false;
    return (
        <Link
            href={href && route(href)}
            className={`rounded-r-lg px-4 py-2 transition-colors  ${
                active
                    ? 'bg-gray-100/80 font-bold text-gray-800 hover:text-gray-700'
                    : 'hover:font-bold hover:text-gray-800'
            }`}
        >
            {createElement(icon, { className: 'w-10 h-10' })}{' '}
            <span className="ml-3">{title}</span>
        </Link>
    );
}
