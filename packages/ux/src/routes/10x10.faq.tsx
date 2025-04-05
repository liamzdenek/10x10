import { createFileRoute } from '@tanstack/react-router';
import React, { ReactNode } from 'react';
import { Tweet } from 'react-tweet';
import FAQComponent from '../app/components/faq/FAQ';

export const Route = createFileRoute('/10x10/faq')({
  component: FAQPage,
  head: () => ({
    meta: [
      {
        title: 'FAQ | 10x10 Portfolio',
      },
      {
        name: 'description',
        content: 'Frequently asked questions about the 10x10 Portfolio project.'
      },
      {
        property: 'og:title',
        content: 'FAQ | 10x10 Portfolio'
      },
      {
        property: 'og:description',
        content: 'Frequently asked questions about the 10x10 Portfolio project.'
      },
      {
        property: 'og:type',
        content: 'website'
      }
    ]
  })
});

const FAQ_DATA: Array<{question: string, answer: string | ReactNode}> = [
  {
    question: "Do you consider this challenge to be a success?",
    answer: "Unequivocally, yes. I think even one response would have been a success. I'm very happy with the result of two responses."
  },
  {
    question: "What life experiences led you to thinking that this might work at all?",
    answer: <div>
      <p>I think it took a few factors all happening at similar times:</p>
      <ul>
        <li>My startup imploded around November last year, and it caused me to challenge a lot of assumptions I had about how the world worked.</li>
        <li>Lots of Great—not just "Good"—Software Engineers are looking for work right now</li>
        <li>I'm targeting highly competitive Engineering roles</li>
        <li>My call-back rate on cold resumes + referrals was about 2% (1 in 50), which isn't getting me a role anytime soon.</li>
      </ul>
      <p>It felt like I was getting outcompeted. So my options were:</p>
      <ul>
        <li>Lower my standards, and apply to less competitive roles</li>
        <li>Scale up the applications sent—50 per week should be doable with AI assistance, and should produce a role in a few months. But I'm not sure if there's even enough desirable roles to do this, it's kind of undifferentiated, and spamming recruiters is a shitty thing to do.</li>
        <li>Wait for the market (lol)</li>
        <li>Differentiate myself in a way that cannot be ignored.</li>
      </ul>
      <p>So, how do I differentiate myself? Well, I wasn't really sure until I saw this thread on twitter. Gabriel immediately resonated with me. I decided to do a more personal twist, but big initial credit goes to him.</p>
      <Tweet id="1898566138352820561" />
    </div>
  },
  {
    question: "Why did you pick these particular companies? / What makes for a good company to do a project for?",
    answer: <div>
      <p>I picked companies where I thought, there's no chance that this company would call me back right now on a cold resume.</p>
      <p>Not that I would be rejected, but where I know the candidate pool is going to have {'>'}50 candidates with better pedigree, better work history, better projects, etc.</p>
      <p>I definitely learned over time, and there's some criteria I think I'd add in hindsight:</p>
      <ul>
        <li>Your skills offer some rare opportunity in a way that other candidates can't.</li>
        <li>The highest levels of the company are motivated to get the best people into solving a problem you demonstrate expertise in.</li>
        <li>The company is signalling some intent to hire people like you. Maybe through job reqs, maybe in other ways.</li>
      </ul>
    </div>
  },
  {
    question: "Why did you publish this? / What if you don't accept an offer?",
    answer: <div>
      <p>If I fail to secure an offer from any of the companies that got back to me, a portfolio is a reusable artifact to differentiate myself for more roles.</p>
      <p>If I accept an offer, this becomes a recruiting tool. The people that this resonates with are people that I'd probably like to work with.</p>
      <p>Plus, I used to teach at a coding bootcamp. I think there's a group of people that would find a clearly laid out and mostly-unabridged version of this strategy useful in their own exercises.</p>
    </div>
  },
  {
    question: "Who are the right people to contact?",
    answer: <div>
      <p>"straight to managers, ceo, ppl with incentive for the company to go well" - @GabrielPeters4 on Twitter</p>
      <p>I think Gabriel hit the nail on the head, but I will add: I think maybe Gabriel has a different experience from me, since he's applying to truly exceptional organizations (OpenAI, Midjourney, etc). However, I think in high-performing-but-not-exceptional organizations, the average manager sees their job as a 9-to-5 and isn't actually strongly incentive-aligned.</p>
      <p>But, clearly, finding the highly incentive-aligned people is critical.</p>
      <p>The anecdata: the two responses I received were both from C-suite-plus, despite trying HMs and VPs.</p>
    </div>
  },
  {
    question: "Why didn't you send a resume on your emails?",
    answer: <div>
      <p>If my resume didn't work for a recruiter, why would it work for someone whose got even less spare time?</p>
      <p>I hedged at first by adding a LinkedIn link to my emails. I removed that later. Keep the focus on what matters, the differentiation.</p>
    </div>
  },
  {
    question: "Why do your emails change over time?",
    answer: <div>
      <p>I think the key learning here is that you want to focus on what matters, and remove all unnecessary language.</p>
      <p>My friend had the key insight (at the end of day 4) that I should try writing like Mark Zuckerberg from @TechEmails on twitter.</p>
      <p>You can see the effect when I put that idea to use on day 5. I think communication has a very high skill ceiling in general, and if you want to catch an executive's attention, then I think it makes sense to communicate like your email belongs in an executive's inbox.</p>
      <p>I also think, in my early emails, I'm a bit ambiguous/bury the lede about what I want from the executive in particular. I think it's better to just say it. "Forward me to your recruiting team." You're not playing around, so make your ask clear.</p>
    </div>
  },
  /*
  {
    question: "What do you think the essential pieces are for this strategy to work?",
    answer: <div></div>
  },
  */
  {
    question: "How did you figure out what projects to make?",
    answer: <div>
      <p>I used public filings, blog posts, executive media appearances, and open job listings to identify areas of risk or opportunity. I used LLMs and real life friends to help me brainstorm on different ideas. I picked the idea that I thought was compelling.</p>
      <p>I filtered/modified those ideas to fit my experience.</p>
      <p>Really, the end goal is that the person you send this to thinks that you can do what they need. If an idea feels right, it's probably right, even if you found it a different way.</p>
    </div>
  },
  {
    question: "What was the average day structured like?",
    answer: <div>
      <ol>
        <li>8:00 to 9:30am: Brainstorming / Finding a role / Idea selection</li>
        <li>9:30 to 10:30am: Project plan/scoping—no code yet, just system diagrams, ux mockups, etc</li>
        <li>10:30am to 1:00pm: Blast out a V1 of all the pieces using Claude 3.7</li>
        <li>1:00 to 3:00pm: Integrate and deploy all the pieces</li>
        <li>3:00 to 4:00pm: Identify the incentive-aligned leaders, write a demo script</li>
        <li>4:00 to 5:00pm: Record and upload a 5 minute demo video, write and send the email</li>
      </ol>
    </div>
  },
  {
    question: "Did you vibecode all of this?",
    answer: <div>
      <p>If vibecoding means that I used an LLM to write the overwhelming majority of the code, then yes.</p>
      <p>If vibecoding means that I was blasting good tunes the whole day, then yes.</p>
      <p>If vibecoding means that I abdicated my engineering expertise and let the machine figure out everything, then that is certainly <b>not</b> what I did.</p>
      <p>I did leverage LLMs to multiply my impact. No way could I have delivered this much code in one day for a project without this technology.</p>
      <p>Similarly, if I didn't know what I was doing, I couldn't have kept the LLM on-task reliably, I couldn't have defined procedures for it to iteratively solve deployment issues, etc.</p>
      <p>I think that's the critical demonstration here. I'm demonstrating expert-level proficiency over both cutting-edge LLMs and Software Engineering.</p>
    </div>
  },
  {
    question: "Are you worried that publishing will make this strategy less effective?",
    answer: <div>
      <p>No.</p>
      <p>I want this behavior to be normalized. I think this strategy will work better if corporate leaders and engineering ICs both understand and see this pattern regularly.</p>
      <p>I'm not worried that there will be a glut of individuals doing this, reducing the noise-to-signal, because this is a high-intentionality act. If sending a low-effort resume remains an option, then I think a lot of people will take it, even if it doesn't really work anymore.</p>
    </div>
  },
  {
    question: "You did this back in 2025, AI is way better in $CurrentYear, I can do this in five minutes.",
    answer: <div>
      <p>Ok, so figure out how much you need to do to fill eight hours. Make sure it's barely accomplishable. Figure out the line where people without your specific skills can't do it in one day, and then do more than that.</p>
    </div>
  },
  {
    question: "Any AI tips?",
    answer: <div>
      <p>Use the best. Your time is worth way more than what it'll cost.</p>
      <p>You should have the whole project defined before you write any code. Think of what needs to go into a Design Doc  -- systems diagrams, deployment strategy, technology choice, etc.</p>
      <p>Claude 3.7 is pretty good at making ASCII UI mockups, and they're faster for me to review than a list of UI requirements.</p>
    </div>
  },
  {
    question: "What does it mean for someone to be 'incentive-aligned?'",
    answer: <div>
      <p>If they hire you, and you do a good job, they get paid or promoted. Or both.</p>
      <p>That's maybe too reductionist, but it's a start.</p>
    </div>
  },
  {
    question: "Did every job you apply to have a corresponding job listing?",
    answer: <div>
      <p>No. Most did, but a few didn't.</p>
      <p>Maybe, that's a risk for actually landing a role, but don't think it's not an option if you don't want to try.</p>
      <p>If you have enough signal that they're looking for people like you, you don't need a job listing.</p>
      <p>Sourcegraph did not have an open role that was a good fit for me, but I did get a reply back. I read a blog post from the leadership at the company that indicated that we were aligned on vision. Even if they haven't put out a req yet, people are always looking for others that share their vision.</p>
    </div>
  },
  {
    question: "I want to try this strategy but I don't want to annoy powerful people.",
    answer: <div>
      <p>Intelligence is a rare commodity, but I find that courage is both more deisrable and more rare.</p>
      <p>These people have a lot of problems to solve, and they know they need a lot of people on their team to effectively solve them.</p>
      <p>When you say hey, I think I've got what it takes to solve your problems, you're an opportunity to meet their goals.</p>
      <p>Not only are you not being an annoyance, you're going above & beyond by taking the initiative to find them, instead of making them find you.</p>
      <p></p>
    </div>
  },
  {
    question: "I'm not a software engineer, and I want to do this, what should I do?",
    answer: <div>
      <p>Sadly, I don't have a very good answer for you.</p>
      <p>If you think of say, a Grant Writer seeking a role at a non-profit... copying my strategy probably won't work. It's the scope and the ability to keep the LLM on-task that's impressive. If you shovel 100 pages of AI slop grant applications in a day, I don't think that makes you an impressive grant writer, it makes you a risk to the institution.</p>
      <p>I think the type of engineering I do (where nobody dies if my code is bad) is extremely tolerant of AI slop code. I don't destroy my personal reputation if some of my code doesn't work—we just fix it, set up systems that catch these issues for the future, and move on.</p>
      <p>I think the best I can offer you is some criteria I think would make for a good project:</p>
      <ol>
        <li>Clearly demonstrates your exceptional skill</li>
        <li>Clearly demonstrates your ability to stay on the cutting edge of your profession</li>
        <li>Clearly demonstrates your understanding of the institution's problems</li>
        <li>Clearly demonstrates that you can solve the institution's problems</li>
        <li>Is communicated to a person who is incentive-aligned to solve that problem at the institution.</li>
        <li>Maybe more criteria, I'm not sure.</li>
      </ol>
    </div>
  }
];

function FAQPage() {
  return <FAQComponent faqData={FAQ_DATA} />;
}