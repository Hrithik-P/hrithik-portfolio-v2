import { BentoCard } from "@/components/bento-card"
import { ProjectCover } from "@/components/project-cover"
import { siteData } from "@/lib/site-data"

/** Fan offsets for the stacked covers, back card first. */
const FAN = [
  { x: -34, rotate: -9, scale: 0.9, z: 1 },
  { x: 34, rotate: 9, scale: 0.9, z: 1 },
  { x: 0, rotate: 0, scale: 1, z: 2 },
]

export function ProjectsCard() {
  const featured = siteData.projects.slice(0, 3)

  return (
    <BentoCard
      href="/works"
      eyebrow={`${siteData.projects.length} case studies`}
      title="Selected work"
      bodyClassName="justify-center"
    >
      <div className="relative mx-auto flex h-32 w-full max-w-[15rem] items-center justify-center sm:h-36">
        {featured.map((project, index) => {
          const fan = FAN[index] ?? FAN[2]

          return (
            <ProjectCover
              key={project.id}
              project={project}
              variant={index as 0 | 1 | 2}
              showLabel={false}
              className="absolute h-full w-[56%] rounded-2xl border border-white/10 shadow-xl transition-transform duration-500 ease-out"
              style={{
                zIndex: fan.z,
                transform: `translateX(${fan.x}%) rotate(${fan.rotate}deg) scale(${fan.scale})`,
              }}
            />
          )
        })}
      </div>
    </BentoCard>
  )
}
