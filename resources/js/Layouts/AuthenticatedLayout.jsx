import { useState } from 'react';
import Sidebar from './partials/Sidebar';
import Navbar from './partials/Navbar';

export default function Authenticated({ user, header, children }) {
    const [showingNavigationDropdown, setShowingNavigationDropdown] =
        useState(false);

    return (
        <section className="flex h-screen w-screen flex-row">
            <Sidebar />
            <section className="z-0 w-screen md:ml-64 md:w-[calc(100vw-16rem)]">
                <Navbar />
                <main className="mx-auto h-screen w-full max-w-7xl bg-gray-50 text-gray-700">
                    <div className="overflow-hidden">{children}</div>
                </main>
            </section>
        </section>
    );
}
