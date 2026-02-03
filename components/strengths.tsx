import { Users, Globe, Shield, Bot } from "lucide-react"

const strengths = [
  {
    icon: Users,
    title: "エンジニア組織構築",
    items: [
      "エンジニア組織の0→1、1→10の立ち上げ経験",
      "採用、評価制度、育成、文化づくりまで一貫対応",
      "SNS広告を活用したエンジニア採用手法の実績",
    ],
  },
  {
    icon: Globe,
    title: "大規模Webサービスの実務経験",
    items: [
      "EC / C2C / サブスクリプションサービス",
      "少人数体制からスケールするアーキテクチャ設計",
      "技術負債解消とグロースの両立",
    ],
  },
  {
    icon: Shield,
    title: "セキュリティ統括",
    items: [
      "グループ全体のCISOとしての統括経験",
      "無事故・無違反のセキュリティ運用",
      "現実的で運用可能なガバナンス設計",
    ],
  },
  {
    icon: Bot,
    title: "AI導入支援",
    items: [
      "PoC止まりにしないAI導入",
      "開発・運用・バックオフィスで実際に使える設計",
      "AIで人の仕事を減らし、価値を増幅する思想",
    ],
  },
]

export function Strengths() {
  return (
    <section id="strengths" className="py-20 px-4 bg-secondary/50">
      <div className="max-w-5xl mx-auto">
        <p className="text-sm font-medium tracking-widest text-muted-foreground mb-4">
          Why Me
        </p>
        <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-12">
          強み・特徴
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {strengths.map((strength) => (
            <div
              key={strength.title}
              className="bg-card rounded-lg p-8 border border-border"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-lg bg-secondary">
                  <strength.icon className="h-6 w-6 text-foreground" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">
                  {strength.title}
                </h3>
              </div>
              <ul className="space-y-3">
                {strength.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-muted-foreground"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
