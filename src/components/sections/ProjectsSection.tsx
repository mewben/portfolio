import Image from "next/image";
import { Card, CardFooter } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { SectionTitle } from "./SectionTitle";

import { data, type DataType } from "@/lib/data";
import { Container } from "../ui/container";

export const ProjectsSection = () => {
  return (
    <Container>
      <SectionTitle>Projects</SectionTitle>
      <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm">
        {data.projects.map((project, k) => (
          <div key={k}>
            <ProjectCard project={project} />
          </div>
        ))}
      </div>
    </Container>
  );
};

const ProjectCard = ({ project }: { project: DataType["projects"][0] }) => {
  return (
    <Card className="w-full py-0 gap-0">
      <AspectRatio ratio={16 / 9}>
        <Image
          src={project.image}
          alt={project.title}
          className="object-cover rounded-t-xl object-top"
          fill
        />
      </AspectRatio>
      <CardFooter className="flex flex-col items-start gap-1 border-t bg-muted/50 px-6 py-3 rounded-b-xl">
        <h3 className="font-medium">
          {!!project.link ? (
            <a href={project.link} target="_blank">
              {project.title}
            </a>
          ) : (
            project.title
          )}
        </h3>
        <p className="text-muted-foreground">{project.description}</p>
      </CardFooter>
    </Card>
  );
};
