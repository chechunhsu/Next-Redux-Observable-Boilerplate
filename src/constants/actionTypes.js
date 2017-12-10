const ACTION_TYPES = [
  'LIST_FORUM'
]

module.exports = ACTION_TYPES.reduce((types, key) => Object.assign(types, {
  [key]: {
    REQUEST: key + '/REQUEST',
    SUCCESS: key + '/SUCCESS',
    FAILURE: key + '/FAILURE'
  }
}), {})
