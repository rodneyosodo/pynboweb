export default function Home() {
  return (
    <div className="relative overflow-hidden py-24 lg:py-32 h-[50vh]">
      <div className="container mx-auto max-w-7xl px-8">
        <div className="max-w-2xl text-center mx-auto">
          <p className="mb-8 text-5xl font-semibold tracking-tighter">
            404 - Page Not Found
          </p>
          <p className="mb-4">
            The page you are looking for does not exist. Go back{" "}
            <a href="/" className="font-medium underline underline-offset-4">
              home.
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
