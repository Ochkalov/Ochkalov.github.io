import {
  BarChart3,
  Bot,
  BriefcaseBusiness,
  Cpu,
  Home,
  Rocket,
  ScrollText,
  Sparkles,
  UserRound,
} from 'lucide-react'

export const navItems = [
  { id: 'home', label: 'Home', icon: Home },
  { id: 'overview', label: 'Overview', icon: ScrollText },
  { id: 'impact', label: 'Impact', icon: BarChart3 },
  { id: 'ai-fluency', label: 'AI Fluency', icon: Bot },
  { id: 'skills', label: 'Skills', icon: Sparkles },
  { id: 'labs', label: 'AI Labs', icon: Cpu },
  { id: 'experience', label: 'Experience', icon: BriefcaseBusiness },
  { id: 'projects', label: 'Projects', icon: Rocket },
  { id: 'contact', label: 'Contact', icon: UserRound },
]
