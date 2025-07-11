import Link from "next/link";
import { Rocket } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-card py-8 border-t">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 md:flex-row">
        <div className="flex items-center gap-2">
          <Rocket className="h-5 w-5 text-muted-foreground" />
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Método Renda Online. Todos os direitos reservados.
          </p>
        </div>
        <div className="flex items-center gap-4 text-sm">
          <Link href="#" className="text-muted-foreground hover:text-foreground">
            Políticas de Privacidade
          </Link>
          <Link href="#" className="text-muted-foreground hover:text-foreground">
            Termos de Uso
          </Link>
          <Link href="#" className="text-muted-foreground hover:text-foreground">
            Contato
          </Link>
        </div>
      </div>
    </footer>
  );
}
