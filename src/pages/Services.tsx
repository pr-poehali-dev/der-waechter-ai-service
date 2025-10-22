import Header from '@/components/Header';
import AIChat from '@/components/AIChat';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const Services = () => {
  const riskMapData = [
    { name: 'ООО "Альфа-Строй"', risk: 'high', issues: ['Цепочка фирм-однодневок', 'Сомнительные операции'] },
    { name: 'АО "БетаТех"', risk: 'medium', issues: ['Задолженность по налогам', 'Низкая ликвидность'] },
    { name: 'ИП Иванов И.И.', risk: 'low', issues: ['Стабильная история', 'Прозрачная отчётность'] },
  ];

  const taxSimulation = [
    { scenario: 'Текущая структура', tax: '2.4 млн ₽', optimization: '0%' },
    { scenario: 'Оптимизация 1', tax: '1.9 млн ₽', optimization: '21%' },
    { scenario: 'Оптимизация 2', tax: '1.6 млн ₽', optimization: '33%', risk: 'Средний риск' },
  ];

  const cashFlowForecast = [
    { week: 'Неделя 1', inflow: 850, outflow: 720, balance: 1130 },
    { week: 'Неделя 2', inflow: 920, outflow: 1050, balance: 1000 },
    { week: 'Неделя 3', inflow: 680, outflow: 940, balance: 740 },
    { week: 'Неделя 4', inflow: 1200, outflow: 880, balance: 1060 },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <section className="pt-32 pb-12 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-primary mb-4">Платформа предиктивного аудита</h1>
            <p className="text-xl text-muted-foreground">
              Загрузите документы и получите мгновенный анализ рисков
            </p>
          </div>

          <div className="mb-16">
            <AIChat />
          </div>

          <Tabs defaultValue="audit" className="w-full">
            <TabsList className="grid w-full grid-cols-4 mb-8">
              <TabsTrigger value="audit">
                <Icon name="Activity" size={18} className="mr-2" />
                Аудит
              </TabsTrigger>
              <TabsTrigger value="risks">
                <Icon name="Network" size={18} className="mr-2" />
                Карта рисков
              </TabsTrigger>
              <TabsTrigger value="tax">
                <Icon name="Calculator" size={18} className="mr-2" />
                Налоги
              </TabsTrigger>
              <TabsTrigger value="cash">
                <Icon name="Wallet" size={18} className="mr-2" />
                Денежные потоки
              </TabsTrigger>
            </TabsList>

            <TabsContent value="audit" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <Icon name="Activity" size={28} className="text-accent" />
                    Аудит в реальном времени
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <h3 className="font-semibold text-lg">Что проверяем:</h3>
                      <ul className="space-y-3">
                        <li className="flex items-start gap-3">
                          <Icon name="Check" size={20} className="text-accent mt-0.5" />
                          <div>
                            <p className="font-medium">Сравнение с паттернами</p>
                            <p className="text-sm text-muted-foreground">Операции сверяются с историческими данными</p>
                          </div>
                        </li>
                        <li className="flex items-start gap-3">
                          <Icon name="Check" size={20} className="text-accent mt-0.5" />
                          <div>
                            <p className="font-medium">Выявление отклонений</p>
                            <p className="text-sm text-muted-foreground">Автоматическое обнаружение аномалий в расчётах</p>
                          </div>
                        </li>
                        <li className="flex items-start gap-3">
                          <Icon name="Check" size={20} className="text-accent mt-0.5" />
                          <div>
                            <p className="font-medium">Проверка достоверности</p>
                            <p className="text-sm text-muted-foreground">Валидация данных и документов</p>
                          </div>
                        </li>
                        <li className="flex items-start gap-3">
                          <Icon name="Check" size={20} className="text-accent mt-0.5" />
                          <div>
                            <p className="font-medium">Поиск совпадений</p>
                            <p className="text-sm text-muted-foreground">ИНН, адреса, банковские счета, завышенные расходы</p>
                          </div>
                        </li>
                      </ul>
                    </div>
                    
                    <div className="bg-muted/50 rounded-lg p-6">
                      <h3 className="font-semibold text-lg mb-4">Пример обнаруженных рисков:</h3>
                      <div className="space-y-3">
                        <div className="bg-red-50 border-l-4 border-red-500 p-3 rounded">
                          <div className="flex items-center gap-2 mb-1">
                            <Icon name="AlertTriangle" size={16} className="text-red-500" />
                            <span className="font-medium text-red-700">Высокий риск</span>
                          </div>
                          <p className="text-sm">Один ИНН у трёх разных поставщиков</p>
                        </div>
                        <div className="bg-yellow-50 border-l-4 border-yellow-500 p-3 rounded">
                          <div className="flex items-center gap-2 mb-1">
                            <Icon name="AlertCircle" size={16} className="text-yellow-600" />
                            <span className="font-medium text-yellow-700">Средний риск</span>
                          </div>
                          <p className="text-sm">Завышение цены на 34% выше рынка</p>
                        </div>
                        <div className="bg-blue-50 border-l-4 border-blue-500 p-3 rounded">
                          <div className="flex items-center gap-2 mb-1">
                            <Icon name="Info" size={16} className="text-blue-500" />
                            <span className="font-medium text-blue-700">Рекомендация</span>
                          </div>
                          <p className="text-sm">Ошибка в расчёте НДС, строка 47</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="risks" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <Icon name="Network" size={28} className="text-accent" />
                    Карта рисков контрагентов
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {riskMapData.map((item, i) => (
                      <div
                        key={i}
                        className={`border-2 rounded-lg p-4 ${
                          item.risk === 'high'
                            ? 'border-red-300 bg-red-50'
                            : item.risk === 'medium'
                            ? 'border-yellow-300 bg-yellow-50'
                            : 'border-green-300 bg-green-50'
                        }`}
                      >
                        <div className="flex items-start justify-between mb-3">
                          <div>
                            <h3 className="font-semibold text-lg">{item.name}</h3>
                            <div className="flex items-center gap-2 mt-1">
                              <span
                                className={`text-xs px-2 py-1 rounded ${
                                  item.risk === 'high'
                                    ? 'bg-red-500 text-white'
                                    : item.risk === 'medium'
                                    ? 'bg-yellow-500 text-white'
                                    : 'bg-green-500 text-white'
                                }`}
                              >
                                {item.risk === 'high' ? 'Высокий риск' : item.risk === 'medium' ? 'Средний риск' : 'Низкий риск'}
                              </span>
                            </div>
                          </div>
                          <Icon
                            name={item.risk === 'high' ? 'XCircle' : item.risk === 'medium' ? 'AlertCircle' : 'CheckCircle'}
                            size={32}
                            className={
                              item.risk === 'high'
                                ? 'text-red-500'
                                : item.risk === 'medium'
                                ? 'text-yellow-600'
                                : 'text-green-500'
                            }
                          />
                        </div>
                        <ul className="space-y-1">
                          {item.issues.map((issue, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-sm">
                              <Icon name="Minus" size={16} className="mt-0.5" />
                              <span>{issue}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="tax" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <Icon name="Calculator" size={28} className="text-accent" />
                    Симулятор налоговых последствий
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {taxSimulation.map((scenario, i) => (
                      <div
                        key={i}
                        className={`border-2 rounded-lg p-4 ${i === 0 ? 'border-primary/30' : 'border-accent/30 bg-accent/5'}`}
                      >
                        <div className="flex items-center justify-between">
                          <div>
                            <h3 className="font-semibold text-lg">{scenario.scenario}</h3>
                            {scenario.risk && (
                              <span className="text-xs text-yellow-600 mt-1 block">{scenario.risk}</span>
                            )}
                          </div>
                          <div className="text-right">
                            <p className="text-2xl font-bold text-primary">{scenario.tax}</p>
                            <p className={`text-sm ${i === 0 ? 'text-muted-foreground' : 'text-green-600 font-semibold'}`}>
                              {i === 0 ? 'Базовый' : `Экономия ${scenario.optimization}`}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 bg-blue-50 border-l-4 border-blue-500 p-4 rounded">
                    <div className="flex items-start gap-3">
                      <Icon name="Info" size={20} className="text-blue-500 mt-0.5" />
                      <div>
                        <p className="font-medium text-blue-900">Рекомендация</p>
                        <p className="text-sm text-blue-800 mt-1">
                          Оптимизация 1 обеспечивает экономию 21% при минимальных рисках. Предлагаем внедрить до конца квартала.
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="cash" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <Icon name="Wallet" size={28} className="text-accent" />
                    Предиктивный кассовый менеджер
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-6">Прогноз денежных потоков на 30 дней</p>
                  <div className="space-y-3">
                    {cashFlowForecast.map((item, i) => (
                      <div key={i} className="border rounded-lg p-4">
                        <div className="flex items-center justify-between mb-3">
                          <h3 className="font-semibold">{item.week}</h3>
                          <div className={`text-lg font-bold ${item.balance < 800 ? 'text-red-500' : 'text-green-600'}`}>
                            {item.balance} тыс. ₽
                          </div>
                        </div>
                        <div className="grid grid-cols-2 gap-4 text-sm">
                          <div className="flex items-center gap-2">
                            <Icon name="ArrowDownCircle" size={16} className="text-green-500" />
                            <span>Поступления: {item.inflow} тыс.</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Icon name="ArrowUpCircle" size={16} className="text-red-500" />
                            <span>Расходы: {item.outflow} тыс.</span>
                          </div>
                        </div>
                        {item.balance < 800 && (
                          <div className="mt-3 bg-yellow-50 border-l-4 border-yellow-500 p-2 rounded">
                            <div className="flex items-center gap-2">
                              <Icon name="AlertTriangle" size={16} className="text-yellow-600" />
                              <span className="text-sm text-yellow-700">Предупреждение о кассовом разрыве</span>
                            </div>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 bg-green-50 border-l-4 border-green-500 p-4 rounded">
                    <div className="flex items-start gap-3">
                      <Icon name="CheckCircle" size={20} className="text-green-500 mt-0.5" />
                      <div>
                        <p className="font-medium text-green-900">Оптимальные даты платежей</p>
                        <p className="text-sm text-green-800 mt-1">
                          Рекомендуем перенести платёж ООО "Альфа" (320 тыс.) с недели 2 на неделю 4 для предотвращения кассового разрыва.
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <footer className="bg-primary text-white py-12 px-6 mt-20">
        <div className="container mx-auto max-w-6xl text-center">
          <h3 className="text-2xl font-bold mb-4">Der Wächter</h3>
          <p className="text-white/80">Платформа предиктивного аудита с ИИ</p>
          <p className="text-sm text-white/60 mt-6">© 2024 Der Wächter. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Services;
