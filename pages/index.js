import Head from "next/head";
import Image from "next/image";



export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1>Hello NextJS!!!!</h1> 
        <Image src='/next.svg' width={200} height={200} alt=''/>
      </main>
    </>
  );
}
