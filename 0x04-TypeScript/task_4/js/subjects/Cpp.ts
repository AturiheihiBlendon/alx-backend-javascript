/// <reference path="Teacher.ts" />
import {Subject} from './Subject';
namespace Subjects {
	  interface Teacher {
		    experienceTeachingC?: number;
	  }
	  class Cpp extends Subject {
	  	getRequirements() {
				  return "Here is the list of requirements for Cpp";
		}
		getAvailableTeacher() {
				      if(experienceTeachingC < 1) {
				      			     return "No availabel teacher";
				      }
				      return "Available Teacher: ${firstName}";
		}
	  }
}