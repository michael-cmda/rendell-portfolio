"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ArrowDown, Shield, Lock, Server, Linkedin } from "lucide-react"
import Image from "next/image"

export default function HeroSection() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Animated Background Particles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-2 h-2 bg-primary rounded-full particle-animation opacity-60"></div>
        <div
          className="absolute top-40 right-20 w-1 h-1 bg-accent rounded-full particle-animation opacity-40"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute bottom-40 left-20 w-3 h-3 bg-primary rounded-full particle-animation opacity-30"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute bottom-20 right-10 w-2 h-2 bg-accent rounded-full particle-animation opacity-50"
          style={{ animationDelay: "3s" }}
        ></div>
        <div
          className="absolute top-60 left-1/3 w-1 h-1 bg-primary rounded-full particle-animation opacity-70"
          style={{ animationDelay: "4s" }}
        ></div>
        <div
          className="absolute top-80 right-1/3 w-2 h-2 bg-accent rounded-full particle-animation opacity-40"
          style={{ animationDelay: "5s" }}
        ></div>
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(rgba(50, 130, 184, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(50, 130, 184, 0.1) 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
          }}
        ></div>
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left Content */}
          <div className="flex-1 text-center lg:text-left">
            <div className="mb-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card/50 border border-border mb-4">
                <Shield className="h-4 w-4 text-primary" />
                <span className="text-sm text-muted-foreground">
                  IT System Administrator & Cybersecurity Specialist
                </span>
              </div>
            </div>

            <div className="animate-fade-in">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                <span className="text-foreground">Hi, I'm </span>
                <span className="text-gradient">Rendell Yap</span>
              </h1>
            </div>

            <div className="animate-fade-in-delay-200">
              <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl">
                I secure, optimize, and manage IT systems to strengthen business continuity with over 10 years of
                experience.
              </p>
            </div>

            <div className="animate-fade-in-delay-400">
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
                <Button size="lg" className="glow-effect" onClick={() => scrollToSection("projects")}>
                  View My Work
                  <ArrowDown className="ml-2 h-5 w-5" />
                </Button>
                <Button
                  variant="secondary"
                  size="lg"
                  onClick={() => window.open("https://www.linkedin.com/in/rendell-yap-3a947ba1/", "_blank")}
                >
                  <Linkedin className="mr-2 h-5 w-5" />
                  LinkedIn
                </Button>
              </div>
            </div>

            <div className="animate-fade-in-delay-600">
              <div className="grid grid-cols-3 gap-6 max-w-md mx-auto lg:mx-0">
                <div className="text-center lg:text-left">
                  <div className="text-2xl font-bold text-primary">10+</div>
                  <div className="text-sm text-muted-foreground">Years Experience</div>
                </div>
                <div className="text-center lg:text-left">
                  <div className="text-2xl font-bold text-primary">5+</div>
                  <div className="text-sm text-muted-foreground">Certifications</div>
                </div>
                <div className="text-center lg:text-left">
                  <div className="text-2xl font-bold text-primary">100+</div>
                  <div className="text-sm text-muted-foreground">Projects</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Profile Image */}
          <div className="flex-1 flex justify-center lg:justify-end">
            <div className="animate-fade-in-delay-300">
              <div className="relative">
                {/* Glow Effect Background */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-full blur-3xl scale-110"></div>

                {/* Profile Image Container */}
                <div className="relative w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-primary/30 glow-effect">
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-background/20"></div>
                  <Image
                    src="/images/profile.png"
                    alt="Rendell Yap - IT System Administrator & Cybersecurity Specialist"
                    fill
                    className="object-cover object-center"
                    priority
                  />
                  {/* Overlay gradient for blending */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background/30 via-transparent to-transparent"></div>
                </div>

                {/* Floating Tech Icons */}
                <div className="absolute -top-4 -right-4 w-12 h-12 bg-card rounded-full flex items-center justify-center border border-border particle-animation">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <div
                  className="absolute -bottom-4 -left-4 w-12 h-12 bg-card rounded-full flex items-center justify-center border border-border particle-animation"
                  style={{ animationDelay: "2s" }}
                >
                  <Lock className="h-6 w-6 text-primary" />
                </div>
                <div
                  className="absolute top-1/2 -right-8 w-10 h-10 bg-card rounded-full flex items-center justify-center border border-border particle-animation"
                  style={{ animationDelay: "4s" }}
                >
                  <Server className="h-5 w-5 text-primary" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button
          onClick={() => scrollToSection("about")}
          className="text-muted-foreground hover:text-primary transition-colors"
        >
          <ArrowDown className="h-6 w-6" />
        </button>
      </div>
    </section>
  )
}
