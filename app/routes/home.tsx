import Banner from "~/components/Banner";
import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Crack-Ai" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return <>
  <Banner></Banner>
  </>;
}
