import Link from 'next/link'
import Button from './Button'

const Header = () => {
  return (
    <div className="mb-6">
        <Link href="/clock">
            <Button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600" activity="Clock"/>
        </Link>
    </div>
  )
}

export default Header