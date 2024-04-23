'use client'
import React, { useState } from 'react'
import ButtonLink from '@/app/components/Button/ButtonLink/page';
import FontAwesomeIcon from "@/app/components/FontAwesome/page";
import { transform } from 'next/dist/build/swc';

const Sidebar = () => {
    const mainSidebar = [
        {
            label: 'Home',
            link: '/',
            icon: 'gauge'
        },
        {
            label: 'Products',
            link: '/product', 
            icon: 'cart-shopping'
        },
        {
            label: 'Users',
            link: '/users',
            icon: 'user'
        },
        {
            label: 'Reports',
            link: '/report',
            icon: 'file',
        },
    ]

    const productSidebar = [
        {
            label: 'Calendar',
            link: '/calendar',
            icon: 'calendar-days'
        },
        {
            label: 'Gallery',
            link: '/gallery',
            icon: 'image'
        },
        {
            label: 'Mailbox',
            link: '/mail',
            icon: 'envelope'
        },
        {
            label: 'Pages',
            link: '/pages',
            icon: 'pager'
        },
        {
            label: 'Extras',
            link: '/extra',
            icon: 'plus'
        },
    ]

    const [isMinimize, setIsMinimize] = useState(false);
    const toggleMinimize = () => {
        setIsMinimize(!isMinimize);
    };

    return (
        <div className={`sidebar ${isMinimize ? 'hide' : ''}`}
        >
            <div className='flex-grow'>
                {/* Header Sidebar */}
                <div className='flex items-center justify-between p-3'>
                    <h1 className='font-bold text-2xl'>
                        { isMinimize ? 'A.' : 'Admin' }
                    </h1>
                    <div 
                    className='text-blue-500 hover:bg-sky-300 rounded-full w-6 text-center minimize-sidebar cursor-pointer'
                    onClick={toggleMinimize}
                    >
                        <FontAwesomeIcon icon={["fas", `${isMinimize ? 'chevron-right' : 'chevron-left'}`]} />
                    </div>
                </div>

                <hr className='w-1/2 ml-3' />

                <div className='w-100 flex flex-col gap-3 p-3'>
                    {
                        mainSidebar?.map((item, index) => (
                            <ButtonLink
                                key={index}
                                label={isMinimize ? '' : item.label}
                                link={item.link}
                                icon={item.icon}
                            />
                        ))
                    }
                </div>

                <h4 className='font-bold p-3'>
                    {isMinimize ? 'Prod' : 'Products'}
                </h4>
                

                <div className='w-100 flex flex-col gap-3 p-3'>
                    {
                        productSidebar?.map((item, index) => (
                            <ButtonLink
                                key={index}
                                label={isMinimize ? '' : item.label}
                                link={item.link}
                                icon={item.icon}
                            />
                        ))
                    }
                </div>
            </div>

            <div className='flex p-3'>
                <ButtonLink
                    label={isMinimize ? '' : 'Setting'}
                    link={'/setting'}
                    className={'w-full'}
                    icon={'gear'}
                />
            </div>
        </div>
    )
}

export default React.memo(Sidebar)