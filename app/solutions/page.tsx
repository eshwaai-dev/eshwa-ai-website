import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import BackgroundVideo from "@/components/BackgroundVideo"
import LogoWrapper from "@/components/logo-wrapper"
import Link from "next/link"

export default function SolutionsPage() {
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
        <BackgroundVideo />
        <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />
      </div>

      <main className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">Custom AI Solutions</h1>
          <p className="text-xl text-gray-300 mb-8">
            This page will contain detailed information about our custom AI solutions.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-gray-800 p-6 rounded-lg">
              <h2 className="text-2xl font-bold mb-4">Coming Soon</h2>
              <p className="text-gray-400">
                Detailed information about our custom AI solutions for various industries will be available here.
              </p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg">
              <h2 className="text-2xl font-bold mb-4">Stay Tuned</h2>
              <p className="text-gray-400">
                We're working on creating comprehensive content about our custom AI solutions and how they can transform your business.
              </p>
            </div>
          </div>

          <div className="bg-blue-50 rounded-lg p-8 mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">What You Get:</h3>
            <p className="text-lg text-gray-700">
              Purpose-built AI copilots that plug into your tools, talk your language, and grow with your team.
            </p>
          </div>

          <div className="text-center">
            <Button>
              Contact Us for Pre-Launch Access
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </main>
    </div>
  )
}
