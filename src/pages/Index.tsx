import Header from '@/components/Header';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { Link } from 'react-router-dom';
import { Badge } from '@/components/ui/badge';

const Index = () => {
  const capabilities = [
    {
      icon: 'Activity',
      title: 'Аудит в реальном времени',
      description: 'Выявление ошибок и мошенничества до нанесения ущерба',
      features: ['Сравнение с паттернами', 'Выявление отклонений', 'Проверка достоверности', 'Поиск подозрительных совпадений'],
    },
    {
      icon: 'Network',
      title: 'Карта рисков контрагентов',
      description: 'Глубокий анализ цепочек владения и финансовой устойчивости',
      features: ['Цепочки владения', 'Сомнительные схемы', 'Финансовая устойчивость', 'Прогноз по сделкам'],
    },
    {
      icon: 'Calculator',
      title: 'Симулятор налоговых последствий',
      description: 'Моделирование последствий операций до их совершения',
      features: ['Моделирование последствий', 'Оптимизационный потенциал', 'Предупреждение рисков', 'Сценарии операций'],
    },
    {
      icon: 'Wallet',
      title: 'Предиктивный кассовый менеджер',
      description: 'Прогноз денежных потоков на 30-90 дней вперёд',
      features: ['Прогноз потоков', 'Предупреждение о проблемах', 'Оптимальные даты платежей', 'Кассовые разрывы'],
    },
  ];

  const stats = [
    { value: '98%', label: 'Точность выявления рисков' },
    { value: '24/7', label: 'Мониторинг в реальном времени' },
    { value: '90 дней', label: 'Глубина прогноза' },
  ];

  const threats = [
    { icon: 'AlertTriangle', title: 'Финансовые схемы мошенничества', color: 'text-red-500' },
    { icon: 'ShieldAlert', title: 'Операционные риски', color: 'text-orange-500' },
    { icon: 'FileWarning', title: 'Ошибки в документах', color: 'text-yellow-600' },
    { icon: 'TrendingDown', title: 'Кассовые разрывы', color: 'text-blue-600' },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <section className="pt-32 pb-20 px-6 bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <Badge className="bg-accent text-white text-sm px-4 py-1">
                Предиктивная система аудита
              </Badge>
              <h1 className="text-5xl lg:text-6xl font-bold text-primary leading-tight">
                Der Wächter
              </h1>
              <p className="text-2xl font-semibold text-foreground">
                Выявляем риски до того, как они нанесут ущерб
              </p>
              <p className="text-lg text-muted-foreground">
                ИИ-платформа для предиктивного аудита: находит финансовые схемы мошенничества, 
                операционные риски и ошибки в режиме реального времени через чат с загрузкой документов
              </p>
              <div className="flex gap-4 pt-4">
                <Link to="/services">
                  <Button size="lg" className="bg-accent hover:bg-accent/90 text-lg px-8">
                    <Icon name="MessageSquare" size={20} className="mr-2" />
                    Открыть ИИ-чат
                  </Button>
                </Link>
                <Button size="lg" variant="outline" className="text-lg px-8">
                  Демо-версия
                </Button>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-primary to-secondary rounded-lg p-8 text-white shadow-2xl animate-scale-in">
              <div className="space-y-6">
                <div className="flex items-center gap-4 mb-6">
                  <Icon name="ShieldCheck" size={48} className="text-accent" />
                  <div>
                    <h3 className="text-2xl font-semibold">Защита в реальном времени</h3>
                    <p className="text-white/80">Непрерывный мониторинг угроз</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  {threats.map((threat, i) => (
                    <div key={i} className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
                      <Icon name={threat.icon} size={24} className={`${threat.color} mb-2`} />
                      <p className="text-sm text-white/90">{threat.title}</p>
                    </div>
                  ))}
                </div>
                
                <div className="grid grid-cols-3 gap-4 pt-4 border-t border-white/20">
                  {stats.map((stat, i) => (
                    <div key={i} className="text-center">
                      <div className="text-2xl font-bold text-accent">{stat.value}</div>
                      <div className="text-xs text-white/80">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-primary mb-4">Возможности платформы</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Комплексная система предиктивного анализа для защиты вашего бизнеса
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {capabilities.map((capability, i) => (
              <Card 
                key={i} 
                className="hover-scale transition-all duration-300 border-2 hover:border-accent hover:shadow-xl"
              >
                <CardHeader>
                  <div className="w-16 h-16 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon name={capability.icon} size={32} className="text-accent" />
                  </div>
                  <CardTitle className="text-2xl">{capability.title}</CardTitle>
                  <CardDescription className="text-base">
                    {capability.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {capability.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <Icon name="Check" size={18} className="text-accent mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-foreground/80">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="bg-white rounded-2xl p-8 border-2 border-primary/10">
            <div className="flex items-start gap-6">
              <div className="w-20 h-20 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0">
                <Icon name="MessageSquare" size={40} className="text-accent" />
              </div>
              <div className="flex-1">
                <h2 className="text-3xl font-bold text-primary mb-3">ИИ-чат для анализа документов</h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Загружайте финансовые документы, договоры, отчёты — ИИ-помощник проанализирует их 
                  на предмет рисков, ошибок и подозрительных схем в режиме реального времени
                </p>
                <div className="grid md:grid-cols-3 gap-4 mb-6">
                  <div className="flex items-center gap-3">
                    <Icon name="FileText" size={24} className="text-accent" />
                    <span className="text-sm">Все форматы документов</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Icon name="Zap" size={24} className="text-accent" />
                    <span className="text-sm">Анализ за секунды</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Icon name="Lock" size={24} className="text-accent" />
                    <span className="text-sm">Защищённое хранение</span>
                  </div>
                </div>
                <Link to="/services">
                  <Button size="lg" className="bg-accent hover:bg-accent/90">
                    <Icon name="Upload" size={20} className="mr-2" />
                    Загрузить документы
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="bg-gradient-to-r from-primary to-secondary rounded-2xl p-12 text-white text-center">
            <h2 className="text-4xl font-bold mb-4">Начните защищать свой бизнес прямо сейчас</h2>
            <p className="text-xl mb-8 text-white/90">
              Получите доступ к ИИ-аудиту и выявляйте риски до того, как они нанесут ущерб
            </p>
            <div className="flex gap-4 justify-center">
              <Link to="/services">
                <Button size="lg" className="bg-accent hover:bg-accent/90 text-lg px-12">
                  Попробовать бесплатно
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="bg-white/10 border-white text-white hover:bg-white/20 text-lg px-12">
                Связаться с нами
              </Button>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-primary text-white py-12 px-6">
        <div className="container mx-auto max-w-6xl text-center">
          <h3 className="text-2xl font-bold mb-4">Der Wächter</h3>
          <p className="text-white/80">Платформа предиктивного аудита с ИИ</p>
          <p className="text-sm text-white/60 mt-6">© 2024 Der Wächter. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
