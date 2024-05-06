'use client';
import { useTranslation } from '@app/i18n/client';
import { Button } from '@components/templates/common/button';
import { Input } from '@components/templates/common/input';
import { InputGroup } from '@components/templates/common/input-group';
import { useHandleForm } from '@components/templates/hooks/useHandleForm';
import { XCircleIcon } from '@heroicons/react/24/outline';
import { EnvelopeIcon, ExclamationCircleIcon, PhoneIcon } from '@heroicons/react/24/solid';
import clsx from 'clsx';
import { useParams } from 'next/navigation';
import { type FC } from 'react';
import { Select } from 'react-daisyui';
import Image from '~/images/rectangle-657.png';

const LaunchWebsiteForm: FC = () => {
    const { useFormikLandingForm, isError } = useHandleForm();
    const { lng } = useParams<{lng: string}>();
    const { t } = useTranslation(lng);

    const { handleSubmit, errors, handleChange, values } = useFormikLandingForm;

    return (
        <div className="w-full relative md:-top-12 z-10 md:w-1/2 lg:pl-20 ">
            <div
                style={{
                    backgroundImage: `url(${Image})`,
                }}
                className="md:block hidden relative bg-center bg-white bg-cover bg-no-repeat h-28"
            >
                <p className="text-lg leading-5 text-black font-bold text-center mt-0 pt-8 ">
                    {t('freeForm.form.header1', 'LIMITED TIME OFFER:')}
                    <span className="text-red-500">
                        <del>$99 </del>
                        {t('freeForm.form.header2', 'STARTUP FEE WAIVED')}
                    </span>
                </p>
            </div>

            <div className="md:bg-white md:py-12 lg:px-8 md:px-3 md:rounded-b-lg">
                <h1 className="font-extrabold text-sky text-center md:block hidden text-4xl">
                    {t('freeForm.form.title', 'Get Your FREE')}
                </h1>
                <h2 className="text-4xl text-gray-800 font-extrabold text-center -mt-2 md:block hidden">
                    {t('freeForm.form.subtitle', 'Ready-to-Launch Website')}
                </h2>
                <form className="md:mt-10 mt-6 flex flex-col gap-3.5" id="form" onSubmit={handleSubmit}>
                    {isError && (
                        <div className="rounded-md bg-red-50 p-4 mb-5">
                            <div className="flex justify-center">
                                <div className="flex-shrink-0">
                                    <XCircleIcon className="h-5 w-5 text-red-400" aria-hidden="true" />
                                </div>
                                <div className="ml-3">
                                    <h3 className="text-sm font-medium text-red-800">
                                        {t('common.form.error', 'Something went wrong. Try again!')}
                                    </h3>
                                </div>
                            </div>
                        </div>
                    )}
                    <Input
                        label={`${t('common.form.fullNameLabel', 'Full Name')} (${t('common.form.required', 'Required')})*`}
                        name="fullName"
                        id="fullName"
                        placeholder={t('common.form.fullNamePlaceholder', 'Enter your full name')}
                        onChange={handleChange}
                        value={values.fullName}
                        color={errors.fullName ? 'error' : 'ghost'}
                        className={clsx('max-w-full w-full bg-white', errors.fullName && 'border-red-500 placeholder:text-red-500')}
                        iconRight={errors.fullName && <ExclamationCircleIcon className="w-5 h-5 text-red-600" />}
                        labelClassName="md:!text-gray-600 text-white"
                        data-tracking-input="name"
                        errorMessage={errors.fullName}
                    />

                    <InputGroup
                        name="phoneNumber"
                        label={`${t('common.form.phoneNumberLabel', 'Phone Number')} (${t('common.form.required', 'Required')})*`}
                        aria-placeholder="(555) 432-4371"
                        value={values.phoneNumber}
                        onChange={handleChange}
                        color={errors.phoneNumber ? 'error' : 'ghost'}
                        contentLeftClassName={clsx(errors.phoneNumber && 'border-red-500 rounded-lg rounded-r-none border-y border-l')}
                        className={clsx(
                            'max-w-full w-full !rounded-r-lg bg-white',
                            errors.phoneNumber && 'border-red-500 placeholder:text-red-500',
                        )}
                        labelClassName="md:!text-gray-600 text-white"
                        iconRight={
                            errors.phoneNumber ? (
                                <ExclamationCircleIcon className="w-5 h-5 text-red-600" />
                            ) : (
                                <PhoneIcon className="w-5 h-5 text-gray-400" />
                            )
                        }
                        contentLeft={
                            <div className="h-full">
                                <label htmlFor="country" className="sr-only">
                                    {t('common.form.srCountry', 'Country')}
                                </label>
                                <Select
                                    id="country"
                                    name="country"
                                    className="h-full sm:text-sm text-center border-r-0 text-gray-700 focus:outline-none cursor-pointer join-item rounded-r-none bg-slate-100"
                                >
                                    {['US'].map((code, index) => (
                                        <Select.Option key={`code-phone-${code}-${+index}`}>{code}</Select.Option>
                                    ))}
                                </Select>
                            </div>
                        }
                        data-tracking-input="phone"
                        errorMessage={errors.phoneNumber}
                    />

                    <Input
                        label={`${t('common.form.emailLabel', 'Email Address')} (${t('common.form.required', 'Required')})*`}
                        name="email"
                        id="email"
                        placeholder={t('common.form.emailPlaceholder', 'Enter your email address')}
                        onChange={handleChange}
                        value={values.email}
                        labelClassName="md:!text-gray-600 text-white"
                        color={errors.email ? 'error' : 'ghost'}
                        className={clsx(
                            'max-w-full w-full bg-white',

                            errors.email && 'border-red-500 placeholder:text-red-500',
                        )}
                        iconRight={errors.fullName && <ExclamationCircleIcon className="w-5 h-5 text-red-600" />}
                        iconLeft={<EnvelopeIcon className="w-5 h-5 text-gray-400" />}
                        data-tracking-input="email"
                        errorMessage={errors.email}
                    />

                    <div className="mt-6">
                        <Button color="red" className="max-w-full w-full">
                            {t('common.getStartedButton', 'Get started for free').toUpperCase()}
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default LaunchWebsiteForm;
