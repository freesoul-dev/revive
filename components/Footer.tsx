import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-charcoal text-cream section-padding">
      <div className="container-max">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-serif mb-4">rev&apos;ive</h3>
            <p className="text-cream/80">
              Weaving Roots. Paths through celebration, gathering, and transmutation.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/contact" className="text-cream/80 hover:text-ochre transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/liberation-genealogy" className="text-cream/80 hover:text-ochre transition-colors">
                  Liberation Genealogy Project
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Offerings</h4>
            <ul className="space-y-2 text-cream/80">
              <li>Ceremonies</li>
              <li>Conversations</li>
              <li>Communities</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-charcoal-light pt-8 space-y-4">
          <div className="text-center text-cream/70 text-sm leading-relaxed max-w-4xl mx-auto">
            <p>
              i live and work on stolen land–the ancestral lands of the Haudenosaunee, Lenape, Osage, Shawnee, and many more peoples unnamed but known–&ldquo;benefiting from the wealth of a nation built by stolen people. we assert our commitment to seeing these wrongs righted, this wealth redistributed, this culture shifted, and all beings thriving.&rdquo;
            </p>
          </div>
          <div className="text-center text-cream/70 text-sm">
            <p>&copy; {new Date().getFullYear()} rev&apos;ive. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
