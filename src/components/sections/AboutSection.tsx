import Image from "next/image";
import { SectionTitle } from "./SectionTitle";

import { data } from "@/lib/data";
import { Container } from "../ui/container";

export const AboutSection = () => {
  return (
    <Container>
      <SectionTitle>About</SectionTitle>
      <div className="text-muted-foreground flex-1 flex flex-col gap-6">
        <ul className="ml-6 list-disc [&>li]:mb-2">
          {data.about.map((text, index) => (
            <li key={index} className="text-sm sm:text-base">
              <p>
                <span className="text-foreground">{text[0]}:</span> {text[1]}
              </p>
            </li>
          ))}
        </ul>
        <Image src="/sign.svg" alt="sign" width={140} height={108} />
      </div>
    </Container>
  );
};
