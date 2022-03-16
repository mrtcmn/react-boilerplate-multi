export const ResponseCheck = (res) => {
  if (res.data.rc.toString().substring(0, 1) !== '-') {
    return true;
  }

  return false;
};

export const ResponseTokenCheck = (res) => {
  if (Number(res.data.rc.toString().substring(1, 2)) !== 7) {
    return true;
  }

  return false;
};

export const PermissionCheck = (res) => {
  if (Number(res.data.rc.toString().substring(1, 3)) === 85) {
    return true;
  }

  return false;
};
