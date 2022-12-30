import React from "react";
import { IoIosPaperPlane } from 'react-icons/io';
import { MdAssignment } from 'react-icons/md'
import { HiViewGridAdd } from 'react-icons/hi'
import { HiPaperClip } from 'react-icons/hi';
import { FiAlertOctagon } from 'react-icons/fi';
import { CgProfile } from "react-icons/cg";
import { FaUserCog } from 'react-icons/fa';
import { RiListSettingsLine } from 'react-icons/ri';

export const SidebarData = [
    {
        title: 'Assignments',
        path: '/assignments',
        icon: <MdAssignment/>,
        user: 3,
    },
    {
        title: 'Register to Lectures',
        path: '/register-lectures',
        icon: <HiViewGridAdd/>,
        user: 3,
    },
    {
        title: 'Active Reviews',
        path: '/active-reviews',
        icon: <FiAlertOctagon/>,
        user: 3,
    },
    {
        title: 'Create Assignment',
        path: '/create-assignment',
        icon: <IoIosPaperPlane/>,
        user: 2,
    },
    {
        title: 'Examine Reviews',
        path: '/examine-reviews',
        icon: <HiPaperClip/>,
        user: 2,
    },
    {
        title: 'User Controls',
        path: '/user-controls',
        icon: <FaUserCog/>,
        user: 1,
    },
    {
        title: 'Lecture Controls',
        path: '/lecture-controls',
        icon: <RiListSettingsLine/>,
        user: 1,
    },
    {
        title: 'My Profile',
        path: '/profile-settings',
        icon: <CgProfile/>
    }  
];