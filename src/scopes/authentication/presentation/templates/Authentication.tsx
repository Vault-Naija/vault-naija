import { Box } from '@commons/styledComponents/basics'
import { Outlet } from 'react-router-dom'
import { Header } from '../organisms/Header/Header'
import { Footer } from '../organisms/Footer/Footer'
import loginCover from '@assets/images/login-cover.png'

const Authentication = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
      height="100vh"
    >
      <Header />
      <Box display="grid" gridTemplateColumns="1fr 0.8fr" height="100%">
        <Box
          bgImage={`url(${loginCover})`}
          height="auto"
          width="100%"
          objectFit="cover"
          bgRepeat="no-repeat"
          bgSize="cover"
        >
          <image />
        </Box>
        <Box id="detail" background="gray">
          <Outlet />
        </Box>
      </Box>

      <Footer />
    </Box>
  )
}

export default Authentication
