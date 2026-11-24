import Image from "next/image";
import Link from "next/link";
import NavbarMenu from "@/components/NavbarMenu";
import RotatingText from "./RotatingText";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Services", href: "#what-we-do" },
  { label: "Projects", href: "#projects" },
  { label: "Team", href: "#team" },
] as const;

export type NavItem = {
  label: string;
  href: string;
};

const GLASS_STYLE = {
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
} as const;

export default function Navbar() {
  const navItems: NavItem[] = [...NAV_LINKS];
  return (
    <nav className="top-0 left-0 z-50 flex w-full flex-wrap items-center justify-between gap-x-4 gap-y-4 px-4 py-4 sm:px-8 sm:py-5 lg:flex-nowrap lg:px-12 xl:px-18 xl:py-6">
      <Link href="/" aria-label="Maklot Studio home">
        <Image
          className="h-auto w-[105px] sm:w-[118px] xl:w-[125px]"
          style={{ height: "auto" }}
          src="/assets/logo.svg"
          alt="Maklot Studio"
          width={125}
          height={40}
          priority
        />
      </Link>

      <div
        style={GLASS_STYLE}
        className="nav relative order-2 hidden h-11 min-w-0 items-center justify-between gap-3 rounded-full px-4 text-xs font-semibold sm:h-12 sm:gap-5 sm:px-6 sm:text-sm md:order-none md:flex md:w-auto md:justify-start xl:h-14 xl:gap-8 xl:px-10"
      >
        {navItems.map((link) => (
          <Link
            key={link.label}
            className="cursor-pointer font-medium transition hover:opacity-70"
            href={link.href}
          >
            <RotatingText >
              {link.label}
            </RotatingText>
          </Link>
        ))}
      </div>

      <NavbarMenu navItems={navItems} />
    </nav>
  );
}
