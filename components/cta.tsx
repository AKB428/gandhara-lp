import { Button } from "@/components/ui/button"
import { ArrowRight, MessageSquare } from "lucide-react"

export function CTA() {
  return (
    <section id="contact" className="py-20 px-4 bg-secondary/50">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-6">
          まずはお気軽にご相談ください
        </h2>
        <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
          料金や依頼内容が固まっていなくても問題ありません。
          <br />
          まずは壁打ち・相談からお気軽にご連絡ください。
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="text-base px-8 py-6" asChild>
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSdwBHQoRNJSwElD2Bs-SyovgGanMlAe5zWJx67rjIIL3zVVDw/viewform" target="_blank" rel="noopener noreferrer">
              お仕事のご相談はこちら
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </Button>
          <Button size="lg" variant="outline" className="text-base px-8 py-6 bg-transparent" asChild>
            <a href="https://www.lancers.jp/menu/detail/1311587" target="_blank" rel="noopener noreferrer">
              <MessageSquare className="mr-2 h-5 w-5" />
              ランサーズパッケージでの相談はこちら
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
