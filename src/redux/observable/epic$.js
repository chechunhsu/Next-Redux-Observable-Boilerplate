export default {
  exhaustAsync: options => options.action$
    .filter(action => action.type === options.requestType)
    .exhaustMap(options.api)
    .map(response => response.error
      ? options.failureAction(response)
      : options.successAction(response)
    )
}
