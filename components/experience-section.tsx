"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Building, Calendar, MapPin } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const experiences = [
  {
    title: "IT Administrator & Data Protection Officer",
    company: "Next BPO Solutions",
    period: "2018 - Present",
    location: "Davao City, Philippines",
    type: "Full-time",
    responsibilities: [
      "Managed computer system infrastructure to ensure optimal system functionalities",
      "Implemented security protocols and procedures to prevent potential threats",
      "Conducted audits and maintained records ensuring compliance to R.A. 10173 'Data Privacy Act'",
      "Trained staff on cybersecurity and data privacy best practices",
      "Designed efficient end-user feedback & error reporting systems",
    ],
    technologies: ["Windows Server", "Active Directory", "SIEM", "Data Privacy", "Network Security"],
  },
  {
    title: "Tech Virtual Assistant",
    company: "Thrive Marketing",
    period: "2017 - 2018",
    location: "Remote",
    type: "Contract",
    responsibilities: [
      "Website maintenance and social media management",
      "Graphics design and email support",
      "Preparation of monthly newsletters",
      "Blog management and content creation",
    ],
    technologies: ["WordPress", "Adobe Photoshop", "Social Media", "Email Marketing"],
  },
  {
    title: "IT & Network Administrator",
    company: "RJK Luminous Builders Dev. Corp.",
    period: "2015 - 2017",
    location: "Davao City, Philippines",
    type: "Full-time",
    responsibilities: [
      "Email support and ticketing system management",
      "Customer data management and IT helpdesk support",
      "Network maintenance, cabling & testing",
      "Computer software & hardware maintenance",
      "CCTV system operation and maintenance",
    ],
    technologies: ["Network Infrastructure", "CCTV Systems", "Help Desk", "Hardware Maintenance"],
  },
  {
    title: "Computer Technician",
    company: "REDCOM Computer Service",
    period: "2014 - 2015",
    location: "Davao City, Philippines",
    type: "Full-time",
    responsibilities: [
      "Network cabling and maintenance",
      "PC and laptop repair services",
      "Printer repair and maintenance",
      "System optimization and data recovery",
    ],
    technologies: ["Hardware Repair", "Data Recovery", "System Optimization", "Network Cabling"],
  },
  {
    title: "IT Administrative Officer",
    company: "EUROPHILKOR Mining Corp.",
    period: "2013 - 2014",
    location: "Davao City, Philippines",
    type: "Full-time",
    responsibilities: [
      "Company database administration",
      "Network maintenance and graphic design",
      "Managing office supplies & placing orders",
      "Preparing regular financial & administrative reports",
      "Acting liaison officer for bank transactions",
    ],
    technologies: ["Database Administration", "Financial Reporting", "Graphics Design"],
  },
]

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Professional Experience
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Over a decade of progressive experience in IT administration, cybersecurity, 
            and system management across various industries.
          </p>
        </div>

        {/* Experience Cards with Scroll Reveal */}
        <div className="grid md:grid-cols-2 gap-6">
          {experiences.map((exp, index) => {
            const { ref, isVisible } = useScrollAnimation(0.2)

            return (
              <div
                key={index}
                ref={ref}
                className={`transition-all duration-700 ease-out transform h-full 
                  ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <Card className="bg-card border-border hover:border-primary/50 rounded-2xl shadow-lg h-full flex">
                  <CardContent className="p-6 flex flex-col h-full">
                    <div className="space-y-4 flex-1">
                      {/* Header */}
                      <div className="flex items-start gap-3">
                        <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                          <Building className="h-5 w-5 text-primary" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg font-bold text-white mb-1">{exp.title}</h3>
                          <h4 className="text-base text-white font-semibold mb-2">{exp.company}</h4>
                          <div className="flex flex-wrap items-center gap-3 text-sm text-white mb-3">
                            <div className="flex items-center gap-1">
                              <Calendar className="h-3 w-3" />
                              {exp.period}
                            </div>
                            <div className="flex items-center gap-1">
                              <MapPin className="h-3 w-3" />
                              {exp.location}
                            </div>
                        <Badge
  variant="outline"
  className={`text-xs ${
    exp.type === "Full-time"
      ? "bg-green-600/20 text-green-400 border-green-500/40"
      : "bg-amber-600/20 text-amber-400 border-amber-500/40"
  }`}
>
  {exp.type}
</Badge>
                          </div>
                        </div>
                      </div>

                      {/* Responsibilities */}
                      <div>
                        <h5 className="font-semibold text-white mb-2 text-sm">Key Responsibilities:</h5>
                        <ul className="space-y-1">
                          {exp.responsibilities.map((resp, respIndex) => (
                            <li key={respIndex} className="text-white flex items-start gap-2">
                              <div className="w-1 h-1 bg-primary rounded-full mt-1.5 flex-shrink-0"></div>
                              <span className="text-xs leading-relaxed">{resp}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Technologies */}
                      <div>
                        <h5 className="font-semibold text-white mb-2 text-sm">Technologies & Skills:</h5>
                        <div className="flex flex-wrap gap-1">
                          {exp.technologies.map((tech, techIndex) => (
                            <Badge
                              key={techIndex}
                              variant="secondary"
                              className="bg-primary/10 text-white border-primary/20 text-xs"
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
