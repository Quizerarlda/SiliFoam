import Image from "next/image"

export default function TeamPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Meet Our Team</h1>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  The innovative high school students behind Resonators of Sound
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 py-12 md:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  name: "Nuveesh R. Somireddy",
                  role: "Chief Executive Officer",
                  img: "/images/nuveesh.png",
                  objectPosition: "center top", // Adjusted for better fit
                },
                {
                  name: "Jayven Walker",
                  role: "Chief Operations Officer",
                  img: "/images/jayven.png",
                  objectPosition: "center 10%", // Adjusted to show more of the head
                },
                {
                  name: "Gage Riner",
                  role: "Chief Financial Officer",
                  img: "/images/gage.png",
                  objectPosition: "center center",
                },
                {
                  name: "Derek Wangai",
                  role: "Chief Marketing Officer",
                  img: "/images/derek.png",
                  objectPosition: "center center",
                },
              ].map((member, index) => (
                <div key={index} className="flex flex-col items-center space-y-4 text-center">
                  <div className="relative h-40 w-40 overflow-hidden rounded-full bg-muted">
                    <Image
                      alt={member.name}
                      className="object-cover"
                      style={{ objectPosition: member.objectPosition }}
                      fill
                      src={member.img || "/placeholder.svg"}
                    />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold">{member.name}</h3>
                    <p className="text-sm text-muted-foreground">{member.role}</p>
                  </div>
                  <div className="space-y-2 text-left">
                    <p className="text-sm text-muted-foreground">
                      {index === 0 &&
                        "Reviewing the general business goal and pathing, ensuring no effort is wasted, Nuveesh leads our product design efforts, creating innovative earbud tips that address common comfort issues."}
                      {index === 1 &&
                        "Jayven brings technical expertise to the team, developing the manufacturing processes and ensuring our designs can be produced at scale without compromising quality."}
                      {index === 2 &&
                        "Gage handles business relationships and growth strategy, working to expand our reach and form partnerships with audio equipment manufacturers."}
                      {index === 3 &&
                        "With a keen eye for trends and consumer needs, Derek oversees our marketing strategy and ensures our message reaches those who need our solution most."}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

