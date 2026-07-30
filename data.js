const ITEMS = [
// ===== GS9 =====
{code:"GS9-D01", class:"GS9", type:"Tổng hợp", format:"docx", title:"Unit 1 – Local Community (Vocab + Bài tập)", link:"https://drive.google.com/file/d/1TebqkBckc4zwy7L4tfNT3EawI7_8_InL/view"},
{code:"GS9-D02", class:"GS9", type:"Tổng hợp", format:"docx", title:"Unit 2 – City Life (Vocab + Bài tập)", link:"https://drive.google.com/file/d/1t6-to4sQhaSkmzLaWc1e8tMOUmjAmYGS/view"},
{code:"GS9-D03", class:"GS9", type:"Tổng hợp", format:"docx", title:"Unit 3 – Healthy Living for Teens (Vocab + Bài tập)", link:"https://drive.google.com/file/d/1LWSpq4QQXjixT9ue_4rMqYvyhNDMX99i/view"},
{code:"GS9-D04", class:"GS9", type:"Tổng hợp", format:"docx", title:"Unit 4 – Remembering the Past (Vocab + Bài tập)", link:"https://drive.google.com/file/d/15x7sebkyirwjblod67R5j93N36T0RJVT/view"},
{code:"GS9-D05", class:"GS9", type:"Tổng hợp", format:"docx", title:"Unit 5 – Our Experiences (Vocab + Bài tập)", link:"https://drive.google.com/file/d/1UMuYnTp9RxpTusmpPrlUDTh5iXWO3lAF/view"},
{code:"GS9-D06", class:"GS9", type:"Tổng hợp", format:"docx", title:"Unit 6 – Vietnamese Lifestyle: Then and Now (Vocab + Bài tập)", link:"https://drive.google.com/file/d/1lg3l3UaLbfNJI6qS-Ewz80n3YdUI_1s0/view"},
{code:"GS9-V01", class:"GS9", type:"Vocabulary", format:"docx", title:"Unit 1 – Vocabulary (bản chỉ từ vựng)", link:"https://drive.google.com/file/d/1IdcCU7Sh1PnL7C6fwdXJCxvKFYh8ZKRU/view"},
{code:"GS9-V02", class:"GS9", type:"Vocabulary", format:"docx", title:"Unit 2 – Vocabulary (bản chỉ từ vựng)", link:"https://drive.google.com/file/d/1AN-XuJQH5V1VgEZMUW_2R9d2N2fqEB8I/view"},
{code:"GS9-V03", class:"GS9", type:"Vocabulary", format:"docx", title:"Unit 3 – Vocabulary (bản chỉ từ vựng)", link:"https://drive.google.com/file/d/1-X5S2KMHaCR6BNYEJUwQbHMsf670IlwH/view"},
{code:"GS9-V04", class:"GS9", type:"Vocabulary", format:"docx", title:"Unit 4 – Vocabulary (bản chỉ từ vựng)", link:"https://drive.google.com/file/d/193_nYN8J3wQsBLBuK6SbJ2IPNsqSO_qK/view"},
{code:"GS9-V05", class:"GS9", type:"Vocabulary", format:"docx", title:"Unit 5 – Vocabulary (bản chỉ từ vựng)", link:"https://drive.google.com/file/d/10xwgkiAVYUIKlyPvEDQYAOi9YUrMPg2O/view"},
{code:"GS9-V06", class:"GS9", type:"Vocabulary", format:"docx", title:"Unit 6 – Vocabulary (bản chỉ từ vựng)", link:"https://drive.google.com/file/d/1AxoP0SuDquZmtZ0CKkJ779fggyAnmMj-/view"},
{code:"GS9-C01", class:"GS9", type:"Collocation", format:"docx", title:"Unit 1 – Bảng Collocation tham khảo (84 cụm)", link:"https://docs.google.com/document/d/1hqfgEVx-xP-c-FMisB17YID8YMWqUlUpgxNCTTgJP2Y/view"},
{code:"GS9-H01", class:"GS9", type:"Collocation", format:"html", title:"Unit 1 – Test Collocation hằng ngày, Tuần 1 (5 bài × 30 câu)", link:"https://phamnhu021200-bot.github.io/gs9-u1-collocation-test-tuan1/", note:"Đang dùng — có chấm điểm, khóa theo ngày, gửi báo cáo email"},
{code:"GS9-H02", class:"GS9", type:"Word Form", format:"html", title:"Unit 1 – Test Word Form (5 tầng độ khó)", link:"https://phamnhu021200-bot.github.io/gs9-u1-wordform-test/"},
{code:"GS9-H03", class:"GS9", type:"Vocabulary", format:"html", title:"Unit 1 – Test từ vựng Level 2.5", link:"https://phamnhu021200-bot.github.io/quiz-gs9-u1-tuvung-level25/"},
{code:"GS9-H04", class:"GS9", type:"Collocation", format:"html", title:"Local Community – Test 50 câu (bản cũ)", link:"https://phamnhu021200-bot.github.io/quiz-localcommunity-50/", note:"Có thể trùng nội dung với GS9-H01, nên kiểm tra và xoá bớt"},
{code:"GS9-H05", class:"GS9", type:"Grammar", format:"html", title:"Test Question Word + To-infinitive", link:"https://phamnhu021200-bot.github.io/quiz-gs9-questionword-toinfinitive/"},
{code:"GS9-H06", class:"GS9", type:"Grammar", format:"html", title:"Simple Present vs Present Continuous", link:"https://phamnhu021200-bot.github.io/quiz-gr9-sp-pc/"},

// ===== GS6 =====
{code:"GS6-H01", class:"GS6", type:"Collocation", format:"html", title:"Unit 1 – Test Collocation 50 câu", link:"https://phamnhu021200-bot.github.io/gs6-unit1-collocation-test/", note:"Đang có dữ liệu học sinh làm bài thật"},
{code:"GS6-H02", class:"GS6", type:"Grammar", format:"html", title:"Chia động từ thì hiện tại đơn", link:"https://phamnhu021200-bot.github.io/quiz-gr6-chia-dong-tu/"},
{code:"GS6-H03", class:"GS6", type:"Grammar", format:"html", title:"Thì hiện tại đơn – Global Success", link:"https://phamnhu021200-bot.github.io/quiz-gr6-sp-basic/"},
{code:"GS6-H04", class:"GS6", type:"Grammar", format:"html", title:"Unit 1 – Chia động từ hiện tại đơn (bản A)", link:"https://phamnhu021200-bot.github.io/quiz-gr6-u1-verb/", note:"Trùng nội dung với GS6-H05 — nên giữ 1 bản"},
{code:"GS6-H05", class:"GS6", type:"Grammar", format:"html", title:"Unit 1 – Chia động từ hiện tại đơn (bản B)", link:"https://phamnhu021200-bot.github.io/quiz-gr6-unit1-verb/", note:"Trùng nội dung với GS6-H04 — nên giữ 1 bản"},

// ===== Lớp 5 =====
{code:"TA5-H01", class:"Lớp 5", type:"Vocabulary", format:"html", title:"Từ vựng Unit 1 + Unit 2", link:"https://phamnhu021200-bot.github.io/quiz-gr5-u1u2-vocab/"},

// ===== Lớp nền tảng =====
{code:"LNT-H01", class:"Lớp nền tảng", type:"Phrasal Verb", format:"html", title:"Phrasal Verbs – Bài 1", link:"https://phamnhu021200-bot.github.io/quiz-lopnentang-phrasalverb-bai1/"},
{code:"LNT-H02", class:"Lớp nền tảng", type:"Grammar", format:"html", title:"Question Word + To-infinitive – 100 câu", link:"https://phamnhu021200-bot.github.io/quiz-lopnentang-questionword-toinfinitive/"},
{code:"LNT-D01", class:"Lớp nền tảng", type:"Word Form", format:"docx", title:"Unit 1 – Test Word Form số 2 (3 phần: từ loại, MCQ, điền dạng từ)", link:"https://drive.google.com/file/d/1ik4JfzayDmR0UnIcBiKfFwO7U2Rej4pr/view"},
{code:"LNT-D02", class:"Lớp nền tảng", type:"Grammar", format:"docx", title:"Question Word + To-infinitive – Đề luyện tập 1 (20 MCQ + 10 viết lại câu)", link:"https://drive.google.com/file/d/11DUb2HVINFpgyRRu4r3FL-6zPn2M785Y/view"},
{code:"LNT-D03", class:"Lớp nền tảng", type:"Grammar", format:"docx", title:"Question Word + To-infinitive – Đề luyện tập 2 (20 MCQ + 10 viết lại câu)", link:"https://drive.google.com/file/d/1WS04ryzSOkKephVeqfQPBoQ6AUD_Tl6t/view"},

// ===== IELTS =====
{code:"IE-H01", class:"IELTS", type:"Vocabulary", format:"html", title:"Từ vựng IELTS – Bộ 1", link:"https://phamnhu021200-bot.github.io/tu-vung-ielts-1/", note:"Có bản cập nhật IE-H02, nên kiểm tra bản nào mới hơn"},
{code:"IE-H02", class:"IELTS", type:"Vocabulary", format:"html", title:"Từ vựng IELTS – Bộ 1.1 (bản cập nhật)", link:"https://phamnhu021200-bot.github.io/tu-vung-ielts-1.1/"},

// ===== Chưa phân loại rõ lớp =====
{code:"KH-H01", class:"Chưa phân loại", type:"Vocabulary", format:"html", title:"Từ vựng chủ đề Gia đình (Family)", link:"https://phamnhu021200-bot.github.io/quiz-family/"},
{code:"KH-H02", class:"Chưa phân loại", type:"Vocabulary", format:"html", title:"Từ vựng chủ đề Sở thích (Hobbies)", link:"https://phamnhu021200-bot.github.io/quiz-hobbies/"},
{code:"KH-H03", class:"Chưa phân loại", type:"Vocabulary", format:"html", title:"Từ vựng chủ đề Giải trí (Leisure)", link:"https://phamnhu021200-bot.github.io/quiz-leisure/"},
{code:"KH-H04", class:"Chưa phân loại", type:"Vocabulary", format:"html", title:"Từ vựng chủ đề Nhà cửa (My House)", link:"https://phamnhu021200-bot.github.io/quiz-myhouse/"},
{code:"KH-H05", class:"Chưa phân loại", type:"Vocabulary", format:"html", title:"Từ vựng chủ đề Trường học (School)", link:"https://phamnhu021200-bot.github.io/quiz-school-vocab/"},
{code:"KH-H06", class:"Chưa phân loại", type:"Grammar", format:"html", title:"Động từ TO BE", link:"https://phamnhu021200-bot.github.io/quiz-tobe/"},
{code:"KH-H07", class:"Chưa phân loại", type:"Grammar", format:"html", title:"TO BE – Câu phủ định (bản A)", link:"https://phamnhu021200-bot.github.io/quiz-tobe-phu-dinh/", note:"Trùng với KH-H08 — nên giữ 1 bản"},
{code:"KH-H08", class:"Chưa phân loại", type:"Grammar", format:"html", title:"TO BE – Câu phủ định (bản B)", link:"https://phamnhu021200-bot.github.io/quiz-tobe-phudinh/", note:"Trùng với KH-H07 — nên giữ 1 bản"},
{code:"KH-H09", class:"Chưa phân loại", type:"Grammar", format:"html", title:"Nhận biết các thì", link:"https://phamnhu021200-bot.github.io/quiz-nhanbietthi/"},
{code:"KH-H10", class:"Chưa phân loại", type:"Word Form", format:"html", title:"Xác định từ loại – Unit 1", link:"https://phamnhu021200-bot.github.io/quiz-tu-loai-unit1/"},
{code:"KH-H11", class:"Chưa phân loại", type:"Grammar", format:"html", title:"4 thì cơ bản", link:"https://phamnhu021200-bot.github.io/quiz-4thi/"},
{code:"KH-H12", class:"Chưa phân loại", type:"Khác", format:"html", title:"test-1 (chưa rõ nội dung)", link:"https://phamnhu021200-bot.github.io/test-1/", note:"Không rõ mục đích — nên kiểm tra, xoá nếu không dùng"},
];

