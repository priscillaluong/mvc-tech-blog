module.exports = {
    format_date: (date) => {
      // Format date as MM/DD/YYYY
      return date.toLocaleDateString();
    },
    // Check if logged in user and comment user id matches
    ifEquals: (arg1, arg2) => {
        if (arg1 === arg2) {
            return true;
        } else {
            return false;
        }
    }
};
  