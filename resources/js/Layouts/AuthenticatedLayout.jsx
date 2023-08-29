import { useState } from 'react';
import Sidebar from './partials/Sidebar';
import Navbar from './partials/Navbar';

export default function Authenticated({ user, header, children }) {
    return (
        <section className="flex h-screen w-screen flex-row">
            <Sidebar />
            <section className="z-0 w-screen bg-gray-50 md:ml-64 md:w-[calc(100vw-16rem)]">
                <Navbar />
                <main className="relative h-screen w-full text-gray-700">
                    <div className="overflow-hidden">{children}</div>
                </main>
            </section>
        </section>
    );
}
