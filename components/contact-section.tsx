"use client"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Mail, Phone, MapPin, Linkedin, Clock, Shield, CheckCircle } from "lucide-react"

export default function ContactSection() {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "rendellcolinayap@gmail.com",
      href: "mailto:rendellcolinayap@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+63 955 961 0555",
      href: "tel:+639559610555",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Davao City, Philippines",
      href: "#",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "/rendell-yap-3a947ba1",
      href: "https://linkedin.com/in/rendell-yap-3a947ba1",
    },
  ]

  const services = [
    "IT System Administration",
    "Cybersecurity Consulting",
    "Data Privacy Compliance",
    "Network Security Assessment",
    "IT Infrastructure Design",
    "Security Training & Awareness",
  ]

  return (
    <section id="contact" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="animate-fade-in">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-card-foreground mb-4">Get In Touch</h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-lg text-white max-w-3xl mx-auto">
              Ready to strengthen your IT infrastructure and cybersecurity posture? Let's discuss how I can help secure
              and optimize your systems.
            </p>
          </div>
        </div>

        <div className="animate-fade-in-delay-300">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Contact Information */}
            <Card className="bg-background border-border">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-foreground">
                  <Shield className="h-6 w-6 text-primary" />
                  Contact Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <info.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-white">{info.label}</p>
                      <a href={info.href} className="text-foreground hover:text-primary transition-colors font-medium">
                        {info.value}
                      </a>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Availability */}
            <Card className="bg-background border-border">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-foreground">
                  <Clock className="h-6 w-6 text-primary" />
                  Availability
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-foreground">Response Time</span>
                    <Badge variant="secondary" className="bg-green-100 text-green-800 border-green-200">
                      Within 24 hours
                    </Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-foreground">Consultation</span>
                    <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                      Available
                    </Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-foreground">Remote Work</span>
                    <Badge variant="secondary" className="bg-blue-100 text-blue-800 border-blue-200">
                      Preferred
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Services Offered */}
            <Card className="bg-background border-border">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-foreground">
                  <CheckCircle className="h-6 w-6 text-primary" />
                  Services Offered
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {services.map((service, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                      <span className="text-sm text-foreground">{service}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
