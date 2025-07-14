"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Globe } from "lucide-react"
import Link from "next/link"
import LogoWrapper from "@/components/logo-wrapper"

export default function ContactPage() {
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
          <div className="grid md:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-8">Get in Touch</h1>
              <div className="space-y-8">
                <div className="flex items-start gap-4 p-4 bg-gray-800/50 rounded-lg">
                  <Mail className="h-6 w-6 text-blue-400" />
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Email</h3>
                    <p className="text-gray-300">contact@eshwa.ai</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-gray-800/50 rounded-lg">
                  <Phone className="h-6 w-6 text-blue-400" />
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Phone</h3>
                    <p className="text-gray-300">+1 (234) 567-8900</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-gray-800/50 rounded-lg">
                  <MapPin className="h-6 w-6 text-blue-400" />
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Location</h3>
                    <p className="text-gray-300">Silicon Valley, California</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-gray-800/50 rounded-lg">
                  <Globe className="h-6 w-6 text-blue-400" />
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Website</h3>
                    <p className="text-gray-300">www.eshwa.ai</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-gray-800/50 p-8 rounded-lg">
              <h2 className="text-3xl font-bold text-white mb-6">Send us a Message</h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Input
                      placeholder="First Name"
                      className="w-full"
                    />
                  </div>
                  <div>
                    <Input
                      placeholder="Last Name"
                      className="w-full"
                    />
                  </div>
                </div>

                <Input
                  placeholder="Email Address"
                  type="email"
                  className="w-full"
                />

                <Input
                  placeholder="Phone Number"
                  type="tel"
                  className="w-full"
                />

                <Textarea
                  placeholder="Your Message"
                  className="w-full min-h-[150px]"
                />

                <Button className="w-full bg-blue-500 hover:bg-blue-600">
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
