"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Shield, Server, Network, Monitor, Lock, Award, Wrench } from "lucide-react"
import ScrollReveal from "@/components/ScrollReveal"

const skillCategories = [
  {
    title: "Cybersecurity",
    icon: Shield,
    skills: [
      "Vulnerability Assessment & Penetration Testing",
      "Threat Detection & Incident Response",
      "Network & Endpoint Security",
      "Security Information and Event Management & Log Analysis",
      "Data Privacy Compliance (RA 10173)",
      "Policy Development & Risk Assessment",
      "Security Awareness Training",
      "Data Breach Management",
    ],
  },
  {
    title: "System Administration",
    icon: Server,
    skills: [
      "Windows 10/11, MacOS, Ubuntu",
      "Windows, DNS servers, application server",
      "Windows Active Directory, DHCP",
      "Network infrastructure and peripheral processes",
      "PC building: troubleshooting, repair, optimization & maintenance",
      "Hardware and software installation of drivers and applications",
    ],
  },
  {
    title: "Networking",
    icon: Network,
    skills: [
      "Advanced network (WLAN, LAN, VLAN) setup/configuration",
      "Network maintenance and technical support",
      "Integrated software applications",
      "CCTV installation setup & maintenance",
      "IT Governance & Documentation",
    ],
  },
  {
    title: "Communication & Design",
    icon: Monitor,
    skills: [
      "Good English oral and written communication skills",
      "Graphics Design",
      "Technical Documentation",
      "Training and Mentoring",
    ],
  },
]

const certifications = [
  {
    name: "Data Protection Officer ACE Level 1 (NPC-DPO)",
    issuer: "National Privacy Commission",
    icon: Lock,
    verified: true,
  },
  {
    name: "Cybersecurity Analyst (CySA+)",
    issuer: "CompTIA",
    icon: Shield,
    verified: true,
  },
  {
    name: "Microsoft Cybersecurity Analyst Professional",
    issuer: "Microsoft",
    icon: Shield,
    verified: true,
  },
  {
    name: "Certified Ethical Hacker v13 (CEH)",
    issuer: "EC-Council",
    icon: Shield,
    verified: true,
  },
  {
    name: "Google Cybersecurity Professional",
    issuer: "Google",
    icon: Shield,
    verified: true,
  },
  {
    name: "NC II Computer Hardware Servicing",
    issuer: "TESDA",
    icon: Wrench,
    verified: true,
  },
]

const awards = [
  {
    title: "Best IT Capstone Project Award - AMACC",
    organization: "AMA Computer College",
    description: "Recognized for outstanding final project in Information Technology",
  },
  {
    title: "Best IT Research Awardee - Davao Teknoliksik Research Forum",
    organization: "Davao Teknoliksik Research Forum",
    description: "Excellence in technology research and innovation",
  },
  {
    title: "Cisco Certified Network Associate Eligible",
    organization: "Cisco",
    description: "Network Associate certification eligibility",
  },
  {
    title: "Computer Technician Training - Smartlink Computer Systems, Inc.",
    organization: "Smartlink Computer Systems, Inc.",
    description: "Professional computer technician training certification",
  },
  {
    title: "BLS: Adult CPR for LAY Rescuers with AED & Occupational First Aid",
    organization: "The Philippine Red Cross",
    description: "Basic Life Support and First Aid certification",
  },
  {
    title: "Drug-Free Workplace Assessment Team Training and Workshop",
    organization: "Davao City Anti-Drug Abuse Council",
    description: "Workplace assessment and drug abuse prevention training",
  },
]

export default function SkillsSection() {
  return (
    <section id="skills" className="py-20 bg-card">
      <div className="container mx-auto px-4">

        {/* Section Header */}
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-card-foreground mb-4">Skills & Expertise</h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Comprehensive technical skills and certifications built over 10+ years of hands-on experience in IT and cybersecurity.
            </p>
          </div>
        </ScrollReveal>

        {/* Technical Skills */}
        <ScrollReveal delay={0.2}>
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-card-foreground mb-8 text-center">Technical Skills</h3>
            <div className="grid md:grid-cols-2 gap-8">
              {skillCategories.map((category, index) => (
                <ScrollReveal key={index} delay={0.1 * index}>
                  <Card className="bg-background border-border h-full">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-3 text-foreground">
                        <category.icon className="h-6 w-6 text-primary" />
                        {category.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        {category.skills.map((skill, skillIndex) => (
                          <div key={skillIndex} className="flex items-center gap-3">
                            <div className="w-2 h-2 bg-primary rounded-full"></div>
                            <span className="text-sm text-foreground">{skill}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Certifications */}
        <ScrollReveal delay={0.4}>
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-card-foreground mb-8 text-center">Certifications</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {certifications.map((cert, index) => (
                <ScrollReveal key={index} delay={0.1 * index}>
                  <Card className="bg-background border-border h-full hover:border-primary/50 transition-colors">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                          <cert.icon className="h-6 w-6 text-primary" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-foreground mb-1">{cert.name}</h4>
                          <p className="text-sm text-muted-foreground mb-2">{cert.issuer}</p>
                          {cert.verified && (
                            <Badge variant="secondary" className="bg-green-100 text-green-800 border-green-200">
                              Verified
                            </Badge>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Awards */}
        <ScrollReveal delay={0.6}>
          <div>
            <h3 className="text-2xl font-bold text-card-foreground mb-8 text-center">Awards & Recognition</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {awards.map((award, index) => (
                <ScrollReveal key={index} delay={0.1 * index}>
                  <Card className="bg-background border-border h-full">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                          <Award className="h-6 w-6 text-primary" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-foreground mb-1">{award.title}</h4>
                          <p className="text-sm text-primary font-medium mb-2">{award.organization}</p>
                          <p className="text-sm text-muted-foreground">{award.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </ScrollReveal>

      </div>
    </section>
  )
}
