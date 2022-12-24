import { useNavigate } from 'react-router-dom'
import {Menu} from 'antd'
import {HomeFilled} from '@ant-design/icons'

const AppHeader = () => {

  const navigate = useNavigate();

  const onMenuClick = (item) => {
    navigate(`/${item.key}`)
  }
  return (
    <div className='AppHeader'>
      <Menu
        onClick={onMenuClick}
        mode='horizontal'
        items={[
          {
            label: 'صفحه ی اصلی',
            key: '',
            icon: <HomeFilled/>
          },
          {
            label: 'کلکسیون فرش',
            key: 'فرش',
            children: [
              {
                label: 'فرش دستبافت',
                key: 'فرش دستبافت'
              },
              {
                label: 'تابلو فرش',
                key: 'تابلو فرش'
              },
              {
                label: 'گلیم و گبه',
                key: 'گلیم و گبه'
              }
            ]
          }
        ]}
      >
      </Menu>
    </div>
  )
}

export default AppHeader