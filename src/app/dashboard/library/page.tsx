
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Book, Download, FileText, Search, Video } from "lucide-react";
import Image from "next/image";

const libraryContent = [
    {
        title: "Ebook Principal: Método Renda Online",
        description: "O guia completo para iniciar sua jornada.",
        type: "Ebook",
        fileType: "PDF",
        fileSize: "5.8 MB",
        imageUrl: "https://i.imgur.com/O9ZGEBt.png",
        category: "Ebooks",
    },
    {
        title: "Vídeo Aula 1: Introdução",
        description: "Os primeiros passos no mercado digital.",
        type: "Vídeo",
        fileType: "MP4",
        fileSize: "150 MB",
        imageUrl: "https://placehold.co/600x400.png",
        category: "Vídeos",
    },
    {
        title: "Bônus: Templates de Copy",
        description: "Modelos prontos para usar e vender.",
        type: "Bônus",
        fileType: "ZIP",
        fileSize: "1.2 MB",
        imageUrl: "https://placehold.co/600x400.png",
        category: "Bônus",
    }
];


export default function LibraryPage() {
  return (
    <div className="grid auto-rows-max items-start gap-4 md:gap-8">
        <div className="flex items-center justify-between">
            <div>
                <h1 className="text-2xl font-bold tracking-tight">Sua Biblioteca</h1>
                <p className="text-muted-foreground">Todo o seu conteúdo disponível em um só lugar.</p>
            </div>
             <div className="relative ml-auto flex-1 md:grow-0">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Buscar conteúdo..."
                  className="w-full rounded-lg bg-background pl-8 md:w-[200px] lg:w-[320px]"
                />
            </div>
        </div>

        <div className="flex items-center gap-2">
            <Button variant="default">Todos</Button>
            <Button variant="outline">Ebooks</Button>
            <Button variant="outline">Vídeos</Button>
            <Button variant="outline">Bônus</Button>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {libraryContent.map((item, index) => (
                 <Card key={index} className="overflow-hidden group">
                    <CardHeader className="p-0">
                       <div className="relative aspect-video">
                         <Image 
                            src={item.imageUrl}
                            alt={`Capa do ${item.title}`}
                            fill
                            className="object-cover"
                            data-ai-hint="ebook cover product"
                         />
                         <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                             <Button size="lg" className="bg-accent hover:bg-accent/90">
                                {item.type === 'Vídeo' ? <Video className="mr-2" /> : <Download className="mr-2" />}
                                {item.type === 'Vídeo' ? 'ASSISTIR' : 'BAIXAR'}
                             </Button>
                         </div>
                       </div>
                    </CardHeader>
                    <CardContent className="p-4">
                        <h3 className="font-bold text-lg">{item.title}</h3>
                        <p className="text-muted-foreground text-sm mt-1">{item.description}</p>
                    </CardContent>
                    <CardFooter className="p-4 pt-0 flex justify-between items-center text-xs text-muted-foreground">
                        <div className="flex items-center gap-1">
                             {item.category === 'Ebooks' ? <Book className="h-4 w-4" /> : item.category === 'Vídeos' ? <Video className="h-4 w-4" /> : <FileText className="h-4 w-4" />}
                            <span>{item.fileType}</span>
                        </div>
                        <span>{item.fileSize}</span>
                    </CardFooter>
                 </Card>
            ))}
        </div>
    </div>
  );
}
