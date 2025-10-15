import Link from "next/link";

export default function Navbar() {
  return (
    <header style={{
      borderBottom: "1px solid #eee",
      padding: "10px 16px",
      position: "sticky",
      top: 0,
      background: "#fff",
      zIndex: 10,
      boxShadow: "0 2px 8px rgba(0,0,0,.04)"
    }}>
      <nav style={{
        maxWidth: 1000,
        margin: "0 auto",
        display: "flex",
        alignItems: "center",
        gap: 20,
        justifyContent: "space-between"
      }}>
        <Link href="/" style={{display:"flex",alignItems:"center",gap:10}}>
          <img
            src="/images/logo-manada-oficial.png"
            alt="MANADA"
            width="36"
            height="36"
            style={{display:"block"}}
          />
          <strong>MANADA</strong>
        </Link>

        <div style={{display:"flex",gap:16}}>
          <Link href="/">Inicio</Link>
          <Link href="/productos">Productos</Link>
          <Link href="/contacto">Contacto</Link>
        </div>
      </nav>
    </header>
  );
}
