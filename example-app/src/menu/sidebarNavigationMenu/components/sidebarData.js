import React from "react";
import {AiFillHome} from 'react-icons/ai'
import {IoIosPaper, IoMdPeople, IoMdHelpCircle} from 'react-icons/io'
import {FaCartPlus, FaEnvelopeOpenText} from 'react-icons/fa'
import {RiArrowDownSFill, RiArrowUpSFill} from 'react-icons/ri'


export const SideBarData = [
    {
        title: 'Home',
        path: '/',
        icon: <AiFillHome />,
        cName: 'nav-text'
    },
    {
        title: 'Reports',
        path: '/reports',
        icon: <IoIosPaper />,
        cName: 'nav-text'
    },
    {
        title: 'Products',
        path: '/products',
        icon: <FaCartPlus />,
        cName: 'nav-text',
    },
    {
        title: 'Team',
        path: '/team',
        icon: <IoMdPeople />,
        cName: 'nav-text'
    },
    {
        title: 'Message',
        path: '/message',
        icon: <FaEnvelopeOpenText />,
        cName: 'nav-text'
    },
    {
        title: 'Support',
        path: '/support',
        icon: <IoMdHelpCircle />,
        cName: 'nav-text'
    },
]