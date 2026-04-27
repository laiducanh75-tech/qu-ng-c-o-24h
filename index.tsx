import React from 'react';

// D? li?u l?y t? dàn ?nh d? án uy tín c?a b?n
const projects = [
  {
    id: 1,
    title: "H? th?ng Pano T?m c? - Thép Sài Gòn & Tôn Nam Kim",
    desc: "Thi công bi?n t?m l?n v?i k?t c?u thép b?n b?, kh?ng d?nh quy mô t?p doàn công nghi?p."
  },
  {
    id: 2,
    title: "Nh?n di?n Thuong hi?u Qu?c gia - VNPT & Vinaphone",
    desc: "Ch? tác ch? n?i quy mô l?n và h? th?ng bi?n hi?u d?ng b?, d?m b?o tính tôn nghiêm và chu?n nh?n di?n qu?c gia."
  },
  {
    id: 3,
    title: "H? th?ng Logistic Giao Hàng Nhanh (GHN)",
    desc: "Ð?ng b? hóa hình ?nh buu c?c toàn qu?c, t?i uu d? hi?n th? và b?n b? trong m?i di?u ki?n."
  },
  {
    id: 4,
    title: "Công trình Ch? n?i Co quan Hành chính & S? nghi?p",
    desc: "Gia công tinh x?o cho các don v? quân s?, b?nh vi?n và co quan chính ph?, d? cao s? trang tr?ng tuy?t d?i."
  }
];

export default function Portfolio() {
  return (
    <div style={{ backgroundColor: '#050505', color: '#fff', minHeight: '100vh', padding: '60px 20px', fontFamily: 'serif' }}>
      <header style={{ textAlign: 'center', marginBottom: '80px' }}>
        <h1 style={{ color: '#d4af37', fontSize: '3rem', letterSpacing: '5px', textTransform: 'uppercase' }}>D?u ?n Công Trình</h1>
        <p style={{ color: '#888', fontStyle: 'italic', marginTop: '10px' }}>"Ki?n t?o bi?u tu?ng - Kh?ng d?nh v? th? tru?ng t?n"</p>
      </header>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '40px', maxWidth: '1200px', margin: '0 auto' }}>
        {projects.map((p) => 
          <div key={p.id} style={{ background: '#111', border: '1px solid #222', padding: '25px', transition: '0.3s' }}>
            <div style={{ height: '250px', background: '#1a1a1a', marginBottom: '20px', border: '1px dashed #333', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
               <span style={{ color: '#444' }}>[ CHÈN ?NH D? ÁN T?I ÐÂY ]</span>
            </div>
            <h3 style={{ color: '#d4af37', fontSize: '1.5rem', marginBottom: '15px' }}>{p.title}</h3>
            <p style={{ color: '#999', lineHeight: '1.6', fontSize: '0.95rem' }}>{p.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
}