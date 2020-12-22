import { NavBarItem } from "../models/nav-bar-item";
import { EUserRole } from "../models/users";

export const NAVBAR_ITEMS: NavBarItem[] = [
 
    {
        label: 'подписки',
        routerLink: '/home',
        roles: [
            EUserRole.Administrator, EUserRole.Engineer,
        ]
    },
   
    {
        label: 'пользователи',
        routerLink: '/users',
        roles: [
            EUserRole.Administrator, EUserRole.Engineer,
        ]
    },


    {
        label: 'отчеты',
        routerLink: '/reports',
        roles: [
            EUserRole.Administrator, EUserRole.Engineer,
        ]
    },
    {
        label: 'Сотрудники',
        routerLink: '/staff',
        roles: [
            EUserRole.Administrator,
        ]
    },
]


