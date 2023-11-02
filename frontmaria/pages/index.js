import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import Modal from "../components/Modal";
import {useState} from "react";
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';

export default function Home() {

  const [showModal, setShowModal] = useState(false);

  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <Link href="/pages/loginProf"> login prof</Link>
      <section className={utilStyles.headingMd}>
        <div id="modal-root">
        <p>[botao modalzinha]</p>
        <button onClick={() => setShowModal(true)}>Open Modal</button>
        {showModal &&
            <Modal onClose={() => setShowModal(false)}>
                Hello from the modal!
            </Modal>
        }
      </div>
      </section>
    </Layout>
  );
}