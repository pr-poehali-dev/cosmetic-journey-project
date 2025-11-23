import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeRoute, setActiveRoute] = useState<number | null>(null);

  const routePoints = [
    {
      id: 1,
      title: 'АО «Невская косметика»',
      description: 'Знакомство с одним из крупнейших производителей косметики в России. Узнаем об истории компании и современных технологиях производства.',
      image: 'https://cdn.poehali.dev/projects/acd35581-be48-4c70-902a-3ae4ca017d8f/files/91635004-01b0-46ff-a0f0-bbb41b285a41.jpg',
      icon: 'Factory',
      color: 'from-purple-500 to-pink-500'
    },
    {
      id: 2,
      title: 'Изготовление помады/блеска/тональной основы',
      description: 'Наблюдаем за процессом создания декоративной косметики: от смешивания ингредиентов до финальной упаковки. Современное оборудование и контроль качества.',
      image: 'https://cdn.poehali.dev/projects/acd35581-be48-4c70-902a-3ae4ca017d8f/files/91635004-01b0-46ff-a0f0-bbb41b285a41.jpg',
      icon: 'Sparkles',
      color: 'from-pink-500 to-rose-500'
    },
    {
      id: 3,
      title: 'Her Story Gallery',
      description: 'Интерактивная выставка, посвящённая истории красоты и женщинам, изменившим индустрию косметики. Уникальная коллекция артефактов и историй.',
      image: 'https://cdn.poehali.dev/projects/acd35581-be48-4c70-902a-3ae4ca017d8f/files/ce735680-7880-45a2-87e3-e288f2f3362e.jpg',
      icon: 'Image',
      color: 'from-violet-500 to-purple-500'
    },
    {
      id: 4,
      title: 'Центр «Экспофорум»',
      description: 'Посещение крупнейшего выставочного комплекса, где проходят индустриальные выставки косметической промышленности и инновационных разработок.',
      image: 'https://cdn.poehali.dev/projects/acd35581-be48-4c70-902a-3ae4ca017d8f/files/ce735680-7880-45a2-87e3-e288f2f3362e.jpg',
      icon: 'Building2',
      color: 'from-indigo-500 to-blue-500'
    },
    {
      id: 5,
      title: 'Мастер-класс «Хайлайтер/румяна/консилер»',
      description: 'Практическое занятие по созданию собственной декоративной косметики. Под руководством профессионалов создаём уникальные продукты и изучаем технологии.',
      image: 'https://cdn.poehali.dev/projects/acd35581-be48-4c70-902a-3ae4ca017d8f/files/4cec42e4-5ecd-40fa-8dea-7e3feebac7d9.jpg',
      icon: 'Palette',
      color: 'from-orange-500 to-amber-500'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50">
      <div className="container mx-auto px-4 py-8 md:py-16">
        
        <header className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 mb-4 text-primary">
            <Icon name="Sparkles" size={32} className="animate-pulse" />
            <Icon name="Heart" size={24} className="animate-pulse delay-100" />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 bg-clip-text text-transparent">
            Путешествие в мир красоты
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Откройте для себя удивительную историю косметики и современные технологии её создания
          </p>
        </header>

        <section className="mb-20 animate-slide-up">
          <Card className="overflow-hidden border-2 border-primary/20 shadow-2xl">
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-8 text-white">
              <div className="flex items-center gap-3 mb-4">
                <Icon name="BookOpen" size={32} />
                <h2 className="text-3xl md:text-4xl font-bold">История создания косметики</h2>
              </div>
            </div>
            <CardContent className="p-8 md:p-12 space-y-6 text-lg leading-relaxed">
              <div className="prose prose-lg max-w-none">
                <p className="text-foreground/90">
                  История косметики насчитывает <span className="font-bold text-primary">тысячи лет</span>. 
                  Ещё в Древнем Египте женщины использовали натуральные красители и масла для ухода за кожей и создания макияжа. 
                  Клеопатра была известна своими косметическими рецептами на основе мёда, молока и эфирных масел.
                </p>
                
                <div className="grid md:grid-cols-3 gap-6 my-8">
                  <div className="bg-purple-100 rounded-xl p-6 transform hover:scale-105 transition-all">
                    <div className="text-4xl mb-2">🏛️</div>
                    <h3 className="font-bold text-purple-900 mb-2">Древний мир</h3>
                    <p className="text-sm text-purple-800">Египет, Рим, Греция - использование натуральных пигментов</p>
                  </div>
                  <div className="bg-pink-100 rounded-xl p-6 transform hover:scale-105 transition-all">
                    <div className="text-4xl mb-2">👑</div>
                    <h3 className="font-bold text-pink-900 mb-2">Средние века</h3>
                    <p className="text-sm text-pink-800">Развитие парфюмерии и первых косметических средств</p>
                  </div>
                  <div className="bg-orange-100 rounded-xl p-6 transform hover:scale-105 transition-all">
                    <div className="text-4xl mb-2">🔬</div>
                    <h3 className="font-bold text-orange-900 mb-2">Современность</h3>
                    <p className="text-sm text-orange-800">Научный подход и высокотехнологичное производство</p>
                  </div>
                </div>

                <p className="text-foreground/90">
                  В <span className="font-bold text-secondary">XIX веке</span> началась эра промышленного производства косметики. 
                  Появились первые крупные компании, такие как L'Oréal (1909) и Elizabeth Arden (1910). 
                  В России важную роль сыграла <span className="font-bold text-primary">фабрика «Невская косметика»</span>, 
                  основанная в 1839 году как мыловаренный завод.
                </p>

                <p className="text-foreground/90">
                  Сегодня косметическая индустрия - это синтез <span className="font-bold text-accent">науки, искусства и технологий</span>. 
                  Современные лаборатории разрабатывают инновационные формулы с использованием нанотехнологий, 
                  натуральных экстрактов и биоактивных компонентов для безопасной и эффективной косметики.
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        <section className="mb-12">
          <div className="text-center mb-12 animate-fade-in">
            <div className="inline-flex items-center gap-2 mb-4">
              <Icon name="MapPin" size={28} className="text-primary" />
              <Badge variant="outline" className="text-lg px-4 py-2">5 точек маршрута</Badge>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Маршрут экскурсии
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Увлекательное путешествие по местам создания красоты
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {routePoints.map((point, index) => (
              <Card
                key={point.id}
                className={`group cursor-pointer overflow-hidden border-2 transform transition-all duration-300 hover:scale-105 hover:shadow-2xl animate-scale-in ${
                  activeRoute === point.id ? 'border-primary shadow-xl scale-105' : 'border-transparent hover:border-primary/50'
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
                onClick={() => setActiveRoute(activeRoute === point.id ? null : point.id)}
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={point.image}
                    alt={point.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${point.color} opacity-40 group-hover:opacity-60 transition-opacity`} />
                  <div className="absolute top-4 left-4 bg-white rounded-full p-3 shadow-lg">
                    <Icon name={point.icon as any} size={24} className="text-primary" />
                  </div>
                  <div className="absolute top-4 right-4 bg-white rounded-full w-12 h-12 flex items-center justify-center shadow-lg">
                    <span className="text-xl font-bold text-primary">{point.id}</span>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
                    {point.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {point.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="text-center mt-16 animate-fade-in bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 rounded-3xl p-12 text-white">
          <Icon name="Star" size={48} className="mx-auto mb-4 animate-pulse" />
          <h3 className="text-3xl font-bold mb-4">Готовы отправиться в путешествие?</h3>
          <p className="text-xl mb-6 opacity-90 max-w-2xl mx-auto">
            Исследуйте мир косметики от древних технологий до современного производства
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Badge variant="secondary" className="text-lg px-6 py-3">
              <Icon name="Clock" size={18} className="mr-2" />
              4-5 часов
            </Badge>
            <Badge variant="secondary" className="text-lg px-6 py-3">
              <Icon name="Users" size={18} className="mr-2" />
              Группы до 20 человек
            </Badge>
            <Badge variant="secondary" className="text-lg px-6 py-3">
              <Icon name="Award" size={18} className="mr-2" />
              Сертификат участника
            </Badge>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Index;
