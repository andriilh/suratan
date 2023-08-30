import Checkbox from '@/Components/Checkbox';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import Authenticated from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { Add, Search } from '@mui/icons-material';
import React from 'react';
import LetterTypeTable from './Partials/LetterTypeTable';
import CreateLetterType from './CreateLetterType';
import { useState } from 'react';
import Fab from '@/Components/Fab';

export default function LetterType() {
    const [openModalCreate, setOpenModalCreate] = useState(false);
    return (
        <Authenticated>
            <Head title="Jenis Surat" />
            <div className="p-6 text-gray-900">
                <h1 className="text-lg md:text-3xl">Kelola Jenis Surat</h1>
                <p className="mt-1 font-normal text-gray-500">
                    Berisi seluruh jenis surat yang dapat diajukan atau yang
                    tersedia.
                </p>
                <div className="relative mt-6 overflow-x-auto overflow-y-visible rounded-lg bg-white p-5 shadow-md md:mt-10">
                    <div className="mb-4 mt-1 flex items-center md:justify-between">
                        <div>
                            <label htmlFor="table-search" className="sr-only">
                                Search
                            </label>
                            <div className="relative">
                                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                                    <Search className="h-4 w-4 text-gray-500" />
                                </div>
                                <TextInput
                                    className="pl-10"
                                    placeholder="Search for items"
                                />
                            </div>
                        </div>
                        <div className="hidden md:inline">
                            <PrimaryButton
                                onClick={() => setOpenModalCreate(true)}
                            >
                                <Add fontSize="small" className="mr-2" />
                                Tambah Data
                            </PrimaryButton>
                        </div>
                    </div>
                    <LetterTypeTable />
                </div>
            </div>
            <CreateLetterType
                show={openModalCreate}
                close={() => setOpenModalCreate(false)}
            />

            <Fab className="md:hidden" />
        </Authenticated>
    );
}
