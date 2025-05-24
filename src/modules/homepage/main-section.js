'use client'
import { Button } from '@mui/material'
import Image from 'next/image'
import React from 'react'
import { Link as LinkScroll } from 'react-scroll'

export default function MainSection() {
  return (
    <div className="relative mx-auto mb-28 mt-[100px] h-[calc(100vh-200px)] w-full px-4 md:mb-32 md:px-8">
      <div className="bg-fade-white absolute z-10 flex h-full w-[calc(100%-2rem)] items-center">
        <div>
          <div
            data-aos="fade-right"
            className="font-roboto mb-4 text-sm font-bold uppercase !text-[#07693a] md:mb-7 md:text-xl"
          >
            Môi trường & năng lượng
          </div>
          <div
            className="mb-14 text-4xl font-medium leading-[4rem] md:text-6xl md:leading-[5rem]"
            data-aos="fade-right"
          >
            Hợp tác đầu tư, <br /> lắp đặt hệ thống <br />{' '}
            <span className="text-[#66B066]">năng lượng mặt trời.</span>
          </div>
          <LinkScroll to="ValueSection" smooth={true} offset={-50}>
            <Button
              data-aos="fade-up"
              variant="contained"
              className="h-[48px] w-[172px] !rounded-[50px] !bg-[#66B066] !normal-case text-white"
            >
              <span className="text-lg">Tìm hiểu thêm</span>
            </Button>
          </LinkScroll>
        </div>
      </div>

      <div className="z-1 absolute right-4 top-0 h-[calc(100vh-200px)] w-full max-w-[calc(100%-8rem)] md:right-8 md:max-w-[80%]">
        <Image
          src="/images/bg-main.jpg"
          fill="true"
          className="z-1 rounded-[34px] object-cover"
          alt="main"
        />
      </div>
    </div>
  )
}
