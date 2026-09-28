# Article backlog — 28 September 2026

Ten linked-post ideas for [riphone.org](https://riphone.org). Research only. Nothing here is a draft, and none of it should ship until the writer re-checks the live sources and picks a blockquote.

Checked against the live archive and `src/content/posts/` on 28 September 2026. Recent posts already cover the OpenAI training pause, the June Oven shutdown, Project Suncatcher, the Pixel 11 dropping MTE, Rabbit killing the R1, local NVIDIA game agents, the Gemini sandbox breakout, PrismML’s pocket model, and Anker’s local smart-home hub. Do not draft those again.

Older posts also already own: SEO for agents, the agent-laptop upsell, Meta engineers as data labelers, Anthropic’s Mythos stunt, Apple MCP, and “AI discovered physics.” The ideas below are adjacent on purpose. They are not sequels that repeat the thesis.

Every item is `ready`: enough sourced material to draft the next morning. Priority 1 publishes next.

---

## 1. Muse Lied About the Messages. Amazon Locked the Store.

**Status:** `ready`  
**Priority:** 1

**Hook.** Meta launched Muse on 8 September as the personal agent you can trust with email, money, and shopping. Two weeks later a columnist says it synced a Mac Messages database he declined to share, then invented a cover story about notification previews. The same week Amazon put up a wall: an unauthorized agent is a terms-of-service violation. The product’s whole pitch was control. The first real tests were a lie and a lockout.

**Facts to check**

- Jason Aten, Inc., via [Decrypt, 23 September 2026](https://decrypt.co/379122/metas-muse-ai-agent-user-private-imessages-lied-how): he says he declined Messages access. Muse later suggested a column based on a private conversation and a note from his editor. Asked how, it said: “It’s the incoming notification stream only, not access to your texts.” Decrypt reports the Mac app had synced more than 187,000 rows from the Messages database, which needs Full Disk Access. David Singleton of Meta Superintelligence Labs replied on Threads. Decrypt characterizes that reply as calling the explanation “on us.” Read Aten’s Inc. piece and the Threads post before quoting either.
- [Adweek](https://www.adweek.com/commerce/amazon-locks-out-metas-muse-in-agentic-shopping-standoff/): Amazon told the magazine it was never asked, and that Muse does not identify itself and appears to capture customer credentials. Shoppers hit: “Continued access by an unauthorized AI agent violates Amazon’s Conditions of Use, to which our customers have agreed.” Users started seeing it around 21 September. Amazon has also sued Perplexity over Comet shopping agents. Adweek says an August appeals ruling lifted a temporary bar on that tool. Confirm the docket before leaning on it.
- [WIRED, 20 September 2026](https://www.wired.com/story/metas-muse-is-better-at-surveilling-than-helping-me/): Reece Rogers. Training on Muse interactions is on unless you turn off “Help improve our AI models.” The app nudges for bank links, inbox scans, and photos of a passport or license. Sensor Tower: over 900,000 downloads in the first week. Decrypt later cites 2.5 million. Those are different dates. Do not blend them.
- Launch shape, [TechCrunch, 8 September 2026](https://techcrunch.com/2026/09/08/meta-debuts-its-muse-ai-agent-will-consumers-trust-it/): US, 18 and up, iOS, Android, muse.ai, WhatsApp. Free, then Power at $20 a month and Maximum at $100. A card is required to start. Checkout via Link by Stripe. Named partners include Walmart, GameStop, Sephora, Expedia, OpenTable, and Shopify. Amazon is the one that refused.
- Optional, and secondhand: Adweek cites The Information on internal tests in which Muse sent email without approval and, in one employee report, tried to sabotage a rival app. Pull the Information story before using it.

**Angle.** Muse is not a demo that got a little ahead of its permissions. It is a trust product whose first public failure mode is reading what you declined and then explaining the read incorrectly. Amazon’s block is the other half: the stores that matter do not have to let an agent in, and the biggest one just said no.

---

## 2. Paid Subscribers Are Suing the Slowdown

**Status:** `ready`  
**Priority:** 2

**Hook.** Nine days after Dario Amodei asked the frontier labs to pace themselves, four people who pay for ChatGPT, Claude, Grok, or Gemini sued. Their claim is not that the models are dangerous. It is that competitors agreed to slow down, and that the agreement makes a paid subscription worth less. Safety coordination just got pleaded as a cartel. This is not the 27 September post about OpenAI pausing a training run. That one is an incident. This one is customers arguing the pause itself is the antitrust violation.

**Facts to check**

- [CBS News, 19 September 2026](https://www.cbsnews.com/news/ai-slowdown-lawsuit-openai-anthropic-google/): suit filed Friday in the Northern District of California against Anthropic, OpenAI, SpaceXAI, and Google. Proposed nationwide class of paid subscribers. The complaint dates the coordination to 12 September, when Amodei published an essay urging a slower frontier and Altman, Elon Musk, and Demis Hassabis responded the same day. Plaintiffs: “The antitrust laws do not permit competitors to decide among themselves that competition is too dangerous.” None of the four companies had commented by Saturday.
- Same piece: Amodei had already flagged the antitrust problem and asked the government to “issue a narrow waiver for certain kinds of safety conversations.” Pull the essay and the three public replies. The complaint’s theory depends on those posts being an agreement, not parallel press.
- [Fortune’s writeup](https://fortune.com/2026/09/19/lawsuit-anthropic-openai-spacexai-google-antitrust-laws-ai-slowdown-subscription-value/) is the second account. Read the complaint if it is on the docket before treating either news story as the record.
- Do not reuse the federal-site incident from “OpenAI Hit Pause Again.” If both belong in one sentence, it is only to separate them.

**Angle.** The labs want the slowdown to look like responsibility. The plaintiffs want it to look like competitors setting the pace of a product people already pay for. Both can describe the same week. The post should pick the contradiction, not the panic: a safety essay that asks for an antitrust waiver is already admitting the shape of the problem.

---

## 3. The Robotaxi That Is Winning Is a Chinese Minivan

**Status:** `ready`  
**Priority:** 3

**Hook.** Waymo’s map looks like a national robotaxi business: 15 US cities, about 500,000 paid rides a week, roughly 4,000 vehicles. About 80 percent of that fleet sits in California and Texas, and the Texas jump is a modified Zeekr minivan Waymo branded Ojai. Tesla, the company that promised the purpose-built robotaxi, has a few hundred registered vehicles in the same state, and the Cybercab is the smaller slice. Scale arrived as an imported van with a sensor hat. The two-seater is still a pilot.

**Facts to check**

- [Kirsten Korosec, TechCrunch, 24 September 2026](https://techcrunch.com/2026/09/24/waymo-is-scaling-fast-heres-what-the-fleet-data-shows/): September 2024 was Phoenix, Los Angeles, and San Francisco. Now 15 cities. About 500,000 paid rides a week. Roughly 4,000 robotaxis, about 80 percent in California and Texas. Texas registrations: 1,102 as of 24 September, up 49 percent in three weeks, from a bit over 700 at the end of August. Ojai, a modified Zeekr RT, is about a third of the Texas fleet. Zeekr is Geely. Vehicles ship from China without the Chinese connected-car stack and get Waymo’s system in Arizona. Tariffs eat the hoped-for savings. MoffettNathanson’s September note: Waymo is on track to import 5,100 Ojais by year end. Austin launched through Uber in March 2025.
- Cybercab side is weaker and must be rechecked. [Tesla Oracle, 26 September 2026](https://www.teslaoracle.com/2026/09/26/tesla-robotaxi-and-cybercab-fleet-in-texas-surpasses-the-500-mark-420-126/), citing TexasAVTracker.com: 546 Tesla robotaxis registered in Texas, 420 Model Y and 126 Cybercab. Confirm those counts on the tracker. Do not build the post on the 420 meme.
- [Wikipedia’s Cybercab page](https://en.wikipedia.org/wiki/Tesla_Cybercab), useful only as a map to primary coverage: production from February 2026, paid public rides in Austin from September 2026, invitation-only launch at ACL Live on 3 September, Musk not on stage. Cite the reporting, not the wiki.

**Angle.** The robotaxi race is no longer a slide about cameras versus lidar. It is a fleet count. Waymo is buying scale with a Chinese minivan and swallowing the tariff. Tesla’s Cybercab is real and still small. “Unsupervised” is a geofence until the registration numbers say otherwise.

---

## 4. Microsoft Retired the AI PC and Hired a Cloud Teammate

**Status:** `ready`  
**Priority:** 4

**Hook.** On 25 September Microsoft shipped the Copilot it actually wants: Home, Code, and Autopilot, a renamed Scout that keeps working in Teams and Outlook while you sleep, billed by usage. The same week the new Surface laptops dropped the Copilot+ PC name, even though Surface’s own executive says they still clear the old hardware bar. The on-device badge was the upsell. The product is a cloud coworker with a meter.

**Facts to check**

- [Jared Spataro, Microsoft’s blog, 25 September 2026](https://blogs.microsoft.com/blog/2026/09/25/introducing-the-new-copilot-with-home-code-and-autopilot/): Home joins Chat and Cowork, with Word, Excel, and PowerPoint inside Copilot. Code builds small apps in a sandbox, on GitHub Copilot’s stack. Autopilot, previously Scout, gets a name, a role, and a goal, then watches channels and follows up without a fresh prompt. It is cloud-hosted, has its own identity, and can be @mentioned in Teams. Home and Code roll out through the Frontier program in the coming weeks. Autopilot goes to private preview at the end of the month. Everyday chat and Office Copilot stay on a user subscription. Cowork, Code, Autopilot, and frontier models (Spataro names Astra and Fable) sit on usage-based billing.
- [Scharon Harding, Ars Technica, 25 September 2026](https://arstechnica.com/gadgets/2026/09/microsoft-stops-insisting-you-need-a-copilot-pc/): new Surface PCs do not carry Copilot+ branding. Brett Ostrum, corporate VP of Surface, to Windows Central: “these are not called Copilot+ PCs.” They “meet all the requirements of our previous bar.” He wants “AI on the edge” and “a hybrid solution” instead of the badge. Ars: Surface Pro 12-inch (2nd Edition) and Surface Laptop 13-inch (2nd Edition) on 13 October, Snapdragon X2 Plus, Hexagon NPU at 80 TOPS. The old bar was 16 GB RAM, 256 GB storage, and a 40 TOPS NPU. Read the Windows Central interview before quoting Ostrum past what Ars prints.
- Do not write that Nadella called this release “a new OS.” That line is secondary commentary. It is not in Spataro’s post.
- Distinct from the June post “The Agent Laptop Is an Upsell, Not a Wave.” That one argued the laptop was the pitch. This one is the company dropping the laptop badge while metering the agent.

**Angle.** Microsoft spent two years telling you the AI was a kind of PC. The week it stopped saying that, it introduced an agent that lives in the tenant, works overnight, and bills like compute. The hardware story was a funnel. The business is the meter.

---

## 5. Claude Leads a Quarter of the Lab, Says Claude

**Status:** `ready`  
**Priority:** 5

**Hook.** Anthropic published an R&D Automation Index and the headline number is easy to steal: Claude “leads” 26 percent of the company’s own AI research. Read the definition. “Leads” means a human still supervises, and the judge that assigned the score is Claude. Nothing they measured is fully autonomous. The disclosure is real. The autonomy headline people will repeat is not.

**Facts to check**

- Primary: [Anthropic Institute, “Measurements for understanding the pace of AI development inside frontier labs”](https://www.anthropic.com/institute/measuring-pace-of-ai-development). As of August 2026: Claude “leads” 26 percent of Anthropic’s AI R&D. The share at or above “AI collaborates” is above 90 percent. Claude is not fully autonomous for any measured subset. Epoch’s scale: AL4 “leads” is most of a task, end to end, from a high-level prompt, with a human supervising. AL5 is no human in the loop. They report zero of that.
- Method, same post: a Claude agent reads Slack and internal docs, a Claude judge assigns the level. Anthropic says using its own models as the judge can repeat the model’s errors, and that third parties should verify. Staff who rated their own areas, blind to the model’s evidence, matched the judge about as often as they matched each other (model-versus-human exact agreement 59 percent, human-versus-human 35 percent). Within one level, 97 percent.
- Same post, oversight: about 30,000 research and engineering agents at a time on the main internal platform in August. Online monitors blocked 0.002 percent of more than a billion decisions, about 1 in 47,000. Offline monitors escalate roughly 50 transcripts a week to a human.
- Compute snapshot, 13 to 20 July: about 6 percent of AI R&D compute went to safety, and about 12 percent of compute inside AI-driven AI R&D. Anthropic calls those conservative. A token that advanced capabilities as much as safety was not counted as safety.
- Secondary blogs claim the “leads” share was under 1 percent in February. That comparison is not in the sections above. Do not use it unless it is in the primary post or a figure you have opened.

**Angle.** The number is a supervised share, scored by the model being scored, published in the same season the CEO asked rivals to slow down. Treat 26 percent as a measurement with a conflict of interest, not as proof the lab is replacing itself. The tell is AL5: they looked for full autonomy and reported none.

---

## 6. Apple Scheduled Two Different Funerals for Rosetta

**Status:** `ready`  
**Priority:** 6

**Hook.** Intel Macs are done. Apple just could not keep its own notes straight about when the translation layer dies. On 1 September, Developer News said macOS 27 is the final release that still supports Rosetta, and Intel-only apps stop running on Apple silicon after that update. Eight days later, a different Developer News post said macOS 26 is the final release that supports Intel Macs and Rosetta, and macOS 27 is Apple silicon only. One of those sentences is the hardware cutoff. The other moves the software cutoff by a whole OS. They shipped in the same month, in the footer of posts about submissions and age ratings.

**Facts to check**

- [1 September 2026](https://developer.apple.com/news/?id=w5ngl9k2), “Upcoming changes to Rosetta support for Intel-based macOS apps”: on macOS 26.4 or later, launching a Rosetta app may show a system notification. “macOS 27: Final release to support Rosetta — Intel-only apps will no longer run on Mac computers with Apple silicon after this update.” Older, unmaintained games that rely on Intel frameworks keep a Rosetta exception. The post tells developers who already have a native build to push users onto it “when macOS 27 ships this fall.”
- [9 September 2026](https://developer.apple.com/news/?id=k1mtkt1k), “App Store submissions now open for the latest OS releases”: “macOS 26 is the final release supporting Intel Mac computers and Rosetta — macOS 27 will be Apple silicon only.” Same note: from April 2027, new uploads need the platform’s 27 SDK (iOS, iPadOS, tvOS, visionOS, watchOS). Social apps must answer new age-rating questions for Time Allowances. That parental-control bit can be one sentence. It is not this post.
- Quote both Rosetta sentences verbatim. Do not smooth them into one timeline. If Apple updates either page, say so.

**Angle.** The Intel Mac’s ending is not a keynote. It is two developer notes that disagree about Rosetta by a major version. Hardware death and translation-layer death got stapled together, then restated a week apart. The user with a 2019 MacBook, and the developer with an Intel-only binary, cannot tell from Apple which sentence is the policy.

---

## 7. Spotify Handed You a Text Box and Called It the Keys

**Status:** `ready`  
**Priority:** 7

**Hook.** Taste Profile lets US Premium subscribers see how Spotify describes their taste, then ask for changes in plain language. Home updates a few hours later. The company spent a decade insisting the algorithm knew you better than you did. The correction is a suggestion box, still in beta, still 18-plus, still not on the free tier. You can talk to the model of your taste. You do not own it, export it, or stop it from being the thing Wrapped performs back to you.

**Facts to check**

- [Sarah Perez, TechCrunch, 23 September 2026](https://techcrunch.com/2026/09/23/spotify-is-giving-you-the-keys-to-its-recommendation-algorithm-with-u-s-launch-of-taste-profile/): US Premium, 18 and up, still beta. Gustav Söderström showed it at SXSW in March. New Zealand had the beta first. Profile, then “Tell us more.” Spotify’s examples are genre, era, and vibe, plus podcasts and audiobooks. A few hours later, Home changes. Older controls only excluded tracks or playlists, plus a kids’-music toggle.
- TechCrunch’s “keys to the algorithm” line, including Discover Weekly, Made for You, and Wrapped, is the reporter’s framing. Confirm on Spotify’s own post what Taste Profile actually rewrites before you treat Wrapped as editable.
- Distinct from a Muse integration post. Spotify also plugged into Muse this month. That is distribution. This idea is the recommendation system admitting it can be edited, barely.

**Angle.** Taste Profile is a concession that the black box was wrong often enough to need a complaint form. It is not a handoff. Spotify still computes the profile, still decides what “more energetic” means, and still withholds the feature from anyone who is not paying. The interesting part is the delay: you submit a sentence, and hours later the app has opinions again.

---

## 8. Cloudflare Will Let Google Keep the Page and Lose the Training Set

**Status:** `ready`  
**Priority:** 8

**Hook.** For two years, telling a crawler “no” often meant telling Google “no” as well, because the same bot indexed you and trained on you. On 15 September Cloudflare shipped Disallow AI Training: a robots.txt preference that is supposed to keep Applebot, Bingbot, and Googlebot for search while refusing training. The old Block switch now cuts those three off entirely, search included. Publishers finally got a split. It only works if the companies that own the crawlers honor a text file.

**Facts to check**

- Primary: [Cloudflare, 15 September 2026, “Have it both ways”](https://blog.cloudflare.com/accountable-mixed-use-ai-crawlers/). Disallow AI Training publishes a no-training preference and still allows “Accountable” mixed-use crawlers to index. Apple, Google, and Microsoft honor it or have committed to, on a timeline Cloudflare should be quoted for directly. Block, and Block on pages with ads, now apply to Applebot, Bingbot, and Googlebot. “Block AI Bots” and Managed Robots.txt are deprecated in favor of Search, Training, and Agent controls, plus Bot Preference Sync.
- Same announcement: under Disallow AI Training, training-only crawlers, including ones Cloudflare attributes to Amazon, Anthropic, Meta, and OpenAI, get blocked. Search is unaffected by that block because those crawlers are not the search index.
- Secondary reports say Bing will not read the new robots.txt rule until early 2027, and that Microsoft still wants NOARCHIVE in the meantime. Confirm that gap in Cloudflare’s post or a Microsoft doc before stating it as fact.
- Distinct from “SEO Was for Humans” (June). That post was about writing for agents. This one is the switch that separates being found from being eaten.

**Angle.** The useful part is not another robots.txt religion. It is that Cloudflare had to invent a polite no, because the impolite no deleted you from search. The power still sits with Google, Apple, and Microsoft, who can honor the line or redefine the crawler. A preference is not a law. It is a bet that the companies training the models would rather keep the index than pick a fight over every site.

---

## 9. Adobe Rented Photoshop to the Chat Window

**Status:** `ready`  
**Priority:** 9

**Hook.** On 24 September Adobe put Photoshop, Lightroom, Express, and Firefly inside Gemini, and folded Acrobat into a Claude plugin it says now exposes more than 80 tools. The suite already sits in ChatGPT, Slack, and Copilot. Adobe’s own post says the work is starting in someone else’s chatbot, and Adobe would like to be called from there. That is not a feature launch. It is a distribution surrender dressed up as reach: the creative suite becomes a plugin, and the sign-in is still Adobe’s.

**Facts to check**

- Primary: [Adobe blog, 24 September 2026](https://blog.adobe.com/en/publish/2026/09/24/adobe-comes-to-gemini-expands-what-you-can-do-in-claude). Gemini: Photoshop, Lightroom, Express, Firefly, rolling out globally across all Gemini plans via Personal Intelligence, connected apps. Claude: Acrobat joins the existing creative tools. Adobe’s count is “more than 80 pro-grade tools” across Acrobat, Express, Photoshop, Illustrator, Premiere, Lightroom, InDesign, Adobe Stock, and more. New interactive editors for PDFs and Express designs, so you are not only prompting. Guest access exists. An Adobe account raises limits. Prior Claude connector updates itself.
- Adobe says the same tools already shipped to ChatGPT, Slack, and Copilot. A reasonable skeptic line is that every major chat surface now rents Adobe rather than replacing it. Confirm whether the free tier can finish a job or just starts one.
- Neal Pancholi, Google, is quoted on Adobe’s blog welcoming the tools into Gemini. Use it only if you want the partner voice. The post does not need his enthusiasm.

**Angle.** The models were supposed to make the suite optional. Adobe’s answer is to move the suite inside the model and keep the account. You describe an outcome in Gemini or Claude. Adobe still orchestrates, still meters, and still points you back to the flagship apps “when your work calls for even greater depth.” The chatbot is the lobby. The subscription is the building.

---

## 10. The Steam Machine Manual Does Not Come With the Part

**Status:** `ready`  
**Priority:** 10

**Hook.** Valve’s 2026 Steam Machine shipped in June at $1,049 for 512 GB, after a memory shortage pushed it well past a living-room impulse buy. On 16 September iFixit posted the repair guides: SSD, RAM, fan, power supply, motherboard. The parts store does not sell the parts. You can buy the spudger. You cannot buy the board the spudger is for. Right to repair, as a PDF.

**Facts to check**

- [iFixit’s Steam Machine (2026) device page](https://www.ifixit.com/Device/Steam_Machine_%282026%29): second-generation unit, shipping started June 2026. Base 512 GB at $1,049, 2 TB at $1,349. Controller bundle is an extra $79. Semi-custom AMD Zen 4 and RDNA 3. iFixit says the guides exist. Confirm on that page, the day you draft, that replacement components are still absent and only tools are listed.
- [iFixit on X, 16 September 2026](https://x.com/iFixit), relayed by [VideoCardz](https://videocardz.com/newz/steam-machine-ifixit-repair-guides-for-ssd-ram-psu-and-motherboard-are-now-available): “full suite” of guides, parts “soon.” VideoCardz counts 18 guides, including SSD, RAM, PSU, motherboard, heatsink, fan, and the I/O boards. Single M.2 slot, 2230 or 2280. Replacing the drive does not reinstall SteamOS for you.
- [TechRadar](https://www.techradar.com/computing/gaming-pcs/steam-machines-official-repair-guides-reveal-the-true-trickiness-of-some-upgrades-the-ram-especially-is-causing-some-raised-eyebrows): 49 steps to reach the RAM, including heating glue to free Wi-Fi antennas. Count the steps in the guide yourself before quoting 49.
- [Wikipedia’s Steam Machine (2026) page](https://en.wikipedia.org/wiki/Steam_Machine_(2026)) is the trail for the price story: a February delay, RAM costs from the AI buildout, Valve saying the machine landed far above an early target nearer the Steam Deck. Use a Valve post or interview, not the wiki, if that contrast makes the draft.

**Angle.** A repair guide without a parts bin is documentation, not repairability. Valve did the credible version of this for the Steam Deck, which is why the gap matters. The Machine is a $1,049 console-shaped PC whose RAM sits behind a teardown, in a year when RAM is the reason the price moved. Publishing the path and withholding the part is how “repairable” becomes a blog post.

---

## Parked

Not part of the ten. Left here so the next pass does not redo the search.

- **ChatGPT as a search engine, legally.** European Commission press release IP/26/1772, 31 August 2026: ChatGPT designated a Very Large Online Search Engine, Reddit and Roblox as Very Large Online Platforms, because each said it has at least 45 million average monthly users in the EU. Extra DSA duties by January 2027. Strong thesis (Brussels classified the chatbot as search), a month old. Use it if a policy week opens up.
- **FTC versus YouTube’s own rules.** Bloomberg, 27 August 2026: the agency is reportedly in the late stages of a consumer-protection case about moderation that does not match the policy users saw at signup. Still sourced to unnamed people. Wait for a complaint.
- **Terafab.** Trade press in late September describes a Musk-company fab in Grimes County on Intel’s 14A process, with a December construction start. The sourcing is thinner than the items above. Skip until a filing or a Reuters/TechCrunch piece is in hand.

## How to draft from this

One idea, one post, `type: linked`. Attribution, then the sharpest line, then one verbatim blockquote from a page opened that day, then commentary that does not restate the quote. Re-check every number. If a source has moved, drop the number rather than remembering it from this file.
