// @ts-nocheck
import type { User } from '@auth0/auth0-spa-js';
import useTranslation from '@hooks/useTranslation';
import type { ChangeType, SubmitType } from '@website-app-app-types/';
import { Button } from '@website-app-common-components/buttons';
import { Alert } from '@website-app-components/common/alerts';
import React, { type FC, useState } from 'react';
import { Input } from 'react-daisyui';
import type { LoginProps } from '../types';
import { signUpFields } from '../utils';

const LoginForm: FC<LoginProps> = (props) => {
    const { t } = useTranslation();
    const [form, setForm] = useState<User>({});
    // const { session_id: stripeSessionID } = props;
    const [errorMessage, setErrorMessage] = useState<string>();
    const defaultErrorMessage = t('common.form.error', 'Something went wrong. Try again!');

    const handleChange = ({ target }: ChangeType) => {
        setForm({ ...form, [target.name]: target.value });
    };

    // const handleAuthTempUser = async () => {
    //     // create user in user store
    //
    //     const tempUser = {
    //         email: form.email,
    //         full_name: form.full_name,
    //         stripe_session_id: stripeSessionID,
    //         phone_number: form.phone_number,
    //     };
    //
    //     await createPasswordlessUser(tempUser);
    //     setTempUser(tempUser);
    // };

    const submitFormData = async (ev: SubmitType) => {
        // ev.preventDefault();
        //
        // // create user in user store
        // // const endpoint = 'trade-client/setup';
        // // const emailParam = `email=${form.email}`;
        // // const fullNameParam = `fullName=${form.full_name}`;
        // // const phoneNumberParam = `phoneNumber=${form.phone_number}`;
        // // const baseUrl = process.env.PUBLIC_AUTH0_LOGIN_REDIRECT_URL;
        // // const sessionId = stripeSessionID ? `session_id=${stripeSessionID}` : '';
        //
        // try {
        //     // await handleAuthTempUser();
        //     // console.log(`${baseUrl}/${endpoint}?${fullNameParam}&${phoneNumberParam}&${emailParam}&${sessionId}`);
        // } catch (error) {
        //     // setErrorMessage(
        //     //     (error as Error).message === 'user_already_exists'
        //     //         ? t(
        //     //               'login.form.errorMessage',
        //     //               "A user with this phone number and email address already exists. If you would like to login to your account, please use one of the 'Login to Account' options.",
        //     //           )
        //     //         : defaultErrorMessage,
        //     // );
        // }
    };

    return (
        <>
            {errorMessage && <Alert>{errorMessage}</Alert>}
            <form onSubmit={submitFormData}>
                {signUpFields.map((field, idx) => (
                    <Input
                        {...field}
                        placeholder={t(field.placeHolder, field.defaultPlaceholder)}
                        className="my-2"
                        onChange={handleChange}
                        value={form[field.name]}
                        key={`signup-input-${+idx}`}
                    />
                ))}
                <Button className="w-full" type="submit">
                    {t('login.form.signUpBtn', 'Sign up now')}
                </Button>
            </form>
        </>
    );
};

export default LoginForm;
