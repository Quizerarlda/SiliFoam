import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                    Resonators of Sound
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    A company created by 4 highschool students in 2024, aims to decrease the discomfort of using
                    earbuds. The issue in particular is the size of the earbud tips.
                  </p>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Discomfort with earbud tip sizes and the lack of knowledge or guidance of which sizes to pick harms
                    the users' ears when picking the wrong size.
                  </p>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    This business aims to innovate the design of earbud tips by combining the benefits of multiple
                    existing designs. Instead of conforming to using as many sizes as possible, confusing potential
                    buyers, the Resonators of Sound seeks to cut down on the number of sizes to find a general fit for
                    all customers.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button asChild size="lg">
                    <Link href="/products">
                      Explore Our Products
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button asChild size="lg" variant="outline">
                    <Link href="/team">Meet Our Team</Link>
                  </Button>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="relative w-full max-w-[600px] rounded-lg overflow-hidden shadow-lg">
                  <Image
                    alt="Resonators of Sound Team"
                    className="object-cover"
                    width={600}
                    height={400}
                    src="/images/team.jpeg"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

