import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center px-4 py-20 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        {/* Large circle - top right */}
        <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full border border-border/50 opacity-40" />
        <div className="absolute -top-24 -right-24 w-80 h-80 rounded-full border border-border/30 opacity-30" />
        
        {/* Small circle - bottom left */}
        <div className="absolute -bottom-16 -left-16 w-64 h-64 rounded-full border border-border/40 opacity-30" />
        <div className="absolute -bottom-8 -left-8 w-48 h-48 rounded-full border border-border/20 opacity-20" />
        
        {/* Subtle grid pattern */}
        <div className="absolute top-1/4 left-1/4 w-32 h-32 opacity-[0.03]">
          <div className="grid grid-cols-4 gap-2 h-full">
            {[...Array(16)].map((_, i) => (
              <div key={i} className="bg-foreground rounded-sm" />
            ))}
          </div>
        </div>
        
        {/* Accent dot */}
        <div className="absolute top-1/3 right-1/4 w-2 h-2 rounded-full bg-accent/30" />
        <div className="absolute bottom-1/3 left-1/3 w-1.5 h-1.5 rounded-full bg-accent/20" />
      </div>
      
      <div className="relative max-w-4xl mx-auto text-center">
        <p className="text-sm font-medium tracking-widest text-muted-foreground mb-6">
          Lean × Secure × AI-driven
        </p>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight text-foreground mb-6">
          <span className="block">AI時代の</span>
          <span className="block">「現場と経営」をつなぐ</span>
          <span className="block text-primary">外部CTO / 技術顧問</span>
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
          100億円規模Webサービスを支えてきた実務型エンジニアが、
          <br className="hidden md:block" />
          技術・組織・AI導入を横断して支援します。
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="text-base px-8 py-6" asChild>
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSdwBHQoRNJSwElD2Bs-SyovgGanMlAe5zWJx67rjIIL3zVVDw/viewform" target="_blank" rel="noopener noreferrer">
              お仕事のご相談
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </Button>
          <Button size="lg" variant="outline" className="text-base px-8 py-6 bg-transparent" asChild>
            <a href="#pricing">料金プランを見る</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
