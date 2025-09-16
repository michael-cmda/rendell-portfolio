"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GraduationCap, Award, Shield, Users } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-card-foreground mb-4">About Me</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Content - Professional Summary Card */}
          <RevealWrapper delay={0}>
            <Card className="bg-background border-border mb-8 hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-card-foreground mb-6">Professional Summary</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Dependable IT Professional with over 10 years of experience enhancing IT operations, optimizing
                  systems, and securing digital infrastructure. Certified in CEH, CompTIA CySA+, Microsoft Cybersecurity
                  Analyst, and as a Data Protection Officer (RA 10173).
                </p>
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  Expert in security, networking, and hardware optimization. Proven ability to resolve complex technical
                  issues, strengthen cybersecurity posture, and align IT solutions with business continuity goals.
                </p>

                {/* Key Highlights */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center gap-3">
                    <Shield className="h-5 w-5 text-primary" />
                    <span className="text-sm text-card-foreground">Cybersecurity Expert</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Users className="h-5 w-5 text-primary" />
                    <span className="text-sm text-card-foreground">Team Leadership</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Award className="h-5 w-5 text-primary" />
                    <span className="text-sm text-card-foreground">Multiple Certifications</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <GraduationCap className="h-5 w-5 text-primary" />
                    <span className="text-sm text-card-foreground">Continuous Learning</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </RevealWrapper>

          {/* Right Content - Education, Certifications, Specializations */}
          <div className="space-y-6">
            <RevealWrapper delay={150}>
              <Card className="bg-background border-border hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <GraduationCap className="h-6 w-6 text-primary" />
                    <h4 className="text-lg font-semibold text-foreground">Education</h4>
                  </div>
                  <div>
                    <h5 className="font-medium text-foreground">Bachelor of Science in Information Technology</h5>
                    <p className="text-muted-foreground">AMA Computer College, Davao</p>
                    <p className="text-sm text-muted-foreground">Graduated 2013</p>
                  </div>
                </CardContent>
              </Card>
            </RevealWrapper>

            <RevealWrapper delay={300}>
              <Card className="bg-background border-border hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Award className="h-6 w-6 text-primary" />
                    <h4 className="text-lg font-semibold text-foreground">Key Certifications</h4>
                  </div>
                  <div className="space-y-3">
                    <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                      Certified Ethical Hacker (CEH v13)
                    </Badge>
                    <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                      CompTIA CySA+
                    </Badge>
                    <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                      Microsoft Cybersecurity Analyst
                    </Badge>
                    <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                      NPC-DPO ACE Level 1
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            </RevealWrapper>

            <RevealWrapper delay={450}>
              <Card className="bg-background border-border hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Shield className="h-6 w-6 text-primary" />
                    <h4 className="text-lg font-semibold text-foreground">Specializations</h4>
                  </div>
                  <div className="grid grid-cols-1 gap-2">
                    <div className="text-sm text-muted-foreground">• System Administration & Infrastructure</div>
                    <div className="text-sm text-muted-foreground">• Threat Detection & Incident Response</div>
                    <div className="text-sm text-muted-foreground">• Data Privacy Compliance (RA 10173)</div>
                    <div className="text-sm text-muted-foreground">• Network Security & Management</div>
                  </div>
                </CardContent>
              </Card>
            </RevealWrapper>
          </div>
        </div>
      </div>
    </section>
  )
}

/* 🔹 Small helper wrapper to apply scroll reveal */
function RevealWrapper({ children, delay }: { children: React.ReactNode; delay?: number }) {
  const { ref, isVisible } = useScrollAnimation(0.2)

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out transform 
        ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
      style={{ transitionDelay: `${delay || 0}ms` }}
    >
      {children}
    </div>
  )
}
