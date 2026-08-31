import Link from "next/link";

export function Header() {
  return (
    <header className="topbar">
      <nav className="nav">
        <Link href="/" className="brand" aria-label="Fiyatı Ne ana sayfa">
          <span className="logo">₺</span>
          <span>Fiyatı Ne</span>
        </Link>
        <div className="navlinks">
          <Link href="/">Gerçek indirimler</Link>
          <Link href="/check">Link kontrol</Link>
          <Link href="/blueprint">MVP blueprint</Link>
        </div>
      </nav>
    </header>
  );
}
