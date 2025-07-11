"use client";

import React, { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function Urgency() {
  const calculateTimeLeft = () => {
    const now = new Date();
    const endOfDay = new Date(now);
    endOfDay.setHours(23, 59, 59, 999);
    
    const difference = endOfDay.getTime() - now.getTime();
    
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    } else {
        timeLeft = { hours: 0, minutes: 0, seconds: 0 }
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState({ hours: 0, minutes: 0, seconds: 0 });

   useEffect(() => {
    // Run only on client
    setTimeLeft(calculateTimeLeft());

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (time: number) => time.toString().padStart(2, '0');

  return (
    <section id="urgency" className="py-16 sm:py-24 bg-card">
      <div className="container mx-auto max-w-5xl px-4">
        <Card className="bg-primary/5 border-primary/20 p-8 text-center shadow-lg">
          <CardContent className="p-0 md:p-6">
            <Badge variant="destructive" className="mb-4 bg-accent text-accent-foreground">Oferta por tempo limitado!</Badge>
            <h2 className="text-2xl font-extrabold tracking-tight text-foreground sm:text-3xl">
              Promoção válida apenas hoje!
            </h2>
            <div className="my-6 flex justify-center gap-4">
                <div className="text-center bg-card p-4 rounded-lg shadow-md w-24">
                    <div className="text-4xl font-bold text-primary">{timeLeft.hours !== null ? formatTime(timeLeft.hours) : '00'}</div>
                    <div className="text-sm text-muted-foreground">Horas</div>
                </div>
                <div className="text-center bg-card p-4 rounded-lg shadow-md w-24">
                    <div className="text-4xl font-bold text-primary">{timeLeft.minutes !== null ? formatTime(timeLeft.minutes) : '00'}</div>
                    <div className="text-sm text-muted-foreground">Minutos</div>
                </div>
                <div className="text-center bg-card p-4 rounded-lg shadow-md w-24">
                    <div className="text-4xl font-bold text-primary">{timeLeft.seconds !== null ? formatTime(timeLeft.seconds) : '00'}</div>
                    <div className="text-sm text-muted-foreground">Segundos</div>
                </div>
            </div>
            <div className="flex items-center justify-center gap-4">
                <span className="text-2xl text-muted-foreground line-through">de R$ 197,00</span>
                <p className="font-headline text-5xl font-extrabold text-primary">por R$ 47,00</p>
            </div>
            <p className="text-muted-foreground mt-2">(ou 3x de R$ 15,90)</p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}