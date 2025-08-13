import React from 'react'
import { Link } from 'react-router-dom'
import { useAuthStore } from '@/store/authStore'
import Button from '@/components/common/Button'

const Hero: React.FC = () => {
  const { isAuthenticated } = useAuthStore()

  return (
    <section className="hero bg-gradient-to-br from-umwelt-green-50 to-umwelt-green-100 py-16 relative">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6">
            <span className="block">🌱 UmweltHaus im Rockenhof</span>
          </h1>
          <h2 className="text-xl md:text-2xl text-gray-600 mb-8">
            Zentrum für Klimaschutz, Umweltbildung und Umweltpolitik
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Ein Ort für nachhaltige Bildung und gesellschaftliche Transformation zu einer klimaneutralen Zukunft bis 2035.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {isAuthenticated ? (
              <Link to="/dashboard">
                <Button size="lg" className="w-full sm:w-auto">
                  Zum Dashboard
                </Button>
              </Link>
            ) : (
              <>
                <Link to="/register">
                  <Button size="lg" className="w-full sm:w-auto">
                    Jetzt mitmachen
                  </Button>
                </Link>
                <Link to="/login">
                  <Button variant="outline" size="lg" className="w-full sm:w-auto">
                    Anmelden
                  </Button>
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero