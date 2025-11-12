import Header from './components/Header'
import CategoryCard from './components/CategoryCard'
import Footer from './components/Footer'

const CATEGORIES = [
  {
    title: 'Necklaces',
    image:
      'https://images.unsplash.com/photo-1612178537255-938c4efc92d8?q=80&w=1470&auto=format&fit=crop',
    count: 24,
  },
  {
    title: 'Earrings',
    image:
      'https://images.unsplash.com/photo-1585384045833-63f9b3b83bb0?q=80&w=1470&auto=format&fit=crop',
    count: 32,
  },
  {
    title: 'Rings',
    image:
      'https://images.unsplash.com/photo-1612208695882-c7b5b2b3e8d5?q=80&w=1470&auto=format&fit=crop',
    count: 18,
  },
  {
    title: 'Bangles',
    image:
      'https://images.unsplash.com/photo-1603569283848-890cd23078f2?q=80&w=1470&auto=format&fit=crop',
    count: 15,
  },
  {
    title: 'Pendants',
    image:
      'https://images.unsplash.com/photo-1612178524967-7b4f2ea7dd8e?q=80&w=1470&auto=format&fit=crop',
    count: 20,
  },
  {
    title: 'Bracelets',
    image:
      'https://images.unsplash.com/photo-1552332386-f8dd00dc2f85?q=80&w=1470&auto=format&fit=crop',
    count: 27,
  },
  {
    title: 'Anklets',
    image:
      'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?q=80&w=1470&auto=format&fit=crop',
    count: 9,
  },
  {
    title: 'Mangalsutra',
    image:
      'https://images.unsplash.com/photo-1543294001-f7cd5d7fb516?q=80&w=1470&auto=format&fit=crop',
    count: 11,
  },
]

export default function App() {
  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900">
      <Header />

      {/* Hero */}
      <section className="relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
          <div className="flex flex-col items-center text-center gap-4">
            <span className="inline-flex items-center rounded-full border border-[#a37655]/30 bg-[#a37655]/5 px-3 py-1 text-xs font-medium text-[#a37655]">
              Curated Jewellery Collection
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight">
              Abhushan Bhandar
            </h1>
            <p className="max-w-2xl text-neutral-600">
              Discover timeless pieces with a modern touch. Explore our premium categories and find something that resonates with your style.
            </p>
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 pb-12">
        <div className="grid gap-6 sm:gap-7 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {CATEGORIES.map((c) => (
            <CategoryCard key={c.title} title={c.title} image={c.image} count={c.count} />
          ))}
        </div>
      </main>

      <Footer />

      {/* Accent gradient blob for premium vibe */}
      <div className="pointer-events-none fixed inset-x-0 top-[-10%] -z-10 flex justify-center opacity-30">
        <div className="h-56 w-[72rem] bg-gradient-to-tr from-[#a37655]/20 via-[#a37655]/10 to-transparent blur-3xl" />
      </div>
    </div>
  )
}
