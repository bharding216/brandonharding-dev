import Image from "next/image";

type PhoneFrameProps = {
  src: string;
  alt: string;
  caption?: string;
};

export function PhoneFrame({ src, alt, caption }: PhoneFrameProps) {
  return (
    <figure className="flex flex-col items-center">
      <div className="relative w-[min(100%,220px)]">
        <div className="rounded-[2rem] border border-border bg-[#1a1816] p-[7px] shadow-[0_24px_80px_-32px_rgba(0,0,0,0.75)]">
          <div className="overflow-hidden rounded-[1.55rem] bg-black">
            <Image
              src={src}
              alt={alt}
              width={390}
              height={844}
              className="h-auto w-full"
              sizes="220px"
            />
          </div>
        </div>
      </div>
      {caption ? (
        <figcaption className="mt-3 text-center font-mono text-[11px] text-muted">
          {caption}
        </figcaption>
      ) : null}
    </figure>
  );
}
