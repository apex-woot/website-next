import { useTranslation } from '@app/i18n/client';
import { Form } from '@components/templates/basic-short-form/components';
import { Header } from '@components/templates/common/header';
import { useParams } from 'next/navigation';
import React, { type FC } from 'react';

const Step2: FC = () => {
    const { lng } = useParams<{lng: string}>();
    const { t } = useTranslation(lng);

    return (
        <Form>
            <Header>
                {t('templateSelection.step2.title1', "Let's setup your")}
                <br />
                {t('templateSelection.step2.title2', 'Free account')}
            </Header>
        </Form>
    );
};

export default Step2;
