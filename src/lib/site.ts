import type { LinkProps } from "@tanstack/react-router";
import { Bot, Code2, Workflow, Target, ShieldCheck, Network, type LucideIcon } from "lucide-react";

export type Service = { slug: string; to: NonNullable<LinkProps["to"]>; title: string; short: string; icon: LucideIcon };

export const services: Service[] = [
  { slug: "ai-agents", to: "/ai-agents", title: "AI Workforce", icon: Bot,
    short: "Deploy specialised AI agents to support document processing, customer communications, administrative tasks and operational workflows." },
  { slug: "custom-development", to: "/custom-development", title: "Bespoke AI Systems", icon: Code2,
    short: "We engineer tailored AI automation systems around your business processes, operational requirements and existing infrastructure." },
  { slug: "automation", to: "/automation", title: "Business Automation", icon: Workflow,
    short: "Automate repetitive tasks, coordinate workflows and improve efficiency across everyday business operations." },
  { slug: "sales-intelligence", to: "/sales-intelligence", title: "B2B Sales Intelligence", icon: Target,
    short: "Automate prospect research, lead qualification, personalised outreach, follow-ups and CRM workflows." },
  { slug: "cybersecurity", to: "/cybersecurity", title: "AI Security & Governance", icon: ShieldCheck,
    short: "Developing intelligent controls for AI agent monitoring, access permissions, activity oversight and human approval workflows." },
  { slug: "integration", to: "/integration", title: "Systems Integration", icon: Network,
    short: "Connect CRM, ERP, accounting, document management and communication platforms through coordinated automation." },
];

export type Industry = { slug: string; name: string; product?: string; intro: string; challenges: string[]; capabilities: string[]; note?: string; cta: string };

export const industries: Industry[] = [
  { slug: "legal", name: "Legal & Law Firms", cta: "Explore Legal Solutions",
    intro: "Client intake, document workflows, case administration and operational automation.",
    challenges: ["High volumes of contracts and correspondence", "Manual deadline tracking", "Time-consuming client intake"],
    capabilities: ["Contract analysis and summarisation", "Clause extraction and document comparison", "Legal document classification", "Draft preparation for professional review", "Case-related document organisation", "Deadline and task management", "Client intake automation", "Secure document retrieval", "Integration with legal practice management software"],
    note: "All legal outputs require appropriate human review. KIV supports qualified lawyers; it does not replace them." },
  { slug: "accounting", name: "Accounting & Finance", cta: "Explore Accounting Solutions",
    intro: "Invoice processing, document collection, reconciliation preparation and financial administration.",
    challenges: ["Manual data entry from invoices and receipts", "Chasing clients for documents", "Slow month-end reconciliation"],
    capabilities: ["Invoice and receipt extraction", "Preliminary bookkeeping classification", "Transaction matching", "Reconciliation assistance", "Financial document organisation", "Client document collection", "Tax preparation support", "Cash flow reporting", "Integration with accounting platforms where supported"],
    note: "Financial entries and tax-related outputs are designed for professional review and approval." },
  { slug: "logistics", name: "Logistics & Supply Chain", cta: "Explore Logistics Solutions",
    intro: "Shipment coordination, document processing, operational alerts and ERP integration.",
    challenges: ["Fragmented shipment visibility", "Reactive handling of delivery exceptions", "Heavy paperwork across carriers"],
    capabilities: ["Shipment status monitoring", "Delivery exception alerts", "Automated customer updates", "Document processing", "Transport workflow coordination", "Fleet data reporting", "Order management integration", "Operational analytics", "Scheduling and dispatch assistance"] },
  ...([
    ["veterinary", "Veterinary & Pet Care", "Pet records, appointment workflows, owner communications and connected monitoring administration.", ["Pet records management", "Appointment coordination", "Approved owner communications", "Authorised monitoring alerts for staff review"]],
     ["healthcare", "Healthcare & Medical Practices", "Patient administration, document routing, appointment coordination and clinical workflow support.", ["Appointment and referral administration", "Document intake and classification", "Patient communication workflows", "Back-office reporting"]],
    ["real-estate", "Real Estate", "Lead qualification, client communication, property administration and CRM workflows.", ["Tenant enquiry handling", "Maintenance request routing", "Lease document summarisation", "Portfolio reporting"]],
    ["hospitality", "Hospitality", "Guest communication, reservations administration and operational workflows.", ["Guest communication assistants", "Booking and reservation workflows", "Review monitoring and responses for approval", "Operational dashboards"]],
    ["retail", "Retail & E-commerce", "Customer support, order processing and inventory coordination.", ["Customer support agents", "Order and returns automation", "Inventory and catalogue updates", "Sales analytics"]],
    ["manufacturing", "Manufacturing", "Operational reporting, process coordination and system integration.", ["Production and quality reporting", "Supplier and purchase-order workflows", "Maintenance scheduling support", "ERP integration"]],
    ["professional-services", "Professional Services", "Administrative automation, document processing and client operations.", ["Client onboarding automation", "Proposal and document drafting", "Time and billing workflows", "Knowledge retrieval"]],
    ["insurance", "Insurance", "Claims intake, policy documents and broker correspondence", ["Claims intake and triage support", "Policy document extraction", "Broker and client communications", "Compliance reporting support"]],
    ["recruitment", "Recruitment & HR", "CV screening, candidate scheduling and onboarding", ["CV parsing and shortlisting support", "Interview scheduling", "Onboarding workflows", "HR policy assistants"]],
    ["agriculture", "Agribusiness", "Document workflows, operational reporting, compliance administration and supply chain coordination.", ["Supply and inventory records", "Compliance document handling", "Logistics coordination", "Operational reporting"]],
  ] as const).map(([slug, name, ch, caps]) => ({
    slug, name, cta: "Discuss Your Requirements",
    intro: ch,
    challenges: [ch, "Repetitive administration slowing skilled staff", "Disconnected software and manual re-keying"],
    capabilities: [...caps],
  })),
];

export const navItems = [
  { to: "/", label: "Home" },
  { to: "/solutions", label: "Solutions" },
  { to: "/industries", label: "Industries" },
  { to: "/rent-an-agent", label: "Rent an Agent" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export const solutionNav = [
  { to: "/automation", label: "Managed Business Automation" },
  { to: "/ai-agents", label: "AI Workforce" },
  { to: "/custom-development", label: "Bespoke AI Systems" },
  { to: "/cybersecurity", label: "AI Security & Governance" },
  { to: "/integration", label: "Systems Integration" },
] as const;
