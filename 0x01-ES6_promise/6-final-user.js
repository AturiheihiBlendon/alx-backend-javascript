import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  return Promise.allSettled([signUpUser(firstName, lastName), uploadPhoto(fileName)])
    .then((res) => {
      const result = [];
      res.forEach((val) => {
        if (val.status === 'fulfilled') {
          result.push({ status: val.status, value: val.value });
        } else {
          result.push({
            status: val.status,
            value: `Error: ${val.reason.message}`,
          });
        }
      });
      return result;
    });
}
