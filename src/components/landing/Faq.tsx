import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Preciso ter experiência anterior para ter resultados?",
    answer: "Absolutamente não! O método foi desenhado para iniciantes, com um passo a passo claro e simples para que qualquer pessoa possa aplicar, mesmo sem nunca ter vendido nada online.",
  },
  {
    question: "Em quanto tempo consigo ver os primeiros resultados?",
    answer: "Muitos alunos relatam ver os primeiros resultados já na primeira semana de aplicação do método. No entanto, os resultados variam de pessoa para pessoa, dependendo do esforço e dedicação.",
  },
  {
    question: "Terei que gastar com ferramentas ou anúncios?",
    answer: "Não. O ebook foca em estratégias orgânicas e no uso de ferramentas gratuitas. Você aprenderá a construir seu negócio sem precisar investir dinheiro adicional.",
  },
  {
    question: "Como funciona a garantia de 30 dias?",
    answer: "Se por qualquer motivo você não ficar satisfeito com o ebook, basta nos enviar um e-mail dentro de 30 dias após a compra e nós devolveremos 100% do seu dinheiro, sem perguntas.",
  },
  {
    question: "Por quanto tempo terei acesso ao ebook?",
    answer: "O acesso ao ebook é vitalício! Você pode baixar e consultar o material sempre que quiser, incluindo todas as futuras atualizações, sem custo adicional.",
  },
  {
    question: "Como vou receber o material?",
    answer: "O acesso é imediato após a confirmação do pagamento. Você receberá um e-mail com um link para baixar o ebook e todos os bônus em formato PDF."
  }
];

export function Faq() {
  return (
    <section id="faq" className="py-16 sm:py-24 bg-card">
      <div className="container mx-auto max-w-4xl px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
            Perguntas Frequentes
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Ainda tem dúvidas? Nós te ajudamos a esclarecer tudo.
          </p>
        </div>
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left text-lg font-semibold hover:no-underline">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-base text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}