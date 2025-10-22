import { useState } from 'react';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Input } from './ui/input';
import { ScrollArea } from './ui/scroll-area';
import Icon from './ui/icon';
import { Badge } from './ui/badge';

interface Message {
  id: number;
  type: 'user' | 'ai';
  content: string;
  timestamp: Date;
  file?: string;
  risk?: 'low' | 'medium' | 'high';
}

const AIChat = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      type: 'ai',
      content: 'Здравствуйте! Я Der Wächter — ваш ИИ-помощник для предиктивного аудита. Загрузите документы для анализа или задайте вопрос.',
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage: Message = {
      id: messages.length + 1,
      type: 'user',
      content: input,
      timestamp: new Date(),
    };

    setMessages([...messages, userMessage]);
    setInput('');
    setIsAnalyzing(true);

    setTimeout(() => {
      const aiResponse: Message = {
        id: messages.length + 2,
        type: 'ai',
        content: 'Анализирую ваш запрос... Для более точного анализа загрузите финансовые документы, договоры или отчёты.',
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, aiResponse]);
      setIsAnalyzing(false);
    }, 1500);
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const userMessage: Message = {
      id: messages.length + 1,
      type: 'user',
      content: `Загрузил документ для анализа`,
      file: file.name,
      timestamp: new Date(),
    };

    setMessages([...messages, userMessage]);
    setIsAnalyzing(true);

    setTimeout(() => {
      const aiResponse: Message = {
        id: messages.length + 2,
        type: 'ai',
        content: `Анализ документа "${file.name}" завершён. Обнаружены следующие риски:\n\n• Несоответствие в расчётах НДС (строка 47)\n• Подозрительное совпадение: ИНН поставщика уже встречался в другом договоре\n• Завышенная цена на 23% относительно рыночной`,
        timestamp: new Date(),
        risk: 'high',
      };
      setMessages((prev) => [...prev, aiResponse]);
      setIsAnalyzing(false);
    }, 2500);
  };

  const exampleQuestions = [
    'Проверить договор на риски',
    'Спрогнозировать кассовый разрыв',
    'Оценить контрагента',
  ];

  return (
    <Card className="w-full max-w-4xl mx-auto shadow-2xl border-2">
      <CardHeader className="bg-gradient-to-r from-primary to-secondary text-white">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center">
              <Icon name="Brain" size={24} className="text-white" />
            </div>
            <div>
              <CardTitle className="text-2xl">ИИ-Аудитор Der Wächter</CardTitle>
              <p className="text-sm text-white/80">Предиктивный анализ документов</p>
            </div>
          </div>
          <Badge className="bg-green-500 text-white">
            <Icon name="Activity" size={14} className="mr-1" />
            Онлайн
          </Badge>
        </div>
      </CardHeader>
      
      <CardContent className="p-0">
        <ScrollArea className="h-[500px] p-6">
          <div className="space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] rounded-lg p-4 ${
                    message.type === 'user'
                      ? 'bg-accent text-white'
                      : 'bg-muted'
                  }`}
                >
                  {message.file && (
                    <div className="flex items-center gap-2 mb-2 pb-2 border-b border-white/20">
                      <Icon name="FileText" size={16} />
                      <span className="text-sm font-medium">{message.file}</span>
                    </div>
                  )}
                  <p className="text-sm whitespace-pre-line">{message.content}</p>
                  {message.risk && (
                    <Badge
                      className={`mt-2 ${
                        message.risk === 'high'
                          ? 'bg-red-500'
                          : message.risk === 'medium'
                          ? 'bg-yellow-500'
                          : 'bg-green-500'
                      } text-white`}
                    >
                      <Icon name="AlertTriangle" size={12} className="mr-1" />
                      Риск: {message.risk === 'high' ? 'Высокий' : message.risk === 'medium' ? 'Средний' : 'Низкий'}
                    </Badge>
                  )}
                  <p className="text-xs opacity-60 mt-2">
                    {message.timestamp.toLocaleTimeString('ru-RU', {
                      hour: '2-digit',
                      minute: '2-digit',
                    })}
                  </p>
                </div>
              </div>
            ))}
            
            {isAnalyzing && (
              <div className="flex justify-start">
                <div className="bg-muted rounded-lg p-4">
                  <div className="flex items-center gap-2">
                    <div className="flex gap-1">
                      <div className="w-2 h-2 bg-accent rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                      <div className="w-2 h-2 bg-accent rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                      <div className="w-2 h-2 bg-accent rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                    </div>
                    <span className="text-sm text-muted-foreground">Анализирую...</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </ScrollArea>

        <div className="border-t p-4 bg-muted/30">
          <div className="flex gap-2 mb-3">
            {exampleQuestions.map((question, i) => (
              <Button
                key={i}
                variant="outline"
                size="sm"
                onClick={() => setInput(question)}
                className="text-xs"
              >
                {question}
              </Button>
            ))}
          </div>
          
          <div className="flex gap-2">
            <label className="cursor-pointer">
              <input
                type="file"
                className="hidden"
                onChange={handleFileUpload}
                accept=".pdf,.doc,.docx,.xls,.xlsx,.txt"
              />
              <Button variant="outline" size="icon" type="button">
                <Icon name="Paperclip" size={20} />
              </Button>
            </label>
            
            <Input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Задайте вопрос или опишите задачу..."
              className="flex-1"
            />
            
            <Button onClick={handleSend} disabled={!input.trim()} className="bg-accent hover:bg-accent/90">
              <Icon name="Send" size={20} />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default AIChat;
