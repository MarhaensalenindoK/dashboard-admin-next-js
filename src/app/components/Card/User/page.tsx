'use client'

import Link from "next/link";
import React from "react";
import FontAwesomeIcon from "@/app/components/FontAwesome/page";
import Image from "next/image";

interface UserCardProps {
    photo?: string
    name:string
    username:string
    className?: string
}

const UserCard: React.FC<UserCardProps> = ({
    photo,
    name,
    username,
    className
}) => {
    const iconUser = <FontAwesomeIcon icon={['fas', 'user']} size="2xl" />

    return (
        <>
            <div className={className}>
                <div className="bg-white p-5 rounded-2xl shadow-sm text-center">
                    { !photo ? iconUser : <Image src={photo} width={84} height={84} alt={'User'} className="mx-auto h-min[10px] rounded-3xl" />}
                    
                    <p className="text-1xl font-bold">
                        {name}
                    </p>
                    <p className="text-sm text-gray-400">
                        @{username}
                    </p>
                </div>
            </div>
        </>
    );
};

export default React.memo(UserCard);
