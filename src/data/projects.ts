import { BadgeDollarSign, Barcode, Building2, Gauge, HeartPulse, Landmark, ServerCog } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

export interface Project {
  title: string
  client: string
  description: string
  detail: string
  tags: string[]
  icon: LucideIcon
}

export const projects: Project[] = [
  {
    title: 'Enterprise Payments Platform',
    client: 'BNY Mellon',
    description:
      'Large-scale internal payments platform with modular frontend architecture, configurable business behavior, backend/API integration, and data-intensive operational workflows.',
    detail:
      'Focused on enterprise-grade UI modules, business-rule configuration, API contracts, validation, and release-ready delivery for internal payments workflows.',
    tags: ['Angular', 'Micro-frontends', 'Native Federation', 'Ag-Grid', 'Highcharts', 'OpenAPI'],
    icon: Landmark,
  },
  {
    title: 'IPO Analysis Platform',
    client: 'S&P Global',
    description:
      'Data-intensive IPO analysis system supporting complex financial workflows, backend API integration, modernization, and analytical user experiences.',
    detail:
      'Combined modernization work with financial analysis interfaces, REST integrations, charting, and SQL-backed workflows.',
    tags: ['Angular', '.NET', 'Highcharts', 'REST APIs', 'SQL'],
    icon: BadgeDollarSign,
  },
  {
    title: 'Legacy Analytics Modernization',
    client: 'LSEG Data & Analytics / Refinitiv',
    description:
      'Legacy AngularJS platform modernization focused on application structure, frontend performance, maintainability, and faster first meaningful rendering.',
    detail:
      'Improved application structure and frontend performance, reducing First Contentful Paint to approximately 2 seconds while aligning the platform with modern engineering standards.',
    tags: ['AngularJS', 'Angular', 'Performance', 'Modernization', '~2s FCP'],
    icon: Gauge,
  },
  {
    title: 'Credit Card Servicing',
    client: 'OneMain Financial',
    description:
      'Cross-platform web, Android, and iOS servicing functionality for balances, payments, account details, and customer workflows.',
    detail:
      'Delivered customer-facing servicing behavior across web and mobile surfaces with API-integrated payments and account flows while coordinating delivery across 3 teams.',
    tags: ['Angular', 'Ionic', 'Node.js', 'Mobile', 'API Integration'],
    icon: Building2,
  },
  {
    title: 'Health Tracking App',
    client: 'Takeda',
    description:
      'iOS healthcare application supporting patient observation, injection-related workflows, and mobile delivery through TestFlight/App Store processes.',
    detail:
      'Supported healthcare mobile delivery with iOS release workflows, patient observation UX, and production-ready mobile practices.',
    tags: ['iOS', 'Mobile', 'TestFlight', 'Healthcare'],
    icon: HeartPulse,
  },
  {
    title: 'Warehouse Application',
    client: 'Party City',
    description:
      'Android warehouse application integrating barcode scanning, receipt printer workflows, backend API interactions, and a Node.js proxy service deployed with Docker.',
    detail:
      'Built warehouse workflows across device integrations, backend requests, printing behavior, and Dockerized Node.js service support.',
    tags: ['Android', 'Node.js', 'Docker', 'Barcode Scanning'],
    icon: ServerCog,
  },
  {
    title: 'Product Lookup Kiosk',
    client: 'Canadian Tire',
    description:
      'Android kiosk-style product lookup application with barcode scanning, backend-connected product search, and in-store operational workflows.',
    detail:
      'Implemented kiosk-style product discovery with barcode scanning, API-connected search, and retail operations UX.',
    tags: ['Android', 'REST APIs', 'Barcode Scanning', 'Retail'],
    icon: Barcode,
  },
]
