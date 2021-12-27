import { GetStaticProps } from 'next';
import Link from 'next/link';
import { FiCalendar, FiUser } from 'react-icons/fi';
import Header from '../components/Header';
import { getPrismicClient } from '../services/prismic';

import commonStyles from '../styles/common.module.scss';
import styles from './home.module.scss';

interface Post {
  uid?: string;
  first_publication_date: string | null;
  data: {
    title: string;
    subtitle: string;
    author: string;
  };
}

interface PostPagination {
  next_page: string;
  results: Post[];
}

interface HomeProps {
  postsPagination: PostPagination;
}

export default function Home() {
  return (
    <>
      <main>
        <Header />
        <div>
          <Link href="/">
            <a>
              <strong>Título</strong>
              <p>Resumo</p>
              <ul>
                <li>
                  <FiCalendar />
                  15 Mar 2021
                </li>
              </ul>
              <ul>
                <li>
                  <FiUser />
                  Giovana Silveira
                </li>
              </ul>
            </a>
          </Link>
        </div>
      </main>
    </>
  );
}

// export const getStaticProps = async () => {
//  const prismic = getPrismicClient();
//  const postsResponse = await prismic.query(TODO);

//  TODO
// };
