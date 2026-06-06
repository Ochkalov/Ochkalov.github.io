import {
  BadgeDollarSign,
  Barcode,
  Building2,
  Gauge,
  HeartPulse,
  ImageIcon,
  Landmark,
  ServerCog,
  Ticket,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

export interface Project {
  title: string
  client: string
  description: string
  detail: string
  tags: string[]
  icon: LucideIcon
  outcomes?: string[]
}

export const projects: Project[] = [
  {
    title: 'Enterprise Payments Platform',
    client: 'BNY Mellon',
    description:
      'Large-scale internal payments platform with modular frontend architecture, configurable business behavior, data-intensive operational workflows, Java/Spring Boot service integration, and OpenAPI-driven API contracts.',
    detail:
      'Owned enterprise payment workflows across Angular UI modules, Native Federation-based micro-frontends, reusable patterns, Ag-Grid/Highcharts experiences, backend/API integration, validation, typed client workflows, and release readiness in a regulated banking environment.',
    tags: [
      'Angular',
      'Java/Spring Boot',
      'Micro-frontends',
      'Native Federation',
      'Ag-Grid',
      'Highcharts',
      'OpenAPI',
    ],
    icon: Landmark,
    outcomes: [
      '3 greenfield micro-frontends',
      'API contract validation',
      'Data-intensive payments UI',
    ],
  },
  {
    title: 'IPO Analysis Platform',
    client: 'S&P Global',
    description:
      'Data-intensive IPO analysis system supporting complex financial analytics, modernization, .NET Web API/C# integration, SQL-backed workflows, charting, and analytical user experiences.',
    detail:
      'Combined frontend modernization with full-stack delivery for financial users, integrating REST APIs, .NET Web APIs, C#, SQL-backed data, Highcharts visualizations, and complex analytical workflows.',
    tags: ['Angular', '.NET Web APIs', 'C#', 'Highcharts', 'REST APIs', 'SQL'],
    icon: BadgeDollarSign,
    outcomes: [
      'Financial analytics workflows',
      'Modernized legacy code',
      'Backend API integration',
    ],
  },
  {
    title: 'LSEG / Refinitiv Modernization',
    client: 'LSEG Data & Analytics / Refinitiv',
    description:
      'Legacy financial data platform modernization involving AngularJS/Angular migration work, micro-frontend patterns, performance improvements, maintainability, and faster first meaningful rendering.',
    detail:
      'Improved application structure and frontend performance, contributed modernization patterns, supported micro-frontend-oriented delivery, and reduced First Contentful Paint to approximately 2 seconds while aligning the platform with modern engineering standards.',
    tags: ['AngularJS', 'Angular', 'Micro-frontends', 'Performance', 'Modernization', '~2s FCP'],
    icon: Gauge,
    outcomes: ['~2s FCP improvement', 'Legacy modernization', 'Micro-frontend patterns'],
  },
  {
    title: 'Media Content Platform',
    client: 'GT Images / Luxoft / DXC Technology',
    description:
      'High-traffic visual content platform supporting content hosting, search, licensing, sales workflows, frontend feature delivery, reusable UI components, and backend-driven integrations.',
    detail:
      'Built media management features using JavaScript, TypeScript, Angular, reusable components, testing, bug fixing, refactoring, CI/CD-oriented collaboration, and maintainability improvements for a content hosting and sales platform.',
    tags: ['Angular', 'TypeScript', 'JavaScript', 'Media', 'Search', 'Content Platform'],
    icon: ImageIcon,
    outcomes: [
      'Content hosting workflows',
      'Search and licensing UX',
      'Reusable frontend components',
    ],
  },
  {
    title: 'Credit Card Servicing',
    client: 'OneMain Financial',
    description:
      'Cross-platform web, Android, and iOS servicing functionality for balances, payments, account details, customer workflows, and API-connected account operations.',
    detail:
      'Delivered customer-facing servicing behavior across web and mobile surfaces with Angular, Ionic, Node.js, iOS, Android, API-integrated payments and account flows, while coordinating delivery across 3 engineering teams.',
    tags: ['Angular', 'Ionic', 'Node.js', 'iOS', 'Android', 'API Integration'],
    icon: Building2,
    outcomes: ['Web + Android + iOS', 'Payments and account workflows', '3-team coordination'],
  },
  {
    title: 'Health Tracking App',
    client: 'Takeda',
    description:
      'iOS healthcare application supporting patient observation, injection-related workflows, mobile delivery, Capacitor-based implementation, and TestFlight/App Store release practices.',
    detail:
      'Supported healthcare mobile delivery with iOS release workflows, patient observation UX, native tooling, production-ready mobile practices, and device-connected workflow considerations without exposing sensitive healthcare data.',
    tags: ['iOS', 'Capacitor', 'Mobile', 'TestFlight', 'Healthcare'],
    icon: HeartPulse,
    outcomes: [
      'Healthcare mobile workflows',
      'TestFlight/App Store delivery',
      'Device-connected workflow support',
    ],
  },
  {
    title: 'Warehouse Application',
    client: 'Party City',
    description:
      'Android warehouse application with Angular/Ionic/Cordova delivery, barcode scanning, receipt printer workflows, backend API interactions, and a Node.js proxy service deployed with Docker.',
    detail:
      'Built operational warehouse workflows across Android devices, barcode scanning, receipt printer behavior, API interactions, Dockerized Node.js service support, and production-oriented retail logistics processes.',
    tags: ['Angular', 'Ionic', 'Cordova', 'Android', 'Node.js', 'Docker', 'Barcode Scanning'],
    icon: ServerCog,
    outcomes: [
      'Barcode scanner integration',
      'Receipt printer workflows',
      'Dockerized Node.js proxy',
    ],
  },
  {
    title: 'Product Lookup Kiosk',
    client: 'Canadian Tire',
    description:
      'Android kiosk-style product lookup application using Ionic/Cordova with barcode scanning, backend-connected product search, and in-store operational workflows.',
    detail:
      'Implemented kiosk-style product discovery with Android device workflows, barcode scanning, API-connected product search, retail operations UX, and backend-driven product lookup behavior.',
    tags: ['Ionic', 'Cordova', 'Android', 'REST APIs', 'Barcode Scanning', 'Retail'],
    icon: Barcode,
    outcomes: ['Retail kiosk UX', 'Barcode product search', 'Backend-connected lookup'],
  },
  {
    title: 'Event Ticketing Platform',
    client: 'Entertainment / Events',
    description:
      'Event ticketing and discovery platform for concerts, sports, and entertainment events with responsive UI, maps, auctions, ticket-sales workflows, and API-connected features.',
    detail:
      'Delivered frontend and backend-connected functionality using JavaScript, Angular, Node.js, Leaflet.js, REST APIs, responsive UI practices, payment-related workflows, auctions, mapping features, and iterative product improvements.',
    tags: ['JavaScript', 'Angular', 'Node.js', 'Leaflet.js', 'REST APIs', 'Events'],
    icon: Ticket,
    outcomes: ['Ticket-sales workflows', 'Maps and event discovery', 'Auction functionality'],
  },
]
