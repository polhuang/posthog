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
import { Container } from '@/components/Container'
import {
  GitHubIcon,
  LinkedInIcon,
} from '@/components/SocialIcons'
import logoAWS from '@/images/logos/aws-logo.jpeg'
import logoAltium from '@/images/logos/altium-logo.jpeg'
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
        <Button href="/resume.pdf" variant="secondary" className="group mt-6 w-full border border-gray-300 dark:border-gray-600 transition hover:bg-[#f4f4f8] bg-transparent">
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
            Hi PostHog!
          </h1>
          <h2 className="mt-6 text-xl">
            I&apos;m an itinerant sales rep looking for a new home
          </h2>
          <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
            <p>
              After spending a year working on my startup Backmatter, I&apos;m now winding it down and returning to sales. I still have the startup itch though, and I&apos;m looking for a home at a startup where I can have a meaningful impact, with a mission I can believe in, a product I can love, a team that can inspire me and help me.
            </p>
            <p>
              Here&apos;s what I think sets me apart:
              <Accordion type="single" collapsible className="ml-7 mr-16 mt-2">
                <AccordionItem value="item-1">
                  <AccordionTrigger>I'm customer-obsessed</AccordionTrigger>
                  <AccordionContent>
                    Over my time in sales, earning and keeping the trust of customers has been my north star. The satisfaction and sense of accomplishment I get when I make a customer happy is what I love most about sales. Making customers feel heard, empathizing with them, understanding what they&apos;re going through, and synthesizing everything I&apos;ve learned to solve their problems - this has always felt to me to be the primary directive in my work. 
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>I&apos;m relentlessly curious</AccordionTrigger>
                  <AccordionContent>
I have a natural and drive to learn and improve. I pick up technical concepts quickly, learning from teammates and customers alike to expand the repertoire of topics I can confidently speak to. I study continuously, and I try to do my research each time I come across concepts or terminology that I don&apos't understand. This is how I was eventually able to play a dual role of sales rep and solutions architect at AWS for nearly a year.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger>I try to think big</AccordionTrigger>
                  <AccordionContent>
                    <p>
                      I&apos;ve been lucky enough to have had supportive managers on teams who encouraged me to look for fresh ideas and new ways of doing things. As a result, I made a number of contributions that were more broadly impactful.
                    </p>
                    <p className="mt-6">
At Octopart, I figured out what metrics were most compelling or useful to customers, learned SQL, and built out most of our sales analytics tooling. I researched, planned, and led the project to transition our flagship product to a new dynamic pricing model after reading about Eric Schmidt out rolling something similar out at Google. At AWS, my account prioritization methodology was adopted across the startup org, and I later built an automated account data ingestion and prioritization tool
                    </p>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4%xs">
                  <AccordionTrigger>I&apos;m humble and eager to learn</AccordionTrigger>
                  <AccordionContent>
                    My running philosophy is to treat my way of thinking and doing things as simultaneously good and bad, right and wrong. I have enough confidence to think independently and to get things done how I think they should be done. But I also understand that I operate on assumptions and biases shaped by a limited set of experiences. To me it&apos;s not just important to accept criticism but to welcome it or even seek it out.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-5%xs">
                  <AccordionTrigger>I &lt;3 open-source</AccordionTrigger>
                  <AccordionContent>
                    Some rambling thoughts <a href="/opensource" className="underline">here</a>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </p>
            <h2 className="mt-6 text-lg font-bold">
              Cool, but what&apos;s this?
            </h2>
            <p>
              I wanted to take the initiative to demonstrate what I&apos;ve learned about PostHog&apos;s tech, so I put this site together as a canvas showcasing some of PostHog&apos;s features. I&apos;ve enabled PostHog tracking on this site, and the last section contains a number of web elements on which I tested out more advanced features. And thanks to your embeddable dashboards, I can visualize my work using real-world data.
            </p>
            <p>
              I don't expect anyone to read the content I put on here. It was originally meant to be filler content. While I eventually replaced it with actual content, it's meant to be supplementary and completely optional.
            </p>
            <p>
              You can find the source code <Link href="https://github.com/polhuang/posthog" className="underline transition text-zinc-400 hover:text-teal-500">here</Link>.
            </p>
          </div>
        </div>
        <div>
          <Resume />
          <div className="lg:pl-20 mt-8 ml-6">
            <ul role="list">
              <SocialLink href="https://www.linkedin.com/in/paulleehuang" icon={LinkedInIcon} className="mt-4">
                My LinkedIn
              </SocialLink>
            <SocialLink href="https://github.com/polhuang" icon={GitHubIcon} className="mt-4">
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
