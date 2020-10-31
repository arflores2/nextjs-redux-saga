import Link from 'next/link';

import Layout from '../../components/layout';

export default function Reports() {
    return (
      <Layout>
        <div>Reports</div>
        <div>
          <Link href="/">
            <a>Back to home</a>
          </Link>
        </div>
      </Layout>
    );
  }
  