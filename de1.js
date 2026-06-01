const DANH_SACH_CAU_HOI = [
    // ================= PHẦN I: 12 CÂU TRẮC NGHIỆM ĐƠN (Từ Câu 1 đến Câu 12) =================
    {
        id: "1",
        type: "single",
        title: "Câu 1. Với a là số thực dương tùy ý, <sup>3</sup>&radic;(a<sup>2</sup>) bằng:",
        options: ["A. a<sup>1/6</sup>", "B. a<sup>6</sup>", "C. a<sup>2/3</sup>", "D. a<sup>3/2</sup>"],
        correct: "C"
    },
    {
        id: "2",
        type: "single",
        title: "Câu 2. Tập xác định của hàm số y = (x - 1)<sup>&radic;3</sup> là:",
        options: ["A. ℝ \\ {1}", "B. ℝ", "C. (1; +&infin;)", "D. (-1; +&infin;)"],
        correct: "C"
    },
    {
        id: "3",
        type: "single",
        title: "Câu 3. Một khối lăng trụ có diện tích đáy bằng 6 và chiều cao bằng 5. Thể tích của khối lăng trụ đó bằng:",
        options: ["A. 15", "B. 90", "C. 10", "D. 30"],
        correct: "D"
    },
    {
        id: "4",
        type: "single",
        title: "Câu 4. Cho a, b là các số thực dương, a &ne; 1 thỏa mãn log<sub>a</sub>b = 3. Tính log<sub>&radic;a</sub>(a<sup>2</sup>b<sup>3</sup>)?:",
        options: ["A. 24", "B. 25", "C. 22", "D. 23"],
        correct: "C"
    },
    {
        id: "5",
        type: "single",
        // Chèn thẻ hình ảnh cho câu 5
        title: "Câu 5. Đường cong trong hình bên là của đồ thị hàm số nào sau đây?<br><img src='cau5.png' style='max-width:100%; max-height:220px; display:block; margin:10px 0;' alt='Đồ thị câu 5'>",
        options: ["A. y = log<sub>2</sub>x", "B. y = (0,8)<sup>x</sup>", "C. y = log<sub>0,4</sub>x", "D. y = (&radic;2)<sup>x</sup>"],
        correct: "B"
    },
    {
        id: "6",
        type: "single",
        title: "Câu 6. Nghiệm của phương trình 3<sup>x+2</sup> = 27 là:",
        options: ["A. x = -2", "B. x = -1", "C. x = 2", "D. x = 1"],
        correct: "D"
    },
    {
        id: "7",
        type: "single",
        title: "Câu 7. Tính thể tích của khối lăng trụ đứng có đáy là tam giác vuông cân, cạnh góc vuông là a, cạnh bên bằng 2a:",
        options: ["A. V = 1/2 a<sup>3</sup>", "B. V = 2a<sup>3</sup>", "C. V = a<sup>3</sup>", "D. V = 4a<sup>3</sup>"],
        correct: "C"
    },
    {
        id: "8",
        type: "single",
        title: "Câu 8. Tập nghiệm của bất phương trình log<sub>1/4</sub>(x - 1) > -1 là:",
        options: ["A. (5/4; +&infin;)", "B. (1; 5/4)", "C. (-&infin;; 2)", "D. (1; 5)"],
        correct: "D"
    },
    {
        id: "9",
        type: "single",
        title: "Câu 9. Cho hình lăng trụ ABC.A'B'C' có đường vuông góc chung của AA' và BC' là AB. Nhận xét nào dưới đây sai?",
        options: ["A. ∠A'C'B' = 90°", "B. ∠ABC = 90°", "C. ∠A'B'B = 90°", "D. ∠ABC' = 90°"],
        correct: "A"
    },
    {
        id: "10",
        type: "single",
        title: "Câu 10. Trong không gian cho hai đường thẳng phân biệt a, b và mặt phẳng (P), trong đó a &perp; (P). Mệnh đề nào sau đây sai?",
        options: ["A. Nếu b ∥ a thì b &perp; (P)", "B. Nếu b &perp; a thì b ∥ (P)", "C. Nếu b ∥ (P) thì b &perp; a", "D. Nếu b &perp; (P) thì b ∥ a"],
        correct: "B"
    },
    {
        id: "11",
        type: "single",
        title: "Câu 11. Cho tứ diện OABC có OA, OB, OC đôi một vuông góc với nhau và OA = OB = OC = a. Khi đó thể tích của khối tứ diện OABC là:",
        options: ["A. a<sup>3</sup>/2", "B. a<sup>3</sup>/12", "C. a<sup>3</sup>/6", "D. a<sup>3</sup>/3"],
        correct: "C"
    },
    {
        id: "12",
        type: "single",
        title: "Câu 12. Cho một khối chóp có chiều cao bằng h và diện tích đáy bằng B. Nếu giữ nguyên chiều cao h, còn diện tích đáy tăng lên 3 lần thì ta được một khối chóp mới có thể tích là:",
        options: ["A. V = Bh", "B. V = 1/6 Bh", "C. V = 1/2 Bh", "D. V = 1/3 Bh"],
        correct: "A"
    },

    // ================= PHẦN II: 4 CÂU TRẮC NGHIỆM ĐÚNG/SAI (Từ Câu 13 đến Câu 16) =================
    {
        id: "13",
        type: "tf",
        title: "Câu 13. Cho phương trình 9<sup>x+1</sup> - 13.6<sup>x</sup> + 4<sup>x+1</sup> = 0. Xét tính đúng sai của các mệnh đề sau:",
        options: [
            "a) Nếu đặt (3/2)<sup>x</sup> = t thì phương trình đã cho trở thành 9t<sup>2</sup> - 13t + 4 = 0.",
            "b) Phương trình đã cho có hai nghiệm, trong đó có một nghiệm nguyên âm.",
            "c) Tổng tất cả các nghiệm của phương trình đã cho bằng 0.",
            "d) Phương trình đã cho có hai nghiệm và đều là nghiệm nguyên dương."
        ],
        correct: "Đ,Đ,S,S"
    },
    {
        id: "14",
        type: "tf",
        title: "Câu 14. Cho hình chóp tứ giác S.ABCD có cạnh SA vuông góc với hình vuông đáy ABCD. Xét tính đúng sai của các nhận xét sau:",
        options: [
            "a) Tam giác SBC vuông tại B.",
            "b) Tam giác SDC vuông tại C.",
            "c) Mặt phẳng (SBC) vuông góc với mặt phẳng (SAB).",
            "d) Mặt phẳng (SCD) vuông góc với mặt phẳng (SAD)."
        ],
        correct: "Đ,Đ,Đ,Đ"
    },
    {
        id: "15",
        type: "tf",
        // Chèn thẻ hình ảnh cho câu 15
        title: "Câu 15. Giả sử A, B là hai điểm phân biệt trên đồ thị của hàm số y = log<sub>3</sub>(5x - 3) sao cho A là trung điểm của đoạn OB.<br><img src='cau15.png' style='max-width:100%; max-height:220px; display:block; margin:10px 0;' alt='Đồ thị câu 15'>",
        options: [
            "a) Hoành độ của điểm B là một số nguyên.",
            "b) Trung điểm của đoạn thẳng OB có tọa độ (12/5; 1).",
            "c) Gọi H là hình chiếu của điểm B xuống trục hoành. Khi đó S<sub>&Delta;OBH</sub> = &radic;61/25.",
            "d) Đoạn thẳng AB có độ dài bằng &radic;61/5."
        ],
        correct: "Đ,S,S,Đ"
    },
    {
        id: "16",
        type: "tf",
        title: "Câu 16. Cho hình chóp S.ABC có đáy ABC là tam giác đều cạnh a. Biết SA = a&radic;2 và SA vuông góc với mặt đáy. Gọi M là trung điểm của BC và H là hình chiếu vuông góc của A lên SM. Xét tính đúng sai của các khẳng định sau:",
        options: [
            "a) Đường thẳng AH vuông góc với mặt phẳng (SBC).",
            "b) Đường thẳng SH là hình chiếu của đường thẳng SA lên mặt phẳng (SBC).",
            "c) Độ dài đoạn thẳng AH bằng 6a/11.",
            "d) Cosin góc tạo bởi đường thẳng SA và mặt phẳng (SBC) bằng &radic;11/33."
        ],
        correct: "Đ,Đ,S,S"
    },

    // ================= PHẦN III: 6 CÂU TRẢ LỜI NGẮN (Từ Câu 17 đến Câu 22) =================
    {
        id: "17",
        type: "short",
        title: "Câu 17. Cho biết hai số thực dương a và b thỏa mãn log<sub>a</sub><sup>2</sup>(ab) = 4; với b > 1 > a > 0. Hỏi giá trị của biểu thức log<sub>a</sub><sup>3</sup>(ab<sup>2</sup>) tương ứng bằng bao nhiêu?",
        correct: "-125"
    },
    {
        id: "18",
        type: "short",
        title: "Câu 18. Tính tổng các giá trị nguyên của tham số m &in; [0; 5] để bất phương trình log<sub>2</sub>(5<sup>x</sup> - 1) &le; m có nghiệm x &ge; 1.",
        correct: "14"
    },
    {
        id: "19",
        type: "short",
        title: "Câu 19. Một người gửi ngân hàng 200 triệu đồng với kì hạn 1 tháng theo hình thức lãi kép, lãi suất 0,58% một tháng. Hỏi sau ít nhất bao nhiêu tháng thì người đó có tối thiểu 225 triệu đồng trong tài khoản tiết kiệm, biết rằng ngân hàng chỉ tính lãi khi đến kì hạn?",
        correct: "21"
    },
    {
        id: "20",
        type: "short",
        title: "Câu 20. Cho hình chóp tứ giác đều S.ABCD có đáy ABCD là hình vuông, E là điểm đối xứng của D qua trung điểm SA. Gọi M, N lần lượt là trung điểm của AE và BC. Gọi &alpha; là góc giữa hai đường thẳng MN và BD. Tính sin&alpha;:",
        correct: "1"
    },
    {
        id: "21",
        type: "short",
        title: "Câu 21. Cho hình chóp S.ABCD có đáy ABCD là hình chữ nhật, AB = 1, AD = 2&radic;3. Cạnh bên SA vuông góc với đáy, biết tam giác SAD có diện tích S = 3. Tính khoảng cách từ C đến (SBD) (Kết quả làm tròn đến hàng phần trăm):",
        correct: "0.84"
    },
    {
        id: "22",
        type: "short",
        title: "Câu 22. Cho hình chóp S.ABCD có đáy ABCD là hình chữ nhật, AB = 1, AD = &radic;3, tam giác SAB cân tại S và nằm trong mặt phẳng vuông góc với đáy, khoảng cách giữa AB và SC bằng 3/2. Tính thể tích V của khối chóp S.ABCD (Kết quả làm tròn đến hàng phần trăm):",
        correct: "1.73"
    }
];