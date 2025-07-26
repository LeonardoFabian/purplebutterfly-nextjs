import Link from "next/link";

export default function NotFound() {
  return (
    <main>
      <h1>404</h1>
      <h3>Lo sentimos, la página que buscas no existe.</h3>
      <Link href="/">Volver al inicio</Link>
    </main>
  );
}
