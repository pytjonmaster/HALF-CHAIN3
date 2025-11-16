import React, { useEffect, useMemo, useState } from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { toast } from '@/components/ui/use-toast';
import { useNavigate } from 'react-router-dom';


const APARTMENTS_DATA = [
  {
    id: 1,
    title: 'Riverside Loft',
    whereabouts: 'Downtown, New York, USA',
    tokenAmount: 12000,
    tokenPrice: 3.25,
    imageThumb: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&q=80&auto=format',
    imageLarge: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=1600&q=80&auto=format'
  },
  {
    id: 2,
    title: 'Skyline Suite',
    whereabouts: 'Canary Wharf, London, UK',
    tokenAmount: 15000,
    tokenPrice: 2.95,
    imageThumb: 'https://images.unsplash.com/photo-1502672023488-70e25813eb80?w=800&q=80&auto=format',
    imageLarge: 'https://images.unsplash.com/photo-1502672023488-70e25813eb80?w=1600&q=80&auto=format'
  },
  {
    id: 3,
    title: 'Garden Residence',
    whereabouts: 'Shibuya, Tokyo, Japan',
    tokenAmount: 9000,
    tokenPrice: 4.10,
    imageThumb: 'https://images.unsplash.com/photo-1484154218962-a197022b5858?w=800&q=80&auto=format',
    imageLarge: 'https://images.unsplash.com/photo-1484154218962-a197022b5858?w=1600&q=80&auto=format'
  },
  {
    id: 4,
    title: 'Art District Flat',
    whereabouts: 'Kreuzberg, Berlin, Germany',
    tokenAmount: 11000,
    tokenPrice: 2.75,
    imageThumb: 'https://images.unsplash.com/photo-1505691723518-36a5ac3b2d95?w=800&q=80&auto=format',
    imageLarge: 'https://images.unsplash.com/photo-1505691723518-36a5ac3b2d95?w=1600&q=80&auto=format'
  },
  {
    id: 5,
    title: 'Seine View Apartment',
    whereabouts: 'Le Marais, Paris, France',
    tokenAmount: 8000,
    tokenPrice: 5.60,
    imageThumb: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&q=80&auto=format',
    imageLarge: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1600&q=80&auto=format'
  },
  {
    id: 6,
    title: 'Marina Heights',
    whereabouts: 'Dubai Marina, Dubai, UAE',
    tokenAmount: 20000,
    tokenPrice: 2.10,
    imageThumb: 'https://images.unsplash.com/photo-1521783988139-893ceceae8b0?w=800&q=80&auto=format',
    imageLarge: 'https://images.unsplash.com/photo-1521783988139-893ceceae8b0?w=1600&q=80&auto=format'
  },
  {
    id: 7,
    title: 'Harbour Lights',
    whereabouts: 'Harbourfront, Toronto, Canada',
    tokenAmount: 13000,
    tokenPrice: 3.05,
    imageThumb: 'https://images.unsplash.com/photo-1522708323590-535ab8d3a598?w=800&q=80&auto=format',
    imageLarge: 'https://images.unsplash.com/photo-1522708323590-535ab8d3a598?w=1600&q=80&auto=format'
  },
  {
    id: 8,
    title: 'Coastal Retreat',
    whereabouts: 'Bondi, Sydney, Australia',
    tokenAmount: 10000,
    tokenPrice: 3.85,
    imageThumb: 'https://images.unsplash.com/photo-1523217582562-09d0def993a6?w=800&q=80&auto=format',
    imageLarge: 'https://images.unsplash.com/photo-1523217582562-09d0def993a6?w=1600&q=80&auto=format'
  },
  {
    id: 9,
    title: 'Catalan Charm',
    whereabouts: 'Eixample, Barcelona, Spain',
    tokenAmount: 9500,
    tokenPrice: 3.60,
    imageThumb: 'https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=800&q=80&auto=format',
    imageLarge: 'https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=1600&q=80&auto=format'
  },
  {
    id: 10,
    title: 'Lakeview Condo',
    whereabouts: 'Seefeld, Zurich, Switzerland',
    tokenAmount: 7000,
    tokenPrice: 6.40,
    imageThumb: 'https://images.unsplash.com/photo-1494526585095-c41746248156?w=800&q=80&auto=format',
    imageLarge: 'https://images.unsplash.com/photo-1494526585095-c41746248156?w=1600&q=80&auto=format'
  },
  {
    id: 11,
    title: 'Canal House',
    whereabouts: 'Jordaan, Amsterdam, Netherlands',
    tokenAmount: 8500,
    tokenPrice: 4.25,
    imageThumb: 'https://images.unsplash.com/photo-1501183638710-841dd1904471?w=800&q=80&auto=format',
    imageLarge: 'https://images.unsplash.com/photo-1501183638710-841dd1904471?w=1600&q=80&auto=format'
  },
  {
    id: 12,
    title: 'Botanic Residence',
    whereabouts: 'Orchard, Singapore',
    tokenAmount: 14000,
    tokenPrice: 2.90,
    imageThumb: 'https://images.unsplash.com/photo-1501045661006-fcebe0257c3f?w=800&q=80&auto=format',
    imageLarge: 'https://images.unsplash.com/photo-1501045661006-fcebe0257c3f?w=1600&q=80&auto=format'
  }
];

const ApartmentsPage = () => {
  const apartments = useMemo(() => APARTMENTS_DATA, []);
  const [selected, setSelected] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const navigate = useNavigate();

  useEffect(() => {
    if (selected) {
      setQuantity(1);
    }
  }, [selected]);

  const handleBuy = (apt) => {
    const maxQty = apt.tokenAmount;
    const qty = Math.max(1, Math.min(Number(quantity) || 1, maxQty));
    const pricePerToken = Number(apt.tokenPrice);
    const total = qty * pricePerToken;

    setSelected(null);
    // Navigate to smart contracts page; auth guard will enforce registration if needed
    navigate('/smart-contracts', {
      state: {
        source: 'apartments',
        apartment: {
          id: apt.id,
          title: apt.title,
          whereabouts: apt.whereabouts,
          tokenAmount: apt.tokenAmount,
          tokenPrice: pricePerToken,
        },
        requestedQuantity: qty,
        estimatedTotal: total,
      },
      replace: false,
    });
  };

  return (
    <div className="min-h-screen bg-[#0C2753]">
      <div className="container mx-auto px-4 py-10 md:py-16">
        <div className="mb-8 md:mb-12 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">Tokenized Apartments</h1>
          <p className="text-muted-foreground">
            Explore apartments available for tokenization. Click an image to view details.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {apartments.map((apt) => (
            <Card key={apt.id} className="overflow-hidden bg-card/60 backdrop-blur">
              <CardHeader className="p-0">
                <Dialog.Root open={selected?.id === apt.id} onOpenChange={(open) => setSelected(open ? apt : null)}>
                  <Dialog.Trigger asChild>
                    <button className="block w-full focus:outline-none group">
                      <img
                        src={apt.imageThumb}
                        alt={apt.title}
                        className="w-full h-72 object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                      />
                    </button>
                  </Dialog.Trigger>
                  <Dialog.Portal>
                    <Dialog.Overlay className="fixed inset-0 bg-black/80 backdrop-blur-md" />
                    <Dialog.Content className="fixed left-1/2 top-1/2 w-[90vw] max-w-2xl -translate-x-1/2 -translate-y-1/2 rounded-lg border border-border bg-background/90 shadow-2xl focus:outline-none">
                      <div className="p-2 sm:p-4">
                        <img
                          src={apt.imageLarge}
                          alt={apt.title}
                          className="w-full h-auto max-h-[60vh] object-contain rounded-md"
                        />
                        <div className="p-4 sm:p-6">
                          <h2 className="text-2xl font-semibold mb-2">{apt.title}</h2>
                          <div className="text-muted-foreground mb-4">{apt.whereabouts}</div>
                          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                            <div className="rounded-md border border-border p-4">
                              <div className="text-sm text-muted-foreground">Token amount</div>
                              <div className="text-lg font-semibold">{apt.tokenAmount.toLocaleString()}</div>
                            </div>
                            <div className="rounded-md border border-border p-4">
                              <div className="text-sm text-muted-foreground">Token price</div>
                              <div className="text-lg font-semibold">${apt.tokenPrice}</div>
                            </div>
                            <div className="rounded-md border border-border p-4">
                              <div className="text-sm text-muted-foreground">Est. market cap</div>
                              <div className="text-lg font-semibold">
                                ${(apt.tokenAmount * Number(apt.tokenPrice)).toLocaleString()}
                              </div>
                            </div>
                          </div>
                          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4 items-end">
                            <div>
                              <label className="block text-sm text-muted-foreground mb-2" htmlFor={`qty-${apt.id}`}>
                                Choose token quantity (max {apt.tokenAmount.toLocaleString()})
                              </label>
                              <div className="flex items-center space-x-3">
                                <Input
                                  id={`qty-${apt.id}`}
                                  type="number"
                                  min={1}
                                  max={apt.tokenAmount}
                                  value={quantity}
                                  onChange={(e) => {
                                    const raw = e.target.value;
                                    const num = Math.floor(Number(raw) || 0);
                                    const bounded = Math.min(Math.max(1, num), apt.tokenAmount);
                                    setQuantity(bounded);
                                  }}
                                  className="max-w-[160px]"
                                />
                                <div className="text-sm">
                                  <div className="text-muted-foreground">Total price</div>
                                  <div className="font-semibold">
                                    ${(
                                      Math.max(1, Math.min(Number(quantity) || 1, apt.tokenAmount)) *
                                      Number(apt.tokenPrice)
                                    ).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="flex sm:justify-end">
                              <Button onClick={() => handleBuy(apt)}>
                                Buy
                              </Button>
                            </div>
                          </div>
                          <div className="mt-6 flex justify-end">
                            <Dialog.Close asChild>
                              <Button variant="outline">Close</Button>
                            </Dialog.Close>
                          </div>
                        </div>
                      </div>
                    </Dialog.Content>
                  </Dialog.Portal>
                </Dialog.Root>
              </CardHeader>
              <CardContent className="p-6">
                <CardTitle className="mb-2 text-xl">{apt.title}</CardTitle>
                <div className="text-base text-muted-foreground mb-4">{apt.whereabouts}</div>
                <div className="flex items-center justify-between text-base">
                  <div>
                    <div className="text-muted-foreground">Tokens</div>
                    <div className="font-medium">{apt.tokenAmount.toLocaleString()}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-muted-foreground">Price</div>
                    <div className="font-medium">${apt.tokenPrice}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ApartmentsPage;


