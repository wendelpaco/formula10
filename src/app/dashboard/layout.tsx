
'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import {
  Home,
  Book,
  Gift,
  LifeBuoy,
  User,
  PanelLeft,
  Rocket,
  Loader2
} from 'lucide-react';
import { auth } from '@/lib/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';

import { Button } from '@/components/ui/button';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from '@/components/ui/sheet';
import { useEffect } from 'react';

const navItems = [
    { href: '/dashboard', label: 'Dashboard', icon: Home },
    { href: '/dashboard/library', label: 'Biblioteca', icon: Book },
    { href: '/dashboard/bonuses', label: 'Bônus', icon: Gift },
    { href: '/dashboard/profile', label: 'Meu Perfil', icon: User },
    { href: '/dashboard/support', label: 'Suporte', icon: LifeBuoy },
];

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const router = useRouter();
  const [user, loading, error] = useAuthState(auth);


  useEffect(() => {
    // If not loading and no user is authenticated, redirect to login
    if (!loading && !user) {
      router.push('/auth/login');
    }
  }, [user, loading, router]);


  if (loading) {
    return (
        <div className="flex min-h-screen w-full items-center justify-center bg-muted/40">
            <Loader2 className="h-8 w-8 animate-spin text-primary" />
        </div>
    );
  }

  if (error) {
     return (
        <div className="flex min-h-screen w-full items-center justify-center bg-muted/40">
            <p className="text-destructive">Ocorreu um erro ao carregar. Tente novamente.</p>
        </div>
    );
  }

  // If there is no user, return null to avoid flashing the layout
  if (!user) {
    return null;
  }

  const getPageTitle = () => {
    const currentItem = navItems.find(item => pathname === item.href || (pathname.startsWith(item.href) && item.href !== '/dashboard'));
    return currentItem ? currentItem.label : 'Dashboard';
  }

  return (
    <TooltipProvider>
      <div className="flex min-h-screen w-full flex-col bg-muted/40">
        <aside className="fixed inset-y-0 left-0 z-10 hidden w-14 flex-col border-r bg-background sm:flex">
          <nav className="flex flex-col items-center gap-4 px-2 sm:py-5">
            <Link
              href="/dashboard"
              className="group flex h-9 w-9 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:h-8 md:w-8 md:text-base"
            >
              <Rocket className="h-4 w-4 transition-all group-hover:scale-110" />
              <span className="sr-only">Método Renda Online</span>
            </Link>
            {navItems.map((item) => (
              <Tooltip key={item.href}>
                <TooltipTrigger asChild>
                  <Link
                    href={item.href}
                    className={`flex h-9 w-9 items-center justify-center rounded-lg transition-colors md:h-8 md:w-8 ${
                      pathname === item.href || (pathname.startsWith(item.href) && item.href !== '/dashboard')
                        ? 'bg-accent text-accent-foreground'
                        : 'text-muted-foreground hover:text-foreground'
                    }`}
                  >
                    <item.icon className="h-5 w-5" />
                    <span className="sr-only">{item.label}</span>
                  </Link>
                </TooltipTrigger>
                <TooltipContent side="right">{item.label}</TooltipContent>
              </Tooltip>
            ))}
          </nav>
        </aside>
        <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
          <header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
            <Sheet>
              <SheetTrigger asChild>
                <Button size="icon" variant="outline" className="sm:hidden">
                  <PanelLeft className="h-5 w-5" />
                  <span className="sr-only">Toggle Menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="sm:max-w-xs">
                <nav className="grid gap-6 text-lg font-medium">
                  <Link
                    href="#"
                    className="group flex h-10 w-10 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:text-base"
                  >
                    <Rocket className="h-5 w-5 transition-all group-hover:scale-110" />
                    <span className="sr-only">Método Renda Online</span>
                  </Link>
                  {navItems.map((item) => (
                     <Link
                        key={item.href}
                        href={item.href}
                        className={`flex items-center gap-4 px-2.5 ${
                            pathname === item.href || (pathname.startsWith(item.href) && item.href !== '/dashboard')
                            ? 'text-foreground'
                            : 'text-muted-foreground hover:text-foreground'
                        }`}
                    >
                        <item.icon className="h-5 w-5" />
                        {item.label}
                    </Link>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
             <h1 className="text-xl font-semibold">{getPageTitle()}</h1>
          </header>
          <main className="flex-1 p-4 sm:px-6 sm:py-0">{children}</main>
        </div>
      </div>
    </TooltipProvider>
  );
}
