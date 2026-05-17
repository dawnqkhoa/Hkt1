function showSchedule(days) {
    const content = document.getElementById('schedule-content');
    if (!content) return;
    document.querySelectorAll('.tab-button').forEach(btn => btn.classList.remove('active', 'bg-green-500', 'text-white'));
    document.getElementById(`tab${days}`).classList.add('active', 'bg-green-500', 'text-white');
    
    let tData = days===1 ? [{t:"08:00",title:"Lăng Bác",d:"Thăm viếng nơi Bác nghỉ."}, {t:"12:00",title:"Phở Bát Đàn",d:"Ăn trưa đặc sản."}, {t:"19:00",title:"Phố Cổ",d:"Dạo đêm nhộn nhịp."}] : (days===2 ? [{t:"Ngày 1",title:"Trung tâm",d:"Theo lịch 1 ngày."}, {t:"Ngày 2",title:"Hồ Tây",d:"Ngắm hoàng hôn & cafe."}] : [{t:"Ngày 1&2",title:"Nội thành",d:"Theo lịch 2 ngày."}, {t:"Ngày 3",title:"Bát Tràng",d:"Trải nghiệm nặn gốm."}]);
    
    let html = `<div class="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm"><div class="relative border-l-4 border-green-500 ml-4 space-y-10 py-4">`;
    tData.forEach(item => html += `<div class="relative pl-10"><div class="absolute w-5 h-5 bg-green-500 rounded-full -left-[12px] top-1 border-4 border-white"></div><div class="bg-gray-50 p-6 rounded-2xl border border-gray-100"><span class="bg-green-100 text-green-700 font-bold px-3 py-1 rounded-full text-sm mb-2 inline-block">${item.t}</span><h4 class="text-xl font-bold">${item.title}</h4><p class="text-gray-600 mt-1">${item.d}</p></div></div>`);
    content.innerHTML = html + `</div></div>`;
}

function createTourCards(filter = 'all') {
    const container = document.getElementById('tour-grid');
    if (!container) return;
    
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active', 'bg-green-500', 'text-white'));
    if (window.event && window.event.target && window.event.target.classList && window.event.target.classList.contains('filter-btn')) {
        window.event.target.classList.add('active', 'bg-green-500', 'text-white');
    } else {
        const defaultBtn = document.querySelector('.filter-btn');
        if (defaultBtn) defaultBtn.classList.add('active', 'bg-green-500', 'text-white');
    }
    
    container.innerHTML = '';
    const arr = filter === 'all' ? tours : tours.filter(t => t.category === filter);
    
    arr.forEach(tour => {
        container.innerHTML += `
            <div class="tour-card flex flex-col" data-aos="fade-up">
                <img src="${tour.image}" class="h-56 object-cover">
                <div class="p-6 flex-1 flex flex-col">
                    <h3 class="text-xl font-bold mb-2">${tour.name}</h3>
                    <p class="text-2xl text-pink-600 font-bold mb-6 flex-1">${tour.price}</p>
                    <div class="mt-auto flex gap-3">
                        <button onclick="showTourDetail(${tour.id})" class="flex-1 py-3 bg-gray-100 text-gray-700 font-bold rounded-2xl hover:bg-gray-200 transition-all">Xem chi tiết</button>
                        <button onclick="openBookingForm('${tour.name}')" class="flex-1 py-3 bg-green-600 text-white font-bold rounded-2xl hover:bg-green-700 transition-all">Đặt Tour</button>
                    </div>
                </div>
            </div>`;
    });
}