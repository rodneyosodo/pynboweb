import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <div className="relative overflow-hidden py-12 lg:py-24">
      <div className="container mx-auto max-w-7xl px-8">
        <div className="max-w-2xl mx-auto">
          {/* Title */}
          <Skeleton className="h-9 w-3/4 mt-2 mb-8" />

          {/* Article content */}
          <div className="prose space-y-4">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-3/4" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-3/4" />
            <Skeleton className="h-[400px] w-full rounded-lg mb-8" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-5/6" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-4/5" />
          </div>
        </div>
      </div>
    </div>
  );
}
