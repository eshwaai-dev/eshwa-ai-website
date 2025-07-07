import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import {
  ArrowRight,
  ShoppingCart,
  GraduationCap,
  Mail,
  CheckCircle,
  Building,
  Stethoscope,
  Scale,
  Store,
  Settings,
} from "lucide-react"
import Link from "next/link"
import LogoWrapper from "@/components/logo-wrapper"
import BackgroundVideo from "@/components/BackgroundVideo"
import ConsultingVideo from "@/components/ConsultingVideo"
import SolutionsVideo from "@/components/SolutionsVideo"
import MarketingVideo from "@/components/MarketingVideo"
import TrainingVideo from "@/components/TrainingVideo"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="min-h-screen relative">
        <header className="border-b border-gray-800 bg-gray-900/95 backdrop-blur supports-[backdrop-filter]:bg-gray-900/60 fixed top-0 left-0 right-0 z-50">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <Link href="#" className="flex items-center">
                  <LogoWrapper size="header" />
                  <span className="text-2xl font-bold text-white hover:text-blue-400 transition-colors">ESHWA AI</span>
                </Link>
              </div>
              <div className="hidden md:flex items-center space-x-8">
                <Link 
                  href="#consulting" 
                  className="text-gray-300 hover:text-blue-400 transition-colors pointer-events-auto"
                >
                  Consulting
                </Link>
                <Link 
                  href="#solutions" 
                  className="text-gray-300 hover:text-blue-400 transition-colors pointer-events-auto"
                >
                  Custom Solutions
                </Link>
                <Link 
                  href="#marketplace" 
                  className="text-gray-300 hover:text-blue-400 transition-colors pointer-events-auto"
                >
                  Marketplace
                </Link>
                <Link 
                  href="#training" 
                  className="text-gray-300 hover:text-blue-400 transition-colors pointer-events-auto"
                >
                  Training
                </Link>
              </div>
            </nav>
          </div>
        </header>
        <div className="absolute inset-0 z-0">
          <BackgroundVideo />
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <div className="mb-8">
                <div className="flex justify-center items-center mb-8">
                  <LogoWrapper size="hero" className="text-white" />
                </div>
                <div className="text-4xl font-bold text-gray-200 mb-4 tracking-wider">ESHWA AI</div>
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-400">
              AI. Simplified for Business. Built for Impact.
            </h1>
            <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
              From strategy to solutions, we help businesses unlock real value with AI—securely, responsibly, and at
              scale.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-blue-500 hover:bg-blue-600">
                Get a Readiness Assessment
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline">
                Explore AI Solutions
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Section 1: Consulting & Business Readiness */}
      <section id="consulting" className="py-20 relative bg-gray-800">
        <header className="border-b border-gray-800 bg-gray-900/95 backdrop-blur supports-[backdrop-filter]:bg-gray-900/60 fixed top-0 left-0 right-0 z-50">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <Link href="#" className="flex items-center">
                  <LogoWrapper size="header" />
                  <span className="text-2xl font-bold text-white hover:text-blue-400 transition-colors">ESHWA AI</span>
                </Link>
              </div>
              <div className="hidden md:flex items-center space-x-8">
                <Link 
                  href="#consulting" 
                  className="text-gray-300 hover:text-blue-400 transition-colors pointer-events-auto"
                >
                  Consulting
                </Link>
                <Link 
                  href="#solutions" 
                  className="text-gray-300 hover:text-blue-400 transition-colors pointer-events-auto"
                >
                  Custom Solutions
                </Link>
                <Link 
                  href="#marketplace" 
                  className="text-gray-300 hover:text-blue-400 transition-colors pointer-events-auto"
                >
                  Marketplace
                </Link>
                <Link 
                  href="#training" 
                  className="text-gray-300 hover:text-blue-400 transition-colors pointer-events-auto"
                >
                  Training
                </Link>
              </div>
            </nav>
          </div>
        </header>
        <div className="absolute inset-0 z-0">
          <ConsultingVideo />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">AI Readiness. Without the Guesswork.</h2>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                Before you invest in AI, know where your business stands. Our consulting services deliver tailored
                readiness assessments, risk evaluations, and practical roadmaps for implementation. Whether you're in
                healthcare, law, retail, or enterprise services—we prepare you to adopt AI with confidence, compliance,
                and clarity.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <Card className="bg-gray-700 border-gray-600">
                <CardHeader>
                  <CheckCircle className="h-8 w-8 text-green-600 mb-2" />
                  <CardTitle className="text-white">High-Impact Opportunities</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300">Identify AI opportunities that deliver measurable business value</p>
                </CardContent>
              </Card>

              <Card className="bg-gray-700 border-gray-600">
                <CardHeader>
                  <Settings className="h-8 w-8 text-blue-600 mb-2" />
                  <CardTitle className="text-white">Infrastructure Assessment</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300">Evaluate data infrastructure and workflow gaps</p>
                </CardContent>
              </Card>

              <Card className="bg-gray-700 border-gray-600">
                <CardHeader>
                  <Scale className="h-8 w-8 text-purple-600 mb-2" />
                  <CardTitle className="text-white">Compliance & Ethics</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300">Navigate compliance, governance, and ethical requirements</p>
                </CardContent>
              </Card>
            </div>

            <div className="text-center">
              <Button size="lg" className="bg-blue-500 hover:bg-blue-600">
                Schedule Your Readiness Audit
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Custom Agentic Solutions */}
      <section id="solutions" className="py-20 relative bg-gray-900">
        <header className="border-b border-gray-800 bg-gray-900/95 backdrop-blur supports-[backdrop-filter]:bg-gray-900/60 fixed top-0 left-0 right-0 z-50">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <Link href="#" className="flex items-center">
                  <LogoWrapper size="header" />
                  <span className="text-2xl font-bold text-white hover:text-blue-400 transition-colors">ESHWA AI</span>
                </Link>
              </div>
              <div className="hidden md:flex items-center space-x-8">
                <Link 
                  href="#consulting" 
                  className="text-gray-300 hover:text-blue-400 transition-colors pointer-events-auto"
                >
                  Consulting
                </Link>
                <Link 
                  href="#solutions" 
                  className="text-gray-300 hover:text-blue-400 transition-colors pointer-events-auto"
                >
                  Custom Solutions
                </Link>
                <Link 
                  href="#marketplace" 
                  className="text-gray-300 hover:text-blue-400 transition-colors pointer-events-auto"
                >
                  Marketplace
                </Link>
                <Link 
                  href="#training" 
                  className="text-gray-300 hover:text-blue-400 transition-colors pointer-events-auto"
                >
                  Training
                </Link>
              </div>
            </nav>
          </div>
        </header>
        <div className="absolute inset-0 z-0">
          <SolutionsVideo />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Custom AI Agents for Real-World Workflows</h2>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                We build agentic solutions tailored to your industry—so AI doesn't just automate, it collaborates. These
                solutions function as digital coworkers, streamlining operations and decision-making with deep vertical
                intelligence.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              <Card className="bg-gray-700 border-gray-600">
                <CardHeader>
                  <Stethoscope className="h-8 w-8 text-red-600 mb-2" />
                  <CardTitle className="text-white">Healthcare</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300">Enhance patient flow, diagnostics, and coordination</p>
                </CardContent>
              </Card>

              <Card className="bg-gray-700 border-gray-600">
                <CardHeader>
                  <Scale className="h-8 w-8 text-blue-600 mb-2" />
                  <CardTitle className="text-white">Law Offices</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300">Streamline intake, research, and contract handling</p>
                </CardContent>
              </Card>

              <Card className="bg-gray-700 border-gray-600">
                <CardHeader>
                  <Store className="h-8 w-8 text-green-600 mb-2" />
                  <CardTitle className="text-white">Retail</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300">Forecast demand, manage inventory, and personalize experiences</p>
                </CardContent>
              </Card>

              <Card className="bg-gray-700 border-gray-600">
                <CardHeader>
                  <Building className="h-8 w-8 text-purple-600 mb-2" />
                  <CardTitle className="text-white">Enterprise Ops</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300">Automate reporting, support services, and vendor interactions</p>
                </CardContent>
              </Card>
            </div>

            <div className="bg-blue-50 rounded-lg p-8 mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">What You Get:</h3>
              <p className="text-lg text-gray-700">
                Purpose-built AI copilots that plug into your tools, talk your language, and grow with your team.
              </p>
            </div>

            <div className="text-center">
              <Button size="lg" className="bg-blue-500 hover:bg-blue-600">
                Book a Demo
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Agent Marketplace */}
      <section id="marketplace" className="py-20 relative bg-gray-800">
        <header className="border-b border-gray-800 bg-gray-900/95 backdrop-blur supports-[backdrop-filter]:bg-gray-900/60 fixed top-0 left-0 right-0 z-50">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <Link href="#" className="flex items-center">
                  <LogoWrapper size="header" />
                  <span className="text-2xl font-bold text-white hover:text-blue-400 transition-colors">ESHWA AI</span>
                </Link>
              </div>
              <div className="hidden md:flex items-center space-x-8">
                <Link 
                  href="#consulting" 
                  className="text-gray-300 hover:text-blue-400 transition-colors pointer-events-auto"
                >
                  Consulting
                </Link>
                <Link 
                  href="#solutions" 
                  className="text-gray-300 hover:text-blue-400 transition-colors pointer-events-auto"
                >
                  Custom Solutions
                </Link>
                <Link 
                  href="#marketplace" 
                  className="text-gray-300 hover:text-blue-400 transition-colors pointer-events-auto"
                >
                  Marketplace
                </Link>
                <Link 
                  href="#training" 
                  className="text-gray-300 hover:text-blue-400 transition-colors pointer-events-auto"
                >
                  Training
                </Link>
              </div>
            </nav>
          </div>
        </header>
        <div className="absolute inset-0 z-0">
          <MarketingVideo />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">AI Agents, Ready to Work</h2>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                Browse our growing library of pre-built, ready-to-deploy AI agents. From lead generation to personal
                finance to inventory forecasting, these agents are licensed monthly and optimized for productivity, not
                complexity.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              <Card className="bg-gray-700 border-gray-600 border-2 border-blue-200 hover:border-blue-400 transition-colors">
                <CardHeader>
                  <CardTitle className="text-white">Decision Support Assistants</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300">AI-powered decision making for complex business scenarios</p>
                </CardContent>
              </Card>

              <Card className="bg-gray-700 border-gray-600 border-2 border-green-200 hover:border-green-400 transition-colors">
                <CardHeader>
                  <CardTitle className="text-white">Vendor Audit Analyzers</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300">Automated vendor performance and compliance analysis</p>
                </CardContent>
              </Card>

              <Card className="bg-gray-700 border-gray-600 border-2 border-purple-200 hover:border-purple-400 transition-colors">
                <CardHeader>
                  <CardTitle className="text-white">Inventory & Demand Planners</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300">Smart forecasting and inventory optimization</p>
                </CardContent>
              </Card>

              <Card className="bg-gray-700 border-gray-600 border-2 border-orange-200 hover:border-orange-400 transition-colors">
                <CardHeader>
                  <CardTitle className="text-white">"Digital Me" Agents</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300">Personal AI for email, finance, and health management</p>
                </CardContent>
              </Card>
            </div>

            <div className="text-center">
              <Button size="lg" className="bg-blue-500 hover:bg-blue-600">
                <ShoppingCart className="mr-2 h-5 w-5" />
                Explore the Marketplace
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Advanced AI Training */}
      <section id="training" className="py-20 relative bg-gray-900">
        <header className="border-b border-gray-800 bg-gray-900/95 backdrop-blur supports-[backdrop-filter]:bg-gray-900/60 fixed top-0 left-0 right-0 z-50">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <Link href="#" className="flex items-center">
                  <LogoWrapper size="header" />
                  <span className="text-2xl font-bold text-white hover:text-blue-400 transition-colors">ESHWA AI</span>
                </Link>
              </div>
              <div className="hidden md:flex items-center space-x-8">
                <Link 
                  href="#consulting" 
                  className="text-gray-300 hover:text-blue-400 transition-colors pointer-events-auto"
                >
                  Consulting
                </Link>
                <Link 
                  href="#solutions" 
                  className="text-gray-300 hover:text-blue-400 transition-colors pointer-events-auto"
                >
                  Custom Solutions
                </Link>
                <Link 
                  href="#marketplace" 
                  className="text-gray-300 hover:text-blue-400 transition-colors pointer-events-auto"
                >
                  Marketplace
                </Link>
                <Link 
                  href="#training" 
                  className="text-gray-300 hover:text-blue-400 transition-colors pointer-events-auto"
                >
                  Training
                </Link>
              </div>
            </nav>
          </div>
        </header>
        <div className="absolute inset-0 z-0">
          <TrainingVideo />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Stay Ahead with Future-Ready AI Skills</h2>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                Upskill your team to design, manage, and govern AI systems with confidence. Our advanced training tracks
                go beyond the basics—covering cutting-edge topics like:
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-600" />
                  <span className="text-lg text-gray-300">Deep Learning Architectures</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-600" />
                  <span className="text-lg text-gray-300">Autonomous Agent Design</span>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-600" />
                  <span className="text-lg text-gray-300">Multi-Modal & Spatial Intelligence</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-600" />
                  <span className="text-lg text-gray-300">AI Security, Ethics, and Governance</span>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 rounded-lg p-8 mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Ideal For:</h3>
              <p className="text-lg text-gray-700">
                CXOs, technical leads, compliance officers, and future AI strategists.
              </p>
            </div>

            <div className="text-center">
              <Button size="lg" className="bg-blue-500 hover:bg-blue-600">
                <GraduationCap className="mr-2 h-5 w-5" />
                See Course Options
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Newsletter */}
      <section className="py-20 bg-blue-800 relative">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-4">Smarter Every Month.</h2>
            <p className="text-xl text-blue-100 mb-8">
              Join 1,000+ professionals getting AI insights, trend analysis, use cases, and tools—delivered monthly to
              your inbox. Curated specifically for decision-makers and innovation leaders in small and mid-sized
              organizations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <Input type="email" placeholder="Enter your email" className="bg-white" />
              <Button className="bg-white text-blue-600 hover:bg-gray-100">
                <Mail className="mr-2 h-5 w-5" />
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 relative">
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="flex items-center space-x-3">
                <LogoWrapper className="w-8 h-6" />
                <span className="text-xl font-bold text-white">ESHWA AI</span>
                <span className="text-gray-400">|</span>
                <span className="text-gray-400">AI Solutions for Modern Business</span>
              </div>
            </div>
            <div className="flex space-x-6 text-sm">
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                Terms
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                Contact
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                LinkedIn
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
