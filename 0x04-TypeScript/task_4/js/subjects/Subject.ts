/// <reference path="Teacher.ts" />
namespace Subjects {
    export class Subject {
         teacher implements Teacher;
       set setTeacher(teacher: string) {
           this.teacher = teacher;
       }
    }
}