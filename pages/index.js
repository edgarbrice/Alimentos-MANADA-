export default function Home() {
  return (
    <main style={{ padding: '32px', maxWidth: 960, margin: '0 auto' }}>
      <h1>MANADA – Nutrición de calidad para tu regalón</h1>
      <p>Bienvenido a la PWA oficial de Alimentos MANADA.</p>

      <nav style={{ margin: '16px 0' }}>
        <a href="/productos">Productos</a> {' | '}
        <a href="/contacto">Contacto</a>
      </nav>

      <h2>Productos destacados</h2>
      <ul>
        <li>Strong Cachorro 10 Kg</li>
        <li>Todd’s Super Premium Cachorro 10 Kg</li>
        <li>Strong Adulto 10/18/25 Kg</li>
      </ul>

      <footer style={{ marginTop: 48 }}>© 2025 MANADA</footer>
    </main>
  );
}
