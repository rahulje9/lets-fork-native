// eslint-disable-next-line import/prefer-default-export
export const formatTime = (time: string, ampm: boolean): string => {
  if (ampm) {
    const hrs = time.substring(0, 2)
    const minutes = time.substring(2)

    if (Number(hrs) === 0) {
      return `12:${minutes}am`
    }
    if (Number(hrs) <= 12) {
      return `${Number(hrs)}:${minutes}am`
    }
    return `${Number(hrs) - 12}:${minutes}pm`
  }
  return `${time.substring(0, 2)}:${time.substring(2)}`
}
