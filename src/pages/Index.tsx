import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

interface VapeDevice {
  id: number;
  name: string;
  price: number;
  battery: string;
  power: string;
  capacity: string;
  resistance: string;
  category: string;
  image: string;
}

const devices: VapeDevice[] = [
  {
    id: 1,
    name: 'CYBER POD X1',
    price: 3500,
    battery: '1500 мАч',
    power: '80W',
    capacity: '5 мл',
    resistance: '0.15-3.0 Ом',
    category: 'POD',
    image: 'https://images.unsplash.com/photo-1511472928321-9e80e3505d1f?w=400&h=400&fit=crop'
  },
  {
    id: 2,
    name: 'NEON MOD PRO',
    price: 5900,
    battery: '3000 мАч',
    power: '220W',
    capacity: '8 мл',
    resistance: '0.08-3.5 Ом',
    category: 'MOD',
    image: 'https://images.unsplash.com/photo-1598520106830-8c45c2035460?w=400&h=400&fit=crop'
  },
  {
    id: 3,
    name: 'QUANTUM VAPE',
    price: 4200,
    battery: '2000 мАч',
    power: '120W',
    capacity: '6 мл',
    resistance: '0.10-2.5 Ом',
    category: 'POD',
    image: 'https://images.unsplash.com/photo-1601524909162-ae8725290836?w=400&h=400&fit=crop'
  },
  {
    id: 4,
    name: 'MATRIX BOX',
    price: 6500,
    battery: '4000 мАч',
    power: '300W',
    capacity: '10 мл',
    resistance: '0.05-4.0 Ом',
    category: 'MOD',
    image: 'https://images.unsplash.com/photo-1591290619762-c588fe9c0ce9?w=400&h=400&fit=crop'
  },
  {
    id: 5,
    name: 'STEALTH MINI',
    price: 2800,
    battery: '1000 мАч',
    power: '50W',
    capacity: '3 мл',
    resistance: '0.20-2.0 Ом',
    category: 'POD',
    image: 'https://images.unsplash.com/photo-1527631746610-ab2a002a6d97?w=400&h=400&fit=crop'
  },
  {
    id: 6,
    name: 'FUSION ULTRA',
    price: 7200,
    battery: '5000 мАч',
    power: '350W',
    capacity: '12 мл',
    resistance: '0.03-5.0 Ом',
    category: 'MOD',
    image: 'https://images.unsplash.com/photo-1605236453806-6ff36851218e?w=400&h=400&fit=crop'
  }
];

export default function Index() {
  const [compareList, setCompareList] = useState<VapeDevice[]>([]);
  const [showComparison, setShowComparison] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const toggleCompare = (device: VapeDevice) => {
    if (compareList.find(d => d.id === device.id)) {
      setCompareList(compareList.filter(d => d.id !== device.id));
    } else if (compareList.length < 3) {
      setCompareList([...compareList, device]);
    }
  };

  const filteredDevices = selectedCategory === 'all' 
    ? devices 
    : devices.filter(d => d.category === selectedCategory);

  return (
    <div className="min-h-screen bg-background">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iY3lhbiIgc3Ryb2tlLXdpZHRoPSIwLjUiIG9wYWNpdHk9IjAuMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-30"></div>
      
      <div className="relative z-10">
        <header className="border-b border-primary/20 backdrop-blur-sm">
          <div className="container mx-auto px-4 py-6">
            <div className="flex items-center justify-between">
              <h1 className="text-4xl font-bold neon-text tracking-wider">VAPE//SHOP</h1>
              <div className="flex gap-4 items-center">
                <Button variant="ghost" className="text-primary hover:text-primary/80">
                  <Icon name="ShoppingCart" size={24} />
                  <span className="ml-2 hidden sm:inline">Корзина</span>
                </Button>
                <Button variant="ghost" className="text-secondary hover:text-secondary/80">
                  <Icon name="User" size={24} />
                  <span className="ml-2 hidden sm:inline">Профиль</span>
                </Button>
              </div>
            </div>
          </div>
        </header>

        <section className="py-12 bg-gradient-to-b from-primary/5 to-transparent">
          <div className="container mx-auto px-4">
            <div className="text-center mb-8 animate-slide-up">
              <h2 className="text-5xl md:text-7xl font-black mb-4 neon-text">
                КИБЕРПАНК ВЕЙПИНГ
              </h2>
              <p className="text-xl text-muted-foreground">Технологии будущего уже здесь</p>
            </div>
          </div>
        </section>

        <div className="container mx-auto px-4 py-8">
          <div className="flex gap-4 mb-8 justify-center flex-wrap">
            <Button
              onClick={() => setSelectedCategory('all')}
              variant={selectedCategory === 'all' ? 'default' : 'outline'}
              className={selectedCategory === 'all' ? 'neon-glow' : ''}
            >
              Все устройства
            </Button>
            <Button
              onClick={() => setSelectedCategory('POD')}
              variant={selectedCategory === 'POD' ? 'default' : 'outline'}
              className={selectedCategory === 'POD' ? 'neon-glow' : ''}
            >
              POD системы
            </Button>
            <Button
              onClick={() => setSelectedCategory('MOD')}
              variant={selectedCategory === 'MOD' ? 'default' : 'outline'}
              className={selectedCategory === 'MOD' ? 'neon-glow' : ''}
            >
              MOD устройства
            </Button>
          </div>

          {compareList.length > 0 && (
            <div className="mb-8 p-4 bg-card border border-primary/30 rounded-lg animate-slide-up">
              <div className="flex items-center justify-between flex-wrap gap-4">
                <div className="flex items-center gap-2">
                  <Icon name="GitCompare" className="text-primary" size={24} />
                  <span className="text-lg font-semibold">
                    Выбрано для сравнения: {compareList.length}/3
                  </span>
                </div>
                <div className="flex gap-2">
                  <Button
                    onClick={() => setShowComparison(!showComparison)}
                    disabled={compareList.length < 2}
                    className="neon-glow"
                  >
                    <Icon name="BarChart3" size={20} className="mr-2" />
                    {showComparison ? 'Скрыть' : 'Сравнить'}
                  </Button>
                  <Button
                    variant="outline"
                    onClick={() => setCompareList([])}
                  >
                    Очистить
                  </Button>
                </div>
              </div>
            </div>
          )}

          {showComparison && compareList.length >= 2 && (
            <div className="mb-8 bg-card border border-primary/30 rounded-lg p-6 animate-slide-up">
              <h3 className="text-3xl font-orbitron neon-text mb-6">Сравнение устройств</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {compareList.map((device) => (
                  <Card key={device.id} className="border-primary/30">
                    <CardContent className="p-4">
                      <img
                        src={device.image}
                        alt={device.name}
                        className="w-full h-32 object-cover rounded-lg mb-3"
                      />
                      <h4 className="font-bold text-lg mb-3 text-primary font-orbitron">
                        {device.name}
                      </h4>
                      
                      <div className="space-y-3 text-sm">
                        <div className="border-b border-border pb-2">
                          <div className="text-muted-foreground mb-1">Цена</div>
                          <div className="font-bold text-lg">{device.price.toLocaleString()} ₽</div>
                        </div>
                        
                        <div className="border-b border-border pb-2">
                          <div className="text-muted-foreground mb-1 flex items-center gap-1">
                            <Icon name="Battery" size={14} />
                            Батарея
                          </div>
                          <div className="font-semibold">{device.battery}</div>
                        </div>
                        
                        <div className="border-b border-border pb-2">
                          <div className="text-muted-foreground mb-1 flex items-center gap-1">
                            <Icon name="Zap" size={14} />
                            Мощность
                          </div>
                          <div className="font-semibold">{device.power}</div>
                        </div>
                        
                        <div className="border-b border-border pb-2">
                          <div className="text-muted-foreground mb-1 flex items-center gap-1">
                            <Icon name="Droplet" size={14} />
                            Объём бака
                          </div>
                          <div className="font-semibold">{device.capacity}</div>
                        </div>
                        
                        <div>
                          <div className="text-muted-foreground mb-1 flex items-center gap-1">
                            <Icon name="Settings" size={14} />
                            Сопротивление
                          </div>
                          <div className="font-semibold">{device.resistance}</div>
                        </div>
                      </div>

                      <Button
                        variant="outline"
                        size="sm"
                        className="w-full mt-4"
                        onClick={() => toggleCompare(device)}
                      >
                        <Icon name="X" size={16} className="mr-2" />
                        Убрать
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredDevices.map((device, index) => {
              const isSelected = compareList.find(d => d.id === device.id);
              return (
                <Card
                  key={device.id}
                  className={`group hover:border-primary/50 transition-all duration-300 overflow-hidden animate-slide-up ${
                    isSelected ? 'border-secondary neon-glow-magenta' : ''
                  }`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="relative overflow-hidden h-64">
                    <img
                      src={device.image}
                      alt={device.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent"></div>
                    <Badge className="absolute top-4 right-4 bg-accent/90 text-accent-foreground">
                      {device.category}
                    </Badge>
                  </div>
                  
                  <CardContent className="p-6">
                    <h3 className="text-2xl font-bold mb-2 text-primary font-orbitron">
                      {device.name}
                    </h3>
                    <p className="text-3xl font-black mb-4 text-foreground">
                      {device.price.toLocaleString()} ₽
                    </p>
                    
                    <div className="space-y-2 mb-4 text-sm">
                      <div className="flex justify-between items-center">
                        <span className="text-muted-foreground flex items-center gap-2">
                          <Icon name="Battery" size={16} />
                          Батарея
                        </span>
                        <span className="font-semibold">{device.battery}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-muted-foreground flex items-center gap-2">
                          <Icon name="Zap" size={16} />
                          Мощность
                        </span>
                        <span className="font-semibold">{device.power}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-muted-foreground flex items-center gap-2">
                          <Icon name="Droplet" size={16} />
                          Объём
                        </span>
                        <span className="font-semibold">{device.capacity}</span>
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <Button className="flex-1 neon-glow group-hover:animate-glow-pulse">
                        <Icon name="ShoppingBag" size={18} className="mr-2" />
                        Купить
                      </Button>
                      <Button
                        variant={isSelected ? 'secondary' : 'outline'}
                        size="icon"
                        onClick={() => toggleCompare(device)}
                        className={isSelected ? 'neon-glow-magenta' : ''}
                      >
                        <Icon name="GitCompare" size={18} />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>

      <footer className="border-t border-primary/20 mt-16 py-8 backdrop-blur-sm">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground">
            VAPE//SHOP © 2077 • Технологии будущего
          </p>
        </div>
      </footer>
    </div>
  );
}
