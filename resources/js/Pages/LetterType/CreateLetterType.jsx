import Checkbox from '@/Components/Checkbox';
import DangerButton from '@/Components/DangerButton';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import Modal from '@/Components/Modal';
import PrimaryButton from '@/Components/PrimaryButton';
import SecondaryButton from '@/Components/SecondaryButton';
import SelectInput from '@/Components/SelectInput';
import TextInput from '@/Components/TextInput';
import { useForm } from '@inertiajs/react';
import { Add, Delete, DeleteOutline } from '@mui/icons-material';
import React from 'react';
import { useState } from 'react';

const reqFileType = [
    { value: '.jpg,.png,.jpeg,.pdf', label: 'Gambar atau PDF' },
    { value: '.jpg,.png,.jpeg', label: 'Gambar' },
    { value: '.pdf', label: 'PDF' },
    { value: '.docx, .doc', label: 'Dokumen (docx/doc)' }
];

export default function CreateLetterType({ show, close }) {
    const { data, setData, post, errors, processing } = useForm({
        name: '',
        description: '',
        requirements: [{ name: '', type: '', required: true }]
    });

    const [req, setReq] = useState([
        {
            name: 'KTP/KK',
            type: '.jpg,.png,.jpeg,.pdf',
            required: true
        }
    ]);

    const handleCancel = () => {
        close();
        const reqq = [...req];
        reqq.splice(1, req.length - 1);
        setReq(reqq);
    };

    const submitLetterType = (e) => {
        e.preventDefault();
        setData('requirements', req);
    };

    const handleRequirements = () => {
        const newRequirement = {
            name: '',
            type: '.jpg,.png,.jpeg,.pdf',
            required: false
        };
        setReq([...req, newRequirement]);
        setData('requirements', req);
    };

    const handleRequirementsInput = (index, updatedProperties) => {
        const updatedReq = [...req];
        updatedReq[index] = {
            ...updatedReq[index],
            ...updatedProperties
        };
        setReq(updatedReq);
        setData('requirements', req);
    };

    const handleRemoveReq = (index) => {
        const updatedReq = req.filter((_, i) => i !== index);
        setReq(updatedReq);
    };

    return (
        <Modal show={show} onClose={close}>
            <form
                className="w-full px-2 py-4 md:p-6"
                onSubmit={submitLetterType}
            >
                <h1 className="text-2xl font-medium text-gray-900">
                    Tambah Data
                </h1>

                <div className="mt-4">
                    <InputLabel htmlFor="name" value="Nama Surat" required />
                    <TextInput
                        id="name"
                        name="name"
                        value={data.name}
                        placeholder="Surat Keterangan"
                        className="mt-1 block w-full"
                        autoComplete="name"
                        onChange={(e) => setData('name', e.target.value)}
                        required
                    />
                    <InputError message={errors.nik} className="mt-2" />
                </div>
                <div className="mt-4">
                    <InputLabel htmlFor="description" value="Deskripsi surat" />
                    <TextInput
                        id="description"
                        name="description"
                        value={data.description}
                        placeholder="Surat Keterangan Perpindahan Penduduk dari bagian sosial"
                        className="mt-1 block w-full"
                        autoComplete="description"
                        onChange={(e) => setData('description', e.target.value)}
                        required
                    />
                    <InputError message={errors.description} className="mt-2" />
                </div>
                {req.map((r, index) => {
                    const isFirst = index == 0;
                    const isLast = index == req.length - 1;
                    return (
                        <div className="mt-4" key={index}>
                            <div className="flex flex-col items-center rounded-md border border-gray-300 px-1 py-1 md:flex-row md:justify-start md:border-none md:px-0">
                                <div className="flex w-full items-center gap-2">
                                    <div className="w-full md:w-fit">
                                        <InputLabel
                                            htmlFor="reqname"
                                            value="Nama Persyaratan"
                                            required
                                        />
                                        <TextInput
                                            id="reqname"
                                            name="reqname"
                                            placeholder=""
                                            className="mt-1 block w-full"
                                            autoComplete="reqname"
                                            value={r.name}
                                            onChange={(e) =>
                                                handleRequirementsInput(index, {
                                                    name: e.target.value
                                                })
                                            }
                                            required
                                        />
                                        <InputError
                                            message=""
                                            className="mt-2"
                                        />
                                    </div>
                                    <div className="w-full md:w-fit">
                                        <InputLabel
                                            htmlFor="filetype"
                                            value="Tipe File"
                                            required
                                        />
                                        <SelectInput
                                            id="filetype"
                                            options={reqFileType}
                                            className="mt-1 block w-full"
                                            onChange={(e) =>
                                                handleRequirementsInput(index, {
                                                    type: e.target.value
                                                })
                                            }
                                        />
                                        <InputError className="mt-2" />
                                    </div>
                                </div>
                                <div className="flex items-center gap-x-4 md:gap-x-0">
                                    <div className="flex flex-col items-center">
                                        <span className="invisible">as</span>
                                        <label className="flex items-center gap-1 text-sm">
                                            <Checkbox
                                                checked={r.required}
                                                onChange={() =>
                                                    handleRequirementsInput(
                                                        index,
                                                        {
                                                            required:
                                                                !r.required
                                                        }
                                                    )
                                                }
                                            />
                                            <span>Required</span>
                                        </label>
                                    </div>
                                    <div
                                        className={`flex flex-col items-center ${
                                            !isFirst ? 'visible' : 'invisible'
                                        }`}
                                    >
                                        <span className="invisible">as</span>
                                        <button
                                            type="button"
                                            className="flex cursor-pointer items-center justify-center rounded-lg p-2 transition-colors hover:bg-red-500 hover:text-gray-100 focus:bg-red-600 focus:text-gray-100 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 active:bg-red-600"
                                            onClick={() =>
                                                handleRemoveReq(index)
                                            }
                                        >
                                            <DeleteOutline fontSize="small" />
                                        </button>
                                    </div>
                                    <div
                                        className={`flex flex-col items-center ${
                                            isLast ? 'visible' : 'invisible'
                                        }`}
                                    >
                                        <span className="invisible">as</span>
                                        <button
                                            type="button"
                                            className="flex cursor-pointer items-center justify-center rounded-lg p-2 transition-colors hover:bg-gray-800 hover:text-white focus:bg-gray-700 focus:text-white focus:outline-none focus:ring-2 focus:ring-gray-800 focus:ring-offset-2 active:bg-gray-700"
                                            onClick={handleRequirements}
                                        >
                                            <Add fontSize="small" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}

                <div className="mt-10 flex justify-end">
                    <SecondaryButton onClick={handleCancel}>
                        Batal
                    </SecondaryButton>
                    <PrimaryButton className="ml-3" type="submit">
                        Simpan
                    </PrimaryButton>
                </div>
            </form>
        </Modal>
    );
}
