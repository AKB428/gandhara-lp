import { Check, MessageCircle } from "lucide-react"

const services = [
  "外部CTO / 技術顧問",
  "PM不在プロジェクトの補助・整理",
  "エンジニア組織構築・改善",
  "大規模Webサービス設計・グロース支援",
  "セキュリティ体制構築・統括",
  "AI導入・AI活用ワークフロー設計",
]

const consultations = [
  "CTOが不在で技術判断ができない",
  "PMがいなく、エンジニアに任せきり",
  "フリーランスエンジニアをコントロールできていない",
  "AI導入をしたいが何から始めるべきかわからない",
  "ベンダーとの会話を整理・翻訳してほしい",
  "既存システムがブラックボックス化している",
]

export function Services() {
  return (
    <section id="services" className="py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <p className="text-sm font-medium tracking-widest text-muted-foreground mb-4">
          What
        </p>
        <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-12">
          提供できること
        </h2>

        <div className="grid lg:grid-cols-2 gap-8">
          <div className="bg-card rounded-lg p-8 border border-border">
            <h3 className="text-xl font-semibold text-foreground mb-6">
              サービス一覧
            </h3>
            <ul className="space-y-4">
              {services.map((service) => (
                <li
                  key={service}
                  className="flex items-center gap-3 text-foreground"
                >
                  <Check className="h-5 w-5 text-accent shrink-0" />
                  <span>{service}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-secondary/50 rounded-lg p-8 border border-border">
            <div className="flex items-center gap-3 mb-6">
              <MessageCircle className="h-6 w-6 text-muted-foreground" />
              <h3 className="text-xl font-semibold text-foreground">
                よくある相談
              </h3>
            </div>
            <ul className="space-y-4">
              {consultations.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-muted-foreground"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground mt-2 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
