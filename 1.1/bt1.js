let mangSoNguyen = [];
function hienThiMenu() {
    console.log("=== MENU CHƯƠNG TRÌNH ===");
    console.log("1. Nhập mảng số nguyên");
    console.log("2. Hiển thị mảng");
    console.log("3. Tìm max và min trong mảng");
    console.log("4. Tính tổng các phần tử");
    console.log("5. Đếm số lần xuất hiện của một số");
    console.log("6. Sắp xếp mảng tăng dần");
    console.log("7. Thoát chương trình");
}
function nhapMang() {
    let doDai = parseInt(prompt("Nhập độ dài mảng: "));
    mangSoNguyen = [];
    
    for (let i = 0; i < doDai; i++) {
        let so = parseInt(prompt(`Nhập phần tử thứ ${i + 1}: `));
        mangSoNguyen.push(so);
    }
    console.log("Đã nhập mảng thành công!");
}
function hienThiMang() {
    if (mangSoNguyen.length === 0) {
        console.log("Mảng rỗng!");
    } else {
        console.log("Mảng hiện tại:", mangSoNguyen);
    }
}
function timMaxMin() {
    if (mangSoNguyen.length === 0) {
        console.log("Mảng rỗng!");
        return;
    }
    mangSoNguyen.sort();
    let max = mangSoNguyen[mangSoNguyen.length-1]
    let min = mangSoNguyen[0]
    console.log(`gia tri lon nha la: ${max}`)
    console.log(`gia tri nho nha la: ${min}`)
}
function tinhTong() {
    if (mangSoNguyen.length === 0) {
        console.log("Mảng rỗng!");
        return;
    }
    
    let tong = mangSoNguyen.reduce((sum, num) => sum + num, 0);
    console.log(`Tổng các phần tử: ${tong}`);
}
function demSoLanXuatHien() {
    if (mangSoNguyen.length === 0) {
        console.log("Mảng rỗng!");
        return;
    }
    let dem = 0;
    let soCanTim = parseInt(prompt("Nhập số cần tìm: "));
    for(let i=0;i<mangSoNguyen.length;i++){
        if(mangSoNguyen[i]==soCanTim){
            dem++;
        }
    }
    console.log(`Số ${soCanTim} xuất hiện ${dem} lần`);
}
function sapXepTangDan() {
    if (mangSoNguyen.length === 0) {
        console.log("Mảng rỗng!");
        return;
    }
    
    mangSoNguyen.sort();
    console.log("Mảng sau khi sắp xếp tăng dần: " + mangSoNguyen.join(", "));
}
function chayChuongTrinh() {
    let luaChon;
    
    do {
        hienThiMenu();
        luaChon = parseInt(prompt("Nhập lựa chọn của bạn (1-7): "));
        switch (luaChon) {
            case 1:
                nhapMang();
                break;
            case 2:
                hienThiMang();
                break;
            case 3:
                timMaxMin();
                break;
            case 4:
                tinhTong();
                break;
            case 5:
                demSoLanXuatHien();
                break;
            case 6:
                sapXepTangDan();
                break;
            case 7:
                console.log("Tạm biệt!");
                break;
            default:
                console.log("Lựa chọn không hợp lệ! Vui lòng chọn từ 1-7");
        }
        
    } while (luaChon !== 7);
}
chayChuongTrinh();