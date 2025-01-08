import Image from "next/image";

const sponsors = [
  {
    title: "Twiga",
    image: "/sponsors/twiga.png",
    url: "https://www.twiga.com/",
  },
  {
    title: "New Relic",
    image: "/sponsors/newrelic.png",
    url: "https://newrelic.com/",
  },
  {
    title: "Postman",
    image: "/sponsors/postman.png",
    url: "https://www.postman.com/",
  },
  {
    title: "Moringa",
    image: "/sponsors/moringa.png",
    url: "https://moringaschool.com/",
  },
  {
    title: "Python Software Foundation",
    image: "/sponsors/psf.png",
    url: "https://www.python.org/psf/",
  },
  {
    title: "James Nzomo Foundation",
    image: "/sponsors/jnf.png",
    url: "https://www.jamesnzomo.org/",
  },
];

export default function Sponsors() {
  return (
    <div className="border-t py-12 lg:py-20 relative overflow-hidden">
      <div className="max-w-2xl mx-auto pb-20">
        <div className="grid gap-12">
          <div>
            <h2 className="text-3xl font-bold lg:text-4xl text-center">
              Previous Sponsors
            </h2>
          </div>
        </div>
      </div>
      <div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 items-center gap-12">
        {sponsors.map((sponsors) => (
          <div key={sponsors.title} className="text-center">
            <div className="flex justify-center items-center w-24 h-24 mx-auto">
              <a href={sponsors.url} target="_blank" rel="noreferrer">
                <Image
                  src={sponsors.image}
                  alt={sponsors.title}
                  width={120}
                  height={120}
                  className="w-24 h-24 object-contain"
                />
              </a>
            </div>
            <div className="mt-3">
              <h3 className="text-lg font-semibold ">
                <a href={sponsors.url} target="_blank" rel="noreferrer">
                  {sponsors.title}
                </a>
              </h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
