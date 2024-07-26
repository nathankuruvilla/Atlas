
import Head from 'next/head';

const Home = () => {

  return (
    <div className="min-h-screen flex flex-col items-center justify-center py-2">
      <Head>
        <title>My Book Catalog</title>
        <meta name="description" content="Catalog the books you've read and find new ones to read" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center flex-1 px-20 text-center">
        <h1 className="text-6xl font-bold">Welcome to My Book Catalog</h1>
        <p className="mt-3 text-2xl">Catalog the books you have read and find new ones to read</p>
      </main>

      <footer className="flex items-center justify-center w-full h-24 border-t">
        <a href="https://nextjs.org" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
          Powered by Next.js
        </a>
      </footer>
    </div>
  );
};

export default Home;
