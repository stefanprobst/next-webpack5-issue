import { useWebpackContext } from '../components/WebpackContext';

export default function HomePage() {
  const message = useWebpackContext();
  console.log({ message });
  return (
    <main>
      <h1>Webpack 5 Test</h1>
      <p>{message}</p>
    </main>
  );
}
