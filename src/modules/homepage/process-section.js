import TitleGreenIcon from '@/components/svg/TitleGreenIcon'
import { Box } from '@mui/material'
import Image from 'next/image'
import { Element } from 'react-scroll'

export default function ProcessSection() {
  const data = [
    {
      step: '01',
      title: 'Khảo sát nhu cầu',
    },
    {
      step: '02',
      title: 'Khảo sát vị trí lắp đặt',
    },
    {
      step: '03',
      title: 'Đánh giá kỹ thuật kết cấu & PCCC',
    },
    {
      step: '04',
      title: 'Đề xuất phương án lắp đặt',
    },
    {
      step: '05',
      title: 'Thi công, nghiệm thu',
    },
  ]

  return (
    <Element name="ProcessSection">
      <Box className="relative mx-auto mb-20 w-full max-w-7xl md:mb-32">
        <Box
          className="w-full rounded-[36px] bg-[#F7F7FD] p-8"
          data-aos="fade-up"
        >
          <Box
            className="mb-8 flex items-center justify-center gap-x-4"
            data-aos="fade-up"
          >
            <TitleGreenIcon className="!h-auto !w-10" />
            <Box
              component="h1"
              className="mt-1 text-xl font-bold sm:text-4xl sm:leading-[5rem]"
            >
              Quy trình triển khai
            </Box>
          </Box>

          <Box className="relative h-full w-full gap-x-4 md:flex">
            <Box
              className="relative hidden w-full rounded-[34px] md:block md:w-[calc(50%-1rem)]"
              data-aos="fade-up"
            >
              <Image
                src="/images/bg-main.webp"
                fill={true}
                className="h-full w-full rounded-[50px_0_50px_0px] object-contain"
                alt="Quy trình triển khai"
              />
            </Box>
            <Box className="w-full space-y-4 md:w-[calc(50%-1rem)]">
              {data.map((item) => (
                <Box
                  key={item.step}
                  data-aos="fade-up"
                  className="flex cursor-pointer items-center gap-1 rounded-[36px] bg-white p-[0.2rem] drop-shadow-sm transition-all hover:bg-green-gradient hover:text-white hover:shadow-lg sm:gap-x-4 sm:p-[0.5rem_1rem]"
                >
                  <Box className="flex h-12 w-12 items-center justify-center font-bold sm:text-xl">
                    {item.step}
                  </Box>
                  <Box className="w-[calc(100%-40px)] font-medium sm:text-lg">
                    {item.title}
                  </Box>
                </Box>
              ))}
            </Box>
          </Box>
        </Box>
      </Box>
    </Element>
  )
}
