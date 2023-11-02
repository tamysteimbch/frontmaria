import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/layout';
import Image from 'next/image'

export default function Login() {
  return (
    <Layout>
      <Head>
        <title>First Post</title>
      </Head>
      <Image
      src={'https://mariatcc.s3.sa-east-1.amazonaws.com/Background.jpg'}
      width={1465}
      height={1080}
      alt={"Background"}
      noptimized={true}
      />
      
      <h1>First Post</h1>
      <h2>
        <Link href="/">← Back to home</Link>
      </h2>
    </Layout>
  );
  }