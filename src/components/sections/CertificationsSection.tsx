import { Container } from "../ui/container";
import { SectionTitle } from "./SectionTitle";

import { data, type DataType } from "@/lib/data";

export const CertificationsSection = () => {
  return (
    <Container>
      <SectionTitle>Certifications</SectionTitle>
      <div className="text-muted-foreground flex-1 flex flex-col gap-6">
        <div className="flex-1 grid grid-cols-1 gap-6 text-sm">
          {data.certifications.map((certification, k) => (
            <CertificationCard key={k} certification={certification} />
          ))}
        </div>
      </div>
    </Container>
  );
};

const CertificationCard = ({
  certification,
}: {
  certification: DataType["certifications"][0];
}) => {
  return (
    <div className="w-full border-b text-muted-foreground pb-6">
      <h3 className="font-medium text-base text-foreground">
        <span>{certification.title}</span>
      </h3>
      <h4>{certification.provider}</h4>
      <p>{certification.description}</p>
    </div>
  );
};
