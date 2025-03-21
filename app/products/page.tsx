import Image from "next/image"
import { Check } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function ProductsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Our Products</h1>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Innovative earbud tips designed for maximum comfort with minimal size options
                </p>
              </div>
            </div>
            <div className="mx-auto max-w-md py-12">
              <Card className="flex flex-col overflow-hidden">
                <div className="relative aspect-square bg-white">
                  <Image
                    alt="Sili-Foam Earbud Tips"
                    className="object-cover"
                    fill
                    sizes="(max-width: 768px) 100vw, 400px"
                    src="/images/product.png"
                  />
                  <Badge className="absolute top-4 right-4 bg-red-500" variant="secondary">
                    Currently Unavailable
                  </Badge>
                </div>
                <CardContent className="flex flex-col space-y-2 p-6">
                  <h3 className="text-xl font-bold">Sili-Foam Earbud Tips</h3>
                  <p className="text-sm text-muted-foreground">
                    Our flagship product designed to fit most ear canals comfortably without the need for multiple size
                    options.
                  </p>
                  <div className="space-y-2 mt-auto">
                    <div className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-primary" />
                      <span className="text-sm">Elastic Memory Foam</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-primary" />
                      <span className="text-sm">Comfortable for extended use</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-primary" />
                      <span className="text-sm">Medical Grade Silicone</span>
                    </div>
                  </div>
                  <div className="pt-4">
                    <div className="font-bold text-lg">Price: TBD</div>
                    <Button className="w-full mt-2" disabled>
                      Coming Soon
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

