export interface ServiceFaqItem {
  question: string;
  answer: string;
}

export interface ServiceBenefitItem {
  title: string;
  description: string;
  metric: string;
}

export interface ServiceUseCaseItem {
  industry: string;
  scenario: string;
  outcome: string;
}

export interface ServiceWorkflowStep {
  step: string;
  title: string;
  detail: string;
}

export interface ServicePageConfig {
  slug: string;
  path: string;
  navLabel: string;
  shortTitle: string;
  seoTitle: string;
  metaDescription: string;
  canonicalUrl: string;
  heroBadge: string;
  h1: string;
  heroSubtitle: string;
  avatarSrc: string;
  avatarAlt: string;
  serviceType: string;
  targetAudienceSummary: string;
  overviewHeading: string;
  overviewParagraphs: string[];
  keyFeaturesHeading: string;
  keyFeatures: {
    title: string;
    description: string;
  }[];
  workflowHeading: string;
  workflowSteps: ServiceWorkflowStep[];
  benefitsHeading: string;
  benefits: ServiceBenefitItem[];
  useCasesHeading: string;
  useCases: ServiceUseCaseItem[];
  faqHeading: string;
  faqs: ServiceFaqItem[];
  ctaHeading: string;
  ctaDescription: string;
  relatedSlugs: string[];
}

export const SITE_URL = 'https://www.auraaiautomation.online';
export const BUSINESS_NAME = 'Aura AI Automations';
export const FOUNDER_NAME = 'Shriyansh Singh Rajpoot';
export const CONTACT_EMAIL = 'contact@aurai.tech';
export const APP_STUDIO_URL = 'https://app.auraai.sbs';
export const LOGO_URL = `${SITE_URL}/aura-logo.svg`;
export const OG_IMAGE_URL = `${SITE_URL}/og-image.png`;

export const SOCIAL_PROFILE_URLS = [
  'https://www.linkedin.com/in/shriyansh-singh-rajpoot-0b257738b?utm_source=share_via&utm_content=profile&utm_medium=member_android',
  'https://instagram.com/aura.ai.automations?obrf=bGl3bDhzbzI2eHl5',
  'https://wa.me/Aura.Ai.Automation',
  'https://app.auraai.sbs',
];

export const HOME_SEO = {
  title: 'Aura AI Automations | AI Receptionist & Business Automation India',
  description:
    'Automate business calls, customer support, WhatsApp inquiries and lead generation with Aura AI Automations. AI Receptionist and Voice Agents for Indian businesses.',
  canonicalUrl: `${SITE_URL}/`,
  ogType: 'website',
  ogImage: OG_IMAGE_URL,
  siteName: BUSINESS_NAME,
};

export const SERVICE_PAGES: Record<string, ServicePageConfig> = {
  'ai-receptionist': {
    slug: 'ai-receptionist',
    path: '/ai-receptionist',
    navLabel: 'AI Receptionist',
    shortTitle: '24/7 AI Receptionist',
    seoTitle: 'AI Receptionist for Indian Businesses | 24/7 Call & Booking Automation — Aura AI Automations',
    metaDescription:
      'Deploy a 24/7 AI Receptionist for your Indian business. Answer incoming calls in Hindi, English & Hinglish, book appointments automatically, and sync leads to your CRM.',
    canonicalUrl: `${SITE_URL}/ai-receptionist`,
    heroBadge: '24/7 AUTOMATED FRONT DESK • < 480MS LATENCY',
    h1: 'AI Receptionist for Indian Businesses — Answer Every Call & Book Appointments 24/7',
    heroSubtitle:
      'Never lose a customer to a busy phone line or after-hours missed call again. Our autonomous AI Receptionist answers inquiries in natural Hindi, English, and Hinglish, checks live calendar availability, and schedules appointments automatically.',
    avatarSrc: '/avatars/avatar-hero.png',
    avatarAlt: 'Aura AI Automations 24/7 AI Receptionist virtual front-desk engineer',
    serviceType: 'AI Receptionist & Automated Front-Desk Call Management',
    targetAudienceSummary:
      'Indian service businesses, salons, medical & dental clinics, coaching institutes, photography studios, and real estate offices.',
    overviewHeading: 'What Is an AI Receptionist and Why Indian Businesses Need One',
    overviewParagraphs: [
      'Across India, service-based businesses lose a large portion of daily inquiries simply because front-desk staff are busy attending walk-in clients, on another line, or off-duty after 8:00 PM. When a prospective client calls to ask about pricing, slot availability, or location directions and hears a busy tone, they immediately call the next business on Google Search or Maps.',
      'Aura AI Automations engineers production-grade AI Receptionists powered by our OmniDimension voice gateway and Sarvam AI multilingual language models. Unlike rigid IVR menus ("Press 1 for bookings"), our AI Receptionist holds fluid, sub-480ms natural conversations in Indian English, Hindi, Hinglish, and regional Indian languages—answering questions accurately, capturing caller details, booking calendar slots, and sending instant WhatsApp confirmations.',
    ],
    keyFeaturesHeading: 'Core Capabilities of Our AI Receptionist System',
    keyFeatures: [
      {
        title: 'Multilingual Hindi, English & Hinglish Fluency',
        description:
          'Built with Sarvam AI startup program speech models tuned for Indian accents, code-switching (Hinglish), and noisy mobile network conditions across Tier-1, Tier-2, and Tier-3 cities.',
      },
      {
        title: 'Real-Time Calendar & Slot Booking',
        description:
          'Connects directly to Google Calendar, Cal.com, or your custom booking database to check live slot availability, prevent double-bookings, and schedule or reschedule appointments on the call.',
      },
      {
        title: 'Instant WhatsApp & SMS Follow-Ups',
        description:
          'The moment a call concludes, our self-hosted n8n workflow dispatches a WhatsApp confirmation message with appointment details, location pin, or brochure links.',
      },
      {
        title: 'Intelligent Warm Call Transfer',
        description:
          'When a caller has a complex or urgent request that requires human judgment, the AI Receptionist summarizes the context and warm-transfers the live call to your manager or staff member.',
      },
      {
        title: 'Automated CRM Lead Logging & Transcripts',
        description:
          'Every incoming inquiry is transcribed, tagged by intent (Booking, Pricing Inquiry, Support, Follow-up), and logged into Firebase, HubSpot, Zoho CRM, or Google Sheets in real time.',
      },
      {
        title: 'Zero Concurrent Call Limits',
        description:
          'Whether 1 caller dials in or 50 customers call simultaneously during a festive promotion or weekend rush, every single caller is greeted on the first ring with zero hold time.',
      },
    ],
    workflowHeading: 'How Your Automated AI Front Desk Works Step-by-Step',
    workflowSteps: [
      {
        step: '01',
        title: 'Incoming Call Reception (< 480ms Response)',
        detail:
          'A customer dials your existing business phone number or SIP trunk. The AI Receptionist picks up immediately with your customized brand greeting.',
      },
      {
        step: '02',
        title: 'Natural Intent & Language Detection',
        detail:
          'The system adapts automatically to whether the caller speaks in English, Hindi, or Hinglish, answering specific FAQs about your services, packages, timings, and pricing.',
      },
      {
        step: '03',
        title: 'Live Slot Verification & Confirmation',
        detail:
          'If the caller wants to book a visit, consultation, or demo, the AI checks your live schedule, locks in their preferred time slot, and collects their name and contact details.',
      },
      {
        step: '04',
        title: 'Post-Call WhatsApp & CRM Automation',
        detail:
          'Within seconds of hanging up, the caller receives a WhatsApp confirmation message and your team receives a structured lead summary with full call recording and transcript.',
      },
    ],
    benefitsHeading: 'Measurable Business Impact of Deploying an AI Receptionist',
    benefits: [
      {
        title: '100% Call Answer Rate 24/7/365',
        description:
          'Capture late-night, early-morning, Sunday, and public holiday inquiries that would otherwise go unanswered.',
        metric: 'Zero Missed Calls',
      },
      {
        title: 'Sub-Second Conversational Speed',
        description:
          'Engineered over low-latency WebRTC and SIP streaming so callers experience natural human-like turn-taking.',
        metric: '< 480ms Latency',
      },
      {
        title: 'Save Front-Desk Operational Hours',
        description:
          'Free your in-house receptionist and team from repetitive pricing and timing questions so they can focus on in-person guests.',
        metric: '28+ Hrs Saved/Wk',
      },
      {
        title: 'Higher Lead-to-Visit Conversion',
        description:
          'Instant answers combined with immediate WhatsApp booking confirmations dramatically reduce prospect drop-off.',
        metric: 'Up to 2.4x Bookings',
      },
    ],
    useCasesHeading: 'Who Uses Aura AI Receptionists Across India?',
    useCases: [
      {
        industry: 'Coaching Institutes & EdTech Centers',
        scenario:
          'Parents and students calling during admission season to ask about batch timings, fee structures, scholarship tests, and demo classes.',
        outcome:
          'Automatically answers course FAQs, registers students for weekend demo classes, and sends syllabus PDFs via WhatsApp.',
      },
      {
        industry: 'Photography Studios & Event Planners',
        scenario:
          'Brides, families, and corporate clients inquiring about wedding date availability, pre-shoot packages, and portfolio reels while the photographer is on a shoot.',
        outcome:
          'Checks studio shoot calendar, qualifies event dates and budget, shares portfolio links on WhatsApp, and books a consultation call.',
      },
      {
        industry: 'Salons, Spas & Wellness Studios',
        scenario:
          'Clients calling to book haircuts, bridal makeup trials, or spa sessions during peak weekend hours when stylists are busy.',
        outcome:
          'Books stylist-specific slots directly into the salon calendar and sends automated appointment reminders.',
      },
      {
        industry: 'Healthcare, Dental & Skin Clinics',
        scenario:
          'Patients calling for OPD timings, doctor availability, consultation fees, or rescheduling existing appointments.',
        outcome:
          'Schedules patient slots smoothly, handles routine clinic FAQs, and routes urgent medical queries directly to clinic staff.',
      },
    ],
    faqHeading: 'Frequently Asked Questions About AI Receptionists',
    faqs: [
      {
        question: 'Can the AI Receptionist speak in Hindi and Hinglish naturally?',
        answer:
          'Yes. Our AI Receptionist is powered by Sarvam AI multilingual voice models and OmniDimension streaming architecture, allowing it to converse naturally in Indian English, Hindi, and conversational Hinglish with authentic Indian pronunciation.',
      },
      {
        question: 'Do I need to change my existing business phone number?',
        answer:
          'No. You can keep your existing business number and configure call forwarding (all calls, or when busy/unanswered/after-hours) to your dedicated Aura AI Receptionist SIP line.',
      },
      {
        question: 'How does the AI Receptionist know my business pricing, services, and timings?',
        answer:
          'During onboarding, we configure a structured knowledge base tailored to your business—including your exact service menu, pricing tiers, staff schedules, location landmarks, and booking rules. You can update these details anytime.',
      },
      {
        question: 'What happens if a caller asks something outside the AI knowledge base?',
        answer:
          'If a caller asks an unusual question or explicitly requests to speak with a human, the AI Receptionist either executes a live warm transfer to your designated staff number or takes a detailed message and alerts your team immediately on WhatsApp.',
      },
      {
        question: 'Can it integrate with Google Calendar, Zoho, HubSpot, or Google Sheets?',
        answer:
          'Yes. Using our self-hosted n8n and Firebase real-time automation pipelines, every call and booking syncs bi-directionally with Google Calendar, Cal.com, Google Sheets, HubSpot, Zoho CRM, or your custom backend.',
      },
    ],
    ctaHeading: 'Ready to Automate Your Front Desk with a 24/7 AI Receptionist?',
    ctaDescription:
      'Launch your custom voice receptionist on app.auraai.sbs or schedule a 15-minute discovery call with our engineering team to hear a live Hindi & English voice demo.',
    relatedSlugs: [
      'ai-voice-agent',
      'whatsapp-ai-chatbot',
      'ai-receptionist-for-salon',
      'ai-receptionist-for-clinic',
    ],
  },

  'ai-voice-agent': {
    slug: 'ai-voice-agent',
    path: '/ai-voice-agent',
    navLabel: 'AI Voice Agent',
    shortTitle: 'AI Voice Calling Agents',
    seoTitle: 'AI Voice Calling Agents India | Inbound & Outbound Call Automation — Aura AI Automations',
    metaDescription:
      'Custom AI Voice Calling Agents for Indian businesses. Automate inbound customer support, outbound lead qualification, appointment reminders, and CRM workflows with <480ms latency.',
    canonicalUrl: `${SITE_URL}/ai-voice-agent`,
    heroBadge: 'OMNIDIMENSION + SARVAM AI • SUB-480MS VOICE ENGINE',
    h1: 'AI Voice Calling Agents for Inbound Support & Outbound Lead Qualification',
    heroSubtitle:
      'Scale your phone operations without scaling call-center headcount. Aura AI Automations engineers ultra-low-latency AI Voice Calling Agents that qualify leads within 30 seconds of form submission, confirm appointments, and resolve customer support queries 24/7.',
    avatarSrc: '/avatars/avatar-services.png',
    avatarAlt: 'Aura AI Automations AI Voice Calling Agent Architecture Engineer',
    serviceType: 'AI Voice Calling Agents & Conversational Telephony Automation',
    targetAudienceSummary:
      'High-growth Indian businesses, real estate agencies, coaching institutes, D2C brands, financial services, clinics, and service enterprises.',
    overviewHeading: 'Next-Generation AI Voice Calling Agents Built for Indian Telephony',
    overviewParagraphs: [
      'Speed-to-lead is the single biggest multiplier in business conversion. When a prospect fills out an inquiry form on your website, Instagram ad, or Facebook lead form, calling them within 60 seconds increases qualification rates dramatically compared to calling hours later. Yet human telecalling teams cannot dial every lead instantaneously—especially during peak campaigns or outside office hours.',
      'Aura AI Automations builds autonomous inbound and outbound AI Voice Calling Agents engineered on our OmniDimension real-time audio gateway and Sarvam AI multilingual models. Operating at sub-480ms speech-to-speech latency, our voice agents sound natural, handle interruptions gracefully, converse in Hindi, English, and Hinglish, and trigger real-time backend workflows across your CRM and WhatsApp.',
    ],
    keyFeaturesHeading: 'Technical Advantages of Aura AI Voice Calling Agents',
    keyFeatures: [
      {
        title: 'Sub-480ms WebRTC & SIP Audio Streaming',
        description:
          'We eliminate the awkward 2–3 second pauses common in legacy voice bots by streaming Opus audio packets directly between SIP telephony gateways and Sarvam AI inference nodes.',
      },
      {
        title: 'Instant Outbound Speed-to-Lead Calling',
        description:
          'Trigger an automated outbound voice call within seconds of a prospect submitting a website form, Meta Lead Ad, or WhatsApp inquiry to qualify their intent while interest is highest.',
      },
      {
        title: 'Natural Barge-In & Interruption Handling',
        description:
          'Full-duplex voice activity detection (VAD) allows callers to interrupt, change topics, or ask clarifying questions mid-sentence just like a real human phone conversation.',
      },
      {
        title: 'Dynamic Tool Calling During Live Calls',
        description:
          'While speaking with the customer, the AI Voice Agent can query your database for order status, check appointment slots, calculate quotes, or trigger a WhatsApp payment/brochure link.',
      },
      {
        title: 'Automated Appointment Reminders & No-Show Reduction',
        description:
          'Schedule outbound confirmation calls 24 hours or 2 hours before booked appointments—allowing clients to confirm or reschedule by voice automatically.',
      },
      {
        title: 'Sentiment Scoring & Structured Call Summaries',
        description:
          'Every call generates an AI-extracted summary, lead qualification score (Hot / Warm / Cold), objection tags, and full audio recording synced to your CRM.',
      },
    ],
    workflowHeading: 'How Our AI Voice Agent Pipeline Executes in Production',
    workflowSteps: [
      {
        step: '01',
        title: 'Event Trigger or Inbound Dial',
        detail:
          'Either a customer calls your helpline (inbound) or a webhook from your CRM/lead form triggers an instant outbound call via our n8n telephony cluster.',
      },
      {
        step: '02',
        title: 'Real-Time Multilingual Conversation',
        detail:
          'The AI Voice Agent greets the prospect by name, verifies their requirement, answers product or service questions, and qualifies budget, timeline, or preferred slot.',
      },
      {
        step: '03',
        title: 'Live Database & Calendar Action',
        detail:
          'Based on the conversation, the agent books a meeting on your sales or clinic calendar, updates lead status in your CRM, or transfers hot prospects to a live closer.',
      },
      {
        step: '04',
        title: 'Multi-Channel Follow-Up Dispatch',
        detail:
          'Immediately after the call, the system sends relevant documents, calendar invites, or WhatsApp messages and logs analytics in your dashboard.',
      },
    ],
    benefitsHeading: 'Why Indian Enterprises Choose Aura AI Voice Agents',
    benefits: [
      {
        title: 'Instant Lead Response Under 30 Seconds',
        description:
          'Contact every website or ad lead immediately before they lose interest or speak to a competitor.',
        metric: '< 30s Speed-to-Lead',
      },
      {
        title: 'Massive Parallel Calling Capacity',
        description:
          'Run hundreds of concurrent inbound and outbound voice conversations without hiring or training temporary telecallers.',
        metric: 'Unlimited Concurrency',
      },
      {
        title: 'Consistent Brand Voice & Zero Fatigue',
        description:
          'Every single caller receives polite, accurate, and compliant information whether it is the 1st call of the day or the 1,000th.',
        metric: '99.98% Uptime SLA',
      },
      {
        title: 'Seamless CRM & n8n Synchronization',
        description:
          'Zero manual data entry—every call outcome, recording, and next action is written directly into your database.',
        metric: '100% Automated Logging',
      },
    ],
    useCasesHeading: 'High-ROI Use Cases for AI Voice Calling Agents',
    useCases: [
      {
        industry: 'Coaching Institutes & Universities',
        scenario:
          'Following up with thousands of student inquiries after exam results or webinar registrations to counsel them on batch options.',
        outcome:
          'Qualifies student stream and target exam, books counseling visits, and sends course brochures on WhatsApp automatically.',
      },
      {
        industry: 'Real Estate Developers & Brokerages',
        scenario:
          'Qualifying property portal and Facebook ad leads on budget, configuration (2BHK/3BHK), and site-visit availability.',
        outcome:
          'Filters high-intent buyers, schedules weekend site visits, and assigns verified leads to senior relationship managers.',
      },
      {
        industry: 'Salons, Clinics & Diagnostic Labs',
        scenario:
          'Calling patients and clients to confirm upcoming appointments, share preparation instructions, or follow up on seasonal health/beauty packages.',
        outcome:
          'Cuts appointment no-shows significantly and fills last-minute cancellations from the waitlist.',
      },
      {
        industry: 'Photography Studios & Service Agencies',
        scenario:
          'Responding immediately to Instagram and website quote requests with a warm discovery call to capture event dates and deliverables.',
        outcome:
          'Converts social media inquiries into booked discovery sessions without manual phone tag.',
      },
    ],
    faqHeading: 'Frequently Asked Questions About AI Voice Calling Agents',
    faqs: [
      {
        question: 'What is the difference between an AI Receptionist and an AI Voice Calling Agent?',
        answer:
          'An AI Receptionist primarily focuses on answering inbound front-desk calls, greeting callers, answering FAQs, and scheduling appointments. An AI Voice Calling Agent encompasses both inbound support and automated outbound calling—such as instant speed-to-lead qualification calls, appointment reminder calls, feedback collection, and payment/renewal follow-ups.',
      },
      {
        question: 'Can I build and test a Voice Calling Agent directly on your platform?',
        answer:
          'Yes! You can launch our voice agent studio directly at app.auraai.sbs or test our interactive voice simulator right here on our website to experience the response speed and conversation flow.',
      },
      {
        question: 'How low is the voice latency during a real phone call?',
        answer:
          'Our OmniDimension gateway paired with Sarvam AI streaming models achieves sub-480ms turn-around latency in production, ensuring conversations feel natural and responsive.',
      },
      {
        question: 'Can the AI Voice Agent trigger WhatsApp messages during or after a call?',
        answer:
          'Yes. Our voice agents are deeply integrated with self-hosted n8n workflows and WhatsApp Business APIs, allowing the agent to send location pins, pricing PDFs, booking links, or payment links immediately.',
      },
      {
        question: 'How are call recordings and lead data stored?',
        answer:
          'All call transcripts, sentiment tags, and structured lead fields are synced in real time to your preferred system—such as Firebase Realtime Database, Google Sheets, HubSpot, Zoho CRM, or your custom webhook endpoint.',
      },
    ],
    ctaHeading: 'Deploy Your Custom AI Voice Calling Agent Today',
    ctaDescription:
      'Start building directly on app.auraai.sbs or book a 15-minute technical architecture session with Aura AI Automations to design your inbound and outbound voice pipeline.',
    relatedSlugs: [
      'ai-receptionist',
      'whatsapp-ai-chatbot',
      'ai-receptionist-for-salon',
      'ai-receptionist-for-clinic',
    ],
  },

  'whatsapp-ai-chatbot': {
    slug: 'whatsapp-ai-chatbot',
    path: '/whatsapp-ai-chatbot',
    navLabel: 'WhatsApp AI Chatbot',
    shortTitle: 'WhatsApp AI Chatbots',
    seoTitle: 'WhatsApp AI Chatbot for Business India | 24/7 Lead & Booking Automation — Aura AI Automations',
    metaDescription:
      'Automate WhatsApp customer support, lead qualification, catalog inquiries, and appointment booking with custom WhatsApp AI Chatbots for Indian businesses.',
    canonicalUrl: `${SITE_URL}/whatsapp-ai-chatbot`,
    heroBadge: '24/7 WHATSAPP AUTOMATION • N8N + MULTILINGUAL LLMS',
    h1: 'WhatsApp AI Chatbots for Indian Businesses — Automate Inquiries, Leads & Bookings',
    heroSubtitle:
      'In India, business happens on WhatsApp. Move beyond rigid button-only auto-replies with an intelligent WhatsApp AI Chatbot that understands natural Hindi, English, Hinglish, and voice notes—qualifying leads, sharing catalogs, and booking appointments 24/7.',
    avatarSrc: '/avatars/avatar-projects.png',
    avatarAlt: 'Aura AI Automations WhatsApp AI Chatbot & n8n Workflow Engineer',
    serviceType: 'WhatsApp AI Chatbot & Conversational Lead Automation',
    targetAudienceSummary:
      'Indian businesses, clinics, salons, coaching institutes, photography studios, e-commerce brands, and B2B service providers.',
    overviewHeading: 'Why Traditional Rule-Based WhatsApp Bots Fail Indian Customers',
    overviewParagraphs: [
      'WhatsApp is the primary communication channel for Indian consumers. Whether a client wants to check salon package prices, ask a clinic about doctor availability, request a photography portfolio, or inquire about coaching batch fees, they prefer sending a quick WhatsApp message—often in Hinglish or as a voice note.',
      'Standard rule-based chatbots frustrate customers with rigid "Reply 1, 2, or 3" menus that break the moment a customer asks a specific question. Aura AI Automations engineers intelligent, context-aware WhatsApp AI Chatbots powered by multilingual LLMs, self-hosted n8n automation clusters, and Firebase Realtime Databases. Your bot converses naturally, understands customer intent, processes voice notes, checks live calendar availability, and syncs every qualified lead directly into your CRM.',
    ],
    keyFeaturesHeading: 'What Our Custom WhatsApp AI Chatbots Deliver',
    keyFeatures: [
      {
        title: 'Natural Conversations in English, Hindi & Hinglish',
        description:
          'Customers can type naturally in English, Hindi, or mixed Hinglish ("Kal evening 5 PM ka slot available hai kya?") and receive accurate, polite, brand-aligned replies.',
      },
      {
        title: 'WhatsApp Voice Note Understanding',
        description:
          'Many Indian users prefer sending voice notes instead of typing. Our pipeline transcribes incoming WhatsApp audio notes automatically and responds with clear text or audio replies.',
      },
      {
        title: 'Automated Appointment Booking & Reminders',
        description:
          'Checks real-time slot availability on Google Calendar or your booking system, confirms appointments inside WhatsApp, and sends automated pre-visit reminders.',
      },
      {
        title: 'Smart Lead Qualification & Scoring',
        description:
          'Asks conversational qualifying questions (service needed, preferred date, budget, location), scores lead intent, and alerts your sales team immediately for hot prospects.',
      },
      {
        title: 'Rich Media, Catalogs & Brochure Dispatch',
        description:
          'Automatically sends relevant PDF brochures, service price lists, photography lookbooks, location maps, or booking links based on what the customer asks for.',
      },
      {
        title: 'Unified Omni-Channel Sync with AI Voice Agents',
        description:
          'Connects seamlessly with our AI Receptionist and Voice Calling Agents—so a phone call can trigger a WhatsApp follow-up, or a high-intent WhatsApp chat can trigger an instant voice call.',
      },
    ],
    workflowHeading: 'How Our Self-Hosted WhatsApp Automation Pipeline Works',
    workflowSteps: [
      {
        step: '01',
        title: 'Instant Webhook Ingestion (< 100ms)',
        detail:
          'When a prospect messages your WhatsApp Business number or clicks a Click-to-WhatsApp ad, our self-hosted n8n listener receives the message immediately.',
      },
      {
        step: '02',
        title: 'Context Retrieval & Knowledge Base Lookup',
        detail:
          'The engine retrieves the customer’s conversation history from Firebase Realtime Database along with your verified business pricing, FAQs, and live slot availability.',
      },
      {
        step: '03',
        title: 'Intelligent LLM Response & Action Execution',
        detail:
          'The AI crafts a helpful, accurate reply, books the requested slot or shares the requested catalog, and updates your CRM or Google Sheet automatically.',
      },
      {
        step: '04',
        title: 'Seamless Human Handover When Needed',
        detail:
          'Your team can monitor chats or step in at any moment for high-ticket negotiations while the AI handles 90%+ of routine inquiries and follow-ups.',
      },
    ],
    benefitsHeading: 'Business Results from WhatsApp AI Automation',
    benefits: [
      {
        title: 'Instant 24/7 Response Within Seconds',
        description:
          'Reply to Instagram/Facebook Click-to-WhatsApp ad leads and website visitors within 3 seconds, day or night.',
        metric: '< 3s Reply Time',
      },
      {
        title: 'Zero Per-Task SaaS Subscription Taxes',
        description:
          'Engineered on self-hosted n8n workflow clusters so you can process thousands of daily conversations without bloated middleware fees.',
        metric: '180k+ Daily Tasks',
      },
      {
        title: 'Recover Lost Leads with Smart Nurturing',
        description:
          'Automatically follow up with prospects who asked for pricing but didn’t complete their booking after 24 or 48 hours.',
        metric: '35%+ Lead Recovery',
      },
      {
        title: 'Save Hours of Repetitive Manual Chatting',
        description:
          'Eliminate copy-pasting the same brochure, location pin, and rate card dozens of times every day.',
        metric: '340+ Hrs Saved/Wk',
      },
    ],
    useCasesHeading: 'How Indian Businesses Use Aura WhatsApp AI Chatbots',
    useCases: [
      {
        industry: 'Photography Studios & Creative Agencies',
        scenario:
          'Clients messaging from Instagram reels asking for wedding shoot packages, maternity shoot rates, and available dates.',
        outcome:
          'Shares curated portfolio links, checks date availability, collects event details, and schedules a discovery call with the lead photographer.',
      },
      {
        industry: 'Salons, Spas & Makeup Artists',
        scenario:
          'Customers messaging on WhatsApp to ask about bridal packages, keratine treatment offers, and today’s available slots.',
        outcome:
          'Sends service menu cards, books the exact time slot with the preferred stylist, and sends a location pin automatically.',
      },
      {
        industry: 'Clinics, Dentists & Diagnostic Centers',
        scenario:
          'Patients messaging for appointment booking, clinic timings, doctor consultation fees, or lab report updates.',
        outcome:
          'Books OPD appointments 24/7, shares clinic address and preparation guidelines, and sends automated visit reminders.',
      },
      {
        industry: 'Coaching Institutes & Training Academies',
        scenario:
          'Students and parents inquiring on WhatsApp about new batch start dates, fee structure, and demo class registration.',
        outcome:
          'Answers syllabus questions, sends course PDF brochures, registers students for demo sessions, and logs leads in CRM.',
      },
    ],
    faqHeading: 'Frequently Asked Questions About WhatsApp AI Chatbots',
    faqs: [
      {
        question: 'Does the WhatsApp AI Chatbot work with the official WhatsApp Business API?',
        answer:
          'Yes. We integrate directly with the official Meta WhatsApp Cloud API and approved Business Solution Providers (BSPs), ensuring high deliverability, green-tick readiness, and compliance with WhatsApp business policies.',
      },
      {
        question: 'Can the chatbot understand Hinglish and regional Indian phrasing?',
        answer:
          'Yes. Because our chatbot uses advanced multilingual language models rather than rigid keyword matching, it effortlessly understands conversational Hinglish, Hindi, and English.',
      },
      {
        question: 'Can my team take over a WhatsApp chat if a customer needs personal attention?',
        answer:
          'Absolutely. Whenever a customer requests human assistance or reaches a high-value negotiation stage, the bot pauses automated replies for that thread and notifies your team immediately.',
      },
      {
        question: 'Can the WhatsApp bot and AI Voice Receptionist work together?',
        answer:
          'Yes—that is one of Aura AI Automations’ core strengths. When a customer calls your AI Receptionist, the voice agent can immediately send them a WhatsApp message with their booking confirmation or brochure. Conversely, if a lead chats on WhatsApp and requests a callback, our AI Voice Agent can call them automatically.',
      },
      {
        question: 'Where is customer lead data stored?',
        answer:
          'All conversation logs, contact details, and booking records are synced in real time to your choice of Google Sheets, Firebase Realtime Database, HubSpot, Zoho CRM, or custom internal dashboards.',
      },
    ],
    ctaHeading: 'Turn Your Business WhatsApp into a 24/7 Automated Sales & Booking Engine',
    ctaDescription:
      'Connect with Aura AI Automations to architect a custom WhatsApp AI Chatbot and self-hosted n8n workflow tailored to your business.',
    relatedSlugs: [
      'ai-receptionist',
      'ai-voice-agent',
      'ai-receptionist-for-salon',
      'ai-receptionist-for-clinic',
    ],
  },

  'ai-receptionist-for-salon': {
    slug: 'ai-receptionist-for-salon',
    path: '/ai-receptionist-for-salon',
    navLabel: 'AI for Salons',
    shortTitle: 'AI Receptionist for Salons',
    seoTitle: 'AI Receptionist for Salons, Spas & Bridal Studios in India — Aura AI Automations',
    metaDescription:
      'Automate salon appointment bookings, bridal makeup inquiries, and WhatsApp reminders 24/7 with an AI Receptionist built for Indian salons, spas, and beauty studios.',
    canonicalUrl: `${SITE_URL}/ai-receptionist-for-salon`,
    heroBadge: 'BUILT FOR INDIAN SALONS, SPAS & BRIDAL STUDIOS',
    h1: 'AI Receptionist for Salons & Spas in India — 24/7 Appointment Booking & Bridal Inquiry Automation',
    heroSubtitle:
      'When your stylists and front-desk manager are busy attending walk-in clients on a crowded weekend, missed phone calls mean lost revenue. Our AI Receptionist for Salons answers every call in polite Hindi, English, and Hinglish, explains your service packages, and books stylist slots 24/7.',
    avatarSrc: '/avatars/avatar-about.png',
    avatarAlt: 'Aura AI Automations AI Receptionist solution for Indian Salons and Spas',
    serviceType: 'AI Receptionist & Automated Booking System for Salons and Spas',
    targetAudienceSummary:
      'Unisex hair salons, luxury spas, bridal makeup studios, nail & lash bars, and multi-branch salon chains across India.',
    overviewHeading: 'Stop Losing High-Value Salon & Bridal Clients to Busy Phone Lines',
    overviewParagraphs: [
      'In the Indian beauty and wellness industry, peak calling hours coincide with peak floor hours. Between Friday evening and Sunday night—and throughout the Indian wedding and festive seasons—your front-desk phone rings non-stop with clients asking: "Do you have a slot for a haircut and blow-dry at 5 PM?", "What are your bridal and pre-bridal package rates?", or "Is your senior stylist available tomorrow?"',
      'When calls go unanswered or clients are put on hold while the receptionist processes a bill, prospective clients simply book with another salon nearby. Aura AI Automations provides a dedicated AI Receptionist for Salons & Spas that answers every call on the first ring, speaks warmly in Hindi, English, or Hinglish, checks live chair and stylist availability, books appointments automatically, and sends instant WhatsApp confirmations.',
    ],
    keyFeaturesHeading: 'Features Designed Specifically for Salons, Spas & Makeup Studios',
    keyFeatures: [
      {
        title: 'Stylist & Service-Duration Aware Booking',
        description:
          'Understands the difference between a 30-minute express service and a 3-hour keratin or bridal trial—checking accurate time blocks on your calendar before confirming a slot.',
      },
      {
        title: 'Bridal & Pre-Bridal Package Qualification',
        description:
          'Warmly handles high-ticket bridal makeup inquiries by capturing wedding dates, venue location, number of family members, and sending your bridal lookbook on WhatsApp.',
      },
      {
        title: '24/7 After-Hours & Late-Night Booking',
        description:
          'Many working professionals look to book weekend salon or spa sessions after 9:00 PM. Your AI Receptionist books their slots while your salon is closed for the night.',
      },
      {
        title: 'Automated WhatsApp Reminders to Cut No-Shows',
        description:
          'Automatically sends WhatsApp confirmation messages upon booking and reminder alerts 3 hours before the appointment, allowing clients to confirm or reschedule easily.',
      },
      {
        title: 'Natural Hindi, English & Hinglish Conversation',
        description:
          'Whether a client asks in English, Hindi, or casual Hinglish about hair spa pricing, waxing packages, or festive combo offers, the AI responds with natural warmth.',
      },
      {
        title: 'Automated Post-Visit Follow-Ups & Repeat Bookings',
        description:
          'Trigger automated WhatsApp or voice check-ins 4–6 weeks after a haircut, root touch-up, or facial to invite clients back for their next session.',
      },
    ],
    workflowHeading: 'How a Salon Client Books Through Your AI Receptionist',
    workflowSteps: [
      {
        step: '01',
        title: 'Client Calls Your Salon Number',
        detail:
          'The AI Receptionist answers immediately with your salon’s custom greeting (e.g., "Welcome to [Your Salon Name], how may I pamper you today?").',
      },
      {
        step: '02',
        title: 'Service Inquiry & Stylist Selection',
        detail:
          'The caller asks about service rates, festive offers, or requests a specific date, time, and stylist in English, Hindi, or Hinglish.',
      },
      {
        step: '03',
        title: 'Real-Time Calendar Slot Confirmation',
        detail:
          'The AI checks your live salon schedule, confirms the exact slot (or suggests the nearest available time), and records the client’s name and service request.',
      },
      {
        step: '04',
        title: 'WhatsApp Confirmation & Location Pin',
        detail:
          'Immediately after the call, the client receives a WhatsApp message with their appointment time, service summary, and Google Maps directions to your salon.',
      },
    ],
    benefitsHeading: 'Why Salon & Spa Owners Across India Love Aura AI',
    benefits: [
      {
        title: 'Capture Every Weekend & Festive Rush Call',
        description:
          'Handle 10+ simultaneous calls during Karwa Chauth, Diwali, and wedding season peaks without a single busy tone.',
        metric: '100% Calls Answered',
      },
      {
        title: 'Reduce Empty Chairs & Last-Minute No-Shows',
        description:
          'Automated WhatsApp and voice confirmation workflows ensure clients show up on time or reschedule in advance.',
        metric: 'Fewer No-Shows',
      },
      {
        title: 'Calm, Focused In-Salon Guest Experience',
        description:
          'Your front-desk manager can focus 100% on welcoming walk-in guests, upselling retail products, and billing smoothly.',
        metric: 'Zero Desk Chaos',
      },
      {
        title: 'Never Miss a High-Ticket Bridal Lead',
        description:
          'Every bridal inquiry receives instant portfolio links on WhatsApp and a scheduled trial/consultation slot.',
        metric: '24/7 Bridal Capture',
      },
    ],
    useCasesHeading: 'Tailored Solutions for Every Beauty & Wellness Format',
    useCases: [
      {
        industry: 'High-Street Unisex Hair & Beauty Salons',
        scenario:
          'Managing high daily call volumes for haircuts, hair coloring, keratin treatments, and grooming packages.',
        outcome:
          'Automates 85%+ of routine slot bookings and rate inquiries while keeping stylists’ calendars organized.',
      },
      {
        industry: 'Bridal Makeup Artists & Luxury Studios',
        scenario:
          'Responding to brides and families calling while the artist is busy in the middle of a bridal session.',
        outcome:
          'Captures wedding dates, venue city, and makeup preferences, sends the Instagram/PDF lookbook on WhatsApp, and books a consultation.',
      },
      {
        industry: 'Day Spas, Ayurveda & Wellness Retreats',
        scenario:
          'Guests calling to inquire about couple massage packages, therapist availability, and membership plans.',
        outcome:
          'Explains therapy durations and pricing calmly, books therapy rooms, and sends pre-arrival guidelines.',
      },
      {
        industry: 'Multi-Outlet Salon Chains',
        scenario:
          'Centralizing call handling and appointment routing across multiple city branches from a single intelligent voice gateway.',
        outcome:
          'Routes bookings to the caller’s nearest branch calendar and provides unified lead analytics across outlets.',
      },
    ],
    faqHeading: 'Frequently Asked Questions — AI Receptionist for Salons',
    faqs: [
      {
        question: 'Can the AI Receptionist handle bookings for multiple stylists or therapy rooms?',
        answer:
          'Yes. We configure your booking workflow around your specific stylists, chairs, or therapy rooms so the AI checks individual availability and service duration before locking in a slot.',
      },
      {
        question: 'What if a client wants to reschedule or cancel their salon appointment?',
        answer:
          'The client can simply call back or reply on WhatsApp. The AI Receptionist identifies their existing booking, frees up the old slot on your calendar, and moves them to their new preferred time.',
      },
      {
        question: 'Can it explain our salon’s seasonal combos, bridal packages, and membership cards?',
        answer:
          'Yes. Your salon’s complete service menu, package pricing, and ongoing festive promotions are loaded into the AI’s knowledge base and can be updated anytime you launch a new offer.',
      },
      {
        question: 'Will it send our salon’s Google Maps location and bridal catalog on WhatsApp?',
        answer:
          'Yes. Immediately after a call, our WhatsApp automation pipeline can send your salon’s Google Maps pin, price menu PDF, or bridal portfolio automatically.',
      },
      {
        question: 'How quickly can we set this up for our salon?',
        answer:
          'You can test our voice platform immediately on app.auraai.sbs, and our engineering team typically deploys a customized salon AI Receptionist with calendar and WhatsApp integration within a few days.',
      },
    ],
    ctaHeading: 'Upgrade Your Salon Front Desk with a 24/7 AI Receptionist',
    ctaDescription:
      'Stop losing bookings to missed calls during busy salon hours. Launch on app.auraai.sbs or book a 15-minute live demo with Aura AI Automations.',
    relatedSlugs: [
      'ai-receptionist',
      'whatsapp-ai-chatbot',
      'ai-voice-agent',
      'ai-receptionist-for-clinic',
    ],
  },

  'ai-receptionist-for-clinic': {
    slug: 'ai-receptionist-for-clinic',
    path: '/ai-receptionist-for-clinic',
    navLabel: 'AI for Clinics',
    shortTitle: 'AI Receptionist for Clinics',
    seoTitle: 'AI Receptionist for Clinics, Doctors & Dental Practices India — Aura AI Automations',
    metaDescription:
      '24/7 AI Receptionist for Indian medical clinics, dental practices, dermatology centers, and diagnostic labs. Automate OPD appointment booking, Hindi/English patient calls & WhatsApp reminders.',
    canonicalUrl: `${SITE_URL}/ai-receptionist-for-clinic`,
    heroBadge: 'BUILT FOR INDIAN CLINICS, DOCTORS & HEALTHCARE PRACTICES',
    h1: 'AI Receptionist for Clinics & Healthcare Practices in India — 24/7 OPD Booking & Patient Call Automation',
    heroSubtitle:
      'Give every calling patient a calm, immediate response on the first ring. Our AI Receptionist for Clinics answers patient calls 24/7 in empathetic Hindi, English, and Hinglish, schedules OPD consultations, shares clinic timings, and sends automated WhatsApp appointment reminders.',
    avatarSrc: '/avatars/avatar-contact.png',
    avatarAlt: 'Aura AI Automations 24/7 AI Receptionist for Indian Clinics and Doctors',
    serviceType: 'AI Receptionist & Patient Appointment Automation for Healthcare Clinics',
    targetAudienceSummary:
      'Dental clinics, dermatology & skin clinics, physiotherapy centers, eye hospitals, pediatricians, multi-specialty polyclinics, and diagnostic labs in India.',
    overviewHeading: 'Why Indian Clinics & Doctors Are Adopting 24/7 AI Receptionists',
    overviewParagraphs: [
      'In busy Indian medical, dental, and skin clinics, the front-desk receptionist is constantly juggling walk-in patient registration, printing prescriptions, collecting consultation fees, and answering an endlessly ringing phone. When patients call to check if the doctor is sitting in OPD today, ask about consultation charges, or book an evening slot, they frequently encounter busy lines or rushed responses.',
      'Even worse, patients calling before 9:00 AM, during afternoon break hours, or after 8:30 PM often cannot book an appointment at all. Aura AI Automations engineers a polite, reliable AI Receptionist for Clinics that eliminated over 28 weekly front-desk phone hours for our early partner healthcare clinics—answering calls in under 480ms in Hindi, English, and Hinglish, scheduling OPD slots accurately, and immediately escalating urgent medical calls to clinic staff.',
    ],
    keyFeaturesHeading: 'Healthcare-Ready Capabilities for Modern Indian Clinics',
    keyFeatures: [
      {
        title: '24/7 OPD & Doctor Slot Scheduling',
        description:
          'Checks real-time doctor schedules across morning and evening OPD sessions, books new consultations or follow-up visits, and prevents slot overcrowding.',
      },
      {
        title: 'Empathetic Multilingual Patient Communication',
        description:
          'Powered by Sarvam AI multilingual models so elderly patients, parents, and local callers can converse comfortably in Hindi, English, or Hinglish.',
      },
      {
        title: 'Automated WhatsApp Appointment & Follow-Up Reminders',
        description:
          'Sends instant WhatsApp booking confirmations with doctor name, token/time slot, clinic Google Maps location, and pre-visit instructions.',
      },
      {
        title: 'Strict Non-Diagnostic Guardrails & Urgent Escalation',
        description:
          'Configured with strict administrative boundaries: the AI never provides medical advice or diagnosis, and immediately transfers urgent or emergency calls to your duty staff.',
      },
      {
        title: 'Doctor Delay & Rescheduling Notifications',
        description:
          'If a doctor is delayed in a procedure or rounds, our outbound voice and WhatsApp workflow can automatically notify booked patients of updated OPD timings.',
      },
      {
        title: 'Seamless Sync with Clinic Calendars & Sheets',
        description:
          'Logs patient name, contact details, visit reason, and preferred doctor into Google Calendar, Google Sheets, Firebase, or your clinic management webhook.',
      },
    ],
    workflowHeading: 'How Patient Call & Appointment Automation Works',
    workflowSteps: [
      {
        step: '01',
        title: 'Instant Empathetic Greeting on First Ring',
        detail:
          'A patient calls your clinic landline or mobile number. The AI Receptionist answers immediately with your clinic’s custom welcome message.',
      },
      {
        step: '02',
        title: 'OPD Timing, Fee & Doctor Availability Check',
        detail:
          'The AI answers routine administrative questions—such as doctor specialization, OPD hours, consultation fees, parking/address landmarks, and available slots.',
      },
      {
        step: '03',
        title: 'Appointment Confirmation or Live Staff Transfer',
        detail:
          'For bookings, the AI locks in the patient’s preferred OPD slot. For urgent clinical matters, it warm-transfers the call directly to your clinic nurse or front desk.',
      },
      {
        step: '04',
        title: 'WhatsApp Slip & Automated Recall',
        detail:
          'The patient receives a digital appointment confirmation on WhatsApp, and your clinic reception dashboard updates in real time.',
      },
    ],
    benefitsHeading: 'Proven Operational Impact for Healthcare & Dental Clinics',
    benefits: [
      {
        title: 'Save 28+ Weekly Front-Desk Hours',
        description:
          'Free your clinic receptionist from repetitive phone inquiries so they can care for patients physically present in your waiting room.',
        metric: '28+ Hrs Saved/Wk',
      },
      {
        title: 'Capture Morning, Afternoon & Late-Night Bookings',
        description:
          'Patients can book next-day morning OPD slots even when calling at 10:30 PM after clinic hours.',
        metric: '24/7 Patient Access',
      },
      {
        title: 'Reduce Patient No-Shows & Waiting Room Crowding',
        description:
          'Staggered time-slot booking and automated WhatsApp reminders keep OPD queues predictable and organized.',
        metric: 'Organized OPD Flow',
      },
      {
        title: 'Sub-480ms Natural Voice Response',
        description:
          'No frustrating keypad menus—patients simply speak naturally in Hindi, English, or Hinglish.',
        metric: '< 480ms Latency',
      },
    ],
    useCasesHeading: 'Designed for Specialized Clinics & Healthcare Centers',
    useCases: [
      {
        industry: 'Dental Clinics & Orthodontic Practices',
        scenario:
          'Patients calling to book root canal follow-ups, scaling/cleaning sessions, aligner consultations, or toothache slots.',
        outcome:
          'Books chair time according to procedure type, sends clinic location on WhatsApp, and schedules 6-month dental checkup recalls.',
      },
      {
        industry: 'Dermatology, Skin & Hair Transplant Clinics',
        scenario:
          'Prospective patients inquiring about laser treatments, hydrafacials, acne consultations, and dermatologist OPD timings.',
        outcome:
          'Answers treatment availability questions discreetly, books dermatologist consultations, and shares pre-appointment guidelines.',
      },
      {
        industry: 'Physiotherapy, Orthopedic & Rehab Centers',
        scenario:
          'Patients managing multi-session therapy schedules, rescheduling daily slots, or inquiring about home-visit availability.',
        outcome:
          'Automates recurring session scheduling and rescheduling without tying up therapists on the phone.',
      },
      {
        industry: 'Multi-Specialty Polyclinics & Diagnostic Labs',
        scenario:
          'High daily call volume asking which specialist doctor sits on which day/time, fasting requirements for blood tests, and home sample collection.',
        outcome:
          'Provides accurate department-wise doctor schedules, books lab collection slots, and sends fasting instructions via WhatsApp.',
      },
    ],
    faqHeading: 'Frequently Asked Questions — AI Receptionist for Clinics',
    faqs: [
      {
        question: 'Does the AI Receptionist give medical advice to patients?',
        answer:
          'No. The AI Receptionist is strictly configured for administrative front-desk operations—such as answering clinic timings, doctor availability, consultation fees, location directions, and booking or rescheduling OPD appointments. Any medical or urgent query is immediately escalated to your clinic staff.',
      },
      {
        question: 'Can elderly patients speak to the AI Receptionist in Hindi?',
        answer:
          'Yes. Powered by Sarvam AI multilingual voice models, the receptionist speaks clear, polite, and patient Hindi, Indian English, and Hinglish without rushing the caller.',
      },
      {
        question: 'How does the clinic staff see the appointments booked by the AI?',
        answer:
          'Every booked appointment appears instantaneously on your connected Google Calendar, Google Sheet, or clinic dashboard, and your reception desk can also receive an instant WhatsApp notification for each new booking.',
      },
      {
        question: 'Can it handle multiple doctors with different OPD timings in the same clinic?',
        answer:
          'Yes. We configure individual schedules and visiting days for each doctor in your polyclinic or practice so patients are booked only into valid OPD windows.',
      },
      {
        question: 'What if a patient calls during an emergency?',
        answer:
          'The AI detects urgency keywords immediately and either executes a direct warm call transfer to your clinic’s emergency/duty number or provides your clinic’s designated emergency instructions without delay.',
      },
    ],
    ctaHeading: 'Automate Your Clinic Front Desk & Patient Bookings 24/7',
    ctaDescription:
      'Experience how Aura AI Automations helps Indian clinics save 28+ front-desk hours every week. Launch on app.auraai.sbs or schedule a 15-minute discovery call.',
    relatedSlugs: [
      'ai-receptionist',
      'ai-voice-agent',
      'whatsapp-ai-chatbot',
      'ai-receptionist-for-salon',
    ],
  },
};

export const ALL_SERVICE_PAGES_LIST: ServicePageConfig[] = Object.values(SERVICE_PAGES);

export function getOrganizationSchema() {
  return {
    '@type': 'Organization',
    '@id': `${SITE_URL}/#organization`,
    name: BUSINESS_NAME,
    url: `${SITE_URL}/`,
    logo: {
      '@type': 'ImageObject',
      url: LOGO_URL,
    },
    image: OG_IMAGE_URL,
    email: CONTACT_EMAIL,
    description: HOME_SEO.description,
    founder: {
      '@type': 'Person',
      name: FOUNDER_NAME,
      jobTitle: 'Founder & Lead Architect',
    },
    areaServed: {
      '@type': 'Country',
      name: 'India',
    },
    sameAs: SOCIAL_PROFILE_URLS,
    contactPoint: [
      {
        '@type': 'ContactPoint',
        contactType: 'customer support and sales',
        email: CONTACT_EMAIL,
        url: `${SITE_URL}/#contact`,
        areaServed: 'IN',
        availableLanguage: ['English', 'Hindi'],
      },
    ],
  };
}

export function getWebSiteSchema() {
  return {
    '@type': 'WebSite',
    '@id': `${SITE_URL}/#website`,
    url: `${SITE_URL}/`,
    name: BUSINESS_NAME,
    description: HOME_SEO.description,
    inLanguage: 'en-IN',
    publisher: {
      '@id': `${SITE_URL}/#organization`,
    },
  };
}

export function getHomepageServicesSchema() {
  const coreServices = [
    {
      name: 'AI Receptionist',
      description:
        '24/7 automated AI front-desk receptionist for Indian businesses, salons, clinics, coaching institutes, and photography studios.',
      url: `${SITE_URL}/ai-receptionist`,
    },
    {
      name: 'AI Voice Calling Agents',
      description:
        'Sub-480ms multilingual inbound and outbound AI voice calling agents powered by OmniDimension and Sarvam AI.',
      url: `${SITE_URL}/ai-voice-agent`,
    },
    {
      name: 'WhatsApp AI Chatbots',
      description:
        '24/7 intelligent WhatsApp AI chatbots for automated customer inquiries, catalog sharing, lead qualification, and appointment booking.',
      url: `${SITE_URL}/whatsapp-ai-chatbot`,
    },
    {
      name: 'AI Receptionist for Salons & Spas',
      description:
        'Dedicated 24/7 AI call and appointment booking receptionist for Indian hair salons, luxury spas, and bridal makeup studios.',
      url: `${SITE_URL}/ai-receptionist-for-salon`,
    },
    {
      name: 'AI Receptionist for Clinics & Doctors',
      description:
        'Automated 24/7 patient call handling, OPD appointment scheduling, and WhatsApp reminders for Indian medical and dental clinics.',
      url: `${SITE_URL}/ai-receptionist-for-clinic`,
    },
    {
      name: 'Business Workflow Automation & 24/7 AI Customer Support',
      description:
        'Self-hosted n8n workflow pipelines, Firebase real-time synchronization, CRM integration, and 24/7 autonomous customer support systems.',
      url: `${SITE_URL}/#services`,
    },
  ];

  return coreServices.map((svc, idx) => ({
    '@type': 'Service',
    '@id': `${SITE_URL}/#service-${idx + 1}`,
    name: svc.name,
    serviceType: svc.name,
    description: svc.description,
    url: svc.url,
    provider: {
      '@id': `${SITE_URL}/#organization`,
    },
    areaServed: {
      '@type': 'Country',
      name: 'India',
    },
  }));
}

export function getHomepageJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      getOrganizationSchema(),
      getWebSiteSchema(),
      ...getHomepageServicesSchema(),
    ],
  };
}

export function getServicePageJsonLd(page: ServicePageConfig) {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      getOrganizationSchema(),
      getWebSiteSchema(),
      {
        '@type': 'BreadcrumbList',
        '@id': `${page.canonicalUrl}#breadcrumb`,
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: `${SITE_URL}/`,
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: page.shortTitle,
            item: page.canonicalUrl,
          },
        ],
      },
      {
        '@type': 'Service',
        '@id': `${page.canonicalUrl}#service`,
        name: page.h1,
        serviceType: page.serviceType,
        description: page.metaDescription,
        url: page.canonicalUrl,
        provider: {
          '@id': `${SITE_URL}/#organization`,
        },
        areaServed: {
          '@type': 'Country',
          name: 'India',
        },
        audience: {
          '@type': 'BusinessAudience',
          name: page.targetAudienceSummary,
        },
      },
      {
        '@type': 'FAQPage',
        '@id': `${page.canonicalUrl}#faq`,
        mainEntity: page.faqs.map((faq) => ({
          '@type': 'Question',
          name: faq.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: faq.answer,
          },
        })),
      },
    ],
  };
}
