module.exports = {
  normalizedErrors: function (errors) {
    let normalizedErrors = []
    for (var property in errors) {
      if (errors.hasOwnProperty(property)) {
        normalizedErrors.push({
          title: property,
          detail: errors[property].message
        })
      }
    }
    return normalizedErrors;
  }
}
