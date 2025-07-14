"use client"

import { ArrowRight, Building, Stethoscope, Scale, Store, Settings } from "lucide-react"
import { Button } from "@/components/ui/button"
import LogoWrapper from "@/components/logo-wrapper"
import Link from "next/link"

export default function ConsultingPage() {
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
                className="text-blue-400 hover:text-blue-300 transition-colors"
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

      <main className="pt-20">
        <section className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Expert AI Consulting Services
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Transform your business with our comprehensive AI consulting services.
              From strategy to implementation, we guide you every step of the way.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            <div className="bg-gray-800/50 p-6 rounded-lg hover:bg-gray-700/50 transition-colors">
              <Building className="w-8 h-8 text-blue-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Business Strategy</h3>
              <p className="text-gray-400">Develop AI strategies aligned with your business goals.</p>
            </div>
            
            <div className="bg-gray-800/50 p-6 rounded-lg hover:bg-gray-700/50 transition-colors">
              <Stethoscope className="w-8 h-8 text-blue-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Technical Assessment</h3>
              <p className="text-gray-400">Evaluate your current infrastructure and identify opportunities.</p>
            </div>
            
            <div className="bg-gray-800/50 p-6 rounded-lg hover:bg-gray-700/50 transition-colors">
              <Scale className="w-8 h-8 text-blue-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Implementation Planning</h3>
              <p className="text-gray-400">Create detailed roadmaps for successful AI deployment.</p>
            </div>
            
            <div className="bg-gray-800/50 p-6 rounded-lg hover:bg-gray-700/50 transition-colors">
              <Store className="w-8 h-8 text-blue-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">ROI Analysis</h3>
              <p className="text-gray-400">Measure and optimize the value of your AI investments.</p>
            </div>
          </div>

          <div className="mt-16">
            <Button className="bg-blue-400 hover:bg-blue-300 text-white px-8 py-4 rounded-full">
              Get Started
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </div>
        </section>
      </main>
    </div>
  )
}
