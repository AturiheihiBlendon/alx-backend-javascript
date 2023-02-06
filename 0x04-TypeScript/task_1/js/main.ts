//Teacher interface
interface Teacher {
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [key: string]: any
}

//Directors interface
interface Directors extends Teacher {
    numberOfReports: number;
}
