import Image from "next/image"
import { BentoCard } from "@/components/bento-card"
import { siteData } from "@/lib/site-data"

export function CredentialsCard() {
  const years = siteData.experience.length

  return (
    <BentoCard href="/credentials" eyebrow="Full background" title="Résumé" bodyClassName="justify-center gap-4">
      <Image
        src="/credentials-signature.png"
        alt=""
        width={185}
        height={92}
        className="mx-auto h-auto w-full max-w-[170px] object-contain opacity-80 transition-opacity duration-300 group-hover:opacity-100 dark:invert"
      />
      <p className="text-center text-sm text-muted-foreground">
        {years} roles, education, and the full stack list.
      </p>
    </BentoCard>
  )
}
