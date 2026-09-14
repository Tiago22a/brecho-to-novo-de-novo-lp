/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

// Configuração do Brechó
const WHATSAPP_NUMBER = "5515992728979"; // Substitua pelo número real

// Lista de Produtos (Catálogo Dinâmico)
const products = [
  {
    id: 1,
    name: "Vestido Farm Novo Vermelho",
    size: "PP",
    price: "R$ 649,00",
    image: "/catalogo/1.jpeg",
  },
  {
    id: 2,
    name: "Vestido Farm Novo Branco",
    size: "M",
    price: "R$ 699,00",
    image: "/catalogo/2.jpeg",
  },
  {
    id: 3,
    name: "Sobretudo Adidas Ivy Park",
    size: "Único",
    price: "R$ 549,00",
    image: "/catalogo/3.jpeg",
  },
  {
    id: 4,
    name: "Saia veludo cotele bordada Farm",
    size: "G",
    price: "R$ 649,00",
    image: "/catalogo/4.jpeg",
  }


];

// Função para renderizar o catálogo
function renderCatalog() {
  const grid = document.getElementById('product-grid');
  if (!grid) return;

  grid.innerHTML = products.map(product => `
    <div class="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group">
      <div class="aspect-[3/4] overflow-hidden relative">
        <img 
          src="${product.image}" 
          alt="${product.name}" 
          class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          referrerPolicy="no-referrer"
          loading="lazy"
        >
        <div class="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-[#8B4513] shadow-sm">
          Tam: ${product.size}
        </div>
      </div>
      <div class="p-6 space-y-3">
        <h3 class="font-serif text-xl text-[#8B4513] line-clamp-1">${product.name}</h3>
        <p class="text-2xl font-bold text-[#D4AF37]">${product.price}</p>
        <button 
          onclick="window.openWhatsApp('${product.name}')"
          class="w-full bg-[#8B4513] text-white py-3 rounded-xl font-semibold hover:bg-[#D4AF37] transition-colors flex items-center justify-center gap-2"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 16 16">
            <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/>
          </svg>
          Tenho Interesse
        </button>
      </div>
    </div>
  `).join('');
}

// Função global para abrir o WhatsApp
window.openWhatsApp = (productName) => {
  const message = encodeURIComponent(`Olá! Tenho interesse no ${productName}. Ainda está disponível?`);
  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, '_blank');
};

// Inicialização
document.addEventListener('DOMContentLoaded', () => {
  renderCatalog();
  
  // Smooth scroll para âncoras
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  });
});
