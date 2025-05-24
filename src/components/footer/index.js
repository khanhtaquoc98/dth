import { Box, Divider } from '@mui/material'
import Image from 'next/image'
import PhoneIcon from '../svg/PhoneIcon'
import AddressIcon from '../svg/AddressIcon'

export default function Footer() {
  return (
    <footer className="bg-[#07693a] text-white">
      <Box className="mx-auto max-w-7xl flex-wrap justify-between p-6 md:flex lg:px-8">
        <Box className="mb-8 w-full sm:w-1/2 md:w-1/4 lg:w-1/5">
          <Image
            width={62}
            height={40}
            src="/images/logo_white.png"
            alt="DTH Logo"
          />
          <p className="my-4 text-white">
            DTH ENVIRONMENT AND ENERGY COMPANY LIMITED
          </p>
        </Box>

        <Box className="mb-8 w-full sm:w-1/4 md:w-1/3">
          <h4 className="mb-4 font-semibold">Địa chỉ liên hệ:</h4>
          <Box className="space-y-2">
            <Box className="flex items-center gap-x-2">
              <AddressIcon className="text-white" />
              <Box className="text-white">
                <Box component="span" className="mr-1 font-semibold text-white">
                  TP. Hồ Chí Minh:
                </Box>
                <Box component="span" className="text-white">
                  270 Lý Thường Kiệt, Phường 14, Quận 10, TP. Hồ Chí Minh
                </Box>
              </Box>
            </Box>
            <Box className="flex items-center gap-x-2">
              <AddressIcon className="text-white" />
              <Box className="text-white">
                <Box component="span" className="mr-1 text-white">
                  TP. Phú Quốc:
                </Box>
                <Box component="span" className="font-semibold text-white">
                  Tổ 6, Khu phố 1, Phường Dương Đông, TP. Phú Quốc, Tỉnh Kiên
                  Giang
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>

        <Box className="mb-8 w-full sm:w-1/4 md:w-1/3">
          <h4 className="mb-4 font-semibold">SĐT:</h4>
          <Box className="space-y-2">
            <Box className="flex items-center gap-x-2">
              <PhoneIcon className="text-white" />
              <Box component="a" href="tel:+84911508960" className="text-white">
                (+84) 911 508 960 [PKD]
              </Box>
            </Box>
            <Box className="flex items-center gap-x-2">
              <PhoneIcon className="text-white" />
              <Box component="a" href="tel:+84911500940" className="text-white">
                (+84) 911 500 940 [PKT]
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>

      <Divider className="!border-white opacity-20" />
      <Box className="container mx-auto py-8 text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} DTH. All rights reserved.
        </p>
      </Box>
    </footer>
  )
}
