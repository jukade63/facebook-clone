import { useLocation } from 'react-router-dom'
import MenuItem from './MenuItem'

const menus = [
  {
    title: 'Friend Requests',
    to: '/friend/request',
    icon: 'fa-solid fa-user-check',
  },
  {
    title: 'Suggestions',
    to: '/friend/suggestion',
    icon: 'fa-solid fa-user-plus',
  },
  {
    title: 'All Friends',
    to: '/friend',
    icon: 'fa-solid fa-user-group',
  },
]

function MenuList() {
  const { pathname } = useLocation()
  return (
    <ul className='px-2'>
      {menus.map((el) => (
        <MenuItem
          key={el.title}
          title={el.title}
          to={el.to}
          icon={el.icon}
          active={pathname === el.to}
        />
      ))}
    </ul>
  )
}

export default MenuList
