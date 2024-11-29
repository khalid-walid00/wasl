import TimeAgo from 'react-timeago'
import arabicStrings from 'react-timeago/lib/language-strings/ar'
import buildFormatter from 'react-timeago/lib/formatters/buildFormatter'
const formatter = buildFormatter(arabicStrings)

export default function DateFormat({time}) {
  return (
    <TimeAgo date={time} formatter={formatter} />
  )
}
