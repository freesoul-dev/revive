import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-earth-900 text-earth-100 section-padding">
      <div className="container-max">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-serif mb-4">rev'ive</h3>
            <p className="text-earth-200">
              Weaving Roots. Paths through celebration, gathering, and transmutation.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/contact" className="text-earth-200 hover:text-earth-50 transition">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/liberation-genealogy" className="text-earth-200 hover:text-earth-50 transition">
                  Liberation Genealogy Project
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Offerings</h4>
            <ul className="space-y-2 text-earth-200">
              <li>Ceremonies</li>
              <li>Conversations</li>
              <li>Communities</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-earth-700 pt-8 space-y-4">
          <div className="text-center text-earth-200 text-sm leading-relaxed max-w-4xl mx-auto">
            <p>
              i live and work on stolen land–the ancestral lands of the Haudenosaunee, Lenape, Osage, Shawnee, and many more peoples unnamed but known–"benefiting from the wealth of a nation built by stolen people. we assert our commitment to seeing these wrongs righted, this wealth redistributed, this culture shifted, and all beings thriving."
            </p>
          </div>
          <div className="text-center text-earth-300 text-sm">
            <p>&copy; {new Date().getFullYear()} rev'ive. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

