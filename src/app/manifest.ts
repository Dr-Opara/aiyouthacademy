import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "AI Youth Academy",
    short_name: "AI Youth Academy",
    description:
      "AI Youth Academy teaches students ages 6–18 how to build with Artificial Intelligence through coding, creativity, entrepreneurship, websites, games, apps, and real-world projects.",
    start_url: "/",
    display: "standalone",
    background_color: "#070B26",
    theme_color: "#070B26",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
