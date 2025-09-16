import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Shield, Server, Database, Network, FileText, Users } from "lucide-react"
// import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const projects = [
  {
    title: "Enterprise Security Infrastructure Overhaul",
    category: "Cybersecurity",
    description:
      "Led a comprehensive security infrastructure upgrade for a 500+ employee organization, implementing multi-layered security protocols, SIEM integration, and compliance frameworks.",
    image: "/cybersecurity-dashboard-dark-theme.jpg",
    technologies: ["SIEM", "Active Directory", "Network Security", "Compliance", "Incident Response"],
    highlights: [
      "Reduced security incidents by 85%",
      "Achieved 100% RA 10173 compliance",
      "Implemented 24/7 monitoring system",
    ],
    icon: Shield,
    year: "2023",
  },
  {
    title: "Data Privacy Compliance Framework",
    category: "Compliance",
    description:
      "Developed and implemented a comprehensive data privacy framework ensuring full compliance with RA 10173 (Data Privacy Act) across multiple business units.",
    image: "/data-privacy-compliance-dashboard.jpg",
    technologies: ["Policy Development", "Risk Assessment", "Audit Management", "Training", "Documentation"],
    highlights: ["100% compliance achievement", "Trained 200+ employees", "Zero privacy violations"],
    icon: FileText,
    year: "2022",
  },
  {
    title: "Network Infrastructure Modernization",
    category: "Infrastructure",
    description:
      "Designed and implemented a modern network infrastructure with enhanced security, improved performance, and scalable architecture for growing business needs.",
    image: "/network-infrastructure-diagram-modern.jpg",
    technologies: ["Network Design", "VLAN", "Firewall", "VPN", "Monitoring"],
    highlights: ["99.9% network uptime achieved", "50% performance improvement", "Enhanced security posture"],
    icon: Network,
    year: "2021",
  },
  {
    title: "Automated Backup & Recovery System",
    category: "System Administration",
    description:
      "Implemented an enterprise-grade automated backup and disaster recovery solution ensuring business continuity and data protection across all critical systems.",
    image: "/server-backup-system-monitoring.jpg",
    technologies: ["Backup Solutions", "Disaster Recovery", "Automation", "Monitoring", "Testing"],
    highlights: ["Zero data loss incidents", "4-hour recovery time objective", "Automated testing protocols"],
    icon: Database,
    year: "2020",
  },
  {
    title: "IT Security Training Program",
    category: "Training & Development",
    description:
      "Developed and delivered comprehensive cybersecurity awareness training programs for employees at all levels, significantly improving security culture.",
    image: "/cybersecurity-training-presentation.jpg",
    technologies: ["Training Development", "Security Awareness", "Phishing Simulation", "Assessment", "Reporting"],
    highlights: [
      "Trained 500+ employees",
      "90% improvement in security awareness",
      "Reduced phishing susceptibility by 75%",
    ],
    icon: Users,
    year: "2019-Present",
  },
  {
    title: "Server Virtualization Project",
    category: "Infrastructure",
    description:
      "Led the migration from physical to virtual infrastructure, optimizing resource utilization, reducing costs, and improving system management capabilities.",
    image: "/server-virtualization-datacenter.jpg",
    technologies: ["VMware", "Hyper-V", "Storage Management", "Migration", "Optimization"],
    highlights: ["60% reduction in hardware costs", "Improved resource utilization", "Enhanced disaster recovery"],
    icon: Server,
    year: "2019",
  },
]

export default function ProjectsSection() {
  // const titleAnimation = useScrollAnimation({ delay: 0.1 })
  // const projectsAnimation = useScrollAnimation({ delay: 0.3 })

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="animate-fade-in">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Featured Projects</h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              A showcase of key projects demonstrating expertise in cybersecurity, system administration, and IT
              infrastructure management.
            </p>
          </div>
        </div>

        <div className="animate-fade-in-delay-300">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="bg-card border-border hover:border-primary/50 transition-all duration-300 group overflow-hidden"
              >
                {/* Project Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute top-4 right-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center backdrop-blur-sm">
                      <project.icon className="h-5 w-5 text-primary" />
                    </div>
                  </div>
                </div>

                <CardHeader>
                  <div className="flex items-start justify-between gap-2">
                    <CardTitle className="text-lg text-card-foreground group-hover:text-primary transition-colors">
                      {project.title}
                    </CardTitle>
                    <span className="text-sm text-muted-foreground flex-shrink-0">{project.year}</span>
                  </div>
                  <Badge variant="outline" className="w-fit border-primary/30 text-white">
                    {project.category}
                  </Badge>
                </CardHeader>

                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground leading-relaxed">{project.description}</p>

                  {/* Key Highlights */}
                  <div>
                    <h5 className="font-semibold text-card-foreground mb-2 text-sm">Key Achievements:</h5>
                    <ul className="space-y-1">
                      {project.highlights.map((highlight, highlightIndex) => (
                        <li key={highlightIndex} className="text-xs text-muted-foreground flex items-start gap-2">
                          <div className="w-1 h-1 bg-primary rounded-full mt-1.5 flex-shrink-0"></div>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h5 className="font-semibold text-card-foreground mb-2 text-sm">Technologies:</h5>
                    <div className="flex flex-wrap gap-1">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge
                          key={techIndex}
                          variant="secondary"
                          className="text-xs bg-primary/10 text-white border-primary/20"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
