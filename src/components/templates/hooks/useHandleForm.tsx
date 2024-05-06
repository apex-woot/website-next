import type { LandingForm } from '@components/templates/types';
import { useFormik } from 'formik';
import { useState } from 'react';

const formInitialValues: LandingForm = {
    fullName: '',
    phoneNumber: '',
    email: '',
};
export const useHandleForm = () => {
    const [isError, setIsError] = useState(false);

    const useFormikHandleSubmit = async (values: LandingForm) => {
        // TODO: Implement the handle submit for the forms
        console.log(values);
    };

    const useFormikLandingForm = useFormik<LandingForm>({
        initialValues: formInitialValues,
        // validationSchema: JoinNowSchema(t),
        validateOnChange: false,
        onSubmit: useFormikHandleSubmit,
    });

    return { useFormikLandingForm, isError };
};
