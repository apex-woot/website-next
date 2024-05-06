import Head from 'next/head';
import { type FC, useMemo } from 'react';
import type { SeoPropsTypes } from './types';

const SEO: FC<SeoPropsTypes> = ({ title, description, jobPosting }) => {
    const data = { site: { siteMetadata: { defaultTitle: '', defaultDescription: '', siteUrl: '' } } };
    const { defaultTitle, defaultDescription, siteUrl } = data.site.siteMetadata;
    const pathname = '|figureout_pathname|';
    const seo = {
        title: title || defaultTitle,
        description: description || defaultDescription,
        url: `${siteUrl}${pathname.replace(/\/$/, '')}`,
    };

    const jobPostingSchema = useMemo(() => JSON.stringify(jobPosting, null, 2), [jobPosting]);
    return (
        <Head>
            <title>{seo.title}</title>
            <html lang="en" />
            <link rel="canonical" href={seo.url} />
            <meta charSet="utf-8" />
            {/* <!-- HTML Meta Tags --> */}
            <title>{seo.title}</title>
            <meta name="description" content={seo.description} />

            {/* <!-- Google / Search Engine Tags --> */}
            <meta property="name" content={seo.title} />
            <meta property="description" content={seo.description} />
            <meta property="image" content="https://www.trades.org/images/preview.png" />

            {/* <!-- Facebook Meta Tags --> */}
            <meta property="og:url" content={seo.url} />
            <meta property="og:type" content="website" />
            <meta property="og:title" content={seo.title} />
            <meta property="og:description" content={seo.description} />
            <meta property="og:image" content="https://www.trades.org/images/preview.png" />

            {/* <!-- Twitter Meta Tags --> */}
            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:title" content={seo.title} />
            <meta property="twitter:description" content={seo.description} />
            <meta property="twitter:image" content="https://www.trades.org/images/preview.png" />

            <link rel="icon" href="/images/favicon/favicon-32.png" sizes="32x32" />
            <link rel="icon" href="/images/favicon/favicon-192.png" sizes="192x192" />
            <link rel="apple-touch-icon" href="/images/favicon/favicon-152.png" sizes="152x152" />
            <link rel="apple-touch-icon" href="/images/favicon/favicon-167.png" sizes="167x167" />
            <link rel="apple-touch-icon" href="/images/favicon/favicon-180.png" sizes="180x180" />
            <link rel="shortcut icon" href="/images/favicon/favicon-196.png" sizes="196x196" />

            {jobPostingSchema && <script type="application/ld+json">{jobPostingSchema}</script>}
        </Head>
    );
};

export default SEO;
