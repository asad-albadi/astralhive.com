import {
  Code2,
  Cog,
  Network,
  ShieldCheck,
  Gauge,
  LifeBuoy,
  type LucideIcon,
} from 'lucide-react'

export type Service = {
  icon: LucideIcon
  title: string
  description: string
}

export const services: Service[] = [
  {
    icon: Code2,
    title: 'Cross-Platform Apps',
    description:
      'High-performance applications for Windows, Linux, Android, and the web — one codebase, native feel.',
  },
  {
    icon: Cog,
    title: 'Automation',
    description:
      'Custom automation that removes repetitive work and connects the tools your business already runs on.',
  },
  {
    icon: Network,
    title: 'Comprehensive Systems',
    description:
      'End-to-end builds: point-of-sale, management platforms, APIs, and integrated back-office systems.',
  },
]

export type Highlight = {
  icon: LucideIcon
  title: string
  description: string
}

export const highlights: Highlight[] = [
  {
    icon: ShieldCheck,
    title: 'Security first',
    description: 'Sensible defaults and hardened practices baked into every project.',
  },
  {
    icon: Gauge,
    title: 'Built for speed',
    description: 'Optimized for fast load, low resource use, and a snappy experience.',
  },
  {
    icon: LifeBuoy,
    title: 'Direct support',
    description: 'Talk straight to the person who built it — no ticket queues, no runaround.',
  },
]

import astralcalcLogo from './assets/astralcalc_logo.png'

export type Project = {
  name: string
  tagline: string
  description: string
  href: string
  cta: string
  tags: string[]
  badge?: string
  accent: string // gradient stops for the project card, taken from each brand
  image?: string
}

export const projects: Project[] = [
  {
    name: 'QueueWing',
    tagline: 'Real-time queue management',
    description:
      'Real-time queue management with QR tickets, live displays, and multi-clerk support — turn waiting lines into smooth, trackable flows.',
    href: 'https://queuewing.com/',
    cta: 'Visit queuewing.com',
    tags: ['SaaS', 'Web', 'Real-time'],
    accent: '#0d9488, #38bdf8', // QueueWing teal → sky
  },
  {
    name: 'LifeBinder',
    tagline: 'Your life, organized in one place',
    description:
      'One place for your tasks, agenda, Vault knowledge, workspaces, and notifications — everything that runs your day, finally together.',
    href: 'https://lifebinder.astralhive.net/',
    cta: 'Visit LifeBinder',
    tags: ['SaaS', 'Productivity'],
    badge: 'Moving to lifebinder.me',
    accent: '#ffd23f, #7bdff2', // LifeBinder yellow → cyan
  },
  {
    name: 'AstralCalc',
    tagline: 'Calculate & convert, anywhere',
    description:
      'A comprehensive calculation and conversion app for Android — fast, clean, and packed with the tools you actually reach for.',
    href: 'https://play.google.com/store/apps/details?id=com.ahs.astralcalc',
    cta: 'Get it on Google Play',
    tags: ['Android', 'Utility'],
    accent: '#8b5cf6, #22d3ee', // house gradient
    image: astralcalcLogo,
  },
]

export const social = {
  linktree: 'https://linktr.ee/astralhive',
}
