import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <div>Consider this a header</div>
      <Component {...pageProps} />
    </>
  );
}
