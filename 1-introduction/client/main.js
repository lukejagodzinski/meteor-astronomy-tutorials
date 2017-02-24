import User from '/imports/classes/User';

window.User = User;

Template.body.helpers({
  user() {
    return User.findOne();
  }
});