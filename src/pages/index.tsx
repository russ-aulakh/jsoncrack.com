import { useEffect } from "react";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  useEffect(() => {
    router.replace("/editor");
  }, [router]);
  return (
    <>
      <noscript>
        <meta httpEquiv="refresh" content="0; url=/editor" />
      </noscript>
    </>
  );
}
