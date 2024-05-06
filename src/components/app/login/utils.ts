export const signUpFields = [
    {
        type: 'text',
        required: true,
        id: 'full_name',
        name: 'full_name',
        dataTracking: 'name',
        placeHolder: 'common.form.fullNamePlaceholder',
        defaultPlaceholder: 'Enter your full name',
    },
    {
        type: 'tel',
        required: true,
        id: 'phone_number',
        name: 'phone_number',
        dataTracking: 'phone',
        placeHolder: 'common.form.phoneNumberPlaceholder',
        defaultPlaceholder: 'Enter your phone number',
    },
    {
        id: 'email',
        type: 'email',
        name: 'email',
        required: true,
        dataTracking: 'email',
        placeHolder: 'common.form.emailPlaceholder',
        defaultPlaceholder: 'Enter your email address',
    },
];

export const forgetPasswordFields = [
    {
        id: 'email',
        type: 'email',
        name: 'email',
        required: true,
        placeHolder: 'common.form.emailPlaceholder',
        defaultPlaceholder: 'Enter your email address',
    },
    {
        type: 'tel',
        required: true,
        id: 'phone_number',
        name: 'phone_number',
        placeHolder: 'common.form.phoneNumberPlaceholder',
        defaultPlaceholder: 'Enter your phone number',
    },
];
