import { Class } from 'meteor/jagi:astronomy';

import Users from '../collections/Users';

const User = Class.create({
  name: 'User',
  collection: Users,
  fields: {
    firstName: {
      type: String
    },
    lastName: {
      type: String
    }
  },
  secured: false,
  helpers: {
    fullName() {
      return `${this.firstName} ${this.lastName}`;
    }
  }
});

export default User;