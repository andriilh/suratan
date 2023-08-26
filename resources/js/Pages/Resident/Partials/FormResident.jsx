import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import SecondaryButton from '@/Components/SecondaryButton';
import SelectInput from '@/Components/SelectInput';
import TextAreaInput from '@/Components/TextAreaInput';
import TextInput from '@/Components/TextInput';
import { Transition } from '@headlessui/react';
import { Link, useForm } from '@inertiajs/react';
import { selectResidents } from './residentsSelects';

export default function FormResident({ mode = 'create' }) {
    const {
        data,
        setData,
        post,
        processing,
        errors,
        reset,
        recentlySuccessful
    } = useForm({
        nik: '',
        nama: '',
        sex: '',
        pob: '',
        dob: '',
        alamat: '',
        pekerjaan: '',
        perkawinan: '',
        agama: '',
        telpon: '',
        goldar: '',
        kewarganegaraan: ''
    });

    function handleInputNumber(event, field) {
        const newValue = event.target.value;

        // Validate the input
        if (/^[0-9]+$/.test(newValue)) {
            setData(field, newValue);
        }
    }

    const submit = (e) => {
        e.preventDefault();
        post(route('kependudukan.store'), {
            preserveScroll: true,
            onSuccess: () => reset()
        });
    };
    return (
        <form
            className="flex max-w-screen-xl flex-col gap-y-4"
            onSubmit={submit}
        >
            <div className="flex flex-wrap gap-4 lg:flex-nowrap">
                <div className="w-full">
                    <InputLabel htmlFor="nama" value="Nama" required />
                    <TextInput
                        id="nama"
                        name="name"
                        value={data.nama}
                        placeholder="Budiman Jaya"
                        className="mt-1 block w-full"
                        autoComplete="nama"
                        isFocused={true}
                        onChange={(e) => setData('nama', e.target.value)}
                        required
                    />
                    <InputError message={errors.nama} className="mt-2" />
                </div>
                <div className="w-full">
                    <InputLabel htmlFor="nik" value="NIK" required />
                    <TextInput
                        id="nik"
                        name="nik"
                        value={data.nik}
                        placeholder="1234567890123456"
                        className="mt-1 block w-full"
                        autoComplete="nik"
                        onChange={(e) => handleInputNumber(e, 'nik')}
                        required
                    />
                    <InputError message={errors.nik} className="mt-2" />
                </div>
            </div>
            <div className="flex flex-wrap gap-4 lg:flex-nowrap">
                <div className="w-full">
                    <InputLabel htmlFor="agama" value="Agama" required />
                    <SelectInput
                        id="agama"
                        options={selectResidents.agama}
                        value={data.agama}
                        className="mt-1 block w-full"
                        onChange={(e) => setData('agama', e.target.value)}
                    />
                    <InputError message={errors.agama} className="mt-2" />
                </div>
                <div className="w-full">
                    <InputLabel htmlFor="sex" value="Jenis Kelamin" required />
                    <SelectInput
                        id="sex"
                        options={selectResidents.sex}
                        value={data.sex}
                        className="mt-1 block w-full"
                        onChange={(e) => setData('sex', e.target.value)}
                    />
                    <InputError message={errors.sex} className="mt-2" />
                </div>
            </div>
            <div className="flex flex-wrap gap-4 lg:flex-nowrap">
                <div className="w-full">
                    <InputLabel htmlFor="pob" value="Tempat Lahir" required />
                    <TextInput
                        id="pob"
                        name="city"
                        value={data.pob}
                        placeholder="Jakarta"
                        className="mt-1 block w-full"
                        autoComplete="pob"
                        onChange={(e) => setData('pob', e.target.value)}
                        required
                    />
                    <InputError message={errors.pob} className="mt-2" />
                </div>
                <div className="w-full">
                    <InputLabel htmlFor="pob" value="Tanggal Lahir" required />
                    <TextInput
                        id="dob"
                        type="date"
                        name="dob"
                        value={data.dob}
                        className="mt-1 block w-full"
                        autoComplete="dob"
                        onChange={(e) => setData('dob', e.target.value)}
                        required
                    />
                    <InputError message={errors.dob} className="mt-2" />
                </div>
            </div>
            <div className="flex flex-wrap gap-4 lg:flex-nowrap">
                <div className="w-full">
                    <InputLabel
                        htmlFor="pekerjaan"
                        value="Pekerjaan"
                        required
                    />
                    <SelectInput
                        id="pekerjaan"
                        options={selectResidents.job}
                        value={data.pekerjaan}
                        className="mt-1 block w-full"
                        onChange={(e) => setData('pekerjaan', e.target.value)}
                    />
                    <InputError message={errors.pekerjaan} className="mt-2" />
                </div>
                <div className="w-full">
                    <InputLabel
                        htmlFor="perkawinan"
                        value="Status Perkawinan"
                        required
                    />
                    <SelectInput
                        id="perkawinan"
                        options={selectResidents.marriage}
                        value={data.perkawinan}
                        className="mt-1 block w-full"
                        onChange={(e) => setData('perkawinan', e.target.value)}
                    />
                    <InputError message={errors.perkawinan} className="mt-2" />
                </div>
            </div>
            <div className="flex flex-wrap gap-4 lg:flex-nowrap">
                <div className="w-full">
                    <InputLabel
                        htmlFor="goldar"
                        value="Golongan Darah"
                        required
                    />
                    <SelectInput
                        id="goldar"
                        options={selectResidents.blood}
                        value={data.goldar}
                        className="mt-1 block w-full"
                        onChange={(e) => setData('goldar', e.target.value)}
                    />
                    <InputError message={errors.goldar} className="mt-2" />
                </div>
                <div className="w-full">
                    <InputLabel
                        htmlFor="kewarganegaraan"
                        value="Kewarganegaraan"
                        required
                    />
                    <SelectInput
                        id="kewarganegaraan"
                        options={selectResidents.citizen}
                        value={data.kewarganegaraan}
                        className="mt-1 block w-full"
                        onChange={(e) =>
                            setData('kewarganegaraan', e.target.value)
                        }
                    />
                    <InputError
                        message={errors.kewarganegaraan}
                        className="mt-2"
                    />
                </div>
            </div>
            <div>
                <InputLabel htmlFor="pob" value="Nomor Telepon" />
                <TextInput
                    id="telephone"
                    name="telephone"
                    value={data.telpon}
                    className="mt-1 block w-full"
                    autoComplete="telephone"
                    onChange={(e) => handleInputNumber(e, 'telpon')}
                    required
                />
                <InputError message={errors.telpon} className="mt-2" />
            </div>
            <div>
                <InputLabel htmlFor="alamat" value="Alamat" required />
                <TextAreaInput
                    id="alamat"
                    name="alamat"
                    value={data.alamat}
                    className="mt-1 block w-full"
                    autoComplete="alamat"
                    onChange={(e) => setData('alamat', e.target.value)}
                    required
                />
                <InputError message={errors.alamat} className="mt-2" />
            </div>
            <div className="flex items-center justify-end gap-x-6 transition-all">
                <Link as="a" href={route('kependudukan.index')}>
                    <SecondaryButton>Batal</SecondaryButton>
                </Link>
                <Transition
                    show={recentlySuccessful}
                    enter="transition ease-in-out"
                    enterFrom="opacity-0"
                    leave="transition ease-in-out"
                    leaveTo="opacity-0"
                >
                    <p className="text-sm text-gray-600">Data Tersimpan</p>
                </Transition>
                <PrimaryButton type="submit" disabled={processing}>
                    Simpan
                </PrimaryButton>
            </div>
        </form>
    );
}
