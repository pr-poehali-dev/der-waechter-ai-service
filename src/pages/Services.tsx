import Header from '@/components/Header';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { Badge } from '@/components/ui/badge';

const Services = () => {
  const services = [
    {
      icon: 'Search',
      title: 'Краткий аудит бизнес-процессов',
      description: 'Комплексный анализ текущего состояния вашего бизнеса с использованием ИИ-технологий',
      features: [
        'Анализ эффективности процессов',
        'Выявление узких мест',
        'Оценка рисков',
        'Рекомендации по оптимизации',
      ],
      duration: '3-5 дней',
      badge: 'Популярно',
    },
    {
      icon: 'TrendingUp',
      title: 'Прогнозирование и моделирование',
      description: 'Точные прогнозы развития бизнеса на основе машинного обучения и больших данных',
      features: [
        'Прогноз спроса и продаж',
        'Финансовое моделирование',
        'Анализ рыночных трендов',
        'Сценарное планирование',
      ],
      duration: '1-2 недели',
      badge: 'Премиум',
    },
    {
      icon: 'AlertCircle',
      title: 'Анализ ошибок и инцидентов',
      description: 'Глубокий анализ сбоев и ошибок с детальными рекомендациями по устранению',
      features: [
        'Автоматическое выявление аномалий',
        'Анализ корневых причин',
        'Система раннего предупреждения',
        'План предотвращения',
      ],
      duration: '1-3 дня',
      badge: 'Быстро',
    },
  ];

  const benefits = [
    {
      icon: 'Zap',
      title: 'Скорость',
      description: 'Анализ данных в 10 раз быстрее традиционных методов',
    },
    {
      icon: 'Shield',
      title: 'Надёжность',
      description: 'Точность прогнозов до 98% благодаря машинному обучению',
    },
    {
      icon: 'Clock',
      title: 'Экономия',
      description: 'Сокращение затрат на аналитику до 60%',
    },
    {
      icon: 'Users',
      title: 'Поддержка',
      description: 'Команда экспертов на связи 24/7',
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <section className="pt-32 pb-20 px-6 bg-gradient-to-b from-muted/30 to-background">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-5xl font-bold text-primary mb-6">Наши услуги</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Профессиональные решения для анализа и оптимизации бизнеса 
              с использованием искусственного интеллекта
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-20">
            {services.map((service, i) => (
              <Card 
                key={i} 
                className="hover-scale transition-all duration-300 border-2 hover:border-accent hover:shadow-2xl relative overflow-hidden"
              >
                {service.badge && (
                  <Badge className="absolute top-4 right-4 bg-accent text-white">
                    {service.badge}
                  </Badge>
                )}
                <CardHeader>
                  <div className="w-16 h-16 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon name={service.icon} size={32} className="text-accent" />
                  </div>
                  <CardTitle className="text-2xl mb-2">{service.title}</CardTitle>
                  <CardDescription className="text-base">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h4 className="font-semibold mb-3 text-foreground">Включает:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <Icon name="Check" size={18} className="text-accent mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-foreground/80">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="pt-4 border-t">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                      <Icon name="Clock" size={16} />
                      <span>Срок: {service.duration}</span>
                    </div>
                    <Button className="w-full bg-accent hover:bg-accent/90">
                      Заказать услугу
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-primary mb-4">Почему выбирают нас</h2>
            <p className="text-lg text-muted-foreground">
              Преимущества работы с Der Wächter
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, i) => (
              <div 
                key={i} 
                className="bg-white p-6 rounded-lg text-center hover-scale transition-all duration-300 border-2 border-transparent hover:border-accent"
              >
                <div className="w-14 h-14 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name={benefit.icon} size={28} className="text-accent" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-gradient-to-r from-primary to-secondary rounded-2xl p-12 text-white text-center">
            <Icon name="MessageSquare" size={48} className="mx-auto mb-6 text-accent" />
            <h2 className="text-4xl font-bold mb-4">Нужна консультация?</h2>
            <p className="text-xl mb-8 text-white/90">
              Свяжитесь с нами, и наши эксперты помогут подобрать оптимальное решение
            </p>
            <div className="flex gap-4 justify-center">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-lg px-12">
                <Icon name="Phone" size={20} className="mr-2" />
                Связаться с нами
              </Button>
              <Button size="lg" variant="outline" className="bg-white/10 border-white text-white hover:bg-white/20 text-lg px-12">
                <Icon name="Mail" size={20} className="mr-2" />
                Написать
              </Button>
            </div>
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

export default Services;
