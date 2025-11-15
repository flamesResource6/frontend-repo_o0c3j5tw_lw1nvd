import React from 'react'

const NAV_ITEMS = [
  { href: '#about', label: 'About' },
  { href: '#menu', label: 'Menu' },
  { href: '#gallery', label: 'Gallery' },
  { href: '#contact', label: 'Contact' },
]

function App() {
  const primary = '#6B4F35'
  const secondary = '#C99A6B'
  const bg = '#FAF9F7'

  const backendUrl = import.meta.env.VITE_BACKEND_URL // kept for future expansion

  return (
    <div className="min-h-screen" style={{ backgroundColor: bg }}>
      {/* Header / Nav */}
      <header className="sticky top-0 z-40 border-b border-b-stone-200/60 backdrop-blur bg-white/80">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex h-16 items-center justify-between">
            <a href="#top" className="flex items-center gap-3">
              <div
                className="h-9 w-9 rounded-full grid place-content-center text-white shadow"
                style={{ backgroundColor: primary }}
                aria-hidden
              >
                SC
              </div>
              <div className="leading-tight">
                <div className="font-extrabold text-lg sm:text-xl" style={{ color: primary }}>
                  Suways Coffee & Restaurant
                </div>
                <div className="text-xs text-stone-500 hidden sm:block">Utawala, Eastern Bypass</div>
              </div>
            </a>

            <nav className="hidden md:flex items-center gap-6">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-sm font-medium text-stone-700 hover:text-stone-900 transition-colors"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-semibold text-white shadow-sm hover:shadow transition"
                style={{ backgroundColor: primary }}
              >
                Reserve Your Table
              </a>
            </nav>

            {/* Mobile menu button (anchors visible inline) */}
            <div className="md:hidden flex items-center gap-3">
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-md px-3 py-2 text-sm font-semibold text-white shadow-sm"
                style={{ backgroundColor: primary }}
              >
                Reserve
              </a>
            </div>
          </div>
          {/* Mobile anchors */}
          <div className="md:hidden flex items-center justify-between pb-3">
            <div className="flex gap-4">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-sm font-medium text-stone-700 hover:text-stone-900"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section id="top" className="relative">
        <div className="absolute inset-0 -z-10">
          <img
            src="https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?q=80&w=2070&auto=format&fit=crop"
            alt="Coffee and breakfast scene"
            className="h-[60vh] sm:h-[70vh] w-full object-cover"
          />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, rgba(0,0,0,0.35) 0%, rgba(0,0,0,0.45) 40%, rgba(0,0,0,0.55) 100%)' }} />
        </div>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-end h-[60vh] sm:h-[70vh]">
          <div className="pb-16 sm:pb-24">
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight">
              Suways Coffee & Restaurant
            </h1>
            <p className="mt-4 text-base sm:text-lg md:text-xl text-stone-100 max-w-2xl">
              Quality Coffee. Delightful Food. Community Hub.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="#menu"
                className="rounded-md px-5 py-2.5 text-sm font-semibold text-white shadow hover:shadow-md transition"
                style={{ backgroundColor: primary }}
              >
                Explore Menu Highlights
              </a>
              <a
                href="https://maps.google.com/?q=Suways%20Coffee%20%26%20Restaurant%20Utawala%20Eastern%20Bypass%20Shell%20APTC"
                target="_blank"
                rel="noreferrer"
                className="rounded-md px-5 py-2.5 text-sm font-semibold border border-white/80 text-white/95 hover:bg-white/10 transition"
              >
                View on Google Maps
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-16 sm:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold" style={{ color: primary }}>
              About Us
            </h2>
            <p className="mt-4 text-stone-700 leading-relaxed">
              At Suways Coffee & Restaurant, we serve freshly brewed coffees and culinary creations. Located on Eastern Bypass in Utawala, Nairobi, our space is a community-focused hub where friends gather, flavours blend and every dish is crafted with care.
            </p>
            <div className="mt-6 flex items-center gap-6 text-stone-700">
              <div className="flex items-center gap-2"><span className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: secondary }}></span> Gourmet Coffee</div>
              <div className="flex items-center gap-2"><span className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: secondary }}></span> Breakfast & Mains</div>
              <div className="flex items-center gap-2"><span className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: secondary }}></span> Vegan Options</div>
            </div>
          </div>
          <div className="relative rounded-xl overflow-hidden shadow-lg ring-1 ring-stone-200/60">
            <img
              src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=1974&auto=format&fit=crop"
              alt="Barista pouring latte art"
              className="w-full h-80 object-cover"
            />
            <div className="absolute inset-0 pointer-events-none" style={{ boxShadow: 'inset 0 0 80px rgba(0,0,0,0.08)' }} />
          </div>
        </div>
      </section>

      {/* Menu Highlights */}
      <section id="menu" className="py-16 sm:py-24 bg-white/70">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex items-end justify-between gap-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold" style={{ color: primary }}>
              Menu Highlights
            </h2>
            <span className="text-sm text-stone-500">Gourmet coffee • Breakfast • Snacks • Mains • Vegan</span>
          </div>
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'Gourmet Coffee',
                img: 'https://images.unsplash.com/photo-1498804103079-a6351b050096?q=80&w=2069&auto=format&fit=crop',
                desc: 'Espresso, cappuccino, lattes and slow brews crafted to perfection.'
              },
              {
                title: 'Full Breakfast',
                img: 'https://images.unsplash.com/photo-1516685018646-549198525c1b?q=80&w=2070&auto=format&fit=crop',
                desc: 'Hearty plates with eggs, sausages, pancakes and fresh sides.'
              },
              {
                title: 'Snacks & Bites',
                img: 'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=2070&auto=format&fit=crop',
                desc: 'Samosas, pastries, sandwiches and light bites for every moment.'
              },
              {
                title: 'Signature Mains',
                img: 'https://images.unsplash.com/photo-1473093295043-cdd812d0e601?q=80&w=2070&auto=format&fit=crop',
                desc: 'Flavour-packed grills, stews and chef specials.'
              },
              {
                title: 'Fresh Salads',
                img: 'https://images.unsplash.com/photo-1566843972141-bffc7f8c8b1a?q=80&w=1974&auto=format&fit=crop',
                desc: 'Crisp greens and vibrant bowls with house dressings.'
              },
              {
                title: 'Vegan Options',
                img: 'https://images.unsplash.com/photo-1501959915551-4e8a04a3d9a7?q=80&w=2070&auto=format&fit=crop',
                desc: 'Plant-forward dishes that never compromise on taste.'
              },
            ].map((card) => (
              <div key={card.title} className="group rounded-xl overflow-hidden bg-white ring-1 ring-stone-200/70 shadow-sm hover:shadow-md transition">
                <div className="h-44 w-full overflow-hidden">
                  <img src={card.img} alt={card.title} className="h-full w-full object-cover group-hover:scale-[1.03] transition-transform duration-300" />
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-lg" style={{ color: primary }}>{card.title}</h3>
                  <p className="mt-1.5 text-sm text-stone-600">{card.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section id="gallery" className="py-16 sm:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-extrabold" style={{ color: primary }}>
            Gallery
          </h2>
          <p className="mt-3 text-stone-600">A glimpse into our space, our coffee and our plates.</p>
          <div className="mt-8 grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
            {[
              'https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?q=80&w=2070&auto=format&fit=crop',
              'https://images.unsplash.com/photo-1445077100181-a33e9ac94db0?q=80&w=1974&auto=format&fit=crop',
              'https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1974&auto=format&fit=crop',
              'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=1974&auto=format&fit=crop',
              'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?q=80&w=1974&auto=format&fit=crop',
              'https://images.unsplash.com/photo-1515010137531-66995c7f40e7?q=80&w=2070&auto=format&fit=crop',
            ].map((src, idx) => (
              <div key={idx} className="relative overflow-hidden rounded-lg shadow ring-1 ring-stone-200/70">
                <img src={src} alt="Suways gallery" className="h-36 sm:h-44 md:h-56 w-full object-cover hover:scale-[1.03] transition-transform duration-300" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact & Location */}
      <section id="contact" className="py-16 sm:py-24 bg-white/70">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-10">
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold" style={{ color: primary }}>
              Contact & Location
            </h2>
            <div className="mt-5 space-y-3 text-stone-700">
              <p><span className="font-semibold">Phone:</span> <a href="tel:+254708623655" className="underline decoration-dotted hover:text-stone-900">+254 708 623 655</a></p>
              <p><span className="font-semibold">Address:</span> Utawala, Eastern Bypass (Shell APTC), Nairobi, Kenya</p>
              <div className="flex gap-3 pt-2">
                <a
                  href="https://maps.google.com/?q=Suways%20Coffee%20%26%20Restaurant%20Utawala%20Eastern%20Bypass%20Shell%20APTC"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-semibold text-white shadow-sm hover:shadow transition"
                  style={{ backgroundColor: primary }}
                >
                  Open in Google Maps
                </a>
                <a
                  href="tel:+254708623655"
                  className="inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-semibold border border-stone-300 text-stone-800 hover:bg-stone-50"
                >
                  Call Now
                </a>
              </div>

              <div className="pt-6">
                <p className="text-sm text-stone-600">Prefer to book ahead?</p>
                <a
                  href="#"
                  className="inline-flex items-center justify-center rounded-md px-4 py-2 mt-2 text-sm font-semibold text-white shadow-sm hover:shadow transition"
                  style={{ backgroundColor: secondary }}
                >
                  Reserve Your Table
                </a>
              </div>

              <div className="pt-6">
                <p className="text-sm text-stone-600">Follow us</p>
                <div className="mt-2 flex gap-4">
                  <a href="#" className="text-stone-700 hover:text-stone-900 underline decoration-dotted">Instagram</a>
                  <a href="#" className="text-stone-700 hover:text-stone-900 underline decoration-dotted">TikTok</a>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="rounded-xl overflow-hidden shadow ring-1 ring-stone-200/70">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15956.665870208695!2d36.9795!3d-1.2795!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f77a0a7f1a3c1%3A0x0000000000000000!2sUtawala%2C%20Eastern%20Bypass%2C%20Nairobi!5e0!3m2!1sen!2ske!4v1700000000000"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Suways location map"
              />
            </div>
            <p className="mt-2 text-xs text-stone-500">Map is indicative. Replace with the exact Google Maps embed for Suways when available.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-stone-200/70">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10 grid md:grid-cols-2 gap-6 items-center">
          <div>
            <p className="font-extrabold" style={{ color: primary }}>Suways Coffee & Restaurant</p>
            <p className="text-sm text-stone-600 mt-1">Utawala, Eastern Bypass (Shell APTC), Nairobi, Kenya</p>
          </div>
          <div className="md:text-right text-sm text-stone-700">
            <div>
              <a href="tel:+254708623655" className="underline decoration-dotted hover:text-stone-900">+254 708 623 655</a>
            </div>
            <div className="mt-2 text-stone-500">© {new Date().getFullYear()} Suways Coffee & Restaurant. All rights reserved.</div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
