import uploadPhoto from "./utils.js";
import createUser from "./utils.js";

export default function handleProfileSignup() {
  return Promise.all([uploadPhoto(), createUser()])
    .then(([photo, user]) => {
      const { status } = photo;
      const { firstName, lastName } = user;
      return {
        status,
        body: `${firstName} ${lastName}`,
      };
    })
    .catch(() => new Error("Signup system offline"));
}
