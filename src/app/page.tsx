import Image, { type ImageProps } from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Button } from '@/components/Button'
import {Button as Button2} from '@/components/ui/button'
import { Container } from '@/components/Container'
import {
  GitHubIcon,
  LinkedInIcon,
} from '@/components/SocialIcons'
import logoAWS from '@/images/logos/aws-logo.jpeg'
import logoAltium from '@/images/logos/altium-logo.jpeg'
import darkLogoAWS from '@/images/logos/aws-logo.jpeg'
import logoBackmatter from '@/images/logos/backmatter-logo.png'
import image1 from '@/images/photos/image-1.jpg'
import image2 from '@/images/photos/image-2.jpg'
import image3 from '@/images/photos/image-3.jpg'
import image4 from '@/images/photos/image-4.jpg'
import image5 from '@/images/photos/image-5.jpg'
import { formatDate } from '@/lib/formatDate'
import portraitImage from '@/images/IMG-20240305-WA0008.jpg'

function MailIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M2.75 7.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
        className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
      />
      <path
        d="m4 6 6.024 5.479a2.915 2.915 0 0 0 3.952 0L20 6"
        className="stroke-zinc-400 dark:stroke-zinc-500"
      />
    </svg>
  )
}

function BriefcaseIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M2.75 9.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
        className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
      />
      <path
        d="M3 14.25h6.249c.484 0 .952-.002 1.316.319l.777.682a.996.996 0 0 0 1.316 0l.777-.682c.364-.32.832-.319 1.316-.319H21M8.75 6.5V4.75a2 2 0 0 1 2-2h2.5a2 2 0 0 1 2 2V6.5"
        className="stroke-zinc-400 dark:stroke-zinc-500"
      />
    </svg>
  )
}

function SocialLink({
  className,
  href,
  children,
  icon: Icon,
}: {
  className?: string
  href: string
  icon: React.ComponentType<{ className?: string }>
  children: React.ReactNode
}) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

interface Role {
  company: string
  title: string
  logo: ImageProps['src']
  darkLogoAWS: ImageProps['src']
  start: string | { label: string; dateTime: string }
  end: string | { label: string; dateTime: string }
}

function Role({ role }: { role: Role }) {
  
  let startLabel =
    typeof role.start === 'string' ? role.start : role.start.label
  let startDate =
    typeof role.start === 'string' ? role.start : role.start.dateTime

  let endLabel = typeof role.end === 'string' ? role.end : role.end.label
  let endDate = typeof role.end === 'string' ? role.end : role.end.dateTime


  return (
    <li className="flex gap-6">
      <div className="relative mt-1 flex h-12 w-12 flex-none items-center justify-center rounded-full overflow-hidden dark:shadow-zinc-800/5 dark:ring-1 dark:ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800">
        <div className="rounded-full overflow-">
          <Image src={role.logo} alt="" className={role.company === 'Backmatter' ? 'w-9 h-9' : 'w-12 h-12'} unoptimized />
        </div>
      </div>
      <dl className="flex flex-auto flex-wrap gap-x-2">
        <dt className="sr-only">Company</dt>
        <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">
          {role.company}
        </dd>
        <dt className="sr-only">Role</dt>
        <dd className="text-xs text-zinc-500 dark:text-zinc-400">
          {role.title}
        </dd>
        <dt className="sr-only">Date</dt>
        <dd
          className="ml-auto text-xs text-zinc-400 dark:text-zinc-500"
          aria-label={`${startLabel} until ${endLabel}`}
        >
          <time dateTime={startDate}>{startLabel}</time>{' '}
          <span aria-hidden="true">—</span>{' '}
          <time dateTime={endDate}>{endLabel}</time>
        </dd>
      </dl>
    </li>
  )
}

function ArrowDownIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" {...props}>
      <path
        d="M4.75 8.75 8 12.25m0 0 3.25-3.5M8 12.25v-8.5"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function Resume() {
  let resume: Array<Role> = [
    {
      company: 'Backmatter',
      title: 'Founder',
      logo: logoBackmatter,
      start: '2023',
      end: {
        label: 'Present',
        dateTime: new Date().getFullYear().toString(),
      },
    },
    {
      company: 'Amazon Web Services (AWS)',
      title: 'Account Manager',
      logo: logoAWS,
      start: '2020',
      end: '2023',
    },
    {
      company: 'Octopart / Altium',
      title: 'Strategic Account Executive',
      logo: logoAltium,
      start: '2015',
      end: '2020',
    },
  ]

  return (
    <div className="lg:pl-20">
      <div className="rounded-2xl border shadow-md border-zinc-200 p-6 dark:border-zinc-500/40">
        <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
          <BriefcaseIcon className="h-6 w-6 flex-none" />
          <span className="ml-3">Work</span>
        </h2>
        <ol className="mt-6 space-y-4">
          {resume.map((role, roleIndex) => (
            <Role key={roleIndex} role={role} />
          ))}
        </ol>
        <Button href="#" variant="secondary" className="group mt-6 w-full border border-gray-300 dark:border-gray-600 transition hover:bg-[#f4f4f8] bg-transparent">
          Download Resume
          <ArrowDownIcon className="h-4 w-4 stroke-zinc-400 transition group-active:stroke-zinc-600 dark:group-hover:stroke-zinc-50 dark:group-active:stroke-zinc-50" />
        </Button>
      </div>
    </div>
  )
}

export default async function Home() {
  return (
    <>
      <Container className="mt-16 sm:mt-32">
      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
        <div className="lg:pl-20">
          <div className="max-w-xs px-2.5 lg:max-w-none">
            <Image
              src={portraitImage}
              alt=""
              sizes="(min-width: 1024px) 32rem, 20rem"
              className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
            />
          </div>
        </div>
        <div className="lg:order-first lg:row-span-2">
          <h1 className="text-3xl tracking-tight text-zinc-800 sm:text-4xl dark:text-zinc-100">
            Hi PostHog! If you're reading this, just FYI, I'm not quite finished!
          </h1>
          <h1 className="mt-6 text-xl">
            I'm but an itinerant sales rep looking for a new home
          </h1>
          <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
            <p>
              After spending a year working on my startup Backmatter, I'm now winding down that project and returning to sales. I still have the startup itch though, and I'm looking for a home at a startup with a mission I can believe in, a product I can love, a team that can inspire me and help me grow. I want to have a meaningful impact. I think Posthog is that home.
            </p>
            <p>
              Here's what I think sets me apart:
              <Accordion type="single" collapsible className="ml-7 mr-16">
                <AccordionItem value="item-1">
                  <AccordionTrigger>I try to think big</AccordionTrigger>
                  <AccordionContent>
                    <p>It's in my nature to think about how things can be done better. Many of my ideas sucked. But some were good and made a difference.
                    </p>
                    <p className="mt-3">
                      At Octopart, I redesigned our deck, developed and led the transition to a new pricing model for our flagship product. At AWS, I built a customer portal and a data import and account prioritization tool using Excel VBA. I introduced a new model for prioritizing accounts that was adopted across the startup org.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>I'm customer-obsessed</AccordionTrigger>
                  <AccordionContent>
                    I'm customer-obsessed
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger>I'm relentlessly curious</AccordionTrigger>
                  <AccordionContent>
                    I'm relentlessly curious
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger>I'm technical</AccordionTrigger>
                  <AccordionContent>
                    I'm technical
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </p>
            <p>
              Posthog seems like a place where my quirks and qualities would be a real asset. I dive into this in the PostHog section.
            </p>
            <h2 className="mt-6 text-lg font-bold">
              Cool, but what's this?
            </h2>
            <p>
              I wanted to take the initiative to demonstrate what I've learned about PostHog's tech, so I put this site together both as a canvas to do that while telling a bit more about myself.
            </p>
            <p>
              I've enabled PostHog tracking on here, and thanks to your embeddable dashboards, I can visualize my work using real-world data.
            </p>
            <p>
              You can find the source code here.
            </p>
          </div>
        </div>
        <div>
          <Resume />
          <div className="lg:pl-20 mt-8 ml-6">
            <ul role="list">
              <SocialLink href="#" icon={LinkedInIcon} className="mt-4">
                My LinkedIn
              </SocialLink>
            <SocialLink href="#" icon={GitHubIcon} className="mt-4">
              My GitHub
            </SocialLink>
              <SocialLink
                href="mailto:paulleehuang@proton.me"
                icon={MailIcon}
              className="mt-4"
              >
                paulleehuang@proton.me
              </SocialLink>
            </ul>
          </div>
        </div>
      </div>
      </Container>
    </>
  )
}
