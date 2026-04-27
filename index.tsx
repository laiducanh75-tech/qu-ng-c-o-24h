import React from 'react';

// Ð?nh nghia ki?u d? li?u cho m?t d? án (TypeScript Interface)
interface Project {
  id: number;
  title: string;
  category: string;
  imageUrl: string;
  description: string;
}

const ProjectPage: React.FC = () => {
  // Khi b?n có ?nh, hãy thay các thông tin vào m?ng này
  const projectsData: Project[] = [
    {
      id: 1,
      title: "Ch? tác Bi?u tu?ng Inox Vàng",
      category: "D? án Tiêu bi?u",
      imageUrl: "PLACEHOLDER_IMAGE_URL_1",
      description: "Gia công ch? n?i Inox vàng guong 304, d? tinh x?o tuy?t d?i cho s?nh chính t?p doàn."
    },
    // ... Thêm các d? án khác ? dây
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white font-sans selection:bg-yellow-500/30">
      
      {/* 1. Header tinh gi?n theo phong cách Luxury */}
      <nav className="fixed w-full z-50 border-b border-white/5 bg-black/90 backdrop-blur-md px-10 py-5 flex justify-between items-center">
        <div className="text-2xl font-serif tracking-widest text-[#d4af37]">KIEN AN AD</div>
        <div className="hidden lg:flex space-x-12 text-[10px] uppercase tracking-[0.3em] font-light">
          <a href="/" className="hover:text-[#d4af37] transition">Trang ch?</a>
          <a href="#services" className="hover:text-[#d4af37] transition">D?ch v? ch? tác</a>
          <a href="#projects" className="text-[#d4af37]">D?u ?n công trình</a>
          <a href="#contact" className="hover:text-[#d4af37] transition">Liên h?</a>
        </div>
      </nav>

      {/* 2. Hero Section cho ph?n D? án */}
      <section className="pt-40 pb-20 px-10 text-center">
        <h1 className="text-[12px] uppercase tracking-[0.5em] text-yellow-600 mb-4">Portfolio</h1>
        <h2 className="font-serif text-5xl md:text-6xl mb-8 italic">D?u ?n Công Trình</h2>
        <div className="w-24 h-[1px] bg-yellow-700 mx-auto"></div>
      </section>

      {/* 3. PH?N D? ÁN TIÊU BI?U (Noi b?n s? thay hình) */}
      <section id="projects" className="px-10 pb-32 max-w-[1600px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {projectsData.length > 0 ? (
            projectsData.map((project) => (
              <div key={project.id} className="group cursor-pointer">
                {/* Khung ch?a ?nh d? án */}
                <div className="relative aspect-[16/10] overflow-hidden bg-zinc-900 border border-white/5">
                  <img 
                    src={project.imageUrl} 
                    alt={project.title}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
                </div>
                
                {/* Thông tin d? án */}
                <div className="mt-8">
                  <span className="text-[10px] uppercase tracking-widest text-zinc-500">{project.category}</span>
                  <h3 className="text-2xl font-serif mt-2 group-hover:text-[#d4af37] transition-colors">{project.title}</h3>
                  <p className="text-zinc-400 mt-3 font-light leading-relaxed max-w-md">
                    {project.description}
                  </p>
                </div>
              </div>
            ))
          ) : (
            // Tr?ng thái ch? ?nh t? b?n
            <div className="col-span-full py-40 border border-dashed border-zinc-800 text-center">
              <p className="text-zinc-600 italic tracking-widest uppercase text-sm">
                Ðang d?i d? li?u hình ?nh d? án t? b?n...
              </p>
            </div>
          )}
        </div>
      </section>

      {/* 4. Footer Tôn Nghiêm */}
      <footer className="border-t border-white/5 py-20 px-10 bg-black">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-sm font-light text-zinc-500">
          <div>
            <h4 className="text-white mb-6 uppercase tracking-widest">Van phòng d?i di?n</h4>
            <p>30/12 Ðu?ng DX01, Tân Vinh Hi?p, Tân Khánh, TPHCM</p>
          </div>
          <div>
            <h4 className="text-white mb-6 uppercase tracking-widest">Liên h? tr?c ti?p</h4>
            <p className="text-[#d4af37] text-lg font-medium">0904 747 398</p>
            <p>kd.kienan@gmail.com</p>
          </div>
          <div className="text-right">
            <p>© 2026 Kien An Advertising Luxury</p>
            <p className="mt-2 italic">Ki?n t?o di s?n thuong hi?u</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ProjectPage;