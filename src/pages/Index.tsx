import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-background font-source">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Icon name="GraduationCap" className="h-8 w-8 text-primary" />
              <h1 className="text-2xl font-bold text-primary">TutorHub</h1>
            </div>
            <nav className="hidden md:flex items-center gap-6">
              <a
                href="#"
                className="text-foreground hover:text-primary transition-colors"
              >
                Найти репетитора
              </a>
              <a
                href="#"
                className="text-foreground hover:text-primary transition-colors"
              >
                Стать репетитором
              </a>
              <a
                href="#"
                className="text-foreground hover:text-primary transition-colors"
              >
                О нас
              </a>
              <Button variant="outline" className="mr-2">
                Войти
              </Button>
              <Button className="bg-primary hover:bg-primary/90">
                Регистрация
              </Button>
            </nav>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Icon name="Menu" className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="text-5xl font-bold mb-6 text-foreground leading-tight">
                Найдите идеального
                <span className="text-primary block">репетитора</span>
              </h2>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Платформа для поиска квалифицированных репетиторов и размещения
                заявок на обучение. Более 5000 проверенных преподавателей готовы
                помочь вам достичь целей.
              </p>

              <Tabs defaultValue="search" className="w-full">
                <TabsList className="grid w-full grid-cols-2 mb-6">
                  <TabsTrigger
                    value="search"
                    className="flex items-center gap-2"
                  >
                    <Icon name="Search" className="h-4 w-4" />
                    Найти репетитора
                  </TabsTrigger>
                  <TabsTrigger
                    value="request"
                    className="flex items-center gap-2"
                  >
                    <Icon name="Plus" className="h-4 w-4" />
                    Разместить заявку
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="search" className="space-y-4">
                  <Card className="p-6">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Выберите предмет" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="math">Математика</SelectItem>
                          <SelectItem value="physics">Физика</SelectItem>
                          <SelectItem value="chemistry">Химия</SelectItem>
                          <SelectItem value="english">
                            Английский язык
                          </SelectItem>
                          <SelectItem value="programming">
                            Программирование
                          </SelectItem>
                        </SelectContent>
                      </Select>

                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Формат занятий" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="online">Онлайн</SelectItem>
                          <SelectItem value="offline">У репетитора</SelectItem>
                          <SelectItem value="home">На дому</SelectItem>
                        </SelectContent>
                      </Select>

                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Бюджет" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="500-1000">
                            500-1000 ₽/час
                          </SelectItem>
                          <SelectItem value="1000-2000">
                            1000-2000 ₽/час
                          </SelectItem>
                          <SelectItem value="2000-3000">
                            2000-3000 ₽/час
                          </SelectItem>
                          <SelectItem value="3000+">3000+ ₽/час</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <Button className="w-full mt-4 bg-primary hover:bg-primary/90">
                      <Icon name="Search" className="h-4 w-4 mr-2" />
                      Найти репетиторов
                    </Button>
                  </Card>
                </TabsContent>

                <TabsContent value="request" className="space-y-4">
                  <Card className="p-6">
                    <div className="space-y-4">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <label className="text-sm font-medium mb-2 block">
                            Предмет
                          </label>
                          <Select>
                            <SelectTrigger>
                              <SelectValue placeholder="Выберите предмет" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="math">Математика</SelectItem>
                              <SelectItem value="physics">Физика</SelectItem>
                              <SelectItem value="chemistry">Химия</SelectItem>
                              <SelectItem value="english">
                                Английский язык
                              </SelectItem>
                            </SelectContent>
                          </Select>
                        </div>

                        <div>
                          <label className="text-sm font-medium mb-2 block">
                            Бюджет за час
                          </label>
                          <Input placeholder="1500 ₽" />
                        </div>
                      </div>

                      <div>
                        <label className="text-sm font-medium mb-2 block">
                          Описание задачи
                        </label>
                        <Textarea placeholder="Опишите, что именно нужно изучить и какой результат хотите получить..." />
                      </div>

                      <Button className="w-full bg-secondary hover:bg-secondary/90">
                        <Icon name="Send" className="h-4 w-4 mr-2" />
                        Разместить заявку
                      </Button>
                    </div>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>

            <div className="animate-slide-up">
              <div className="relative">
                <img
                  src="/img/de9fbb9f-497e-4a66-95e2-d25e82340c16.jpg"
                  alt="Онлайн обучение с репетитором"
                  className="w-full h-auto rounded-2xl shadow-2xl"
                />
                <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-lg">
                  <div className="flex items-center gap-2">
                    <Icon name="Users" className="h-5 w-5 text-primary" />
                    <div>
                      <p className="font-semibold">5000+</p>
                      <p className="text-sm text-muted-foreground">
                        Репетиторов
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Tutors */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">Лучшие репетиторы</h3>
            <p className="text-lg text-muted-foreground">
              Проверенные преподаватели с высокими рейтингами
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                name: "Анна Петрова",
                subjects: "Математика, Физика",
                rating: "4.9",
                experience: "8 лет",
                lessons: "156",
                price: "2000",
                format: "Онлайн",
                description: "Подготовка к ЕГЭ и ОГЭ. Индивидуальный подход.",
                verified: true,
              },
              {
                name: "Дмитрий Иванов",
                subjects: "Английский язык",
                rating: "4.8",
                experience: "5 лет",
                lessons: "89",
                price: "1500",
                format: "Онлайн",
                description:
                  "Подготовка к IELTS и TOEFL. Разговорная практика.",
                verified: true,
              },
              {
                name: "Светлана Козлова",
                subjects: "Химия, Биология",
                rating: "5.0",
                experience: "12 лет",
                lessons: "234",
                price: "2500",
                format: "Онлайн",
                description:
                  "Преподаватель университета. Подготовка к медвузам.",
                verified: true,
              },
              {
                name: "Мария Сидорова",
                subjects: "Программирование",
                rating: "4.7",
                experience: "6 лет",
                lessons: "127",
                price: "3000",
                format: "Онлайн",
                description:
                  "Python, JavaScript, веб-разработка. От основ до Senior.",
                verified: false,
              },
              {
                name: "Алексей Новиков",
                subjects: "Физика, Математика",
                rating: "4.9",
                experience: "10 лет",
                lessons: "198",
                price: "2200",
                format: "Онлайн",
                description:
                  "Кандидат физ.-мат. наук. Подготовка к олимпиадам.",
                verified: true,
              },
              {
                name: "Елена Морозова",
                subjects: "Русский язык",
                rating: "4.8",
                experience: "7 лет",
                lessons: "145",
                price: "1800",
                format: "Онлайн",
                description: "Подготовка к ЕГЭ и ОГЭ. Литература и сочинения.",
                verified: true,
              },
            ].map((tutor, i) => (
              <Card
                key={i}
                className="hover-scale cursor-pointer transition-all duration-300 hover:shadow-lg group"
              >
                <CardHeader className="pb-3">
                  <div className="flex items-start gap-3">
                    <div className="relative">
                      <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full flex items-center justify-center">
                        <Icon name="User" className="h-8 w-8 text-primary" />
                      </div>
                      {tutor.verified && (
                        <div className="absolute -top-1 -right-1 w-5 h-5 bg-secondary rounded-full flex items-center justify-center">
                          <Icon name="Check" className="h-3 w-3 text-white" />
                        </div>
                      )}
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-lg group-hover:text-primary transition-colors">
                        {tutor.name}
                      </CardTitle>
                      <CardDescription className="text-sm">
                        {tutor.subjects}
                      </CardDescription>
                      <div className="flex items-center gap-1 mt-1">
                        <Icon
                          name="Star"
                          className="h-4 w-4 text-yellow-400 fill-current"
                        />
                        <span className="text-sm font-medium">
                          {tutor.rating}
                        </span>
                        <span className="text-xs text-muted-foreground">
                          ({tutor.lessons} отзывов)
                        </span>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-primary text-lg">
                        {tutor.price} ₽
                      </p>
                      <p className="text-xs text-muted-foreground">за час</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-sm text-muted-foreground mb-3">
                    {tutor.description}
                  </p>
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <div className="flex items-center gap-3">
                      <span className="flex items-center gap-1">
                        <Icon name="Clock" className="h-3 w-3" />
                        {tutor.experience} опыта
                      </span>
                      <span className="flex items-center gap-1">
                        <Icon name="Video" className="h-3 w-3" />
                        {tutor.format}
                      </span>
                    </div>
                    <Badge variant="outline" className="text-xs">
                      {tutor.lessons} уроков
                    </Badge>
                  </div>
                  <Button className="w-full mt-4 bg-primary hover:bg-primary/90 group-hover:bg-secondary group-hover:text-secondary-foreground transition-all">
                    <Icon name="MessageCircle" className="h-4 w-4 mr-2" />
                    Написать
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button
              variant="outline"
              size="lg"
              className="hover:bg-primary hover:text-primary-foreground"
            >
              Показать всех репетиторов
              <Icon name="ArrowRight" className="h-4 w-4 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Video Call & Chat Features */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">Обучайтесь онлайн</h3>
            <p className="text-lg text-muted-foreground">
              Современные инструменты для эффективного обучения
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-8 hover-scale transition-all duration-300">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                  <Icon name="Video" className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold">Видеосвязь HD</h4>
                  <p className="text-muted-foreground">
                    Качественные уроки онлайн
                  </p>
                </div>
              </div>
              <ul className="space-y-3 text-sm">
                <li className="flex items-center gap-2">
                  <Icon name="Check" className="h-4 w-4 text-secondary" />
                  Запись уроков для повторения
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Check" className="h-4 w-4 text-secondary" />
                  Демонстрация экрана и доска
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Check" className="h-4 w-4 text-secondary" />
                  Стабильное соединение без прерываний
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Check" className="h-4 w-4 text-secondary" />
                  Поддержка всех устройств
                </li>
              </ul>
            </Card>

            <Card className="p-8 hover-scale transition-all duration-300">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center">
                  <Icon
                    name="MessageCircle"
                    className="h-8 w-8 text-secondary"
                  />
                </div>
                <div>
                  <h4 className="text-xl font-semibold">Чат с репетитором</h4>
                  <p className="text-muted-foreground">Мгновенная связь 24/7</p>
                </div>
              </div>
              <ul className="space-y-3 text-sm">
                <li className="flex items-center gap-2">
                  <Icon name="Check" className="h-4 w-4 text-secondary" />
                  Обмен файлами и документами
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Check" className="h-4 w-4 text-secondary" />
                  Отправка домашних заданий
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Check" className="h-4 w-4 text-secondary" />
                  Поддержка между занятиями
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Check" className="h-4 w-4 text-secondary" />
                  Уведомления о расписании
                </li>
              </ul>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              <Icon name="Play" className="h-4 w-4 mr-2" />
              Попробовать бесплатно
            </Button>
          </div>
        </div>
      </section>

      {/* Library Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">Библиотека знаний</h3>
            <p className="text-lg text-muted-foreground">
              Полезные материалы для учебы и преподавания
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                category: "Математика",
                icon: "Calculator",
                items: "156 материалов",
                color: "bg-blue-500",
              },
              {
                category: "Физика",
                icon: "Zap",
                items: "89 материалов",
                color: "bg-purple-500",
              },
              {
                category: "Языки",
                icon: "Languages",
                items: "234 материала",
                color: "bg-green-500",
              },
              {
                category: "Программирование",
                icon: "Code",
                items: "78 материалов",
                color: "bg-orange-500",
              },
            ].map((item, i) => (
              <Card
                key={i}
                className="hover-scale cursor-pointer transition-all duration-300 group"
              >
                <CardContent className="p-6 text-center">
                  <div
                    className={`w-16 h-16 ${item.color} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}
                  >
                    <Icon
                      name={item.icon as any}
                      className="h-8 w-8 text-white"
                    />
                  </div>
                  <h4 className="font-semibold text-lg mb-2">
                    {item.category}
                  </h4>
                  <p className="text-sm text-muted-foreground mb-4">
                    {item.items}
                  </p>
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full group-hover:bg-primary group-hover:text-primary-foreground"
                  >
                    <Icon name="Book" className="h-4 w-4 mr-2" />
                    Открыть
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 grid md:grid-cols-2 gap-8">
            <Card className="p-6">
              <h4 className="font-semibold text-lg mb-4 flex items-center gap-2">
                <Icon name="Users" className="h-5 w-5 text-primary" />
                Для учеников
              </h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <Icon name="BookOpen" className="h-4 w-4 text-secondary" />
                  Учебники и пособия
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="FileText" className="h-4 w-4 text-secondary" />
                  Тесты и контрольные работы
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Target" className="h-4 w-4 text-secondary" />
                  Подготовка к экзаменам
                </li>
              </ul>
            </Card>

            <Card className="p-6">
              <h4 className="font-semibold text-lg mb-4 flex items-center gap-2">
                <Icon name="GraduationCap" className="h-5 w-5 text-primary" />
                Для репетиторов
              </h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <Icon
                    name="Presentation"
                    className="h-4 w-4 text-secondary"
                  />
                  Методические материалы
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Lightbulb" className="h-4 w-4 text-secondary" />
                  Инновационные подходы
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="TrendingUp" className="h-4 w-4 text-secondary" />
                  Профессиональное развитие
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center text-white">
            <div className="animate-fade-in">
              <div className="text-4xl font-bold mb-2">5000+</div>
              <p className="opacity-90">Репетиторов</p>
            </div>
            <div className="animate-fade-in">
              <div className="text-4xl font-bold mb-2">12000+</div>
              <p className="opacity-90">Довольных учеников</p>
            </div>
            <div className="animate-fade-in">
              <div className="text-4xl font-bold mb-2">50+</div>
              <p className="opacity-90">Предметов</p>
            </div>
            <div className="animate-fade-in">
              <div className="text-4xl font-bold mb-2">4.8</div>
              <p className="opacity-90">Средний рейтинг</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold mb-4">Готовы начать обучение?</h3>
          <p className="text-xl mb-8 opacity-90">
            Присоединяйтесь к тысячам учеников, которые уже достигли своих целей
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-primary">
              Найти репетитора
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
            >
              Стать репетитором
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="GraduationCap" className="h-6 w-6 text-primary" />
                <h4 className="font-bold text-lg">TutorHub</h4>
              </div>
              <p className="text-muted-foreground">
                Платформа для поиска репетиторов и размещения заявок на обучение
              </p>
            </div>

            <div>
              <h5 className="font-semibold mb-4">Для учеников</h5>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Найти репетитора
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Разместить заявку
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Отзывы
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h5 className="font-semibold mb-4">Для репетиторов</h5>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Стать репетитором
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Личный кабинет
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Помощь
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h5 className="font-semibold mb-4">Связь с нами</h5>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-center gap-2">
                  <Icon name="Mail" className="h-4 w-4" />
                  info@tutorhub.ru
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Phone" className="h-4 w-4" />
                  +7 (495) 123-45-67
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t mt-8 pt-8 text-center text-muted-foreground">
            <p>&copy; 2024 TutorHub. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
