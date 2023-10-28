/** Formats string in form YYYY-MM-DD. */
const formatDate = date => new Date(date).toISOString().split('T')[0]

exports.formatDate = formatDate
