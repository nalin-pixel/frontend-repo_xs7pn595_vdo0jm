import { Gem, Heart, Plus } from 'lucide-react'

export default function Header() {
  return (
    <header className="w-full border-b border-neutral-200/60 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="p-2 rounded-full bg-[#a37655]/10 text-[#a37655]">
            <Gem className="h-5 w-5" />
          </div>
          <span className="text-xl sm:text-2xl font-semibold tracking-wide text-neutral-900">
            Abhushan <span className="text-[#a37655]">Bhandar</span>
          </span>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <button className="inline-flex items-center gap-2 rounded-full border border-[#a37655] text-[#a37655] px-4 py-2 text-sm font-medium hover:bg-[#a37655]/10 transition-colors">
            <Plus className="h-4 w-4" />
            Add
          </button>
          <button className="inline-flex items-center gap-2 rounded-full bg-[#a37655] text-white px-4 py-2 text-sm font-medium hover:bg-[#8e6449] transition-colors">
            <Heart className="h-4 w-4" />
            Wishlist
          </button>
        </div>
      </div>
    </header>
  )
}
