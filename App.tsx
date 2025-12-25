import { INITIAL_PRODUCTS } from './constants';

export default function App() {
  return (
    <div style={{ padding: 20 }}>
      <h1>📱 قسم الهواتف</h1>
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
        gap: 20
      }}>
        {INITIAL_PRODUCTS.map(p => (
          <div key={p.id} style={{ border: "1px solid #ccc", padding: 10 }}>
            <img src={p.image} width="100%" />
            <h4>{p.name}</h4>
            <p>${p.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
