import { Twitter, Github, Linkedin, Ghost } from "lucide-react";

const FooterSection = ({
  title,
  links,
}: {
  title: string;
  links: string[];
}) => (
  <div>
    <h3 className="font-semibold font-geist mb-4">{title}</h3>
    <ul className="space-y-2 font-manrope">
      {links.map((link) => (
        <li key={link}>
          <a
            href="#"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            {link}
          </a>
        </li>
      ))}
    </ul>
  </div>
);

export function Footer() {
  const sections = [
    {
      title: "Product",
      links: ["Features", "Pricing", "Templates", "Integrations"],
    },
    {
      title: "Company",
      links: ["About", "Blog", "Contact", "Careers"],
    },
    {
      title: "Legal",
      links: ["Terms", "Privacy", "Security"],
    },
  ];

  const socialIcons = [
    { Icon: Twitter, name: "Twitter" },
    { Icon: Github, name: "Github" },
    { Icon: Linkedin, name: "Linkedin" },
  ];

  return (
    <footer className="border-t bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                <Ghost className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold font-geist">Jotly</span>
            </div>
            <p className="text-muted-foreground font-manrope">
              The smartest way to organize your thoughts and boost productivity.
            </p>
          </div>

          {sections.map((section) => (
            <FooterSection
              key={section.title}
              title={section.title}
              links={section.links}
            />
          ))}
        </div>

        <div className="border-t mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground font-manrope">
            ©2025 Jotly. All rights reserved.
          </p>
          <div className="flex items-center gap-4 mt-4 md:mt-0">
            {socialIcons.map(({ Icon, name }) => (
              <a
                key={name}
                href="#"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
