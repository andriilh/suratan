import Checkbox from '@/Components/Checkbox';
import DangerButton from '@/Components/DangerButton';
import Dropdown from '@/Components/Dropdown';
import Fab from '@/Components/Fab';
import Modal from '@/Components/Modal';
import Pagination from '@/Components/Pagination';
import SecondaryButton from '@/Components/SecondaryButton';
import TextInput from '@/Components/TextInput';
import Tooltip from '@/Components/Tooltip';
import Authenticated from '@/Layouts/AuthenticatedLayout';
import { Head, Link, useForm, router } from '@inertiajs/react';
import { MoreHoriz, Search } from '@mui/icons-material';
import { useEffect } from 'react';
import { useState } from 'react';

export default function Kependudukan({ residents }) {
    const urlParams = new URLSearchParams(window.location.search);

    const [confirmDelete, setConfirmDelete] = useState(false);
    const [query, setQuery] = useState(
        urlParams.get('search') ? urlParams.get('search') : ''
    );

    const {
        data,
        setData,
        delete: destroy,
        processing
    } = useForm({
        nik: ''
    });

    const deleteResident = () => {
        destroy(route('kependudukan.destroy', data.nik), {
            onSuccess: () => {
                onClose();
            }
        });
    };

    const handleSearchInput = (e) => {
        setQuery(e.target.value);
    };

    // useEffect(() => {
    //     const timer = setTimeout(() => {
    //         // console.log(query === '');
    //         if (query === '') {
    //             router.get(
    //                 route('kependudukan.index'),
    //                 {},
    //                 { preserveState: true }
    //             );
    //         } else {
    //             router.get(
    //                 route('kependudukan.index'),
    //                 { search: query },
    //                 { preserveState: true }
    //             );
    //         }
    //     }, 500);
    //     return () => clearTimeout(timer);
    // }, [query]);

    return (
        <Authenticated>
            <Head title="Data Warga" />
            <div className="p-6 text-gray-900">
                <Link href={route('kependudukan.create')}>
                    <Fab tooltip="Tambah Data" />
                </Link>
                <h1 className="text-lg md:text-2xl">Data Warga</h1>
                <p className="mt-1 font-normal text-gray-500">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Non eius doloremque magnam quod sequi omnis alias ipsum
                    obcaecati, et laboriosam!
                </p>
                <div className="relative mt-6 overflow-x-auto overflow-y-visible rounded-lg bg-white p-5 shadow-md md:mt-10">
                    <label htmlFor="table-search" className="sr-only">
                        Search
                    </label>
                    <div className="relative mb-4 mt-1">
                        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                            <Search className="h-4 w-4 text-gray-500" />
                        </div>
                        <TextInput
                            className="pl-10"
                            placeholder="Search for items"
                            value={query}
                            onChange={handleSearchInput}
                        />
                    </div>
                    <table className="w-full text-left text-sm text-gray-500">
                        <thead className="bg-gray-50 text-xs uppercase text-gray-700">
                            <tr>
                                <th scope="col" className="p-4">
                                    <Checkbox className="h-4 w-4" />
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Nama
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    NIK
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Jenis Kelamin
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Agama
                                </th>
                                <th
                                    scope="col"
                                    className="hidden px-6 py-3 2xl:table-cell"
                                >
                                    Nomor Telepon
                                </th>
                                <th
                                    scope="col"
                                    className="hidden px-6 py-3 2xl:table-cell"
                                >
                                    Alamat
                                </th>
                                <th scope="col" className="px-6 py-3"></th>
                            </tr>
                        </thead>
                        <tbody>
                            {residents.data.map(
                                ({ nama, nik, agama, sex, telpon, alamat }) => {
                                    return (
                                        <tr
                                            key={nik}
                                            className="border-b hover:bg-gray-100"
                                        >
                                            <td className="w-4 p-4">
                                                <Checkbox className="h-4 w-4" />
                                            </td>
                                            <td className="px-6 py-4 md:whitespace-nowrap">
                                                {nama}
                                            </td>
                                            <td className="px-6 py-4">{nik}</td>
                                            <td className="px-6 py-4">{sex}</td>
                                            <td className="px-6 py-4">
                                                {agama}
                                            </td>
                                            <td className="hidden px-6 py-4 2xl:table-cell">
                                                {telpon}
                                            </td>
                                            <td className="hidden px-6 py-4 2xl:table-cell">
                                                {alamat}
                                            </td>

                                            <td className="relative px-6 py-4">
                                                <Dropdown>
                                                    <Dropdown.Trigger>
                                                        <Tooltip tooltip="aksi">
                                                            <button>
                                                                <MoreHoriz />
                                                            </button>
                                                        </Tooltip>
                                                    </Dropdown.Trigger>
                                                    <Dropdown.Content contentClasses="py-1 bg-white z-50">
                                                        <Dropdown.Link>
                                                            Lihat
                                                        </Dropdown.Link>
                                                        <Dropdown.Link>
                                                            Edit
                                                        </Dropdown.Link>
                                                        <button
                                                            className="block w-full px-4 py-2 text-left text-sm leading-5 text-red-500 transition duration-150 ease-in-out hover:bg-red-100 focus:bg-red-100 focus:outline-none"
                                                            onClick={() => {
                                                                setConfirmDelete(
                                                                    true
                                                                );
                                                                setData(
                                                                    'nik',
                                                                    nik
                                                                );
                                                            }}
                                                        >
                                                            Hapus
                                                        </button>
                                                    </Dropdown.Content>
                                                </Dropdown>
                                                <Modal
                                                    show={confirmDelete}
                                                    onClose={() =>
                                                        setConfirmDelete(false)
                                                    }
                                                >
                                                    <form
                                                        onSubmit={
                                                            deleteResident
                                                        }
                                                        className="p-6"
                                                    >
                                                        <h2 className="text-lg font-medium text-gray-900">
                                                            Yakin ingin
                                                            menghapus data ini?
                                                        </h2>

                                                        <p className="mt-1 text-sm text-gray-600">
                                                            Jika dihapus, data
                                                            warga ini akan
                                                            hilang secara
                                                            permanen dan tidak
                                                            dapat dikembalikan.
                                                        </p>

                                                        <div className="mt-6 flex justify-end">
                                                            <SecondaryButton
                                                                onClick={() =>
                                                                    setConfirmDelete(
                                                                        false
                                                                    )
                                                                }
                                                            >
                                                                Batal
                                                            </SecondaryButton>

                                                            <DangerButton
                                                                className="ml-3"
                                                                disabled={
                                                                    processing
                                                                }
                                                            >
                                                                Hapus
                                                            </DangerButton>
                                                        </div>
                                                    </form>
                                                </Modal>
                                            </td>
                                        </tr>
                                    );
                                }
                            )}
                        </tbody>
                    </table>
                    <div className="mt-4 flex text-sm text-gray-500 md:justify-between">
                        <div className="hidden md:block">
                            Menampilkan {residents.meta.to} dari total{' '}
                            {residents.meta.total} data
                        </div>
                        <Pagination
                            meta={residents.meta}
                            links={residents.links}
                        />
                    </div>
                </div>
            </div>
        </Authenticated>
    );
}
