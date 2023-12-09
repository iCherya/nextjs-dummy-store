export const formatDate = (dateString: string) => {
  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }

  return new Date(dateString).toLocaleDateString(undefined, options)
}

export const truncate = (text: string, length = 100) => {
  return text.length > length ? `${text.slice(0, length)}...` : text
}
