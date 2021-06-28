export const formatDate = (timestamp: number): string => {
  return new Intl.DateTimeFormat('de-DE', {
    timeZoneName: 'short',
    timeZone: 'UTC',
  }).format(new Date(timestamp));
}