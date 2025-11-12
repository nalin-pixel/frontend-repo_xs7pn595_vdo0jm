export default function CategoryCard({ title, image, count }) {
  return (
    <div className="group relative overflow-hidden rounded-xl bg-white border border-neutral-200/70 shadow-sm hover:shadow-lg transition-all">
      <div className="aspect-[4/3] w-full overflow-hidden">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transform transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-60 group-hover:opacity-70 transition-opacity" />
      <div className="absolute bottom-0 left-0 right-0 p-4 flex items-end justify-between">
        <div>
          <h3 className="text-white text-lg font-semibold drop-shadow-sm">{title}</h3>
          {typeof count === 'number' && (
            <p className="text-white/80 text-sm">{count} items</p>
          )}
        </div>
        <div className="translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all">
          <span className="inline-block rounded-full bg-white/90 text-[#a37655] text-xs font-medium px-3 py-1">Explore</span>
        </div>
      </div>
      <div className="absolute inset-0 ring-1 ring-inset ring-transparent group-hover:ring-[#a37655]/40 transition-colors" />
    </div>
  )
}
