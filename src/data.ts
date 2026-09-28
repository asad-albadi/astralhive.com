import {
  Code2,
  Cog,
  Network,
  ShieldCheck,
  Gauge,
  LifeBuoy,
  LayoutGrid,
  type LucideIcon,
} from 'lucide-react'

export type Service = {
  icon: LucideIcon
  title: string
  description: string
  detail: string
}

export const services: Service[] = [
  {
    icon: Code2,
    title: 'Apps that go with you',
    detail: 'Web · Android · Windows · Linux',
    description:
      'High-performance applications for Windows, Linux, Android, and the web — one codebase, native feel.',
  },
  {
    icon: Cog,
    title: 'Make room for better work',
    detail: 'Workflows · Automation · Integrations',
    description:
      'Custom automation that removes repetitive work and connects the tools your business already runs on.',
  },
  {
    icon: Network,
    title: 'Connect the whole picture',
    detail: 'Custom platforms · APIs · Systems',
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
    description:
      'Sensible defaults and hardened practices baked into every project.',
  },
  {
    icon: Gauge,
    title: 'Built for speed',
    description:
      'Optimized for fast load, low resource use, and a snappy experience.',
  },
  {
    icon: LifeBuoy,
    title: 'Direct support',
    description:
      'Talk straight to the person who built it — no ticket queues, no runaround.',
  },
]

import astralcalcLogo from './assets/astralcalc_logo.png'
import queuewingLogo from './assets/queuewing-logo.svg'
import lifebinderLogo from './assets/lifebinder-logo.svg'
import gymlogLogo from './assets/gymlog_logo.png'
import bumpsyncLogo from './assets/bumpsync_logo.png'
import librapixLogo from './assets/librapix_logo.png'

export type Project = {
  name: string
  tagline: string
  description: string
  href: string
  cta: string
  tags: string[]
  badge?: string
  imageSurface?: 'dark'
  image?: string
  icon?: LucideIcon // fallback mark when a project has no logo image
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
    image: queuewingLogo,
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
    image: lifebinderLogo,
  },
  {
    name: 'AstralCalc',
    tagline: 'Calculate & convert, anywhere',
    description:
      'A comprehensive calculation and conversion app for Android — fast, clean, and packed with the tools you actually reach for.',
    href: 'https://play.google.com/store/apps/details?id=com.ahs.astralcalc',
    cta: 'Get it on Google Play',
    tags: ['Android', 'Utility'],
    image: astralcalcLogo,
    imageSurface: 'dark',
  },
  {
    name: 'GymLog',
    tagline: 'Track every workout',
    description:
      'A comprehensive workout tracker for Android — log your sessions, monitor progress, and analyze your gym activity over time.',
    href: 'https://play.google.com/store/apps/details?id=com.ahs.gymlog',
    cta: 'Get it on Google Play',
    tags: ['Android', 'Fitness'],
    image: gymlogLogo,
  },
  {
    name: 'BumpSync',
    tagline: 'Your pregnancy companion',
    description:
      'A pregnancy tracking app designed to support expecting parents through every stage of the journey.',
    href: 'https://play.google.com/store/apps/details?id=com.ahs.bumpsync',
    cta: 'Get it on Google Play',
    tags: ['Android', 'Health'],
    badge: 'Coming soon',
    image: bumpsyncLogo,
  },
  {
    name: 'LibraPix',
    tagline: 'Browse local media, untouched',
    description:
      'A cross-platform desktop app for browsing and managing local screenshots and recordings — without ever modifying the original files. Open source, built in Rust.',
    href: 'https://github.com/asad-albadi/LibraPix',
    cta: 'View on GitHub',
    tags: ['Desktop', 'Rust', 'Open source'],
    image: librapixLogo,
  },
  {
    name: 'streamdock-n3',
    tagline: 'Stream Dock N3 on Linux',
    description:
      'A Linux controller and diagnostics tool for the FHOOU / Mirabox Stream Dock N3 macro pad. Open source, built in Python.',
    href: 'https://github.com/asad-albadi/streamdock-n3',
    cta: 'View on GitHub',
    tags: ['Linux', 'Python', 'Open source'],
    icon: LayoutGrid,
  },
]

export const social = {
  linktree: 'https://linktr.ee/astralhive',
  portfolio: 'https://asadalbadi.dev/',
}

export const navigation = [
  { href: '#services', label: 'Services' },
  { href: '#work', label: 'Work' },
  { href: '#about', label: 'About' },
  { href: '#contact', label: 'Contact' },
]

export const principles = [
  {
    title: 'A direct line to the builder',
    description:
      'No layers between your idea and the person bringing it to life. Clear communication, honest answers, shared context.',
  },
  {
    title: 'Progress you can see',
    description:
      'Small iterations and frequent demos keep the work grounded in what matters. We learn, refine, and move forward together.',
  },
  {
    title: 'Ownership beyond launch',
    description:
      'Design, development, deployment, and ongoing care. One point of responsibility for the whole journey.',
  },
]
