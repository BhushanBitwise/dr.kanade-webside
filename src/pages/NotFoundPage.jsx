import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <main className="section-wrap section-pad">
      <h1>Page not found</h1>
      <p>The page you requested does not exist.</p>
      <Link className="text-link" to="/">Return to homepage</Link>
    </main>
  );
}
