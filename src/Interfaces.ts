import { JobRole } from './Enums';

export interface Person {
    name: string;
    age: number;
    email: string;
    jobRole: JobRole;
}

export interface Options {
    randomGenerator: string;
    blog: string;
    rota: string;
    quiz: string;
}