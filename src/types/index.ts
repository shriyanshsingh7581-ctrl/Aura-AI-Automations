export interface ServiceItem {
  id: string;
  name: string;
  shortDesc: string;
  fullDesc: string;
  bulletPoints: string[];
  techStack: string[];
  highlightMetric: string;
  iconName: string;
  previewType: 'voice' | 'web3d' | 'mobile' | 'cloud';
}

export interface ProjectItem {
  id: string;
  name: string;
  subtitle: string;
  description: string;
  tags: string[];
  category: 'AI' | 'Mobile' | 'Web' | 'Automation';
  stats: { label: string; value: string }[];
  deliverables: string[];
  tech: string[];
  accentGradient: string;
  caseStudyDetails: {
    challenge: string;
    solution: string;
    impact: string;
    architectureNotes: string[];
  };
}

export interface TechItem {
  name: string;
  role: string;
  category: string;
  description: string;
  badgeColor: string;
  iconType: string;
}

export interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  service: string;
  message: string;
  budget?: string;
}
