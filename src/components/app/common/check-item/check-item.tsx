import Image from 'next/image';
import React from 'react';
import type { FC } from 'react';
import { Checkbox, Form } from 'react-daisyui';
import type { CheckItemProps } from '.';

const CheckItem: FC<CheckItemProps> = ({ data }) => (
    <Form>
        <Form.Label className="flex justify-start items-start cursor-pointer">
            <Image width={55} height={55} alt={data.title} src={data.image} className="mr-5" />
            <div className="w-full">
                <h3 className="text-3xl font-medium">{data.title}</h3>
                <p>{data.description}</p>
            </div>
            <div className="py-4">
                <Checkbox size="md" color="primary" className="ml-6 min-h-0" />
            </div>
        </Form.Label>
    </Form>
);

export default CheckItem;
