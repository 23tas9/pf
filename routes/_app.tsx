import { AppProps } from "$fresh/server.ts";
import { Head } from "$fresh/src/runtime/head.ts";

export default function App({ Component }: AppProps) {
  return (
    <html>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="keywords" content="たすくん,tas9n,23_tas9,ポートフォリオ,きゅーらぼ,9lab,プログラミング,ゲーム制作" />

        <title>きゅーらぼ - 9lab</title>

        <link
          rel="apple-touch-icon"
          type="image/png"
          href="/apple-touch-icon-180x180.png"
        />
        <link rel="icon" type="image/png" href="/icon-192x192.png" />

        <meta name="description" content="このサイトは私、たすくんのポートフォリオサイトである9lab(きゅーらぼ)です。これまでに手がけた作品などをまとめています。" />
        <meta property="og:description" content="このサイトは私、たすくんのポートフォリオサイトである9lab(きゅーらぼ)です。これまでに手がけた作品などをまとめています。" />
        <meta property="og:url" content="https://pf.9lab.me/" />
        <meta property="og:image" content="https://raw.githubusercontent.com/tas9n/pf/master/static/image/logo/brand_logo.png" />
        <meta name="twitter:card" content="summary" />

        <link rel="stylesheet" href="/styles/css/main.css" />
        <link rel="stylesheet" href="/styles/css/header.css" />
        <link rel="stylesheet" href="/styles/css/footer.css" />
      </Head>
      <body>
        <Component />
      </body>
    </html>
  );
}
