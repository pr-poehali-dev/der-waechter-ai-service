import Header from '@/components/Header';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { Link } from 'react-router-dom';

const Index = () => {
  const services = [
    {
      icon: 'Search',
      title: 'Краткий аудит',
      description: 'Быстрый анализ бизнес-процессов для выявления узких мест и точек роста',
    },
    {
      icon: 'TrendingUp',
      title: 'Прогнозирование',
      description: 'ИИ-модели для точного прогнозирования рисков и возможностей развития',
    },
    {
      icon: 'AlertCircle',
      title: 'Анализ ошибок',
      description: 'Глубокий анализ сбоев и ошибок с рекомендациями по их устранению',
    },
  ];

  const stats = [
    { value: '500+', label: 'Проектов' },
    { value: '98%', label: 'Точность' },
    { value: '24/7', label: 'Поддержка' },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <h1 className="text-5xl lg:text-6xl font-bold text-primary leading-tight">
                Der Wächter
              </h1>
              <p className="text-2xl text-muted-foreground">
                ИИ помощник для краткого аудита, прогнозирования и анализа ошибок
              </p>
              <p className="text-lg text-foreground/80">
                Профессиональная система аналитики, которая помогает бизнесу принимать 
                обоснованные решения на основе данных
              </p>
              <div className="flex gap-4 pt-4">
                <Button size="lg" className="bg-accent hover:bg-accent/90 text-lg px-8">
                  Начать работу
                </Button>
                <Link to="/services">
                  <Button size="lg" variant="outline" className="text-lg px-8">
                    Узнать больше
                  </Button>
                </Link>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-primary to-secondary rounded-lg p-8 text-white shadow-2xl animate-scale-in">
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <Icon name="BarChart3" size={48} className="text-accent" />
                  <div>
                    <h3 className="text-2xl font-semibold">Аналитика в реальном времени</h3>
                    <p className="text-white/80">Мониторинг показателей 24/7</p>
                  </div>
                </div>
                
                <div className="h-48 bg-white/10 rounded-lg p-4 backdrop-blur-sm">
                  <div className="h-full flex items-end justify-between gap-2">
                    {[65, 85, 72, 90, 78, 95, 88].map((height, i) => (
                      <div
                        key={i}
                        className="flex-1 bg-accent rounded-t transition-all hover:bg-accent/80"
                        style={{ height: `${height}%` }}
                      />
                    ))}
                  </div>
                </div>
                
                <div className="grid grid-cols-3 gap-4">
                  {stats.map((stat, i) => (
                    <div key={i} className="text-center">
                      <div className="text-3xl font-bold text-accent">{stat.value}</div>
                      <div className="text-sm text-white/80">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-primary mb-4">Наши услуги</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Комплексные решения для анализа и оптимизации бизнес-процессов
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <Card 
                key={i} 
                className="hover-scale transition-all duration-300 border-2 hover:border-accent hover:shadow-xl"
              >
                <CardHeader>
                  <div className="w-16 h-16 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon name={service.icon} size={32} className="text-accent" />
                  </div>
                  <CardTitle className="text-2xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link to="/services">
              <Button size="lg" variant="outline" className="text-lg px-8">
                Все услуги
                <Icon name="ArrowRight" size={20} className="ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="bg-gradient-to-r from-primary to-secondary rounded-2xl p-12 text-white text-center">
            <h2 className="text-4xl font-bold mb-4">Готовы начать?</h2>
            <p className="text-xl mb-8 text-white/90">
              Получите профессиональный анализ вашего бизнеса уже сегодня
            </p>
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-lg px-12">
              Запросить демо
            </Button>
          </div>
        </div>
      </section>

      <footer className="bg-primary text-white py-12 px-6">
        <div className="container mx-auto max-w-6xl text-center">
          <h3 className="text-2xl font-bold mb-4">Der Wächter</h3>
          <p className="text-white/80">ИИ помощник для бизнес-аналитики</p>
          <p className="text-sm text-white/60 mt-6">© 2024 Der Wächter. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
