import { Button } from "@/components/ui/button"
import { ArrowRight, Star } from "lucide-react"

const plans = [
  {
    name: "スポット相談 / 壁打ち",
    price: "10,000円〜",
    unit: "/ 1時間",
    description: "1時間：10,000円 / 2時間：20,000円（税別）",
    features: [
      "技術・AI・組織・PM課題の壁打ち",
      "方針整理、優先順位付け",
      "ベンダー・エンジニアとのコミュニケーション整理",
    ],
    highlighted: false,
  },
  {
    name: "技術顧問 / AI顧問（ライト）",
    price: "100,000円",
    unit: "/ 月額",
    description: "月10時間（税別）",
    features: [
      "定例MTG（月1〜2回）",
      "Slack / Chatでの随時相談",
      "技術・AI方針レビュー",
    ],
    highlighted: false,
  },
  {
    name: "技術顧問 / AI顧問（スタンダード）",
    price: "200,000円〜",
    unit: "/ 月額",
    description: "月20〜30時間（税別）",
    features: [
      "週1定例MTG",
      "技術設計レビュー",
      "AI導入・PoC設計",
      "PM不在案件の補助",
      "ベンダーコントロール",
    ],
    highlighted: true,
  },
  {
    name: "プロジェクト伴走 / 外部CTO",
    price: "400,000円〜",
    unit: "/ 月額",
    description: "月40時間前後（税別）",
    features: [
      "技術責任者として参画",
      "開発ロードマップ設計",
      "組織・プロダクト横断支援",
      "セキュリティ・運用方針整備",
    ],
    highlighted: false,
  },
]

export function Pricing() {
  return (
    <section id="pricing" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <p className="text-sm font-medium tracking-widest text-muted-foreground mb-4">
          Pricing
        </p>
        <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-4">
          料金表
        </h2>
        <p className="text-muted-foreground mb-12 max-w-2xl">
          基本目安：時間単価 10,000円（税別）。内容・フェーズにより柔軟に調整いたします。
        </p>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className="rounded-lg p-6 border flex flex-col bg-card text-card-foreground border-border relative"
            >
              {plan.highlighted && (
                <div className="absolute -top-3 left-4 flex items-center gap-1 bg-accent text-accent-foreground text-xs font-medium px-3 py-1 rounded-full">
                  <Star className="h-3 w-3 fill-current" />
                  おすすめ
                </div>
              )}
              <h3 className="text-lg font-semibold mb-2">{plan.name}</h3>
              <div className="mb-2">
                <span className="text-3xl font-semibold">{plan.price}</span>
                <span className="text-sm text-muted-foreground">
                  {plan.unit}
                </span>
              </div>
              <p className="text-sm mb-6 text-muted-foreground">
                {plan.description}
              </p>
              <ul className="space-y-3 flex-1">
                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-2 text-sm text-muted-foreground"
                  >
                    <span className="w-1.5 h-1.5 rounded-full mt-1.5 shrink-0 bg-accent" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Button
                variant="outline"
                className="mt-6 w-full bg-transparent"
                asChild
              >
                <a href="https://docs.google.com/forms/d/e/1FAIpQLSdwBHQoRNJSwElD2Bs-SyovgGanMlAe5zWJx67rjIIL3zVVDw/viewform" target="_blank" rel="noopener noreferrer">
                  相談する
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
          ))}
        </div>

        <div className="mt-8 p-6 bg-secondary/50 rounded-lg border border-border">
          <h4 className="font-semibold text-foreground mb-2">料金補足</h4>
          <ul className="grid sm:grid-cols-2 gap-2 text-sm text-muted-foreground">
            <li className="flex items-center gap-2">
              <span className="w-1 h-1 rounded-full bg-muted-foreground" />
              上記は目安です
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1 h-1 rounded-full bg-muted-foreground" />
              スポット → 月額への切り替え可能
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1 h-1 rounded-full bg-muted-foreground" />
              契約形態は相談可
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1 h-1 rounded-full bg-muted-foreground" />
              実装丸投げ前提の案件は対象外
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}
