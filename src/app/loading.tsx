import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <div className="flex flex-col gap-2">
      <Skeleton className="w-full h-[300px] mt-10 bg-slate-500/75"></Skeleton>
      <Skeleton className="w-full h-[500px] bg-slate-500/75"></Skeleton>
    </div>
  );
}
