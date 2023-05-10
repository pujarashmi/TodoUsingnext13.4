import Link from 'next/link'

const Header = () => {
  return (
    <header className='flex h-24 flex-col justify-center bg-pink-800'>
      <nav className='container'>
        <ul className='flex items-center justify-center gap-12 text-lg font-semibold uppercase tracking-widest text-white'>
          <li>
            <Link href='/'>Home</Link>
          </li>
          <li>
            <Link href='/todos'>Todos</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
