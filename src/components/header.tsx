import Image from 'next/image'
import Link from 'next/link'
import { CartWidget } from './cart-widget'
import { SearchForm } from './search-form'

export function Header() {
  return (
    <header className="flex items-center justify-between">
      <div className="flex items-center gap-5">
        <Link href="/" className="text-2xl font-extrabold text-white">
          devstore
        </Link>

        <SearchForm />
      </div>
      <div className="flex items-center gap-4">
        <CartWidget />

        <div className="w-px h-4 bg-zinc-700" />

        <Link href="/" className="flex items-center gap-2 hover:underline">
          <span className="text-sm">Account</span>
          <Image
            src="https://github.com/AABB2741.png"
            className="size-6 rounded-full"
            width={24}
            height={24}
            alt=""
          />
        </Link>
      </div>
    </header>
  )
}

/**
 * Hard Navigation x Soft Navigation
 *
 * Ao usar um hard navigation (<a href ="/" />), toda a página é recarregada, o que não faz sentido para uma SPA.
 *
 * Usando um Soft Navigation (<Link href="/" />), a navegação é feita carregando somente os códigos necessários, sem recarregar a página inteira
 */
