import { Link } from '@inertiajs/react';
import {
    AccessTime,
    AllInboxRounded,
    AttachEmailRounded,
    Delete,
    Diversity2,
    Fingerprint,
    FlagCircle,
    Groups,
    InboxRounded,
    MoveToInbox,
    PeopleAlt,
    Person3,
    Star,
    Storage
} from '@mui/icons-material';
import { useEffect } from 'react';
import { useState } from 'react';
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
        group: 'Data Surat',
        menus: [
            {
                icon: AllInboxRounded,
                title: 'Masuk',
                routeName: ''
            },
            {
                icon: MoveToInbox,
                title: 'Keluar',
                routeName: ''
            },
            {
                icon: AttachEmailRounded,
                title: 'Jenis',
                routeName: 'jenissurat.index'
            }
        ]
    },
    {
        group: 'Warga',
        menus: [
            {
                icon: FlagCircle,
                title: 'Aduan',
                routeName: '',
                notification: 12
            },
            {
                icon: InboxRounded,
                title: 'Pengajuan Surat',
                routeName: 'pengajuan.index'
            },
            {
                icon: Groups,
                title: 'Data Kependudukan',
                routeName: 'kependudukan.index'
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
            <div className="h-[calc(100vh-7.75rem)] overflow-y-auto">
                {menuList.map(({ group, menus }, i) => {
                    return (
                        <div
                            key={group}
                            className={`flex flex-col ${(i = 0
                                ? 'mt-3'
                                : 'mt-5')} pr-3 font-medium text-gray-500`}
                        >
                            <span className="ml-4 text-sm">
                                {group.toUpperCase()}
                            </span>
                            {menus.map(
                                (
                                    { icon, routeName, title, notification },
                                    key
                                ) => {
                                    return (
                                        <Sidemenu
                                            key={`menu-${key}`}
                                            icon={icon}
                                            title={title}
                                            href={routeName}
                                            notification={notification}
                                        />
                                    );
                                }
                            )}
                        </div>
                    );
                })}
            </div>
        </aside>
    );
}

function Sidemenu({ icon, title, href = '', notification = 0 }) {
    const isActive = () => {
        const currentRoute = route().current();
        return (
            currentRoute === href ||
            currentRoute.split('.')[0] === href.split('.')[0]
        );
    };

    const [active, setActive] = useState(isActive());
    useEffect(() => {
        setActive(isActive());
    }, []);

    return (
        <Link
            href={href && route(href)}
            className={`flex items-center justify-between rounded-r-lg px-4 py-2 transition-colors  ${
                active
                    ? 'bg-gray-100 font-bold text-gray-800 hover:text-gray-700'
                    : 'hover:font-bold hover:text-gray-800'
            }`}
        >
            <div className="flex items-center">
                {createElement(icon, { className: 'w-10 h-10' })}{' '}
                <span className="ml-3">{title}</span>
            </div>
            {notification > 0 && (
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-gray-800 p-1 text-xs text-gray-100">
                    {notification > 99 ? '99+' : notification}
                </span>
            )}
        </Link>
    );
}
