"use client"

import { ArrowRight, GraduationCap, Mail, CheckCircle, Building, Stethoscope } from "lucide-react"
import { Button } from "@/components/ui/button"
import LogoWrapper from "@/components/logo-wrapper"
import Link from "next/link"

export default function SolutionsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800">
      <header className="border-b border-gray-800 bg-gray-900/95 backdrop-blur supports-[backdrop-filter]:bg-gray-900/60 fixed top-0 left-0 right-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
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
                className="text-blue-400 hover:text-blue-300 transition-colors"
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

      <main className="pt-20">
        <section className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Custom AI Solutions
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Tailored AI solutions that solve your unique business challenges.
              From proof of concept to production, we deliver results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            <div className="bg-gray-800/50 p-6 rounded-lg hover:bg-gray-700/50 transition-colors">
              <GraduationCap className="w-8 h-8 text-blue-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Custom Development</h3>
              <p className="text-gray-400">Build AI solutions that perfectly fit your needs.</p>
            </div>
            
            <div className="bg-gray-800/50 p-6 rounded-lg hover:bg-gray-700/50 transition-colors">
              <Mail className="w-8 h-8 text-blue-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Integration Services</h3>
              <p className="text-gray-400">Seamlessly integrate AI into your existing systems.</p>
            </div>
            
            <div className="bg-gray-800/50 p-6 rounded-lg hover:bg-gray-700/50 transition-colors">
              <CheckCircle className="w-8 h-8 text-blue-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Quality Assurance</h3>
              <p className="text-gray-400">Ensure your AI solutions are reliable and performant.</p>
            </div>
          </div>

          <div className="mt-16">
            <Button className="bg-blue-400 hover:bg-blue-300 text-white px-8 py-4 rounded-full">
              Request a Demo
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </div>
        </section>
      </main>
    </div>
  )
}
