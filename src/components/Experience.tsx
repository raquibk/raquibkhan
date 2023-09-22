import UofA from "../../public/uofalogo.svg";
import InsideDesk from "../../public/insidedesk.svg";
import Scotiabank from "../../public/scotiabank.svg";
import { ExperienceCard } from "./ExperienceCard";

export function Experience() {
  return (
    <>
      <div className="flex flex-wrap justify-center">
        <ExperienceCard
          image={UofA}
          title="University of Alberta"
          description="Software Engineering"
          timeline="Graduating May 2024"
        />
        <ExperienceCard
          image={InsideDesk}
          title="InsideDesk"
          description="Software Developer Co-op"
          timeline="May 2023 - Present"
        />
        <ExperienceCard
          image={Scotiabank}
          title="Scotiabank"
          description="Developer Intern"
          timeline="Jan. 2022 - Aug. 2022"
        />
      </div>
    </>
  );
}
