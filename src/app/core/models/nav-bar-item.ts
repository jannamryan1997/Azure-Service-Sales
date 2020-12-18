import { TUserRole } from "./users";

export interface NavBarItem {
    routerLink: string;
    label: string;
    roles: TUserRole[];
}
