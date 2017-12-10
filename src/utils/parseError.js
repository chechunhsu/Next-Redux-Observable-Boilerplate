export default error => {
  try {
    return {
      ...error.response,
      statusCode: error.status
    }
  } catch (err) {
    return error.response
  }
}
