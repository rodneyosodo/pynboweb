import { Building2Icon, ThumbsUpIcon, Speech, Code2Icon } from "lucide-react";

export default function AboutSection() {
  return (
    <div className="border-t py-24 lg:py-32 relative overflow-hidden">
      <div className="container mx-auto max-w-7xl px-8">
        <div className="max-w-2xl mx-auto">
          <div>
            <h2 className="text-3xl font-bold lg:text-4xl pb-10">About Us</h2>
            <p className="mt-3 pb-10 text-muted-foreground">
              PyCon Kenya is a community-driven conference that aims to provide
              a platform for the growth of the Python community in Kenya. We
              believe that diversity and inclusivity are essential for the
              growth and success of our community.
            </p>
          </div>
          <div className="space-y-6 lg:space-y-10">
            <div className="flex">
              <Building2Icon className="flex-shrink-0 mt-2 h-6 w-6" />
              <div className="ms-5 sm:ms-8">
                <h3 className="text-base sm:text-lg font-semibold">
                  Building a welcoming community
                </h3>
                <p className="mt-1 text-muted-foreground">
                  We believe that diversity and inclusivity are essential for
                  the growth and success of our community.
                </p>
              </div>
            </div>
            <div className="flex">
              <Speech className="flex-shrink-0 mt-2 h-6 w-6" />
              <div className="ms-5 sm:ms-8">
                <h3 className="text-base sm:text-lg font-semibold">Talks</h3>
                <p className="mt-1 text-muted-foreground">
                  From beginner to expert, we offer a wide range of talks to
                  cater to the needs of our diverse community.
                </p>
              </div>
            </div>
            <div className="flex">
              <Code2Icon className="flex-shrink-0 mt-2 h-6 w-6" />
              <div className="ms-5 sm:ms-8">
                <h3 className="text-base sm:text-lg font-semibold">
                  Workshops
                </h3>
                <p className="mt-1 text-muted-foreground">
                  We learn by doing, and we offer a wide range of workshops to
                  cater to the needs of our diverse community.
                </p>
              </div>
            </div>
            <div className="flex">
              <ThumbsUpIcon className="flex-shrink-0 mt-2 h-6 w-6" />
              <div className="ms-5 sm:ms-8">
                <h3 className="text-base sm:text-lg font-semibold">
                  Simple and all-inclusive
                </h3>
                <p className="mt-1 text-muted-foreground">
                  We want to create a welcoming and inclusive environment for
                  everyone, regardless of their background or experience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
