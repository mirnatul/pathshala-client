import { LoginForm } from "@/components/form/login-form";
import { GalleryVerticalEnd } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function LoginPage() {
  return (
    <div className="grid min-h-svh lg:grid-cols-2">
      <div className="flex flex-col gap-4 p-6 md:p-10">
        <div className="flex justify-center gap-2 md:justify-start">
          {/** biome-ignore lint/a11y/useValidAnchor: <explanation> */}
          <Link href="/" className="flex items-center gap-2 font-medium">
            <div className="flex size-6 items-center justify-center rounded-md bg-primary text-primary-foreground">
              <GalleryVerticalEnd className="size-4" />
            </div>
            Pathshala
          </Link>
        </div>
        <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-xs">
            <LoginForm />
          </div>
        </div>
      </div>
      <div className="relative hidden bg-muted lg:block">
        {/** biome-ignore lint/performance/noImgElement: <explanation> */}
        <Image
          src="/auth-image.png"
          alt="Authentication"
          fill
          className="object-contain dark:brightness-[0.2] dark:grayscale"
        />
      </div>
    </div>
  );
}
