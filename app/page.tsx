import { components, componentNames } from "@/components";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen flex justify-center p-4">
      <div className="grid  content-start  grid-cols-1 sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-4  2xl:grid-cols-6  gap-4">
        {componentNames.map((name, index) => {
          const Component = components[name];
          return (
            <Link href={`/case/${name}`} key={index}>
              <Component />
            </Link>
          );
        })}
      </div>
    </main>
  );
}
