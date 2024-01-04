import Head from "next/head";

const SEO = ({ pageTitle }) => (
  <>
    <Head>
      <title>
        {pageTitle && `${pageTitle} - Product Manager / Operations Manager`}
      </title>
      <meta httpEquiv="x-ua-compatible" content="ie=edge" />
      <meta name="description" content="Valentine Tom - Product Manager" />
      <meta name="robots" content="follow" />
      <meta name="googlebot" content="follow" />
      <meta
        property="og:image"
        content={`${process.env.PUBLIC_URL}/assets/img/meta.jpg`}
      />{" "}
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  </>
);

export default SEO;
