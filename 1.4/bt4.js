let mangHaiChieu = [];
function hienMenu() {
    console.log("\n=== MENU ===");
    console.log("1. Nhập mảng 2 chiều");
    console.log("2. Hiển thị mảng 2 chiều");
    console.log("3. Tính tổng các phần tử trong mảng");
    console.log("4. Tìm phần tử lớn nhất và chỉ số của nó");
    console.log("5. Tính trung bình cộng các phần tử của một hàng");
    console.log("6. Đảo ngược các hàng trong mảng");
    console.log("7. Thoát chương trình");
}
function nhapMangHaiChieu() {
    let soHang = Number(prompt("Nhập số hàng: "));
    let soCot = Number(prompt("Nhập số cột: "));
    mangHaiChieu = [];
    
    for (let i = 0; i < soHang; i++) {
        let hang = [];
        for (let j = 0; j < soCot; j++) {
            let giaTri = Number(prompt(`Nhập phần tử [${i}][${j}]: `));
            hang.push(giaTri);
        }
        mangHaiChieu.push(hang);
    }
    console.log("Đã nhập mảng thành công!");
}
function hienThiMangHaiChieu() {
    if (mangHaiChieu.length === 0) {
        console.log("Mảng rỗng!");
        return;
    }
    console.log("Mảng 2 chiều hiện tại:");
    for (let i = 0; i < mangHaiChieu.length; i++) {
        console.log(mangHaiChieu[i]);
    }
}
function tinhTongPhanTu() {
    if (mangHaiChieu.length === 0) {
        console.log("Mảng rỗng!");
        return;
    }
    let tong = 0;
    for (let i = 0; i < mangHaiChieu.length; i++) {
        tong += mangHaiChieu[i].reduce((a, b) => a + b, 0);
    }
    console.log("Tổng các phần tử trong mảng:", tong);
}
function timPhanTuLonNhat() {
    if (mangHaiChieu.length === 0) {
        console.log("Mảng rỗng!");
        return;
    }
    let lonNhat = mangHaiChieu[0][0];
    let chiSoHang = 0;
    let chiSoCot = 0;

    for (let i = 0; i < mangHaiChieu.length; i++) {
        for (let j = 0; j < mangHaiChieu[i].length; j++) {
            if (mangHaiChieu[i][j] > lonNhat) {
                lonNhat = mangHaiChieu[i][j];
                chiSoHang = i;
                chiSoCot = j;
            }
        }
    }
    console.log(`Phần tử lớn nhất: ${lonNhat}, chỉ số: [${chiSoHang}][${chiSoCot}]`);
}
function tinhTrungBinhHang() {
    if (mangHaiChieu.length === 0) {
        console.log("Mảng rỗng!");
        return;
    }
    let hang = Number(prompt(`Nhập số hàng cần tính (0 đến ${mangHaiChieu.length - 1}): `));
    if (hang >= 0 && hang < mangHaiChieu.length) {
        let tong = 0;
        for (let i = 0; i < mangHaiChieu[hang].length; i++) {
            tong += mangHaiChieu[hang][i];
        }
        let trungBinh = parseFloat(tong / mangHaiChieu[hang].length);
        console.log(`Trung bình cộng hàng ${hang}: ${trungBinh}`);
    } else {
        console.log("Số hàng không hợp lệ!");
    }
}
function daoNguocHang() {
    if (mangHaiChieu.length === 0) {
        console.log("Mảng rỗng!");
        return;
    }
    mangHaiChieu.reverse();
    console.log("Mảng sau khi đảo ngược các hàng:");
    hienThiMangHaiChieu();
}
function chayChuongTrinh() {
    let luaChon;
    do {
        hienMenu();
        luaChon = Number(prompt("Nhập lựa chọn của bạn (1-7): "));
        
        switch (luaChon) {
            case 1:
                nhapMangHaiChieu();
                break;
            case 2:
                hienThiMangHaiChieu();
                break;
            case 3:
                tinhTongPhanTu();
                break;
            case 4:
                timPhanTuLonNhat();
                break;
            case 5:
                tinhTrungBinhHang();
                break;
            case 6:
                daoNguocHang();
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