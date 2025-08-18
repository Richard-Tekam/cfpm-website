import Link from "next/link"
import Image from "next/image"
import { Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo et description */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Image
                width = {40}
                height= {40}
                src="/cfpm-logo.jpeg" 
                alt="Logo CFP-M" 
                className="h-8 w-auto"
              />
              <span className="text-xl font-bold">CFP-M</span>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              Centre de Formation Professionnelle aux Métiers - Informatiques, Linguistiques, Management, 
              Agribusiness et BTP. Formation pratique &quot;Learning by Doing&quot; pour votre insertion professionnelle.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Instagram className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Liens rapides */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Formations</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/formations" className="text-gray-300 hover:text-white transition-colors">
                  Informatique & Bureautique
                </Link>
              </li>
              <li>
                <Link href="/formations" className="text-gray-300 hover:text-white transition-colors">
                  Langues Étrangères
                </Link>
              </li>
              <li>
                <Link href="/formations" className="text-gray-300 hover:text-white transition-colors">
                  Management
                </Link>
              </li>
              <li>
                <Link href="/formations" className="text-gray-300 hover:text-white transition-colors">
                  Agribusiness
                </Link>
              </li>
              <li>
                <Link href="/formations" className="text-gray-300 hover:text-white transition-colors">
                  BTP
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-blue-400" />
                <span className="text-gray-300">+237 6 56 31 17 85</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-blue-400" />
                <span className="text-gray-300">+237 691269831</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-blue-400" />
                <span className="text-gray-300">cfpmdschang@gmail.com</span>
              </li>
              <li className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 text-blue-400 mt-1" />
                <span className="text-gray-300">
                  Dschang, Région de l&apos;Ouest
                  <br />
                  Cameroun
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 mb-4 md:mb-0">
              © 2025 Centre de Formation Professionnelle aux Métiers. Tous droits réservés.
            </p>
            <div className="flex items-center space-x-4 text-sm text-gray-400">
              <span>Agréé MINEFOP N° 000349</span>
              <span>•</span>
              <span>Partenaire MINJEC</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
