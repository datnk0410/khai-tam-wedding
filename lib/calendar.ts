import { strings } from './i18n'

export function buildGoogleCalendarUrl(): string {
  const start = '20261115'
  const end = '20261117'
  const title = encodeURIComponent(strings.events.titleCalendar)
  const location = encodeURIComponent(
    `${strings.events.groom.party.location}; ${strings.events.bride.party.location}`,
  )

  return (
    `https://calendar.google.com/calendar/render` +
    `?action=TEMPLATE` +
    `&text=${title}` +
    `&dates=${start}/${end}` +
    `&location=${location}`
  )
}
