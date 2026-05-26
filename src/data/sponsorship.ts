export type WeekStatus = 'sold' | 'next' | 'available';

export interface SponsorWeek {
  week: string;
  status: WeekStatus;
}

export const sponsorWeeks: SponsorWeek[] = [
  { week: 'Jun 02', status: 'sold' },
  { week: 'Jun 09', status: 'sold' },
  { week: 'Jun 16', status: 'next' },
  { week: 'Jun 23', status: 'available' },
  { week: 'Jun 30', status: 'available' },
  { week: 'Jul 07', status: 'next' },
  { week: 'Jul 14', status: 'available' },
  { week: 'Jul 21', status: 'available' },
];
