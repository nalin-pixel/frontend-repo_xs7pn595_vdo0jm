export default function Footer() {
  return (
    <footer className="mt-16 border-t border-neutral-200/60 bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 text-center text-sm text-neutral-600">
        © {new Date().getFullYear()} Abhushan Bhandar. All rights reserved.
      </div>
    </footer>
  )
}
