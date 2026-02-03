export function Footer() {
  return (
    <footer className="py-12 px-4 border-t border-border">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <p className="text-xl font-semibold text-foreground mb-1">GANDHARA</p>
            <p className="text-sm text-muted-foreground">
              外部CTO / 技術顧問 / AI導入支援
            </p>
          </div>
          <nav className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
            <a href="#about" className="hover:text-foreground transition-colors">
              自己紹介
            </a>
            <a href="#strengths" className="hover:text-foreground transition-colors">
              強み
            </a>
            <a href="#services" className="hover:text-foreground transition-colors">
              サービス
            </a>
            <a href="#pricing" className="hover:text-foreground transition-colors">
              料金
            </a>
            <a href="#contact" className="hover:text-foreground transition-colors">
              お問い合わせ
            </a>
          </nav>
        </div>
        <div className="mt-8 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} GANDHARA. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
