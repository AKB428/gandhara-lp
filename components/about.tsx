export function About() {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <p className="text-sm font-medium tracking-widest text-muted-foreground mb-4">
          Who
        </p>
        <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-12">
          自己紹介
        </h2>

        <div className="bg-card rounded-lg p-8 md:p-12 border border-border">
          <div className="mb-8">
            <h3 className="text-2xl md:text-3xl font-semibold text-foreground mb-2">
              AKB428
            </h3>
            <p className="text-muted-foreground">
              フリーランス / 個人事業主（GANDHARA）
              <br />
              元 とらのあなラボ CEO / CTO / CISO
            </p>
          </div>

          <div className="space-y-6 text-foreground leading-relaxed">
            <p>
              エンジニアとしてキャリアを開始し、虎の穴ラボ株式会社にて
              エンジニア組織立ち上げ、CTO、CEO、CISOを歴任。
            </p>
            <p>
              年間売上100億円規模のWebサービス（Fantia等）を、
              技術・事業・組織の両面から支えてきました。
            </p>
            <p>
              近年は、グループ全体のセキュリティ統括やAI導入推進を担当。
              現在は退任し、個人事業として外部CTO・技術顧問・AI導入支援を行っています。
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
