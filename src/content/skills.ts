import type { SkillGroup } from "@/types";

export const skillGroups: readonly SkillGroup[] = [
  { label: "Languages", items: ["JavaScript", "TypeScript", "Java", "C++", "Python"] },
  { label: "Frontend", items: ["React", "HTML", "CSS", "Tailwind CSS"] },
  { label: "Backend", items: ["Node.js", "Express"] },
  { label: "Data", items: ["MongoDB", "MySQL"] },
  {
    label: "Engineering",
    items: ["REST APIs", "Authentication", "RBAC", "Git", "Clean Architecture"],
  },
];
