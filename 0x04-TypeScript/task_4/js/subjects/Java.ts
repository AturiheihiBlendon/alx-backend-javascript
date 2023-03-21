/// <reference path="Teacher.ts" />
namespace Subjects {
    interface Teacher {
            experienceTeachingJava?: number;
    }
    class Java implements Teacher {
        getRequirements() {
                return "Here is the list of requirements for Java";
      }
      getAvailableTeacher() {
                    if(experienceTeachingJava < 1) {
                                    return "No available teacher";
                    }
                    return "Available Teacher: ${firstName}";
      }
    }
}