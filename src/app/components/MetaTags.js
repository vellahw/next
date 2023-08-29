import Head from "next/head";

const HeadMeta = ({ title, description, url, image }) => {
    return (
      <Head>
        <title>{title || "누구나 쉽게, 부동산 조각투자 플랫폼 직투"}</title>
        <meta
          name="description"
          content={
            description ||
            "직투(ziktu) - 누구나 쉽게하는 부동산 조각투자"
          }
        />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta property="og:title" content={title || "직투 - 부동산 조각투자 플랫폼"} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={url || "zik-tu.vercel.com"} />
        <meta property="og:image" content={image} />
        <meta property="og:article:author" content="직투" />
      </Head>
    );
  };
  
  export default HeadMeta;