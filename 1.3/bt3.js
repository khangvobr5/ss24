let mangSoNguyen = [];
function hienMenu() {
    console.log("\n=== MENU ===");
    console.log("1. Nhập mảng số nguyên");
    console.log("2. Hiển thị mảng");
    console.log("3. Tìm phần tử lớn nhất và chỉ số của nó");
    console.log("4. Tính tổng và trung bình cộng của các số dương");
    console.log("5. Đảo ngược mảng");
    console.log("6. Kiểm tra mảng có đối xứng không");
    console.log("7. Thoát chương trình");
}
function nhapMang() {
    let doDai = Number(prompt("Nhập độ dài mảng: "));
    mangSoNguyen = [];
    for (let i = 0; i < doDai; i++) {
        let so = Number(prompt(`Nhập phần tử thứ ${i + 1}: `));
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
function timPhanTuLonNhat() {
    if (mangSoNguyen.length === 0) {
        console.log("Mảng rỗng!");
        return;
    }
    let lonNhat = mangSoNguyen[0];
    let chiSo = 0;
    for (let i = 1; i < mangSoNguyen.length; i++) {
        if (mangSoNguyen[i] > lonNhat) {
            lonNhat = mangSoNguyen[i];
            chiSo = i;
        }
    }
    console.log(`Phần tử lớn nhất: ${lonNhat}, chỉ số: ${chiSo}`);
}
function tinhTongVaTrungBinhSoDuong() {
    if (mangSoNguyen.length === 0) {
        console.log("Mảng rỗng!");
        return;
    }
    let tong = 0;
    let demSoDuong = 0;
    for (let i = 0; i < mangSoNguyen.length; i++) {
        if (mangSoNguyen[i] > 0) {
            tong += mangSoNguyen[i];
            demSoDuong++;
        }
    }
    const trungBinh = demSoDuong > 0 ? tong / demSoDuong : 0;
    console.log("Trung bình cộng:", trungBinh);
}
function daoNguocMang() {
    if (mangSoNguyen.length === 0) {
        console.log("Mảng rỗng!");
        return;
    }
    mangSoNguyen.reverse();
    console.log("Mảng sau khi đảo ngược:", mangSoNguyen);
}
function kiemTraDoiXung() {
    if (mangSoNguyen.length === 0) {
        console.log("Mảng rỗng!");
        return;
    }
    let doiXung = true;
    for (let i = 0; i < Math.floor(mangSoNguyen.length / 2); i++) {
        if (mangSoNguyen[i] !== mangSoNguyen[mangSoNguyen.length - 1 - i]) {
            doiXung = false;
            break;
        }
    }
    if (doiXung) {
        console.log("Mảng đối xứng!");
    } else {
        console.log("Mảng không đối xứng!");
    }
}
function chayChuongTrinh() {
    let luaChon;
    do {
        hienMenu();
        luaChon = Number(prompt("Nhập lựa chọn của bạn (1-7): "));
        
        switch (luaChon) {
            case 1:
                nhapMang();
                break;
            case 2:
                hienThiMang();
                break;
            case 3:
                timPhanTuLonNhat();
                break;
            case 4:
                tinhTongVaTrungBinhSoDuong();
                break;
            case 5:
                daoNguocMang();
                break;
            case 6:
                kiemTraDoiXung();
                break;
            case 7:
                console.log("Tạm biệt!");
                break;
            default:
                console.log("Lựa chọn không hợp lệ! Vui lòng chọn từ 1-7.");
        }
    } while (luaChon !== 7);
}
chayChuongTrinh();