import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import SecondaryButton from '@/Components/SecondaryButton';
import SelectInput from '@/Components/SelectInput';
import TextAreaInput from '@/Components/TextAreaInput';
import TextInput from '@/Components/TextInput';
import Authenticated from '@/Layouts/AuthenticatedLayout';
import { Head, Link, useForm } from '@inertiajs/react';
// import countries from './countries';

// console.log(countries);

const agama = [
    { value: 'Islam', label: 'Islam' },
    { value: 'Kristen', label: 'Kristen' },
    { value: 'Protestan', label: 'Protestan' },
    { value: 'Hindu', label: 'Hindu' },
    { value: 'Budha', label: 'Budha' },
    { value: 'Konghucu', label: 'Konghucu' },
    { value: 'Agama Lokal', label: 'Agama Lokal' },
    { value: '-', label: '-' }
];

const sex = [
    { value: 'Laki-Laki', label: 'Laki-Laki' },
    { value: 'Perempuan', label: 'Perempuan' }
];

const job = [
    {
        value: 'Pegawai Negeri Sipil (PNS)',
        label: 'Pegawai Negeri Sipil (PNS)'
    },
    { value: 'Pegawai BUMN', label: 'Pegawai BUMN' },
    { value: 'Swasta', label: 'Swasta' },
    { value: 'Wirausaha', label: 'Wirausaha' },
    { value: 'Petani', label: 'Petani' },
    { value: 'Nelayan', label: 'Nelayan' },
    { value: 'Buruh', label: 'Buruh' },
    { value: 'Pensiunan', label: 'Pensiunan' },
    { value: 'Pelajar/Mahasiswa', label: 'Pelajar/Mahasiswa' },
    { value: 'Belum Bekerja', label: 'Belum Bekerja' },
    { value: 'Lainnya', label: 'Lainnya' }
];

const marriage = [
    { value: 'Belum Kawin', label: 'Belum Kawin' },
    { value: 'Kawin', label: 'Kawin' },
    { value: 'Cerai Hidup', label: 'Cerai Hidup' },
    { value: 'Cerai Mati', label: 'Cerai Mati' }
];

const blood = [
    { value: '-', label: '-' },
    { value: 'O', label: 'O' },
    { value: 'A', label: 'A' },
    { value: 'B', label: 'B' },
    { value: 'AB', label: 'AB' }
];

const citizen = [
    { value: 'Indonesia', label: 'Indonesia' },
    { value: 'Asing', label: 'Asing' }
];

export default function CreateResident() {
    const { data, setData, post, processing, errors, reset } = useForm({
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

    const handleInputNik = (event) => {
        const newValue = event.target.value;

        // Validate the input
        if (/^[0-9]+$/.test(newValue)) {
            setData('nik', newValue);
        }
    };

    return (
        <Authenticated>
            <Head title="Tambah Data Warga" />
            <div className="p-6 text-gray-900">
                <h1 className="text-lg md:text-2xl">Data Warga Baru</h1>
                <div className="relative mt-6 rounded-lg bg-white p-5 shadow-md md:mt-10">
                    <form className="flex flex-col gap-y-4">
                        <div className="flex flex-wrap gap-4 lg:flex-nowrap">
                            <div className="w-full">
                                <InputLabel
                                    htmlFor="nama"
                                    value="Nama"
                                    required
                                />
                                <TextInput
                                    id="nama"
                                    name="name"
                                    value={data.nama}
                                    placeholder="Budiman Jaya"
                                    className="mt-1 block w-full"
                                    autoComplete="nama"
                                    isFocused={true}
                                    onChange={(e) =>
                                        setData('nama', e.target.value)
                                    }
                                    required
                                />
                                <InputError
                                    message={errors.nama}
                                    className="mt-2"
                                />
                            </div>
                            <div className="w-full">
                                <InputLabel
                                    htmlFor="nik"
                                    value="NIK"
                                    required
                                />
                                <TextInput
                                    id="nik"
                                    name="nik"
                                    value={data.nik}
                                    placeholder="1234567890123456"
                                    className="mt-1 block w-full"
                                    autoComplete="nik"
                                    onChange={handleInputNik}
                                    required
                                />
                                <InputError
                                    message={errors.nik}
                                    className="mt-2"
                                />
                            </div>
                        </div>
                        <div className="flex flex-wrap gap-4 lg:flex-nowrap">
                            <div className="w-full">
                                <InputLabel
                                    htmlFor="agama"
                                    value="Agama"
                                    required
                                />
                                <SelectInput
                                    id="agama"
                                    options={agama}
                                    value={data.agama}
                                    className="mt-1 block w-full"
                                    onChange={(e) =>
                                        setData('agama', e.target.value)
                                    }
                                />
                                <InputError
                                    message={errors.agama}
                                    className="mt-2"
                                />
                            </div>
                            <div className="w-full">
                                <InputLabel
                                    htmlFor="sex"
                                    value="Jenis Kelamin"
                                    required
                                />
                                <SelectInput
                                    id="sex"
                                    options={sex}
                                    value={data.sex}
                                    className="mt-1 block w-full"
                                    onChange={(e) =>
                                        setData('sex', e.target.value)
                                    }
                                />
                                <InputError
                                    message={errors.sex}
                                    className="mt-2"
                                />
                            </div>
                        </div>
                        <div className="flex flex-wrap gap-4 lg:flex-nowrap">
                            <div className="w-full">
                                <InputLabel
                                    htmlFor="pob"
                                    value="Tempat Lahir"
                                    required
                                />
                                <TextInput
                                    id="pob"
                                    name="city"
                                    value={data.pob}
                                    className="mt-1 block w-full"
                                    autoComplete="pob"
                                    onChange={(e) =>
                                        setData('pob', e.target.value)
                                    }
                                    required
                                />
                                <InputError
                                    message={errors.pob}
                                    className="mt-2"
                                />
                            </div>
                            <div className="w-full">
                                <InputLabel
                                    htmlFor="pob"
                                    value="Tanggal Lahir"
                                    required
                                />
                                <TextInput
                                    id="dob"
                                    type="date"
                                    name="dob"
                                    value={data.dob}
                                    className="mt-1 block w-full"
                                    autoComplete="dob"
                                    isFocused={true}
                                    onChange={(e) =>
                                        setData('dob', e.target.value)
                                    }
                                    required
                                />
                                <InputError
                                    message={errors.dob}
                                    className="mt-2"
                                />
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
                                    options={job}
                                    value={data.pekerjaan}
                                    className="mt-1 block w-full"
                                    onChange={(e) =>
                                        setData('pekerjaan', e.target.value)
                                    }
                                />
                                <InputError
                                    message={errors.pekerjaan}
                                    className="mt-2"
                                />
                            </div>
                            <div className="w-full">
                                <InputLabel
                                    htmlFor="perkawinan"
                                    value="Status Perkawinan"
                                    required
                                />
                                <SelectInput
                                    id="perkawinan"
                                    options={marriage}
                                    value={data.perkawinan}
                                    className="mt-1 block w-full"
                                    onChange={(e) =>
                                        setData('perkawinan', e.target.value)
                                    }
                                />
                                <InputError
                                    message={errors.perkawinan}
                                    className="mt-2"
                                />
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
                                    options={blood}
                                    value={data.goldar}
                                    className="mt-1 block w-full"
                                    onChange={(e) =>
                                        setData('goldar', e.target.value)
                                    }
                                />
                                <InputError
                                    message={errors.goldar}
                                    className="mt-2"
                                />
                            </div>
                            <div className="w-full">
                                <InputLabel
                                    htmlFor="kewarganegaraan"
                                    value="Kewarganegaraan"
                                    required
                                />
                                <SelectInput
                                    id="kewarganegaraan"
                                    options={citizen}
                                    value={data.kewarganegaraan}
                                    className="mt-1 block w-full"
                                    onChange={(e) =>
                                        setData(
                                            'kewarganegaraan',
                                            e.target.value
                                        )
                                    }
                                />
                                <InputError
                                    message={errors.kewarganegaraan}
                                    className="mt-2"
                                />
                            </div>
                        </div>
                        <div>
                            <InputLabel
                                htmlFor="alamat"
                                value="Alamat"
                                required
                            />
                            <TextAreaInput
                                id="alamat"
                                name="alamat"
                                value={data.alamat}
                                className="mt-1 block w-full"
                                autoComplete="alamat"
                                onChange={(e) =>
                                    setData('alamat', e.target.value)
                                }
                                required
                            />
                            <InputError
                                message={errors.alamat}
                                className="mt-2"
                            />
                        </div>
                        <div className="flex justify-end gap-x-6">
                            <Link as="a" href={route('kependudukan.index')}>
                                <SecondaryButton>Batal</SecondaryButton>
                            </Link>
                            <PrimaryButton type="submit">Simpan</PrimaryButton>
                        </div>
                    </form>
                </div>
            </div>
        </Authenticated>
    );
}
