import ContactForm from "./components/ContactForm";
import WhatsAppButton from "./components/WhatsAppButton";

export default function Home() {
  return (
    <div className="flex flex-col flex-1">
      {/* ===== Header / Nav ===== */}
      <header className="sticky top-0 z-50 border-b border-border bg-white/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="/" className="text-xl font-bold tracking-tight text-primary">
            Arthur&apos;s<span className="text-accent">Web</span>
          </a>
          <nav className="hidden gap-8 text-sm font-medium text-muted sm:flex">
            <a href="#services" className="transition-colors hover:text-primary">Services</a>
            <a href="#pricing" className="transition-colors hover:text-primary">Pricing</a>
            <a href="#about" className="transition-colors hover:text-primary">About</a>
            <a href="#contact" className="transition-colors hover:text-primary">Contact</a>
          </nav>
          <a
            href="#contact"
            className="rounded-full bg-primary px-5 py-2 text-sm font-medium text-white transition-colors hover:bg-primary-light"
          >
            Get a Quote
          </a>
        </div>
      </header>

      {/* ===== Hero Section ===== */}
      <section className="relative flex flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-surface to-blue-50 px-6 py-24 text-center sm:py-32">
        <div className="relative z-10 max-w-3xl">
          <span className="inline-block rounded-full bg-accent/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-accent">
            IT Solutions &amp; Web Development
          </span>
          <h1 className="mt-6 text-4xl font-bold leading-tight tracking-tight text-primary sm:text-5xl lg:text-6xl">
            We Build Websites That
            <span className="text-accent"> Work for You</span>
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-muted">
            From concept to launch, Arthur&apos;s Web delivers modern, fast, and
            reliable websites tailored to your business needs. Let us bring your
            vision online.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="#contact"
              className="rounded-full bg-primary px-8 py-3 text-sm font-semibold text-white shadow-lg transition-all hover:bg-primary-light hover:shadow-xl"
            >
              Start Your Project
            </a>
            <a
              href="#services"
              className="rounded-full border border-border bg-white px-8 py-3 text-sm font-semibold text-primary transition-all hover:bg-surface"
            >
              See Our Services
            </a>
          </div>
        </div>
        {/* Decorative blobs */}
        <div className="pointer-events-none absolute -top-40 -right-40 h-80 w-80 rounded-full bg-accent/5 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-primary/5 blur-3xl" />
      </section>

      {/* ===== Services Section ===== */}
      <section id="services" className="bg-white px-6 py-20 sm:py-28">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">
              What We Offer
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-lg text-muted">
              End-to-end IT solutions tailored to help your business grow online.
            </p>
          </div>
          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {/* Service 1 */}
            <div className="group rounded-2xl border border-border bg-surface p-8 transition-all hover:border-primary/20 hover:shadow-lg">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-white">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
                </svg>
              </div>
              <h3 className="mt-6 text-xl font-semibold text-primary">Website Development</h3>
              <p className="mt-3 leading-relaxed text-muted">
                Custom websites built with modern technologies — responsive, fast,
                and SEO-optimized to give your business the online presence it deserves.
              </p>
            </div>

            {/* Service 2 */}
            <div className="group rounded-2xl border border-border bg-surface p-8 transition-all hover:border-primary/20 hover:shadow-lg">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-white">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                </svg>
              </div>
              <h3 className="mt-6 text-xl font-semibold text-primary">IT Consulting</h3>
              <p className="mt-3 leading-relaxed text-muted">
                Expert advice on technology strategy, infrastructure, and digital
                transformation to help you make informed decisions.
              </p>
            </div>

            {/* Service 3 */}
            <div className="group rounded-2xl border border-border bg-surface p-8 transition-all hover:border-primary/20 hover:shadow-lg">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-white">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 13.5V3.75m0 9.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 3.75V16.5m12-3V3.75m0 9.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 3.75V16.5m-6-9V3.75m0 3.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 9.75V10.5" />
                </svg>
              </div>
              <h3 className="mt-6 text-xl font-semibold text-primary">Custom Software</h3>
              <p className="mt-3 leading-relaxed text-muted">
                Tailored software solutions designed to streamline your operations,
                improve efficiency, and scale with your business.
              </p>
            </div>

            {/* Service 4 */}
            <div className="group rounded-2xl border border-border bg-surface p-8 transition-all hover:border-primary/20 hover:shadow-lg">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-white">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182" />
                </svg>
              </div>
              <h3 className="mt-6 text-xl font-semibold text-primary">Website Maintenance</h3>
              <p className="mt-3 leading-relaxed text-muted">
                Ongoing support, updates, and optimization to keep your website
                secure, fast, and up-to-date.
              </p>
            </div>

            {/* Service 5 */}
            <div className="group rounded-2xl border border-border bg-surface p-8 transition-all hover:border-primary/20 hover:shadow-lg">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-white">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" />
                </svg>
              </div>
              <h3 className="mt-6 text-xl font-semibold text-primary">UI/UX Design</h3>
              <p className="mt-3 leading-relaxed text-muted">
                User-centered design that combines aesthetics with functionality
                to create seamless digital experiences.
              </p>
            </div>

            {/* Service 6 */}
            <div className="group rounded-2xl border border-border bg-surface p-8 transition-all hover:border-primary/20 hover:shadow-lg">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-white">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
                </svg>
              </div>
              <h3 className="mt-6 text-xl font-semibold text-primary">SEO &amp; Analytics</h3>
              <p className="mt-3 leading-relaxed text-muted">
                Improve your online visibility and track performance with
                data-driven SEO strategies and analytics integration.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== About Section ===== */}
      <section id="about" className="bg-surface px-6 py-20 sm:py-28">
        <div className="mx-auto max-w-6xl">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">
                Who We Are
              </h2>
              <p className="mt-6 leading-relaxed text-muted">
                Arthur&apos;s Web is a team of passionate developers, designers, and
                IT professionals dedicated to helping businesses establish a
                powerful online presence. We believe that every business deserves a
                website that is not only beautiful but also functional, fast, and
                built to grow.
              </p>
              <p className="mt-4 leading-relaxed text-muted">
                Whether you need a simple landing page or a full-featured web
                application, we work closely with you to understand your goals and
                deliver a solution that exceeds expectations.
              </p>
              <div className="mt-8 flex flex-wrap gap-8">
                <div>
                  <span className="text-3xl font-bold text-primary">50+</span>
                  <p className="text-sm text-muted">Projects Completed</p>
                </div>
                <div>
                  <span className="text-3xl font-bold text-primary">99%</span>
                  <p className="text-sm text-muted">Client Satisfaction</p>
                </div>
                <div>
                  <span className="text-3xl font-bold text-primary">24/7</span>
                  <p className="text-sm text-muted">Support</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] w-full rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 p-1">
                <div className="flex h-full w-full items-center justify-center rounded-xl bg-white">
                  <div className="text-center">
                    <span className="text-5xl font-bold text-primary">
                      A<span className="text-accent">W</span>
                    </span>
                    <p className="mt-2 text-sm text-muted">Arthur&apos;s Web</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Why Choose Us ===== */}
      <section id="why-us" className="bg-white px-6 py-20 sm:py-28">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">
              Why Businesses Choose Arthur&apos;s Web
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted">
              We combine strategy, design, and technical execution to create digital experiences that are built to perform.
            </p>
          </div>

          <div className="mt-14 grid gap-8 md:grid-cols-3">
            <div className="rounded-2xl border border-border bg-surface p-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-white">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75A2.25 2.25 0 016 4.5h12a2.25 2.25 0 012.25 2.25v10.5A2.25 2.25 0 0118 19.5H6a2.25 2.25 0 01-2.25-2.25V6.75zm0 0l9 6.75 9-6.75" />
                </svg>
              </div>
              <h3 className="mt-6 text-xl font-semibold text-primary">Clear Communication</h3>
              <p className="mt-3 leading-relaxed text-muted">
                You stay informed from the first brief to final launch, with practical guidance at every stage.
              </p>
            </div>

            <div className="rounded-2xl border border-border bg-surface p-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-white">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v18m9-9h-18M5.25 5.25l13.5 13.5M18.75 5.25L5.25 18.75" />
                </svg>
              </div>
              <h3 className="mt-6 text-xl font-semibold text-primary">Custom, Not Cookie-Cutter</h3>
              <p className="mt-3 leading-relaxed text-muted">
                Every project is tailored around your business goals, audience, and brand identity.
              </p>
            </div>

            <div className="rounded-2xl border border-border bg-surface p-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-white">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="mt-6 text-xl font-semibold text-primary">Support After Launch</h3>
              <p className="mt-3 leading-relaxed text-muted">
                We help you keep your website secure, accurate, and optimized long after it goes live.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Testimonials ===== */}
      <section className="bg-surface px-6 py-20 sm:py-28">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">
              What Clients Say
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted">
              Real feedback from businesses that wanted a website that looked strong and worked hard.
            </p>
          </div>

          <div className="mt-14 grid gap-8 lg:grid-cols-3">
            <div className="rounded-2xl border border-border bg-white p-8 shadow-sm">
              <div className="flex gap-1 text-accent">
                {[...Array(5)].map((_, index) => (
                  <svg key={index} className="h-5 w-5 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.176 0l-2.8 2.034c-.785.57-1.84-.197-1.54-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.027 8.72c-.783-.57-.38-1.81.588-1.81h3.462a1 1 0 00.95-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="mt-6 text-base leading-relaxed text-muted">
                “Arthur&apos;s Web transformed our online presence. We finally have a website that feels premium and drives real inquiries.”
              </p>
              <div className="mt-6 border-t border-border pt-4">
                <p className="font-semibold text-primary">Ada Mensah</p>
                <p className="text-sm text-muted">Founder, BrightPath Studio</p>
              </div>
            </div>

            <div className="rounded-2xl border border-border bg-white p-8 shadow-sm">
              <div className="flex gap-1 text-accent">
                {[...Array(5)].map((_, index) => (
                  <svg key={index} className="h-5 w-5 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.176 0l-2.8 2.034c-.785.57-1.84-.197-1.54-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.027 8.72c-.783-.57-.38-1.81.588-1.81h3.462a1 1 0 00.95-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="mt-6 text-base leading-relaxed text-muted">
                “The process was smooth, transparent, and professional. We launched faster than expected and the website continues to support our growth.”
              </p>
              <div className="mt-6 border-t border-border pt-4">
                <p className="font-semibold text-primary">Kwame Boateng</p>
                <p className="text-sm text-muted">Director, K-Prime Logistics</p>
              </div>
            </div>

            <div className="rounded-2xl border border-border bg-white p-8 shadow-sm">
              <div className="flex gap-1 text-accent">
                {[...Array(5)].map((_, index) => (
                  <svg key={index} className="h-5 w-5 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.176 0l-2.8 2.034c-.785.57-1.84-.197-1.54-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.027 8.72c-.783-.57-.38-1.81.588-1.81h3.462a1 1 0 00.95-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="mt-6 text-base leading-relaxed text-muted">
                “A thoughtful team that listened to our needs and delivered a polished digital experience. The support after launch has been excellent.”
              </p>
              <div className="mt-6 border-t border-border pt-4">
                <p className="font-semibold text-primary">Naa Ofori</p>
                <p className="text-sm text-muted">Owner, Naa &amp; Co.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Process ===== */}
      <section className="bg-white px-6 py-20 sm:py-28">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">
              A Simple Process That Gets Results
            </h2>
          </div>

          <div className="mt-14 grid gap-8 md:grid-cols-4">
            {[
              { step: "01", title: "Discover", text: "We learn your goals, audience, and business needs." },
              { step: "02", title: "Design", text: "We shape the brand, structure, and user experience." },
              { step: "03", title: "Build", text: "We develop a fast, responsive, and conversion-focused site." },
              { step: "04", title: "Launch", text: "We publish, test, and support your digital presence going forward." },
            ].map((item) => (
              <div key={item.step} className="rounded-2xl border border-border bg-surface p-6">
                <span className="text-sm font-bold uppercase tracking-[0.2em] text-accent">{item.step}</span>
                <h3 className="mt-4 text-xl font-semibold text-primary">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Pricing Section ===== */}
      <section id="pricing" className="bg-white px-6 py-20 sm:py-28">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">
              Simple, Transparent Pricing
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-lg text-muted">
              Choose the package that fits your needs. No hidden fees — just
              quality websites at fair prices.
            </p>
          </div>
          <div className="mt-14 grid gap-8 lg:grid-cols-3">
            {/* Starter */}
            <div className="flex flex-col rounded-2xl border border-border bg-surface p-8 transition-all hover:border-primary/20 hover:shadow-lg">
              <h3 className="text-lg font-semibold text-primary">Starter</h3>
              <p className="mt-2 text-sm text-muted">
                Perfect for personal brands &amp; small businesses
              </p>
              <div className="mt-6 flex items-baseline gap-1">
                <span className="text-4xl font-bold text-primary">$299</span>
                <span className="text-sm text-muted">/project</span>
              </div>
              <ul className="mt-6 flex-1 space-y-3 text-sm text-muted">
                <li className="flex items-center gap-2">
                  <svg className="h-5 w-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  1-page website
                </li>
                <li className="flex items-center gap-2">
                  <svg className="h-5 w-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  Mobile responsive design
                </li>
                <li className="flex items-center gap-2">
                  <svg className="h-5 w-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  Basic SEO setup
                </li>
                <li className="flex items-center gap-2">
                  <svg className="h-5 w-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  Contact form
                </li>
                <li className="flex items-center gap-2">
                  <svg className="h-5 w-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  1 month free support
                </li>
              </ul>
              <a
                href="#contact"
                className="mt-8 rounded-full border border-primary px-6 py-3 text-center text-sm font-semibold text-primary transition-all hover:bg-primary hover:text-white"
              >
                Get Started
              </a>
            </div>

            {/* Business (Popular) */}
            <div className="relative flex flex-col rounded-2xl border-2 border-primary bg-white p-8 shadow-xl transition-all hover:shadow-2xl">
              <span className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-accent px-4 py-1 text-xs font-bold uppercase tracking-wide text-white">
                Most Popular
              </span>
              <h3 className="text-lg font-semibold text-primary">Business</h3>
              <p className="mt-2 text-sm text-muted">
                For growing businesses that need more
              </p>
              <div className="mt-6 flex items-baseline gap-1">
                <span className="text-4xl font-bold text-primary">$799</span>
                <span className="text-sm text-muted">/project</span>
              </div>
              <ul className="mt-6 flex-1 space-y-3 text-sm text-muted">
                <li className="flex items-center gap-2">
                  <svg className="h-5 w-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  Up to 5 pages
                </li>
                <li className="flex items-center gap-2">
                  <svg className="h-5 w-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  Custom design &amp; branding
                </li>
                <li className="flex items-center gap-2">
                  <svg className="h-5 w-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  CMS (manage content yourself)
                </li>
                <li className="flex items-center gap-2">
                  <svg className="h-5 w-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  Advanced SEO
                </li>
                <li className="flex items-center gap-2">
                  <svg className="h-5 w-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  Google Analytics setup
                </li>
                <li className="flex items-center gap-2">
                  <svg className="h-5 w-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  3 months free support
                </li>
              </ul>
              <a
                href="#contact"
                className="mt-8 rounded-full bg-primary px-6 py-3 text-center text-sm font-semibold text-white transition-all hover:bg-primary-light"
              >
                Get Started
              </a>
            </div>

            {/* Enterprise */}
            <div className="flex flex-col rounded-2xl border border-border bg-surface p-8 transition-all hover:border-primary/20 hover:shadow-lg">
              <h3 className="text-lg font-semibold text-primary">Enterprise</h3>
              <p className="mt-2 text-sm text-muted">
                Custom solutions for large-scale needs
              </p>
              <div className="mt-6 flex items-baseline gap-1">
                <span className="text-4xl font-bold text-primary">Custom</span>
              </div>
              <ul className="mt-6 flex-1 space-y-3 text-sm text-muted">
                <li className="flex items-center gap-2">
                  <svg className="h-5 w-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  Unlimited pages
                </li>
                <li className="flex items-center gap-2">
                  <svg className="h-5 w-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  E-commerce / web app
                </li>
                <li className="flex items-center gap-2">
                  <svg className="h-5 w-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  Custom integrations
                </li>
                <li className="flex items-center gap-2">
                  <svg className="h-5 w-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  Dedicated project manager
                </li>
                <li className="flex items-center gap-2">
                  <svg className="h-5 w-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  Ongoing maintenance
                </li>
                <li className="flex items-center gap-2">
                  <svg className="h-5 w-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  Priority support
                </li>
              </ul>
              <a
                href="#contact"
                className="mt-8 rounded-full border border-primary px-6 py-3 text-center text-sm font-semibold text-primary transition-all hover:bg-primary hover:text-white"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Contact Section ===== */}
      <section id="contact" className="bg-white px-6 py-20 sm:py-28">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">
              Let&apos;s Work Together
            </h2>
            <p className="mt-4 text-lg text-muted">
              Ready to take your online presence to the next level? Get in touch
              and let&apos;s discuss your project.
            </p>
          </div>
          <div className="mx-auto mt-12 max-w-xl">
            <div className="mb-8 rounded-2xl border border-primary/10 bg-surface p-5 text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
                Free Consultation
              </p>
              <p className="mt-2 text-base text-muted">
                Tell us a little about your project and we&apos;ll help you plan the next step.
              </p>
            </div>
            <ContactForm />
            <div className="mt-10 flex flex-col items-center gap-3 text-sm text-muted sm:flex-row sm:justify-center">
              <span className="flex items-center gap-2">
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
                hello@arthursweb.com
              </span>
              <span className="hidden sm:block">·</span>
              <span className="flex items-center gap-2">
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
                Accra, Ghana
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Footer ===== */}
      <footer className="border-t border-border bg-primary px-6 py-12">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 sm:flex-row">
          <p className="text-sm text-white/70">
            &copy; {new Date().getFullYear()} Arthur&apos;s Web. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-white/70">
            <a href="#services" className="transition-colors hover:text-white">
              Services
            </a>
            <a href="#pricing" className="transition-colors hover:text-white">
              Pricing
            </a>
            <a href="#about" className="transition-colors hover:text-white">
              About
            </a>
            <a href="#contact" className="transition-colors hover:text-white">
              Contact
            </a>
          </div>
        </div>
      </footer>

      {/* ===== WhatsApp Floating Button ===== */}
      <WhatsAppButton />
    </div>
  );
}
