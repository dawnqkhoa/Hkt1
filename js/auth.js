function showTourDetail(id) {
    const tour = tours.find(t => t.id === id);
    if (!tour) return;
    let modal = document.getElementById('tourDetailModal');
    if (!modal) {
        modal = document.createElement('div');
        modal.id = 'tourDetailModal';
        modal.className = 'hidden fixed inset-0 bg-black/70 z-[120] items-center justify-center p-4';
        document.body.appendChild(modal);
    }
    modal.innerHTML = `
        <div class="modal-content bg-white max-w-4xl w-full rounded-[2rem] p-8 lg:p-10 max-h-[90vh] overflow-y-auto relative">
            <button onclick="hideTourDetail()" class="absolute top-6 right-6 text-4xl text-gray-400 hover:text-black">&times;</button>
            <img src="${tour.image}" class="w-full h-72 object-cover rounded-2xl mb-6 shadow-sm">
            <h2 class="text-3xl font-bold text-gray-900 mb-2">${tour.name}</h2>
            <p class="text-2xl text-pink-600 font-bold mb-6">${tour.price}</p>
            <div class="border-t pt-6 text-gray-700 leading-relaxed space-y-2">${tour.detail}</div>
            <div class="mt-8 flex justify-end gap-4 border-t pt-6">
                <button onclick="hideTourDetail()" class="px-6 py-3 border border-gray-300 rounded-xl font-medium hover:bg-gray-50">Đóng lại</button>
                <button onclick="hideTourDetail(); openBookingForm('${tour.name}')" class="px-8 py-3 bg-green-600 hover:bg-green-700 text-white font-bold rounded-xl shadow-md">Đặt hành trình này</button>
            </div>
        </div>`;
    modal.classList.remove('hidden'); 
    modal.classList.add('flex');
}
function hideTourDetail() {
    const modal = document.getElementById('tourDetailModal');
    if (modal) { 
        modal.classList.add('hidden'); 
        modal.classList.remove('flex'); 
    }
}

function openBookingForm(n) { 
    const currentUser = JSON.parse(localStorage.getItem('hkt_current_user'));
    if (!currentUser) { 
        showToast("Vui lòng đăng nhập để đặt tour!", "error"); 
        setTimeout(() => { window.location.href = 'dangnhap.html'; }, 1000); 
        return; 
    } 
    document.getElementById('bookingTourName').value = n; 
    const phoneInput = document.getElementById('bookingPhone');
    if (phoneInput && currentUser.phone) phoneInput.value = currentUser.phone;
    
    document.getElementById('bookingModal').classList.remove('hidden'); 
    document.getElementById('bookingModal').classList.add('flex'); 
}

function closeBookingForm() { 
    document.getElementById('bookingModal').classList.add('hidden'); 
    document.getElementById('bookingModal').classList.remove('flex'); 
}

function handleBooking(e) { 
    e.preventDefault(); 
    const p = document.getElementById('bookingPhone').value; 
    if (!/^[0-9]{10}$/.test(p)) { 
        showToast("Vui lòng nhập đúng 10 số điện thoại!", "error"); 
        return false; 
    } 
    showToast("Đặt tour thành công! Chúng tôi sẽ sớm liên hệ."); 
    closeBookingForm(); 
    return false; 
}

function handleRegister() { 
    const username = document.getElementById('regUsername').value.trim();
    const password = document.getElementById('regPassword').value.trim();
    const phone = document.getElementById('regPhone').value.trim();
    if (!username || !password) return showToast("Vui lòng nhập đủ Tên tài khoản và Mật khẩu!", "error");
    if (!/^[0-9]{10}$/.test(phone)) return showToast("Vui lòng nhập đúng 10 số điện thoại!", "error");
    let registeredUsers = JSON.parse(localStorage.getItem('hkt_users')) || {};
  
    if (registeredUsers[username]) {
        return showToast("Tên tài khoản này đã có người sử dụng!", "error");
    }
 
    registeredUsers[username] = { password: password, phone: phone };
    localStorage.setItem('hkt_users', JSON.stringify(registeredUsers));
    
    showToast("Đăng ký thành công!"); 
    setTimeout(() => { window.location.href = 'dangnhap.html'; }, 1000);
}

function handleLogin() { 
    const username = document.getElementById('loginUsername').value.trim(); 
    const password = document.getElementById('loginPassword').value.trim(); 
    
    if (!username || !password) return showToast("Vui lòng nhập đủ thông tin!", "error"); 
    let registeredUsers = JSON.parse(localStorage.getItem('hkt_users')) || {};
    let user = registeredUsers[username];
    if (user && user.password === password) {
        localStorage.setItem('hkt_current_user', JSON.stringify({ name: username, phone: user.phone }));
        showToast(`Đăng nhập thành công!`); 
        setTimeout(() => { window.location.href = 'index.html'; }, 1000);
    } else {
        showToast("Sai tên tài khoản hoặc mật khẩu!", "error");
    }
}

function logout() { 
    localStorage.removeItem('hkt_current_user'); 
    showToast("Đã đăng xuất tài khoản."); 
    updateAuthUI(); 
}

function updateAuthUI() {
    const currentUser = JSON.parse(localStorage.getItem('hkt_current_user'));
    const auth = document.getElementById('auth-buttons');
    const info = document.getElementById('user-info');
    
    if (!auth || !info) return;
    
    if (currentUser) { 
        auth.style.display="none"; 
        info.classList.remove('hidden'); 
        info.classList.add('flex'); 
        document.getElementById('username-display').textContent=`Xin chào, ${currentUser.name}`; 
    } else { 
        // Hiện lại nút Đăng nhập/Đăng ký, ẩn tên người dùng
        auth.style.display="flex"; 
        info.classList.add('hidden'); 
        info.classList.remove('flex'); 
    }
}