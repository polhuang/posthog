import { type Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  XIcon,
} from '@/components/SocialIcons'
import portraitImage from '@/images/portrait.jpg'

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

function MailIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export const metadata: Metadata = {
  title: 'Open Source',
  description:
    'Open Source & Me',
}

export default function OpenSource() {
  return (
    <Container className="mt-16 sm:mt-32">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
            Open Source & Me
          </h1>
          <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
            <p>
              My love for open source comes equally from the practical utility it's provided to me as from the spirit of sharing, community, collaboration, and collective ownership it represents. I'll start with the latter. The principles behind FOSS might seem radical at first glance. We're used to thinking of ideas, technologies, even scientific research (RIP Aaron Swartz), as commodities that can be owned, giving their owners near-absolute discretion over how they can be used. Yet for most of human history this was not the case, and civilization could not have developed or flourished without the free exchange of ideas. Ideas and technology have only just become proprietary and locked away from the commons.
            </p>
            <p>
              The big tech companies have all come around to embrace and invest in open source after observing how open-source workloads boosted their cloud profit centers. Some are cynical, but I think it's a victory for open source. Their investments resulted in significant contributions (Google with Android and k8s, Microsoft with LSPs and Typescript, Facebook with React and Llama, etc) and suggest that these companies recognize the importance of open source to the digital economy that is in their interest to preserve. Moreover, as businesses increasingly favor open-source solutions, it becomes increasingly incumbent on proprietary technologies to defend their continued existence to customers. Is it too fantastic to wonder whether proprietary software might one day become a thing of the past? Speculation aside, I'm interested in learning what businesses building open-source products need to do to win against competitors and even dominate their domain.
            </p>
            <p>
              The big tech companies have all come around to embrace and invest in open source after observing how open-source workloads boosted their cloud profit centers. Some are cynical, but I think it's a victory for open source. Their investments resulted in significant contributions (Google with Android and k8s, Microsoft with LSPs and Typescript, Facebook with React and Llama, etc) and suggest that these companies recognize the importance of open source to the digital economy that is in their interest to preserve. Moreover, as businesses increasingly favor open-source solutions, it becomes increasingly incumbent on proprietary technologies to defend their continued existence to customers. Is it too fantastic to wonder whether proprietary software might one day become a thing of the past? Speculation aside, I'm interested in learning what businesses building open-source products need to do to win against competitors and even dominate their domain.
            </p>
            <p>
              I took up emacs to code, but what it also gave me was a sense of order that helped me regulate behaviors that I previously had trouble controlling. I use it as my email client. My inbox used to be perennially full; it's now always empty and I never get back on e-mails. I clock in and out of every activity with a Pomodoro timer that goes into a daily time log, allowing me to see what I've been working on and for how long. My calendars auto-import into an org file, which is read by a daily agenda. I set up dbus notifications that run 30, 10, 5, and 1 minutes before any scheduled events. I'm never late to anything. I track my habits, and the data is displayed in a Github contribution-like graph. I journal daily, and my entries are organized by dates and tags, and contain hyperlinks to other entries, my knowledge base, and other documents.
            </p>
            <p>
              emacs was the only tool that ever worked for me, and that's because of the control it gives me to modify its behavior. This allowed me to experiment until I found something that worked. It's also easy to make emacs interact with apps both inside and outside of emacs, which means  I can use emacs as a centralized hub that can collect and organize data from other sources into one place. It's a utopian vision of a world where all software is modifiable and interoperable. If this sounds too cheesy, I'll leave you with a completely normal thing an emacs user would say from Neal Stephenson's "In the Beginning was the Command Line:"
            </p>
            <p className="px-32">
              "I use emacs, which might be thought of as a thermonuclear word processor. It is written in Lisp, which is the only computer language that is beautiful. It is colossal, and yet it only edits straight ASCII text files, which is to say, no fonts, no boldface, no underlining... emacs outshines all other editing software in approximately the same way that the noonday sun does the stars. It is not just bigger and brighter; it simply makes everything else vanish."
            </p>
          </div>
     </Container>
  )
}

