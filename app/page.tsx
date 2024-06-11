import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-full flex-col items-right justify-between p-[16px]">
        <div className="min-h-full">
            <div className="min-h-min">
                <div>
                    <p className="text-black text-7xl p-3"><strong>sahana moogi.</strong></p>
                </div>
                <p className="text-black text-lg p-3">
                    Hello there! My name is Sahana. I'm from the Bay Area, currently located in Berkeley, California.
                    I'm currently a student pursuing a simultaneous degree in Electrical Engineering & Computer Science (EECS) and Music, which consumes most of my time so I felt like I should mention.
                </p>
                <p className="text-black text-lg p-3">
                    Defining ourselves is more complex than we realize! But to summarize, I love music, anything <Link href="/" className="text-purple underline underline-offset-2 hover:bg-purple hover:text-white hover:no-underline transition-colors">caffeinated</Link>, building <Link href="/projects" className="text-purple underline underline-offset-2 hover:bg-purple hover:text-white hover:no-underline transition-colors">things</Link>, biking, conversations, and spending time with people." 
                </p>
                <div className="p-3 text-xl text-dark">
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
