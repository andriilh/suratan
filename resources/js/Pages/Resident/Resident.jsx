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
    const [confirmDelete, setConfirmDelete] = useState({
        id: '',
        show: false
    });
    const [query, setQuery] = useState(urlParams.get('search') || '');

    const handleSearchInput = (e) => {
        setQuery(e.target.value);
    };

    useEffect(() => {
        const urlParamss = new URLSearchParams(window.location.search);
        const params = {};

        if (query !== '') {
            params.search = query;
        }

        // Exclude 'search' parameter if present
        for (const [key, value] of urlParamss.entries()) {
            if (key !== 'search') {
                params[key] = value;
            }
        }

        const timer = setTimeout(() => {
            router.get(route('kependudukan.index'), params, {
                preserveState: true
            });
        }, 500);

        return () => {
            clearTimeout(timer);
        };
    }, [query]);

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
                            {residents.data.length > 0 ? (
                                residents.data.map(
                                    ({
                                        id,
                                        nama,
                                        nik,
                                        agama,
                                        sex,
                                        telpon,
                                        alamat
                                    }) => {
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
                                                <td className="px-6 py-4">
                                                    {nik}
                                                </td>
                                                <td className="px-6 py-4">
                                                    {sex}
                                                </td>
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
                                                    <MoreButton
                                                        onClick={() => {
                                                            setConfirmDelete({
                                                                id: id,
                                                                show: false
                                                            });
                                                        }}
                                                        show={route(
                                                            'kependudukan.show',
                                                            id
                                                        )}
                                                        destroyAction={(e) => {
                                                            e.stopPropagation();
                                                            setConfirmDelete({
                                                                id: confirmDelete.id,
                                                                show: true
                                                            });
                                                        }}
                                                    />
                                                </td>
                                            </tr>
                                        );
                                    }
                                )
                            ) : (
                                <tr className="border-b text-center">
                                    <td className="py-4" colSpan={7}>
                                        Tidak ada data yang dapat ditampilkan
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                    <div className="mt-4 flex text-sm text-gray-500 md:justify-between">
                        <div className="hidden md:block">
                            Menampilkan {residents.meta.to} dari total{' '}
                            {residents.meta.total} data
                        </div>
                        {residents.meta.per_page <= residents.meta.total && (
                            <Pagination
                                meta={residents.meta}
                                links={residents.links}
                            />
                        )}
                    </div>
                </div>
            </div>
            <ModalConfirmDelete
                show={confirmDelete.show}
                close={() =>
                    setConfirmDelete({ id: confirmDelete.id, show: false })
                }
                id={confirmDelete.id}
            />
        </Authenticated>
    );
}

function MoreButton({ destroyAction, show, edit, ...props }) {
    return (
        <div {...props}>
            <Dropdown>
                <Dropdown.Trigger>
                    <Tooltip tooltip="aksi">
                        <button>
                            <MoreHoriz />
                        </button>
                    </Tooltip>
                </Dropdown.Trigger>
                <Dropdown.Content contentClasses="py-1 bg-white z-50">
                    <Dropdown.Link href={show}>Lihat</Dropdown.Link>
                    <Dropdown.Link>Edit</Dropdown.Link>
                    <button
                        className="block w-full px-4 py-2 text-left text-sm leading-5 text-red-500 transition duration-150 ease-in-out hover:bg-red-100 focus:bg-red-100 focus:outline-none"
                        onClick={destroyAction}
                    >
                        Hapus
                    </button>
                </Dropdown.Content>
            </Dropdown>
        </div>
    );
}

function ModalConfirmDelete({ show, close, id }) {
    const {
        data,
        setData,
        delete: destroy,
        processing
    } = useForm({
        id: ''
    });

    const deleteResident = () => {
        setData('id', id);
        destroy(route('kependudukan.destroy', id), {
            onSuccess: () => {
                close();
            },
            onError: (err) => {
                console.log(err);
            }
        });
    };

    return (
        <Modal show={show} onClose={close}>
            <div className="p-6">
                <h2 className="text-lg font-medium text-gray-900">
                    Yakin ingin menghapus data ini?
                </h2>

                <p className="mt-1 text-sm text-gray-600">
                    Jika dihapus, data warga ini akan hilang secara permanen dan
                    tidak dapat dikembalikan.
                </p>

                <div className="mt-6 flex justify-end">
                    <SecondaryButton onClick={close}>Batal</SecondaryButton>

                    <DangerButton
                        className="ml-3"
                        disabled={processing}
                        onClick={() => deleteResident()}
                    >
                        Hapus
                    </DangerButton>
                </div>
            </div>
        </Modal>
    );
}
