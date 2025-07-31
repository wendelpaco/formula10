
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  Home,
  Book,
  Gift,
  LifeBuoy,
  User,
  PanelLeft,
  Rocket
} from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from '@/components/ui/sheet';
import {
    SidebarProvider,
    Sidebar,
    SidebarHeader,
    SidebarContent,
    SidebarMenu,
    SidebarMenuItem,
    SidebarMenuButton,
    SidebarFooter,
} from '@/components/ui/sidebar';

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

  const getPageTitle = () => {
    const currentItem = navItems.find(item => pathname === item.href || (pathname.startsWith(item.href) && item.href !== '/dashboard'));
    return currentItem ? currentItem.label : 'Dashboard';
  }

  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full bg-muted/40">
        <Sidebar collapsible="icon">
            <SidebarHeader>
                 <Link
                    href="/dashboard"
                    className="group flex h-9 w-9 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:h-8 md:w-8 md:text-base"
                    >
                    <Rocket className="h-4 w-4 transition-all group-hover:scale-110" />
                    <span className="sr-only">Método Renda Online</span>
                </Link>
            </SidebarHeader>
            <SidebarContent>
                <SidebarMenu>
                    {navItems.map((item) => (
                        <SidebarMenuItem key={item.href}>
                             <Link href={item.href}>
                                <SidebarMenuButton
                                    isActive={pathname === item.href || (pathname.startsWith(item.href) && item.href !== '/dashboard')}
                                    tooltip={{children: item.label}}
                                >
                                    <item.icon />
                                    <span>{item.label}</span>
                                </SidebarMenuButton>
                            </Link>
                        </SidebarMenuItem>
                    ))}
                </SidebarMenu>
            </SidebarContent>
            <SidebarFooter>
                {/* Can add footer items here if needed */}
            </SidebarFooter>
        </Sidebar>
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
    </SidebarProvider>
  );
}
