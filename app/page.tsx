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
import DNAVideo from "@/components/DNAVideo"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="min-h-screen relative mb-10">
        <div className="absolute inset-0">
          <BackgroundVideo />
          <div className="absolute inset-0 bg-black/40 backdrop-blur-sm"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/80 opacity-90"></div>
        </div>
        <header className="fixed top-0 left-0 right-0 z-50 w-full">
          <nav className="flex items-center justify-between w-full h-20 px-8 bg-black/70 backdrop-blur-md border-b-4 border-indigo-500/30 shadow-lg" style={{boxShadow: '0 4px 32px 0 rgba(60,60,120,0.12)'}}>
              <div className="flex items-center space-x-3">
                <Link href="/" className="flex items-center">
                  <LogoWrapper size="header" />
                  <span className="text-2xl font-bold text-white hover:text-blue-400 transition-colors">ESHWA AI</span>
                </Link>
              </div>
              <div className="hidden md:flex items-center space-x-8">
                <Link 
                  href="/consulting" 
                  className="text-gray-300 hover:text-blue-400 transition-colors"
                >
                  Consulting
                </Link>
                <Link 
                  href="/solutions" 
                  className="text-gray-300 hover:text-blue-400 transition-colors"
                >
                  Custom Solutions
                </Link>
                <Link 
                  href="/marketplace" 
                  className="text-gray-300 hover:text-blue-400 transition-colors"
                >
                  Marketplace
                </Link>
                <Link 
                  href="/training" 
                  className="text-gray-300 hover:text-blue-400 transition-colors"
                >
                  Training
                </Link>
              </div>
            </nav>
        </header>
        <div className="container mx-auto px-4 text-center relative z-10 pt-24">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <div className="mb-8">
                <div className="flex justify-center items-center mb-8">
                  <LogoWrapper size="hero" className="text-white" />
                </div>
                <div className="text-4xl font-bold text-gray-200 mb-4 tracking-wider">ESHWA AI</div>
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-extrabold mb-6 font-agdasima">
              <span className="block mb-2 text-white">Led by Humans.</span>
              <span className="block bg-gradient-to-r from-blue-100 via-blue-400 to-purple-400 bg-clip-text text-transparent drop-shadow-[0_2px_12px_rgba(99,102,241,0.5)]">Powered by AI.</span>
            </h1>
            <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
              Helping businesses unlock real-world value with secure, ethical, and scalable AI.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero">
                Get a Readiness Assessment
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="hero">
                Explore AI Solutions
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Section 1: Consulting & Business Readiness */}
      <section id="consulting" className="py-32 relative bg-gray-800 mb-10">
        <div className="absolute inset-0 z-0">
          <ConsultingVideo />
          <div className="absolute inset-0 bg-black/40 backdrop-blur-sm"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16 px-4">
              <h2 className="text-5xl font-bold text-white mb-6">AI Readiness. Without the Guesswork.</h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto">
                Before you invest in AI, know where your business stands. Our consulting services deliver tailored
                readiness assessments, risk evaluations, and practical roadmaps for implementation. Whether you're in
                healthcare, law, retail, or enterprise services—we prepare you to adopt AI with confidence, compliance,
                and clarity.
              </p>
            </div>

            <div className="mb-8">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">What We Deliver in Your AI Readiness Assessment</h3>
              <div className="flex flex-col md:flex-row justify-between items-stretch gap-6 px-2 md:px-4 bg-white/60 dark:bg-gray-800/60 rounded-2xl py-4 md:py-6 backdrop-blur-md shadow-sm border border-white/30 dark:border-gray-700/40" style={{boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.10)'}}>
                <div className="flex-1 flex flex-col items-center text-center px-2 md:px-4 py-2 transition-transform duration-200 hover:-translate-y-1 hover:bg-blue-50/40 dark:hover:bg-blue-900/20 rounded-xl">
                  <span className="h-8 w-8 mb-1 inline-flex items-center justify-center">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                      <defs>
                        <linearGradient id="opportunities-gradient" x1="0" y1="0" x2="1" y2="1">
                          <stop offset="0%" stopColor="#34d399" />
                          <stop offset="50%" stopColor="#38bdf8" />
                          <stop offset="100%" stopColor="#a78bfa" />
                        </linearGradient>
                      </defs>
                      <CheckCircle stroke="url(#opportunities-gradient)" className="h-8 w-8" />
                    </svg>
                  </span>
                  <div className="text-lg font-semibold text-gray-900 dark:text-white mb-0.5">High-Impact Opportunities</div>
                  <p className="text-sm font-semibold text-gray-800 dark:text-gray-200">Identify AI opportunities that deliver measurable business value</p>
                </div>
                <div className="flex-1 flex flex-col items-center text-center px-2 md:px-4 py-2 transition-transform duration-200 hover:-translate-y-1 hover:bg-blue-50/40 dark:hover:bg-blue-900/20 rounded-xl">
                  <span className="h-8 w-8 mb-1 inline-flex items-center justify-center">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                      <defs>
                        <linearGradient id="infrastructure-gradient" x1="0" y1="0" x2="1" y2="1">
                          <stop offset="0%" stopColor="#fbbf24" />
                          <stop offset="50%" stopColor="#f472b6" />
                          <stop offset="100%" stopColor="#38bdf8" />
                        </linearGradient>
                      </defs>
                      <Settings stroke="url(#infrastructure-gradient)" className="h-8 w-8" />
                    </svg>
                  </span>
                  <div className="text-lg font-semibold text-gray-900 dark:text-white mb-0.5">Infrastructure Assessment</div>
                  <p className="text-sm font-semibold text-gray-800 dark:text-gray-200">Evaluate data infrastructure and workflow gaps</p>
                </div>
                <div className="flex-1 flex flex-col items-center text-center px-2 md:px-4 py-2 transition-transform duration-200 hover:-translate-y-1 hover:bg-blue-50/40 dark:hover:bg-blue-900/20 rounded-xl">
                  <span className="h-8 w-8 mb-1 inline-flex items-center justify-center">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                      <defs>
                        <linearGradient id="compliance-gradient" x1="0" y1="0" x2="1" y2="1">
                          <stop offset="0%" stopColor="#a78bfa" />
                          <stop offset="50%" stopColor="#f472b6" />
                          <stop offset="100%" stopColor="#fbbf24" />
                        </linearGradient>
                      </defs>
                      <Scale stroke="url(#compliance-gradient)" className="h-8 w-8" />
                    </svg>
                  </span>
                  <div className="text-lg font-semibold text-gray-900 dark:text-white mb-0.5">Compliance & Ethics</div>
                  <p className="text-sm font-semibold text-gray-800 dark:text-gray-200">Navigate compliance, governance, and ethical requirements</p>
                </div>
              </div>
              <div className="flex justify-center items-center mt-4 mb-2">
                <div className="flex-1 h-px bg-gradient-to-r from-transparent via-blue-200 to-transparent dark:via-blue-900/40"></div>
              </div>
              <div className="flex justify-center mt-0 mb-2">
                <Button className="w-full max-w-xs md:max-w-sm shadow-md">
                  Schedule Your Readiness Audit
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Custom Agentic Solutions */}
      <section id="solutions" className="py-32 relative bg-gray-900 mb-10">
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

            <div className="mb-8">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">Industry-Specific AI Agent Solutions</h3>
              <div className="flex flex-col lg:flex-row justify-between items-stretch gap-6 px-2 lg:px-4 bg-white/60 dark:bg-gray-800/60 rounded-2xl py-4 lg:py-6 backdrop-blur-md shadow-sm border border-white/30 dark:border-gray-700/40" style={{boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.10)'}}>
                <div className="flex-1 flex flex-col items-center text-center px-2 lg:px-4 py-2 transition-transform duration-200 hover:-translate-y-1 hover:bg-blue-50/40 dark:hover:bg-blue-900/20 rounded-xl">
                  <span className="h-8 w-8 mb-1 inline-flex items-center justify-center">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                      <defs>
                        <linearGradient id="healthcare-gradient" x1="0" y1="0" x2="1" y2="1">
                          <stop offset="0%" stopColor="#f472b6" />
                          <stop offset="50%" stopColor="#f87171" />
                          <stop offset="100%" stopColor="#facc15" />
                        </linearGradient>
                      </defs>
                      <Stethoscope stroke="url(#healthcare-gradient)" className="h-8 w-8" />
                    </svg>
                  </span>
                  <div className="text-lg font-semibold text-gray-900 dark:text-white mb-0.5">Healthcare</div>
                  <p className="text-sm font-semibold text-gray-800 dark:text-gray-200">Enhance patient flow, diagnostics, and coordination</p>
                </div>
                <div className="flex-1 flex flex-col items-center text-center px-2 lg:px-4 py-2 transition-transform duration-200 hover:-translate-y-1 hover:bg-blue-50/40 dark:hover:bg-blue-900/20 rounded-xl">
                  <span className="h-8 w-8 mb-1 inline-flex items-center justify-center">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                      <defs>
                        <linearGradient id="lawoffices-gradient" x1="0" y1="0" x2="1" y2="1">
                          <stop offset="0%" stopColor="#60a5fa" />
                          <stop offset="50%" stopColor="#22d3ee" />
                          <stop offset="100%" stopColor="#4ade80" />
                        </linearGradient>
                      </defs>
                      <Scale stroke="url(#lawoffices-gradient)" className="h-8 w-8" />
                    </svg>
                  </span>
                  <div className="text-lg font-semibold text-gray-900 dark:text-white mb-0.5">Law Offices</div>
                  <p className="text-sm font-semibold text-gray-800 dark:text-gray-200">Streamline intake, research, and contract handling</p>
                </div>
                <div className="flex-1 flex flex-col items-center text-center px-2 lg:px-4 py-2 transition-transform duration-200 hover:-translate-y-1 hover:bg-blue-50/40 dark:hover:bg-blue-900/20 rounded-xl">
                  <span className="h-8 w-8 mb-1 inline-flex items-center justify-center">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                      <defs>
                        <linearGradient id="retail-gradient" x1="0" y1="0" x2="1" y2="1">
                          <stop offset="0%" stopColor="#fde68a" />
                          <stop offset="50%" stopColor="#fb923c" />
                          <stop offset="100%" stopColor="#f472b6" />
                        </linearGradient>
                      </defs>
                      <Store stroke="url(#retail-gradient)" className="h-8 w-8" />
                    </svg>
                  </span>
                  <div className="text-lg font-semibold text-gray-900 dark:text-white mb-0.5">Retail</div>
                  <p className="text-sm font-semibold text-gray-800 dark:text-gray-200">Forecast demand, manage inventory, and personalize experiences</p>
                </div>
                <div className="flex-1 flex flex-col items-center text-center px-2 lg:px-4 py-2 transition-transform duration-200 hover:-translate-y-1 hover:bg-blue-50/40 dark:hover:bg-blue-900/20 rounded-xl">
                  <span className="h-8 w-8 mb-1 inline-flex items-center justify-center">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                      <defs>
                        <linearGradient id="enterprise-gradient" x1="0" y1="0" x2="1" y2="1">
                          <stop offset="0%" stopColor="#a78bfa" />
                          <stop offset="50%" stopColor="#6366f1" />
                          <stop offset="100%" stopColor="#60a5fa" />
                        </linearGradient>
                      </defs>
                      <Building stroke="url(#enterprise-gradient)" className="h-8 w-8" />
                    </svg>
                  </span>
                  <div className="text-lg font-semibold text-gray-900 dark:text-white mb-0.5">Enterprise Ops</div>
                  <p className="text-sm font-semibold text-gray-800 dark:text-gray-200">Automate reporting, support services, and vendor interactions</p>
                </div>
              </div>
              <div className="flex justify-center items-center mt-4 mb-2">
                <div className="flex-1 h-px bg-gradient-to-r from-transparent via-blue-200 to-transparent dark:via-blue-900/40"></div>
              </div>
              <div className="flex justify-center mt-0 mb-2">
                <Button className="w-full max-w-xs md:max-w-sm shadow-md">
                  Book a Demo
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Agent Marketplace */}
      <section id="marketplace" className="py-32 relative mb-10 bg-gray-900">
        <div className="absolute inset-0 z-0">
          <DNAVideo />
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

            <div className="mb-8">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">Pre-Built AI Agents for Every Business Need</h3>
              <div className="flex flex-col lg:flex-row justify-between items-stretch gap-6 px-2 lg:px-4 bg-white/60 dark:bg-gray-800/60 rounded-2xl py-4 lg:py-6 backdrop-blur-md shadow-sm border border-white/30 dark:border-gray-700/40" style={{boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.10)'}}>
                <div className="flex-1 flex flex-col items-center text-center px-2 lg:px-4 py-2 transition-transform duration-200 hover:-translate-y-1 hover:bg-blue-50/40 dark:hover:bg-blue-900/20 rounded-xl">
                  <span className="h-8 w-8 mb-1 inline-flex items-center justify-center">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                      <defs>
                        <linearGradient id="decision-gradient" x1="0" y1="0" x2="1" y2="1">
                          <stop offset="0%" stopColor="#34d399" />
                          <stop offset="50%" stopColor="#38bdf8" />
                          <stop offset="100%" stopColor="#a78bfa" />
                        </linearGradient>
                      </defs>
                      <CheckCircle stroke="url(#decision-gradient)" className="h-8 w-8" />
                    </svg>
                  </span>
                  <div className="text-lg font-semibold text-gray-900 dark:text-white mb-0.5">Decision Support Assistants</div>
                  <p className="text-sm font-semibold text-gray-800 dark:text-gray-200">AI-powered decision making for complex business scenarios</p>
                </div>
                <div className="flex-1 flex flex-col items-center text-center px-2 lg:px-4 py-2 transition-transform duration-200 hover:-translate-y-1 hover:bg-blue-50/40 dark:hover:bg-blue-900/20 rounded-xl">
                  <span className="h-8 w-8 mb-1 inline-flex items-center justify-center">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                      <defs>
                        <linearGradient id="vendor-gradient" x1="0" y1="0" x2="1" y2="1">
                          <stop offset="0%" stopColor="#fbbf24" />
                          <stop offset="50%" stopColor="#f472b6" />
                          <stop offset="100%" stopColor="#38bdf8" />
                        </linearGradient>
                      </defs>
                      <Scale stroke="url(#vendor-gradient)" className="h-8 w-8" />
                    </svg>
                  </span>
                  <div className="text-lg font-semibold text-gray-900 dark:text-white mb-0.5">Vendor Audit Analyzers</div>
                  <p className="text-sm font-semibold text-gray-800 dark:text-gray-200">Automated vendor performance and compliance analysis</p>
                </div>
                <div className="flex-1 flex flex-col items-center text-center px-2 lg:px-4 py-2 transition-transform duration-200 hover:-translate-y-1 hover:bg-blue-50/40 dark:hover:bg-blue-900/20 rounded-xl">
                  <span className="h-8 w-8 mb-1 inline-flex items-center justify-center">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                      <defs>
                        <linearGradient id="inventory-gradient" x1="0" y1="0" x2="1" y2="1">
                          <stop offset="0%" stopColor="#a78bfa" />
                          <stop offset="50%" stopColor="#f472b6" />
                          <stop offset="100%" stopColor="#fbbf24" />
                        </linearGradient>
                      </defs>
                      <Store stroke="url(#inventory-gradient)" className="h-8 w-8" />
                    </svg>
                  </span>
                  <div className="text-lg font-semibold text-gray-900 dark:text-white mb-0.5">Inventory & Demand Planners</div>
                  <p className="text-sm font-semibold text-gray-800 dark:text-gray-200">Smart forecasting and inventory optimization</p>
                </div>
                <div className="flex-1 flex flex-col items-center text-center px-2 lg:px-4 py-2 transition-transform duration-200 hover:-translate-y-1 hover:bg-blue-50/40 dark:hover:bg-blue-900/20 rounded-xl">
                  <span className="h-8 w-8 mb-1 inline-flex items-center justify-center">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                      <defs>
                        <linearGradient id="digitalme-gradient" x1="0" y1="0" x2="1" y2="1">
                          <stop offset="0%" stopColor="#fde68a" />
                          <stop offset="50%" stopColor="#fb923c" />
                          <stop offset="100%" stopColor="#f472b6" />
                        </linearGradient>
                      </defs>
                      <Building stroke="url(#digitalme-gradient)" className="h-8 w-8" />
                    </svg>
                  </span>
                  <div className="text-lg font-semibold text-gray-900 dark:text-white mb-0.5">"Digital Me" Agents</div>
                  <p className="text-sm font-semibold text-gray-800 dark:text-gray-200">Personal AI for email, finance, and health management</p>
                </div>
              </div>
              <div className="flex justify-center items-center mt-4 mb-2">
                <div className="flex-1 h-px bg-gradient-to-r from-transparent via-blue-200 to-transparent dark:via-blue-900/40"></div>
              </div>
              <div className="flex justify-center mt-0 mb-2">
                <Button variant="hero" className="w-full max-w-xs md:max-w-sm shadow-md">
                  <ShoppingCart className="mr-2 h-5 w-5" />
                  Explore the Marketplace
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Advanced AI Training */}
      <section id="training" className="py-20 relative bg-gray-900">
        <div className="absolute inset-0 z-0">
          <TrainingVideo />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-4xl font-bold text-white mb-2">Stay Ahead with Future-Ready AI Skills</h2>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-6">
                Upskill your team to design, manage, and govern AI systems with confidence. Our advanced training tracks
                go beyond the basics—covering cutting-edge topics like:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8 max-w-4xl mx-auto">
              <div className="flex items-center space-x-3 bg-gray-800/50 rounded-lg p-4">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="flex-shrink-0">
                  <defs>
                    <linearGradient id="check-gradient-1" x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0%" stopColor="#3b82f6" />
                      <stop offset="100%" stopColor="#06b6d4" />
                    </linearGradient>
                  </defs>
                  <CheckCircle stroke="url(#check-gradient-1)" className="h-6 w-6" />
                </svg>
                <span className="text-lg text-gray-200 font-medium">Deep Learning Architectures</span>
              </div>
              <div className="flex items-center space-x-3 bg-gray-800/50 rounded-lg p-4">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="flex-shrink-0">
                  <defs>
                    <linearGradient id="check-gradient-2" x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0%" stopColor="#3b82f6" />
                      <stop offset="100%" stopColor="#06b6d4" />
                    </linearGradient>
                  </defs>
                  <CheckCircle stroke="url(#check-gradient-2)" className="h-6 w-6" />
                </svg>
                <span className="text-lg text-gray-200 font-medium">Autonomous Agent Design</span>
              </div>
              <div className="flex items-center space-x-3 bg-gray-800/50 rounded-lg p-4">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="flex-shrink-0">
                  <defs>
                    <linearGradient id="check-gradient-3" x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0%" stopColor="#3b82f6" />
                      <stop offset="100%" stopColor="#06b6d4" />
                    </linearGradient>
                  </defs>
                  <CheckCircle stroke="url(#check-gradient-3)" className="h-6 w-6" />
                </svg>
                <span className="text-lg text-gray-200 font-medium">Multi-Modal & Spatial Intelligence</span>
              </div>
              <div className="flex items-center space-x-3 bg-gray-800/50 rounded-lg p-4">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="flex-shrink-0">
                  <defs>
                    <linearGradient id="check-gradient-4" x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0%" stopColor="#3b82f6" />
                      <stop offset="100%" stopColor="#06b6d4" />
                    </linearGradient>
                  </defs>
                  <CheckCircle stroke="url(#check-gradient-4)" className="h-6 w-6" />
                </svg>
                <span className="text-lg text-gray-200 font-medium">AI Security, Ethics, and Governance</span>
              </div>
            </div>

            <div className="max-w-4xl mx-auto mb-6">
              <div className="bg-gray-800/60 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
                <h3 className="text-xl font-bold text-white mb-2">Ideal For:</h3>
                <p className="text-lg text-gray-300">
                  CXOs, technical leads, compliance officers, and future AI strategists.
                </p>
              </div>
            </div>

            <div className="text-center">
              <Button variant="hero" className="bg-gradient-to-r from-blue-500 to-cyan-400 hover:from-blue-600 hover:to-cyan-500 text-white font-bold py-3 px-8 rounded-full shadow-lg">
                <GraduationCap className="mr-2 h-5 w-5" />
                See Course Options
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Newsletter */}
      <section className="py-20 relative bg-gradient-to-br from-blue-900 via-blue-800 to-cyan-700">
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
              <Button>
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
