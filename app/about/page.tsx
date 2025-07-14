"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import LogoWrapper from "@/components/logo-wrapper"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-900/95 to-blue-800/95 py-10">
      <header className="border-b border-gray-800 bg-gray-900/95 backdrop-blur supports-[backdrop-filter]:bg-gray-900/60 fixed top-0 left-0 right-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Link href="/" className="flex items-center">
                <LogoWrapper size="header" />
                <span className="text-2xl font-bold text-white hover:text-blue-400 transition-colors">ESHWA AI</span>
              </Link>
            </div>
          </nav>
        </div>
      </header>

      <div className="container mx-auto px-4 pt-20">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-8 text-center">
            About Eshwa AI
          </h1>

          <div className="grid md:grid-cols-2 gap-16">
            {/* Company Overview */}
            <div className="space-y-8">
              <div className="bg-gray-800/50 p-8 rounded-lg">
                <h2 className="text-3xl font-bold text-white mb-6">Our Mission</h2>
                <p className="text-gray-300 leading-relaxed">
                  At Eshwa AI, we're dedicated to helping businesses unlock real-world value through secure, ethical, and
                  scalable AI solutions. We believe in a future where AI is not just a buzzword, but a practical tool that
                  empowers organizations to achieve their goals.
                </p>
              </div>

              <div className="bg-gray-800/50 p-8 rounded-lg">
                <h2 className="text-3xl font-bold text-white mb-6">Our Values</h2>
                <ul className="space-y-4 text-gray-300">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400">•</span>
                    <span>Human-Centered Design</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400">•</span>
                    <span>Ethical AI Implementation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400">•</span>
                    <span>Security First</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400">•</span>
                    <span>Continuous Learning</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Team and Leadership */}
            <div className="space-y-8">
              <div className="bg-gray-800/50 p-8 rounded-lg">
                <h2 className="text-3xl font-bold text-white mb-6">Our Team</h2>
                <p className="text-gray-300 leading-relaxed">
                  Our team combines deep expertise in AI technology with practical business experience across multiple
                  industries. We're passionate about creating solutions that truly make a difference.
                </p>
              </div>

              <div className="bg-gray-800/50 p-8 rounded-lg">
                <h2 className="text-3xl font-bold text-white mb-6">Get Started</h2>
                <div className="space-y-4">
                  <p className="text-gray-300">
                    Ready to learn more about how Eshwa AI can help your business? Explore our services or contact us
                    directly.
                  </p>
                  <div className="flex gap-4">
                    <Button asChild className="bg-blue-500 hover:bg-blue-600">
                      <Link href="/contact">
                        Contact Us
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </Link>
                    </Button>
                    <Button asChild variant="outline">
                      <Link href="/solutions">Explore Solutions</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Core Services */}
          <div className="mt-16">
            <h2 className="text-4xl font-bold text-white mb-8 text-center">What We Do</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="bg-gray-800/50">
                <CardHeader>
                  <CardTitle className="text-white">Consulting</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300">
                    Comprehensive AI readiness assessments and strategic implementation planning.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-gray-800/50">
                <CardHeader>
                  <CardTitle className="text-white">Custom Solutions</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300">
                    Tailored AI agents and solutions for specific industry needs.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-gray-800/50">
                <CardHeader>
                  <CardTitle className="text-white">Training</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300">
                    Comprehensive AI education for leaders, IT professionals, and compliance teams.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
