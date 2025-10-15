export default function Home() {
  return (
    <main style={{padding: "32px", fontFamily: "system-ui, Arial"}}>
      <h1>MANADA – Nutrición de calidad para tu regalón</h1>
      <p>Bienvenido a la PWA oficial de Alimentos MANADA.</p>

      <nav style={{marginTop: 16}}>
        <a href="#productos">Productos</a> &nbsp;|&nbsp; <a href="#contacto">Contacto</a>
      </nav>

      <section id="productos" style={{marginTop: 24}}>
        <h2>Productos destacados</h2>
        <ul>
          <li>Strong Cachorro 10 Kg</li>
          <li>Todd’s Super Premium Cachorro 10 Kg</li>
          <li>Strong Adulto 10/18/25 Kg</li>
        </ul>
      </section>

      <footer style={{marginTop: 32, opacity: 0.7}}>
        © {new Date().getFullYear()} MANADA
      </footer>
    </main>
  );
}

