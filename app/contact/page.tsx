import { Mail, MapPin, Phone } from "lucide-react"

export default function ContactPage() {
  const teamMembers = [
    {
      name: "Nuveesh R. Somireddy",
      role: "Chief Executive Officer",
      email: "nuveesh31@gmail.com",
      phone: "912-228-1315",
    },
    {
      name: "Jayven Walker",
      role: "Chief Operations Officer",
      email: "jayven.walker04@gmail.com",
      phone: "(912) 901-0167",
    },
    {
      name: "Gage Riner",
      role: "Chief Financial Officer",
      email: "gage.riner6@gmail.com",
      phone: "(912) 667-1709",
    },
    {
      name: "Derek Wangai",
      role: "Chief Marketing Officer",
      email: "derek.wangai028@gmail.com",
      phone: "(912) 737-4323",
    },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Contact Us</h1>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Get in touch with our team
                </p>
              </div>
            </div>

            <div className="mx-auto max-w-3xl">
              <div className="mb-12 p-6 border rounded-lg bg-muted/50">
                <div className="flex items-start gap-4">
                  <MapPin className="h-6 w-6 text-primary shrink-0 mt-1" />
                  <div className="grid gap-1">
                    <h3 className="font-bold text-lg">Office Address</h3>
                    <p className="text-muted-foreground">
                      1300 Getwell
                      <br />
                      Memphis, TN 38111
                    </p>
                  </div>
                </div>
              </div>

              <h2 className="text-2xl font-bold mb-6">Team Contact Information</h2>
              <div className="grid gap-6 md:grid-cols-2">
                {teamMembers.map((member, index) => (
                  <div key={index} className="p-4 border rounded-lg">
                    <div className="mb-3">
                      <h3 className="font-bold text-lg">{member.name}</h3>
                      <p className="text-sm text-muted-foreground">{member.role}</p>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <Mail className="h-4 w-4 text-primary" />
                        <a href={`mailto:${member.email}`} className="text-sm hover:underline">
                          {member.email}
                        </a>
                      </div>
                      <div className="flex items-center gap-2">
                        <Phone className="h-4 w-4 text-primary" />
                        <a href={`tel:${member.phone.replace(/[^0-9]/g, "")}`} className="text-sm hover:underline">
                          {member.phone}
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

