export default ({ response: error }) => {
  try {
    return {
      ...JSON.parse(error.body),
      statusCode: error.statusCode
    }
  } catch (err) {
    return { error }
  }
}
