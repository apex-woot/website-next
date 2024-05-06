'use-client';
import { useTranslation } from '@app/i18n/client';
import type { User } from '@auth0/auth0-spa-js';
import Button from '@components/app/common/buttons/button';
import React, { type FC, useState } from 'react';
import { Input } from 'react-daisyui';
import { forgetPasswordFields } from '../utils';

const ForgetPasswordForm = ({ lng }: { lng: string }) => {
    const [form, setForm] = useState<User>({});

    const { t } = useTranslation(lng);

    const handleChange = ({ target }: any) => {
        setForm({ ...form, [target.name]: target.value });
    };

    const submitFormData = async (ev: any) => {
        ev.preventDefault();

        // create user in user store
    };

    return (
        <form onSubmit={submitFormData}>
            {forgetPasswordFields.map((field) => (
                <Input
                    {...field}
                    className="my-2"
                    key={field.name}
                    onChange={handleChange}
                    value={form[field.name]}
                    placeholder={t(field.placeHolder, field.defaultPlaceholder)}
                />
            ))}
            <Button className="w-full mt-1" type="submit">
                {t('login.forgetPassword.resetButton', 'Reset my password')}
            </Button>
        </form>
    );
};

export default ForgetPasswordForm;
