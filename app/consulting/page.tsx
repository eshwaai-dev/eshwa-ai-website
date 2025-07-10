import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, CheckCircle, Settings, Scale } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import LogoWrapper from "@/components/logo-wrapper"
import ConsultingVideo from "@/components/ConsultingVideo"

export default function ConsultingPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <header className="fixed top-0 left-0 right-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between bg-gray-900/95 backdrop-blur supports-[backdrop-filter]:bg-gray-900/60 border-b border-gray-800">
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
        </div>
      </header>

      <div className="absolute inset-0 z-0">
        <ConsultingVideo />
        <div className="absolute inset-0 bg-black/40 backdrop-blur-sm"></div>
      </div>

      <main className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">AI Consulting Services</h1>
          <p className="text-xl text-gray-300 mb-8">
            This page will contain detailed information about our AI consulting services.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-gray-800 p-6 rounded-lg">
              <h2 className="text-2xl font-bold mb-4">Coming Soon</h2>
              <p className="text-gray-400">
                Detailed information about our AI readiness assessments and business consulting services will be available here.
              </p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg">
              <h2 className="text-2xl font-bold mb-4">Stay Tuned</h2>
              <p className="text-gray-400">
                We're working on creating comprehensive content about our consulting offerings and how we help businesses prepare for AI adoption.
              </p>
            </div>
          </div>

          <div className="text-center">
            <Button size="lg" className="bg-blue-500 hover:bg-blue-600">
              Contact Us for Pre-Launch Access
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </main>
    </div>
  )
}
