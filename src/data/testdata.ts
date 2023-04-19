type Project = {
  id: number;
  name: string;
  description: string;
  createdAt: string;
  status: string;
  teamCount: string;
  members: string[];
  stack: string[];
};

export const PROJECTS: Project[] = [
  {
    id: 1,
    name: "Fantasy Football",
    description:
      "Im looking for a few sports fans to help me build a fantasy football app",
    createdAt: "June 1, 2021",
    status: "Started",
    teamCount: "1/2",
    members: ["Homer Simpson"],
    stack: ["JavaScript", "React", "Node"],
  },
  {
    id: 2,
    name: "Cat Game",
    description:
      "If you are a cat lover, this is the project for you, we are building a cat game",
    createdAt: "June 4, 2021",
    status: "Planning",
    teamCount: "3/6",
    members: ["John Snow", "Tina Turner", "Jimmy Neutron"],
    stack: ["Python", "Vue", "Node"],
  },
  {
    id: 3,
    name: "Flappy Bird",
    description: "Flappy Bird but more awesome and more birds",
    createdAt: "June 4, 2021",
    status: "Planning",
    teamCount: "2/4",
    members: ["Hello Kitty", "Spongebob Squarepants"],
    stack: ["JavaScript", "Angular", "Node"],
  },
  {
    id: 4,
    name: "Crypto Tracker",
    description: "Just your average crypto tracker",
    createdAt: "June 6, 2021",
    status: "Building",
    teamCount: "8/8",
    members: [
      "John Doe",
      "Jane Doe",
      "John Smith",
      "Jane Smith",
      "John Doe",
      "Jane Doe",
      "John Smith",
      "Jane Smith",
    ],
    stack: ["TypeScript", "React", "Node"],
  },
  {
    id: 5,
    name: "Netflix Clone",
    description: "Time to build a Netflix clone that is totally not a rip off",
    createdAt: "June 7, 2021",
    status: "Building",
    teamCount: "3/4",
    members: ["Luke Skywalker", "Han Solo", "Leia Organa"],
    stack: ["JavaScript", "React", "Node"],
  },
];
