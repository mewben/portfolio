import { Container } from "../ui/container";
import { FooterSection } from "./FooterSection";
import { SectionTitle } from "./SectionTitle";

import { data } from "@/lib/data";

export const ContactSection = () => {
  return (
    <div className="bg-muted/50 border-t">
      <Container>
        <SectionTitle>Contact</SectionTitle>
        <div className="flex-1 flex flex-col gap-3 text-muted-foreground">
          <iframe
            src={data.contactIframe}
            width="100%"
            height="400"
            title="Contact Form"
          />
          <FooterSection />
        </div>
      </Container>
    </div>
  );
};
