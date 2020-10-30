import WebpackProvider from '../components/WebpackContext';

export default function App({ Component, pageProps }) {
  return (
    <WebpackProvider>
      <Component {...pageProps} />
    </WebpackProvider>
  );
}
