import { NavBarItem } from "../models/nav-bar-item";
import { EUserRole } from "../models/users";

export const NAVBAR_ITEMS: NavBarItem[] = [
    {
        label: 'управление подписками',
        routerLink: '/home',
        roles: [
            EUserRole.Administrator, EUserRole.Engineer,
        ]
    },
    {
        label: 'подписки',
        routerLink: '#',
        roles: [
            EUserRole.Administrator, EUserRole.Engineer,
        ]
    },
    {
        label: 'пользователи',
        routerLink: '#',
        roles: [
            EUserRole.Administrator, EUserRole.Engineer,
        ]
    },

    {
        label: 'отчеты',
        routerLink: '#',
        roles: [
            EUserRole.Administrator, EUserRole.Engineer,
        ]
    },
    {
        label: 'управление инженерами',
        routerLink: '#',
        roles: [
            EUserRole.Administrator,
        ]
    },
]


