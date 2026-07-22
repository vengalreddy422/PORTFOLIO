import { useMemo } from 'react'

export default function GitActivity() {
  // Generate simulated contribution data (365 days / 52 weeks)
  const weeks = useMemo(() => {
    const data = []
    for (let w = 0; w < 52; w++) {
      const days = []
      for (let d = 0; d < 7; d++) {
        // Randomize "contribution" intensity: 0 to 4
        // Higher chance of lower numbers for realistic look
        const random = Math.random()
        let level = 0
        if (random > 0.5) level = 1
        if (random > 0.75) level = 2
        if (random > 0.9) level = 3
        if (random > 0.95) level = 4
        
        days.push({ id: `${w}-${d}`, level })
      }
      data.push(days)
    }
    return data
  }, [])

  const getColorClass = (level) => {
    switch (level) {
      case 1: return 'bg-py-yellow/30'
      case 2: return 'bg-py-yellow/60'
      case 3: return 'bg-py-yellow/80 shadow-[0_0_8px_rgba(255,212,59,0.5)]'
      case 4: return 'bg-py-yellow shadow-[0_0_12px_rgba(255,212,59,0.8)]'
      default: return 'bg-ink-800'
    }
  }

  return (
    <div className="reveal rounded-2xl card-surface p-6 shadow-card overflow-hidden mt-12 w-full">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
        <div>
          <h3 className="font-display font-semibold text-lg text-mist-100 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-py-yellow animate-pulse" />
            Code Activity
          </h3>
          <p className="text-sm text-mist-500 mt-1">Simulated commit history & continuous integration</p>
        </div>
        <div className="flex items-center gap-2 text-xs text-mist-500 font-mono">
          <span>Less</span>
          <div className="flex gap-1">
            <div className="w-3 h-3 rounded-sm bg-ink-800" />
            <div className="w-3 h-3 rounded-sm bg-py-yellow/30" />
            <div className="w-3 h-3 rounded-sm bg-py-yellow/60" />
            <div className="w-3 h-3 rounded-sm bg-py-yellow/80" />
            <div className="w-3 h-3 rounded-sm bg-py-yellow" />
          </div>
          <span>More</span>
        </div>
      </div>

      <div className="overflow-x-auto pb-4 custom-scrollbar">
        <div className="flex gap-1.5 min-w-max">
          {weeks.map((week, wIndex) => (
            <div key={wIndex} className="flex flex-col gap-1.5">
              {week.map((day, dIndex) => (
                <div
                  key={day.id}
                  className={`w-3.5 h-3.5 rounded-sm transition-all duration-500 hover:scale-150 hover:z-10 cursor-pointer ${getColorClass(day.level)}`}
                  style={{
                    animation: `fadeUp 0.5s ease-out forwards`,
                    animationDelay: `${(wIndex * 7 + dIndex) * 2}ms`,
                    opacity: 0
                  }}
                  title={`Activity level: ${day.level}`}
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
