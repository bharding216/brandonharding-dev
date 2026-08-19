import Image from "next/image";
import { BrowserFrame } from "@/components/BrowserFrame";
import { PhoneFrame } from "@/components/PhoneFrame";
import type { ProjectImage } from "@/content/projects";

type ProjectMediaProps = {
  image: ProjectImage;
  url?: string;
  className?: string;
  sizes?: string;
};

export function ProjectMedia({
  image,
  url,
  className,
  sizes = "(min-width: 1024px) 40vw, 100vw",
}: ProjectMediaProps) {
  if (image.frame === "phone") {
    return (
      <PhoneFrame src={image.src} alt={image.alt} caption={image.caption} />
    );
  }

  return (
    <BrowserFrame url={url} label={image.caption} className={className}>
      <Image
        src={image.src}
        alt={image.alt}
        width={1920}
        height={1080}
        className="block h-auto w-full"
        sizes={sizes}
      />
    </BrowserFrame>
  );
}

type PhoneRowProps = {
  images: ProjectImage[];
};

export function PhoneRow({ images }: PhoneRowProps) {
  if (images.length === 0) {
    return null;
  }

  return (
    <div className="grid justify-items-center gap-8 sm:grid-cols-3">
      {images.map((image) => (
        <ProjectMedia key={image.src} image={image} />
      ))}
    </div>
  );
}
