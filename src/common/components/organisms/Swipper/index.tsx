import { Swiper } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import SwipperSlide from "../../molecules/swipperSlide";

function Swipper() {
    const swipperData = [
        {
          id: 1,
          image: "/assets/images/swipper1.png",
          title: "انطلق نحو النجاح التجاري بخطوات بسيطة",
          description:
            "ابدأ رحلتك في عالم التجارة الإلكترونية بسهولة مع أدواتنا المرنة، واجعل حلمك بامتلاك متجر إلكتروني حقيقة. تصميم وإدارة متجرك أصبح أسرع وأسهل مما تتخيل.",
        },
        {
          id: 2,
          image: "/assets/images/swipper1.png",
          title: "تحكم بمتجرك الإلكتروني بأبسط الطرق",
          description:
            "مع حلولنا المتطورة، يمكنك بناء متجرك الإلكتروني وإدارته بكل يسر. اترك التفاصيل التقنية لنا، وركز على تنمية أعمالك ورفع مبيعاتك.",
        },
        {
          id: 3,
          image: "/assets/images/swipper1.png",
          title: "تسوق المستقبل يبدأ هنا",
          description:
            "انشئ متجرك الإلكتروني بأدوات متكاملة وسهلة الاستخدام. كل ما تحتاجه لتحقيق النجاح بين يديك، بدون أي خبرة تقنية.",
        },
        {
          id: 4,
          image: "/assets/images/swipper1.png",
          title: "افتح أبواب النجاح بخطوات قليلة",
          description:
            "ابدأ متجرك الإلكتروني الآن بسهولة وسرعة. أدواتنا المتقدمة تجعل إدارة متجرك الإلكتروني تجربة سلسة، كل ما عليك هو التركيز على منتجاتك،",
        },
        {
          id: 5,
          image: "/assets/images/swipper1.png",
          title: "متجرك الإلكتروني جاهز بخطوة واحدة",
          description:
            "مع أدواتنا الذكية، يمكنك البدء فورًا في إنشاء متجرك الإلكتروني وإدارته بسهولة، مما يوفر لك الوقت والجهد لتنمية أعمالك.",
        },
      ];
    return (
        <Swiper
        spaceBetween={50}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 3000 }}
        pagination={{ clickable: true }}
        modules={[Autoplay, Pagination]}
        className="mySwiper h-full"
      >
        {swipperData.map((item, index) => (
          <SwipperSlide key={index} item={item}/>
        ))}
      </Swiper>
    );
}

export default Swipper;