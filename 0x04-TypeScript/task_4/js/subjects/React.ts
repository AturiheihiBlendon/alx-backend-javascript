/// <reference path="Teacher.ts" />
namespace Subjects {
    interface Teacher {
          experienceTeachingReact?: number;
    }
    class React implements Teacher {
        getRequirements() {
                return "ere is the list of requirements for React";
      }
      getAvailableTeacher() {
                    if(experienceTeachingReact? < 1) {
                                      return "No available teacher";
                    }
                    return "Available Teacher: ${firstName}";
      }
    }
}