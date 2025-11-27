import { Leaf, Snowflake, CheckCircle, AlertTriangle, Thermometer, Layers } from 'lucide-react';

export interface SlideData {
  id: string;
  category: string;
  title: string;
  icon: any; // Using 'any' for Lucide icon component type simplicity in strict mode
  color: string;
  image: string;
  content: {
    type: 'list' | 'steps' | 'warning' | 'intro';
    items: string[];
    subtext?: string;
  };
}

export const COURSE_DATA: SlideData[] = [
  {
    id: 'intro',
    category: 'Giới thiệu',
    title: 'Tiêu Chuẩn Hoa Quả',
    icon: CheckCircle,
    color: 'bg-green-600',
    image: 'https://picsum.photos/id/1080/600/400', // Strawberry/Fruit generic
    content: {
      type: 'intro',
      items: [
        'Chào mừng đến với khóa học tiêu chuẩn nguyên liệu.',
        'Khóa học này sẽ hướng dẫn quy chuẩn, bảo quản và sơ chế các loại hoa quả tại cửa hàng.',
      ],
      subtext: 'Nhấn "Bắt đầu" để tiếp tục',
    },
  },
  {
    id: 'mango-1',
    category: 'Xoài Tươi',
    title: 'Quy Chuẩn Chung',
    icon: CheckCircle,
    color: 'bg-yellow-500',
    image: 'https://picsum.photos/id/102/600/400', // Mango-ish color
    content: {
      type: 'list',
      items: [
        'Loại xoài: Xoài Úc, Xoài Cát Chu, Xoài Móc.',
        'CHỈ sử dụng xoài tươi. KHÔNG dùng xoài cấp đông.',
        'Tiêu chuẩn: Chín vàng đều, thơm, ngọt.',
        'Loại bỏ: Quả non, chua, thối, hoặc nhạt vị.',
      ],
    },
  },
  {
    id: 'mango-2',
    category: 'Xoài Tươi',
    title: 'Bảo Quản & Sơ Chế',
    icon: Thermometer,
    color: 'bg-yellow-500',
    image: 'https://picsum.photos/id/102/600/400',
    content: {
      type: 'steps',
      items: [
        'Phân loại khi nhập về: Quả chín dùng trước, quả xanh để nơi thoáng mát.',
        'Kiểm tra hàng ngày: Loại bỏ quả hỏng ngay lập tức.',
        'Sơ chế: Chỉ gọt vừa đủ dùng. Xoài đã gọt phải bọc màng bọc thực phẩm kín và cất tủ mát.',
        'Lưu ý: Không sơ chế quá nhiều tránh bị ủng, mất mùi.',
      ],
    },
  },
  {
    id: 'decor-1',
    category: 'Lá Decor',
    title: 'Lá Hương Thảo',
    icon: Leaf,
    color: 'bg-emerald-600',
    image: 'https://picsum.photos/id/292/600/400', // Herbs
    content: {
      type: 'list',
      items: [
        'Sử dụng: Cắt khúc 3-4cm để trang trí cốc.',
        'Bước 1: Ngâm nước 30-40 phút khi mới nhập về, sau đó rửa sạch.',
        'Bước 2: Để ráo nước hoàn toàn trước khi bảo quản.',
      ],
    },
  },
  {
    id: 'decor-2',
    category: 'Lá Decor',
    title: 'Quy Trình Bảo Quản Lạnh',
    icon: Layers,
    color: 'bg-emerald-600',
    image: 'https://picsum.photos/id/292/600/400',
    content: {
      type: 'steps',
      items: [
        'Chuẩn bị hộp/túi: Lót giấy ẩm xuống đáy.',
        'Xếp lớp: 1 lớp lá xen kẽ 1 lớp giấy ẩm.',
        'Trên cùng: Phủ 1 lớp giấy ẩm.',
        'Lưu ý: Chia nhỏ túi 200g. Để ngăn mát, tránh xa cục lạnh trực tiếp (tránh đen lá).',
      ],
    },
  },
  {
    id: 'avocado-1',
    category: 'Quả Bơ',
    title: 'Loại & Tiêu Chuẩn',
    icon: CheckCircle,
    color: 'bg-green-700',
    image: 'https://picsum.photos/id/493/600/400', // Avocado/Green fruit
    content: {
      type: 'list',
      items: [
        'Loại: Bơ Cuba, Bơ Booth, Bơ 034, Bơ Sáp.',
        'Bơ 034: Chín kỹ, thịt dẻo, ngậy, không xơ.',
        'Nguyên tắc: Chỉ dùng bơ tươi, KHÔNG dùng bơ cấp đông.',
      ],
    },
  },
  {
    id: 'avocado-2',
    category: 'Quả Bơ',
    title: 'Ủ Chín & Bảo Quản',
    icon: Thermometer,
    color: 'bg-green-700',
    image: 'https://picsum.photos/id/493/600/400',
    content: {
      type: 'steps',
      items: [
        'Khi nhập về: Rải ra nền thoáng mát để tránh hấp hơi.',
        'Phân loại sau 30p: Quả chín dùng trước, quả xanh/ương để riêng.',
        'Mẹo ủ chín: Đắp khăn ẩm lên bơ xanh/ương.',
        'Sơ chế: Bơ chín có thể cắt tủ lạnh nguyên quả hoặc sơ chế (dùng bao nhiêu sơ chế bấy nhiêu).',
      ],
    },
  },
  {
    id: 'frozen-1',
    category: 'Đồ Đông Lạnh',
    title: 'Sầu Riêng',
    icon: Snowflake,
    color: 'bg-blue-500',
    image: 'https://picsum.photos/id/909/600/400', // Something textured
    content: {
      type: 'warning',
      items: [
        'Nguồn gốc: Chỉ dùng hàng do Là Trà chỉ định.',
        'Quy cách: Gói 90g tiện dụng.',
        'QUAN TRỌNG: Cấp đông luôn sau nhập. Lấy từ tủ đông dùng luôn, KHÔNG rã đông trước.',
        'Nhập hàng: Cân đối lượng nhập vừa đủ hạn sử dụng.',
      ],
    },
  },
  {
    id: 'frozen-2',
    category: 'Đồ Đông Lạnh',
    title: 'Dâu Tây',
    icon: Snowflake,
    color: 'bg-red-500',
    image: 'https://picsum.photos/id/1080/600/400', // Strawberry
    content: {
      type: 'list',
      items: [
        'Loại: Tươi hoặc cấp đông (theo chỉ định).',
        'Chất lượng: Tuyệt đối không dùng quả thối, nũn, mốc.',
        'Bảo quản: Nhiệt độ -1 độ C.',
        'Hạn dùng: Tuân thủ nghiêm ngặt thời gian cho phép.',
      ],
    },
  },
  {
    id: 'finish',
    category: 'Hoàn Thành',
    title: 'Tổng Kết',
    icon: CheckCircle,
    color: 'bg-purple-600',
    image: 'https://picsum.photos/id/445/600/400',
    content: {
      type: 'intro',
      items: [
        'Bạn đã xem hết các quy chuẩn về hoa quả.',
        'Hãy tuân thủ đúng quy trình để đảm bảo chất lượng đồ uống tốt nhất!',
      ],
      subtext: 'Cảm ơn bạn đã hoàn thành.',
    },
  },
];