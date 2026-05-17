const places = [
    { id: 1, name: "Hồ Hoàn Kiếm", desc: "Trái tim của Hà Nội với truyền thuyết Rùa Vàng", image: "https://images.pexels.com/photos/32381196/pexels-photo-32381196.jpeg", detail: "Hồ Hoàn Kiếm (Hồ Gươm) là biểu tượng lịch sử và văn hóa của thủ đô. Đi dạo quanh hồ, bạn có thể tham quan Đền Ngọc Sơn, cầu Thê Húc và thưởng thức kem Thủy Tạ.", address: "Quận Hoàn Kiếm, Hà Nội", time: "Mở cửa cả ngày", price: "Miễn phí" },
    { id: 2, name: "Văn Miếu - Quốc Tử Giám", desc: "Trường đại học đầu tiên của Việt Nam", image: "https://images.pexels.com/photos/34134843/pexels-photo-34134843.jpeg", detail: "Được xây dựng từ năm 1070 dưới thời vua Lý Thánh Tông. Nơi đây thờ Khổng Tử và lưu giữ 82 bia tiến sĩ, là biểu tượng cho tinh thần hiếu học.", address: "58 Quốc Tử Giám, Đống Đa", time: "08:00 - 17:00", price: "30.000đ" },
    { id: 3, name: "Lăng Chủ tịch", desc: "Nơi an nghỉ của Bác Hồ kính yêu", image: "https://images.pexels.com/photos/27203391/pexels-photo-27203391.jpeg", detail: "Quần thể di tích lịch sử bao gồm Lăng Bác, Quảng trường Ba Đình, Nhà sàn, và Ao cá. Một địa điểm mang đậm ý nghĩa dân tộc.", address: "2 Hùng Vương, Ba Đình", time: "Sáng T3,T4,T5,T7,CN", price: "Miễn phí" },
    { id: 4, name: "Phố Cổ Hà Nội", desc: "36 phố phường sầm uất và đặc sắc", image: "https://images.pexels.com/photos/33413686/pexels-photo-33413686.jpeg", detail: "Khu vực đô thị có từ lâu đời của Hà Nội, nổi bật với các phố nghề truyền thống và khu chợ đêm sầm uất.", address: "Quận Hoàn Kiếm", time: "Cả ngày", price: "Miễn phí" }
];

const foods = [
    { 
        id: 1, 
        name: "Phở Bò Hà Nội", 
        desc: "Món ăn quốc dân mang đậm cốt hồn Việt", 
        image: "https://images.pexels.com/photos/6646034/pexels-photo-6646034.jpeg", 
        placesToEat: ["Phở Thìn - 13 Lò Đúc", "Phở Bát Đàn - 49 Bát Đàn", "Phở Lý Quốc Sư - 10 Lý Quốc Sư"] 
    },
    { 
        id: 2, 
        name: "Bún Chả", 
        desc: "Đặc sản nức tiếng từng được tổng thống Mỹ thưởng thức", 
        image: "https://images.pexels.com/photos/3858270/pexels-photo-3858270.jpeg", 
        placesToEat: ["Bún chả Hương Liên - 24 Lê Văn Hưu", "Bún chả Đắc Kim - 1 Hàng Mành"] 
    },
    { 
        id: 3, 
        name: "Cà phê Trứng", 
        desc: "Thức uống béo ngậy, ấm áp cho ngày đông", 
        image: "https://images.pexels.com/photos/35775552/pexels-photo-35775552.jpeg", 
        placesToEat: ["Cafe Giảng - 39 Nguyễn Hữu Huân", "Cafe Đinh - 13 Đinh Tiên Hoàng"] 
    },
    { 
        id: 4, 
        name: "Chả Cá Lã Vọng", 
        desc: "Món cá lăng tẩm ướp tinh tế xèo xèo trên chảo nóng", 
        image: "https://images.pexels.com/photos/14192614/pexels-photo-14192614.jpeg", 
        placesToEat: ["Chả cá Lã Vọng - 14 Chả Cá", "Chả cá Thăng Long - 19 Đường Thành"] 
    },
    { 
        id: 5, 
        name: "Bánh Cuốn Thanh Trì", 
        desc: "Tấm bánh tráng mỏng tang, rắc hành phi thơm lừng", 
        image: "https://images.pexels.com/photos/2134174/pexels-photo-2134174.jpeg", 
        placesToEat: ["Bánh cuốn Bà Hoành - 66 Tô Hiến Thành", "Bánh cuốn Thanh Vân - 12 Hàng Gà"] 
    },
    { 
        id: 6, 
        name: "Cốm Làng Vòng", 
        desc: "Thức quà mùa thu mộc mạc gói trong lá sen", 
        image: "https://images.pexels.com/photos/27833805/pexels-photo-27833805.jpeg", 
        placesToEat: ["Cốm Làng Vòng Bà Hoản - Số 36 Ngõ 63 Xuân Thủy", "Cốm Mộc Lê Gia - Số 2 ngõ 59 Mễ Trì"] 
    }
];

const tours = [
    { 
        id: 1, name: "City Tour Hà Nội 1 Ngày", price: "850.000đ", category: "low", image: "https://images.pexels.com/photos/32381196/pexels-photo-32381196.jpeg",
        detail: `<p class="font-medium text-green-700 text-lg mb-4">Với thời gian 1 ngày, bạn có 2 hướng đi phổ biến nhất để lựa chọn:</p><div class="space-y-4"><div class="bg-gray-50 p-5 rounded-2xl border border-gray-100"><h4 class="font-bold text-gray-900 text-lg mb-2">🎈 Lựa chọn 1: Tour nội thành (Hanoi City Tour)</h4><p class="text-gray-600 mb-1"><b>• Buổi sáng:</b> Xe đón đi thăm Chùa Trấn Quốc, cụm di tích Lăng Chủ tịch, Nhà sàn, Chùa Một Cột. Sau đó ghé Bảo tàng Dân tộc học.</p><p class="text-gray-600 mb-1"><b>• Trưa:</b> Ăn trưa Phố Cổ (Bún chả hoặc Phở).</p><p class="text-gray-600"><b>• Buổi chiều:</b> Khám phá Văn Miếu và Nhà tù Hỏa Lò. Kết thúc dạo Hồ Gươm.</p></div><div class="bg-gray-50 p-5 rounded-2xl border border-gray-100"><h4 class="font-bold text-gray-900 text-lg mb-2">📸 Lựa chọn 2: Tour làng nghề check-in</h4><p class="text-gray-600"><b>• Hành trình:</b> Khám phá Làng hương Quảng Phú Cầu ngập tràn sắc đỏ. Kết hợp thăm Làng nón Chuông hoặc làng lụa Vạn Phúc.</p></div></div><div class="mt-5 p-4 bg-yellow-50 text-yellow-800 rounded-xl text-sm">📌 <b>Lưu ý:</b> Đã bao gồm xe đưa đón, vé vào cửa, HDV và ăn trưa.</div>`
    },
    { 
        id: 2, name: "Hà Nội - Ninh Bình 2N1Đ", price: "2.450.000đ", category: "mid", image: "https://images.pexels.com/photos/34134843/pexels-photo-34134843.jpeg",
        detail: `<p class="font-medium text-green-700 text-lg mb-4">Kết hợp linh hoạt giữa phố thị và kỳ quan:</p><div class="space-y-4"><div class="bg-gray-50 p-5 rounded-2xl border border-gray-100"><h4 class="font-bold text-gray-900 text-lg mb-2">🚗 Phương án 1: Trải nghiệm trọn vẹn Thủ đô</h4><p class="text-gray-600 mb-2"><b>• Ngày 1:</b> Thăm các điểm trung tâm. Tối trải nghiệm Food Tour Phố Cổ và Tạ Hiện.</p><p class="text-gray-600"><b>• Ngày 2:</b> Khám phá Làng cổ Đường Lâm bằng xe đạp, bến nước cổ kính.</p></div><div class="bg-gray-50 p-5 rounded-2xl border border-gray-100"><h4 class="font-bold text-gray-900 text-lg mb-2">⛵ Phương án 2: Tour liên tuyến HN - Ninh Bình</h4><p class="text-gray-600 mb-2"><b>• Ngày 1:</b> City tour quanh Hà Nội.</p><p class="text-gray-600"><b>• Ngày 2:</b> Sáng đi Ninh Bình. Đi thuyền Tràng An, viếng Bái Đính và về lại HN.</p></div></div>`
    },
    { 
        id: 3, name: "Hà Nội - Sapa 3N2Đ", price: "3.500.000đ", category: "high", image: "https://images.pexels.com/photos/33413686/pexels-photo-33413686.jpeg",
        detail: `<p class="font-medium text-green-700 text-lg mb-4">Lịch trình Quốc dân: Hà Nội – Vịnh Hạ Long – Ninh Bình</p><div class="bg-gray-50 p-5 rounded-2xl border border-gray-100 space-y-3"><p class="text-gray-600"><b>• Ngày 1:</b> Viếng Lăng Bác, Văn Miếu. Chiều dạo Phố Cổ bằng xích lô. Tối xem biểu diễn Múa rối nước.</p><p class="text-gray-600"><b>• Ngày 2:</b> Sáng đi Quảng Ninh. Lên du thuyền tham quan Vịnh Hạ Long, khám phá Hang Sửng Sốt, chèo kayak.</p><p class="text-gray-600"><b>• Ngày 3:</b> Di chuyển từ Hạ Long sang Ninh Bình. Khám phá Hang Múa, xuôi thuyền Tràng An.</p></div><div class="mt-5 p-5 bg-blue-50 text-blue-900 rounded-2xl text-sm">💡 <b>Mẹo nhỏ:</b> Có thể mua vé xe buýt 2 tầng (Hanoi City Tour) để tự ngắm phố phường.</div>`
    }
];

function injectToastContainer() {
    if (!document.getElementById('toast-container')) {
        const container = document.createElement('div');
        container.id = 'toast-container';
        container.className = 'fixed bottom-6 right-6 z-[200] flex flex-col gap-3 pointer-events-none';
        document.body.appendChild(container);
    }
}

function showToast(message, type = 'success') {
    const container = document.getElementById('toast-container');
    const toast = document.createElement('div');
    const bg = type === 'success' ? 'bg-green-600' : 'bg-red-500';
    toast.className = `${bg} text-white px-6 py-4 rounded-2xl shadow-xl transform transition-all duration-300 translate-y-12 opacity-0 flex items-center gap-3 font-medium`;
    toast.innerHTML = `<span class="text-2xl">${type === 'success' ? '✅' : '⚠️'}</span> <span>${message}</span>`;
    container.appendChild(toast);
    setTimeout(() => toast.classList.remove('translate-y-12', 'opacity-0'), 10);
    setTimeout(() => { toast.classList.add('translate-y-12', 'opacity-0'); setTimeout(() => toast.remove(), 300); }, 3500);
}

function createCards() {
    const container = document.getElementById('places-grid');
    if (!container) return;
    container.innerHTML = '';
    places.forEach((place, index) => {
        container.innerHTML += `
            <div class="place-card cursor-pointer" data-aos="fade-up" data-aos-delay="${index * 100}" onclick="showDetail(${place.id})">
                <div class="relative overflow-hidden h-72">
                    <img src="${place.image}" class="w-full h-full object-cover">
                    <div class="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 to-transparent h-1/2"></div>
                    <div class="absolute bottom-6 left-6 text-white font-bold text-2xl">${place.name}</div>
                </div>
                <div class="p-6 text-gray-600">${place.desc}</div>
            </div>`;
    });
}

function showDetail(id) {
    const place = places.find(p => p.id === id);
    if (!place) return;
    const html = `
        <div class="flex justify-end mb-4"><button onclick="hideDetail()" class="text-4xl text-gray-400 hover:text-black">&times;</button></div>
        <img src="${place.image}" class="w-full h-[400px] object-cover rounded-3xl mb-8 shadow-md">
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div class="lg:col-span-2">
                <h1 class="text-4xl font-bold mb-4">${place.name}</h1>
                <p class="text-xl text-green-700 font-medium mb-6">${place.desc}</p>
                <p class="text-gray-700 leading-relaxed text-lg">${place.detail}</p>
            </div>
            <div class="bg-gray-50 p-6 rounded-2xl h-fit border border-gray-100 space-y-4">
                <h3 class="text-xl font-bold border-b pb-2">Thông tin</h3>
                <p>📍 <b>Địa chỉ:</b> ${place.address}</p>
                <p>⏰ <b>Giờ mở:</b> ${place.time}</p>
                <p>🎟️ <b>Giá vé:</b> ${place.price}</p>
            </div>
        </div>`;
    document.getElementById('modalBody').innerHTML = html;
    document.getElementById('detailModal').classList.remove('hidden'); document.getElementById('detailModal').classList.add('flex');
}

function hideDetail() { document.getElementById('detailModal').classList.add('hidden'); document.getElementById('detailModal').classList.remove('flex'); }

function createFoodCards() {
    const container = document.getElementById('food-grid');
    if (!container) return;
    container.innerHTML = '';
    foods.forEach((food, index) => {
        container.innerHTML += `
            <div class="food-card flex flex-col" data-aos="fade-up" data-aos-delay="${index * 100}">
                <img src="${food.image}" class="w-full h-64 object-cover">
                <div class="p-6 flex-1 flex flex-col">
                    <h3 class="text-2xl font-bold mb-2">${food.name}</h3>
                    <p class="text-gray-600 mb-6 flex-1">${food.desc}</p>
                    <button onclick="showFoodDetail(${food.id})" class="w-full py-3 bg-pink-50 text-pink-600 hover:bg-pink-600 hover:text-white rounded-xl font-bold transition-all">Xem quán ngon</button>
                </div>
            </div>`;
    });
}

function showFoodDetail(id) {
    const food = foods.find(f => f.id === id);
    let placesHTML = food.placesToEat.map(p => `<div class="p-4 bg-gray-50 rounded-xl border border-gray-100 flex items-center gap-3"><span>🏪</span><span class="font-medium">${p}</span></div>`).join('');
    document.getElementById('foodModalBody').innerHTML = `
        <div class="flex justify-between items-center mb-6"><h2 class="text-2xl font-bold text-green-700">Quán ${food.name} ngon</h2><button onclick="hideFoodDetail()" class="text-4xl text-gray-300">&times;</button></div>
        <div class="space-y-3">${placesHTML}</div>`;
    document.getElementById('foodModal').classList.remove('hidden'); document.getElementById('foodModal').classList.add('flex');
}

function hideFoodDetail() { document.getElementById('foodModal').classList.add('hidden'); document.getElementById('foodModal').classList.remove('flex'); }

window.onload = () => {
    injectToastContainer(); 
    if (typeof updateAuthUI === 'function') updateAuthUI();
    if (document.getElementById('places-grid')) createCards();
    if (document.getElementById('food-grid')) createFoodCards();
    if (document.getElementById('schedule-content') && typeof showSchedule === 'function') showSchedule(1);
    if (document.getElementById('tour-grid') && typeof createTourCards === 'function') createTourCards('all');
    if(typeof AOS !== 'undefined') AOS.init({ duration: 800, once: true });
};