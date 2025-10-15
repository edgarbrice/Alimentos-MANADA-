import Link from "next/link";

export default function Navbar() {
  return (
    <header style={{
      borderBottom: "1px solid #eee",
      padding: "12px 16px",
      position: "sticky",
      top: 0,
      background: "#fff",
      zIndex: 10
    }}>
      <nav style={{maxWidth: 960, margin: "0 auto", display: "flex", gap: 16}}>
        <Link href="/">Inicio</Link>
        <Link href="/productos">Productos</Link>
        <Link href="/contacto">Contacto</Link>
      </nav>
    </header>
  );
}
