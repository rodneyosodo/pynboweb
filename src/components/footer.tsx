const sections = [
    {
      title: "About",
      links: [
        { name: "Overview", href: "#overiew" },
        { name: "Schedule", href: "#schedule" },
        { name: "Speakers", href: "#speakers" },
        { name: "Proposal Guidelines", href: "#proposal" },
      ],
    },
    {
      title: "Program",
      links: [
        { name: "What is PyNBO", href: "#what-is-pynbo" },
        { name: "Code of Conduct", href: "#code-of-conduct" },
        { name: "Python Software Foundation", href: "#psf" },
        { name: "Support", href: "#support" },
      ],
    },
    {
      title: "Social",
      links: [
        { name: "Twitter", href: "#twitter" },
        { name: "Instagram", href: "#instagram" },
        { name: "LinkedIn", href: "#linkedin" },
      ],
    },
  ];
  
  const Footer = () => {
    return (
      <section className="border-t relative overflow-hidden py-32">
        <div className="container mx-auto max-w-7xl px-8">
          <footer>
            <div className="grid grid-cols-2 gap-8 lg:grid-cols-6">
              <div className="col-span-2 mb-8 lg:mb-0">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg"
                  alt="logo"
                  className="mb-4 h-10"
                />
                <p className="font-bold">PyConKE 2025</p>
              </div>
              {sections.map((section) => (
                <div key={section.title}>
                  <h3 className="mb-4 font-bold">{section.title}</h3>
                  <ul className="space-y-4 text-muted-foreground">
                    {section.links.map((link) => (
                      <li
                        key={link.name}
                        className="font-medium hover:text-primary"
                      >
                        <a href={link.href}>{link.name}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <div className="mt-24 flex flex-col justify-between gap-4 border-t pt-8 text-sm font-medium text-muted-foreground md:flex-row md:items-center">
              <p>© 2025 PyConKE. All rights reserved.</p>
              <ul className="flex gap-4">
                <li className="underline hover:text-primary">
                  <a href="#terms-and-conditions"> Terms and Conditions</a>
                </li>
                <li className="underline hover:text-primary">
                  <a href="#privacy-policy"> Privacy Policy</a>
                </li>
              </ul>
            </div>
          </footer>
        </div>
      </section>
    );
  };
  
  export default Footer;
  