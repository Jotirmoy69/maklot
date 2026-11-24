"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";

/* =========================
   DATA
========================= */

const data = [
  {
    id: "01",
    title: "End-To-End Execution.",
    tags: ["Strategy", "Design", "Development", "Launch"],
    content:
      "From the first idea to a live, breathing product — we handle everything. Strategy, design, development, and launch, executed as one seamless process with zero handoff friction.",
  },
  {
    id: "02",
    title: "Web Development.",
    content:
      "We turn designs into real, functional digital products – fast, accessible, and built to perform. Clean code, modern stack, and obsessive attention to the details that matter.",
    tags: ["Frontend", "Backend", "Performance", "Deployment", "Basic SEO"],
  },
];

const capabilities = [
  { title: "Product strategy", text: "Clear direction from the first idea to a focused launch." },
  { title: "Interface design", text: "Thoughtful, responsive experiences shaped around real users." },
  { title: "Web development", text: "Fast, accessible websites and applications built to perform." },
  { title: "E-commerce", text: "Online stores designed to make browsing and buying straightforward." },
  { title: "Launch & support", text: "Deployment, technical handoff, and help beyond the first release." },
];

/* =========================
   MAIN COMPONENT
========================= */

const Forth = () => {
  const [active, setActive] = useState<string | null>("02");

  return (
    <section
      id="what-we-do"
      className="flex min-h-screen w-full flex-col items-center justify-center gap-10 bg-[#EFEFED] px-4 py-20 sm:gap-16 sm:px-6 sm:py-24 xl:py-30"
    >
      <h2 className="sr-only">Services</h2>
      {/* ================= Accordion ================= */}
      <div className="w-full max-w-7xl rounded-2xl border border-black/5 bg-[#F8F8F6] p-5 shadow-sm sm:rounded-3xl sm:p-8 md:p-10">
        {data.map((item, index) => {
          const isOpen = active === item.id;

          return (
            <div key={item.id}>
              <div
                onClick={() => setActive(isOpen ? null : item.id)}
                className="flex cursor-pointer items-start justify-between gap-3 py-6 sm:gap-4"
              >
                <div className="flex min-w-0 gap-4 sm:gap-6">
                  <span className="mt-1 shrink-0 text-sm text-black/40">
                    {item.id}
                  </span>

                  <div className="min-w-0">
                    <h2 className="text-xl font-semibold break-words text-black sm:text-2xl md:text-3xl">
                      {item.title}
                    </h2>

                    <div
                      className={cn(
                        "transition-all duration-500 overflow-hidden",
                        isOpen ? "mt-4 max-h-96 sm:max-h-80 md:max-h-60" : "max-h-0"
                      )}
                    >
                      <p className="text-black/60 max-w-xl text-sm md:text-base leading-relaxed">
                        {item.content}
                      </p>

                      <div className="flex flex-wrap gap-2 mt-4">
                        {item.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-xs px-3 py-1 rounded-full bg-black/5 text-black/70"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Glass Button */}
                <div
                  style={{
                    background: "rgba(255, 255, 255, 0.4)",
                    backdropFilter: "blur(16px)",
                    WebkitBackdropFilter: "blur(16px)",
                    border: "1px solid rgba(255, 255, 255, 0.6)",
                    borderBottom: "1px solid rgba(255, 255, 255, 0.2)",
                    boxShadow: `
                      0 10px 40px -10px rgba(0, 0, 0, 0.08),
                      0 4px 15px 0px rgba(0, 0, 0, 0.04),
                      inset 0 2px 4px 0px rgba(255, 255, 255, 0.8),
                      inset 0 -2px 4px 0px rgba(0, 0, 0, 0.05)
                    `,
                  }}
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full font-semibold text-[#666]"
                >
                  {isOpen ? "−" : "+"}
                </div>
              </div>

              {index !== data.length - 1 && (
                <div className="h-px bg-black/10" />
              )}
            </div>
          );
        })}
      </div>

      <div id="projects" className="w-full max-w-7xl scroll-mt-24">
        <div className="mb-6 flex flex-wrap items-end justify-between gap-3">
          <div>
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-black/45">Selected work</p>
            <h2 className="text-2xl font-semibold text-black sm:text-3xl">Projects in motion</h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-black/55">A small look at what we’ve shipped and what we’re building next.</p>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          <a href="https://heemsbd.com" target="_blank" rel="noreferrer" className="group rounded-2xl border border-black/5 bg-[#F8F8F6] p-6 transition hover:border-black/15 sm:p-8">
            <div className="mb-10 flex items-center justify-between gap-3">
              <span className="rounded-full bg-black/5 px-3 py-1 text-xs text-black/60">Completed</span>
              <span className="text-sm text-black/40 transition group-hover:text-black">↗</span>
            </div>
            <h3 className="text-2xl font-semibold text-black">HEEMSBD</h3>
            <p className="mt-2 text-sm text-black/55">Fashion e-commerce · Bangladesh</p>
          </a>
          <article className="rounded-2xl border border-black/5 bg-[#F8F8F6] p-6 sm:p-8">
            <div className="mb-10">
              <span className="rounded-full bg-amber-100 px-3 py-1 text-xs text-amber-900">In progress</span>
            </div>
            <h3 className="text-2xl font-semibold text-black">Aquariba</h3>
            <p className="mt-2 text-sm text-black/55">Online aquarium fish store</p>
          </article>
        </div>
      </div>

      <div className="w-full max-w-7xl">
        <div className="mb-5">
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-black/45">What we bring</p>
          <h2 className="text-2xl font-semibold text-black sm:text-3xl">Capabilities</h2>
        </div>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {capabilities.map((capability, index) => (
            <article key={capability.title} className="rounded-2xl border border-black/5 bg-white/60 p-5 sm:p-6">
              <p className="mb-6 text-xs text-black/35">0{index + 1}</p>
              <h3 className="font-semibold text-black">{capability.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-black/55">{capability.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Forth;
