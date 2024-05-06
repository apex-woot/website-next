'use client';
import { useTranslation } from '@app/i18n/client';
import { Input } from '@components/templates/common/input';
import { useHandleForm } from '@components/templates/hooks/useHandleForm';
import { EnvelopeIcon, PhoneIcon, XCircleIcon } from '@heroicons/react/24/solid';
import clsx from 'clsx';
import { useParams } from 'next/navigation';
import React, { type FC } from 'react';
import { StartFreeLandingButton } from '../common/start-free-landing-button';
import type { FormProps } from './types';

const Form: FC<FormProps> = ({ title, specificationDisplay }) => {
    const { useFormikLandingForm, isError } = useHandleForm();
    const { lng } = useParams<{ lng: string }>();
    const { t } = useTranslation(lng);

    const {
        handleSubmit,
        errors,
        handleChange,
        values: { fullName, phoneNumber, email },
    } = useFormikLandingForm;

    const getLabel = (fieldName: string, baseLabel: string) =>
        // @ts-ignore
        errors[fieldName] ? `${baseLabel}: ${t('common.form.required', 'Required')}` : `${baseLabel}:`;

    const fullNameLabel = getLabel('fullName', t('common.form.fullNameLabel', 'Full Name'));
    const phoneNumberLabel = getLabel('phoneNumber', t('common.form.phoneNumberLabel', 'Phone Number'));
    const emailLabel = getLabel('email', t('common.form.emailLabel', 'Email Address'));

    return (
        <div className="w-full md:w-auto order-1 lg:order-2">
            <form id="hero-form" onSubmit={handleSubmit} className="max-w-sm m-auto">
                <h1 className="max-w-[350px] lg:max-w-[370px] 2xl:max-w-[500px] text-4xl xl:text-5xl font-extrabold mx-1 py-5 md:pt-0 text-gray-800">
                    {title}
                </h1>
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
                <div className="flex flex-col max-w-[430px]">
                    <Input
                        id="fullName"
                        label={fullNameLabel}
                        name="fullName"
                        placeholder={t('common.form.fullNamePlaceholder', 'Enter your full name')}
                        onChange={handleChange}
                        value={fullName}
                        labelClassName={errors.fullName && 'text-red-500'}
                        containerClassName="mb-4"
                        className={clsx('w-full bg-white', errors.fullName && 'border-red-500 placeholder:text-red-500')}
                        data-tracking-input="name"
                    />
                    <Input
                        id="phoneNumber"
                        label={phoneNumberLabel}
                        name="phoneNumber"
                        type="phonenumber"
                        placeholder="(555) 432-4371"
                        onChange={handleChange}
                        value={phoneNumber}
                        labelClassName={errors.phoneNumber && 'text-red-500'}
                        containerClassName="mb-4"
                        className={clsx('w-full bg-white', errors.phoneNumber && 'border-red-500 placeholder:text-red-500')}
                        iconLeft={<PhoneIcon className="w-5 h-5 text-gray-400" />}
                        data-tracking-input="phone"
                    />
                    <Input
                        id="email"
                        label={emailLabel}
                        name="email"
                        type="email"
                        placeholder={t('common.form.emailPlaceholder', 'Enter your email address')}
                        onChange={handleChange}
                        value={email}
                        labelClassName={errors.email && 'text-red-500'}
                        containerClassName="mb-4"
                        className={clsx('w-full bg-white', errors.email && 'border-red-500 placeholder:text-red-500')}
                        iconLeft={<EnvelopeIcon className="w-5 h-5 text-gray-400" />}
                        data-tracking-input="email"
                    />
                </div>
                <StartFreeLandingButton
                    title={t('startFree.buttonTitle', 'Get Started Now')}
                    specificationDisplay={specificationDisplay}
                    className="w-full"
                />
            </form>
        </div>
    );
};

export default Form;
