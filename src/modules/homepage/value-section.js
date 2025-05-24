import BillCashlessIcon from '@/components/svg/BillCashlessIcon'
import CoolMeterIcon from '@/components/svg/CoolMeterIcon'
import HandMoneyIcon from '@/components/svg/HandMoneyIcon'
import OperatePlantIcon from '@/components/svg/OperatePlantIcon'
import TitleBlueIcon from '@/components/svg/TitleBlueIcon'
import TrendDownIcon from '@/components/svg/TrendDownIcon'
import { Box, Card } from '@mui/material'
import { Element } from 'react-scroll'

export default function ValueSection() {
  const data = [
    {
      title: 'Không phát sinh chi phí lắp đặt',
      description: 'Lắp đặt hoàn toàn miễn phí, không lo chi phí phát sinh.',
      icon: (
        <BillCashlessIcon className="!h-10 !w-10 text-[#E27244] group-hover:text-white" />
      ),
    },
    {
      title: 'Giảm hoá đơn tiền điện hàng tháng',
      description: 'Tiết kiệm năng lượng, giảm ngay chi phí sử dụng điện.',
      icon: (
        <TrendDownIcon className="!h-10 !w-10 text-[#66B066] group-hover:text-white" />
      ),
    },
    {
      title: 'Vận hành và bảo trì miễn phí',
      description:
        'Hệ thống được theo dõi và bảo trì định kỳ hoàn toàn miễn phí.',
      icon: (
        <OperatePlantIcon className="!h-10 !w-10 text-[#F3BC4C] group-hover:text-white" />
      ),
    },
    {
      title: 'Giảm 5&deg;C, tăng độ bền cho mái',
      description: 'Giảm nhiệt độ mái nhà, bảo vệ kết cấu và kéo dài tuổi thọ.',
      icon: (
        <CoolMeterIcon className="!h-10 !w-10 text-[#704AF2] group-hover:text-white" />
      ),
    },
    {
      title: 'Được giảm 1 tháng tiền điện đầu tiên khi lắp đặt',
      description: 'Ưu đãi đặc biệt: miễn phí tiền điện tháng đầu khi sử dụng.',
      icon: (
        <HandMoneyIcon className="!h-10 !w-10 text-[#3171DE] group-hover:text-white" />
      ),
    },
  ]

  return (
    <Element name="ValueSection">
      <Box className="mx-auto mb-20 max-w-7xl px-8 py-16 md:mb-32">
        <Box
          className="mb-10 flex items-center justify-center gap-x-4 sm:mb-10 md:mb-16"
          data-aos="fade-up"
        >
          <TitleBlueIcon className="!h-auto !w-10" />
          <Box
            component="h1"
            className="mt-1 text-xl font-bold sm:text-4xl sm:leading-[5rem]"
          >
            Lợi ích khi hợp tác lắp đặt hệ thống
          </Box>
        </Box>

        <Box className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
          {data.map((item) => (
            <Card
              key={item.title}
              data-aos="fade-up"
              className="!shadow-card-value hover:bg-green-gradient group w-full cursor-pointer !rounded-[30px] p-10 transition-all sm:w-[300px]"
            >
              {item?.icon}
              <Box
                className="mt-[28px] h-fit text-xl font-semibold group-hover:text-white md:mb-[20px] md:h-[50px]"
                dangerouslySetInnerHTML={{ __html: item.title }}
              />
              <Box className="text-gray-600 group-hover:text-white md:h-[20px]">
                {item.description}
              </Box>
            </Card>
          ))}
        </Box>
      </Box>
    </Element>
  )
}
