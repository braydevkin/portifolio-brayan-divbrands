import React from "react";

import PageLayout from "@/layout/PagesLayout";

import AboutMe from "@/components/AboutMe";

import Projects from "@/components/Projects";
import { PROJECTS_HISTORIC } from "@/components/Projects/projects-historic";
import Knowledges from "@/components/Knowledges";
import { KNOWLEDGES } from "@/components/Knowledges/knowledges";
import Comments from "@/components/Comments";

const Portifolio = () => {
  return (
    <PageLayout>
      <AboutMe />
      <Projects historic={PROJECTS_HISTORIC} />
      <Knowledges knowledges={KNOWLEDGES} />
      <Comments />
    </PageLayout>
  );
};

export default Portifolio;
