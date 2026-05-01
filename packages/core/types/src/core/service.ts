export type Service = {
  // TODO [V5] Consider changing the any value to unknown.
  // See: https://github.com/moealjabi/kay/issues/16993 and https://github.com/moealjabi/kay/pull/17020 for further information
  [key: keyof any]: any;
};
