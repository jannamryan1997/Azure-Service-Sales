export interface IUser {}

export enum EUserRole {
    Administrator='A',
    Engineer='E'
}

// tslint:disable-next-line: max-line-length
export type TUserRole = EUserRole.Administrator | EUserRole.Engineer;
