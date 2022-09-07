// Run script from 'main.gs'

function addUser(getEmail, getFirstName, getLastName, getPassword, getOrgUnit) {
  let user = {
    primaryEmail: getEmail,
    name: {
      givenName: getFirstName,
      familyName: getLastName
    },
    password: getPassword,
    orgUnitPath: getOrgUnit
  };
  try {
    user = AdminDirectory.Users.insert(user);
    Logger.log('User %s created with ID %s.', user.primaryEmail, user.id);
  } catch (err) {
    Logger.log('Failed with error %s', err.message);
  }
}