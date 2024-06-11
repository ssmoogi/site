import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-full flex-col items-right justify-between p-[16px]">
        <div className="min-h-full">
            <div className="min-h-min">
                <div className="flex flex-row">
                    <p className="text-black text-7xl p-3 pb-5 hover:bg-dark hover:text-lavender transition-colors"><strong>sahana moogi.</strong></p>
                </div>
                {/*<div className="flex flex-row">
                    <Image
                        src="/sahana.jpeg"
                        width={150}
                        height={150}
                        className="block border-black border-2 rounded-lg m-3"
                        alt="picture of me"
                    />
                </div> */}
                <p className="text-black text-lg p-3">
                    Hello there! My name is Sahana. I'm from the Bay Area, currently located in Berkeley, California.
                    I'm currently a student pursuing a simultaneous degree in Electrical Engineering & Computer Science (EECS) and Music, which consumes most of my time so I felt like I should mention.
                </p>
                <p className="text-black text-lg p-3">
                    Defining ourselves is more complex than we realize! At least, I have realized, because of how much of our personality is context-driven. And how hard it is to put a consistent definition to who we are all the time. We're constantly changing. But to summarize, I love music, anything <Link href="/" className="text-purple underline underline-offset-2 hover:bg-purple hover:text-white hover:no-underline transition-colors">caffeinated</Link>, building <Link href="/projects" className="text-purple underline underline-offset-2 hover:bg-purple hover:text-white hover:no-underline transition-colors">things</Link>, biking, conversations, and spending time with people. Usually down for anything, email me at ssmoogi at gmail dot com! <Link href="/world" className="text-white bg-purple hover:bg-lavender pl-2 pr-2 hover:text-dark hover:no-underline transition-colors">enter ↵</Link>
                </p>
                <div className="p-3 pt-6 text-xl text-dark">
                    {[
                        ['~github~', 'https://github.com/ssmoogi'],
                        ['~spotify~', 'https://open.spotify.com/user/ssmoogi'],
                        ['~twitter~', 'https://twitter.com/ssmoogi']
                    ].map(([platform, url]) => (
                        <a href={url} className="hover:bg-purple hover:text-white transition-colors mr-10">{platform}</a>
                    ))}
                </div>
            </div>
        </div>
    </main>
  );
}
