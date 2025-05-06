import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { SectionTitle } from "./SectionTitle";

import { data, type DataType } from "@/lib/data";
import { Container } from "../ui/container";

export const ExperienceSection = () => {
  return (
    <Container>
      <SectionTitle>Experience</SectionTitle>
      <div className="text-muted-foreground flex-1 flex flex-col gap-6">
        <div className="flex-1 grid grid-cols-1 gap-6 text-sm">
          {data.experiences.map((experience, k) => (
            <ExperienceCard key={k} experience={experience} />
          ))}
        </div>
      </div>
    </Container>
  );
};

const ExperienceCard = ({
  experience,
}: {
  experience: DataType["experiences"][0];
}) => {
  return (
    <Card className="w-full text-muted-foreground pb-0">
      <CardContent>
        <h4>
          <span>
            {experience.company} - {experience.location}
          </span>
        </h4>
        <h3 className="font-medium text-base text-foreground">
          {experience.position}
        </h3>
        <h4>{experience.date}</h4>
        <p className="mt-3">{experience.description}</p>
      </CardContent>
      <CardFooter className="flex flex-row flex-wrap items-start gap-1 border-t bg-muted/50 px-6 py-4 rounded-b-xl">
        {experience.skills.map((skill, k) => (
          <Badge variant="outline" key={k}>
            {skill}
          </Badge>
        ))}
      </CardFooter>
    </Card>
  );
};
