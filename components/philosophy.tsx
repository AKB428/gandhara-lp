const principles = [
  {
    text: "実装と現場を理解した上での意思決定支援",
  },
  {
    text: "正論より「現実的に回る設計」",
  },
  {
    text: "AIで人を置き換えるのではなく、人の価値を増幅",
  },
  {
    text: "長期的に自走できる組織づくりを重視",
  },
]

export function Philosophy() {
  return (
    <section id="philosophy" className="py-20 px-4 bg-primary text-primary-foreground">
      <div className="max-w-4xl mx-auto">
        <p className="text-sm font-medium tracking-widest opacity-70 mb-4">
          How
        </p>
        <h2 className="text-3xl md:text-4xl font-semibold mb-12">
          スタンス・思想
        </h2>

        <div className="grid sm:grid-cols-2 gap-6">
          {principles.map((principle, index) => (
            <div
              key={principle.text}
              className="flex items-start gap-4"
            >
              <span className="text-4xl font-semibold opacity-30">
                {String(index + 1).padStart(2, '0')}
              </span>
              <p className="text-lg leading-relaxed pt-2">
                {principle.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
