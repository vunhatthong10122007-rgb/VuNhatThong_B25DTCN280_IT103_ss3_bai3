const customerAge = 19;
const movieRating = "T18";
const seatType = "VIP";
const roomFormatCode = 2;
const dayOfWeek = 4;
const isStudent = true;
const isPhysicalTicket = true;
const comboOptionCode = 1;

let isOrderValid = true;

if (isNaN(customerAge) || customerAge < 1 || customerAge > 120 || !Number.isInteger(customerAge)) {
  isOrderValid = false;
  console.log("Tuổi khách hàng không hợp lệ.");
} else {
  if (movieRating === "P") {
  } else if (movieRating === "T13") {
    if (customerAge < 13) {
      isOrderValid = false;
      console.log("Khách hàng không đủ độ tuổi theo quy định của bộ phim.");
    }
  } else if (movieRating === "T16") {
    if (customerAge < 16) {
      isOrderValid = false;
      console.log("Khách hàng không đủ độ tuổi theo quy định của bộ phim.");
    }
  } else if (movieRating === "T18") {
    if (customerAge < 18) {
      isOrderValid = false;
      console.log("Khách hàng không đủ độ tuổi theo quy định của bộ phim.");
    }
  } else {
    isOrderValid = false;
    console.log("Mã phân loại phim không tồn tại.");
  }
}

let baseSeatPrice = 0;
let seatDescription = "";

if (isOrderValid) {
  if (seatType === "STANDARD") {
    baseSeatPrice = 80000;
    seatDescription = "Ghế Tiêu Chuẩn";
  } else if (seatType === "VIP") {
    baseSeatPrice = 95000;
    seatDescription = "Ghế VIP";
  } else if (seatType === "COUPLE") {
    baseSeatPrice = 160000;
    seatDescription = "Ghế Đôi Sweetbox";
  } else {
    isOrderValid = false;
    baseSeatPrice = 0;
    console.log("Hạng ghế không hợp lệ.");
  }
}

let roomSurcharge = 0;
let roomFormatName = "";

if (isOrderValid) {
  switch (roomFormatCode) {
    case 1:
      roomFormatName = "2D Tiêu Chuẩn";
      roomSurcharge = 0;
      break;
    case 2:
      roomFormatName = "3D IMAX";
      roomSurcharge = 40000;
      break;
    case 3:
      roomFormatName = "4DX Đa Giác Quan";
      roomSurcharge = 60000;
      break;
    default:
      isOrderValid = false;
      roomSurcharge = 0;
      console.log("Định dạng phòng chiếu không tồn tại.");
      break;
  }
}

let comboFee = 0;
let comboName = "";

if (isOrderValid) {
  switch (comboOptionCode) {
    case 0:
      comboName = "Không chọn bắp nước";
      comboFee = 0;
      break;
    case 1:
      comboName = "Solo Box (1 Bắp Ngọt + 1 Nước)";
      comboFee = 65000;
      break;
    case 2:
      comboName = "Couple Box (1 Bắp Ngọt + 2 Nước + 1 Snack)";
      comboFee = 99000;
      break;
    default:
      comboName = "Gói không hợp lệ";
      comboFee = 0;
      console.log("Mã combo không hợp lệ, chuyển về mặc định không sử dụng.");
      break;
  }
}

if (isOrderValid) {
  const discountAmount = isStudent && (dayOfWeek >= 2 && dayOfWeek <= 6) ? baseSeatPrice * 0.2 : 0;
  const netTicketPrice = baseSeatPrice - discountAmount;

  const physicalTicketFee = isPhysicalTicket ? 5000 : 0;

  const totalPayable = netTicketPrice + roomSurcharge + comboFee + physicalTicketFee;

  const logisticsGift = totalPayable >= 200000 
    ? "Voucher Bắp Ngọt Miễn Phí Suất Chiếu Kế Tiếp" 
    : "Không có quà tặng kèm";

  console.log(`========================================
              PHIẾU ĐIỀU PHỐI HẬU CẦN VÀ VÉ XEM PHIM
========================================
Độ tuổi khán giả     : ${customerAge} tuổi (Mác phim: ${movieRating})
Hạng ghế lựa chọn    : ${seatDescription} - ${baseSeatPrice} VNĐ
Định dạng phòng chiếu: ${roomFormatName} (Phụ phí: ${roomSurcharge} VNĐ)
Giảm giá ưu đãi HSSV : -${discountAmount} VNĐ
Tiền vé sau ưu đãi   : ${netTicketPrice} VNĐ
Dịch vụ bắp nước     : ${comboName} (${comboFee} VNĐ)
Ấn phẩm vé cứng      : ${isPhysicalTicket ? "Có yêu cầu in" : "Không in"} (${physicalTicketFee} VNĐ)
----------------------------------------
TỔNG THANH TOÁN      : ${totalPayable} VNĐ
QUÀ TẶNG KÈM THEO    : ${logisticsGift}
========================================`);
}