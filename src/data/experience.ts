export interface ExperienceItem {
  company: string
  role: string
  location: string
  dates: string
  domain: string
  context: string
}

export const experience: ExperienceItem[] = [
  {
    company: 'BNY Mellon',
    role: 'Senior Software Engineer | Enterprise Payments Platform',
    location: 'New York, USA',
    dates: 'Oct 2024 – Mar 2026',
    domain: 'Finance / Banking',
    context:
      'Enterprise payments platform, modular frontend architecture, data-intensive workflows, and backend/API integration.',
  },
  {
    company: 'EPAM Systems',
    role: 'Senior Software Engineer',
    location: 'Remote → USA',
    dates: 'Oct 2019 – May 2024',
    domain: 'Finance, Retail, Warehouse Management, Healthcare',
    context: 'Enterprise web, mobile, and full-stack delivery across multiple client domains.',
  },
  {
    company: 'Luxoft / DXC Technology',
    role: 'JavaScript Developer',
    location: 'Remote → USA',
    dates: 'Feb 2018 – Oct 2019',
    domain: 'Media / Content Hosting & Sales',
    context:
      'Frontend engineering for a high-traffic visual content platform supporting hosting, search, licensing, and sales workflows.',
  },
  {
    company: 'TicketHunt.net',
    role: 'Front-End Developer',
    location: 'Ukraine',
    dates: 'Jul 2016 – Jan 2018',
    domain: 'E-commerce / Events',
    context:
      'Event ticketing platform with responsive UI, maps, payments-related workflows, auctions, and API-connected features.',
  },
  {
    company: 'GoIT',
    role: 'Front-End Developer',
    location: 'Ukraine',
    dates: 'Feb 2016 – Jun 2016',
    domain: 'Web Development',
    context:
      'Responsive websites using progressive enhancement, semantic markup, JavaScript, and cross-browser frontend practices.',
  },
]
