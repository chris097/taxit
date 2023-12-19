import React from 'react';
import Link from 'next/link';

interface IPrimaryButton {
    extraClassName?: string
    buttonName?: string
}

const PrimaryButton: React.FC<IPrimaryButton> = ({
    extraClassName = "w-[211px]",
    buttonName="Create free account"
}) => {
    return (
        <div className={`bg-gradient-to-r ${extraClassName} whitespace-nowrap from-primary-light to-primary-dark py-2 px-4 rounded-[10px]`}>
            <Link href="/">{buttonName}</Link>
        </div>
    );
};

export default PrimaryButton