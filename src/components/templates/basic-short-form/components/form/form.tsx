import { useTranslation } from '@app/i18n/client';
import { Button } from '@components/templates/common/button';
import type { HeaderProps } from '@components/templates/common/header/types';
import { Input } from '@components/templates/common/input';
import { useHandleForm } from '@components/templates/hooks/useHandleForm';
import { XCircleIcon } from '@heroicons/react/24/outline';
import { ArrowRightCircleIcon, EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/solid';
import { useParams } from 'next/navigation';
import { type FC } from 'react';

const Form: FC<HeaderProps> = ({ children }) => {
    const { useFormikLandingForm, isError } = useHandleForm();
    const { lng } = useParams<{lng: string}>();
    const { t } = useTranslation(lng);

    const { handleSubmit, errors, handleChange, values } = useFormikLandingForm;

    return (
        <div className="w-full lg:w-3/4 text-center flex flex-col">
            <div className="flex justify-center mb-16">
                <form className="w-10/12" onSubmit={handleSubmit} id="form">
                    <div className="max-w-lg w-full mx-auto">
                        {/* Header */}
                        {children}

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

                        <div className="space-y-2">
                            <Input
                                label={`${t('common.form.fullNameLabel', 'Full Name')}:`}
                                name="fullName"
                                placeholder={t('common.form.fullNamePlaceholder', 'Enter your full name')}
                                className="max-w-lg w-full font-normal text-sm"
                                onChange={handleChange}
                                errorMessage={errors.fullName}
                                value={values.fullName}
                                data-tracking-input="name"
                                {...(errors.fullName && { color: 'error' })}
                            />
                            <Input
                                label={`${t('common.form.phoneNumberLabel', 'Phone Number')}:`}
                                name="phoneNumber"
                                aria-placeholder="(555) 432-4371"
                                className="max-w-lg w-full"
                                onChange={handleChange}
                                errorMessage={errors.phoneNumber}
                                value={values.phoneNumber}
                                data-tracking-input="phone"
                                {...(errors.phoneNumber && { color: 'error' })}
                                iconLeft={<PhoneIcon className="h-5 w-5 text-gray-500" />}
                            />
                            <Input
                                label={`${t('common.form.emailLabel', 'Email Address')}:`}
                                name="email"
                                type="email"
                                onChange={handleChange}
                                errorMessage={errors.email}
                                value={values.email}
                                placeholder={t('common.form.emailPlaceholder', 'Enter your email address')}
                                className="max-w-lg w-full"
                                data-tracking-input="email"
                                {...(errors.email && { color: 'error' })}
                                iconLeft={<EnvelopeIcon className="h-5 w-5 text-gray-500" />}
                            />
                        </div>
                        <div className="mt-8 mb-5 max-w-lg w-full mx-auto">
                            <Button
                                type="submit"
                                color="yellow"
                                className="max-w-lg w-full text-sm xl:text-lg text-black uppercase"
                                iconLeft={<ArrowRightCircleIcon className="w-8 h-8" />}
                            >
                                {t('common.getStartedButton', 'Get started for free')}
                            </Button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Form;
