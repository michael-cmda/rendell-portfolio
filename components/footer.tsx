import { Shield, Mail, Phone, MapPin, Linkedin } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ]

  const services = [
    "IT System Administration",
    "Cybersecurity Consulting",
    "Data Privacy Compliance",
    "Network Security",
    "Infrastructure Design",
    "Security Training",
  ]

  const socialLinks = [
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/rendell-yap-3a947ba1/",
      icon: Linkedin,
    },
    {
      name: "Email",
      href: "mailto:rendellcolinayap@gmail.com",
      icon: Mail,
    },
  ]

  return (
    <footer className="bg-background border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <Shield className="h-8 w-8 text-primary" />
              <span className="text-xl font-bold text-foreground">Rendell Yap</span>
            </div>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              IT System Administrator & Cybersecurity Specialist with 10+ years of experience securing and optimizing
              business infrastructure.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 bg-card rounded-lg flex items-center justify-center border border-border hover:border-primary/50 hover:bg-primary/10 transition-colors"
                  aria-label={social.name}
                >
                  <social.icon className="h-5 w-5 text-muted-foreground hover:text-primary transition-colors" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-muted-foreground hover:text-primary transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bottom Section */}
        <div className="border-t border-border mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-center items-center gap-4">
            <p className="text-muted-foreground text-sm text-center">
              © {currentYear} Rendell Yap. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
