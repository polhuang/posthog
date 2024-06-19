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
  title: 'Backmatter',
  description:
    "My sad startup story",
}

export default function Backmatter() {
  return (
    <Container className="mt-16 sm:mt-32">
      <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
        My (mis)adventures in startup
      </h1>
      <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
        <p>
          Here's an account of what I worked on over the last year. Here, I mostly avoid the big picture stuff and talk mostly about the technical work. I'm doing this because while it'd make for terrible responses in an interview setting, it could be useful if you wanted to know more about the nature of the frontend work I was doing last year.
        </p>
        <h2 className="mt-6 text-xl font-bold">
          The problem
            </h2>
        <p>
          As you know, sales reps are responsible for reporting their activities and the status of their opportunities to a CRM. At small companies, this isn't a big deal. But at large companies, it's often a toxic pit of irritation and bitterness for folks at every level. Sales reps hated it because, on top of it being mundane admin work, the CRM admins made it exceptionally difficult to complete.
            </p>
        <p>
          At AWS, an opportunity form had more than 100 fields, though only a small fraction of them were relevant. They were split between tabs, each of which had so many elements the page would lag and sometimes crash. Some fields would spawn a popup to take your input for no apparent reason. Others required you to select from an unsorted dropdown list containing dozens of options. There were some required fields where we were told to make a specific selection, though no one knew what any of it meant. I later discovered these fields were completely untracked - I found the ticket to delete the field still open from years ago. As I described it to VC scouts, filling out these forms felt like filling out a tax return.
        </p>
        <p>
          As a result, sales reps often put off this admin work and missed deadlines. This was so widespread that leadership would notice and badger sales managers on their team-wide poor CRM compliance scores. Warnings didn't seem to help, and frustrated managers would resort to publicly calling out reps who had fallen behind. On every quarterly survey while I was at AWS, improving the CRM UI was the #1 request from sales reps. But they never did anything about it. This was a problem begging to be solved, but no one was interested in solving it themselves.
        </p>
        <p>
          My idea was to build what would essentially be a notes app anchored to a personal CRM that only included data for the user's territory. Creating records and reports would be easy, include only relevant fields, and auto-populate fields it could infer. Moreover, as sales reps typed notes, they could create those records declaratively by entering in a command like "/create a new account called Taco Bell." Additionally, the app would serve as a knowledge base both for customer data and for, say, technical documentation they might need to know. Sales reps could instantly retrieve a definition or FAQ from documentation while on a call, and the app could proactively provide cards with sales and technical guidance when triggered by a keyword. Lastly, the app would sync with SalesForce in the background and submit reports on behalf of the sales rep.
        </p>
      <h2 className="mt-6 text-xl font-bold">
        The editor
      </h2>
      <p>
        I had some experience back in the day building websites using Django and Bootstrap, but I quickly realized that in today's world I needed to build my app in React. So I spent roughly a month learning it.
      </p>
      <p>
        I started to think about how best to deploy the app. SaaS would be easiest, but as my former colleagues had offered to be my first users, I centered my strategy around them. Over-indexing too early on enterprise, as I learned from YC Startup School content, is a common pitfall, but I thought I could sidestep this by building the product around a PLG strategy. After all, sales reps at many companies (including AWS) could make small individual software purchases or subscriptions without requesting approval. The challenge was that there was no way in hell they would allow customer data to be stored externally. So in the end, I resolved to build both a SaaS version, which I hosted on AWS, and a local/privacy-first version on an Electron app. This would later prove to be a huge pain in the ass.
      </p>
      <p>
        It was easy enough to migrate, since I'd already spent a lot of time with it on the workaround. I started to have second thoughts about ProseMirror, though, as I continued to work on it. ProseMirror serializes its document model into JSON format. My plan was to parse this into plaintext, concatenate, test against a series of RegEx patterns, then replace the matches with HTML elements or trigger a hook that performs an external side effect like retrieving a technical info card. Because of ProseMirror's structured document model, all elements within the editor need to strictly conform to its schema, and ProseMirror doesn't allow you to imperatively apply styling changes or add DOM elements.
      </p>
      <p>
        I was at a loss for a while and even started thinking about how I'd build an editor from scratch. Then I looked into ProseMirror's sister library CodeMirror, another widely used text editor library designed for code (used by iPython, Replit, Github, Obsidian, and many other code and Markdown editors). Unlike ProseMirror, CodeMirror has a flat document structure, which made it easier for me to parse text, format it, and add DOM elements I can control from outside the editor. Moreover, CodeMirror had its own text parsing and decoration (through syntax highlighting) modules that would save me from writing my own. This ended up being the right choice.
      </p>
      <h2 className="mt-6 text-xl font-bold">
        Databases, Electron IPC, state management, and sleepless nights
      </h2>
      <p>
      For the SaaS version, I kept it simple and used Convex as my BaaS. I set up the database, added query and mutation functions, and plugged them into the editor, and everything came alive. As I typed into the editor, the database updated in real time. If I created an account or opportunity, it would immediately show up in the navigation bar. It was incredibly easy. Unfortunately, it was the only thing that felt easy throughout the entire project.
      </p>
      <p>
        Setting up a database for the Electron version was not so easy. It needed to be local, so I chose to go with SQLite. The SQLite Node module is a native dependency and didn't play well with Electron and failed due to conflicting Node versions. I eventually figured out I needed to use bettersqlite3, a package that rebuilds native dependencies against the system version of Node. Now I just needed to connect it with the frontend.
      </p>
      <p>
I thought I'd more or less grasped how to use async functions in JS. I had no problem fetching/posting data from an external API. And I was already successfully managing state through several layers of React components on the SaaS app. And yet for some reason, I could not figure out for the life of me how to replicate it consistently on Electron, and I haven't to this day - since sometimes it worked and sometimes it didn't. Race conditions were a recurring problem for half a year, driving me crazy as I tried to console-log my way out of the problem. One issue was that even though I made the SaaS app work, I was not confident in my understanding of how state management works in React, which meant that the race conditions could be either an IPC helper function problem or a state management problem.
      </p>
      <p>
        Additionally, the codebases for the Electron version was now diverging substantially from the SaaS version as a result of Electron's unique architecture, something I hadn't anticipated. Now, after building each new feature in one version, I'd have to port it to the other, which wasn't easy and became more and more labor-intensive.
      </p>
        <h2 className="mt-6 text-xl font-bold">
          What the heck is a Shadow DOM?
        </h2>
        <p>
The biggest divergence between the Electron and SaaS versions of the app was how it would handle syncing with CRMs. Based on customer research I conducted, sales reps at companies that allowed storing data with SaaS companies also had API integration access, allowing them to hook their CRM to auxiliary tools, while the other companies tended to allow neither. This aligns with common sense, but I'd wanted to check.
        </p>
        <p>
          Building an API integration would be relatively trivial, but for the Electron version, how else could you get data to Salesforce? The speculative idea I'd been tentatively keeping in my head was to take the password manager approach of filling out forms by using JS querySelectors. It wouldn't be purely automatic, but it could at least populate all the data entry, which is still a significant pain points.
        </p>
        <p>
          When I started probing how I'd build this, I signed up for a Salesforce demo so I could identify the DOM elements I'd need to select. It didn't work. Why not?? It worked when I'd tested it earlier on a form from some other website.
        </p>
        <p>
          It turns out that Salesforce uses what is called a shadow DOM. From what I understand, it's some sort of container that isolates the DOM structure. The real(?) DOM remains hidden: scripts defined outside of the shadow DOM cannot modify or even select elements from it.
        </p>
        <p>
There was a glimmer of hope. 1password had apparently managed to reverse-engineered its way into cracking into shadow DOMs to auto-fill user credentials. There were also apparently methods of automating shadow DOM elements.
        </p>
        <p>
But I felt (rightly so) defeated and way in over my head. You'd think I'd be used to this by that point, but in fact my over-confidence sustained me for quite a long time! This was the most critical piece of the software, which would have no value if it could not find someway to get the data into Salesforce.
        </p>
        <p>
          I decided to put the coding on hold and instead work on finding a technical cofounder.
        </p>
        <h2 className="mt-6 text-xl font-bold">
          GPT enters the chat
        </h2>
        <p>
          This is close to where the story ends. And it should've been where it ended. I started taking a completely different direction, which is in itself fine, but not when you don't have a plan. I didn't have a plan.
        </p>
        <p>
          Now to step back a bit, I started conceptualizing Backmatter toward the end of 2022, before OpenAI released ChatGPT. I had an in-grained bias against AI based on my experience at AWS working with at least a dozen or so AI startups, many of whom stalled and faced serious headwinds against their business.
        </p>
        <p>
My interpretation was that their solutions were over-engineered for the problems they were solving, and the computing costs required to power them created a unit economics problem they could never overcome.
        </p>
        <p>
Moreover, my entire approach had been to focus on the unaddressed market of enterprise businesses with strict customer data privacy controls. There was already a crowded field of SaaS sales enablement solutions and no small number of new LLM-powered solutions. None of them were working on a local- or privacy-first solution that these businesses could use.
        </p>
        <p>
Did I change my thesis? No, not really. Looking back, it's now more clear that deep down I knew I was stuck, progressing at a rate that was way too slow for there to be any future. But I really didn't want to quit. I mean REALLY. I wanted so much not to quit that I'd do anything to keep going, including inventing a reason to go on - which is what I did.
        </p>
        <p>
          What I told myself at the time was: I should at least look into LLMs, right? In case I missed anything. Wouldn't hurt.
        </p>
        <p>
So I did some homework and found out roughly what I needed to do. There's the OpenAI API. Dead simple to use. Moving on. To add "context awareness", you can simply append it to your prompt if fits the context window.z If not, you need a RAG. This is what I learned. First, you chunk the context up into smaller strings. Then you convert those strings, along with the prompt, into vectors, sort of like multi-dimensional hashing. You then search through the vectors and take out the ones most similar to the prompt vector. This is called similarity search (which has actually been around for a long time), and it's facilitated by a database that's optimized for vector operations. You then send all the vectors off to the LLM, in effect concatenating the chunks to the prompt. (I don't know what I was expecting, but I was truly surprised how crudely simple "context awareness" was.)
        </p>
        <p>
There are libraries that abstract these tasks, the most popular of which is Langchain, so that you don't have to understand how exactly the pipeline works. All in all, it took less than a day to add a context-aware AI assistant into Backmatter. (It took a bit longer to figure out how to do the same with Llama2 running locally, but responses were comically slow on a laptop and asking customers to download gigs of data seemed like a non-starter.)
        </p>
        <p>
It was a powerful addition. It could instantly perform tasks I'd spent hours or days to program. And it brought orders of magnitudes more functionality to the app than the app itself. But then I'd always known it would be. The whole exercise was simply moving ChatGPT from one place to another. No matter where you put it, it's still ChatGPT. Of course it was going to be powerful. And this made me feel a bit sad, a bit foolish inside.
        </p>
        <h2 className="mt-6 text-xl font-bold">
          Moving on
        </h2>
        <p>
          I'm not sure I had any intent of measuring what I was building against against AI when I first embarked on my side quest, but that's what ultimately happened. If it takes less than a day to build an LLM-powered app that solves most of what I set out to solve, to me it's for all intents and purposes been solved.
        </p>
        <p>
As for my earlier hypothesis that enterprise businesses wouldn't buy AI solutions out of data privacy concerns, I had completely missed the point. Even if it were true, it would hardly stop businesses from finding a way to adopt AI. And meanwhile AI is finding a way to them as well. Open-source models are getting close to parity with the big proprietary foundation models. It's not hard to see a future in which it becomes a universal practice to host and maintain private open-source models. These models could serve even third-party solutions, provided they're self-hosted. And with mass-market PC AI chips on the horizon, even fewer people will be forced to make a choice between privacy and AI.
        </p>
        <p>
          To be clear, none of this has anything to do with why my attempt failed. It failed because I was completely in over my head. It might well have been doomed from the start. Imagine someone at a marathon who tells you, no, he hasn't trained for the marathon, but it's okay, he'll just train as it goes, on the fly. Don't worry about it. He's used to winging it. Things always work out.
        </p>
        <p>
          So no, AI didn't kill my startup. But it did kill the conviction I had in it.
        </p>
        <h2 className="mt-6 text-xl font-bold">
          Post-mortem
        </h2>
        <p>
          It's surprising to me looking back how just long I was able to sustain this kind of delusional optimism. I don't even mean that in a pejorative way. There were very few days that felt like a victory. In fact the vast majority were setbacks. But it didn't feel that way at the time, or when it did, I could sleep it off and get back to work the next morning. The early setbacks should have been catastrophic: my co-founder leaving and getting rejected by YC. Those would have been both easy and smart times to give up, and I wonder why I didn't.
        </p>
        <p>
          My current feeling is that the optimism was a combination of two factor. The first is that, having never done this before, I didn't have any frame of reference to determine whether I had a chance at succeeding or not. The second factor was that my conviction was in fact a choice, albeit one I made earlier, that came from the commitment I had to solving the problem. Whether I could succeed was no longer a question I asked myself; instead, it was - how (else) can I get this done?
        </p>
        <p>
          And though it was meant as a time limit, the one-year period my wife and I had agreed upon always felt more like a deadline to me. Throwing in the towel only a few months in would have meant I hadn't even given it a real shot, let alone my best shot.
        </p>
        <p>
        So did I give it my best shot?
        </p>
        <p>
          No. Being accountable only to myself meant there was no one but myself to keep in check what I spent time on and how much to spend on them. I never bothered to give myself deadlines, and I had no intermediate objectives set besides the end goal. It wasn't a matter of working hard. I worked long hours, which might even have helped me justify my refusal to get organized. Coding, especially debugging, exacerbated this problem for me. It's easy to get stuck on a problem for hours or days. Working in isolation makes it even more disorienting. But because I didn't operate on any kind of timeline, I never considered the opportunity cost. I'd go as far as to call it willful ignorance. What was I trying to avoid? The feeling of being behind haunted me from the start. Not having deadlines meant not having to face that feeling head-on. Yet at the start, it was all imagined, since I naturally had no objectives to be behind on. At some point though, the problem stopped being imaginary and became real.
        </p>
      </div>
    </Container>
  )
}
