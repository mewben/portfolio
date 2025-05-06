import Image from "next/image";
import { LinkedinIcon, MapPinIcon, SendIcon } from "lucide-react";
import { Badge } from "@/components/ui/badge";

import { data } from "@/lib/data";
import { Email } from "../ui/email";

export const HeaderSection = () => {
  return (
    <section className="relative border-b min-h-[240px] flex flex-col justify-end">
      <div className="absolute inset-0 header-bg2 opacity2-25 stripe opacity-5" />
      <div className="mx-auto relative max-w-[880px] flex flex-col gap-4 flex-nowrap h-min items-start justify-start w-full">
        {/* // start main section */}
        <div className="flex flex-col sm:flex-row gap-4 items-center justify-center sm:justify-start w-full pt-6">
          <div className="h-[88px] w-[88px] sm:h-[150px] sm:w-[150px] relative sm:absolute sm:left-0 sm:top-0">
            <Image
              src="/melvinsoldia.jpg"
              alt={data.name}
              fill
              className="object-cover rounded-full grayscale"
            />
          </div>
          <div className="flex flex-col sm:flex-row gap-3 items-center justify-center sm:justify-start w-full sm:pl-52 text-primary">
            <div className="text-3xl font-semibold tracking-tight">
              {data.name}
            </div>
            <Badge variant="outline" className="bg-muted/50">
              {data.title}
            </Badge>
          </div>
        </div>
        {/* // end main section */}
        <div className="flex flex-row gap-6 flex-wrap items-center justify-center sm:justify-start w-full text-muted-foreground sm:pl-52 pb-4 font-medium">
          <div className="flex flex-row gap-2 items-center">
            <MapPinIcon className="h-4 w-4" />
            <span>{data.location}</span>
          </div>
          <div className="flex flex-row gap-2 items-center">
            <SendIcon className="h-4 w-4" />
            <Email />
          </div>
          <div className="flex flex-row gap-2 items-center">
            <LinkedinIcon className="h-4 w-4" />
            <a
              href={data.linkedin}
              target="_blank"
              className="hover:opacity-75 transition-all ease-in-out"
            >
              Linkedin
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
