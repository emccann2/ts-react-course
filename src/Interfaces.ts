import { JobRole } from './Enums';

export interface Person {
    name: string;
    age: number;
    email: string;
    jobRole: JobRole;
}