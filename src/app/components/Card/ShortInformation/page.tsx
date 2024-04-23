'use client'

import Link from "next/link";
import React from "react";
import FontAwesomeIcon from "@/app/components/FontAwesome/page";

interface ShortInformationProps {
    title: string
    subTitle: string
    href?: string
    className?: string
}

const ShortInformation = ({
    title,
    subTitle,
    href,
    className = ''
} : ShortInformationProps) => {

    return (
        <>
            <div className={className}>
                <div className="bg-white p-5 rounded-t-2xl shadow-sm">
                    <p className="text-2xl font-bold">
                        {title}
                    </p>
                    <p className="text-sm text-gray-500">
                        {subTitle}
                    </p>
                </div>
                <Link href={href} className="bg-blue-500 text-white flex items-center justify-between p-2 px-5 rounded-b-2xl">
                    <p>
                        View More
                    </p>
                    <div>
                        <FontAwesomeIcon icon={['fas', 'arrow-right']} />
                    </div>
                </Link>
            </div>
        </>
    );
};

export default React.memo(ShortInformation);
