import { blogPosts, servicePages } from "@/lib/seo/content";
import { absoluteUrl, facebookDmHref, siteConfig } from "../site-config";

export const dynamic = "force-static";

function link(title: string, path: string, description?: string) {
  const entry = `- [${title}](${absoluteUrl(path)})`;
  return description ? `${entry}: ${description}` : entry;
}

/** Serves /llms.txt (https://llmstxt.org), built from the same content as the pages. */
export function GET() {
  const body = [
    `# ${siteConfig.name}`,
    "",
    `> ${siteConfig.description}`,
    "",
    "## Services",
    "",
    ...servicePages.map((page) =>
      link(page.schemaName, `/services/${page.slug}`, page.description),
    ),
    "",
    "## Blog",
    "",
    ...blogPosts.map((post) =>
      link(post.title, `/blog/${post.slug}`, post.description),
    ),
    "",
    "## Contact",
    "",
    link("Contact page", "/contact"),
    `- [Message on Facebook](${facebookDmHref})`,
    "",
    "## Optional",
    "",
    link("Privacy policy", "/privacy-policy"),
    link("Terms and conditions", "/terms-and-conditions"),
    "",
  ].join("\n");

  return new Response(body, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
